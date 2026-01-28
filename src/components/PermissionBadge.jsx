export default function PermissionBadge({ state }) {
  const map = {
    idle: "⚪ Idle",
    requesting: "🟡 Requesting",
    granted: "🟢 Granted",
    denied: "🔴 Denied",
    cancelled: "⚪ Cancelled",
    ended: "⚪ Ended",
  };

  return (
    <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm">
      {map[state]}
    </span>
  );
}
