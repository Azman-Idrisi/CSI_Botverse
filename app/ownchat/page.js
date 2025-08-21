// "use client";

// import { useState, useRef } from 'react';
// import { Brain, AlertTriangle, Scale, Lightbulb, Users, Shield, ChevronRight, Zap, Eye, BookOpen } from 'lucide-react';

// export default function Page() {
//   const [dilemma, setDilemma] = useState('');
//   const [isAnalyzing, setIsAnalyzing] = useState(false);
//   const [analysis, setAnalysis] = useState(null);
//   const [currentStep, setCurrentStep] = useState(0);
//   const dilemmaInputRef = useRef(null);

//   const handleAnalyzeDilemma = async (dilemmaText) => {
//     if (!dilemmaText.trim()) return;
    
//     setIsAnalyzing(true);
//     setCurrentStep(0);
    
//     // Simulate AI analysis with steps
//     const steps = [
//       "Identifying ethical frameworks...",
//       "Analyzing stakeholder impact...",
//       "Evaluating potential outcomes...",
//       "Generating decision pathways...",
//       "Finalizing recommendations..."
//     ];
    
//     for (let i = 0; i < steps.length; i++) {
//       await new Promise(resolve => setTimeout(resolve, 800));
//       setCurrentStep(i + 1);
//     }
    
//     // Mock analysis result
//     setTimeout(() => {
//       setAnalysis({
//         dilemmaType: "Autonomous Systems Ethics",
//         stakeholders: ["End Users", "Society", "Developers", "Regulators"],
//         ethicalFrameworks: ["Utilitarianism", "Deontological Ethics", "Virtue Ethics"],
//         riskLevel: "High",
//         options: [
//           {
//             id: 1,
//             title: "Prioritize Safety",
//             description: "Implement maximum safety constraints even if it reduces efficiency",
//             pros: ["Minimizes harm", "Builds public trust", "Regulatory compliance"],
//             cons: ["Reduced performance", "Higher costs", "Slower adoption"],
//             ethicalScore: 85,
//             recommendation: "primary"
//           },
//           {
//             id: 2,
//             title: "Balanced Approach",
//             description: "Balance safety with performance through adaptive systems",
//             pros: ["Flexible solution", "Good performance", "Moderate costs"],
//             cons: ["Complex implementation", "Some residual risk", "Ongoing monitoring needed"],
//             ethicalScore: 72,
//             recommendation: "secondary"
//           },
//           {
//             id: 3,
//             title: "Performance Priority",
//             description: "Optimize for maximum performance with basic safety measures",
//             pros: ["Best performance", "Lower costs", "Faster market entry"],
//             cons: ["Higher risk", "Potential backlash", "Regulatory challenges"],
//             ethicalScore: 45,
//             recommendation: "caution"
//           }
//         ]
//       });
//       setIsAnalyzing(false);
//     }, 1000);
//   };

//   const predefinedDilemmas = [
//     "An autonomous vehicle must choose between hitting one person or swerving to hit three people",
//     "An AI hiring system shows bias against certain demographic groups but is highly accurate",
//     "A medical AI can save more lives by sharing patient data without explicit consent",
//     "An AI content moderation system must balance free speech with preventing harm"
//   ];

//   const ethicalPrinciples = [
//     { icon: Scale, name: "Fairness", desc: "Ensuring equitable treatment" },
//     { icon: Shield, name: "Safety", desc: "Minimizing harm and risk" },
//     { icon: Eye, name: "Transparency", desc: "Clear and explainable decisions" },
//     { icon: Users, name: "Accountability", desc: "Responsible ownership of outcomes" }
//   ];

//   const getRecommendationColor = (type) => {
//     switch(type) {
//       case 'primary': return 'from-green-500 to-emerald-600';
//       case 'secondary': return 'from-yellow-500 to-orange-500';
//       case 'caution': return 'from-red-500 to-red-600';
//       default: return 'from-gray-500 to-gray-600';
//     }
//   };

//   const getScoreColor = (score) => {
//     if (score >= 80) return 'text-green-400';
//     if (score >= 60) return 'text-yellow-400';
//     return 'text-red-400';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
//       {/* Header */}
//       <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center space-x-3">
//                 <Brain className="h-8 w-8 text-purple-400" />
//                 <div>
//                   <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                     AI Dilemma Simulator
//                   </span>
//                   <div className="text-xs text-gray-400">Powered by Puter.js</div>
//                 </div>
//               </div>
//             </div>
            
//             <nav className="hidden md:flex items-center space-x-6">
//               <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
//                 <BookOpen className="h-4 w-4" />
//                 <span>Ethics Guide</span>
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">Framework</a>
//             </nav>

//             <div className="flex items-center space-x-4">
//               <button className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all">
//                 <Zap className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {!analysis ? (
//           // Initial State
//           <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-8">
//             <div className="text-center space-y-6">
//               <div className="flex items-center justify-center space-x-3 mb-4">
//                 <AlertTriangle className="h-12 w-12 text-yellow-400" />
//                 <Scale className="h-16 w-16 text-purple-400" />
//                 <Brain className="h-12 w-12 text-pink-400" />
//               </div>
//               <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
//                 Navigate AI Ethics
//               </h1>
//               <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//                 Present your AI ethical dilemma and receive comprehensive analysis with multiple solution pathways, 
//                 stakeholder impact assessment, and ethical framework recommendations.
//               </p>
//             </div>

//             {/* Dilemma Input */}
//             <div className="w-full max-w-4xl relative">
//               <div className="relative group">
//                 <AlertTriangle className="absolute left-4 top-6 h-6 w-6 text-yellow-400 group-focus-within:text-purple-400 transition-colors" />
//                 <textarea
//                   ref={dilemmaInputRef}
//                   value={dilemma}
//                   onChange={(e) => setDilemma(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && e.ctrlKey && handleAnalyzeDilemma(dilemma)}
//                   placeholder="Describe your AI ethical dilemma... (e.g., An AI system must decide between competing moral values)"
//                   rows={4}
//                   className="w-full pl-14 pr-4 py-6 text-lg rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-400/20 transition-all placeholder-gray-400 resize-none"
//                 />
//                 <button
//                   onClick={() => handleAnalyzeDilemma(dilemma)}
//                   disabled={!dilemma.trim() || isAnalyzing}
//                   className="absolute right-4 bottom-4 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold flex items-center space-x-2"
//                 >
//                   <span>Analyze Dilemma</span>
//                   <ChevronRight className="h-5 w-5" />
//                 </button>
//               </div>
//               <div className="text-sm text-gray-400 mt-2 text-center">
//                 Ctrl + Enter to analyze • All analyses are processed locally with Puter.js
//               </div>
//             </div>

