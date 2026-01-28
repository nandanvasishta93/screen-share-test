import Navbar from "../components/Navbar";
import { useScreenShare } from "../hooks/useScreenShare";
import { useNavigate } from "react-router-dom";

export default function ScreenTest() {
  const navigate = useNavigate();

  const {
    state,
    paused,
    label,
    videoRef,
    start,
    stop,
    pause,
    resume,
  } = useScreenShare();

  const isActive = state === "granted";

  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center justify-center pt-32 px-6">
        <div
          className={`
            w-full max-w-5xl text-center
            glass px-16 py-20
            animate-panelIn
            ${isActive ? "animate-glowPulse" : ""}
          `}
        >
          {/* TITLE */}
          <h2 className="text-4xl font-semibold animate-fadeUp">
            Screen Share Test
          </h2>

          {/* STATUS */}
          <p className="mt-3 text-slate-400 animate-fadeUp">
            {state.toUpperCase()}
          </p>

          {/* IDLE */}
          {state === "idle" && (
            <div className="mt-10 animate-fadeUp">
              <button onClick={start} className="primary-btn">
                Start Screen Sharing
              </button>
            </div>
          )}

          {/* REQUESTING */}
          {state === "requesting" && (
            <p className="mt-10 text-slate-400 animate-fadeUp">
              Waiting for screen selection…
            </p>
          )}

          {/* ACTIVE */}
          {state === "granted" && (
            <div className="mt-10 space-y-6">
              {/* VIDEO CONTAINER */}
              <div className="relative animate-videoIn rounded-xl border border-white/10 overflow-hidden">
                {/* LIVE BADGE */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full text-sm">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  Live preview
                </div>

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 pointer-events-none" />

                {/* VIDEO */}
                <video
                  ref={videoRef}
                  playsInline
                  className="w-full aspect-video bg-black opacity-0 transition-opacity duration-300"
                  onPlaying={(e) =>
                    e.currentTarget.classList.remove("opacity-0")
                  }
                />

                {/* FALLBACK TEXT */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-sm pointer-events-none">
                  Preview loading…
                </div>
              </div>

              {/* SHARE INFO */}
              <p className="text-slate-400 animate-fadeUp">
                Sharing: <span className="text-white">{label}</span>
              </p>

              {/* CONTROLS */}
              <div className="flex justify-center gap-5 animate-fadeUp">
                {!paused ? (
                  <button
                    onClick={pause}
                    className="control-btn pause-btn text-black"
                  >
                    Pause
                  </button>
                ) : (
                  <button
                    onClick={resume}
                    className="control-btn resume-btn text-black"
                  >
                    Resume
                  </button>
                )}

                <button
                  onClick={stop}
                  className="control-btn stop-btn text-white"
                >
                  Stop
                </button>
              </div>
            </div>
          )}

          {/* ENDED / CANCELLED */}
          {(state === "ended" || state === "cancelled") && (
            <div className="mt-12 space-y-6 animate-fadeUp">
              <p className="text-slate-400">
                Screen sharing stopped.
              </p>

              <div className="flex justify-center gap-4">
                <button onClick={start} className="primary-btn">
                  Retry
                </button>

                <button
                  onClick={() => navigate("/")}
                  className="secondary-btn"
                >
                  Go to Home
                </button>
              </div>
            </div>
          )}

          {/* DENIED */}
          {state === "denied" && (
            <p className="mt-10 text-red-400 animate-fadeUp">
              Screen sharing permission was denied by the browser.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
