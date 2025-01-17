export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://redactle.vercel.app/"
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`);

export const DEPRECATED_DOMAIN =
  process.env.NEXT_PUBLIC_DEPRECATED_DOMAIN || "caviardeul.julienc.io";

export const COOKIE_MAX_AGE = 60 * 60 * 24 * 366;

export const LAST_SEEN_AT_UPDATE_THRESHOLD = 3600;
