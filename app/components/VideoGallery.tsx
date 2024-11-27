"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext"; // Fixed import path
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

  // List of video IDs
  const videoIds = ["e19RhhBez4w", "NYyK4sQOoqk", "c5Q2kyom_tI", "O3fZAmsvKAY"];

  // Format duration from ISO 8601 format
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

  // Format view count
  const formatViewCount = (viewCount: string): string => {
    const count = parseInt(viewCount);
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M views`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K views`;
    }
    return `${count} views`;
  };

  // Format publish date
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
    <section
      className={`relative py-8 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-b from-slate-900 to-slate-800"
          : "bg-gradient-to-b from-slate-50 to-white"
      }`}
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2
            className={`text-3xl font-semibold tracking-tight mb-2 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Video Gallery
          </h2>
          <p
            className={`text-base leading-relaxed ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Explore our journey in preserving and promoting the Kifuliiru
            language
          </p>
        </div>

        {videos.length > 0 && (
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-2/3">
              <div
                ref={videoContainerRef}
                className={`relative rounded-lg overflow-hidden shadow-lg ${
                  darkMode ? "bg-slate-800" : "bg-white"
                } ${isFullscreen ? "fixed inset-0 z-50" : ""}`}
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

                <div className="p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <h3
                        className={`text-lg font-medium ${
                          darkMode ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {videos[currentVideoIndex].title}
                      </h3>
                    </div>

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
                    className={`flex-shrink-0 w-64 lg:w-full group relative rounded-lg overflow-hidden transition-transform hover:scale-102 ${
                      currentVideoIndex === index ? "ring-2 ring-blue-500" : ""
                    } ${darkMode ? "bg-slate-800" : "bg-white"}`}
                  >
                    <div className="aspect-video relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className={`absolute inset-0 flex items-center justify-center ${
                          darkMode ? "bg-slate-900/60" : "bg-slate-100/60"
                        } group-hover:bg-opacity-30 transition-all duration-300`}
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
        )}
      </div>
    </section>
  );
};

export default VideoGallery;
