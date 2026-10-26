// Reseeds the database: `bun run seed`. Restores seeded documents to their seed values and leaves
// users and any other documents untouched (booting Payload's onInit still creates the admin user when
// there are none). revalidateTag needs a Next.js request, so instead this deletes Next's on-disk data cache
// (unstable_cache entries survive a restart); restart `next dev` afterwards to drop its in-memory copy too.
import { rm } from 'node:fs/promises';
import path from 'node:path';
import config from '@payload-config';
import { getPayload } from 'payload';
import { seed } from '.';

const payload = await getPayload({ config });
await seed(payload);
await payload.destroy();

for (const dir of ['.next/dev/cache/fetch-cache', '.next/cache/fetch-cache']) {
  await rm(path.resolve(process.cwd(), dir), { recursive: true, force: true });
}
process.exit(0);
