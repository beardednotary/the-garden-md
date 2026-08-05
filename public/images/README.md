# Content images

Self-hosted only — no hotlinking to Amazon, extension sites, or other external hosts. Download and place the file here, then reference it in the data.

- `diagnose/<symptom-slug>.jpg` — used by `Symptom.image` in `data/symptoms.ts`
- `causes/<cause-slug>.jpg` — used by `Cause.image` in `data/causes.ts`

Add the `image` field to the entry:

```ts
image: {
  src: "/images/diagnose/yellow-leaves.jpg",
  alt: "Tomato leaves showing yellowing between the veins",
  credit: "Penn State Extension",       // optional, required if the license needs attribution
  creditUrl: "https://extension.psu.edu/" // optional
}
```

Videos don't need a file here — `Symptom.video` and `Solution.video` just take a YouTube video ID:

```ts
video: {
  youtubeId: "dQw4w9WgXcQ",
  title: "How to check soil drainage",
  channel: "Penn State Extension" // optional
}
```
