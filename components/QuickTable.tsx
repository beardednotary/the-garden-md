type QuickTableProps = {
  rows: Array<{
    observation: string;
    likelyCause: string;
    checkFirst: string;
  }>;
};

export function QuickTable({ rows }: QuickTableProps) {
  return (
    <div className="overflow-x-auto border border-border bg-paper-light shadow-panel">
      <table className="min-w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-border bg-[#efe9d8] text-xs uppercase tracking-[0.16em] text-green-dark">
            <th className="px-4 py-3 font-semibold">What you see</th>
            <th className="px-4 py-3 font-semibold">Most likely cause</th>
            <th className="px-4 py-3 font-semibold">Check first</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.observation} className="border-b border-border last:border-b-0">
              <td className="px-4 py-3">{row.observation}</td>
              <td className="px-4 py-3">{row.likelyCause}</td>
              <td className="px-4 py-3">{row.checkFirst}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
