export default function createIteratorObject(report) {
  const out = [];

  for (const v of Object.values(report.allEmployees)) {
    out.push(...v);
  }
  return out;
}
