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
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Error loading videos: {error}</p>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-slate-50 dark:bg-slate-900 font-['Instrument_Sans']`}
    >
      {/* Hero Section */}
      <section
        className={`relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 transition-all duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-slate-900 to-slate-800"
            : "bg-gradient-to-b from-slate-50 to-white"
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
          <div className="pt-24">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2
                className={`text-4xl sm:text-5xl font-semibold tracking-tight mb-4 
                ${darkMode ? "text-white" : "text-slate-900"} 
                transition-colors duration-300`}
              >
                Kifuliiru Video Collection
              </h2>

              <p
                className={`text-xl leading-relaxed
                ${darkMode ? "text-slate-400" : "text-slate-600"} 
                transition-colors duration-300 max-w-xl mx-auto`}
              >
                Preserving our heritage through digital storytelling
              </p>

              <p
                className={`mt-6 text-lg leading-relaxed
                ${darkMode ? "text-slate-400" : "text-slate-600"} 
                transition-colors duration-300 max-w-xl mx-auto`}
              >
                Kifuliiru is more than just my mother tongue—it&apos;s the heart
                of our cultural identity. Through these videos, I&apos;m
                dedicated to preserving and sharing our beautiful language,
                making it accessible to future generations while celebrating its
                rich heritage.
              </p>

              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full transform transition-transform duration-300 hover:scale-110"></div>
            </div>

            {/* Videos Section */}
            {videos.length > 0 && (
              <div
                className={`relative backdrop-blur-xl rounded-2xl border
                ${
                  darkMode
                    ? "bg-slate-800/50 border-slate-700"
                    : "bg-white/50 border-gray-100"
                }`}
              >
                <div className="flex flex-col lg:flex-row gap-4 p-6">
                  <div className="lg:w-2/3">
                    <div
                      ref={videoContainerRef}
                      className="relative rounded-lg overflow-hidden"
                    >
                      <div className="relative aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${
                            videos[currentVideoIndex].id
                          }?autoplay=1&mute=${isMuted ? 1 : 0}`}
                          className="absolute w-full h-full"
                          allowFullScreen
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                      </div>

                      <div className="p-4 bg-slate-800/10 backdrop-blur-sm">
                        <div className="space-y-2">
                          <h3
                            className={`text-lg font-medium ${
                              darkMode ? "text-white" : "text-slate-900"
                            }`}
                          >
                            {videos[currentVideoIndex].title}
                          </h3>

                          <p
                            className={`text-sm line-clamp-2 ${
                              darkMode ? "text-slate-400" : "text-slate-600"
                            }`}
                          >
                            {videos[currentVideoIndex].description}
                          </p>

                          <div className="flex justify-between items-center pt-2">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => setIsMuted(!isMuted)}
                                className={`p-1.5 rounded-lg transition-colors ${
                                  darkMode
                                    ? "hover:bg-slate-700"
                                    : "hover:bg-slate-100"
                                }`}
                              >
                                {isMuted ? (
                                  <VolumeX className="w-4 h-4" />
                                ) : (
                                  <Volume2 className="w-4 h-4" />
                                )}
                              </button>
                              <button
                                onClick={toggleFullscreen}
                                className={`p-1.5 rounded-lg transition-colors ${
                                  darkMode
                                    ? "hover:bg-slate-700"
                                    : "hover:bg-slate-100"
                                }`}
                              >
                                {isFullscreen ? (
                                  <Minimize2 className="w-4 h-4" />
                                ) : (
                                  <Maximize2 className="w-4 h-4" />
                                )}
                              </button>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                              <span
                                className={
                                  darkMode ? "text-slate-400" : "text-slate-500"
                                }
                              >
                                {videos[currentVideoIndex].duration}
                              </span>
                              <span
                                className={
                                  darkMode ? "text-slate-400" : "text-slate-500"
                                }
                              >
                                {videos[currentVideoIndex].viewCount}
                              </span>
                              <span
                                className={
                                  darkMode ? "text-slate-400" : "text-slate-500"
                                }
                              >
                                {videos[currentVideoIndex].publishedAt}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/3">
                    <h3
                      className={`text-base font-medium mb-3 ${
                        darkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      More Videos
                    </h3>
                    <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
                      {videos.map((video, index) => (
                        <button
                          key={video.id}
                          onClick={() => setCurrentVideoIndex(index)}
                          className={`flex-shrink-0 w-64 lg:w-full group relative rounded-lg overflow-hidden 
                            transition-transform hover:scale-105 ${
                              currentVideoIndex === index
                                ? "ring-2 ring-blue-500"
                                : ""
                            }`}
                        >
                          <div className="aspect-video relative">
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="w-full h-full object-cover"
                            />
                            <div
                              className={`absolute inset-0 flex items-center justify-center 
                              ${
                                darkMode ? "bg-slate-900/60" : "bg-slate-100/60"
                              } 
                              group-hover:bg-opacity-30 transition-all duration-300`}
                            >
                              <Play
                                className={`w-6 h-6 ${
                                  darkMode ? "text-white" : "text-slate-900"
                                }`}
                              />
                            </div>
                          </div>
                          <div className="p-2">
                            <h4
                              className={`text-xs font-medium line-clamp-2 ${
                                darkMode ? "text-slate-300" : "text-slate-700"
                              }`}
                            >
                              {video.title}
                            </h4>
                            <div className="flex justify-between items-center mt-1">
                              <span
                                className={`text-xs ${
                                  darkMode ? "text-slate-400" : "text-slate-500"
                                }`}
                              >
                                {video.duration}
                              </span>
                              <span
                                className={`text-xs ${
                                  darkMode ? "text-slate-400" : "text-slate-500"
                                }`}
                              >
                                {video.publishedAt}
                              </span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Gradient Decoration */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent 
            ${darkMode ? "via-slate-700" : "via-slate-200"} 
            to-transparent`}
          />
        </div>
      </section>
    </div>
  );
};

export default VideoGallery;
