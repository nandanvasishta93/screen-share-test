import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex items-center justify-center pt-32 px-6">

        {/* OUTER GLASSY WRAPPER */}
        <div
          className="
            relative
            w-full max-w-6xl
            rounded-[40px]
            backdrop-blur-3xl
            bg-white/5
            p-6
          "
        >
          {/* BRIGHT GREEN GLOW (OUTSIDE INNER CARD) */}
          <div
            className="
              absolute inset-0
              rounded-[40px]
              bg-emerald-400/25
              blur-[160px]
              -z-10
            "
          />

          {/* INNER SOLID GLASS CARD */}
          <div
            className="
              relative
              rounded-3xl
              bg-[#0b0f0d]/80
              border border-white/10
              shadow-2xl
              px-10 py-16
            "
          >
            {/* CONTENT (CLEAN & SHARP) */}
            <div className="mx-auto max-w-3xl text-center animate-heroIn">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Simplify your
                <br />
                screen testing
              </h1>

              <p className="mt-6 text-slate-300 text-lg">
                Validate screen-sharing permissions and preview streams
                with a clean, reliable test environment.
              </p>

              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => navigate("/screen-test")}
                  className="primary-btn"
                >
                  Start Screen Test
                </button>
              </div>

              {/* EXTRA CONTENT */}
              <div className="mt-12 border-t border-white/10 pt-6">
                <h3 className="text-lg font-semibold mb-3">
                  Why use this app?
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Test permission handling, stream lifecycle, and browser
                  behavior in a clean, distraction-free environment.
                  Everything runs locally in your browser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
