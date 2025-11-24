import { AES } from "crypto-js";

const getRateLimitHash = (key: string) =>
  AES.encrypt(
    key,
    process.env.NEXT_PUBLIC_RATE_LIMIT_HASH_KEY || ""
  ).toString();

export { getRateLimitHash };
