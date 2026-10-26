// Seed data for the shop. Each function takes the ids it refers to, resolved by index.ts once the
// referenced documents exist, and returns data typed by Payload's own collection types.
// Functions that take a `locale` return that locale's copy; documents come back in the same order for every locale.
import type { RequiredDataFromCollectionSlug } from 'payload';
import type { Locale } from '@/utils/locale';
import { idOf, translate } from './utils';

/** Files in ./assets, keyed by how the rest of the seed refers to them. */
export const mediaFiles = {
  heroPortrait: { file: 'hero-portrait.jpg', alt: 'Woman in a camel turtleneck with glowing skin' },
  heroElixir: { file: 'hero-glow-elixir.jpg', alt: 'Amber dropper bottle of Glow Elixir on stone' },
  categoryFace: { file: 'category-face.jpg', alt: 'Face serums and creams with eucalyptus' },
  categoryBody: { file: 'category-body.jpg', alt: 'Body oil being poured onto a ceramic plate' },
  categorySets: { file: 'category-sets.jpg', alt: 'Discovery kit box with five skincare products' },
  glowFaceSerum: { file: 'product-glow-face-serum.jpg', alt: 'Glow Face Serum amber bottle' },
  facialWashGel: { file: 'product-facial-wash-gel.jpg', alt: 'Facial Wash Gel pump bottle' },
  brightBodyLotion: { file: 'product-bright-body-lotion.jpg', alt: 'Bright Body Lotion ceramic pump bottle' },
  smoothHandCream: { file: 'product-smooth-hand-cream.jpg', alt: 'Smooth Hand Cream tube on sand' },
  philosophyLab: { file: 'philosophy-lab.jpg', alt: 'Botanical infusion being dropped into a lab bottle' },
  avatarAdeline: { file: 'avatar-adeline.jpg', alt: 'Adeline Laurent' },
  avatarSofiia: { file: 'avatar-sofiia.jpg', alt: 'Sofiia Rostova' },
  avatarMaria: { file: 'avatar-maria.jpg', alt: 'Maria Delgado' },
};

export type MediaIds = Record<keyof typeof mediaFiles, number>;
/** Ids of created documents, keyed by slug. */
export type SlugIds = Record<string, number>;

export const categories = (media: MediaIds, locale: Locale): RequiredDataFromCollectionSlug<'categories'>[] => {
  const t = translate(locale);
  return [
    { slug: 'face', generateSlug: false, title: t({ en: 'Face', ja: 'フェイス' }), image: media.categoryFace },
    { slug: 'body', generateSlug: false, title: t({ en: 'Body', ja: 'ボディ' }), image: media.categoryBody },
    {
      slug: 'sets',
      generateSlug: false,
      title: t({ en: 'Sets & Kits', ja: 'セット＆キット' }),
      image: media.categorySets,
    },
  ];
};

