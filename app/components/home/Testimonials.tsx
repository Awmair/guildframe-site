// Ten client reviews from the years before Guildframe, in the clients' own words (trimmed, never reworded).
// Shown as plain text only: no review schema, because self published reviews are not eligible for rich results.

type Review = { handle: string; country: string; quote: string; about?: string };

const featured: Review = {
  handle: "quivertime",
  country: "Romania",
  about: "Kickstarter campaign video",
  quote: "He prepared the script, produced the audio, edited the full video from start to finish and delivered everything above expectations. We were also pressed by time, but this was handled in such a professional manner that it was delivered just when we needed it to launch our campaign.",
};

const reviews: Review[] = [
  { handle: "floriangebau263", country: "Austria", quote: "We were thoroughly impressed with the excellent work. He crafted our Kickstarter page to perfection, ensuring every detail was meticulously handled. Highly recommend for any project!" },
  { handle: "minotauro21", country: "Mexico", quote: "Actually working with him was like mind reading. He did everything with just a few questions." },
  { handle: "arcalabs", country: "United Kingdom", quote: "Excellent work, very pleased. Really good design work and communication throughout. Love the page that has been created with all the pics and gifs. Very helpful and had no problem with all of our last minute changes. 100% recommend." },
  { handle: "fanfareapp", country: "United States", quote: "Second time working together. Will be back for a third." },
  { handle: "danielawoyomi", country: "United Kingdom", quote: "Truly went above and beyond to deliver our campaign. We were initially sceptical about working with someone remotely but Umair exceeded our expectations." },
  { handle: "benjones815", country: "United States", quote: "They wrote the script, incorporated our feedback and put together the right visuals to really tell our story. I plan to work with them again." },
  { handle: "toddsurber", country: "United States", quote: "Works extremely fast, very creative and makes requested changes quickly. Super easy to work and creates fantastic final product! Definitely hire him!" },
  { handle: "jw8881", country: "Taiwan", quote: "Communication is clear, delivery is timely and any change requests are quick to respond, very professional." },
  { handle: "polaris2007", country: "United States", quote: "Very responsive to both the initial request and subsequent revisions. The end result was an excellent product." },
];

function Pips({ label = "Rated 5 out of 5" }: { label?: string }) {
  return <span className="hr-pips" role="img" aria-label={label}>{Array.from({ length: 5 }, (_, i) => <i key={i} />)}</span>;
}

function Card({ review, index }: { review: Review; index: number }) {
  return (
    <figure className="hr-card" data-reveal="rise" style={{ ["--i" as string]: index }}>
      <Pips />
      <blockquote><p>{review.quote}</p></blockquote>
      <figcaption><strong>{review.handle}</strong><span>{review.country}</span></figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="h-reviews" id="reviews" aria-labelledby="reviews-title">
      <div className="hr-inner">
        <div className="hr-side">
          <p className="hr-eyebrow">Before Guildframe</p>
          <h2 id="reviews-title" data-reveal="lines"><span className="w-line"><span>Ten years of</span></span><span className="w-line"><span><em>happy creators</em></span></span></h2>
          <p className="hr-lead">Before Guildframe, Umair and his team spent ten years designing campaigns for creators around the world. These are ten of the 252 reviews those creators left, in their own words.</p>
          <div className="hr-score" data-reveal="rise">
            <span className="hr-score-num">5.0</span>
            <span className="hr-score-meta"><Pips label="Average rating 5.0 out of 5" /><span>Average from 252 client reviews</span></span>
          </div>
          <figure className="hr-feature" data-reveal="rise">
            <span className="hr-feature-tag">{featured.about}</span>
            <blockquote><p>{featured.quote}</p></blockquote>
            <figcaption><Pips /><strong>{featured.handle}</strong><span>{featured.country}</span></figcaption>
          </figure>
        </div>
        <div className="hr-deck">
          {reviews.map((review, index) => <Card key={review.handle} review={review} index={index} />)}
        </div>
      </div>
    </section>
  );
}
