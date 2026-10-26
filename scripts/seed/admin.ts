import type { Payload } from 'payload';
import { env } from '@/lib/env';
import { context } from './utils';

/**
 * Creates the first admin user from ADMIN_EMAIL / ADMIN_PASSWORD when there are no users yet, so a fresh
 * database can be logged into without the create-first-user screen. Existing users are never touched.
 */
export async function seedAdmin(payload: Payload): Promise<void> {
  const { ADMIN_EMAIL: email, ADMIN_PASSWORD: password } = env;
  if (!email || !password) return;

  const { totalDocs } = await payload.count({ collection: 'users' });
  if (totalDocs > 0) return;

  await payload.create({ collection: 'users', data: { email, password }, context: context() });
  payload.logger.info(`Seeded admin user ${email}`);
}
