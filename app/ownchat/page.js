"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Brain,
  Lightbulb,
  Search,
  Menu,
  X,
  ArrowRight,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import StarBorder from "@/components/StarBorder";

const MODEL_ID = "gpt-4o-mini";

// System prompt for dilemma analysis
const getSystemPrompt = () => {
  return `You are an AI Dilemma Analyzer that provides comprehensive analysis and strategic recommendations for any question, problem, or decision.

Your role:
- Analyze the user's dilemma/question/problem from multiple perspectives
- Identify key stakeholders who would be affected
- Consider various approaches and their trade-offs
- Provide 3 strategic options with detailed analysis
- Focus on practical, actionable insights

Response Format (ALWAYS follow this exact structure):

**Analysis Type**: [Brief description of the type of analysis - e.g., "Career Decision Analysis", "Business Strategy Analysis"]

**Key Stakeholders**: [List 3-4 main parties affected by this decision]

**Critical Considerations**: [List 3-4 most important factors to consider]

**Success Metrics**: [List 3-4 ways to measure success for this situation]

**Complexity**: [Low/Medium/High]

**Urgency**: [Low/Medium/High]

**Strategic Options**:

**Option 1: [Comprehensive Approach Title]**
Score: [75-90]/100
Description: [2-3 sentences describing a thorough, well-planned approach]
Advantages:
• [Advantage 1]
• [Advantage 2] 
• [Advantage 3]
• [Advantage 4]
Considerations:
• [Consideration/challenge 1]
• [Consideration/challenge 2]
• [Consideration/challenge 3]

**Option 2: [Balanced Strategy Title]**
Score: [60-75]/100
Description: [2-3 sentences describing a moderate, balanced approach]
Advantages:
• [Advantage 1]
• [Advantage 2]
• [Advantage 3]
• [Advantage 4]
Considerations:
• [Consideration/challenge 1]
• [Consideration/challenge 2]
• [Consideration/challenge 3]

**Option 3: [Quick Implementation Title]**
Score: [45-65]/100
Description: [2-3 sentences describing a fast, simple approach]
Advantages:
• [Advantage 1]
• [Advantage 2]
• [Advantage 3]
Considerations:
• [Consideration/challenge 1]
• [Consideration/challenge 2]
• [Consideration/challenge 3]

**Next Steps**: [2-3 sentences with practical advice on how to proceed]

Keep your analysis practical, balanced, and actionable. Avoid being overly academic or theoretical.`;
};

