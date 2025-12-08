"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import {
  Play,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Loader2,
} from "lucide-react";

interface VideoData {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  viewCount: string;
  publishedAt: string;
  channelTitle: string;
}

const VideoGallery = () => {
  const { darkMode } = useTheme();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);

  const videoIds = ["e19RhhBez4w", "NYyK4sQOoqk", "c5Q2kyom_tI", "O3fZAmsvKAY"];

  // API and formatting functions remain the same...

  const formatDuration = (duration: string): string => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return "0:00";

    const hours = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;
    const seconds = match[3] ? parseInt(match[3]) : 0;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const formatViewCount = (viewCount: string): string => {
    const count = parseInt(viewCount);
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M views`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K views`;
    }
    return `${count} views`;
  };

  const formatPublishDate = (publishedAt: string): string => {
    const date = new Date(publishedAt);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  useEffect(() => {
    const fetchVideoData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
        if (!apiKey) {
          throw new Error("YouTube API key is not configured");
        }

        const videoIdsString = videoIds.join(",");
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?` +
            `part=snippet,contentDetails,statistics` +
            `&id=${videoIdsString}` +
            `&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch video data");
        }

        const data = await response.json();
        const processedVideos = data.items.map((video: any) => ({
          id: video.id,
          title: video.snippet.title,
          description: video.snippet.description,
          thumbnail:
            video.snippet.thumbnails.maxres?.url ||
            video.snippet.thumbnails.high.url,
          duration: formatDuration(video.contentDetails.duration),
          viewCount: formatViewCount(video.statistics.viewCount),
          publishedAt: formatPublishDate(video.snippet.publishedAt),
          channelTitle: video.snippet.channelTitle,
        }));

        setVideos(processedVideos);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching video data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideoData();
  }, []);

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
        await videoContainerRef.current.requestFullscreen();
      } else if (document.exitFullscreen) {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  };

  if (isLoading) {
    return (
        <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-slate-600 dark:text-slate-300" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-slate-600 dark:text-slate-300">
        <p>Error loading videos: {error}</p>
      </div>
    );
  }

  return (
    <section
      className={`relative min-h-screen pt-60 md:pt-44 px-4 sm:px-6 pb-24 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
            : "bg-gradient-to-b from-slate-50 via-slate-100/80 to-white"
        }`}
    >
      {/* Background Pattern */}
      <div
        className={`absolute inset-0 bg-[url('/grid.svg')] bg-center
          ${
            darkMode
              ? "bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,black,transparent)]"
              : "bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)]"
          }`}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className={`font-mono text-4xl sm:text-5xl font-semibold tracking-tight mb-6
              ${darkMode ? "text-slate-100" : "text-slate-900"}`}
          >
            Kifuliiru Video Collection
          </h2>
          <div className="space-y-6 mb-8">
            <p
              className={`font-mono text-lg leading-relaxed
                ${darkMode ? "text-slate-300" : "text-slate-700"}`}
            >
              Welcome to our collection of Kifuliiru language videos. These videos are part of our ongoing mission to preserve, document, and promote the Kifuliiru language and Bafuliiru cultural heritage. Through digital storytelling, educational content, and cultural documentation, we aim to ensure that the Kifuliiru language continues to thrive for future generations.
            </p>
            <p
              className={`font-mono text-lg leading-relaxed
                ${darkMode ? "text-slate-300" : "text-slate-700"}`}
            >
              Our videos cover a wide range of topics including language lessons, cultural stories, traditional practices, community events, and educational content designed to help both native speakers and learners engage with the Kifuliiru language in meaningful ways.
            </p>
            <div
              className={`p-6 rounded-xl border
                ${
                  darkMode
                    ? "bg-slate-800/50 border-slate-700/50"
                    : "bg-slate-100/50 border-slate-200"
                }`}
            >
              <p
                className={`font-mono text-base leading-relaxed mb-4
                  ${darkMode ? "text-slate-200" : "text-slate-700"}`}
              >
                For more Kifuliiru videos and content, visit our YouTube channel:
              </p>
              <a
                href="https://www.youtube.com/@ibufuliiru"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 font-mono text-lg font-semibold transition-all duration-300 hover:scale-105
                  ${
                    darkMode
                      ? "text-slate-100 hover:text-slate-50"
                      : "text-slate-800 hover:text-slate-900"
                  }`}
              >
                <span>@ibufuliiru</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full transform transition-transform duration-300 hover:scale-110" />
        </div>

        {/* Videos Section */}
        {videos.length > 0 && (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Video */}
            <div className="lg:w-2/3">
              <div
                ref={videoContainerRef}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 backdrop-blur-xl border hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                  ${
                    darkMode
                      ? "bg-slate-800/50 border-slate-700/50 hover:border-slate-600/50"
                      : "bg-white/50 border-slate-200 hover:border-slate-300"
                  }`}
              >
                <div
                  className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out
                    ${
                      darkMode
                        ? "bg-gradient-to-br from-slate-700/40 via-slate-600/30 to-slate-700/40"
                        : "bg-gradient-to-br from-slate-100/60 via-slate-50/50 to-slate-100/60"
                    }`}
                />

                <div className="relative z-10">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${
                        videos[currentVideoIndex].id
                      }?autoplay=1&mute=${isMuted ? 1 : 0}`}
                      className="w-full h-full"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>

                  <div className="p-6">
                    <h3
                      className={`font-mono text-xl font-semibold mb-2 transition-colors duration-500
                        ${
                          darkMode
                            ? "text-slate-100 group-hover:text-slate-50"
                            : "text-slate-900 group-hover:text-slate-800"
                        }`}
                    >
                      {videos[currentVideoIndex].title}
                    </h3>

                    <p
                      className={`font-mono text-lg leading-relaxed mb-4 transition-colors duration-500
                        ${
                          darkMode
                            ? "text-slate-300 group-hover:text-slate-200"
                            : "text-slate-600 group-hover:text-slate-700"
                        }`}
                    >
                      {videos[currentVideoIndex].description}
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setIsMuted(!isMuted)}
                          className={`p-2 rounded-lg transition-all duration-300 hover:scale-105
                            ${
                              darkMode
                                ? "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50"
                                : "bg-slate-100/50 text-slate-700 hover:bg-slate-200/50"
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
                          className={`p-2 rounded-lg transition-all duration-300 hover:scale-105
                            ${
                              darkMode
                                ? "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50"
                                : "bg-slate-100/50 text-slate-700 hover:bg-slate-200/50"
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
                          className={`font-mono text-sm transition-colors duration-500
                            ${
                              darkMode
                                ? "text-slate-300/70 group-hover:text-slate-200"
                                : "text-slate-500 group-hover:text-slate-600"
                            }`}
                        >
                          {videos[currentVideoIndex].duration}
                        </span>
                        <span
                          className={`font-mono text-sm transition-colors duration-500
                            ${
                              darkMode
                                ? "text-slate-300/70 group-hover:text-slate-200"
                                : "text-slate-500 group-hover:text-slate-600"
                            }`}
                        >
                          {videos[currentVideoIndex].viewCount}
                        </span>
                        <span
                          className={`font-mono text-sm transition-colors duration-500
                            ${
                              darkMode
                                ? "text-slate-300/70 group-hover:text-slate-200"
                                : "text-slate-500 group-hover:text-slate-600"
                            }`}
                        >
                          {videos[currentVideoIndex].publishedAt}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video List */}
            <div className="lg:w-1/3">
              <h3
                className={`font-mono text-xl font-semibold mb-4
                  ${darkMode ? "text-slate-100" : "text-slate-900"}`}
              >
                More Videos
              </h3>
              <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
                {videos.map((video, index) => (
                  <button
                    key={video.id}
                    onClick={() => setCurrentVideoIndex(index)}
                    className={`group relative flex-shrink-0 w-72 lg:w-full rounded-xl overflow-hidden transition-all duration-500 backdrop-blur-xl border hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                      ${
                        darkMode
                          ? "bg-slate-800/50 border-slate-700/50 hover:border-slate-600/50"
                          : "bg-white/50 border-slate-200 hover:border-slate-300"
                      }
                      ${
                        currentVideoIndex === index
                          ? "ring-2 ring-slate-600 dark:ring-slate-400"
                          : ""
                      }`}
                  >
                    <div
                      className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out
                        ${
                          darkMode
                            ? "bg-gradient-to-br from-slate-700/40 via-slate-600/30 to-slate-700/40"
                            : "bg-gradient-to-br from-slate-100/60 via-slate-50/50 to-slate-100/60"
                        }`}
                    />

                    <div className="relative z-10">
                      <div className="aspect-video relative">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div
                          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300
                            ${darkMode ? "bg-slate-900/60" : "bg-slate-100/60"}
                            group-hover:opacity-0`}
                        >
                          <Play
                            className={`w-8 h-8 transition-colors duration-500
                              ${
                                darkMode ? "text-slate-300" : "text-slate-600"
                              }`}
                          />
                        </div>
                      </div>

                      <div className="p-4">
                        <h4
                          className={`font-mono text-sm font-medium mb-2 line-clamp-2 transition-colors duration-500
                            ${
                              darkMode
                                ? "text-slate-100 group-hover:text-slate-50"
                                : "text-slate-900 group-hover:text-slate-800"
                            }`}
                        >
                          {video.title}
                        </h4>
                        <div className="flex justify-between items-center">
                          <span
                            className={`font-mono text-xs transition-colors duration-500
                              ${
                                darkMode
                                  ? "text-slate-300/70 group-hover:text-slate-200"
                                  : "text-slate-500 group-hover:text-slate-600"
                              }`}
                          >
                            {video.duration}
                          </span>
                          <span
                            className={`font-mono text-xs transition-colors duration-500
                              ${
                                darkMode
                                  ? "text-slate-300/70 group-hover:text-slate-200"
                                  : "text-slate-500 group-hover:text-slate-600"
                              }`}
                          >
                            {video.publishedAt}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Gradient Decoration */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent 
            ${darkMode ? "via-slate-700/50" : "via-slate-200"} 
            to-transparent`}
        />
      </div>
    </section>
  );
};

export default VideoGallery;