export const products = (
  { media, categories }: { media: MediaIds; categories: SlugIds },
  locale: Locale
): RequiredDataFromCollectionSlug<'products'>[] => {
  const t = translate(locale);
  return [
    {
      slug: 'smooth-hand-cream',
      generateSlug: false,
      title: t({ en: 'Smooth Hand Cream', ja: 'スムース ハンドクリーム' }),
      keyIngredients: t({ en: 'Oat Ceramides & Squalane', ja: 'オーツセラミド＆スクワラン' }),
      shortDescription: t({
        en: 'Instant barrier repair velvet cream. Non-greasy glove effect preserving cuticle softness all day.',
        ja: 'すばやくバリアを整えるベルベットクリーム。べたつかず、手袋のように包み込み、指先のやわらかさを一日中キープします。',
      }),
      images: [media.smoothHandCream],
      categories: [idOf(categories, 'body', 'category')],
      isBestseller: true,
      price: 17,
      rating: { average: 4.5, count: 78 },
      badge: { label: t({ en: 'Travel Size', ja: 'トラベルサイズ' }), tone: 'neutral' },
    },
    {
      slug: 'bright-body-lotion',
      generateSlug: false,
      title: t({ en: 'Bright Body Lotion', ja: 'ブライト ボディローション' }),
      keyIngredients: t({ en: 'Lactic Acid 7% + Shea Lipids', ja: '乳酸 7% + シア脂質' }),
      shortDescription: t({
        en: 'Micro-exfoliating botanical emulsion to smooth keratosis pilaris and restore an even, luminous tone.',
        ja: 'やさしく角質をケアするボタニカル乳液。ざらつきをなめらかに整え、均一で明るい肌トーンへ導きます。',
      }),
      images: [media.brightBodyLotion],
      categories: [idOf(categories, 'body', 'category')],
      isBestseller: true,
      price: 29,
      rating: { average: 5, count: 142 },
      badge: { label: t({ en: 'Silky Finish', ja: 'シルキーな仕上がり' }), tone: 'soft' },
    },
    {
      slug: 'facial-wash-gel',
      generateSlug: false,
      title: t({ en: 'Facial Wash Gel', ja: 'フェイシャル ウォッシュジェル' }),
      keyIngredients: t({ en: 'Centella & Marine Collagen', ja: 'ツボクサ＆マリンコラーゲン' }),
      shortDescription: t({
        en: 'Non-stripping amino acid cleansing base that calms micro-inflammation and preserves the lipid barrier.',
        ja: '必要な潤いを奪わないアミノ酸系洗浄ベース。肌の小さな炎症を鎮め、皮脂バリアを守ります。',
      }),
      images: [media.facialWashGel],
      categories: [idOf(categories, 'face', 'category')],
      isBestseller: true,
      price: 37,
      rating: { average: 5, count: 96 },
      badge: { label: t({ en: 'pH 5.5 Balanced', ja: 'pH 5.5 バランス' }), tone: 'neutral' },
    },
    {
      slug: 'glow-face-serum',
      generateSlug: false,
      title: t({ en: 'Glow Face Serum', ja: 'グロウ フェイスセラム' }),
      keyIngredients: t({ en: 'Niacinamide 5% + Ferulic', ja: 'ナイアシンアミド 5% + フェルラ酸' }),
      shortDescription: t({
        en: 'Multi-depth luminosity elixir with stabilizing antioxidants to gently refine texture and restore radiance.',
        ja: '安定化した抗酸化成分を配合した、肌の奥から輝きを引き出す美容液。キメをやさしく整え、明るさを取り戻します。',
      }),
      images: [media.glowFaceSerum],
      categories: [idOf(categories, 'face', 'category')],
      isBestseller: true,
      price: 25,
      rating: { average: 5, count: 184 },
      badge: { label: t({ en: 'Bestseller', ja: 'ベストセラー' }), tone: 'accent' },
    },
  ];
};

export const treatments = (locale: Locale): RequiredDataFromCollectionSlug<'treatments'>[] => {
  const t = translate(locale);
  return [
    {
      slug: 'whitening-radiance-brightening-program',
      generateSlug: false,
      title: t({ en: 'Whitening & Radiance Brightening Program', ja: 'ホワイトニング＆ラディアンス プログラム' }),
      protocol: t({ en: 'Protocol I', ja: 'プロトコル I' }),
      duration: 75,
      modality: t({
        en: 'Cryo-Sculpt • Medical-Grade LED • Ionized Vitamin C',
        ja: 'クライオスカルプト • 医療グレードLED • イオン化ビタミンC',
      }),
      description: t({
        en: 'Targeted cellular depigmentation protocol combining cryogenic stabilization with high-concentration bio-ferulic infusion to reverse oxidative discoloration.',
        ja: '冷却ケアと高濃度フェルラ酸の導入を組み合わせ、酸化によるくすみやシミに働きかける集中プログラムです。',
      }),
      price: 195,
    },
    {
      slug: 'deep-cellular-facial-treatment',
      generateSlug: false,
      title: t({ en: 'Deep Cellular Facial Treatment', ja: 'ディープセルラー フェイシャル' }),
      protocol: t({ en: 'Protocol II', ja: 'プロトコル II' }),
      duration: 60,
      modality: t({
        en: 'Ultrasonic Infusion • Lymphatic Gua Sha • Oxygen Veil',
        ja: '超音波導入 • リンパかっさ • オキシジェンベール',
      }),
      description: t({
        en: 'Deep dermal hydration and barrier-densifying massage using bioactive tri-peptides and bespoke micro-current stimulation for sculpted facial contours.',
        ja: 'トリペプチドとマイクロカレントによる、深い保湿とバリアを高めるマッサージ。すっきりとしたフェイスラインへ導きます。',
      }),
      price: 165,
    },
    {
      slug: 'acne-clarifying-sebum-rebalance',
      generateSlug: false,
      title: t({ en: 'Acne Clarifying & Sebum Rebalance', ja: 'アクネクラリファイング＆皮脂バランス' }),
      protocol: t({ en: 'Protocol III', ja: 'プロトコル III' }),
      duration: 80,
      modality: t({
        en: 'Blue Light Phototherapy • Salicylic Peel • Zinc Mask',
        ja: 'ブルーライト光療法 • サリチル酸ピール • 亜鉛マスク',
      }),
      description: t({
        en: 'Clinical decongestion designed for reactive, acne-prone tissue. Purifies blocked follicular pores while replenishing essential stratum corneum lipids.',
        ja: 'ゆらぎやすいニキビ肌のための集中ケア。詰まった毛穴をクリアにしながら、角層に必要な脂質を補います。',
      }),
      price: 180,
    },
    {
      slug: 'restorative-botanical-body-spa',
      generateSlug: false,
      title: t({ en: 'Restorative Botanical Body Spa', ja: 'リストラティブ ボタニカル ボディスパ' }),
      protocol: t({ en: 'Protocol IV', ja: 'プロトコル IV' }),
      duration: 90,
      modality: t({
        en: 'Dry Silk Brushing • Thermal Mud Cocoon • Lymphatic Drain',
        ja: 'シルクドライブラッシング • サーマルマッドラップ • リンパドレナージュ',
      }),
      description: t({
        en: 'Full-body immersion incorporating mineralized sea clays, gentle enzymatic polish, and hot-stone therapeutic meridian massage for total physiological reset.',
        ja: 'ミネラル豊富な海泥、やさしい酵素ポリッシュ、ホットストーンによる経絡マッサージで、心身をまるごとリセットする全身トリートメントです。',
      }),
      price: 220,
    },
  ];
};

