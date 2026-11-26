import type {GuideLayer} from "../guide-visual-layer";

export const layer: GuideLayer = {
  updated: "2026-11-26",
  sections: {
    "cheat-sheet": {
      paragraphs: [
        "Kickstarter and Gamefound each publish image and video specs in their Help Centers, but they spread them across several articles. We checked each article on November 25, 2026, and put the numbers in one place.",
        "The first two columns are what each platform publishes. Where a platform publishes nothing for an asset, the table says so.",
        "The last column is Guildframe's practice: the sizes we export when we build a campaign page, which sit at or above every published minimum.",
        "Use the table as your export list, then read the sections below for the reasons behind each number. If a platform changes its guidance, its own Help Center wins over this page.",
      ],
      takeaway: "Kickstarter image sizes and Gamefound image sizes differ for almost every asset. Export at or above each platform's published minimum, and recheck its Help Center first.",
    },
    "project-image": {
      paragraphs: [
        "People searching for a Kickstarter banner size are usually looking for the project image, because Kickstarter has no separate banner field. Kickstarter recommends 1024 × 576 pixels at a 16:9 ratio, accepts most major formats and allows files up to 200 MB.",
        "Kickstarter also recommends avoiding banners, badges and extra text on that image. So we let the box, the miniatures or the spread of cards carry it, and keep the game's name for the title field. A busy image becomes unreadable at thumbnail size in search results and on the app.",
        "We export the project image at 1920 × 1080 pixels. It keeps the same 16:9 ratio Kickstarter recommends, with extra pixels for sharp display on high resolution screens. If you also use a Spotlight page after funding, Kickstarter displays that image at 16:9 and resizes it to a maximum of 700 × 800 pixels.",
      ],
      takeaway: "The Kickstarter banner size question has one answer: a clean 16:9 project image, 1024 × 576 recommended, with no text on it.",
    },
    "story-images": {
      paragraphs: [
        "Story graphics are where most of a tabletop campaign lives, so their width matters more than any other number. The two platforms publish different rules here.",
        "Kickstarter asks you to scale story images to at least 700 pixels wide and allows files up to 50 MB. It recommends JPEG, PNG or GIF, and it can't take TIFF, BMP, HEIC or HEIF in the story.",
        "Uploads are compressed, so they display at a lower resolution than the original, which shows most on high resolution screens.",
        "That compression is why we export Kickstarter story graphics at 1400 pixels wide, twice the published minimum. Some animated GIFs display as still images, and Kickstarter's fix is to convert them to WebP files under 50 MB. We keep animated sections short and well under that limit, because a heavy file loads slowly on a phone.",
        "Gamefound recommends description images from 840 to 1200 pixels wide, up to 12000 pixels tall and up to 20 MB. It converts every upload to WebP. So we export Gamefound story graphics at exactly 1200 pixels wide, the top of its range.",
        "Size is only half the job, because a graphic at the right width can still be unreadable on a phone. That's why we pair this table with the checks in our guide to [readable Kickstarter campaign graphics on mobile](/guides/kickstarter-campaign-graphics-mobile-readability).",
      ],
      visuals: [
        {
          kind: "flow",
          title: "A story graphic is ready to upload after four checks",
          start: "You have a finished story graphic",
          nodes: [
            {question: "Is it at least 700 px wide for Kickstarter, or 840 to 1200 px for Gamefound?", yes: "Go on to the format check", no: "Export it again at 1400 px for Kickstarter or 1200 px for Gamefound"},
            {question: "Is it JPEG, PNG or GIF rather than TIFF, BMP, HEIC or HEIF?", yes: "Go on to the animation check", no: "Convert it to JPEG or PNG before upload"},
            {question: "If it is animated, does it still move in the preview?", yes: "Go on to the phone check", no: "Convert it to a WebP file under 50 MB"},
            {question: "Can you read every word on a phone in the preview?", yes: "Go on to upload", no: "Enlarge the text or move it into the page copy"},
          ],
          end: "Upload it and move to the next section",
          caption: "Widths of 1400 and 1200 px are Guildframe's practice. The minimums, formats and WebP fix are the platforms' published rules.",
          source: "Kickstarter and Gamefound Help Centers, checked November 25, 2026",
        },
      ],
      takeaway: "Export Kickstarter story images at 1400 px wide to survive compression, and Gamefound story images at 1200 px. Then check every graphic on a phone.",
    },
    "reward-images": {
      takeaway: "The Kickstarter reward image size is 3:2, at least 348 × 232 px. Gamefound wants 700 × 700 squares, so crop one master layout twice.",
    },
    "gamefound-images": {
      takeaway: "A Gamefound page needs three shapes from your artwork: a 700 px square thumbnail, a 16:9 gallery frame and a 21:6 cover strip with no text.",
    },
    "video-length": {
      takeaway: "Kickstarter sets no required video length and the video is optional. Aim for under two minutes, exported at 1920 × 1080, plus a separate vertical cut.",
    },
    "video-production": {
      paragraphs: [
        "Most tabletop video budgets go wrong at the planning stage, not in the edit. A horizontal main video, a vertical Discovery clip and a gameplay demo need different framing, so decide on all three before the camera comes out.",
        "We start every video brief from the page. The opening of the campaign, the gameplay section and the reward tiers should use the same facts and the same product shots as the video.",
        "Then the edit and the page tell one story, and nothing in the video promises a component the rewards don't include. The vertical cut has its own rules, shown below.",
        "Our guide to [planning a Kickstarter campaign video](/guides/kickstarter-campaign-video-planning) walks through the brief, the shot list and the sound off test.",
        "Both Guildframe packages include the campaign video, edited from the product images and videos you provide, and our [campaign creative](/campaign-creative) work covers renders, short motion pieces and ad variants built from your artwork. We do not film or photograph, so any filmed production comes from you or another supplier.",
      ],
      visuals: [
        {
          kind: "tips",
          title: "Four rules for a Kickstarter Discovery Mode clip",
          tips: [
            {label: "Vertical and short", text: "Film for 9:16 and aim for 60 to 90 seconds, under the same 5120 MB limit as the main video."},
            {label: "Keep the middle clear", text: "App controls can cover the edges, so keep faces, the box and any text near the center."},
            {label: "Film wide", text: "Leave enough room around the product that a 9:16 crop loses nothing important."},
            {label: "Sound off friendly", text: "Use clear audio, add captions, and show real people holding or talking about the project."},
          ],
          source: "Kickstarter Help Center, Is a project video required to launch?",
        },
      ],
      takeaway: "Plan the main video, the vertical Discovery clip and the gameplay demo together, from the page, before anyone films. Then the video and page tell one story.",
    },
    "export-checklist": {
      takeaway: "Upload one finished section and one reward image to the draft early and preview them on a phone. A wrong crop is a small fix before launch.",
    },
  },
};
