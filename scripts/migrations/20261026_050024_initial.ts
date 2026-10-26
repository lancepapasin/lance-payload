import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en', 'ja');
  CREATE TYPE "public"."enum_pages_hero_homepage_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_hero_homepage_links_link_appearance" AS ENUM('primary', 'secondary', 'text');
  CREATE TYPE "public"."enum_pages_blocks_breadcrumbs_background" AS ENUM('background', 'ivory', 'sand');
  CREATE TYPE "public"."enum_pages_blocks_category_grid_items_size" AS ENUM('large', 'small', 'full');
  CREATE TYPE "public"."enum_pages_blocks_category_grid_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_category_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_product_carousel_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_product_carousel_source" AS ENUM('bestsellers', 'category', 'manual');
  CREATE TYPE "public"."enum_pages_blocks_product_carousel_view_all_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_treatment_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_media_content_features_icon" AS ENUM('extraction', 'microbiome', 'packaging', 'certification', 'diagnostic', 'sustainability');
  CREATE TYPE "public"."enum_pages_blocks_media_content_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_media_content_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_media_content_image_badge_icon" AS ENUM('extraction', 'microbiome', 'packaging', 'certification', 'diagnostic', 'sustainability');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_cta_banner_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_banner_link_appearance" AS ENUM('primary', 'secondary', 'text');
  CREATE TYPE "public"."enum_pages_blocks_cta_banner_theme" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_pages_blocks_heading_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_heading_tone" AS ENUM('default', 'inverse');
  CREATE TYPE "public"."enum_pages_blocks_feature_list_features_icon" AS ENUM('extraction', 'microbiome', 'packaging', 'certification', 'diagnostic', 'sustainability');
  CREATE TYPE "public"."enum_pages_blocks_media_aspect" AS ENUM('portrait', 'square', 'landscape');
  CREATE TYPE "public"."enum_pages_blocks_media_badge_icon" AS ENUM('extraction', 'microbiome', 'packaging', 'certification', 'diagnostic', 'sustainability');
  CREATE TYPE "public"."enum_pages_blocks_buttons_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_buttons_links_link_appearance" AS ENUM('primary', 'secondary', 'text');
  CREATE TYPE "public"."enum_pages_blocks_category_card_layout" AS ENUM('image', 'banner');
  CREATE TYPE "public"."enum_pages_blocks_category_card_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_section_columns_width" AS ENUM('auto', 'full');
  CREATE TYPE "public"."enum_pages_blocks_section_layout" AS ENUM('12', '6-6', '7-5', '5-7', '4-4-4', '3-3-3-3');
  CREATE TYPE "public"."enum_pages_blocks_section_background" AS ENUM('background', 'ivory', 'sand');
  CREATE TYPE "public"."enum_pages_blocks_section_gap" AS ENUM('cards', 'editorial');
  CREATE TYPE "public"."enum_pages_blocks_section_vertical_align" AS ENUM('stretch', 'center');
  CREATE TYPE "public"."enum_pages_blocks_section_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_hero_variant" AS ENUM('none', 'homepage', 'subpage');
  CREATE TYPE "public"."enum_pages_hero_subpage_primary_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_hero_subpage_secondary_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_version_hero_homepage_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_version_hero_homepage_links_link_appearance" AS ENUM('primary', 'secondary', 'text');
  CREATE TYPE "public"."enum__pages_v_blocks_breadcrumbs_background" AS ENUM('background', 'ivory', 'sand');
  CREATE TYPE "public"."enum__pages_v_blocks_category_grid_items_size" AS ENUM('large', 'small', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_category_grid_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_category_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_product_carousel_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_product_carousel_source" AS ENUM('bestsellers', 'category', 'manual');
  CREATE TYPE "public"."enum__pages_v_blocks_product_carousel_view_all_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_treatment_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_media_content_features_icon" AS ENUM('extraction', 'microbiome', 'packaging', 'certification', 'diagnostic', 'sustainability');
  CREATE TYPE "public"."enum__pages_v_blocks_media_content_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_media_content_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_media_content_image_badge_icon" AS ENUM('extraction', 'microbiome', 'packaging', 'certification', 'diagnostic', 'sustainability');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_banner_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_banner_link_appearance" AS ENUM('primary', 'secondary', 'text');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_banner_theme" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum__pages_v_blocks_heading_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_heading_tone" AS ENUM('default', 'inverse');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_list_features_icon" AS ENUM('extraction', 'microbiome', 'packaging', 'certification', 'diagnostic', 'sustainability');
  CREATE TYPE "public"."enum__pages_v_blocks_media_aspect" AS ENUM('portrait', 'square', 'landscape');
  CREATE TYPE "public"."enum__pages_v_blocks_media_badge_icon" AS ENUM('extraction', 'microbiome', 'packaging', 'certification', 'diagnostic', 'sustainability');
  CREATE TYPE "public"."enum__pages_v_blocks_buttons_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_buttons_links_link_appearance" AS ENUM('primary', 'secondary', 'text');
  CREATE TYPE "public"."enum__pages_v_blocks_category_card_layout" AS ENUM('image', 'banner');
  CREATE TYPE "public"."enum__pages_v_blocks_category_card_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_section_columns_width" AS ENUM('auto', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_section_layout" AS ENUM('12', '6-6', '7-5', '5-7', '4-4-4', '3-3-3-3');
  CREATE TYPE "public"."enum__pages_v_blocks_section_background" AS ENUM('background', 'ivory', 'sand');
  CREATE TYPE "public"."enum__pages_v_blocks_section_gap" AS ENUM('cards', 'editorial');
  CREATE TYPE "public"."enum__pages_v_blocks_section_vertical_align" AS ENUM('stretch', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_section_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_version_hero_variant" AS ENUM('none', 'homepage', 'subpage');
  CREATE TYPE "public"."enum__pages_v_version_hero_subpage_primary_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_version_hero_subpage_secondary_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_published_locale" AS ENUM('en', 'ja');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_products_badge_tone" AS ENUM('accent', 'soft', 'neutral');
  CREATE TYPE "public"."enum_header_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_columns_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_legal_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_not_found_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "pages_hero_homepage_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_hero_homepage_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_appearance" "enum_pages_hero_homepage_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "pages_hero_homepage_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_home" boolean DEFAULT true,
  	"background" "enum_pages_blocks_breadcrumbs_background" DEFAULT 'background',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_breadcrumbs_locales" (
  	"home_label" varchar DEFAULT 'Home',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_category_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_category_grid_items_size" DEFAULT 'large',
  	"image_id" integer,
  	"link_type" "enum_pages_blocks_category_grid_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "pages_blocks_category_grid_items_locales" (
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar,
  	"tag" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_category_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_pages_blocks_category_grid_header_align" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_category_grid_locales" (
  	"header_eyebrow" varchar,
  	"header_heading" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_product_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_pages_blocks_product_carousel_header_align" DEFAULT 'left',
  	"source" "enum_pages_blocks_product_carousel_source" DEFAULT 'bestsellers',
  	"category_id" integer,
  	"limit" numeric DEFAULT 8,
  	"view_all_type" "enum_pages_blocks_product_carousel_view_all_type" DEFAULT 'reference',
  	"view_all_new_tab" boolean,
  	"view_all_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_product_carousel_locales" (
  	"header_eyebrow" varchar,
  	"header_heading" varchar,
  	"header_description" varchar,
  	"view_all_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_treatment_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_pages_blocks_treatment_grid_header_align" DEFAULT 'center',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_treatment_grid_locales" (
  	"header_eyebrow" varchar,
  	"header_heading" varchar,
  	"header_description" varchar,
  	"cta_label" varchar DEFAULT 'Reserve Suite',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_media_content_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_media_content_features_icon"
  );
  
  CREATE TABLE "pages_blocks_media_content_features_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_media_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_pages_blocks_media_content_header_align" DEFAULT 'left',
  	"image_id" integer,
  	"image_position" "enum_pages_blocks_media_content_image_position" DEFAULT 'left',
  	"image_badge_icon" "enum_pages_blocks_media_content_image_badge_icon",
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_media_content_locales" (
  	"header_eyebrow" varchar,
  	"header_heading" varchar,
  	"header_description" varchar,
  	"image_badge_title" varchar,
  	"image_badge_subtitle" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_pages_blocks_testimonials_header_align" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_testimonials_locales" (
  	"header_eyebrow" varchar,
  	"header_heading" varchar,
  	"header_description" varchar,
  	"rating_summary" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_cta_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_cta_banner_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_appearance" "enum_pages_blocks_cta_banner_link_appearance" DEFAULT 'primary',
  	"theme" "enum_pages_blocks_cta_banner_theme" DEFAULT 'dark',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_banner_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"description" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"align" "enum_pages_blocks_heading_align" DEFAULT 'left',
  	"tone" "enum_pages_blocks_heading_tone" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_heading_locales" (
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_feature_list_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_feature_list_features_icon"
  );
  
  CREATE TABLE "pages_blocks_feature_list_features_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_feature_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"aspect" "enum_pages_blocks_media_aspect" DEFAULT 'portrait',
  	"badge_icon" "enum_pages_blocks_media_badge_icon",
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_media_locales" (
  	"badge_title" varchar,
  	"badge_subtitle" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_content_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_buttons_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_buttons_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_appearance" "enum_pages_blocks_buttons_links_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE "pages_blocks_buttons_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_category_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_pages_blocks_category_card_layout" DEFAULT 'image',
  	"image_id" integer,
  	"link_type" "enum_pages_blocks_category_card_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_category_card_locales" (
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar,
  	"tag" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_product_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"product_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_treatment_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"treatment_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_treatment_card_locales" (
  	"cta_label" varchar DEFAULT 'Reserve Suite',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_testimonial_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"testimonial_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_section_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"width" "enum_pages_blocks_section_columns_width" DEFAULT 'auto'
  );
  
  CREATE TABLE "pages_blocks_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_pages_blocks_section_layout" DEFAULT '12',
  	"background" "enum_pages_blocks_section_background" DEFAULT 'background',
  	"gap" "enum_pages_blocks_section_gap" DEFAULT 'cards',
  	"vertical_align" "enum_pages_blocks_section_vertical_align" DEFAULT 'stretch',
  	"header_align" "enum_pages_blocks_section_header_align" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_section_locales" (
  	"header_eyebrow" varchar,
  	"header_heading" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_variant" "enum_pages_hero_variant" DEFAULT 'none',
  	"hero_homepage_image_id" integer,
  	"hero_homepage_overlay_card_image_id" integer,
  	"hero_subpage_primary_link_type" "enum_pages_hero_subpage_primary_link_type" DEFAULT 'reference',
  	"hero_subpage_primary_link_new_tab" boolean,
  	"hero_subpage_primary_link_url" varchar,
  	"hero_subpage_secondary_link_type" "enum_pages_hero_subpage_secondary_link_type" DEFAULT 'reference',
  	"hero_subpage_secondary_link_new_tab" boolean,
  	"hero_subpage_secondary_link_url" varchar,
  	"hero_subpage_image_id" integer,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "pages_locales" (
  	"title" varchar,
  	"hero_homepage_badge" varchar,
  	"hero_homepage_heading" jsonb,
  	"hero_homepage_description" varchar,
  	"hero_homepage_image_caption_label" varchar,
  	"hero_homepage_image_caption_meta" varchar,
  	"hero_homepage_overlay_card_label" varchar,
  	"hero_subpage_eyebrow" varchar,
  	"hero_subpage_title" varchar,
  	"hero_subpage_description" varchar,
  	"hero_subpage_primary_link_label" varchar,
  	"hero_subpage_secondary_link_label" varchar,
  	"hero_subpage_image_caption" varchar,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"_status" "enum_pages_status" DEFAULT 'draft',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"products_id" integer,
  	"categories_id" integer,
  	"treatments_id" integer,
  	"testimonials_id" integer
  );
  
  CREATE TABLE "_pages_v_version_hero_homepage_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_version_hero_homepage_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_appearance" "enum__pages_v_version_hero_homepage_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_hero_homepage_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_home" boolean DEFAULT true,
  	"background" "enum__pages_v_blocks_breadcrumbs_background" DEFAULT 'background',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_breadcrumbs_locales" (
  	"home_label" varchar DEFAULT 'Home',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_category_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__pages_v_blocks_category_grid_items_size" DEFAULT 'large',
  	"image_id" integer,
  	"link_type" "enum__pages_v_blocks_category_grid_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_category_grid_items_locales" (
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar,
  	"tag" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_category_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__pages_v_blocks_category_grid_header_align" DEFAULT 'left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_category_grid_locales" (
  	"header_eyebrow" varchar,
  	"header_heading" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_product_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__pages_v_blocks_product_carousel_header_align" DEFAULT 'left',
  	"source" "enum__pages_v_blocks_product_carousel_source" DEFAULT 'bestsellers',
  	"category_id" integer,
  	"limit" numeric DEFAULT 8,
  	"view_all_type" "enum__pages_v_blocks_product_carousel_view_all_type" DEFAULT 'reference',
  	"view_all_new_tab" boolean,
  	"view_all_url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_product_carousel_locales" (
  	"header_eyebrow" varchar,
  	"header_heading" varchar,
  	"header_description" varchar,
  	"view_all_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_treatment_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__pages_v_blocks_treatment_grid_header_align" DEFAULT 'center',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_treatment_grid_locales" (
  	"header_eyebrow" varchar,
  	"header_heading" varchar,
  	"header_description" varchar,
  	"cta_label" varchar DEFAULT 'Reserve Suite',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_media_content_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_media_content_features_icon",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_content_features_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_media_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__pages_v_blocks_media_content_header_align" DEFAULT 'left',
  	"image_id" integer,
  	"image_position" "enum__pages_v_blocks_media_content_image_position" DEFAULT 'left',
  	"image_badge_icon" "enum__pages_v_blocks_media_content_image_badge_icon",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_content_locales" (
  	"header_eyebrow" varchar,
  	"header_heading" varchar,
  	"header_description" varchar,
  	"image_badge_title" varchar,
  	"image_badge_subtitle" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__pages_v_blocks_testimonials_header_align" DEFAULT 'left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials_locales" (
  	"header_eyebrow" varchar,
  	"header_heading" varchar,
  	"header_description" varchar,
  	"rating_summary" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_cta_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_cta_banner_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_appearance" "enum__pages_v_blocks_cta_banner_link_appearance" DEFAULT 'primary',
  	"theme" "enum__pages_v_blocks_cta_banner_theme" DEFAULT 'dark',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_banner_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"description" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"align" "enum__pages_v_blocks_heading_align" DEFAULT 'left',
  	"tone" "enum__pages_v_blocks_heading_tone" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_heading_locales" (
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_feature_list_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_feature_list_features_icon",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_list_features_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_feature_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"aspect" "enum__pages_v_blocks_media_aspect" DEFAULT 'portrait',
  	"badge_icon" "enum__pages_v_blocks_media_badge_icon",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_locales" (
  	"badge_title" varchar,
  	"badge_subtitle" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_locales" (
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_buttons_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_buttons_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_appearance" "enum__pages_v_blocks_buttons_links_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_buttons_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_category_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout" "enum__pages_v_blocks_category_card_layout" DEFAULT 'image',
  	"image_id" integer,
  	"link_type" "enum__pages_v_blocks_category_card_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_category_card_locales" (
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar,
  	"tag" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_product_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"product_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_treatment_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"treatment_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_treatment_card_locales" (
  	"cta_label" varchar DEFAULT 'Reserve Suite',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_testimonial_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"testimonial_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_section_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"width" "enum__pages_v_blocks_section_columns_width" DEFAULT 'auto',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout" "enum__pages_v_blocks_section_layout" DEFAULT '12',
  	"background" "enum__pages_v_blocks_section_background" DEFAULT 'background',
  	"gap" "enum__pages_v_blocks_section_gap" DEFAULT 'cards',
  	"vertical_align" "enum__pages_v_blocks_section_vertical_align" DEFAULT 'stretch',
  	"header_align" "enum__pages_v_blocks_section_header_align" DEFAULT 'left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_section_locales" (
  	"header_eyebrow" varchar,
  	"header_heading" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_hero_variant" "enum__pages_v_version_hero_variant" DEFAULT 'none',
  	"version_hero_homepage_image_id" integer,
  	"version_hero_homepage_overlay_card_image_id" integer,
  	"version_hero_subpage_primary_link_type" "enum__pages_v_version_hero_subpage_primary_link_type" DEFAULT 'reference',
  	"version_hero_subpage_primary_link_new_tab" boolean,
  	"version_hero_subpage_primary_link_url" varchar,
  	"version_hero_subpage_secondary_link_type" "enum__pages_v_version_hero_subpage_secondary_link_type" DEFAULT 'reference',
  	"version_hero_subpage_secondary_link_new_tab" boolean,
  	"version_hero_subpage_secondary_link_url" varchar,
  	"version_hero_subpage_image_id" integer,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_parent_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__pages_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_pages_v_locales" (
  	"version_title" varchar,
  	"version_hero_homepage_badge" varchar,
  	"version_hero_homepage_heading" jsonb,
  	"version_hero_homepage_description" varchar,
  	"version_hero_homepage_image_caption_label" varchar,
  	"version_hero_homepage_image_caption_meta" varchar,
  	"version_hero_homepage_overlay_card_label" varchar,
  	"version_hero_subpage_eyebrow" varchar,
  	"version_hero_subpage_title" varchar,
  	"version_hero_subpage_description" varchar,
  	"version_hero_subpage_primary_link_label" varchar,
  	"version_hero_subpage_secondary_link_label" varchar,
  	"version_hero_subpage_image_caption" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"products_id" integer,
  	"categories_id" integer,
  	"treatments_id" integer,
  	"testimonials_id" integer
  );
  
  CREATE TABLE "products" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"price" numeric NOT NULL,
  	"compare_at_price" numeric,
  	"rating_average" numeric,
  	"rating_count" numeric DEFAULT 0,
  	"badge_tone" "enum_products_badge_tone" DEFAULT 'neutral',
  	"is_bestseller" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "products_locales" (
  	"title" varchar NOT NULL,
  	"key_ingredients" varchar,
  	"short_description" varchar,
  	"description" jsonb,
  	"badge_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "products_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "categories_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "treatments" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"duration" numeric,
  	"price" numeric NOT NULL,
  	"booking_url" varchar,
  	"image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "treatments_locales" (
  	"title" varchar NOT NULL,
  	"protocol" varchar,
  	"modality" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "testimonials" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"rating" numeric DEFAULT 5 NOT NULL,
  	"avatar_id" integer,
  	"product_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "testimonials_locales" (
  	"quote" varchar NOT NULL,
  	"role" varchar,
  	"tag" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"_objectkey" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"products_id" integer,
  	"categories_id" integer,
  	"treatments_id" integer,
  	"testimonials_id" integer,
  	"media_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "header_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "header_nav_items_locales" (
  	"link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"site_name" varchar NOT NULL,
  	"currency_label" varchar DEFAULT 'USD ($)',
  	"utility_links_wishlist_url" varchar,
  	"utility_links_cart_url" varchar,
  	"utility_links_account_url" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_locales" (
  	"tagline" varchar,
  	"search_placeholder" varchar DEFAULT 'Search formulations, ingredients...',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "header_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"products_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "footer_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_columns_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "footer_columns_links_locales" (
  	"link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "footer_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "footer_columns_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "footer_legal_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_legal_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "footer_legal_links_locales" (
  	"link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_locales" (
  	"about" varchar,
  	"badge" varchar,
  	"newsletter_title" varchar,
  	"newsletter_description" varchar,
  	"newsletter_placeholder" varchar DEFAULT 'Your email address',
  	"newsletter_button_label" varchar DEFAULT 'Subscribe',
  	"copyright" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"products_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "not_found" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum_not_found_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "not_found_locales" (
  	"eyebrow" varchar DEFAULT 'Error 404',
  	"heading" varchar DEFAULT 'Page not found' NOT NULL,
  	"description" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "not_found_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"products_id" integer,
  	"categories_id" integer
  );
  
  ALTER TABLE "pages_hero_homepage_links" ADD CONSTRAINT "pages_hero_homepage_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_hero_homepage_links_locales" ADD CONSTRAINT "pages_hero_homepage_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_hero_homepage_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_breadcrumbs" ADD CONSTRAINT "pages_blocks_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_breadcrumbs_locales" ADD CONSTRAINT "pages_blocks_breadcrumbs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_breadcrumbs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_category_grid_items" ADD CONSTRAINT "pages_blocks_category_grid_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_category_grid_items" ADD CONSTRAINT "pages_blocks_category_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_category_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_category_grid_items_locales" ADD CONSTRAINT "pages_blocks_category_grid_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_category_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_category_grid" ADD CONSTRAINT "pages_blocks_category_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_category_grid_locales" ADD CONSTRAINT "pages_blocks_category_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_category_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_product_carousel" ADD CONSTRAINT "pages_blocks_product_carousel_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_product_carousel" ADD CONSTRAINT "pages_blocks_product_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_product_carousel_locales" ADD CONSTRAINT "pages_blocks_product_carousel_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_product_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_treatment_grid" ADD CONSTRAINT "pages_blocks_treatment_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_treatment_grid_locales" ADD CONSTRAINT "pages_blocks_treatment_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_treatment_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_content_features" ADD CONSTRAINT "pages_blocks_media_content_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_media_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_content_features_locales" ADD CONSTRAINT "pages_blocks_media_content_features_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_media_content_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_content" ADD CONSTRAINT "pages_blocks_media_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_content" ADD CONSTRAINT "pages_blocks_media_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_content_locales" ADD CONSTRAINT "pages_blocks_media_content_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_media_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_locales" ADD CONSTRAINT "pages_blocks_testimonials_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_banner" ADD CONSTRAINT "pages_blocks_cta_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_banner_locales" ADD CONSTRAINT "pages_blocks_cta_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_heading" ADD CONSTRAINT "pages_blocks_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_heading_locales" ADD CONSTRAINT "pages_blocks_heading_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_heading"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_list_features" ADD CONSTRAINT "pages_blocks_feature_list_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_list_features_locales" ADD CONSTRAINT "pages_blocks_feature_list_features_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_list_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_list" ADD CONSTRAINT "pages_blocks_feature_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media" ADD CONSTRAINT "pages_blocks_media_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_media" ADD CONSTRAINT "pages_blocks_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_locales" ADD CONSTRAINT "pages_blocks_media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_locales" ADD CONSTRAINT "pages_blocks_content_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_buttons_links" ADD CONSTRAINT "pages_blocks_buttons_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_buttons_links_locales" ADD CONSTRAINT "pages_blocks_buttons_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_buttons_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_buttons" ADD CONSTRAINT "pages_blocks_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_category_card" ADD CONSTRAINT "pages_blocks_category_card_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_category_card" ADD CONSTRAINT "pages_blocks_category_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_category_card_locales" ADD CONSTRAINT "pages_blocks_category_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_category_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_product_card" ADD CONSTRAINT "pages_blocks_product_card_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_product_card" ADD CONSTRAINT "pages_blocks_product_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_treatment_card" ADD CONSTRAINT "pages_blocks_treatment_card_treatment_id_treatments_id_fk" FOREIGN KEY ("treatment_id") REFERENCES "public"."treatments"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_treatment_card" ADD CONSTRAINT "pages_blocks_treatment_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_treatment_card_locales" ADD CONSTRAINT "pages_blocks_treatment_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_treatment_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial_card" ADD CONSTRAINT "pages_blocks_testimonial_card_testimonial_id_testimonials_id_fk" FOREIGN KEY ("testimonial_id") REFERENCES "public"."testimonials"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial_card" ADD CONSTRAINT "pages_blocks_testimonial_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_section_columns" ADD CONSTRAINT "pages_blocks_section_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_section" ADD CONSTRAINT "pages_blocks_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_section_locales" ADD CONSTRAINT "pages_blocks_section_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_breadcrumbs" ADD CONSTRAINT "pages_breadcrumbs_doc_id_pages_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_breadcrumbs" ADD CONSTRAINT "pages_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_homepage_image_id_media_id_fk" FOREIGN KEY ("hero_homepage_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_homepage_overlay_card_image_id_media_id_fk" FOREIGN KEY ("hero_homepage_overlay_card_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_subpage_image_id_media_id_fk" FOREIGN KEY ("hero_subpage_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_products_fk" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_treatments_fk" FOREIGN KEY ("treatments_id") REFERENCES "public"."treatments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_homepage_links" ADD CONSTRAINT "_pages_v_version_hero_homepage_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_homepage_links_locales" ADD CONSTRAINT "_pages_v_version_hero_homepage_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_hero_homepage_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_breadcrumbs" ADD CONSTRAINT "_pages_v_blocks_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_breadcrumbs_locales" ADD CONSTRAINT "_pages_v_blocks_breadcrumbs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_breadcrumbs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_category_grid_items" ADD CONSTRAINT "_pages_v_blocks_category_grid_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_category_grid_items" ADD CONSTRAINT "_pages_v_blocks_category_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_category_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_category_grid_items_locales" ADD CONSTRAINT "_pages_v_blocks_category_grid_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_category_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_category_grid" ADD CONSTRAINT "_pages_v_blocks_category_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_category_grid_locales" ADD CONSTRAINT "_pages_v_blocks_category_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_category_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_product_carousel" ADD CONSTRAINT "_pages_v_blocks_product_carousel_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_product_carousel" ADD CONSTRAINT "_pages_v_blocks_product_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_product_carousel_locales" ADD CONSTRAINT "_pages_v_blocks_product_carousel_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_product_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_treatment_grid" ADD CONSTRAINT "_pages_v_blocks_treatment_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_treatment_grid_locales" ADD CONSTRAINT "_pages_v_blocks_treatment_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_treatment_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_content_features" ADD CONSTRAINT "_pages_v_blocks_media_content_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_media_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_content_features_locales" ADD CONSTRAINT "_pages_v_blocks_media_content_features_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_media_content_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_content" ADD CONSTRAINT "_pages_v_blocks_media_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_content" ADD CONSTRAINT "_pages_v_blocks_media_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_content_locales" ADD CONSTRAINT "_pages_v_blocks_media_content_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_media_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_locales" ADD CONSTRAINT "_pages_v_blocks_testimonials_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_banner" ADD CONSTRAINT "_pages_v_blocks_cta_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_banner_locales" ADD CONSTRAINT "_pages_v_blocks_cta_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_heading" ADD CONSTRAINT "_pages_v_blocks_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_heading_locales" ADD CONSTRAINT "_pages_v_blocks_heading_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_heading"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_list_features" ADD CONSTRAINT "_pages_v_blocks_feature_list_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_list_features_locales" ADD CONSTRAINT "_pages_v_blocks_feature_list_features_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_list_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_list" ADD CONSTRAINT "_pages_v_blocks_feature_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media" ADD CONSTRAINT "_pages_v_blocks_media_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media" ADD CONSTRAINT "_pages_v_blocks_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_locales" ADD CONSTRAINT "_pages_v_blocks_media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_locales" ADD CONSTRAINT "_pages_v_blocks_content_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_buttons_links" ADD CONSTRAINT "_pages_v_blocks_buttons_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_buttons_links_locales" ADD CONSTRAINT "_pages_v_blocks_buttons_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_buttons_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_buttons" ADD CONSTRAINT "_pages_v_blocks_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_category_card" ADD CONSTRAINT "_pages_v_blocks_category_card_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_category_card" ADD CONSTRAINT "_pages_v_blocks_category_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_category_card_locales" ADD CONSTRAINT "_pages_v_blocks_category_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_category_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_product_card" ADD CONSTRAINT "_pages_v_blocks_product_card_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_product_card" ADD CONSTRAINT "_pages_v_blocks_product_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_treatment_card" ADD CONSTRAINT "_pages_v_blocks_treatment_card_treatment_id_treatments_id_fk" FOREIGN KEY ("treatment_id") REFERENCES "public"."treatments"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_treatment_card" ADD CONSTRAINT "_pages_v_blocks_treatment_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_treatment_card_locales" ADD CONSTRAINT "_pages_v_blocks_treatment_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_treatment_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial_card" ADD CONSTRAINT "_pages_v_blocks_testimonial_card_testimonial_id_testimonials_id_fk" FOREIGN KEY ("testimonial_id") REFERENCES "public"."testimonials"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial_card" ADD CONSTRAINT "_pages_v_blocks_testimonial_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_section_columns" ADD CONSTRAINT "_pages_v_blocks_section_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_section" ADD CONSTRAINT "_pages_v_blocks_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_section_locales" ADD CONSTRAINT "_pages_v_blocks_section_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_breadcrumbs" ADD CONSTRAINT "_pages_v_version_breadcrumbs_doc_id_pages_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_version_breadcrumbs" ADD CONSTRAINT "_pages_v_version_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_homepage_image_id_media_id_fk" FOREIGN KEY ("version_hero_homepage_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_homepage_overlay_card_image_id_media_id_fk" FOREIGN KEY ("version_hero_homepage_overlay_card_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_subpage_image_id_media_id_fk" FOREIGN KEY ("version_hero_subpage_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_parent_id_pages_id_fk" FOREIGN KEY ("version_parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_products_fk" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_treatments_fk" FOREIGN KEY ("treatments_id") REFERENCES "public"."treatments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "products_locales" ADD CONSTRAINT "products_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "products_rels" ADD CONSTRAINT "products_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "products_rels" ADD CONSTRAINT "products_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "products_rels" ADD CONSTRAINT "products_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "categories" ADD CONSTRAINT "categories_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "categories_locales" ADD CONSTRAINT "categories_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "treatments" ADD CONSTRAINT "treatments_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "treatments_locales" ADD CONSTRAINT "treatments_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."treatments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "testimonials_locales" ADD CONSTRAINT "testimonials_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_products_fk" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_treatments_fk" FOREIGN KEY ("treatments_id") REFERENCES "public"."treatments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items_locales" ADD CONSTRAINT "header_nav_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_locales" ADD CONSTRAINT "header_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_products_fk" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns_links" ADD CONSTRAINT "footer_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns_links_locales" ADD CONSTRAINT "footer_columns_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns" ADD CONSTRAINT "footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns_locales" ADD CONSTRAINT "footer_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_legal_links" ADD CONSTRAINT "footer_legal_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_legal_links_locales" ADD CONSTRAINT "footer_legal_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_legal_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_locales" ADD CONSTRAINT "footer_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_products_fk" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "not_found_locales" ADD CONSTRAINT "not_found_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."not_found"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "not_found_rels" ADD CONSTRAINT "not_found_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."not_found"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "not_found_rels" ADD CONSTRAINT "not_found_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "not_found_rels" ADD CONSTRAINT "not_found_rels_products_fk" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "not_found_rels" ADD CONSTRAINT "not_found_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_hero_homepage_links_order_idx" ON "pages_hero_homepage_links" USING btree ("_order");
  CREATE INDEX "pages_hero_homepage_links_parent_id_idx" ON "pages_hero_homepage_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_hero_homepage_links_locales_locale_parent_id_unique" ON "pages_hero_homepage_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_hero_homepage_links_locales_parent_id_idx" ON "pages_hero_homepage_links_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_breadcrumbs_order_idx" ON "pages_blocks_breadcrumbs" USING btree ("_order");
  CREATE INDEX "pages_blocks_breadcrumbs_parent_id_idx" ON "pages_blocks_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_breadcrumbs_path_idx" ON "pages_blocks_breadcrumbs" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_breadcrumbs_locales_locale_parent_id_unique" ON "pages_blocks_breadcrumbs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_breadcrumbs_locales_parent_id_idx" ON "pages_blocks_breadcrumbs_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_category_grid_items_order_idx" ON "pages_blocks_category_grid_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_category_grid_items_parent_id_idx" ON "pages_blocks_category_grid_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_category_grid_items_image_idx" ON "pages_blocks_category_grid_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_category_grid_items_locales_locale_parent_id_un" ON "pages_blocks_category_grid_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_category_grid_items_locales_parent_id_idx" ON "pages_blocks_category_grid_items_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_category_grid_order_idx" ON "pages_blocks_category_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_category_grid_parent_id_idx" ON "pages_blocks_category_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_category_grid_path_idx" ON "pages_blocks_category_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_category_grid_locales_locale_parent_id_unique" ON "pages_blocks_category_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_category_grid_locales_parent_id_idx" ON "pages_blocks_category_grid_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_product_carousel_order_idx" ON "pages_blocks_product_carousel" USING btree ("_order");
  CREATE INDEX "pages_blocks_product_carousel_parent_id_idx" ON "pages_blocks_product_carousel" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_product_carousel_path_idx" ON "pages_blocks_product_carousel" USING btree ("_path");
  CREATE INDEX "pages_blocks_product_carousel_category_idx" ON "pages_blocks_product_carousel" USING btree ("category_id");
  CREATE UNIQUE INDEX "pages_blocks_product_carousel_locales_locale_parent_id_uniqu" ON "pages_blocks_product_carousel_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_product_carousel_locales_parent_id_idx" ON "pages_blocks_product_carousel_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_treatment_grid_order_idx" ON "pages_blocks_treatment_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_treatment_grid_parent_id_idx" ON "pages_blocks_treatment_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_treatment_grid_path_idx" ON "pages_blocks_treatment_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_treatment_grid_locales_locale_parent_id_unique" ON "pages_blocks_treatment_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_treatment_grid_locales_parent_id_idx" ON "pages_blocks_treatment_grid_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_content_features_order_idx" ON "pages_blocks_media_content_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_content_features_parent_id_idx" ON "pages_blocks_media_content_features" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_media_content_features_locales_locale_parent_id" ON "pages_blocks_media_content_features_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_media_content_features_locales_parent_id_idx" ON "pages_blocks_media_content_features_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_content_order_idx" ON "pages_blocks_media_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_content_parent_id_idx" ON "pages_blocks_media_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_content_path_idx" ON "pages_blocks_media_content" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_content_image_idx" ON "pages_blocks_media_content" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_media_content_locales_locale_parent_id_unique" ON "pages_blocks_media_content_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_media_content_locales_parent_id_idx" ON "pages_blocks_media_content_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_order_idx" ON "pages_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_parent_id_idx" ON "pages_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_path_idx" ON "pages_blocks_testimonials" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_testimonials_locales_locale_parent_id_unique" ON "pages_blocks_testimonials_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_testimonials_locales_parent_id_idx" ON "pages_blocks_testimonials_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_banner_order_idx" ON "pages_blocks_cta_banner" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_banner_parent_id_idx" ON "pages_blocks_cta_banner" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_banner_path_idx" ON "pages_blocks_cta_banner" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_cta_banner_locales_locale_parent_id_unique" ON "pages_blocks_cta_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_cta_banner_locales_parent_id_idx" ON "pages_blocks_cta_banner_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_heading_order_idx" ON "pages_blocks_heading" USING btree ("_order");
  CREATE INDEX "pages_blocks_heading_parent_id_idx" ON "pages_blocks_heading" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_heading_path_idx" ON "pages_blocks_heading" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_heading_locales_locale_parent_id_unique" ON "pages_blocks_heading_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_heading_locales_parent_id_idx" ON "pages_blocks_heading_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_list_features_order_idx" ON "pages_blocks_feature_list_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_list_features_parent_id_idx" ON "pages_blocks_feature_list_features" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_feature_list_features_locales_locale_parent_id_" ON "pages_blocks_feature_list_features_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_feature_list_features_locales_parent_id_idx" ON "pages_blocks_feature_list_features_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_list_order_idx" ON "pages_blocks_feature_list" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_list_parent_id_idx" ON "pages_blocks_feature_list" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_list_path_idx" ON "pages_blocks_feature_list" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_order_idx" ON "pages_blocks_media" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_parent_id_idx" ON "pages_blocks_media" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_path_idx" ON "pages_blocks_media" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_image_idx" ON "pages_blocks_media" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_media_locales_locale_parent_id_unique" ON "pages_blocks_media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_media_locales_parent_id_idx" ON "pages_blocks_media_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_order_idx" ON "pages_blocks_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_path_idx" ON "pages_blocks_content" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_content_locales_locale_parent_id_unique" ON "pages_blocks_content_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_content_locales_parent_id_idx" ON "pages_blocks_content_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_buttons_links_order_idx" ON "pages_blocks_buttons_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_buttons_links_parent_id_idx" ON "pages_blocks_buttons_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_buttons_links_locales_locale_parent_id_unique" ON "pages_blocks_buttons_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_buttons_links_locales_parent_id_idx" ON "pages_blocks_buttons_links_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_buttons_order_idx" ON "pages_blocks_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_buttons_parent_id_idx" ON "pages_blocks_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_buttons_path_idx" ON "pages_blocks_buttons" USING btree ("_path");
  CREATE INDEX "pages_blocks_category_card_order_idx" ON "pages_blocks_category_card" USING btree ("_order");
  CREATE INDEX "pages_blocks_category_card_parent_id_idx" ON "pages_blocks_category_card" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_category_card_path_idx" ON "pages_blocks_category_card" USING btree ("_path");
  CREATE INDEX "pages_blocks_category_card_image_idx" ON "pages_blocks_category_card" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_category_card_locales_locale_parent_id_unique" ON "pages_blocks_category_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_category_card_locales_parent_id_idx" ON "pages_blocks_category_card_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_product_card_order_idx" ON "pages_blocks_product_card" USING btree ("_order");
  CREATE INDEX "pages_blocks_product_card_parent_id_idx" ON "pages_blocks_product_card" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_product_card_path_idx" ON "pages_blocks_product_card" USING btree ("_path");
  CREATE INDEX "pages_blocks_product_card_product_idx" ON "pages_blocks_product_card" USING btree ("product_id");
  CREATE INDEX "pages_blocks_treatment_card_order_idx" ON "pages_blocks_treatment_card" USING btree ("_order");
  CREATE INDEX "pages_blocks_treatment_card_parent_id_idx" ON "pages_blocks_treatment_card" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_treatment_card_path_idx" ON "pages_blocks_treatment_card" USING btree ("_path");
  CREATE INDEX "pages_blocks_treatment_card_treatment_idx" ON "pages_blocks_treatment_card" USING btree ("treatment_id");
  CREATE UNIQUE INDEX "pages_blocks_treatment_card_locales_locale_parent_id_unique" ON "pages_blocks_treatment_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_treatment_card_locales_parent_id_idx" ON "pages_blocks_treatment_card_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial_card_order_idx" ON "pages_blocks_testimonial_card" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial_card_parent_id_idx" ON "pages_blocks_testimonial_card" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial_card_path_idx" ON "pages_blocks_testimonial_card" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonial_card_testimonial_idx" ON "pages_blocks_testimonial_card" USING btree ("testimonial_id");
  CREATE INDEX "pages_blocks_section_columns_order_idx" ON "pages_blocks_section_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_section_columns_parent_id_idx" ON "pages_blocks_section_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_section_order_idx" ON "pages_blocks_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_section_parent_id_idx" ON "pages_blocks_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_section_path_idx" ON "pages_blocks_section" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_section_locales_locale_parent_id_unique" ON "pages_blocks_section_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_section_locales_parent_id_idx" ON "pages_blocks_section_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_breadcrumbs_order_idx" ON "pages_breadcrumbs" USING btree ("_order");
  CREATE INDEX "pages_breadcrumbs_parent_id_idx" ON "pages_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "pages_breadcrumbs_locale_idx" ON "pages_breadcrumbs" USING btree ("_locale");
  CREATE INDEX "pages_breadcrumbs_doc_idx" ON "pages_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX "pages_hero_homepage_hero_homepage_image_idx" ON "pages" USING btree ("hero_homepage_image_id");
  CREATE INDEX "pages_hero_homepage_overlay_card_hero_homepage_overlay_c_idx" ON "pages" USING btree ("hero_homepage_overlay_card_image_id");
  CREATE INDEX "pages_hero_subpage_hero_subpage_image_idx" ON "pages" USING btree ("hero_subpage_image_id");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_parent_idx" ON "pages" USING btree ("parent_id");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages_locales" USING btree ("meta_image_id","_locale");
  CREATE INDEX "pages__status_idx" ON "pages_locales" USING btree ("_status","_locale");
  CREATE UNIQUE INDEX "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_locales_parent_id_idx" ON "pages_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX "pages_rels_products_id_idx" ON "pages_rels" USING btree ("products_id");
  CREATE INDEX "pages_rels_categories_id_idx" ON "pages_rels" USING btree ("categories_id");
  CREATE INDEX "pages_rels_treatments_id_idx" ON "pages_rels" USING btree ("treatments_id");
  CREATE INDEX "pages_rels_testimonials_id_idx" ON "pages_rels" USING btree ("testimonials_id");
  CREATE INDEX "_pages_v_version_hero_homepage_links_order_idx" ON "_pages_v_version_hero_homepage_links" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_homepage_links_parent_id_idx" ON "_pages_v_version_hero_homepage_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_hero_homepage_links_locales_locale_parent_i" ON "_pages_v_version_hero_homepage_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_version_hero_homepage_links_locales_parent_id_idx" ON "_pages_v_version_hero_homepage_links_locales" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_breadcrumbs_order_idx" ON "_pages_v_blocks_breadcrumbs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_breadcrumbs_parent_id_idx" ON "_pages_v_blocks_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_breadcrumbs_path_idx" ON "_pages_v_blocks_breadcrumbs" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_breadcrumbs_locales_locale_parent_id_unique" ON "_pages_v_blocks_breadcrumbs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_breadcrumbs_locales_parent_id_idx" ON "_pages_v_blocks_breadcrumbs_locales" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_category_grid_items_order_idx" ON "_pages_v_blocks_category_grid_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_category_grid_items_parent_id_idx" ON "_pages_v_blocks_category_grid_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_category_grid_items_image_idx" ON "_pages_v_blocks_category_grid_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_category_grid_items_locales_locale_parent_id" ON "_pages_v_blocks_category_grid_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_category_grid_items_locales_parent_id_idx" ON "_pages_v_blocks_category_grid_items_locales" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_category_grid_order_idx" ON "_pages_v_blocks_category_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_category_grid_parent_id_idx" ON "_pages_v_blocks_category_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_category_grid_path_idx" ON "_pages_v_blocks_category_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_category_grid_locales_locale_parent_id_uniqu" ON "_pages_v_blocks_category_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_category_grid_locales_parent_id_idx" ON "_pages_v_blocks_category_grid_locales" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_product_carousel_order_idx" ON "_pages_v_blocks_product_carousel" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_product_carousel_parent_id_idx" ON "_pages_v_blocks_product_carousel" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_product_carousel_path_idx" ON "_pages_v_blocks_product_carousel" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_product_carousel_category_idx" ON "_pages_v_blocks_product_carousel" USING btree ("category_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_product_carousel_locales_locale_parent_id_un" ON "_pages_v_blocks_product_carousel_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_product_carousel_locales_parent_id_idx" ON "_pages_v_blocks_product_carousel_locales" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_treatment_grid_order_idx" ON "_pages_v_blocks_treatment_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_treatment_grid_parent_id_idx" ON "_pages_v_blocks_treatment_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_treatment_grid_path_idx" ON "_pages_v_blocks_treatment_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_treatment_grid_locales_locale_parent_id_uniq" ON "_pages_v_blocks_treatment_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_treatment_grid_locales_parent_id_idx" ON "_pages_v_blocks_treatment_grid_locales" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_content_features_order_idx" ON "_pages_v_blocks_media_content_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_content_features_parent_id_idx" ON "_pages_v_blocks_media_content_features" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_media_content_features_locales_locale_parent" ON "_pages_v_blocks_media_content_features_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_media_content_features_locales_parent_id_idx" ON "_pages_v_blocks_media_content_features_locales" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_content_order_idx" ON "_pages_v_blocks_media_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_content_parent_id_idx" ON "_pages_v_blocks_media_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_content_path_idx" ON "_pages_v_blocks_media_content" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_content_image_idx" ON "_pages_v_blocks_media_content" USING btree ("image_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_media_content_locales_locale_parent_id_uniqu" ON "_pages_v_blocks_media_content_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_media_content_locales_parent_id_idx" ON "_pages_v_blocks_media_content_locales" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_order_idx" ON "_pages_v_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_path_idx" ON "_pages_v_blocks_testimonials" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_testimonials_locales_locale_parent_id_unique" ON "_pages_v_blocks_testimonials_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_locales_parent_id_idx" ON "_pages_v_blocks_testimonials_locales" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_banner_order_idx" ON "_pages_v_blocks_cta_banner" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_banner_parent_id_idx" ON "_pages_v_blocks_cta_banner" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_banner_path_idx" ON "_pages_v_blocks_cta_banner" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_cta_banner_locales_locale_parent_id_unique" ON "_pages_v_blocks_cta_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_banner_locales_parent_id_idx" ON "_pages_v_blocks_cta_banner_locales" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_heading_order_idx" ON "_pages_v_blocks_heading" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_heading_parent_id_idx" ON "_pages_v_blocks_heading" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_heading_path_idx" ON "_pages_v_blocks_heading" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_heading_locales_locale_parent_id_unique" ON "_pages_v_blocks_heading_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_heading_locales_parent_id_idx" ON "_pages_v_blocks_heading_locales" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_list_features_order_idx" ON "_pages_v_blocks_feature_list_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_list_features_parent_id_idx" ON "_pages_v_blocks_feature_list_features" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_feature_list_features_locales_locale_parent_" ON "_pages_v_blocks_feature_list_features_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_list_features_locales_parent_id_idx" ON "_pages_v_blocks_feature_list_features_locales" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_list_order_idx" ON "_pages_v_blocks_feature_list" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_list_parent_id_idx" ON "_pages_v_blocks_feature_list" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_list_path_idx" ON "_pages_v_blocks_feature_list" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_order_idx" ON "_pages_v_blocks_media" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_parent_id_idx" ON "_pages_v_blocks_media" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_path_idx" ON "_pages_v_blocks_media" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_image_idx" ON "_pages_v_blocks_media" USING btree ("image_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_media_locales_locale_parent_id_unique" ON "_pages_v_blocks_media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_media_locales_parent_id_idx" ON "_pages_v_blocks_media_locales" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_content_locales_locale_parent_id_unique" ON "_pages_v_blocks_content_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_content_locales_parent_id_idx" ON "_pages_v_blocks_content_locales" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_buttons_links_order_idx" ON "_pages_v_blocks_buttons_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_buttons_links_parent_id_idx" ON "_pages_v_blocks_buttons_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_buttons_links_locales_locale_parent_id_uniqu" ON "_pages_v_blocks_buttons_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_buttons_links_locales_parent_id_idx" ON "_pages_v_blocks_buttons_links_locales" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_buttons_order_idx" ON "_pages_v_blocks_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_buttons_parent_id_idx" ON "_pages_v_blocks_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_buttons_path_idx" ON "_pages_v_blocks_buttons" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_category_card_order_idx" ON "_pages_v_blocks_category_card" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_category_card_parent_id_idx" ON "_pages_v_blocks_category_card" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_category_card_path_idx" ON "_pages_v_blocks_category_card" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_category_card_image_idx" ON "_pages_v_blocks_category_card" USING btree ("image_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_category_card_locales_locale_parent_id_uniqu" ON "_pages_v_blocks_category_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_category_card_locales_parent_id_idx" ON "_pages_v_blocks_category_card_locales" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_product_card_order_idx" ON "_pages_v_blocks_product_card" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_product_card_parent_id_idx" ON "_pages_v_blocks_product_card" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_product_card_path_idx" ON "_pages_v_blocks_product_card" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_product_card_product_idx" ON "_pages_v_blocks_product_card" USING btree ("product_id");
  CREATE INDEX "_pages_v_blocks_treatment_card_order_idx" ON "_pages_v_blocks_treatment_card" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_treatment_card_parent_id_idx" ON "_pages_v_blocks_treatment_card" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_treatment_card_path_idx" ON "_pages_v_blocks_treatment_card" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_treatment_card_treatment_idx" ON "_pages_v_blocks_treatment_card" USING btree ("treatment_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_treatment_card_locales_locale_parent_id_uniq" ON "_pages_v_blocks_treatment_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_treatment_card_locales_parent_id_idx" ON "_pages_v_blocks_treatment_card_locales" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial_card_order_idx" ON "_pages_v_blocks_testimonial_card" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial_card_parent_id_idx" ON "_pages_v_blocks_testimonial_card" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial_card_path_idx" ON "_pages_v_blocks_testimonial_card" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonial_card_testimonial_idx" ON "_pages_v_blocks_testimonial_card" USING btree ("testimonial_id");
  CREATE INDEX "_pages_v_blocks_section_columns_order_idx" ON "_pages_v_blocks_section_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_section_columns_parent_id_idx" ON "_pages_v_blocks_section_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_section_order_idx" ON "_pages_v_blocks_section" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_section_parent_id_idx" ON "_pages_v_blocks_section" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_section_path_idx" ON "_pages_v_blocks_section" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_section_locales_locale_parent_id_unique" ON "_pages_v_blocks_section_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_section_locales_parent_id_idx" ON "_pages_v_blocks_section_locales" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_breadcrumbs_order_idx" ON "_pages_v_version_breadcrumbs" USING btree ("_order");
  CREATE INDEX "_pages_v_version_breadcrumbs_parent_id_idx" ON "_pages_v_version_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_breadcrumbs_locale_idx" ON "_pages_v_version_breadcrumbs" USING btree ("_locale");
  CREATE INDEX "_pages_v_version_breadcrumbs_doc_idx" ON "_pages_v_version_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_hero_homepage_version_hero_homepage_ima_idx" ON "_pages_v" USING btree ("version_hero_homepage_image_id");
  CREATE INDEX "_pages_v_version_hero_homepage_overlay_card_version_hero_idx" ON "_pages_v" USING btree ("version_hero_homepage_overlay_card_image_id");
  CREATE INDEX "_pages_v_version_hero_subpage_version_hero_subpage_image_idx" ON "_pages_v" USING btree ("version_hero_subpage_image_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_parent_idx" ON "_pages_v" USING btree ("version_parent_id");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_snapshot_idx" ON "_pages_v" USING btree ("snapshot");
  CREATE INDEX "_pages_v_published_locale_idx" ON "_pages_v" USING btree ("published_locale");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v_locales" USING btree ("version__status","_locale");
  CREATE UNIQUE INDEX "_pages_v_locales_locale_parent_id_unique" ON "_pages_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_locales_parent_id_idx" ON "_pages_v_locales" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX "_pages_v_rels_products_id_idx" ON "_pages_v_rels" USING btree ("products_id");
  CREATE INDEX "_pages_v_rels_categories_id_idx" ON "_pages_v_rels" USING btree ("categories_id");
  CREATE INDEX "_pages_v_rels_treatments_id_idx" ON "_pages_v_rels" USING btree ("treatments_id");
  CREATE INDEX "_pages_v_rels_testimonials_id_idx" ON "_pages_v_rels" USING btree ("testimonials_id");
  CREATE UNIQUE INDEX "products_slug_idx" ON "products" USING btree ("slug");
  CREATE INDEX "products_is_bestseller_idx" ON "products" USING btree ("is_bestseller");
  CREATE INDEX "products_updated_at_idx" ON "products" USING btree ("updated_at");
  CREATE INDEX "products_created_at_idx" ON "products" USING btree ("created_at");
  CREATE UNIQUE INDEX "products_locales_locale_parent_id_unique" ON "products_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "products_locales_parent_id_idx" ON "products_locales" USING btree ("_parent_id");
  CREATE INDEX "products_rels_order_idx" ON "products_rels" USING btree ("order");
  CREATE INDEX "products_rels_parent_idx" ON "products_rels" USING btree ("parent_id");
  CREATE INDEX "products_rels_path_idx" ON "products_rels" USING btree ("path");
  CREATE INDEX "products_rels_media_id_idx" ON "products_rels" USING btree ("media_id");
  CREATE INDEX "products_rels_categories_id_idx" ON "products_rels" USING btree ("categories_id");
  CREATE UNIQUE INDEX "categories_slug_idx" ON "categories" USING btree ("slug");
  CREATE INDEX "categories_image_idx" ON "categories" USING btree ("image_id");
  CREATE INDEX "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX "categories_created_at_idx" ON "categories" USING btree ("created_at");
  CREATE UNIQUE INDEX "categories_locales_locale_parent_id_unique" ON "categories_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "categories_locales_parent_id_idx" ON "categories_locales" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "treatments_slug_idx" ON "treatments" USING btree ("slug");
  CREATE INDEX "treatments_image_idx" ON "treatments" USING btree ("image_id");
  CREATE INDEX "treatments_updated_at_idx" ON "treatments" USING btree ("updated_at");
  CREATE INDEX "treatments_created_at_idx" ON "treatments" USING btree ("created_at");
  CREATE UNIQUE INDEX "treatments_locales_locale_parent_id_unique" ON "treatments_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "treatments_locales_parent_id_idx" ON "treatments_locales" USING btree ("_parent_id");
  CREATE INDEX "testimonials_avatar_idx" ON "testimonials" USING btree ("avatar_id");
  CREATE INDEX "testimonials_product_idx" ON "testimonials" USING btree ("product_id");
  CREATE INDEX "testimonials_updated_at_idx" ON "testimonials" USING btree ("updated_at");
  CREATE INDEX "testimonials_created_at_idx" ON "testimonials" USING btree ("created_at");
  CREATE UNIQUE INDEX "testimonials_locales_locale_parent_id_unique" ON "testimonials_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "testimonials_locales_parent_id_idx" ON "testimonials_locales" USING btree ("_parent_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_products_id_idx" ON "payload_locked_documents_rels" USING btree ("products_id");
  CREATE INDEX "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX "payload_locked_documents_rels_treatments_id_idx" ON "payload_locked_documents_rels" USING btree ("treatments_id");
  CREATE INDEX "payload_locked_documents_rels_testimonials_id_idx" ON "payload_locked_documents_rels" USING btree ("testimonials_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "header_nav_items_order_idx" ON "header_nav_items" USING btree ("_order");
  CREATE INDEX "header_nav_items_parent_id_idx" ON "header_nav_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "header_nav_items_locales_locale_parent_id_unique" ON "header_nav_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "header_nav_items_locales_parent_id_idx" ON "header_nav_items_locales" USING btree ("_parent_id");
  CREATE INDEX "header_logo_idx" ON "header" USING btree ("logo_id");
  CREATE UNIQUE INDEX "header_locales_locale_parent_id_unique" ON "header_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "header_locales_parent_id_idx" ON "header_locales" USING btree ("_parent_id");
  CREATE INDEX "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX "header_rels_products_id_idx" ON "header_rels" USING btree ("products_id");
  CREATE INDEX "header_rels_categories_id_idx" ON "header_rels" USING btree ("categories_id");
  CREATE INDEX "footer_columns_links_order_idx" ON "footer_columns_links" USING btree ("_order");
  CREATE INDEX "footer_columns_links_parent_id_idx" ON "footer_columns_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "footer_columns_links_locales_locale_parent_id_unique" ON "footer_columns_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "footer_columns_links_locales_parent_id_idx" ON "footer_columns_links_locales" USING btree ("_parent_id");
  CREATE INDEX "footer_columns_order_idx" ON "footer_columns" USING btree ("_order");
  CREATE INDEX "footer_columns_parent_id_idx" ON "footer_columns" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "footer_columns_locales_locale_parent_id_unique" ON "footer_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "footer_columns_locales_parent_id_idx" ON "footer_columns_locales" USING btree ("_parent_id");
  CREATE INDEX "footer_legal_links_order_idx" ON "footer_legal_links" USING btree ("_order");
  CREATE INDEX "footer_legal_links_parent_id_idx" ON "footer_legal_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "footer_legal_links_locales_locale_parent_id_unique" ON "footer_legal_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "footer_legal_links_locales_parent_id_idx" ON "footer_legal_links_locales" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "footer_locales_locale_parent_id_unique" ON "footer_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "footer_locales_parent_id_idx" ON "footer_locales" USING btree ("_parent_id");
  CREATE INDEX "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  CREATE INDEX "footer_rels_products_id_idx" ON "footer_rels" USING btree ("products_id");
  CREATE INDEX "footer_rels_categories_id_idx" ON "footer_rels" USING btree ("categories_id");
  CREATE UNIQUE INDEX "not_found_locales_locale_parent_id_unique" ON "not_found_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "not_found_locales_parent_id_idx" ON "not_found_locales" USING btree ("_parent_id");
  CREATE INDEX "not_found_rels_order_idx" ON "not_found_rels" USING btree ("order");
  CREATE INDEX "not_found_rels_parent_idx" ON "not_found_rels" USING btree ("parent_id");
  CREATE INDEX "not_found_rels_path_idx" ON "not_found_rels" USING btree ("path");
  CREATE INDEX "not_found_rels_pages_id_idx" ON "not_found_rels" USING btree ("pages_id");
  CREATE INDEX "not_found_rels_products_id_idx" ON "not_found_rels" USING btree ("products_id");
  CREATE INDEX "not_found_rels_categories_id_idx" ON "not_found_rels" USING btree ("categories_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_hero_homepage_links" CASCADE;
  DROP TABLE "pages_hero_homepage_links_locales" CASCADE;
  DROP TABLE "pages_blocks_breadcrumbs" CASCADE;
  DROP TABLE "pages_blocks_breadcrumbs_locales" CASCADE;
  DROP TABLE "pages_blocks_category_grid_items" CASCADE;
  DROP TABLE "pages_blocks_category_grid_items_locales" CASCADE;
  DROP TABLE "pages_blocks_category_grid" CASCADE;
  DROP TABLE "pages_blocks_category_grid_locales" CASCADE;
  DROP TABLE "pages_blocks_product_carousel" CASCADE;
  DROP TABLE "pages_blocks_product_carousel_locales" CASCADE;
  DROP TABLE "pages_blocks_treatment_grid" CASCADE;
  DROP TABLE "pages_blocks_treatment_grid_locales" CASCADE;
  DROP TABLE "pages_blocks_media_content_features" CASCADE;
  DROP TABLE "pages_blocks_media_content_features_locales" CASCADE;
  DROP TABLE "pages_blocks_media_content" CASCADE;
  DROP TABLE "pages_blocks_media_content_locales" CASCADE;
  DROP TABLE "pages_blocks_testimonials" CASCADE;
  DROP TABLE "pages_blocks_testimonials_locales" CASCADE;
  DROP TABLE "pages_blocks_cta_banner" CASCADE;
  DROP TABLE "pages_blocks_cta_banner_locales" CASCADE;
  DROP TABLE "pages_blocks_heading" CASCADE;
  DROP TABLE "pages_blocks_heading_locales" CASCADE;
  DROP TABLE "pages_blocks_feature_list_features" CASCADE;
  DROP TABLE "pages_blocks_feature_list_features_locales" CASCADE;
  DROP TABLE "pages_blocks_feature_list" CASCADE;
  DROP TABLE "pages_blocks_media" CASCADE;
  DROP TABLE "pages_blocks_media_locales" CASCADE;
  DROP TABLE "pages_blocks_content" CASCADE;
  DROP TABLE "pages_blocks_content_locales" CASCADE;
  DROP TABLE "pages_blocks_buttons_links" CASCADE;
  DROP TABLE "pages_blocks_buttons_links_locales" CASCADE;
  DROP TABLE "pages_blocks_buttons" CASCADE;
  DROP TABLE "pages_blocks_category_card" CASCADE;
  DROP TABLE "pages_blocks_category_card_locales" CASCADE;
  DROP TABLE "pages_blocks_product_card" CASCADE;
  DROP TABLE "pages_blocks_treatment_card" CASCADE;
  DROP TABLE "pages_blocks_treatment_card_locales" CASCADE;
  DROP TABLE "pages_blocks_testimonial_card" CASCADE;
  DROP TABLE "pages_blocks_section_columns" CASCADE;
  DROP TABLE "pages_blocks_section" CASCADE;
  DROP TABLE "pages_blocks_section_locales" CASCADE;
  DROP TABLE "pages_breadcrumbs" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_version_hero_homepage_links" CASCADE;
  DROP TABLE "_pages_v_version_hero_homepage_links_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_breadcrumbs" CASCADE;
  DROP TABLE "_pages_v_blocks_breadcrumbs_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_category_grid_items" CASCADE;
  DROP TABLE "_pages_v_blocks_category_grid_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_category_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_category_grid_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_product_carousel" CASCADE;
  DROP TABLE "_pages_v_blocks_product_carousel_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_treatment_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_treatment_grid_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_media_content_features" CASCADE;
  DROP TABLE "_pages_v_blocks_media_content_features_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_media_content" CASCADE;
  DROP TABLE "_pages_v_blocks_media_content_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_banner" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_banner_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_heading" CASCADE;
  DROP TABLE "_pages_v_blocks_heading_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_list_features" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_list_features_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_list" CASCADE;
  DROP TABLE "_pages_v_blocks_media" CASCADE;
  DROP TABLE "_pages_v_blocks_media_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_content" CASCADE;
  DROP TABLE "_pages_v_blocks_content_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_buttons_links" CASCADE;
  DROP TABLE "_pages_v_blocks_buttons_links_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_category_card" CASCADE;
  DROP TABLE "_pages_v_blocks_category_card_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_product_card" CASCADE;
  DROP TABLE "_pages_v_blocks_treatment_card" CASCADE;
  DROP TABLE "_pages_v_blocks_treatment_card_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial_card" CASCADE;
  DROP TABLE "_pages_v_blocks_section_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_section" CASCADE;
  DROP TABLE "_pages_v_blocks_section_locales" CASCADE;
  DROP TABLE "_pages_v_version_breadcrumbs" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_locales" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "products" CASCADE;
  DROP TABLE "products_locales" CASCADE;
  DROP TABLE "products_rels" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "categories_locales" CASCADE;
  DROP TABLE "treatments" CASCADE;
  DROP TABLE "treatments_locales" CASCADE;
  DROP TABLE "testimonials" CASCADE;
  DROP TABLE "testimonials_locales" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "header_nav_items" CASCADE;
  DROP TABLE "header_nav_items_locales" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_locales" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  DROP TABLE "footer_columns_links" CASCADE;
  DROP TABLE "footer_columns_links_locales" CASCADE;
  DROP TABLE "footer_columns" CASCADE;
  DROP TABLE "footer_columns_locales" CASCADE;
  DROP TABLE "footer_legal_links" CASCADE;
  DROP TABLE "footer_legal_links_locales" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_locales" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TABLE "not_found" CASCADE;
  DROP TABLE "not_found_locales" CASCADE;
  DROP TABLE "not_found_rels" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_pages_hero_homepage_links_link_type";
  DROP TYPE "public"."enum_pages_hero_homepage_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_breadcrumbs_background";
  DROP TYPE "public"."enum_pages_blocks_category_grid_items_size";
  DROP TYPE "public"."enum_pages_blocks_category_grid_items_link_type";
  DROP TYPE "public"."enum_pages_blocks_category_grid_header_align";
  DROP TYPE "public"."enum_pages_blocks_product_carousel_header_align";
  DROP TYPE "public"."enum_pages_blocks_product_carousel_source";
  DROP TYPE "public"."enum_pages_blocks_product_carousel_view_all_type";
  DROP TYPE "public"."enum_pages_blocks_treatment_grid_header_align";
  DROP TYPE "public"."enum_pages_blocks_media_content_features_icon";
  DROP TYPE "public"."enum_pages_blocks_media_content_header_align";
  DROP TYPE "public"."enum_pages_blocks_media_content_image_position";
  DROP TYPE "public"."enum_pages_blocks_media_content_image_badge_icon";
  DROP TYPE "public"."enum_pages_blocks_testimonials_header_align";
  DROP TYPE "public"."enum_pages_blocks_cta_banner_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta_banner_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_cta_banner_theme";
  DROP TYPE "public"."enum_pages_blocks_heading_align";
  DROP TYPE "public"."enum_pages_blocks_heading_tone";
  DROP TYPE "public"."enum_pages_blocks_feature_list_features_icon";
  DROP TYPE "public"."enum_pages_blocks_media_aspect";
  DROP TYPE "public"."enum_pages_blocks_media_badge_icon";
  DROP TYPE "public"."enum_pages_blocks_buttons_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_buttons_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_category_card_layout";
  DROP TYPE "public"."enum_pages_blocks_category_card_link_type";
  DROP TYPE "public"."enum_pages_blocks_section_columns_width";
  DROP TYPE "public"."enum_pages_blocks_section_layout";
  DROP TYPE "public"."enum_pages_blocks_section_background";
  DROP TYPE "public"."enum_pages_blocks_section_gap";
  DROP TYPE "public"."enum_pages_blocks_section_vertical_align";
  DROP TYPE "public"."enum_pages_blocks_section_header_align";
  DROP TYPE "public"."enum_pages_hero_variant";
  DROP TYPE "public"."enum_pages_hero_subpage_primary_link_type";
  DROP TYPE "public"."enum_pages_hero_subpage_secondary_link_type";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_version_hero_homepage_links_link_type";
  DROP TYPE "public"."enum__pages_v_version_hero_homepage_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_breadcrumbs_background";
  DROP TYPE "public"."enum__pages_v_blocks_category_grid_items_size";
  DROP TYPE "public"."enum__pages_v_blocks_category_grid_items_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_category_grid_header_align";
  DROP TYPE "public"."enum__pages_v_blocks_product_carousel_header_align";
  DROP TYPE "public"."enum__pages_v_blocks_product_carousel_source";
  DROP TYPE "public"."enum__pages_v_blocks_product_carousel_view_all_type";
  DROP TYPE "public"."enum__pages_v_blocks_treatment_grid_header_align";
  DROP TYPE "public"."enum__pages_v_blocks_media_content_features_icon";
  DROP TYPE "public"."enum__pages_v_blocks_media_content_header_align";
  DROP TYPE "public"."enum__pages_v_blocks_media_content_image_position";
  DROP TYPE "public"."enum__pages_v_blocks_media_content_image_badge_icon";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_header_align";
  DROP TYPE "public"."enum__pages_v_blocks_cta_banner_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_banner_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_cta_banner_theme";
  DROP TYPE "public"."enum__pages_v_blocks_heading_align";
  DROP TYPE "public"."enum__pages_v_blocks_heading_tone";
  DROP TYPE "public"."enum__pages_v_blocks_feature_list_features_icon";
  DROP TYPE "public"."enum__pages_v_blocks_media_aspect";
  DROP TYPE "public"."enum__pages_v_blocks_media_badge_icon";
  DROP TYPE "public"."enum__pages_v_blocks_buttons_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_buttons_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_category_card_layout";
  DROP TYPE "public"."enum__pages_v_blocks_category_card_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_section_columns_width";
  DROP TYPE "public"."enum__pages_v_blocks_section_layout";
  DROP TYPE "public"."enum__pages_v_blocks_section_background";
  DROP TYPE "public"."enum__pages_v_blocks_section_gap";
  DROP TYPE "public"."enum__pages_v_blocks_section_vertical_align";
  DROP TYPE "public"."enum__pages_v_blocks_section_header_align";
  DROP TYPE "public"."enum__pages_v_version_hero_variant";
  DROP TYPE "public"."enum__pages_v_version_hero_subpage_primary_link_type";
  DROP TYPE "public"."enum__pages_v_version_hero_subpage_secondary_link_type";
  DROP TYPE "public"."enum__pages_v_published_locale";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_products_badge_tone";
  DROP TYPE "public"."enum_header_nav_items_link_type";
  DROP TYPE "public"."enum_footer_columns_links_link_type";
  DROP TYPE "public"."enum_footer_legal_links_link_type";
  DROP TYPE "public"."enum_not_found_link_type";`)
}
