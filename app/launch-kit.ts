export const launchKit = {
  path: "/resources/tabletop-kickstarter-launch-kit",
  thanksPath: "/resources/tabletop-kickstarter-launch-kit/thanks",
  bundlePath: "/downloads/launch-kit/tabletop-kickstarter-launch-kit.zip",
  title: "Free Tabletop Kickstarter Launch Kit",
  description: "Plan your tabletop Kickstarter with an editable launch workbook, campaign and email templates, creative briefs and worked examples. Free by email.",
  files: [
    { title: "Start here", format: "PDF", name: "START-HERE.pdf", copy: "Choose your starting point and work through the kit in a useful order." },
    { title: "Launch planner", format: "XLSX", name: "Tabletop-Launch-Planner.xlsx", copy: "Twelve working tabs for funding, rewards, costs, shipping, cash timing, launch tasks, ad tests, sources, reviewers, live operations and production." },
    { title: "Campaign and email templates", format: "DOCX", name: "Campaign-and-Email-Templates.docx", copy: "Draft your campaign plan and message, compare rewards and adapt the email templates to your game." },
    { title: "Creative and production briefs", format: "DOCX", name: "Creative-and-Production-Briefs.docx", copy: "Write an asset brief and video storyboard, plan ad tests, request supplier quotes and prepare the production handoff." },
    { title: "Examples and sources", format: "PDF", name: "Examples-and-Sources.pdf", copy: "Five fictional tabletop examples with sources and notes to help you check your own decisions." },
  ],
};

function senderUrl(value: string | undefined): string | null {
  if (!value?.trim()) return null;
  try {
    const url = new URL(value.trim());
    return url.protocol === "https:" && (url.hostname === "sender.net" || url.hostname.endsWith(".sender.net")) && !url.username && !url.password ? url.toString() : null;
  } catch { return null; }
}

export const launchKitFormUrl = senderUrl(process.env.NEXT_PUBLIC_SENDER_LAUNCH_KIT_FORM_URL ?? "https://stats.sender.net/forms/dyPKAg/view");
export const launchKitEmbedUrl = senderUrl(process.env.NEXT_PUBLIC_SENDER_LAUNCH_KIT_EMBED_URL);
export const launchKitAutomatedSignup = Boolean(launchKitFormUrl || launchKitEmbedUrl);
