export function FieldNote({ title, body }: { title: string; body: string }) {
  return (
    <section className="border border-soil bg-[#fbf7ed] p-5">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-soil">{title}</div>
      <p className="mt-3 leading-7 text-ink">{body}</p>
    </section>
  );
}
