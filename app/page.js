"use client";
import React, { useEffect, useState } from "react";
import DarkVeil from "../components/DarkVeil";
import StarBorder from "@/components/StarBorder";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  const words = "Simulate real-world challenges explore the consequences";

  // Load Puter.js script dynamically and check authentication
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        if (window.puter) {
          const isSignedIn = await window.puter.auth.isSignedIn();
          if (isSignedIn) {
            setAuthenticated(true);
          }
        }
      } catch (err) {
        console.log("Auth check failed:", err);
      } finally {
        setChecking(false);
      }
    };

    if (typeof window !== "undefined" && !window.puter) {
      const script = document.createElement("script");
      script.src = "https://js.puter.com/v2/";
      script.async = true;
      script.onload = async () => {
        setLoaded(true);
        await checkAuthentication();
      };
      script.onerror = () => {
        console.error("Failed to load Puter script");
        setChecking(false);
      };
      document.body.appendChild(script);
    } else if (window.puter) {
      setLoaded(true);
      checkAuthentication();
    }
  }, []);

  const handleGetStarted = async () => {
    if (!loaded) return;

    if (authenticated) {
      // User is already signed in, redirect to chatbot
      router.push("/chatbot");
    } else {
      // User needs to sign in first
      try {
        await window.puter.auth.signIn();
        // After successful sign in, redirect to chatbot
        router.push("/chatbot");
      } catch (err) {
        console.error("Sign in failed:", err);
        // Handle sign in error if needed
      }
    }
  };

  return (
    <div className="flex items-center justify-center overflow-x-hidden overflow-y-hidden">
      <div className="relative w-[100vw] h-[100vh]">
        <DarkVeil />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <TextGenerateEffect
            words={words}
            className="text-2xl md:text-3xl lg:text-6xl font-bold text-white mb-8 max-w-4xl font-poppins leading-tight tracking-tighter"
          />
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <StarBorder
              as="button"
              className={`custom-class ${
                checking || !loaded
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer"
              }`}
              color="cyan"
              speed="2s"
              onClick={handleGetStarted}
              disabled={checking || !loaded}
            >
              {checking
                ? "Loading..."
                : authenticated
                ? "Continue to Simulator"
                : "Sign In to Get Started"}
            </StarBorder>
          </div>
          {authenticated && !checking && (
            <p className="text-white/60 text-sm mt-4">
              Welcome back! Click to continue to the simulator.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
