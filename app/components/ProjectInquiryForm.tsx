"use client";

import { type FormEvent, useState } from "react";
import { siteConfig } from "../site-config";

export function ProjectInquiryForm({ source }: { source: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("page_url", window.location.href);

    try {
      const response = await fetch(siteConfig.formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="project-inquiry-section section-pad" id="start-project">
      <div className="project-inquiry-copy">
        <h2>
          No obligation. Talk to us.
          <span>Hear back within 24 hours.</span>
        </h2>
        <p>
          Tell us what you are building. If your final artwork and products are
          ready to sell, we will create your free Shopify store direction within
          72 hours. You decide whether to continue.
        </p>
        <div className="project-inquiry-promises" aria-label="Inquiry promises">
          <span>No payment</span>
          <span>Free preview</span>
          <span>Reply within 24 hours</span>
        </div>
      </div>

      <form
        action={siteConfig.formEndpoint}
        method="POST"
        onSubmit={submitInquiry}
        className="project-inquiry-form"
      >
        <input type="hidden" name="source" value={source} />
        <input type="hidden" name="_subject" value="New Guildframe Shopify preview request" />
        <label>
          <span>Your name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Name"
            required
          />
        </label>
        <label>
          <span>Email address</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@studio.com"
            required
          />
        </label>
        <label className="project-inquiry-message">
          <span>What do you want to build the store for?</span>
          <textarea
            name="message"
            rows={6}
            placeholder="Tell us about your game, current store, product catalog and what you want to launch."
            required
          />
        </label>
        <label className="project-inquiry-honeypot" aria-hidden="true">
          Leave this empty
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
        <button type="submit" disabled={status === "sending" || status === "sent"}>
          {status === "sending"
            ? "Sending..."
            : status === "sent"
              ? "Request received"
              : "Get my free preview"}
          <span aria-hidden="true">↗</span>
        </button>
        <p className={`project-inquiry-status is-${status}`} aria-live="polite">
          {status === "sent" && "Thanks. You will hear from us within 24 hours."}
          {status === "error" && "Something went wrong. Please try again or email umair@guildframe.com."}
        </p>
      </form>
    </section>
  );
}
