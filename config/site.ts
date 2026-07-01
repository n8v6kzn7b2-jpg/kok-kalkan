/**
 * Single source of truth for everything Sami edits: contact details, prices,
 * hours, social links and the reservation endpoint. Values marked PLACEHOLDER
 * are confirmed/replaced by Sami — see TODO-PLACEHOLDERS.md.
 */

export const locales = ["en", "tr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** Canonical production origin — used for metadata, sitemap and JSON-LD. */
export const siteUrl = "https://samisagcan.github.io/kok-kalkan"; // GitHub Pages project URL

/**
 * Reservation behaviour. The form posts nowhere by default: it builds a
 * pre-filled WhatsApp (or mailto) message. To move to a real booking system
 * later, set `mode: "url"` and point `url` at it — one-line swap.
 */
export const booking = {
  mode: "whatsapp" as "whatsapp" | "email" | "url",
  // Digits only, international format, no "+" — used to build wa.me links.
  whatsappNumber: "905438643965",
  email: "reservations@kokkalkan.com", // PLACEHOLDER: reservation e-mail (unused while mode = whatsapp)
  url: "", // PLACEHOLDER: real reservation-system link (when available)
};

export const contact = {
  phoneDisplay: "+90 543 864 39 65",
  phoneHref: "+905438643965", // tel: value
  whatsappDisplay: "+90 543 864 39 65",
  instagram: "https://www.instagram.com/kokkalkan.tr/",
  instagramHandle: "@kokkalkan.tr",
};

export const address = {
  street: "Kalkan Mah., 3. Sokak, Yalıboyu Caddesi No:10",
  locality: "Kalkan",
  region: "Kaş, Antalya",
  postalCode: "07960", // PLACEHOLDER: confirm postal code
  country: "TR",
  // Exact restaurant pin.
  geo: { lat: 36.26312928620116, lng: 29.415281468283627 },
  // Embedded map uses this place query.
  mapsQuery: "Kök Kalkan, Yalıboyu Caddesi No:10, Kalkan, Kaş, Antalya",
  // Short Google Maps share link — used for the "get directions" button.
  mapsUrl: "https://maps.app.goo.gl/jZphkYrey7SKBih77",
};

/**
 * Opening / service hours. Used for display and for JSON-LD
 * openingHoursSpecification.
 */
export const hours = {
  display: [
    { days: "Sunday – Friday", time: "14:00 – 00:00" },
    { days: "Saturday", time: "14:00 – 01:00" },
  ],
  // Machine form for schema.org (Mo,Tu,...). Keep in sync with `display`.
  // Closing after midnight is expressed with next-day 24:00 / 01:00.
  schema: [
    { days: ["Su", "Mo", "Tu", "We", "Th", "Fr"], opens: "14:00", closes: "24:00" },
    { days: ["Sa"], opens: "14:00", closes: "01:00" },
  ],
};

/**
 * Prices are seasonal — kept here as editable values. Leave `amount` null to
 * render "ask for current price" instead of a figure.
 */
export const pricing = {
  currency: "₺",
  // null = render "ask for current price" — awaiting chef sign-off on seasonal prices.
  tastingPerPerson: null as number | null,
  winePairing: null as number | null,
  servicePercent: 10,
  // schema.org priceRange hint
  priceRange: "₺₺₺₺",
};

export const social = {
  instagram: contact.instagram,
};
