import Image, { type ImageProps } from 'next/image';
import type { Media } from '@/types/payload-types';

type CMSImageProps = Omit<ImageProps, 'src' | 'alt'> & {
  media: number | Media | null | undefined;
  alt?: string;
};

export function CMSImage({ media, alt, ...props }: CMSImageProps) {
  if (!media || typeof media !== 'object' || !media.url) return null;

  const sizeProps = props.fill ? {} : { width: media.width ?? undefined, height: media.height ?? undefined };

  return <Image src={media.url} alt={alt ?? media.alt} {...sizeProps} {...props} />;
}
