"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DifficultyPage() {
  const [loaded, setLoaded] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);
  const router = useRouter();

  // Load Puter.js script dynamically and check authentication
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        if (!window.puter) {
          console.log("Puter not loaded, redirecting to home");
          router.push("/");
          return;
        }

        const isSignedIn = await window.puter.auth.isSignedIn();
        console.log("Authentication check result:", isSignedIn);

        if (!isSignedIn) {
          console.log("User not signed in, redirecting to home");
          router.push("/");
          return;
        }

        setAuthenticated(true);
      } catch (err) {
        console.error("Auth check failed:", err);
        router.push("/");
      } finally {
        setAuthChecking(false);
      }
    };

    if (typeof window !== "undefined" && !window.puter) {
      const script = document.createElement("script");
      script.src = "https://js.puter.com/v2/";
      script.async = true;
      script.onload = async () => {
        console.log("Puter script loaded");
        setLoaded(true);
        await checkAuthentication();
      };
      script.onerror = () => {
        console.error("Failed to load Puter script");
        setAuthChecking(false);
        router.push("/");
      };
      document.body.appendChild(script);
    } else if (window.puter) {
      console.log("Puter already available");
      setLoaded(true);
      checkAuthentication();
    }
  }, [router]);

  const handleDifficultySelect = (level) => {
    // Store difficulty in sessionStorage or localStorage
    sessionStorage.setItem("selectedDifficulty", level);
    // Navigate to the main chatbot page
    router.push("/chatbot");
  };

  const getDifficultyColor = (level) => {
    switch (level) {
      case "easy":
        return "text-green-300 border-green-300/30 bg-green-500/20";
      case "medium":
        return "text-yellow-300 border-yellow-300/30 bg-yellow-500/20";
      case "hard":
        return "text-red-300 border-red-300/30 bg-red-500/20";
      default:
        return "text-white border-white/30 bg-white/20";
    }
  };

  const getDifficultyEmoji = (level) => {
    switch (level) {
      case "easy":
        return "😊";
      case "medium":
        return "🤔";
      case "hard":
        return "😰";
      default:
        return "❓";
    }
  };

  // Show loading screen while checking authentication
  if (authChecking || !loaded || !authenticated) {
    return (
      <div className="min-h-screen p-6 relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
          <div className="w-full max-w-2xl backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-8 text-center">
            <div className="text-6xl mb-4">{authChecking ? "🔐" : "🔄"}</div>
            <h2 className="text-2xl font-bold text-white mb-4">
              {authChecking ? "Verifying Access" : "Loading..."}
            </h2>
            <p className="text-white/80">
              {authChecking
                ? "Checking authentication status..."
                : "Loading difficulty selection..."}
            </p>
            <div className="flex justify-center mt-4">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Main glassmorphism container */}
        <div className="w-full max-w-6xl backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl pointer-events-none"></div>

          <div className="relative z-10 text-center">
            {/* Header */}
            <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg font-poppins">
              AI Ethical Dilemma Simulator
            </h1>

            {/* Main content */}
            <h2 className="text-3xl font-poppins font-bold text-white mb-6">
              Select Your Challenge Level
            </h2>

            {/* Difficulty options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  level: "easy",
                  title: "Easy Mode",
                  desc: "4 options with clearer moral choices. Good for beginners who want to explore ethical thinking.",
                  emoji: "😊",
                  features: [
                    "4 choice options",
                    "Clear distinctions",
                    "Beginner friendly",
                  ],
                },
                {
                  level: "medium",
                  title: "Medium Mode",
                  desc: "3 options with moderate complexity and significant trade-offs between choices.",
                  emoji: "🤔",
                  features: [
                    "3 choice options",
                    "Moderate complexity",
                    "Balanced challenge",
                  ],
                },
                {
                  level: "hard",
                  title: "Hard Mode",
                  desc: "2 extremely difficult choices with guaranteed losses and moral compromises.",
                  emoji: "😰",
                  features: [
                    "2 choice options",
                    "Extreme difficulty",
                    "Guaranteed sacrifices",
                  ],
                },
              ].map(({ level, title, desc, emoji, features }) => (
                <button
                  key={level}
                  onClick={() => handleDifficultySelect(level)}
                  className={`p-6 rounded-2xl transition-all duration-300 backdrop-blur-md border hover:scale-105 hover:shadow-lg text-left ${getDifficultyColor(
                    level
                  )}`}
                >
                  <div className="text-5xl mb-4 text-center">{emoji}</div>
                  <div className="font-bold text-xl mb-3 text-center">
                    {title}
                  </div>
                  <div className="text-sm opacity-90 mb-4 leading-relaxed">
                    {desc}
                  </div>

                  {/* Features list */}
                  <div className="space-y-2">
                    {features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-xs opacity-80"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-current mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </button>
              ))}
            </div>

            {/* Back button */}
            <button
              onClick={() => router.push("/")}
              className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-md border text-white/60 border-white/20 bg-white/10 hover:bg-white/20 hover:scale-105"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