// Parse the AI response into structured data
const parseAIResponse = (response) => {
  try {
    const lines = response.split("\n").filter((line) => line.trim());

    const result = {
      analysisType: "General Analysis",
      stakeholders: [],
      keyConsiderations: [],
      successMetrics: [],
      complexity: "Medium",
      urgency: "Medium",
      options: [],
      nextSteps: "",
    };

    let currentSection = null;
    let currentOption = null;
    let currentSubSection = null;

    for (const line of lines) {
      const trimmed = line.trim();

      if (trimmed.startsWith("**Analysis Type**:")) {
        result.analysisType = trimmed.replace("**Analysis Type**:", "").trim();
      } else if (trimmed.startsWith("**Key Stakeholders**:")) {
        const stakeholders = trimmed
          .replace("**Key Stakeholders**:", "")
          .trim();
        result.stakeholders = stakeholders
          .split(",")
          .map((s) => s.trim())
          .slice(0, 4);
      } else if (trimmed.startsWith("**Critical Considerations**:")) {
        const considerations = trimmed
          .replace("**Critical Considerations**:", "")
          .trim();
        result.keyConsiderations = considerations
          .split(",")
          .map((s) => s.trim())
          .slice(0, 4);
      } else if (trimmed.startsWith("**Success Metrics**:")) {
        const metrics = trimmed.replace("**Success Metrics**:", "").trim();
        result.successMetrics = metrics
          .split(",")
          .map((s) => s.trim())
          .slice(0, 4);
      } else if (trimmed.startsWith("**Complexity**:")) {
        result.complexity = trimmed.replace("**Complexity**:", "").trim();
      } else if (trimmed.startsWith("**Urgency**:")) {
        result.urgency = trimmed.replace("**Urgency**:", "").trim();
      } else if (trimmed.startsWith("**Option")) {
        if (currentOption) {
          result.options.push(currentOption);
        }
        const titleMatch = trimmed.match(/\*\*Option \d+: (.+?)\*\*/);
        currentOption = {
          title: titleMatch ? titleMatch[1] : "Strategic Option",
          description: "",
          pros: [],
          cons: [],
          score: 70,
          type:
            result.options.length === 0
              ? "primary"
              : result.options.length === 1
              ? "secondary"
              : "caution",
        };
        currentSubSection = null;
      } else if (trimmed.startsWith("Score:") && currentOption) {
        const scoreMatch = trimmed.match(/(\d+)/);
        if (scoreMatch) {
          currentOption.score = parseInt(scoreMatch[1]);
        }
      } else if (trimmed.startsWith("Description:") && currentOption) {
        currentOption.description = trimmed.replace("Description:", "").trim();
      } else if (trimmed === "Advantages:" && currentOption) {
        currentSubSection = "advantages";
      } else if (trimmed === "Considerations:" && currentOption) {
        currentSubSection = "considerations";
      } else if (trimmed.startsWith("•") && currentOption) {
        const text = trimmed.replace("•", "").trim();
        if (currentSubSection === "advantages") {
          currentOption.pros.push(text);
        } else if (currentSubSection === "considerations") {
          currentOption.cons.push(text);
        }
      } else if (trimmed.startsWith("**Next Steps**:")) {
        if (currentOption) {
          result.options.push(currentOption);
          currentOption = null;
        }
        result.nextSteps = trimmed.replace("**Next Steps**:", "").trim();
      }
    }

    // Add the last option if it exists
    if (currentOption) {
      result.options.push(currentOption);
    }

    // Ensure we have at least some default data
    if (result.stakeholders.length === 0) {
      result.stakeholders = [
        "Individuals",
        "Organizations",
        "Society",
        "Environment",
      ];
    }
    if (result.keyConsiderations.length === 0) {
      result.keyConsiderations = [
        "Impact",
        "Feasibility",
        "Sustainability",
        "Ethics",
      ];
    }
    if (result.successMetrics.length === 0) {
      result.successMetrics = [
        "Effectiveness",
        "Efficiency",
        "Satisfaction",
        "Long-term Value",
      ];
    }
    if (result.options.length === 0) {
      result.options = [
        {
          title: "Comprehensive Approach",
          description:
            "Address all aspects systematically with thorough planning and stakeholder involvement",
          pros: [
            "Holistic solution",
            "Sustainable results",
            "Stakeholder buy-in",
            "Risk mitigation",
          ],
          cons: [
            "Time-intensive",
            "Resource heavy",
            "Complex implementation",
            "Higher initial cost",
          ],
          score: 75,
          type: "primary",
        },
      ];
    }

    return result;
  } catch (error) {
    console.error("Error parsing AI response:", error);
    // Return fallback analysis
    return {
      analysisType: "General Analysis",
      stakeholders: ["Individuals", "Organizations", "Society", "Environment"],
      keyConsiderations: ["Impact", "Feasibility", "Sustainability", "Ethics"],
      successMetrics: [
        "Effectiveness",
        "Efficiency",
        "Satisfaction",
        "Long-term Value",
      ],
      complexity: "Medium",
      urgency: "Medium",
      options: [
        {
          title: "Comprehensive Approach",
          description:
            "Address all aspects systematically with thorough planning and stakeholder involvement",
          pros: [
            "Holistic solution",
            "Sustainable results",
            "Stakeholder buy-in",
            "Risk mitigation",
          ],
          cons: [
            "Time-intensive",
            "Resource heavy",
            "Complex implementation",
            "Higher initial cost",
          ],
          score: 75,
          type: "primary",
        },
      ],
      nextSteps:
        "Consider your specific context and resources when choosing an approach.",
    };
  }
};

