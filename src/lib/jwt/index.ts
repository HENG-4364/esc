import "server-only";

import { JwtPayload } from "@/types";
import { SignJWT, jwtVerify } from "jose";

const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

export async function encryptSession(payload: JwtPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1hr")
    .sign(key);
}

export async function encryptRefreshSession(
  payload: JwtPayload
): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7days")
    .sign(key);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify<JwtPayload>(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    return null;
  }
}
