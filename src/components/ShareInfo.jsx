export default function ShareInfo({ label }) {
  if (!label) return null;

  return (
    <p className="text-sm text-slate-400 mt-3">
      Sharing: <span className="text-white">{label}</span>
    </p>
  );
}