export default function UniversalAISimulator() {
  const [query, setQuery] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);
  const queryInputRef = useRef(null);
  const router = useRouter();

  // Load Puter.js script dynamically and check authentication
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        if (!window.puter) {
          console.log("Puter not loaded, user needs to sign in");
          setAuthenticated(false);
          setAuthChecking(false);
          return;
        }

        const isSignedIn = await window.puter.auth.isSignedIn();
        console.log("Authentication check result:", isSignedIn);
        setAuthenticated(isSignedIn);
      } catch (err) {
        console.error("Auth check failed:", err);
        setAuthenticated(false);
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
        setLoaded(true);
        setAuthChecking(false);
      };
      document.body.appendChild(script);
    } else if (window.puter) {
      console.log("Puter already available");
      setLoaded(true);
      checkAuthentication();
    } else {
      setLoaded(true);
      setAuthChecking(false);
    }
  }, []);

  const handleSignIn = async () => {
    try {
      if (window.puter) {
        await window.puter.auth.signIn();
        const isSignedIn = await window.puter.auth.isSignedIn();
        setAuthenticated(isSignedIn);
      }
    } catch (err) {
      console.error("Sign in failed:", err);
    }
  };

  const handleAnalyze = async (queryText) => {
    if (!queryText.trim()) return;

    if (!authenticated) {
      alert("Please sign in with Puter to use AI analysis.");
      return;
    }

    setIsAnalyzing(true);
    setCurrentStep(0);

    const steps = [
      "Analyzing content and context...",
      "Identifying key stakeholders...",
      "Evaluating different approaches...",
      "Generating strategic options...",
      "Finalizing recommendations...",
    ];

    // Simulate progress steps
    for (let i = 0; i < steps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setCurrentStep(i + 1);
    }

    try {
      const response = await window.puter.ai.chat(
        [
          { role: "system", content: getSystemPrompt() },
          {
            role: "user",
            content: `Please analyze this dilemma/question/problem and provide strategic recommendations: ${queryText}`,
          },
        ],
        { model: MODEL_ID }
      );

      // Extract the message content from the response
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

      const result = parseAIResponse(aiReply);
      setAnalysis(result);
    } catch (err) {
      console.error("Failed to analyze query:", err);
      // Show error message but still use fallback analysis
      const fallbackResult = parseAIResponse("");
      fallbackResult.analysisType = "Analysis Error - Using Fallback";
      setAnalysis(fallbackResult);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const exampleQueries = [
    "Should I start a tech startup or join an established company?",
    "How can I improve my productivity while working from home?",
    "What's the best way to learn programming in 2024?",
    "Should I invest in stocks or real estate right now?",
    "How do I handle a difficult conversation with my manager?",
    "What marketing strategy works best for small businesses?",
    "How can I maintain work-life balance in a demanding job?",
    "Should we adopt AI tools in our educational curriculum?",
  ];

  const trendingTopics = [
    "AI Implementation",
    "Remote Work",
    "Career Growth",
    "Investment Strategy",
    "Health & Wellness",
    "Productivity",
    "Leadership",
    "Technology Trends",
  ];

  const getScoreColor = (score) => {
    if (score >= 75) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-orange-400";
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "primary":
        return "from-green-500 to-emerald-600";
      case "secondary":
        return "from-blue-500 to-indigo-600";
      case "caution":
        return "from-orange-500 to-red-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  // Show loading screen while checking authentication
  if (authChecking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <Brain className="h-12 w-12 text-blue-400 animate-pulse mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Loading AI Analyzer...</h2>
          <p className="text-gray-400">Checking authentication status...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <Brain className="h-8 w-8 text-blue-400" />
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    AI Dilemma Analyzer Simulator
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {!authenticated && (
                <button
                  onClick={handleSignIn}
                  className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors text-white font-medium"
                >
                  Sign In with Puter
                </button>
              )}
              <button
                className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/40 backdrop-blur-xl border-b border-white/10">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Trending
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Examples
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
          </div>
        </div>
      )}

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!analysis ? (
          <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                AI Dilemma Simulator
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Get intelligent analysis and strategic recommendations for any
                dilemma, question, problem, or decision. From business strategy
                to personal choices
              </p>
              {!authenticated && (
                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-4 max-w-2xl mx-auto">
                  <div className="flex items-center space-x-2 text-yellow-300">
                    <AlertCircle className="h-5 w-5" />
                    <span className="font-semibold">Sign in required</span>
                  </div>
                  <p className="text-yellow-200 mt-1">
                    Please sign in with Puter to access AI-powered analysis.
                  </p>
                </div>
              )}
            </div>

            <div className="w-full max-w-4xl relative">
              <div className="relative group">
                <Search className="absolute left-4 top-6 h-6 w-6 text-blue-400 group-focus-within:text-purple-400 transition-colors" />
                <textarea
                  ref={queryInputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && e.ctrlKey && handleAnalyze(query)
                  }
                  placeholder="Describe your dilemma, problem, or decision that needs analysis..."
                  rows={4}
                  className="w-full pl-14 pr-4 py-6 text-lg rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400/20 transition-all placeholder-gray-400 resize-none overflow-hidden scrollbar-hide"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                />
                <button
                  onClick={() => handleAnalyze(query)}
                  disabled={!query.trim() || isAnalyzing || !authenticated}
                  className="absolute right-4 bottom-4 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold flex items-center space-x-2"
                >
                  <span>Analyze with AI</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <StarBorder
                as="button"
                className="px-6 py-3 text-white font-semibold hover:scale-105 transition-transform cursor-pointer"
                color="#cyan"
                speed="2s"
                thickness={2}
                onClick={() => router.push("/")}
                cursor="pointer"
              >
                Homepage
              </StarBorder>
            </div>

            {isAnalyzing && (
              <div className="w-full max-w-2xl bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <Brain className="h-8 w-8 text-blue-400 animate-pulse" />
                  <span className="text-xl font-semibold">
                    AI is Analyzing Your Dilemma
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    "Analyzing content and context",
                    "Identifying key stakeholders",
                    "Evaluating different approaches",
                    "Generating strategic options",
                    "Finalizing recommendations",
                  ].map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className={`w-4 h-4 rounded-full ${
                          currentStep > index
                            ? "bg-blue-400"
                            : currentStep === index
                            ? "bg-blue-400 animate-pulse"
                            : "bg-gray-600"
                        } transition-colors`}
                      />
                      <span
                        className={`${
                          currentStep >= index ? "text-white" : "text-gray-400"
                        } transition-colors`}
                      >
                        {step}...
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                    style={{ width: `${(currentStep / 5) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI Analysis Complete
                </h2>
                <p className="text-gray-400 mt-2">{analysis.analysisType}</p>
              </div>
              <button
                onClick={() => setAnalysis(null)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all font-semibold flex items-center space-x-2"
              >
                <Brain className="h-5 w-5" />
                <span>New Analysis</span>
              </button>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold flex items-center space-x-3">
                <Lightbulb className="h-7 w-7 text-yellow-400" />
                <span>AI-Generated Strategic Options & Recommendations</span>
              </h3>

              {analysis.options.map((option, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between space-y-4 md:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <h4 className="text-xl font-bold text-white">
                          {option.title}
                        </h4>
                        <div
                          className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getTypeColor(
                            option.type
                          )}`}
                        >
                          {option.type === "primary"
                            ? "Recommended"
                            : option.type === "secondary"
                            ? "Alternative"
                            : "Quick Option"}
                        </div>
                        <div
                          className={`text-2xl font-bold ${getScoreColor(
                            option.score
                          )}`}
                        >
                          {option.score}/100
                        </div>
                      </div>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {option.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-green-300 mb-3 flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4" />
                            <span>Advantages</span>
                          </h5>
                          <ul className="space-y-2">
                            {option.pros.map((pro, idx) => (
                              <li
                                key={idx}
                                className="text-gray-300 flex items-start space-x-2"
                              >
                                <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-orange-300 mb-3 flex items-center space-x-2">
                            <AlertCircle className="h-4 w-4" />
                            <span>Considerations</span>
                          </h5>
                          <ul className="space-y-2">
                            {option.cons.map((con, idx) => (
                              <li
                                key={idx}
                                className="text-gray-300 flex items-start space-x-2"
                              >
                                <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/20">
              <div className="flex items-start space-x-3">
                <Lightbulb className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    AI-Recommended Next Steps
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {analysis.nextSteps ||
                      "Consider your specific context, available resources, and timeline when choosing an approach. You can always start with a smaller pilot and scale up based on results. Remember to gather feedback from key stakeholders throughout the process."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
