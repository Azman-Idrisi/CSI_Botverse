"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// System prompt that enforces the Ethical Dilemma Simulator behavior and structure
const getSystemPrompt = (difficulty) => {
  const optionsCount =
    difficulty === "easy" ? 4 : difficulty === "medium" ? 3 : 2;
  const complexityNote =
    difficulty === "easy"
      ? "Make the choices relatively clear with some obvious better options."
      : difficulty === "medium"
      ? "Make the choices more challenging with significant trade-offs, but still some clear distinctions."
      : "Make the choices extremely difficult with guaranteed losses and moral compromises. Every option should force the user to sacrifice something important.";

  return `You are an AI Ethical Dilemma Simulator.

Your role:Generate a short, realistic scenario involving an ethical dilemma related to real-life hypothetical situations (e.g.,the 2 railway track problem, the trolley problem with an AI self-driving bus, an AI-controlled hospital ventilator deciding between two patients, an AI judge choosing between strict law or fairness, an AI drone deciding whether to strike and risk civilians, or an AI education system deciding which students get limited scholarships). 
- The scenario should be a real-life hypothetical situation that is not a joke or a meme.
- The scenarios are not limited to the examples provided.
- Present the scenario in 2–3 concise paragraphs.
- The options provided should force the user to think about the consequences of their choices.
- DIFFICULTY LEVEL: ${difficulty.toUpperCase()} - ${complexityNote}
- End EACH non-final stage with exactly ${optionsCount} numbered options in this exact format:

Options:
1. <option one>
2. <option two>
${optionsCount >= 3 ? "3. <option three>" : ""}
${optionsCount >= 4 ? "4. <option four>" : ""}

- After the user responds with "choose: N" (where N is 1–${optionsCount}), continue to the next stage, explain consequences in 2–3 short paragraphs, then present the next ${optionsCount} options.
- The story must end after at most 4 stages (Stage 1 is the initial scenario). When the story ends, clearly label a final section as:

Final Outcome:
<concise outcome>

- Do NOT present options after the Final Outcome.
- Keep the dilemma realistic, nuanced, and thought-provoking. Avoid moralizing; focus on trade-offs.
- Keep the structure consistent across stages with the exact headings:
  - "Scenario (Stage X):" for each stage
  - "Options:" followed by exactly ${optionsCount} numbered lines when not final
  - "Final Outcome:" only at the final stage (no options after)
- If the user says "new scenario" or "reset", immediately start a brand-new Scenario (Stage 1) with a different theme.
- Never ask questions outside the ${optionsCount} options. Never present more or fewer than ${optionsCount} options.
`;
};

const MODEL_ID = "gpt-4o-mini";

function parseFourOptionsFromText(text, expectedCount = 4) {
  if (!text) return [];
  // Match lines beginning with 1./1) through expectedCount./expectedCount)
  const optionLines = [];
  for (let i = 1; i <= expectedCount; i++) {
    const regex = new RegExp(`^\\s*${i}[\\.)\\s]+(.+)$`, "gim");
    const match = regex.exec(text);
    optionLines.push(match && match[1] ? match[1].trim() : null);
    // Reset regex for next iteration
    regex.lastIndex = 0;
  }
  if (optionLines.every((v) => typeof v === "string" && v.length > 0)) {
    return optionLines;
  }
  return [];
}

