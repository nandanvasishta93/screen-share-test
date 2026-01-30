import { useRef, useState } from "react";

export function useScreenShare() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const [state, setState] = useState("idle");
  const [paused, setPaused] = useState(false);
  const [label, setLabel] = useState("");

  const cleanup = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setPaused(false);
  };

  const start = async () => {
    try {
      setState("requesting");

      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: false,
      });

      const track = stream.getVideoTracks()[0];
      if (!track) {
        setState("cancelled");
        return;
      }

      streamRef.current = stream;
      setLabel(track.label || "Screen");
      setState("granted");

      track.onended = () => {
        cleanup();
        setState("ended"); // ✅ Screen sharing stopped
      };

    } catch (err) {
      if (err.name === "NotAllowedError") {
        setState("denied"); // ✅ Permission denied
      } else if (err.name === "AbortError") {
        setState("cancelled"); // ✅ Screen sharing stopped
      } else {
        setState("denied");
      }
    }
  };

  const stop = () => {
    cleanup();
    setState("ended"); // ✅ Screen sharing stopped
  };

  const pause = () => {
    streamRef.current?.getVideoTracks().forEach(t => (t.enabled = false));
    setPaused(true);
  };

  const resume = () => {
    streamRef.current?.getVideoTracks().forEach(t => (t.enabled = true));
    setPaused(false);
  };

  return {
    videoRef,
    streamRef,
    state,
    paused,
    label,
    start,
    stop,
    pause,
    resume,
  };
}
