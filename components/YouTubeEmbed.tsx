"use client";

import { useState } from "react";
import type { VideoEmbed } from "@/lib/types";

export function YouTubeEmbed({ video }: { video: VideoEmbed }) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="aspect-video w-full border border-border bg-ink shadow-panel">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Play video: ${video.title}`}
      className="group relative block aspect-video w-full overflow-hidden border border-border bg-ink shadow-panel"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
        alt=""
        className="h-full w-full object-cover opacity-80 transition group-hover:opacity-60"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-paper-light/90 text-green-dark shadow-panel">
          <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
      <span className="absolute inset-x-0 bottom-0 bg-ink/70 px-3 py-2 text-left text-sm text-paper-light">
        {video.title}
        {video.channel && <span className="block text-xs text-paper-light/70">{video.channel}</span>}
      </span>
    </button>
  );
}
