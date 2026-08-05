export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-5">
      {eyebrow ? (
        <div className="border-b border-border pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-green-dark">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-3 font-serif text-3xl text-green-dark">{title}</h2>
      {description ? <p className="mt-2 max-w-3xl text-muted">{description}</p> : null}
    </div>
  );
}
