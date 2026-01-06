'use client';
import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Maximize2, Minimize2, Volume2 } from 'lucide-react';

export default function WatchPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    let hideTimeout: NodeJS.Timeout;

    const handleMouseMove = () => {
      setShowControls(true);
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => setShowControls(false), 3000);
    };

    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);

    return () => {
      container?.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(hideTimeout);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setPlaying(true);
      } else {
        video.pause();
        setPlaying(false);
        setShowControls(true); // biar tombol tengah muncul pas di-pause
      }
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      const current = (video.currentTime / video.duration) * 100;
      setProgress(current);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    const value = parseFloat(e.target.value);
    if (video) {
      video.currentTime = (value / 100) * video.duration;
      setProgress(value);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    const value = parseFloat(e.target.value);
    setVolume(value);
    if (video) video.volume = value;
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (container) {
      if (!document.fullscreenElement) {
        container.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-black text-white overflow-hidden"
    >
      <video
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        className="w-full h-full object-contain bg-black"
        src="/video/jumbo-preview.mp4"
        controls={false}
        autoPlay
      />

      {/* Play/Pause Tengah */}
      <button
        onClick={togglePlay}
        className={`absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-4 transition-opacity duration-300 outline-0 ${
          !playing || showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {playing ? <Pause size={48} strokeWidth={0.5} /> : <Play size={48} strokeWidth={1} />}
      </button>

      {/* Kontrol Bawah */}
      <div
        className={`absolute bottom-0 left-0 right-0 px-4 py-4 bg-gradient-to-t from-black/90 to-transparent transition-opacity duration-500 ${
          showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Timeline */}
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="w-full accent-sky-600 mb-3 h-1.5 outline-none rounded-4xl"
        />

        {/* Kontrol Bar */}
        <div className="flex justify-between items-center">
          {/* Volume */}
          <div className="flex items-center gap-2">
            <Volume2 size={20} />
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              className="accent-white w-24 h-1 outline-none rounded-4xl"
            />
          </div>

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700 flex items-center gap-2"
          >
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            
          </button>
        </div>
      </div>
    </div>
  );
}
