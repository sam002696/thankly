import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setVoiceUrl,
  setIsRecording,
  setRecordingDuration,
} from "../../../store/slices/editorSlice";
import { Mic, Trash2 } from "lucide-react";

export default function VoicePanel() {
  const dispatch = useDispatch();
  const { voiceUrl, isRecording, recordingDuration } = useSelector(
    (s) => s.editor,
  );

  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);
  const [elapsed, setElapsed] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => () => clearInterval(timerRef.current), []);

  const formatTime = (s) =>
    `${Math.floor(s / 60)
      .toString()
      .padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream);
      mediaRecorderRef.current = mr;
      chunksRef.current = [];

      mr.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      mr.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        dispatch(setVoiceUrl(url));
        stream.getTracks().forEach((t) => t.stop());
      };

      mr.start();
      dispatch(setIsRecording(true));
      setElapsed(0);
      timerRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
    } catch {
      alert(
        "Microphone access denied. Please allow microphone access and try again.",
      );
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current?.state === "recording")
      mediaRecorderRef.current.stop();
    dispatch(setIsRecording(false));
    clearInterval(timerRef.current);
    dispatch(setRecordingDuration(elapsed));
  };

  const deleteRecording = () => {
    if (voiceUrl) URL.revokeObjectURL(voiceUrl);
    dispatch(setVoiceUrl(null));
    dispatch(setRecordingDuration(0));
    setElapsed(0);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <h3
          className="font-bold text-ink mb-1"
          style={{ fontFamily: "'Caveat', cursive", fontSize: "20px" }}
        >
          Voice Message
        </h3>
        <p className="text-xs text-ink/50 mb-5">
          Record a heartfelt voice message to attach to your card
        </p>

        {!voiceUrl ? (
          /* ── Record state ─────────────────────────────────── */
          <div className="flex flex-col items-center gap-5">
            {/* Mic button */}
            <button
              onClick={isRecording ? stopRecording : startRecording}
              style={{
                width: "96px",
                height: "96px",
                borderRadius: "50%",
                background: isRecording ? "#ef4444" : "#3E2723",
                border: isRecording ? "3px solid #ef4444" : "3px solid #3E2723",
                boxShadow: isRecording
                  ? "0 0 0 8px rgba(239,68,68,0.15), 0 0 0 16px rgba(239,68,68,0.08)"
                  : "5px 5px 0px rgba(62,39,35,0.5)",
                color: "white",
                fontSize: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
                cursor: "pointer",
                animation: isRecording ? "pulse 1.5s infinite" : "none",
              }}
            >
              {isRecording ? "⏹" : <Mic size={30} />}
            </button>

            {/* Timer / prompt */}
            <div className="text-center">
              {isRecording ? (
                <>
                  <p
                    className="text-3xl font-bold text-brand"
                    style={{ fontFamily: "'Caveat', cursive" }}
                  >
                    {formatTime(elapsed)}
                  </p>
                  <p className="text-xs text-ink/50 mt-1">
                    Recording... tap to stop
                  </p>
                </>
              ) : (
                <>
                  <p className="font-semibold text-ink text-sm">
                    Tap to record
                  </p>
                  <p className="text-xs text-ink/40 mt-1">Up to 2 minutes</p>
                </>
              )}
            </div>

            {/* Waveform animation */}
            {isRecording && (
              <div className="flex items-center gap-1 h-10">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: "4px",
                      background: "#ef4444",
                      borderRadius: "4px",
                      animation: `waveBar 0.8s ease-in-out ${i * 0.07}s infinite alternate`,
                      height: `${20 + Math.sin(i) * 14}px`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* ── Playback state ───────────────────────────────── */
          <div className="space-y-4">
            <div
              className="border-2 border-ink rounded-2xl p-4 bg-white"
              style={{ boxShadow: "var(--shadow-hard-sm)" }}
            >
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "#3E2723",
                    color: "white",
                    border: "2px solid #3E2723",
                    boxShadow: "3px 3px 0px rgba(62,39,35,0.3)",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                >
                  {isPlaying ? "⏸" : "▶"}
                </button>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          height: `${8 + Math.abs(Math.sin(i * 1.5)) * 20}px`,
                          background: "#3E2723",
                          borderRadius: "3px",
                          opacity: 0.4 + (i / 20) * 0.3,
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-ink/50 font-medium">
                    <Mic size={14} /> Voice message{" "}
                    {formatTime(recordingDuration)}
                  </p>
                </div>
              </div>
              <audio
                ref={audioRef}
                src={voiceUrl}
                onEnded={() => setIsPlaying(false)}
                className="hidden"
              />
            </div>

            <button
              onClick={deleteRecording}
              className="w-full py-2.5 text-sm font-semibold text-brand border-2 border-brand rounded-xl hover:bg-brand/5 transition-all flex items-center justify-center gap-2"
            >
              <Trash2 size={16} /> Delete & re-record
            </button>
          </div>
        )}
      </div>

      {/* CSS for waveBar animation - inject via style tag */}
      <style>{`
        @keyframes waveBar {
          from { transform: scaleY(0.4); }
          to   { transform: scaleY(1.2); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 8px rgba(239,68,68,0.15), 0 0 0 16px rgba(239,68,68,0.08); }
          50%       { box-shadow: 0 0 0 12px rgba(239,68,68,0.2), 0 0 0 24px rgba(239,68,68,0.1); }
        }
      `}</style>
    </div>
  );
}
