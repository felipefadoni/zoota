import bcrypt from "bcryptjs";

export async function encryptHash(password: string) {
  const cost = Number(process.env.CRYPT_COST) || 12;
  const bcryptHash = await bcrypt.hash(password, cost);
  return bcryptHash;
}

export async function compareHash(password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}
