import z from 'zod';

export const envSchema = z.object({
  DATABASE_URL: z.string(),
  PAYLOAD_SECRET: z.string(),
  PREVIEW_SECRET: z.string(),

  // First admin user, created on boot / `bun run seed` when the users collection is empty.
  ADMIN_EMAIL: z.email().optional(),
  ADMIN_PASSWORD: z.string().optional(),

  // Set automatically on Vercel; absent locally and on other hosts.
  VERCEL_URL: z.string().optional(),
  NEXT_PUBLIC_SERVER_URL: z.string(),

  // Media Storage
  BLOB_READ_WRITE_TOKEN: z.string(),
  VERCEL_BLOB_API_URL: z.string().optional(),
});

export const env = envSchema.parse(process.env);