export const testimonials = (
  { media, products }: { media: MediaIds; products: SlugIds },
  locale: Locale
): RequiredDataFromCollectionSlug<'testimonials'>[] => {
  const t = translate(locale);
  const verifiedBuyer = t({ en: 'Verified Buyer', ja: '購入者レビュー' });
  return [
    {
      name: 'Adeline Laurent',
      role: t({ en: 'Combination / Dehydrated', ja: '混合肌 / インナードライ' }),
      rating: 5,
      tag: verifiedBuyer,
      quote: t({
        en: 'The Glow Face Serum reversed months of dullness within two weeks of night rituals. My skin texture has an almost glass-like, healthy luminosity that makeup could never replicate.',
        ja: 'グロウ フェイスセラムを夜のケアに取り入れて2週間で、何か月も続いたくすみが消えました。メイクでは出せない、ガラスのような健康的なツヤが生まれています。',
      }),
      avatar: media.avatarAdeline,
      product: idOf(products, 'glow-face-serum', 'product'),
    },
    {
      name: 'Sofiia Rostova',
      role: t({ en: 'Sensitive / Rosacea-Prone', ja: '敏感肌 / 赤ら顔' }),
      rating: 5,
      tag: verifiedBuyer,
      quote: t({
        en: "The Facial Wash Gel is the first cleanser that doesn't trigger redness or tightness across my cheeks. Paired with their hand cream, it has completely elevated my morning routine.",
        ja: '頬に赤みやつっぱりが出なかった洗顔料は、フェイシャル ウォッシュジェルが初めてです。ハンドクリームと合わせて、朝のルーティンがすっかり格上げされました。',
      }),
      avatar: media.avatarSofiia,
      product: idOf(products, 'facial-wash-gel', 'product'),
    },
    {
      name: 'Maria Delgado',
      role: t({ en: 'Normal / Hyperpigmentation', ja: '普通肌 / 色素沈着' }),
      rating: 5,
      tag: t({ en: 'Studio Patron', ja: 'スタジオ利用者' }),
      quote: t({
        en: 'I booked the Whitening Program before my wedding week. The Cryo-Sculpt modality tightened my jawline and brought back an unmatched calm, radiant glow. Absolutely unmatched standard.',
        ja: '結婚式の前の週にホワイトニングプログラムを予約しました。クライオスカルプトでフェイスラインが引き締まり、落ち着いた輝きが戻りました。期待をはるかに超える仕上がりです。',
      }),
      avatar: media.avatarMaria,
    },
  ];
};
