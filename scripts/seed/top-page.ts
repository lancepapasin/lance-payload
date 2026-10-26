import type { RequiredDataFromCollectionSlug } from 'payload';
import type { Locale } from '@/utils/locale';
import type { MediaIds, SlugIds } from './catalog';
import { idOf, paragraph, richText, text, translate } from './utils';

/** Ids of the documents the home page points at, resolved by index.ts. */
export type TopPageRefs = {
  media: MediaIds;
  categories: SlugIds;
  treatments: number[];
  testimonials: number[];
};

const categoryLink = (categories: SlugIds, slug: string, label: string) => ({
  type: 'reference' as const,
  reference: { relationTo: 'categories' as const, value: idOf(categories, slug, 'category') },
  label,
});

// One locale's copy of the home page. The structure (blocks, rows, references) is the same in every locale.
export const topPage = (
  { media, categories, treatments, testimonials }: TopPageRefs,
  locale: Locale
): RequiredDataFromCollectionSlug<'pages'> => {
  const t = translate(locale);
  return {
    title: t({ en: 'Home', ja: 'ホーム' }),
    slug: 'home',
    generateSlug: false,
    _status: 'published',
    hero: {
      variant: 'homepage',
      homepage: {
        badge: t({ en: 'Haute Formulary • Batch N° 402', ja: 'オートフォーミュラリー • バッチ N° 402' }),
        heading: richText(
          paragraph(text(t({ en: 'Pure Form.', ja: '純粋なかたち。' }))),
          paragraph(text(t({ en: 'Luminous', ja: '輝く' }), 2), text(t({ en: ' Biology.', ja: 'バイオロジー。' })))
        ),
        description: t({
          en: 'Dermatological rigor meets sensorial poise. Architectured with cold-extracted phytonutrients, low-molecular ferulic isolates, and cellular ceramides for unyielding epidermal vitality.',
          ja: '皮膚科学の厳密さと、感覚に響く気品。低温抽出の植物栄養素、低分子フェルラ酸、細胞セラミドを組み合わせ、揺るぎない肌の活力へと導きます。',
        }),
        links: [
          {
            link: {
              type: 'custom',
              url: '/products',
              label: t({ en: 'Explore Formulations', ja: '製品を見る' }),
              appearance: 'primary',
            },
          },
          {
            link: {
              type: 'custom',
              url: '/treatments',
              label: t({ en: 'Book Consultation', ja: 'カウンセリングを予約' }),
              appearance: 'secondary',
            },
          },
        ],
        image: media.heroPortrait,
        imageCaption: {
          label: t({ en: 'Parisian Atelier', ja: 'パリのアトリエ' }),
          meta: 'Ref: Bio-01',
        },
        overlayCard: { image: media.heroElixir, label: t({ en: 'Glow Elixir', ja: 'グロウ エリクサー' }) },
      },
    },
    layout: [
      {
        blockType: 'categoryGrid',
        header: {
          eyebrow: t({ en: 'Architectural Categories', ja: 'カテゴリー' }),
          heading: t({ en: 'Curated Formulations', ja: '厳選されたフォーミュレーション' }),
          description: t({
            en: 'Structured regimens designed to respect your cutaneous microbiome across cellular repair, lipid hydration, and holistic ritual sets.',
            ja: '細胞の修復、脂質による保湿、トータルケアのセットまで。肌の常在菌バランスを尊重して設計されたレジメンです。',
          }),
          align: 'left',
        },
        items: [
          {
            size: 'large',
            eyebrow: t({ en: '01 • Biological Focus', ja: '01 • バイオロジカルケア' }),
            title: t({ en: 'The Face Collection', ja: 'フェイスコレクション' }),
            description: t({
              en: 'Micro-encapsulated peptides, non-irritating bio-retinols, and barrier-identical lipids for renewed tensile firmness.',
              ja: 'マイクロカプセル化ペプチド、低刺激のバイオレチノール、バリア類似脂質で、ハリと弾力を取り戻します。',
            }),
            image: media.categoryFace,
            link: categoryLink(categories, 'face', t({ en: 'Explore Face Rituals', ja: 'フェイスケアを見る' })),
          },
          {
            size: 'small',
            eyebrow: t({ en: '02 • Scent & Moisture', ja: '02 • 香りと潤い' }),
            title: t({ en: 'The Body Ritual', ja: 'ボディリチュアル' }),
            description: t({
              en: 'Cold-pressed squalane, soothing AHAs, and grounding notes of French cedarwood.',
              ja: 'コールドプレスのスクワラン、穏やかなAHA、フレンチシダーウッドの落ち着いた香り。',
            }),
            image: media.categoryBody,
            link: categoryLink(categories, 'body', t({ en: 'View Body Care', ja: 'ボディケアを見る' })),
          },
          {
            size: 'full',
            eyebrow: t({ en: '03 • Comprehensive Curation', ja: '03 • コンプリートセレクション' }),
            title: t({ en: 'Complete Sets & Discovery Kits', ja: 'コンプリートセット＆ディスカバリーキット' }),
            description: t({
              en: 'The full five-step morning and evening continuum. Formulated to harmonize synergy between barrier cleansing, cellular activation, and lipid lock.',
              ja: '朝と夜の5ステップをひとつに。洗浄、細胞の活性化、潤いの閉じ込めが調和するよう処方されています。',
            }),
            tag: t({ en: 'Starting from $88.00', ja: '$88.00から' }),
            image: media.categorySets,
            link: categoryLink(categories, 'sets', t({ en: 'Discover Complete Kits', ja: 'セットを見る' })),
          },
        ],
      },
      {
        blockType: 'productCarousel',
        header: {
          eyebrow: t({ en: 'Essential Dispensary', ja: 'エッセンシャル' }),
          heading: t({ en: 'Bestselling Formulations', ja: 'ベストセラー' }),
          description: t({ en: 'Formulated fresh weekly in small batches', ja: '毎週、少量ずつ新鮮に製造' }),
          align: 'left',
        },
        source: 'bestsellers',
        limit: 4,
      },
      {
        blockType: 'treatmentGrid',
        header: {
          eyebrow: t({ en: 'The Sanctuary', ja: 'サンクチュアリ' }),
          heading: t({ en: 'Clinical Spa & Treatment Studio', ja: 'クリニカルスパ＆トリートメントスタジオ' }),
          description: t({
            en: 'Haute clinical modalities administered by certified dermal therapists inside acoustic soundproof treatment suites.',
            ja: '防音設計のトリートメントスイートで、認定セラピストが高度な施術を行います。',
          }),
          align: 'center',
        },
        treatments,
        ctaLabel: t({ en: 'Reserve Suite', ja: '予約する' }),
      },
      {
        blockType: 'mediaContent',
        header: {
          eyebrow: t({ en: 'Philosophy • Haute Bio-Engineering', ja: 'フィロソフィー • バイオエンジニアリング' }),
          heading: t({ en: 'The Science of Radiance', ja: '輝きのサイエンス' }),
          description: t({
            en: 'We operate at the convergence of pure alpine botanicals and advanced green pharmaceutical chemistry. Our extraction yields preserve delicate enzyme chains without chemical solvent contamination.',
            ja: '純粋なアルプスの植物と、先進のグリーンケミストリーが交わる場所で。化学溶剤を使わない抽出により、繊細な酵素をそのまま守ります。',
          }),
          align: 'left',
        },
        image: media.philosophyLab,
        imagePosition: 'left',
        imageBadge: {
          icon: 'certification',
          title: t({ en: 'Certified Cold-Press', ja: '認証コールドプレス' }),
          subtitle: t({ en: 'Zero thermal degradation', ja: '熱による劣化ゼロ' }),
        },
        features: [
          {
            icon: 'extraction',
            title: t({ en: 'Low-Temperature Bio-Extraction', ja: '低温バイオ抽出' }),
            description: t({
              en: 'Active flavonoids and carotenoids are collected under zero-thermal thresholds, securing pure potency without synthetic chemical stabilizers.',
              ja: 'フラボノイドとカロテノイドを熱を加えずに抽出。合成安定剤に頼らず、本来の力を保ちます。',
            }),
          },
          {
            icon: 'microbiome',
            title: t({ en: 'Microbiome Symbiosis', ja: 'マイクロバイオームとの共生' }),
            description: t({
              en: 'Every formula is formulated to support epidermal pH between 4.8 and 5.5, preserving natural defensive peptides and the cutaneous bacterial flora.',
              ja: 'すべての製品は肌のpHを4.8〜5.5に保つよう処方され、天然の防御ペプチドと肌の常在菌を守ります。',
            }),
          },
          {
            icon: 'packaging',
            title: t({ en: 'Sustainable Architectural Glass', ja: 'サステナブルなガラス容器' }),
            description: t({
              en: '90% post-consumer recycled French flint glass treated with UV-blocking filters to ensure active efficacy without artificial micro-plastics.',
              ja: '90%リサイクルのフランス製フリントガラスにUVカット加工を施し、マイクロプラスチックを使わずに有効成分を守ります。',
            }),
          },
        ],
      },
      {
        blockType: 'testimonials',
        header: {
          eyebrow: t({ en: 'Clinical Proof & Voices', ja: 'お客様の声' }),
          heading: t({ en: 'Verified Client Reflections', ja: '認証済みのレビュー' }),
          align: 'left',
        },
        ratingSummary: t({ en: '4.92 / 5.0 Global Rating', ja: '総合評価 4.92 / 5.0' }),
        testimonials,
      },
      {
        blockType: 'ctaBanner',
        eyebrow: t({ en: 'Dermal Algorithm Matcher', ja: 'スキン診断' }),
        heading: t({ en: 'Unsure of your skin rhythm?', ja: 'ご自分の肌タイプがわからない方へ' }),
        description: t({
          en: 'Take our 2-minute diagnostic skin analysis. We match your environmental exposure, lipid barrier metrics, and daily cadence with a tailored three-step prescription.',
          ja: '2分でできる肌診断。生活環境、肌のバリア状態、毎日のリズムから、あなたに合った3ステップのケアをご提案します。',
        }),
        link: {
          type: 'custom',
          url: '/quiz',
          label: t({ en: 'Start Diagnostic Quiz', ja: '診断をはじめる' }),
          appearance: 'secondary',
        },
        theme: 'dark',
      },
    ],
    meta: {
      title: 'Éclat Dermatologie',
      description: t({
        en: 'Dermatological rigor meets sensorial poise.',
        ja: '皮膚科学の厳密さと、感覚に響く気品。',
      }),
    },
  };
};