export default function Page() {
  const [loaded, setLoaded] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);
  const [difficulty, setDifficulty] = useState(null);
  const [difficultySelected, setDifficultySelected] = useState(false);
  const [scenarioStarted, setScenarioStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const expectedOptionsCount =
    difficulty === "easy" ? 4 : difficulty === "medium" ? 3 : 2;

  async function startScenario(difficultyOverride = null) {
    const currentDifficulty = difficultyOverride || difficulty;
    console.log("startScenario called");
    console.log("window.puter:", !!window.puter);
    console.log("difficulty:", currentDifficulty);
    if (!window.puter || !currentDifficulty) {
      console.log("Early return from startScenario");
      return;
    }
    setIsLoading(true);
    setScenarioStarted(true);
    try {
      const initialUser = {
        role: "user",
        content: "Start a new scenario. Begin at Stage 1. Output Stage 1 only.",
      };
      const response = await window.puter.ai.chat(
        [
          { role: "system", content: getSystemPrompt(currentDifficulty) },
          initialUser,
        ],
        { model: MODEL_ID }
      );

      let aiReply = "";
      if (response && response.message && response.message.content) {
        aiReply = response.message.content;
      } else if (response && response.content) {
        aiReply = response.content;
      } else if (typeof response === "string") {
        aiReply = response;
      } else if (response && typeof response.toString === "function") {
        aiReply = response.toString();
      } else {
        aiReply = "Sorry, I couldn't process the response properly.";
      }

      console.log("Setting messages with AI reply:", aiReply);
      setMessages([{ role: "assistant", content: aiReply }]);
    } catch (err) {
      console.error("Failed to start scenario:", err);
      setMessages([
        {
          role: "assistant",
          content:
            "⚠️ Error creating scenario. Please ensure you're signed in, then click 'New Scenario'.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

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

        // Check for stored difficulty
        const storedDifficulty = sessionStorage.getItem("selectedDifficulty");
        if (storedDifficulty) {
          console.log("Found stored difficulty:", storedDifficulty);
          setDifficulty(storedDifficulty);
          setDifficultySelected(true);
          // Auto-start scenario with stored difficulty
          setTimeout(() => startScenario(storedDifficulty), 100);
        } else {
          console.log(
            "No stored difficulty, redirecting to difficulty selection"
          );
          // Redirect to difficulty selection page
          router.push("/difficulty");
        }
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

  // Handle message send
  const sendMessage = async (overrideContent) => {
    const contentToSend = (overrideContent ?? input).trim();
    if (!contentToSend || !loaded || !authenticated) return;

    const newMessages = [...messages, { role: "user", content: contentToSend }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const puter = window.puter;

      // Always include the system prompt at the start of the conversation
      const response = await puter.ai.chat(
        [
          { role: "system", content: getSystemPrompt(difficulty) },
          ...newMessages,
        ],
        {
          model: MODEL_ID,
        }
      );

      // Extract the message content from the response (based on the documentation)
      let aiReply = "";
      if (response && response.message && response.message.content) {
        aiReply = response.message.content;
      } else if (response && response.content) {
        aiReply = response.content;
      } else if (typeof response === "string") {
        aiReply = response;
      } else if (response && typeof response.toString === "function") {
        aiReply = response.toString();
      } else {
        aiReply = "Sorry, I couldn't process the response properly.";
      }

      // Add the AI response to the messages
      setMessages([...newMessages, { role: "assistant", content: aiReply }]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "⚠️ Error fetching response from AI. Please make sure you're signed in.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOptionClick = (index) => {
    // index is 0..expectedOptionsCount-1 -> convert to 1..expectedOptionsCount
    const choiceNumber = index + 1;
    sendMessage(`choose: ${choiceNumber}`);
  };

  const lastAssistant = [...messages]
    .reverse()
    .find((m) => m.role === "assistant");
  const optionTexts = lastAssistant
    ? parseFourOptionsFromText(lastAssistant.content, expectedOptionsCount)
    : [];

  // Check if the scenario has ended (contains "Final Outcome:")
  const scenarioEnded = lastAssistant?.content?.includes("Final Outcome:");

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
                : "Loading application..."}
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
        {/* Main glassmorphism container - increased width */}
        <div className="w-full max-w-6xl backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-6 flex flex-col h-[90vh] relative overflow-hidden">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-center text-white drop-shadow-lg flex-1">
                AI Ethical Dilemma Simulator
              </h1>
            </div>

            {/* Difficulty Info */}
            {authenticated && difficulty && (
              <div className="mb-4 p-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-center">
                <p className="text-white/80 text-sm">
                  <span
                    className={`font-semibold ${
                      getDifficultyColor(difficulty).split(" ")[0]
                    }`}
                  >
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}{" "}
                    Mode
                    {scenarioStarted && " 🔒"}
                  </span>
                  {" - "}
                  {difficulty === "easy"
                    ? "4 options with clearer choices"
                    : difficulty === "medium"
                    ? "3 options with moderate complexity"
                    : "2 extremely difficult options with guaranteed sacrifices"}
                  {scenarioStarted && (
                    <span className="block text-xs text-white/60 mt-1">
                      Difficulty locked during active scenario
                    </span>
                  )}
                </p>
              </div>
            )}

            {/* Main content area - split layout */}
            {authenticated && difficulty && (
              <div className="flex-1 flex gap-6 min-h-0">
                {/* Left side - Chat area */}
                <div className="flex-1 flex flex-col min-w-0">
                  <h2 className="text-xl font-semibold text-white mb-3">
                    Scenario
                  </h2>
                  <div className="flex-1 overflow-y-auto backdrop-blur-md bg-black/10 border border-white/20 p-4 rounded-2xl shadow-inner">
                    {messages.map((msg, i) => (
                      <div
                        key={i}
                        className={`mb-3 p-4 rounded-2xl backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-[1.01] ${
                          msg.role === "user"
                            ? "bg-blue-500/30 border border-blue-300/30 text-white ml-auto max-w-[80%] shadow-blue-500/20"
                            : "bg-white/20 border border-white/30 text-white shadow-white/10"
                        }`}
                      >
                        <div className="font-medium text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                          {msg.content}
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-4 shadow-lg">
                        <div className="flex items-center space-x-2 text-white/80">
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
                          <span className="font-medium">
                            Model is thinking...
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right side - Choices area */}
                <div className="w-96 flex flex-col min-h-0">
                  <h2 className="text-xl font-semibold text-white mb-3">
                    Your Choices
                  </h2>
                  <div className="flex-1 backdrop-blur-md bg-black/10 border border-white/20 p-4 rounded-2xl shadow-inner overflow-y-auto">
                    {optionTexts.length === expectedOptionsCount ? (
                      <div className="space-y-3">
                        <p className="text-white/80 text-sm mb-4">
                          Choose your response ({expectedOptionsCount} options
                          available):
                        </p>
                        {optionTexts.map((opt, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleOptionClick(idx)}
                            className="w-full backdrop-blur-md bg-white/20 hover:bg-white/30 text-white p-4 rounded-xl border border-white/30 text-left transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                          >
                            <div className="font-semibold text-blue-200 mb-2 text-sm">
                              Option {idx + 1}
                            </div>
                            <div className="text-sm leading-relaxed">{opt}</div>
                          </button>
                        ))}
                      </div>
                    ) : scenarioEnded ? (
                      <div className="flex items-center justify-center h-full text-white/60 text-center">
                        <div>
                          <div className="text-4xl mb-4">🎉</div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            Scenario Complete!
                          </h3>
                          <p className="text-sm mb-4">
                            You&apos;ve reached the end of this ethical dilemma.
                          </p>
                          <p className="text-xs text-white/40 mb-4">
                            Review the final outcome in the scenario panel.
                          </p>
                          <button
                            onClick={() => {
                              setScenarioStarted(false);
                              startScenario(difficulty);
                            }}
                            disabled={isLoading}
                            className="px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 backdrop-blur-md border bg-green-500/30 hover:bg-green-500/40 text-white border-green-300/30 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            🎲 Start New Scenario
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full text-white/60 text-center">
                        <div>
                          <div className="text-4xl mb-2">🤔</div>
                          <p className="text-sm">
                            Waiting for scenario options...
                          </p>
                          <p className="text-xs mt-2 text-white/40">
                            Expecting {expectedOptionsCount} options in{" "}
                            {difficulty} mode
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Controls */}
            {authenticated && difficulty && (
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4 pt-4 border-t border-white/20">
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setScenarioStarted(false);
                      startScenario(difficulty);
                    }}
                    disabled={!authenticated || isLoading}
                    className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-md border ${
                      authenticated && !isLoading
                        ? "bg-green-500/30 hover:bg-green-500/40 text-white border-green-300/30 hover:scale-105 hover:shadow-lg"
                        : "bg-gray-500/20 text-white/40 cursor-not-allowed border-gray-300/20"
                    }`}
                  >
                    🎲 New Scenario
                  </button>
                </div>

                {/* Input section with glassmorphism */}
                <div className="flex space-x-2 flex-1 max-w-md w-full sm:w-auto">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Type custom message (optional)..."
                    disabled={!authenticated}
                    className={`flex-1 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-300 ${
                      !authenticated
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-white/25"
                    }`}
                  />
                  <button
                    onClick={() => sendMessage()}
                    disabled={!authenticated || !input.trim()}
                    className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-md border ${
                      authenticated && input.trim()
                        ? "bg-blue-500/30 hover:bg-blue-500/40 text-white border-blue-300/30 hover:shadow-lg hover:shadow-blue-500/25"
                        : "bg-gray-500/20 text-white/40 cursor-not-allowed border-gray-300/20"
                    }`}
                  >
                    Send
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            transform: translateX(0%);
          }
          50% {
            transform: translateX(100%);
          }
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
          background-size: 400% 400%;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
