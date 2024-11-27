"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import {
  Play,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function VideoGallery() {
  const { darkMode } = useTheme();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  const videos = [
    {
      title: "Kifuliiru Dictionary - Bafuliiru Community Project",
      description:
        "A demonstration of the Kifuliiru dictionary project, showcasing our efforts to preserve and promote the Kifuliiru language through digital technology.",
      videoId: "e19RhhBez4w",
      date: "March 15, 2024",
      duration: "1:00",
      category: "Project",
    },
    {
      title: "Mobile Number Translation App Demo",
      description:
        "Watch a demonstration of our mobile application that translates numbers into Kifuliiru.",
      videoId: "NYyK4sQOoqk",
      date: "March 10, 2024",
      duration: "1:53",
      category: "Technology",
    },
    {
      title: "Digital Dictionary Development Process",
      description:
        "Get a behind-the-scenes look at how we're developing the digital Kifuliiru dictionary.",
      videoId: "c5Q2kyom_tI",
      date: "March 5, 2024",
      duration: "2:02",
      category: "Development",
    },
    {
      title: "Introduction to Kifuliiru Language App",
      description:
        "An overview of our Kifuliiru language application and its features.",
      videoId: "O3fZAmsvKAY",
      date: "March 1, 2024",
      duration: "0:55",
      category: "Education",
    },
  ];

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    if (!videoContainerRef.current) return;

    try {
      if (!isFullscreen && videoContainerRef.current) {
        if (videoContainerRef.current.requestFullscreen) {
          await videoContainerRef.current.requestFullscreen();
        } else if ((videoContainerRef.current as any).webkitRequestFullscreen) {
          await (videoContainerRef.current as any).webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  };

  return (
    <section
      className={`relative py-16 px-4 sm:px-6 lg:px-8 transition-all duration-300
      ${
        darkMode
          ? "bg-gradient-to-b from-slate-900 to-slate-800"
          : "bg-gradient-to-b from-slate-50 to-white"
      }`}
    >
      <div className="relative max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            className={`text-4xl font-semibold tracking-tight mb-4 
            ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            Video Gallery
          </h2>
          <p
            className={`text-lg leading-relaxed
            ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            Explore our journey in preserving and promoting the Kifuliiru
            language
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Video Section */}
          <div className="lg:w-3/4">
            <div
              ref={videoContainerRef}
              className={`relative rounded-xl overflow-hidden shadow-xl
                ${darkMode ? "bg-slate-800" : "bg-white"}
                ${isFullscreen ? "fixed inset-0 z-50 rounded-none" : ""}`}
            >
              {/* Video Player */}
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${
                    videos[currentVideoIndex].videoId
                  }?autoplay=1&mute=${isMuted ? 1 : 0}`}
                  className="absolute w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4 flex-wrap">
                    <h3
                      className={`text-xl font-semibold ${
                        darkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {videos[currentVideoIndex].title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm
                      ${
                        darkMode
                          ? "bg-slate-700 text-slate-300"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {videos[currentVideoIndex].category}
                    </span>
                  </div>

                  <p
                    className={`text-base ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {videos[currentVideoIndex].description}
                  </p>

                  {/* Controls */}
                  <div className="flex justify-between items-center pt-4 border-t border-slate-700/50">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className={`p-2 rounded-lg transition-colors
                          ${
                            darkMode
                              ? "hover:bg-slate-700"
                              : "hover:bg-slate-100"
                          }`}
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5" />
                        ) : (
                          <Volume2 className="w-5 h-5" />
                        )}
                      </button>
                      <button
                        onClick={toggleFullscreen}
                        className={`p-2 rounded-lg transition-colors
                          ${
                            darkMode
                              ? "hover:bg-slate-700"
                              : "hover:bg-slate-100"
                          }`}
                      >
                        {isFullscreen ? (
                          <Minimize2 className="w-5 h-5" />
                        ) : (
                          <Maximize2 className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-sm ${
                          darkMode ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        {videos[currentVideoIndex].duration}
                      </span>
                      <span
                        className={`text-sm ${
                          darkMode ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        {videos[currentVideoIndex].date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnails Section */}
          <div className="lg:w-1/4 flex flex-col gap-4">
            <h3
              className={`text-lg font-medium ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              More Videos
            </h3>
            <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
              {videos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`flex-shrink-0 w-72 lg:w-full group relative rounded-lg overflow-hidden transition-transform hover:scale-105
                    ${currentVideoIndex === index ? "ring-2 ring-blue-500" : ""}
                    ${darkMode ? "bg-slate-800" : "bg-white"}`}
                >
                  <div className="aspect-video relative">
                    <img
                      src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 flex items-center justify-center
                      ${darkMode ? "bg-slate-900/60" : "bg-slate-100/60"} 
                      group-hover:bg-opacity-30 transition-all duration-300
                      ${currentVideoIndex === index ? "bg-opacity-30" : ""}`}
                    >
                      <Play
                        className={`w-8 h-8 ${
                          darkMode ? "text-white" : "text-slate-900"
                        }`}
                      />
                    </div>
                  </div>
                  <div className="p-3">
                    <h4
                      className={`font-medium text-sm line-clamp-2 ${
                        darkMode ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      {video.title}
                    </h4>
                    <div className="flex justify-between items-center mt-2">
                      <span
                        className={`text-xs ${
                          darkMode ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        {video.duration}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full
                        ${
                          darkMode
                            ? "bg-slate-700 text-slate-300"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {video.category}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
