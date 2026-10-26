import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { en } from '@payloadcms/translations/languages/en';
import { ja } from '@payloadcms/translations/languages/ja';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { Categories } from '@/app/collections/Categories';
import { Media } from '@/app/collections/Media';
import { Pages } from '@/app/collections/Pages';
import { Products } from '@/app/collections/Products';
import { Testimonials } from '@/app/collections/Testimonials';
import { Treatments } from '@/app/collections/Treatments';
import { Users } from '@/app/collections/Users';
import { Footer } from '@/app/globals/Footer';
import { Header } from '@/app/globals/Header';
import { NotFound } from '@/app/globals/NotFound';
import { env } from '@/lib/env';
import { migrations } from '@/scripts/migrations';
import { isUnseeded, seed } from '@/scripts/seed';
import { seedAdmin } from '@/scripts/seed/admin';
import { localization } from './locale.config';
import { plugins } from './plugins';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  editor: lexicalEditor(),
  collections: [Pages, Products, Categories, Treatments, Testimonials, Media, Users],
  globals: [Header, Footer, NotFound],
  plugins,
  secret: env.PAYLOAD_SECRET,
  db: postgresAdapter({
    pool: {
      connectionString: env.DATABASE_URL,
    },
    migrationDir: path.resolve(__dirname, '../../scripts/migrations'),
    // Dev uses schema push; production (Vercel) has no push, so pending migrations run on boot instead.
    prodMigrations: migrations,
  }),
  localization,
  i18n: {
    supportedLanguages: { en, ja },
    fallbackLanguage: 'en',
  },
  experimental: {
    localizeStatus: true,
  },
  typescript: {
    outputFile: path.resolve(__dirname, '../../types/payload-types.ts'),
  },
  sharp,
  // Seeds the first admin user, and the demo catalogue and home page on first boot of an empty database.
  onInit: async (payload) => {
    await seedAdmin(payload);
    if (await isUnseeded(payload)) await seed(payload);
  },
});
