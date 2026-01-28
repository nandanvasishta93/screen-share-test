import { useRef, useState } from "react";

export function useScreenShare() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const [state, setState] = useState("idle");
  const [paused, setPaused] = useState(false);
  const [label, setLabel] = useState("");

  const isStreaming = () => {
    const track = streamRef.current?.getVideoTracks?.()[0];
    return track && track.readyState === "live";
  };

  const cleanup = () => {
    streamRef.current?.getTracks().forEach(t => t.stop());
    streamRef.current = null;
    setPaused(false);
  };

  const start = async () => {
    setState("requesting");

    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: false,
      });

      const videoTrack = stream.getVideoTracks()[0];
      if (!videoTrack) {
        setState("cancelled");
        return;
      }

      streamRef.current = stream;

      videoRef.current.srcObject = stream;
      videoRef.current.muted = true;     // 🔑 REQUIRED
      videoRef.current.play().catch(() => {}); // 🔑 REQUIRED

      setLabel(videoTrack.label);
      setState("granted");

      videoTrack.onended = () => {
        cleanup();
        setState("ended");
      };
    } catch (err) {
      if (isStreaming()) {
        setState("granted");
        return;
      }

      if (err?.name === "NotAllowedError" || err?.name === "AbortError") {
        setState("cancelled");
      } else {
        setState("denied");
      }
    }
  };

  const stop = () => {
    if (!isStreaming()) return;
    cleanup();
    setState("ended");
  };

  const pause = () => {
    if (!isStreaming()) return;
    streamRef.current.getVideoTracks().forEach(t => (t.enabled = false));
    setPaused(true);
  };

  const resume = () => {
    if (!isStreaming()) return;
    streamRef.current.getVideoTracks().forEach(t => (t.enabled = true));
    setPaused(false);
  };

  return {
    videoRef,
    state,
    paused,
    label,
    start,
    stop,
    pause,
    resume,
  };
}
