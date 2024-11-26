import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Maximize2,
  Download,
  X,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc =
  "https://unpkg.com/pdfjs-dist@4.4.168/build/pdf.worker.min.js";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  pdfUrl: string;
}

const CertificatesSection = () => {
  const { darkMode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const certificates: Certificate[] = [
    {
      title: "Project Management Professional",
      issuer: "Google",
      date: "2023",
      description:
        "Professional certification in Project Management methodologies and best practices",
      pdfUrl: "/certificates/GooglePM.pdf",
    },

    {
      title: "Slack",
      issuer: "Coursera",
      date: "2024",
      description: "Communications",
      pdfUrl: "/certificates/Slack.pdf",
    },
    {
      title: "GitHub Foundations Badge",
      issuer: "GitHub",
      date: "2024",
      description: "Version Control",
      pdfUrl: "/certificates/GitHubFoundations_Badge.pdf",
    },
  ];

  useEffect(() => {
    const testPdfAccess = async () => {
      try {
        const response = await fetch(certificates[currentIndex].pdfUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error("PDF access error:", error);
        setPdfError(`Unable to access PDF file: ${error.message}`);
      }
    };

    testPdfAccess();
  }, [currentIndex, certificates]);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );
    setPageNumber(1); // Reset page number when changing certificates
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
    setPageNumber(1); // Reset page number when changing certificates
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying && !isFullscreen) {
      interval = setInterval(goToNext, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, isFullscreen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPdfError(null);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error("Error loading PDF:", error);
    setPdfError("Error loading PDF: " + error.message);
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(certificates[currentIndex].pdfUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${certificates[currentIndex].title}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
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
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-semibold tracking-tight mb-4 
            ${darkMode ? "text-white" : "text-slate-900"} 
            transition-colors duration-300`}
          >
            Professional Certifications
          </h2>
          <p
            className={`text-xl leading-relaxed
            ${darkMode ? "text-slate-400" : "text-slate-600"} 
            transition-colors duration-300 max-w-xl mx-auto`}
          >
            Continuous learning and professional development achievements
          </p>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full transform transition-transform duration-300 hover:scale-110" />
        </div>

        {/* Certificate Slider */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-16">
          {/* Navigation buttons - hidden on mobile */}
          <button
            onClick={goToPrev}
            className={`hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 p-4 rounded-full transition-all duration-300
              ${
                darkMode
                  ? "bg-slate-800 hover:bg-slate-700 text-white"
                  : "bg-white hover:bg-slate-100 text-slate-900"
              }
              shadow-lg hover:scale-110 -translate-x-6 z-10`}
            aria-label="Previous certificate"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className={`hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 p-4 rounded-full transition-all duration-300
              ${
                darkMode
                  ? "bg-slate-800 hover:bg-slate-700 text-white"
                  : "bg-white hover:bg-slate-100 text-slate-900"
              }
              shadow-lg hover:scale-110 translate-x-6 z-10`}
            aria-label="Next certificate"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Certificate Card */}
          <div
            className={`group relative rounded-2xl overflow-hidden transition-all duration-500 backdrop-blur-xl border
              ${
                darkMode
                  ? "bg-slate-800/50 border-slate-700"
                  : "bg-white/50 border-gray-100"
              }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500
              ${
                darkMode
                  ? "bg-gradient-to-t from-slate-800 to-slate-700"
                  : "bg-gradient-to-t from-slate-100 to-white"
              }`}
            />

            <div className="relative p-6 sm:p-8 space-y-6">
              {/* PDF Viewer */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
                {pdfError ? (
                  <div className="flex items-center justify-center h-full text-red-500">
                    {pdfError}
                  </div>
                ) : (
                  <div className="h-full">
                    <Document
                      file={certificates[currentIndex].pdfUrl}
                      onLoadSuccess={onDocumentLoadSuccess}
                      onLoadError={onDocumentLoadError}
                      className="w-full h-full"
                      loading={
                        <div className="flex items-center justify-center h-full">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                        </div>
                      }
                    >
                      <Page
                        pageNumber={pageNumber}
                        width={
                          isFullscreen ? window.innerWidth * 0.8 : undefined
                        }
                        height={
                          isFullscreen ? window.innerHeight * 0.8 : undefined
                        }
                        className="w-full h-full"
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </Document>
                  </div>
                )}

                {/* PDF Controls */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <button
                    onClick={handleDownload}
                    className={`p-2 rounded-full transition-all duration-300
                      ${
                        darkMode
                          ? "bg-slate-700 hover:bg-slate-600"
                          : "bg-white hover:bg-gray-100"
                      }
                      shadow-lg`}
                    aria-label="Download PDF"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className={`p-2 rounded-full transition-all duration-300
                      ${
                        darkMode
                          ? "bg-slate-700 hover:bg-slate-600"
                          : "bg-white hover:bg-gray-100"
                      }
                      shadow-lg`}
                    aria-label="Toggle fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Page Navigation */}
                {numPages > 1 && (
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    <button
                      onClick={() =>
                        setPageNumber((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={pageNumber <= 1}
                      className={`p-2 rounded-full transition-all duration-300
                        ${
                          darkMode
                            ? "bg-slate-700 hover:bg-slate-600"
                            : "bg-white hover:bg-gray-100"
                        }
                        shadow-lg disabled:opacity-50`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span
                      className={`p-2 ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {pageNumber} / {numPages}
                    </span>
                    <button
                      onClick={() =>
                        setPageNumber((prev) => Math.min(prev + 1, numPages))
                      }
                      disabled={pageNumber >= numPages}
                      className={`p-2 rounded-full transition-all duration-300
                        ${
                          darkMode
                            ? "bg-slate-700 hover:bg-slate-600"
                            : "bg-white hover:bg-gray-100"
                        }
                        shadow-lg disabled:opacity-50`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Certificate Details */}
              <div className="space-y-4">
                <h3
                  className={`text-2xl font-semibold transition-colors duration-500
                  ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  {certificates[currentIndex].title}
                </h3>

                <div className="flex justify-between items-center">
                  <p
                    className={`text-lg transition-colors duration-500
                    ${darkMode ? "text-slate-300" : "text-slate-700"}`}
                  >
                    {certificates[currentIndex].issuer}
                  </p>
                  <p
                    className={`text-sm transition-colors duration-500
                    ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                  >
                    {certificates[currentIndex].date}
                  </p>
                </div>

                <p
                  className={`text-base transition-colors duration-500
                  ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  {certificates[currentIndex].description}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center mt-6 gap-4 items-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`p-2 rounded-full transition-all duration-300 shadow-lg hover:scale-110
                ${
                  darkMode
                    ? "bg-slate-800 hover:bg-slate-700 text-white"
                    : "bg-white hover:bg-slate-100 text-slate-900"
                }`}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>

            {/* Dot indicators */}

            {/* Dot indicators */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setPageNumber(1);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-150
                    ${
                      index === currentIndex
                        ? darkMode
                          ? "bg-white"
                          : "bg-slate-900"
                        : darkMode
                        ? "bg-slate-600"
                        : "bg-slate-300"
                    }`}
                  aria-label={`Go to certificate ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Gradient Decoration */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent 
          ${darkMode ? "via-slate-700" : "via-slate-200"} 
          to-transparent`}
        />
      </div>

      {/* Fullscreen PDF viewer */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="relative w-full h-full max-w-7xl max-h-screen p-4">
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors duration-300 z-10"
              aria-label="Close fullscreen view"
            >
              <X className="w-6 h-6" />
            </button>

            <Document
              file={certificates[currentIndex].pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              className="w-full h-full flex items-center justify-center"
            >
              <Page
                pageNumber={pageNumber}
                width={window.innerWidth * 0.8}
                height={window.innerHeight * 0.8}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>

            {/* Fullscreen PDF Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-white rounded-full px-4 py-2 shadow-lg">
              <button
                onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
                disabled={pageNumber <= 1}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300 disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-sm font-medium">
                Page {pageNumber} of {numPages}
              </span>
              <button
                onClick={() =>
                  setPageNumber((prev) => Math.min(prev + 1, numPages))
                }
                disabled={pageNumber >= numPages}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300 disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={handleDownload}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
                aria-label="Download PDF"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;
