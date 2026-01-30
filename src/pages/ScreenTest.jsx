import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PermissionBadge from "../components/PermissionBadge";
import ScreenControls from "../components/ScreenControls";
import ShareInfo from "../components/ShareInfo";
import { useScreenShare } from "../hooks/useScreenShare";

export default function ScreenTest() {
  const navigate = useNavigate();

  const {
    state,
    paused,
    label,
    videoRef,
    streamRef,
    start,
    stop,
    pause,
    resume,
  } = useScreenShare();

  // 🔥 Attach stream AFTER video mounts
  useEffect(() => {
    if (state === "granted" && videoRef.current && streamRef.current) {
      const video = videoRef.current;
      video.srcObject = streamRef.current;
      video.muted = true;
      video.autoplay = true;
      video.playsInline = true;
      video.play().catch(console.error);
    }
  }, [state]);

  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center justify-center pt-32 px-6">
        <div className="w-full max-w-5xl glass px-16 py-20 text-center">

          <h2 className="text-4xl font-semibold">Screen Share Test</h2>

          <div className="mt-4 flex justify-center">
            <PermissionBadge state={state} />
          </div>

          {state === "idle" && (
            <button onClick={start} className="primary-btn mt-10">
              Start Screen Sharing
            </button>
          )}

          {state === "requesting" && (
            <p className="mt-10 text-slate-400">
              Waiting for screen selection…
            </p>
          )}

          {state === "granted" && (
            <div className="mt-10 space-y-6">
              <div className="relative rounded-xl overflow-hidden border border-white/10">
                <video
                  ref={videoRef}
                  className="w-full aspect-video bg-black"
                />
                <div className="absolute top-3 left-3 bg-black/60 px-3 py-1 rounded-full text-sm">
                  🔴 Live
                </div>
              </div>

              <ShareInfo label={label} />

              <ScreenControls
                paused={paused}
                onPause={pause}
                onResume={resume}
                onStop={stop}
              />
            </div>
          )}

          {/* ✅ SCREEN SHARING STOPPED */}
          {(state === "ended" || state === "cancelled") && (
            <div className="mt-12 space-y-6">
              <p className="text-slate-400">
                Screen sharing stopped
              </p>

              <div className="flex justify-center gap-4">
                <button onClick={start} className="primary-btn">
                  Retry
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="secondary-btn"
                >
                  Go Home
                </button>
              </div>
            </div>
          )}

          {/* ❌ PERMISSION DENIED */}
          {state === "denied" && (
            <div className="mt-12 space-y-4">
              <p className="text-red-400 font-medium">
                Permission denied
              </p>
              <p className="text-slate-400 text-sm">
                Please allow screen sharing in browser permissions.
              </p>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
