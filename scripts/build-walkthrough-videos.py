"""Encode the approved stills and scripts sequentially on macOS, using one thread.

Requires installed ffmpeg/ffprobe and macOS say. Does not install dependencies.
Working audio and segment files are removed after the public MP4/VTT are verified.
"""
import json
import math
import shutil
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public/videos'
FFMPEG = shutil.which('ffmpeg')
FFPROBE = shutil.which('ffprobe')
if not FFMPEG or not FFPROBE:
    raise SystemExit('Installed ffmpeg and ffprobe are required.')

def run(command):
    subprocess.run(command, check=True, stdout=subprocess.DEVNULL)

def seconds(path):
    result = subprocess.check_output([FFPROBE, '-v', 'error', '-show_entries', 'format=duration', '-of', 'default=nw=1:nk=1', str(path)], text=True)
    return float(result.strip())

def timestamp(value):
    milliseconds = round(value * 1000)
    hours, remainder = divmod(milliseconds, 3600000)
    minutes, remainder = divmod(remainder, 60000)
    secs, ms = divmod(remainder, 1000)
    return f'{hours:02}:{minutes:02}:{secs:02}.{ms:03}'

OUT.mkdir(exist_ok=True)
receipts = []
for project in ['scented-realms', 'futureproof-terrain']:
    config = json.loads((ROOT / f'docs/walkthrough-{project}.json').read_text())
    paragraphs = (ROOT / config['script']).read_text().strip().split('\n\n')
    if len(paragraphs) != len(config['beats']):
        raise SystemExit('Narration and visual beats must match.')
    with tempfile.TemporaryDirectory(prefix='guildframe-narration-') as temporary:
        temp = Path(temporary)
        segments, captions, offset = [], ['WEBVTT', ''], 0.0
        for index, paragraph in enumerate(paragraphs):
            text = temp / f'beat-{index}.txt'
            text.write_text(paragraph)
            audio = temp / f'beat-{index}.aiff'
            run(['/usr/bin/nice', '-n', '15', '/usr/bin/say', '-v', 'Samantha', '-r', '150', '-f', str(text), '-o', str(audio)])
            duration = seconds(audio) + 0.4
            segment = temp / f'beat-{index}.mp4'
            # The complete real campaign graphic stays visible. Captions carry
            # the explanation without hiding any original product information.
            run(['/usr/bin/nice', '-n', '15', FFMPEG, '-hide_banner', '-loglevel', 'error', '-nostdin', '-y', '-threads', '1', '-filter_threads', '1', '-loop', '1', '-framerate', '8', '-i', str(ROOT / config['source']), '-i', str(audio), '-t', str(duration), '-vf', 'scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2:color=0x173f40,setsar=1', '-af', 'apad', '-c:v', 'libx264', '-threads', '1', '-preset', 'ultrafast', '-tune', 'stillimage', '-crf', '24', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '96k', '-ar', '44100', str(segment)])
            actual = seconds(segment)
            words = paragraph.split()
            chunks = [' '.join(words[start:start + 12]) for start in range(0, len(words), 12)]
            speech_duration = seconds(audio)
            for chunk_index, chunk in enumerate(chunks):
                start = offset + speech_duration * chunk_index / len(chunks)
                end = offset + speech_duration * (chunk_index + 1) / len(chunks)
                captions.extend([f'{timestamp(start)} --> {timestamp(end)}', chunk, ''])
            config['beats'][index]['start'] = round(offset, 3)
            offset += actual
            config['beats'][index]['end'] = round(offset, 3)
            segments.append(segment)
            print(f'{project}: narrated section {index + 1}/{len(paragraphs)} encoded', flush=True)
        listing = temp / 'segments.txt'
        listing.write_text(''.join(f"file '{segment}'\n" for segment in segments))
        target = OUT / f'{project}-walkthrough.mp4'
        run([FFMPEG, '-hide_banner', '-loglevel', 'error', '-nostdin', '-y', '-f', 'concat', '-safe', '0', '-i', str(listing), '-c', 'copy', '-movflags', '+faststart', '-metadata', 'comment=Synthetic narration of approved Guildframe campaign presentation notes', str(target)])
        (OUT / f'{project}-walkthrough.vtt').write_text('\n'.join(captions))
        config['durationSeconds'] = round(seconds(target), 3)
        config['timingStatus'] = 'Aligned to encoded narration sections. Caption cues divide each spoken paragraph into short reading intervals.'
        config['narration'] = 'macOS Samantha synthetic narration, 150 words per minute'
        (ROOT / f'docs/walkthrough-{project}.json').write_text(json.dumps(config, indent=2) + '\n')
        receipts.append({'file':str(target.relative_to(ROOT)), 'bytes':target.stat().st_size, 'duration':config['durationSeconds']})
print(json.dumps(receipts, indent=2))
