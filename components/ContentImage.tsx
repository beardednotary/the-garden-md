import Image from "next/image";
import type { ContentImage as ContentImageType } from "@/lib/types";

function Figure({ image }: { image: ContentImageType }) {
  return (
    <figure className="border border-border bg-paper-light p-2 shadow-panel">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 760px, 100vw" className="object-cover" />
      </div>
      {image.credit && (
        <figcaption className="mt-2 px-1 pb-1 text-xs text-muted">
          {image.creditUrl ? (
            <a
              href={image.creditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline"
            >
              {image.credit}
            </a>
          ) : (
            image.credit
          )}
        </figcaption>
      )}
    </figure>
  );
}

export function ContentImage({ image }: { image: ContentImageType }) {
  return <Figure image={image} />;
}

export function ContentImageGallery({ images }: { images: ContentImageType[] }) {
  if (images.length === 1) {
    return <Figure image={images[0]} />;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.map((image) => (
        <Figure key={image.src} image={image} />
      ))}
    </div>
  );
}
