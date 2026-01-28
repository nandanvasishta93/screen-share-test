export default function ScreenControls({
  paused,
  onPause,
  onResume,
  onStop,
}) {
  return (
    <div className="flex gap-4 justify-center mt-6">
      {!paused ? (
        <button onClick={onPause} className="secondary-btn">
          Pause
        </button>
      ) : (
        <button onClick={onResume} className="secondary-btn">
          Resume
        </button>
      )}

      <button onClick={onStop} className="primary-btn">
        Stop Sharing
      </button>
    </div>
  );
}
