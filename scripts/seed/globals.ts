// Header and footer content from the Figma "Index" frame. Links without a seeded target use custom
// URLs for pages that don't exist yet; replace them in the admin as those pages are built.
// Each function returns one locale's copy; URLs and other non-localized values are the same in every locale.
import type { DataFromGlobalSlug } from 'payload';
import type { Locale } from '@/utils/locale';
import type { SlugIds } from './catalog';
import { idOf, translate } from './utils';

const custom = (label: string, url: string) => ({ link: { type: 'custom' as const, url, label } });
const category = (categories: SlugIds, slug: string, label: string) => ({
  link: {
    type: 'reference' as const,
    reference: { relationTo: 'categories' as const, value: idOf(categories, slug, 'category') },
    label,
  },
});

export const header = (categories: SlugIds, locale: Locale): Omit<DataFromGlobalSlug<'header'>, 'id'> => {
  const t = translate(locale);
  return {
    siteName: 'Éclat Dermatologie',
    tagline: t({ en: 'Paris • Haute Formulation', ja: 'Paris • Haute Formulation' }),
    searchPlaceholder: t({ en: 'Search formulations, ingredients...', ja: '製品・成分を検索…' }),
    currencyLabel: 'USD ($)',
    utilityLinks: { wishlistUrl: '/wishlist', cartUrl: '/cart', accountUrl: '/account' },
    navItems: [
      category(categories, 'face', t({ en: 'Skin Rituals', ja: 'スキンリチュアル' })),
      custom(t({ en: 'Targeted Serums', ja: '美容液' }), '/products'),
      category(categories, 'body', t({ en: 'Body & Bath', ja: 'ボディ＆バス' })),
      custom(t({ en: 'Treatment Studio', ja: 'トリートメントスタジオ' }), '/treatments'),
      custom(t({ en: 'About Atelier', ja: 'アトリエについて' }), '/about'),
      custom(t({ en: 'Journal', ja: 'ジャーナル' }), '/journal'),
    ],
  };
};

export const footer = (locale: Locale): Omit<DataFromGlobalSlug<'footer'>, 'id'> => {
  const t = translate(locale);
  return {
    about: t({
      en: 'Architectural skin wellness balanced between clinical precision and sensory indulgence. Formulated in Paris.',
      ja: '臨床の精密さと感覚の悦びを両立させた、建築的なスキンウェルネス。パリで処方。',
    }),
    badge: t({ en: '100% Biodegradable Actives', ja: '100% 生分解性の有効成分' }),
    columns: [
      {
        title: t({ en: 'Advisory Council', ja: 'アドバイザリー評議会' }),
        links: [
          custom(
            t({ en: 'Dr. Helene Laurent — Cellular Biology', ja: 'エレーヌ・ローラン博士 — 細胞生物学' }),
            '/advisory/helene-laurent'
          ),
          custom(
            t({ en: 'Dr. Marc Vignaux — Phytodermatology', ja: 'マルク・ヴィニョー博士 — 植物皮膚科学' }),
            '/advisory/marc-vignaux'
          ),
          custom(t({ en: 'Clinical Verification Portal', ja: '臨床検証ポータル' }), '/clinical-verification'),
          custom(t({ en: 'Sustainability Covenant 2030', ja: 'サステナビリティ宣言 2030' }), '/sustainability'),
        ],
      },
      {
        title: t({ en: 'Customer Atelier', ja: 'カスタマーアトリエ' }),
        links: [
          custom(t({ en: 'Private Consultations', ja: 'プライベートカウンセリング' }), '/consultations'),
          custom(t({ en: 'Shipping & Global Customs', ja: '配送・海外関税' }), '/shipping'),
          custom(t({ en: 'Returns & Architectural Refills', ja: '返品・リフィル' }), '/returns'),
          custom(t({ en: 'Track Bespoke Order', ja: 'ご注文の追跡' }), '/orders'),
        ],
      },
    ],
    newsletter: {
      title: t({ en: 'The Clinical Gazette', ja: 'クリニカル・ガゼット' }),
      description: t({
        en: 'Receive seasonal botanical findings, dermatological essays, and private formulation previews.',
        ja: '季節ごとの植物研究、皮膚科学のエッセイ、新処方の先行案内をお届けします。',
      }),
      placeholder: t({ en: 'Your email address', ja: 'メールアドレス' }),
      buttonLabel: t({ en: 'Subscribe', ja: '登録する' }),
    },
    copyright: t({
      en: '© 2025 Éclat Dermatologie Atelier. All rights reserved.',
      ja: '© 2025 Éclat Dermatologie Atelier. 無断転載を禁じます。',
    }),
    legalLinks: [
      custom(t({ en: 'Privacy Policy', ja: 'プライバシーポリシー' }), '/privacy'),
      custom(t({ en: 'Terms of Service', ja: '利用規約' }), '/terms'),
      custom(t({ en: 'Transparency Disclosure', ja: '情報開示' }), '/transparency'),
    ],
  };
};

export const notFound = (locale: Locale): Omit<DataFromGlobalSlug<'not-found'>, 'id'> => {
  const t = translate(locale);
  return {
    eyebrow: t({ en: 'Error 404', ja: 'エラー 404' }),
    heading: t({ en: 'This page has drifted away', ja: 'ページが見つかりません' }),
    description: t({
      en: "The page you're looking for doesn't exist or has moved. Let's guide you back to your ritual.",
      ja: 'お探しのページは存在しないか、移動した可能性があります。トップページからお探しください。',
    }),
    link: { type: 'custom', url: '/', label: t({ en: 'Return home', ja: 'ホームに戻る' }) },
  };
};
