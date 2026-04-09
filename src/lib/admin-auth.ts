export const ADMIN_SESSION_COOKIE = "turbo_admin_session";

const defaultUser = "rappiturbostream";
const defaultPass = "turbocastr.io";
const defaultSessionToken = "turbo-admin-session-v1";

function cleanEnv(value: string | undefined): string | null {
  if (!value) return null;
  const v = value.trim();
  return v.length > 0 ? v : null;
}

export function getAdminUser(): string {
  return cleanEnv(process.env.ADMIN_BASIC_USER) ?? defaultUser;
}

export function getAdminPassword(): string {
  return cleanEnv(process.env.ADMIN_BASIC_PASS) ?? defaultPass;
}

export function getAdminSessionToken(): string {
  return cleanEnv(process.env.ADMIN_SESSION_TOKEN) ?? defaultSessionToken;
}