//             {/* Analysis Progress */}
//             {isAnalyzing && (
//               <div className="w-full max-w-2xl bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
//                 <div className="flex items-center justify-center space-x-3 mb-6">
//                   <Brain className="h-8 w-8 text-purple-400 animate-pulse" />
//                   <span className="text-xl font-semibold">Analyzing Ethical Dilemma</span>
//                 </div>
//                 <div className="space-y-4">
//                   {["Identifying ethical frameworks", "Analyzing stakeholder impact", "Evaluating potential outcomes", "Generating decision pathways", "Finalizing recommendations"].map((step, index) => (
//                     <div key={index} className="flex items-center space-x-3">
//                       <div className={`w-4 h-4 rounded-full ${currentStep > index ? 'bg-purple-400' : currentStep === index ? 'bg-purple-400 animate-pulse' : 'bg-gray-600'} transition-colors`} />
//                       <span className={`${currentStep >= index ? 'text-white' : 'text-gray-400'} transition-colors`}>
//                         {step}...
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="mt-6 bg-gray-800 rounded-full h-2 overflow-hidden">
//                   <div 
//                     className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
//                     style={{ width: `${(currentStep / 5) * 100}%` }}
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Predefined Dilemmas */}
//             {!isAnalyzing && (
//               <div className="w-full max-w-4xl space-y-6">
//                 <h3 className="text-2xl font-bold text-center text-gray-300">
//                   Or explore these classic AI dilemmas:
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {predefinedDilemmas.map((scenario, index) => (
//                     <button
//                       key={index}
//                       onClick={() => {
//                         setDilemma(scenario);
//                         handleAnalyzeDilemma(scenario);
//                       }}
//                       className="text-left p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-400/50 transition-all group"
//                     >
//                       <div className="flex items-start space-x-3">
//                         <AlertTriangle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
//                         <span className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">
//                           {scenario}
//                         </span>
//                       </div>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Ethical Principles */}
//             <div className="w-full max-w-4xl">
//               <h3 className="text-xl font-semibold text-center mb-6 text-gray-300">
//                 Built on Core Ethical Principles
//               </h3>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {ethicalPrinciples.map((principle, index) => (
//                   <div key={index} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
//                     <principle.icon className="h-8 w-8 mx-auto mb-3 text-purple-400" />
//                     <h4 className="font-semibold text-white mb-1">{principle.name}</h4>
//                     <p className="text-sm text-gray-400">{principle.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ) : (
//           // Analysis Results
//           <div className="space-y-8">
//             {/* Header with New Analysis Button */}
//             <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
//               <div>
//                 <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                   Ethical Analysis Complete
//                 </h2>
//                 <p className="text-gray-400 mt-2">Dilemma Type: {analysis.dilemmaType}</p>
//               </div>
//               <button
//                 onClick={() => setAnalysis(null)}
//                 className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all font-semibold flex items-center space-x-2"
//               >
//                 <Brain className="h-5 w-5" />
//                 <span>New Analysis</span>
//               </button>
//             </div>

//             {/* Risk Assessment */}
//             <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
//               <div className="flex items-center space-x-3 mb-4">
//                 <Shield className="h-6 w-6 text-red-400" />
//                 <h3 className="text-xl font-semibold">Risk Assessment</h3>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div>
//                   <h4 className="font-semibold mb-2 text-red-300">Risk Level</h4>
//                   <div className="px-4 py-2 rounded-lg bg-red-500/20 text-red-300 font-bold">
//                     {analysis.riskLevel}
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-2 text-purple-300">Key Stakeholders</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {analysis.stakeholders.map((stakeholder, index) => (
//                       <span key={index} className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300">
//                         {stakeholder}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-2 text-blue-300">Ethical Frameworks</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {analysis.ethicalFrameworks.map((framework, index) => (
//                       <span key={index} className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300">
//                         {framework}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Decision Options */}
//             <div className="space-y-6">
//               <h3 className="text-2xl font-semibold flex items-center space-x-3">
//                 <Lightbulb className="h-7 w-7 text-yellow-400" />
//                 <span>Recommended Decision Pathways</span>
//               </h3>
              
//               {analysis.options.map((option, index) => (
//                 <div key={option.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
//                   <div className="flex flex-col md:flex-row md:items-start justify-between space-y-4 md:space-y-0">
//                     <div className="flex-1">
//                       <div className="flex items-center space-x-4 mb-4">
//                         <h4 className="text-xl font-bold text-white">{option.title}</h4>
//                         <div className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getRecommendationColor(option.recommendation)}`}>
//                           {option.recommendation === 'primary' ? 'Recommended' : 
//                            option.recommendation === 'secondary' ? 'Alternative' : 'Caution Required'}
//                         </div>
//                         <div className={`text-2xl font-bold ${getScoreColor(option.ethicalScore)}`}>
//                           {option.ethicalScore}/100
//                         </div>
//                       </div>
//                       <p className="text-gray-300 mb-6 leading-relaxed">{option.description}</p>
                      
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                           <h5 className="font-semibold text-green-300 mb-3 flex items-center space-x-2">
//                             <ChevronRight className="h-4 w-4" />
//                             <span>Advantages</span>
//                           </h5>
//                           <ul className="space-y-2">
//                             {option.pros.map((pro, idx) => (
//                               <li key={idx} className="text-gray-300 flex items-start space-x-2">
//                                 <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
//                                 <span>{pro}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                         <div>
//                           <h5 className="font-semibold text-red-300 mb-3 flex items-center space-x-2">
//                             <ChevronRight className="h-4 w-4" />
//                             <span>Considerations</span>
//                           </h5>
//                           <ul className="space-y-2">
//                             {option.cons.map((con, idx) => (
//                               <li key={idx} className="text-gray-300 flex items-start space-x-2">
//                                 <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
//                                 <span>{con}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Implementation Note */}
//             <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20">
//               <div className="flex items-start space-x-3">
//                 <Lightbulb className="h-6 w-6 text-yellow-400 mt-1" />
//                 <div>
//                   <h4 className="font-semibold text-white mb-2">Implementation Guidance</h4>
//                   <p className="text-gray-300 leading-relaxed">
//                     Remember that ethical AI implementation requires continuous monitoring, stakeholder feedback, and iterative improvement. 
//                     Consider establishing an ethics review board and implementing transparent decision-making processes.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// // }
// "use client";

// import { useState, useRef } from 'react';
// import { Brain, AlertTriangle, Scale, Lightbulb, Users, Shield, ChevronRight, Zap, Eye, BookOpen } from 'lucide-react';

// export default function AIDilemmaSimulator() {
//   const [dilemma, setDilemma] = useState('');
//   const [isAnalyzing, setIsAnalyzing] = useState(false);
//   const [analysis, setAnalysis] = useState(null);
//   const [currentStep, setCurrentStep] = useState(0);
//   const dilemmaInputRef = useRef(null);

//   const handleAnalyzeDilemma = async (dilemmaText) => {
//     if (!dilemmaText.trim()) return;
    
//     setIsAnalyzing(true);
//     setCurrentStep(0);
    
//     // Simulate AI analysis with steps
//     const steps = [
//       "Identifying ethical frameworks...",
//       "Analyzing stakeholder impact...",
//       "Evaluating potential outcomes...",
//       "Generating decision pathways...",
//       "Finalizing recommendations..."
//     ];
    
//     for (let i = 0; i < steps.length; i++) {
//       await new Promise(resolve => setTimeout(resolve, 800));
//       setCurrentStep(i + 1);
//     }
    
//     // Mock analysis result
//     setTimeout(() => {
//       setAnalysis({
//         dilemmaType: "Autonomous Systems Ethics",
//         stakeholders: ["End Users", "Society", "Developers", "Regulators"],
//         ethicalFrameworks: ["Utilitarianism", "Deontological Ethics", "Virtue Ethics"],
//         riskLevel: "High",
//         options: [
//           {
//             id: 1,
//             title: "Prioritize Safety",
//             description: "Implement maximum safety constraints even if it reduces efficiency",
//             pros: ["Minimizes harm", "Builds public trust", "Regulatory compliance"],
//             cons: ["Reduced performance", "Higher costs", "Slower adoption"],
//             ethicalScore: 85,
//             recommendation: "primary"
//           },
//           {
//             id: 2,
//             title: "Balanced Approach",
//             description: "Balance safety with performance through adaptive systems",
//             pros: ["Flexible solution", "Good performance", "Moderate costs"],
//             cons: ["Complex implementation", "Some residual risk", "Ongoing monitoring needed"],
//             ethicalScore: 72,
//             recommendation: "secondary"
//           },
//           {
//             id: 3,
//             title: "Performance Priority",
//             description: "Optimize for maximum performance with basic safety measures",
//             pros: ["Best performance", "Lower costs", "Faster market entry"],
//             cons: ["Higher risk", "Potential backlash", "Regulatory challenges"],
//             ethicalScore: 45,
//             recommendation: "caution"
//           }
//         ]
//       });
//       setIsAnalyzing(false);
//     }, 1000);
//   };

//   const predefinedDilemmas = [
//     "An autonomous vehicle must choose between hitting one person or swerving to hit three people",
//     "An AI hiring system shows bias against certain demographic groups but is highly accurate",
//     "A medical AI can save more lives by sharing patient data without explicit consent",
//     "An AI content moderation system must balance free speech with preventing harm"
//   ];

//   const ethicalPrinciples = [
//     { icon: Scale, name: "Fairness", desc: "Ensuring equitable treatment" },
//     { icon: Shield, name: "Safety", desc: "Minimizing harm and risk" },
//     { icon: Eye, name: "Transparency", desc: "Clear and explainable decisions" },
//     { icon: Users, name: "Accountability", desc: "Responsible ownership of outcomes" }
//   ];

//   const getRecommendationColor = (type) => {
//     switch(type) {
//       case 'primary': return 'from-green-500 to-emerald-600';
//       case 'secondary': return 'from-yellow-500 to-orange-500';
//       case 'caution': return 'from-red-500 to-red-600';
//       default: return 'from-gray-500 to-gray-600';
//     }
//   };

//   const getScoreColor = (score) => {
//     if (score >= 80) return 'text-green-400';
//     if (score >= 60) return 'text-yellow-400';
//     return 'text-red-400';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
//       {/* Header */}
//       <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center space-x-3">
//                 <Brain className="h-8 w-8 text-purple-400" />
//                 <div>
//                   <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                     AI Dilemma Simulator
//                   </span>
//                   <div className="text-xs text-gray-400">Powered by Puter.js</div>
//                 </div>
//               </div>
//             </div>
            
//             <nav className="hidden md:flex items-center space-x-6">
//               <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
//                 <BookOpen className="h-4 w-4" />
//                 <span>Ethics Guide</span>
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">Framework</a>
//             </nav>

//             <div className="flex items-center space-x-4">
//               <button className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all">
//                 <Zap className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {!analysis ? (
//           // Initial State
//           <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-8">
//             <div className="text-center space-y-6">
//               <div className="flex items-center justify-center space-x-3 mb-4">
//                 <AlertTriangle className="h-12 w-12 text-yellow-400" />
//                 <Scale className="h-16 w-16 text-purple-400" />
//                 <Brain className="h-12 w-12 text-pink-400" />
//               </div>
//               <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
//                 Navigate AI Ethics
//               </h1>
//               <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//                 Present your AI ethical dilemma and receive comprehensive analysis with multiple solution pathways, 
//                 stakeholder impact assessment, and ethical framework recommendations.
//               </p>
//             </div>

//             {/* Dilemma Input */}
//             <div className="w-full max-w-4xl relative">
//               <div className="relative group">
//                 <AlertTriangle className="absolute left-4 top-6 h-6 w-6 text-yellow-400 group-focus-within:text-purple-400 transition-colors" />
//                 <textarea
//                   ref={dilemmaInputRef}
//                   value={dilemma}
//                   onChange={(e) => setDilemma(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && e.ctrlKey && handleAnalyzeDilemma(dilemma)}
//                   placeholder="Describe your AI ethical dilemma... (e.g., An AI system must decide between competing moral values)"
//                   rows={4}
//                   className="w-full pl-14 pr-4 py-6 text-lg rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-400/20 transition-all placeholder-gray-400 resize-none"
//                 />
//                 <button
//                   onClick={() => handleAnalyzeDilemma(dilemma)}
//                   disabled={!dilemma.trim() || isAnalyzing}
//                   className="absolute right-4 bottom-4 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold flex items-center space-x-2"
//                 >
//                   <span>Analyze Dilemma</span>
//                   <ChevronRight className="h-5 w-5" />
//                 </button>
//               </div>
//               <div className="text-sm text-gray-400 mt-2 text-center">
//                 Ctrl + Enter to analyze • All analyses are processed locally with Puter.js
//               </div>
//             </div>

//             {/* Analysis Progress */}
//             {isAnalyzing && (
//               <div className="w-full max-w-2xl bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
//                 <div className="flex items-center justify-center space-x-3 mb-6">
//                   <Brain className="h-8 w-8 text-purple-400 animate-pulse" />
//                   <span className="text-xl font-semibold">Analyzing Ethical Dilemma</span>
//                 </div>
//                 <div className="space-y-4">
//                   {["Identifying ethical frameworks", "Analyzing stakeholder impact", "Evaluating potential outcomes", "Generating decision pathways", "Finalizing recommendations"].map((step, index) => (
//                     <div key={index} className="flex items-center space-x-3">
//                       <div className={`w-4 h-4 rounded-full ${currentStep > index ? 'bg-purple-400' : currentStep === index ? 'bg-purple-400 animate-pulse' : 'bg-gray-600'} transition-colors`} />
//                       <span className={`${currentStep >= index ? 'text-white' : 'text-gray-400'} transition-colors`}>
//                         {step}...
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="mt-6 bg-gray-800 rounded-full h-2 overflow-hidden">
//                   <div 
//                     className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
//                     style={{ width: `${(currentStep / 5) * 100}%` }}
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Predefined Dilemmas */}
//             {!isAnalyzing && (
//               <div className="w-full max-w-4xl space-y-6">
//                 <h3 className="text-2xl font-bold text-center text-gray-300">
//                   Or explore these classic AI dilemmas:
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {predefinedDilemmas.map((scenario, index) => (
//                     <button
//                       key={index}
//                       onClick={() => {
//                         setDilemma(scenario);
//                         handleAnalyzeDilemma(scenario);
//                       }}
//                       className="text-left p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-400/50 transition-all group"
//                     >
//                       <div className="flex items-start space-x-3">
//                         <AlertTriangle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
//                         <span className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">
//                           {scenario}
//                         </span>
//                       </div>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Ethical Principles */}
//             <div className="w-full max-w-4xl">
//               <h3 className="text-xl font-semibold text-center mb-6 text-gray-300">
//                 Built on Core Ethical Principles
//               </h3>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {ethicalPrinciples.map((principle, index) => (
//                   <div key={index} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
//                     <principle.icon className="h-8 w-8 mx-auto mb-3 text-purple-400" />
//                     <h4 className="font-semibold text-white mb-1">{principle.name}</h4>
//                     <p className="text-sm text-gray-400">{principle.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ) : (
//           // Analysis Results
//           <div className="space-y-8">
//             {/* Header with New Analysis Button */}
//             <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
//               <div>
//                 <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                   Ethical Analysis Complete
//                 </h2>
//                 <p className="text-gray-400 mt-2">Dilemma Type: {analysis.dilemmaType}</p>
//               </div>
//               <button
//                 onClick={() => setAnalysis(null)}
//                 className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all font-semibold flex items-center space-x-2"
//               >
//                 <Brain className="h-5 w-5" />
//                 <span>New Analysis</span>
//               </button>
//             </div>

//             {/* Risk Assessment */}
//             <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
//               <div className="flex items-center space-x-3 mb-4">
//                 <Shield className="h-6 w-6 text-red-400" />
//                 <h3 className="text-xl font-semibold">Risk Assessment</h3>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div>
//                   <h4 className="font-semibold mb-2 text-red-300">Risk Level</h4>
//                   <div className="px-4 py-2 rounded-lg bg-red-500/20 text-red-300 font-bold">
//                     {analysis.riskLevel}
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-2 text-purple-300">Key Stakeholders</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {analysis.stakeholders.map((stakeholder, index) => (
//                       <span key={index} className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300">
//                         {stakeholder}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-2 text-blue-300">Ethical Frameworks</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {analysis.ethicalFrameworks.map((framework, index) => (
//                       <span key={index} className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300">
//                         {framework}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Decision Options */}
//             <div className="space-y-6">
//               <h3 className="text-2xl font-semibold flex items-center space-x-3">
//                 <Lightbulb className="h-7 w-7 text-yellow-400" />
//                 <span>Recommended Decision Pathways</span>
//               </h3>
              
//               {analysis.options.map((option, index) => (
//                 <div key={option.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
//                   <div className="flex flex-col md:flex-row md:items-start justify-between space-y-4 md:space-y-0">
//                     <div className="flex-1">
//                       <div className="flex items-center space-x-4 mb-4">
//                         <h4 className="text-xl font-bold text-white">{option.title}</h4>
//                         <div className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getRecommendationColor(option.recommendation)}`}>
//                           {option.recommendation === 'primary' ? 'Recommended' : 
//                            option.recommendation === 'secondary' ? 'Alternative' : 'Caution Required'}
//                         </div>
//                         <div className={`text-2xl font-bold ${getScoreColor(option.ethicalScore)}`}>
//                           {option.ethicalScore}/100
//                         </div>
//                       </div>
//                       <p className="text-gray-300 mb-6 leading-relaxed">{option.description}</p>
                      
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                           <h5 className="font-semibold text-green-300 mb-3 flex items-center space-x-2">
//                             <ChevronRight className="h-4 w-4" />
//                             <span>Advantages</span>
//                           </h5>
//                           <ul className="space-y-2">
//                             {option.pros.map((pro, idx) => (
//                               <li key={idx} className="text-gray-300 flex items-start space-x-2">
//                                 <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
//                                 <span>{pro}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                         <div>
//                           <h5 className="font-semibold text-red-300 mb-3 flex items-center space-x-2">
//                             <ChevronRight className="h-4 w-4" />
//                             <span>Considerations</span>
//                           </h5>
//                           <ul className="space-y-2">
//                             {option.cons.map((con, idx) => (
//                               <li key={idx} className="text-gray-300 flex items-start space-x-2">
//                                 <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
//                                 <span>{con}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Implementation Note */}
//             <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20">
//               <div className="flex items-start space-x-3">
//                 <Lightbulb className="h-6 w-6 text-yellow-400 mt-1" />
//                 <div>
//                   <h4 className="font-semibold text-white mb-2">Implementation Guidance</h4>
//                   <p className="text-gray-300 leading-relaxed">
//                     Remember that ethical AI implementation requires continuous monitoring, stakeholder feedback, and iterative improvement. 
//                     Consider establishing an ethics review board and implementing transparent decision-making processes.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

"use client";

import { useState, useRef } from 'react';
import { Brain, AlertTriangle, Scale, Lightbulb, Users, Shield, ChevronRight, Zap, Eye, BookOpen } from 'lucide-react';

const analyzeDilemmaContext = (dilemmaText) => {
  const text = dilemmaText.toLowerCase();
  const words = text.split(' ');
  
  // Advanced content analysis
  // const keywordAnalysis = {
  //   autonomous: ['autonomous', 'self-driving', 'vehicle', 'car', 'robot', 'automated'],
  //   bias: ['hiring', 'recruitment', 'job', 'bias', 'discrimination', 'unfair', 'prejudice'],
  //   medical: ['medical', 'health', 'patient', 'diagnosis', 'doctor', 'hospital', 'treatment'],
  //   privacy: ['privacy', 'data', 'surveillance', 'monitoring', 'tracking', 'personal'],
  //   content: ['content', 'moderation', 'speech', 'censorship', 'social media', 'platform'],
  //   military: ['weapon', 'military', 'war', 'combat', 'defense', 'security'],
  //   financial: ['finance', 'bank', 'loan', 'credit', 'money', 'investment', 'trading'],
  //   education: ['education', 'school', 'student', 'learning', 'teacher', 'university'],
  //   environment: ['environment', 'climate', 'pollution', 'green', 'sustainability', 'carbon'],
  //   workplace: ['work', 'employee', 'manager', 'office', 'productivity', 'automation']
  // };
  const domainKeywords = {
    technology: ['tech', 'software', 'app', 'website', 'digital', 'coding', 'programming', 'ai', 'ml', 'algorithm', 'data', 'cloud', 'cyber'],
    business: ['business', 'startup', 'company', 'market', 'sales', 'revenue', 'profit', 'strategy', 'competition', 'customer', 'brand'],
    health: ['health', 'medical', 'doctor', 'patient', 'treatment', 'medicine', 'wellness', 'fitness', 'diet', 'exercise', 'mental'],
    education: ['education', 'school', 'university', 'student', 'teacher', 'learning', 'study', 'course', 'knowledge', 'skill'],
    finance: ['money', 'investment', 'finance', 'bank', 'stock', 'crypto', 'trading', 'loan', 'budget', 'income', 'expense'],
    relationships: ['relationship', 'family', 'friend', 'partner', 'marriage', 'dating', 'love', 'social', 'communication'],
    career: ['job', 'career', 'work', 'employment', 'interview', 'resume', 'salary', 'promotion', 'skill', 'professional'],
    lifestyle: ['lifestyle', 'habit', 'routine', 'productivity', 'time', 'goal', 'motivation', 'stress', 'balance'],
    creative: ['creative', 'art', 'design', 'music', 'writing', 'photography', 'video', 'content', 'artistic'],
    science: ['science', 'research', 'experiment', 'theory', 'hypothesis', 'analysis', 'study', 'discovery'],
    environment: ['environment', 'climate', 'green', 'sustainability', 'pollution', 'nature', 'ecology'],
    legal: ['legal', 'law', 'rights', 'court', 'attorney', 'contract', 'regulation', 'compliance'],
    travel: ['travel', 'trip', 'vacation', 'destination', 'hotel', 'flight', 'tourism', 'adventure'],
    food: ['food', 'cooking', 'recipe', 'restaurant', 'nutrition', 'meal', 'diet', 'cuisine'],
    sports: ['sports', 'fitness', 'exercise', 'training', 'competition', 'athlete', 'team', 'game'],
    personal: ['personal', 'self', 'improvement', 'growth', 'confidence', 'happiness', 'mindset']
  };
  const questionTypes = {
    decision: ['should', 'choose', 'decide', 'option', 'better', 'vs', 'versus', 'or'],
    howto: ['how', 'way', 'method', 'process', 'step', 'guide', 'tutorial'],
    what: ['what', 'define', 'meaning', 'explanation', 'understanding'],
    why: ['why', 'reason', 'cause', 'because', 'purpose', 'motivation'],
    when: ['when', 'time', 'schedule', 'timing', 'deadline'],
    where: ['where', 'location', 'place', 'position'],
    problem: ['problem', 'issue', 'challenge', 'difficulty', 'trouble', 'stuck'],
    strategy: ['strategy', 'plan', 'approach', 'tactics', 'framework', 'system'],
    comparison: ['compare', 'difference', 'similar', 'contrast', 'versus', 'vs'],
    prediction: ['future', 'predict', 'forecast', 'trend', 'will', 'going to']
  };


  // Score each category based on keyword matches
  const categoryScores = {};
  for (const [category, keywords] of Object.entries(keywordAnalysis)) {
    categoryScores[category] = keywords.filter(keyword => text.includes(keyword)).length;
  }

  // Find the highest scoring category
  const topCategory = Object.keys(categoryScores).reduce((a, b) => 
    categoryScores[a] > categoryScores[b] ? a : b
  );

  // Analyze sentiment and complexity
  const negativeWords = ['problem', 'issue', 'wrong', 'harmful', 'dangerous', 'bad', 'terrible', 'awful'];
  const positiveWords = ['good', 'beneficial', 'helpful', 'positive', 'amazing', 'excellent'];
  const urgencyWords = ['urgent', 'immediate', 'critical', 'emergency', 'crisis', 'now'];
  
  const hasNegative = negativeWords.some(word => text.includes(word));
  const hasPositive = positiveWords.some(word => text.includes(word));
  const hasUrgency = urgencyWords.some(word => text.includes(word));
  
  // Determine context based on analysis
  let dilemmaType = "General AI Ethics";
  let riskLevel = "Medium";
  let stakeholders = ["Users", "Developers", "Society"];
  let frameworks = ["Utilitarianism", "Deontological Ethics"];

  if (categoryScores[topCategory] > 0 || text.length > 50) {
    switch (topCategory) {
      case 'autonomous':
        dilemmaType = "Autonomous Systems Ethics";
        stakeholders = ["Drivers", "Pedestrians", "Passengers", "Society", "Manufacturers"];
        riskLevel = hasUrgency ? "Critical" : "High";
        frameworks = ["Utilitarianism", "Deontological Ethics", "Rights-Based Ethics"];
        break;
      case 'bias':
        dilemmaType = "AI Bias & Fairness";
        stakeholders = ["Job Seekers", "Employers", "Protected Groups", "Society"];
        riskLevel = hasNegative ? "High" : "Medium";
        frameworks = ["Fairness Theory", "Distributive Justice", "Anti-Discrimination Ethics"];
        break;
      case 'medical':
        dilemmaType = "Medical AI Ethics";
        stakeholders = ["Patients", "Healthcare Providers", "Families", "Healthcare Systems"];
        riskLevel = hasUrgency ? "Critical" : "High";
        frameworks = ["Medical Ethics", "Beneficence", "Autonomy", "Non-maleficence"];
        break;
      case 'privacy':
        dilemmaType = "Privacy & Data Ethics";
        stakeholders = ["Individual Users", "Companies", "Government", "Society"];
        riskLevel = hasNegative ? "High" : "Medium";
        frameworks = ["Privacy Rights", "Utilitarian Calculus", "Informed Consent"];
        break;
      case 'financial':
        dilemmaType = "Financial AI Ethics";
        stakeholders = ["Customers", "Financial Institutions", "Regulators", "Economy"];
        riskLevel = "High";
        frameworks = ["Fairness Theory", "Fiduciary Duty", "Economic Justice"];
        break;
      case 'education':
        dilemmaType = "Educational AI Ethics";
        stakeholders = ["Students", "Teachers", "Parents", "Educational Institutions"];
        riskLevel = "Medium";
        frameworks = ["Educational Ethics", "Equality of Opportunity", "Developmental Psychology"];
        break;
      case 'environment':
        dilemmaType = "Environmental AI Ethics";
        stakeholders = ["Current Generation", "Future Generations", "Corporations", "Global Community"];
        riskLevel = hasUrgency ? "Critical" : "High";
        frameworks = ["Environmental Ethics", "Intergenerational Justice", "Sustainability Theory"];
        break;
      case 'workplace':
        dilemmaType = "Workplace AI Ethics";
        stakeholders = ["Employees", "Employers", "Labor Unions", "Society"];
        riskLevel = "Medium";
        frameworks = ["Labor Rights", "Human Dignity", "Economic Ethics"];
        break;
      default:
        // Analyze based on question patterns for general scenarios
        if (text.includes('should') || text.includes('right') || text.includes('wrong')) {
          dilemmaType = "Moral Decision Making";
          riskLevel = hasNegative ? "High" : "Medium";
        } else if (text.includes('choose') || text.includes('decide') || text.includes('option')) {
          dilemmaType = "Decision Theory Ethics";
          riskLevel = "Medium";
        }
    }
  }

  // Adjust risk based on content analysis
  if (hasUrgency && riskLevel !== "Critical") riskLevel = "High";
  if (hasNegative && riskLevel === "Low") riskLevel = "Medium";

  return { dilemmaType, riskLevel, stakeholders, frameworks };
};

const generateContextualOptions = (dilemmaText, context) => {
  const text = dilemmaText.toLowerCase();
  const { dilemmaType } = context;

  // Generate more dynamic options based on the actual content
  const generateDynamicOptions = (scenario, primarySolution, secondarySolution, cautiousSolution) => {
    return [
      {
        id: 1,
        title: primarySolution.title,
        description: primarySolution.description,
        pros: primarySolution.pros,
        cons: primarySolution.cons,
        ethicalScore: primarySolution.score || Math.floor(75 + Math.random() * 15),
        recommendation: "primary"
      },
      {
        id: 2,
        title: secondarySolution.title,
        description: secondarySolution.description,
        pros: secondarySolution.pros,
        cons: secondarySolution.cons,
        ethicalScore: secondarySolution.score || Math.floor(60 + Math.random() * 15),
        recommendation: "secondary"
      },
      {
        id: 3,
        title: cautiousSolution.title,
        description: cautiousSolution.description,
        pros: cautiousSolution.pros,
        cons: cautiousSolution.cons,
        ethicalScore: cautiousSolution.score || Math.floor(30 + Math.random() * 25),
        recommendation: "caution"
      }
    ];
  };

  // Extract key concepts for more targeted responses
  const hasConflict = text.includes('vs') || text.includes('versus') || text.includes('between');
  const hasChoice = text.includes('choose') || text.includes('decide') || text.includes('should');
  const hasPeople = text.includes('people') || text.includes('person') || text.includes('human');
  const hasData = text.includes('data') || text.includes('information') || text.includes('privacy');

  switch (dilemmaType) {
    case "Autonomous Systems Ethics":
      return generateDynamicOptions(text,
        {
          title: "Minimize Total Harm",
          description: "Program the system to choose actions that minimize overall casualties and damage",
          pros: ["Saves maximum lives overall", "Mathematically optimal approach", "Clear utilitarian reasoning"],
          cons: ["May sacrifice individuals for greater good", "Public acceptance challenges", "Complex edge cases"]
        },
        {
          title: "Protect System Users",
          description: "Prioritize safety of those who chose to trust and use the autonomous system",
          pros: ["Clear duty to users", "Encourages system adoption", "Legal responsibility"],
          cons: ["May cause more overall harm", "Creates moral inequality", "Social tensions"]
        },
        {
          title: "Equal Treatment Protocol",
          description: "Treat all potential victims equally regardless of their relationship to the system",
          pros: ["Moral equality", "Avoids discrimination", "Transparent fairness"],
          cons: ["May seem inadequate", "Misses optimization opportunity", "Public distrust"]
        }
      );

    case "AI Bias & Fairness":
      return generateDynamicOptions(text,
        {
          title: "Bias Mitigation First",
          description: "Implement comprehensive fairness measures even if it reduces overall accuracy",
          pros: ["Promotes social equity", "Legal compliance", "Builds public trust", "Long-term sustainability"],
          cons: ["Reduced efficiency", "Complex implementation", "Potential accuracy trade-offs", "Higher costs"]
        },
        {
          title: "Transparent Accuracy",
          description: "Maintain high accuracy while making bias transparent and adding human oversight",
          pros: ["Preserves performance", "Adds accountability", "Flexible approach", "Cost-effective"],
          cons: ["Bias still exists", "Requires ongoing monitoring", "May perpetuate inequality", "Complex oversight"]
        },
        {
          title: "Performance Priority",
          description: "Focus purely on accuracy and performance metrics without bias correction",
          pros: ["Maximum efficiency", "Simple implementation", "Clear metrics", "Business optimization"],
          cons: ["Perpetuates discrimination", "Legal risks", "Social harm", "Reputation damage"]
        }
      );

    case "Medical AI Ethics":
      return generateDynamicOptions(text,
        {
          title: "Informed Consent Required",
          description: "Require explicit, informed consent for all medical AI decisions and data use",
          pros: ["Respects patient autonomy", "Legal compliance", "Builds trust", "Ethical clarity"],
          cons: ["May delay treatment", "Complex logistics", "Consent fatigue", "Emergency limitations"]
        },
        {
          title: "Opt-Out with Protections",
          description: "Use AI by default with robust opt-out options and privacy safeguards",
          pros: ["Better health outcomes", "Practical implementation", "Patient choice", "Efficiency"],
          cons: ["Questionable consent", "Privacy concerns", "Power imbalances", "Trust issues"]
        },
        {
          title: "Emergency Override",
          description: "Allow AI to make decisions without consent in life-threatening emergencies",
          pros: ["Saves lives", "Clear benefit", "Fast response", "Medical necessity"],
          cons: ["Violates autonomy", "Legal challenges", "Trust erosion", "Potential abuse"]
        }
      );

    case "Financial AI Ethics":
      return generateDynamicOptions(text,
        {
          title: "Fair Lending Practices",
          description: "Ensure AI lending decisions are fair and don't discriminate against protected groups",
          pros: ["Promotes financial equality", "Legal compliance", "Social responsibility", "Long-term stability"],
          cons: ["May increase default rates", "Complex implementation", "Reduced profitability", "Competitive disadvantage"]
        },
        {
          title: "Risk-Adjusted Transparency",
          description: "Use accurate risk models but make decision criteria transparent to applicants",
          pros: ["Maintains accuracy", "Builds trust", "Regulatory alignment", "Customer understanding"],
          cons: ["May reveal proprietary methods", "Complex explanations", "Gaming potential", "Resource intensive"]
        },
        {
          title: "Pure Risk Assessment",
          description: "Focus solely on financial risk without considering fairness implications",
          pros: ["Maximum profitability", "Clear metrics", "Simple implementation", "Shareholder value"],
          cons: ["May perpetuate inequality", "Regulatory risks", "Reputation damage", "Social harm"]
        }
      );

    case "Educational AI Ethics":
      return generateDynamicOptions(text,
        {
          title: "Personalized Learning with Equity",
          description: "Use AI to personalize education while ensuring equal opportunities for all students",
          pros: ["Tailored education", "Improved outcomes", "Addresses individual needs", "Equity focus"],
          cons: ["Complex implementation", "Privacy concerns", "Teacher training needed", "Technology gaps"]
        },
        {
          title: "Standardized AI Assistance",
          description: "Provide consistent AI support to all students with human oversight",
          pros: ["Equal access", "Consistent quality", "Teacher support", "Scalable"],
          cons: ["Less personalization", "May not address individual needs", "One-size-fits-all", "Limited adaptation"]
        },
        {
          title: "Performance-Based AI",
          description: "Use AI to maximize test scores and academic performance metrics",
          pros: ["Clear outcomes", "Measurable results", "Institutional success", "Efficiency"],
          cons: ["Narrow focus", "May ignore holistic development", "Pressure on students", "Gaming incentives"]
        }
      );

    default:
      // Generate more contextual generic options based on the input
      return generateDynamicOptions(text,
        {
          title: "Stakeholder-Balanced Approach",
          description: "Develop a solution that carefully balances the interests and rights of all affected parties",
          pros: ["Comprehensive consideration", "Reduces conflicts", "Sustainable outcomes", "Ethical integrity"],
          cons: ["Complex implementation", "May require compromises", "Time-intensive", "Consensus challenges"]
        },
        {
          title: "Harm Reduction Strategy",
          description: "Focus on minimizing potential negative consequences while maintaining functionality",
          pros: ["Safety-first approach", "Risk mitigation", "Precautionary principle", "Public trust"],
          cons: ["May limit benefits", "Conservative outcomes", "Innovation constraints", "Opportunity costs"]
        },
        {
          title: "Efficiency-Focused Solution",
          description: "Prioritize optimal performance and outcomes while maintaining basic ethical standards",
          pros: ["Maximum effectiveness", "Resource optimization", "Clear objectives", "Measurable results"],
          cons: ["May overlook minority concerns", "Potential ethical blind spots", "Short-term focus", "Social tensions"]
        }
      );
  }
};

export default function AIDilemmaSimulator() {
  const [dilemma, setDilemma] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const dilemmaInputRef = useRef(null);

  const analyzeDilemmaContext = (dilemmaText) => {
    const text = dilemmaText.toLowerCase();
    
    // Detect dilemma type based on keywords
    let dilemmaType = "General AI Ethics";
    let riskLevel = "Medium";
    let stakeholders = ["Users", "Developers", "Society"];
    let frameworks = ["Utilitarianism", "Deontological Ethics"];
    
    if (text.includes('autonomous') || text.includes('self-driving') || text.includes('vehicle')) {
      dilemmaType = "Autonomous Systems Ethics";
      stakeholders = ["Drivers", "Pedestrians", "Passengers", "Society", "Manufacturers"];
      riskLevel = "High";
      frameworks = ["Utilitarianism", "Deontological Ethics", "Rights-Based Ethics"];
    } else if (text.includes('hiring') || text.includes('recruitment') || text.includes('job') || text.includes('bias')) {
      dilemmaType = "AI Bias & Fairness";
      stakeholders = ["Job Seekers", "Employers", "Protected Groups", "Society"];
      riskLevel = "High";
      frameworks = ["Fairness Theory", "Distributive Justice", "Anti-Discrimination Ethics"];
    } else if (text.includes('medical') || text.includes('health') || text.includes('patient') || text.includes('diagnosis')) {
      dilemmaType = "Medical AI Ethics";
      stakeholders = ["Patients", "Healthcare Providers", "Families", "Healthcare Systems"];
      riskLevel = "Critical";
      frameworks = ["Medical Ethics", "Beneficence", "Autonomy", "Non-maleficence"];
    } else if (text.includes('privacy') || text.includes('data') || text.includes('surveillance') || text.includes('monitoring')) {
      dilemmaType = "Privacy & Surveillance";
      stakeholders = ["Individual Users", "Companies", "Government", "Society"];
      riskLevel = "High";
      frameworks = ["Privacy Rights", "Utilitarian Calculus", "Informed Consent"];
    } else if (text.includes('content') || text.includes('moderation') || text.includes('speech') || text.includes('censorship')) {
      dilemmaType = "Content Moderation Ethics";
      stakeholders = ["Users", "Platform Owners", "Advertisers", "Society", "Government"];
      riskLevel = "Medium";
      frameworks = ["Free Speech Theory", "Harm Principle", "Community Standards"];
    } else if (text.includes('weapon') || text.includes('military') || text.includes('war') || text.includes('combat')) {
      dilemmaType = "Military AI Ethics";
      stakeholders = ["Military Personnel", "Civilians", "Enemy Combatants", "International Community"];
      riskLevel = "Critical";
      frameworks = ["Just War Theory", "International Humanitarian Law", "Military Ethics"];
    }

    return { dilemmaType, riskLevel, stakeholders, frameworks };
  };

  const generateContextualOptions = (dilemmaText, context) => {
    const text = dilemmaText.toLowerCase();
    const { dilemmaType } = context;

    if (dilemmaType === "Autonomous Systems Ethics") {
      return [
        {
          id: 1,
          title: "Minimize Total Harm",
          description: "Program the system to choose actions that result in the least overall casualties or damage",
          pros: ["Saves maximum lives", "Mathematically optimal", "Clear decision criteria"],
          cons: ["May sacrifice individuals", "Difficult edge cases", "Public acceptance issues"],
          ethicalScore: 78,
          recommendation: "primary"
        },
        {
          id: 2,
          title: "Protect Passengers First",
          description: "Prioritize the safety of those who chose to use the autonomous system",
          pros: ["Clear responsibility to users", "Encourages adoption", "Legal clarity"],
          cons: ["May harm more people overall", "Ethical inequality", "Social tension"],
          ethicalScore: 62,
          recommendation: "secondary"
        },
        {
          id: 3,
          title: "Random Selection",
          description: "Use random chance when faced with equivalent moral choices",
          pros: ["Treats all lives equally", "Avoids bias", "Morally neutral"],
          cons: ["Seems inadequate", "Public distrust", "Wastes opportunity for optimization"],
          ethicalScore: 45,
          recommendation: "caution"
        }
      ];
    } else if (dilemmaType === "AI Bias & Fairness") {
      return [
        {
          id: 1,
          title: "Bias Correction & Fairness",
          description: "Implement algorithmic fairness measures even if it reduces overall accuracy",
          pros: ["Promotes equality", "Legal compliance", "Social justice", "Builds trust"],
          cons: ["Lower accuracy", "Complex implementation", "May still have subtle biases"],
          ethicalScore: 85,
          recommendation: "primary"
        },
        {
          id: 2,
          title: "Transparent High-Accuracy",
          description: "Keep the accurate system but make bias transparent and allow human oversight",
          pros: ["Maintains performance", "Transparency", "Human accountability", "Cost-effective"],
          cons: ["Bias still exists", "Requires constant monitoring", "May perpetuate inequality"],
          ethicalScore: 68,
          recommendation: "secondary"
        },
        {
          id: 3,
          title: "Pure Accuracy Focus",
          description: "Use the most accurate system regardless of bias, focusing only on performance",
          pros: ["Best business outcomes", "Objective metrics", "Simple implementation"],
          cons: ["Perpetuates discrimination", "Legal risks", "Social harm", "Reputation damage"],
          ethicalScore: 25,
          recommendation: "caution"
        }
      ];
    } else if (dilemmaType === "Medical AI Ethics") {
      return [
        {
          id: 1,
          title: "Patient Consent Required",
          description: "Require explicit consent for all data sharing, even if it reduces effectiveness",
          pros: ["Respects autonomy", "Legal compliance", "Builds trust", "Clear ethical stance"],
          cons: ["Fewer lives saved", "Complex logistics", "Consent fatigue", "Emergency delays"],
          ethicalScore: 82,
          recommendation: "primary"
        },
        {
          id: 2,
          title: "Opt-Out with Safeguards",
          description: "Share data by default but allow opt-out with strong privacy protections",
          pros: ["Saves more lives", "Practical approach", "Privacy options", "Better outcomes"],
          cons: ["Questionable consent", "Privacy risks", "Power imbalance", "Trust issues"],
          ethicalScore: 65,
          recommendation: "secondary"
        },
        {
          id: 3,
          title: "Emergency Override",
          description: "Share all data without consent in medical emergencies to maximize lives saved",
          pros: ["Maximum life-saving", "Clear utilitarian benefit", "Fast implementation"],
          cons: ["Violates autonomy", "Legal issues", "Trust breakdown", "Slippery slope"],
          ethicalScore: 40,
          recommendation: "caution"
        }
      ];
    } else if (dilemmaType === "Content Moderation Ethics") {
      return [
        {
          id: 1,
          title: "Transparent Community Standards",
          description: "Develop clear, public guidelines with community input and consistent enforcement",
          pros: ["Democratic process", "Transparency", "Consistency", "User buy-in"],
          cons: ["Slow to adapt", "Complex edge cases", "Cultural differences", "Gaming attempts"],
          ethicalScore: 79,
          recommendation: "primary"
        },
        {
          id: 2,
          title: "Contextual AI Moderation",
          description: "Use AI to understand context and intent, with human review for complex cases",
          pros: ["Nuanced decisions", "Scalable", "Adapts to context", "Reduces false positives"],
          cons: ["Complex to implement", "AI bias risks", "Inconsistent results", "Resource intensive"],
          ethicalScore: 71,
          recommendation: "secondary"
        },
        {
          id: 3,
          title: "Minimal Intervention",
          description: "Remove only clearly illegal content, allowing maximum free expression",
          pros: ["Protects free speech", "Simple rules", "Low censorship", "Clear boundaries"],
          cons: ["Allows harmful content", "Platform reputation risk", "User safety issues"],
          ethicalScore: 52,
          recommendation: "caution"
        }
      ];
    }

    // Default generic options for unrecognized dilemmas
    return [
      {
        id: 1,
        title: "Stakeholder-Inclusive Solution",
        description: "Develop a solution that considers and balances the interests of all affected parties",
        pros: ["Holistic approach", "Reduces conflicts", "Sustainable", "Ethical transparency"],
        cons: ["Complex to implement", "May compromise efficiency", "Requires consensus building"],
        ethicalScore: 75,
        recommendation: "primary"
      },
      {
        id: 2,
        title: "Risk-Minimization Approach",
        description: "Focus on reducing potential harm and negative consequences above all else",
        pros: ["Safety first", "Precautionary principle", "Builds trust", "Regulatory alignment"],
        cons: ["May limit innovation", "Conservative outcomes", "Missed opportunities"],
        ethicalScore: 68,
        recommendation: "secondary"
      },
      {
        id: 3,
        title: "Efficiency-Optimized Solution",
        description: "Prioritize the most effective outcome while maintaining basic ethical standards",
        pros: ["Best performance", "Resource efficient", "Clear metrics", "Practical results"],
        cons: ["May overlook stakeholder concerns", "Potential ethical blind spots", "Short-term focus"],
        ethicalScore: 55,
        recommendation: "caution"
      }
    ];
  };

  const handleAnalyzeDilemma = async (dilemmaText) => {
    if (!dilemmaText.trim()) return;
    
    setIsAnalyzing(true);
    setCurrentStep(0);
    
    // Simulate AI analysis with steps
    const steps = [
      "Identifying ethical frameworks...",
      "Analyzing stakeholder impact...",
      "Evaluating potential outcomes...",
      "Generating decision pathways...",
      "Finalizing recommendations..."
    ];
    
    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setCurrentStep(i + 1);
    }
    
    // Generate contextual analysis based on the dilemma
    setTimeout(() => {
      const context = analyzeDilemmaContext(dilemmaText);
      const options = generateContextualOptions(dilemmaText, context);
      
      setAnalysis({
        dilemmaType: context.dilemmaType,
        stakeholders: context.stakeholders,
        ethicalFrameworks: context.frameworks,
        riskLevel: context.riskLevel,
        options: options
      });
      setIsAnalyzing(false);
    }, 1000);
  };

  const predefinedDilemmas = [
    "An autonomous vehicle must choose between hitting one person or swerving to hit three people",
    "An AI hiring system shows bias against certain demographic groups but is highly accurate",
    "A medical AI can save more lives by sharing patient data without explicit consent",
    "An AI content moderation system must balance free speech with preventing harm"
  ];

  const ethicalPrinciples = [
    { icon: Scale, name: "Fairness", desc: "Ensuring equitable treatment" },
    { icon: Shield, name: "Safety", desc: "Minimizing harm and risk" },
    { icon: Eye, name: "Transparency", desc: "Clear and explainable decisions" },
    { icon: Users, name: "Accountability", desc: "Responsible ownership of outcomes" }
  ];

  const getRecommendationColor = (type) => {
    switch(type) {
      case 'primary': return 'from-green-500 to-emerald-600';
      case 'secondary': return 'from-yellow-500 to-orange-500';
      case 'caution': return 'from-red-500 to-red-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
        
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!analysis ? (
          // Initial State
          <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-8">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-3 mb-4">
               
              </div>
             
            </div>

            {/* Dilemma Input */}
            <div className="w-full max-w-4xl relative">
              <div className="relative group">
                <AlertTriangle className="absolute left-4 top-6 h-6 w-6 text-yellow-400 group-focus-within:text-purple-400 transition-colors" />
                <textarea
                  ref={dilemmaInputRef}
                  value={dilemma}
                  onChange={(e) => setDilemma(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && e.ctrlKey && handleAnalyzeDilemma(dilemma)}
                  placeholder="Describe your AI ethical dilemma... (e.g., An AI system must decide between competing moral values)"
                  rows={4}
                  className="w-full pl-14 pr-4 py-6 text-lg rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-400/20 transition-all placeholder-gray-400 resize-none"
                />
                <button
                  onClick={() => handleAnalyzeDilemma(dilemma)}
                  disabled={!dilemma.trim() || isAnalyzing}
                  className="absolute right-4 bottom-4 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold flex items-center space-x-2"
                >
                  <span>Analyze Dilemma</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              
            </div>

            {/* Analysis Progress */}
            {isAnalyzing && (
              <div className="w-full max-w-2xl bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <Brain className="h-8 w-8 text-purple-400 animate-pulse" />
                  <span className="text-xl font-semibold">Analyzing Ethical Dilemma</span>
                </div>
                <div className="space-y-4">
                  {["Identifying ethical frameworks", "Analyzing stakeholder impact", "Evaluating potential outcomes", "Generating decision pathways", "Finalizing recommendations"].map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${currentStep > index ? 'bg-purple-400' : currentStep === index ? 'bg-purple-400 animate-pulse' : 'bg-gray-600'} transition-colors`} />
                      <span className={`${currentStep >= index ? 'text-white' : 'text-gray-400'} transition-colors`}>
                        {step}...
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                    style={{ width: `${(currentStep / 5) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Predefined Dilemmas */}
            {!isAnalyzing && (
              <div className="w-full max-w-4xl space-y-6">
                <h3 className="text-2xl font-bold text-center text-gray-300">
                  Or explore these classic AI dilemmas:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {predefinedDilemmas.map((scenario, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDilemma(scenario);
                        handleAnalyzeDilemma(scenario);
                      }}
                      className="text-left p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-400/50 transition-all group"
                    >
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                          {scenario}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Ethical Principles */}
            <div className="w-full max-w-4xl">
              <h3 className="text-xl font-semibold text-center mb-6 text-gray-300">
                Built on Core Ethical Principles
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {ethicalPrinciples.map((principle, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                    <principle.icon className="h-8 w-8 mx-auto mb-3 text-purple-400" />
                    <h4 className="font-semibold text-white mb-1">{principle.name}</h4>
                    <p className="text-sm text-gray-400">{principle.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Analysis Results
          <div className="space-y-8">
            {/* Header with New Analysis Button */}
            <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ethical Analysis Complete
                </h2>
                <p className="text-gray-400 mt-2">Dilemma Type: {analysis.dilemmaType}</p>
              </div>
              <button
                onClick={() => setAnalysis(null)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all font-semibold flex items-center space-x-2"
              >
                <Brain className="h-5 w-5" />
                <span>New Analysis</span>
              </button>
            </div>

            {/* Risk Assessment */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-red-400" />
                <h3 className="text-xl font-semibold">Risk Assessment</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-red-300">Risk Level</h4>
                  <div className="px-4 py-2 rounded-lg bg-red-500/20 text-red-300 font-bold">
                    {analysis.riskLevel}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-300">Key Stakeholders</h4>
                  <div className="flex flex-wrap gap-2">
                    {analysis.stakeholders.map((stakeholder, index) => (
                      <span key={index} className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300">
                        {stakeholder}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-300">Ethical Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {analysis.ethicalFrameworks.map((framework, index) => (
                      <span key={index} className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300">
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decision Options */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold flex items-center space-x-3">
                <Lightbulb className="h-7 w-7 text-yellow-400" />
                <span>Recommended Decision Pathways</span>
              </h3>
              
              {analysis.options.map((option, index) => (
                <div key={option.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start justify-between space-y-4 md:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <h4 className="text-xl font-bold text-white">{option.title}</h4>
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getRecommendationColor(option.recommendation)}`}>
                          {option.recommendation === 'primary' ? 'Recommended' : 
                           option.recommendation === 'secondary' ? 'Alternative' : 'Caution Required'}
                        </div>
                        <div className={`text-2xl font-bold ${getScoreColor(option.ethicalScore)}`}>
                          {option.ethicalScore}/100
                        </div>
                      </div>
                      <p className="text-gray-300 mb-6 leading-relaxed">{option.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-green-300 mb-3 flex items-center space-x-2">
                            <ChevronRight className="h-4 w-4" />
                            <span>Advantages</span>
                          </h5>
                          <ul className="space-y-2">
                            {option.pros.map((pro, idx) => (
                              <li key={idx} className="text-gray-300 flex items-start space-x-2">
                                <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-red-300 mb-3 flex items-center space-x-2">
                            <ChevronRight className="h-4 w-4" />
                            <span>Considerations</span>
                          </h5>
                          <ul className="space-y-2">
                            {option.cons.map((con, idx) => (
                              <li key={idx} className="text-gray-300 flex items-start space-x-2">
                                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
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

            {/* Implementation Note */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20">
              <div className="flex items-start space-x-3">
                <Lightbulb className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-2">Implementation Guidance</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Remember that ethical AI implementation requires continuous monitoring, stakeholder feedback, and iterative improvement. 
                    Consider establishing an ethics review board and implementing transparent decision-making processes.
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