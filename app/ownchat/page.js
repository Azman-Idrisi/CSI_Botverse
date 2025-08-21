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
import { Brain, Lightbulb, TrendingUp, Users, Target, Zap, Search, BookOpen, Settings, Menu, X, ArrowRight, Star, AlertCircle, CheckCircle } from 'lucide-react';

// Universal content analyzer that can handle ANY topic
const analyzeContent = (inputText) => {
  const text = inputText.toLowerCase();
  const words = text.split(' ');
  
  // Comprehensive domain detection
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

  // Question type detection
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

  // Score domains and question types
  const domainScores = {};
  const questionScores = {};

  for (const [domain, keywords] of Object.entries(domainKeywords)) {
    domainScores[domain] = keywords.filter(keyword => text.includes(keyword)).length;
  }

  for (const [type, keywords] of Object.entries(questionTypes)) {
    questionScores[type] = keywords.filter(keyword => text.includes(keyword)).length;
  }

  // Find top domain and question type
  const topDomain = Object.keys(domainScores).reduce((a, b) => 
    domainScores[a] > domainScores[b] ? a : b
  );
  
  const topQuestionType = Object.keys(questionScores).reduce((a, b) => 
    questionScores[a] > questionScores[b] ? a : b
  );

  // Complexity and sentiment analysis
  const complexity = text.length > 100 ? 'High' : text.length > 50 ? 'Medium' : 'Low';
  const urgencyWords = ['urgent', 'asap', 'quickly', 'immediately', 'deadline', 'emergency'];
  const isUrgent = urgencyWords.some(word => text.includes(word));

  return {
    domain: domainScores[topDomain] > 0 ? topDomain : 'general',
    questionType: questionScores[topQuestionType] > 0 ? topQuestionType : 'general',
    complexity,
    isUrgent,
    wordCount: words.length,
    domainScore: domainScores[topDomain]
  };
};

// Generate comprehensive analysis for any topic
const generateAnalysis = (inputText, context) => {
  const { domain, questionType, complexity, isUrgent } = context;

  // Domain-specific stakeholders and considerations
  const domainData = {
    technology: {
      stakeholders: ['Users', 'Developers', 'Companies', 'Regulators'],
      considerations: ['Scalability', 'Security', 'User Experience', 'Technical Feasibility'],
      metrics: ['Performance', 'Adoption Rate', 'User Satisfaction', 'ROI']
    },
    business: {
      stakeholders: ['Customers', 'Employees', 'Shareholders', 'Partners'],
      considerations: ['Profitability', 'Market Position', 'Risk Management', 'Growth Potential'],
      metrics: ['Revenue', 'Market Share', 'Customer Satisfaction', 'Profit Margin']
    },
    health: {
      stakeholders: ['Patients', 'Healthcare Providers', 'Insurance', 'Researchers'],
      considerations: ['Safety', 'Efficacy', 'Cost-Effectiveness', 'Accessibility'],
      metrics: ['Health Outcomes', 'Cost Reduction', 'Patient Satisfaction', 'Treatment Success']
    },
    education: {
      stakeholders: ['Students', 'Teachers', 'Parents', 'Institutions'],
      considerations: ['Learning Effectiveness', 'Accessibility', 'Cost', 'Engagement'],
      metrics: ['Learning Outcomes', 'Completion Rates', 'Student Satisfaction', 'Skill Development']
    },
    finance: {
      stakeholders: ['Investors', 'Institutions', 'Regulators', 'Consumers'],
      considerations: ['Risk vs Return', 'Liquidity', 'Regulation', 'Market Conditions'],
      metrics: ['Returns', 'Risk Level', 'Liquidity', 'Diversification']
    }
  };

  const data = domainData[domain] || {
    stakeholders: ['Individuals', 'Organizations', 'Society', 'Environment'],
    considerations: ['Impact', 'Feasibility', 'Sustainability', 'Ethics'],
    metrics: ['Effectiveness', 'Efficiency', 'Satisfaction', 'Long-term Value']
  };

  // Generate contextual options based on question type and domain
  const generateOptions = () => {
    const baseOptions = [
      {
        title: 'Comprehensive Approach',
        description: 'Address all aspects systematically with thorough planning and stakeholder involvement',
        pros: ['Holistic solution', 'Sustainable results', 'Stakeholder buy-in', 'Risk mitigation'],
        cons: ['Time-intensive', 'Resource heavy', 'Complex implementation', 'Higher initial cost'],
        score: 75 + Math.floor(Math.random() * 15),
        type: 'primary'
      },
      {
        title: 'Balanced Strategy',
        description: 'Find optimal balance between competing priorities and constraints',
        pros: ['Practical approach', 'Reasonable timeline', 'Cost-effective', 'Manageable complexity'],
        cons: ['May require trade-offs', 'Not optimal for any single metric', 'Ongoing adjustments needed'],
        score: 65 + Math.floor(Math.random() * 15),
        type: 'secondary'
      },
      {
        title: 'Rapid Implementation',
        description: 'Focus on quick wins and immediate results with minimal complexity',
        pros: ['Fast results', 'Low complexity', 'Immediate benefits', 'Easy to implement'],
        cons: ['May miss long-term considerations', 'Limited scope', 'Potential for issues later'],
        score: 45 + Math.floor(Math.random() * 20),
        type: 'caution'
      }
    ];

    // Customize based on question type
    if (questionType === 'decision') {
      baseOptions[0].title = 'Data-Driven Decision';
      baseOptions[1].title = 'Intuitive Choice';
      baseOptions[2].title = 'Quick Decision';
    } else if (questionType === 'howto') {
      baseOptions[0].title = 'Step-by-Step Method';
      baseOptions[1].title = 'Framework Approach';
      baseOptions[2].title = 'Quick Start Guide';
    } else if (questionType === 'problem') {
      baseOptions[0].title = 'Root Cause Analysis';
      baseOptions[1].title = 'Systematic Solution';
      baseOptions[2].title = 'Quick Fix';
    }

    return baseOptions;
  };

  return {
    analysisType: `${domain.charAt(0).toUpperCase() + domain.slice(1)} ${questionType.charAt(0).toUpperCase() + questionType.slice(1)} Analysis`,
    stakeholders: data.stakeholders,
    keyConsiderations: data.considerations,
    successMetrics: data.metrics,
    complexity,
    urgency: isUrgent ? 'High' : 'Medium',
    options: generateOptions()
  };
};

export default function UniversalAISimulator() {
  const [query, setQuery] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const queryInputRef = useRef(null);

  const handleAnalyze = async (queryText) => {
    if (!queryText.trim()) return;
    
    setIsAnalyzing(true);
    setCurrentStep(0);
    
    const steps = [
      "Analyzing content and context...",
      "Identifying key stakeholders...",
      "Evaluating different approaches...",
      "Generating strategic options...",
      "Finalizing recommendations..."
    ];
    
    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 900));
      setCurrentStep(i + 1);
    }
    
    setTimeout(() => {
      const context = analyzeContent(queryText);
      const result = generateAnalysis(queryText, context);
      setAnalysis(result);
      setIsAnalyzing(false);
    }, 800);
  };

  const exampleQueries = [
    "Should I start a tech startup or join an established company?",
    "How can I improve my productivity while working from home?",
    "What's the best way to learn programming in 2024?",
    "Should I invest in stocks or real estate right now?",
    "How do I handle a difficult conversation with my manager?",
    "What marketing strategy works best for small businesses?",
    "How can I maintain work-life balance in a demanding job?",
    "Should we adopt AI tools in our educational curriculum?"
  ];

  const trendingTopics = [
    "AI Implementation", "Remote Work", "Career Growth", "Investment Strategy", 
    "Health & Wellness", "Productivity", "Leadership", "Technology Trends"
  ];

  const getScoreColor = (score) => {
    if (score >= 75) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-orange-400';
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'primary': return 'from-green-500 to-emerald-600';
      case 'secondary': return 'from-blue-500 to-indigo-600';
      case 'caution': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

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
                    Universal AI Analyzer
                  </span>
                  <div className="text-xs text-gray-400">Powered by Puter.js</div>
                </div>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
                <TrendingUp className="h-4 w-4" />
                <span>Trending</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Examples</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="hidden md:block p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Settings className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all">
                <Zap className="h-5 w-5" />
              </button>
              <button 
                className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/40 backdrop-blur-xl border-b border-white/10">
          <div className="px-4 py-4 space-y-3">
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">Trending</a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">Examples</a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">About</a>
          </div>
        </div>
      )}

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!analysis ? (
          <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-8">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Brain className="h-12 w-12 text-blue-400" />
                <Lightbulb className="h-16 w-16 text-purple-400" />
                <Target className="h-12 w-12 text-green-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Ask Anything
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Get intelligent analysis and strategic recommendations for any question, problem, or decision. 
                From business strategy to personal choices - AI-powered insights for everything.
              </p>
            </div>

            <div className="w-full max-w-4xl relative">
              <div className="relative group">
                <Search className="absolute left-4 top-6 h-6 w-6 text-blue-400 group-focus-within:text-purple-400 transition-colors" />
                <textarea
                  ref={queryInputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && e.ctrlKey && handleAnalyze(query)}
                  placeholder="Ask any question... (e.g., 'Should I change careers?' or 'How to grow my business?')"
                  rows={4}
                  className="w-full pl-14 pr-4 py-6 text-lg rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400/20 transition-all placeholder-gray-400 resize-none"
                />
                <button
                  onClick={() => handleAnalyze(query)}
                  disabled={!query.trim() || isAnalyzing}
                  className="absolute right-4 bottom-4 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold flex items-center space-x-2"
                >
                  <span>Analyze</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <div className="text-sm text-gray-400 mt-2 text-center">
                Ctrl + Enter to analyze • Works with any topic or question
              </div>
            </div>

            {isAnalyzing && (
              <div className="w-full max-w-2xl bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <Brain className="h-8 w-8 text-blue-400 animate-pulse" />
                  <span className="text-xl font-semibold">Analyzing Your Query</span>
                </div>
                <div className="space-y-4">
                  {["Analyzing content and context", "Identifying key stakeholders", "Evaluating different approaches", "Generating strategic options", "Finalizing recommendations"].map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${currentStep > index ? 'bg-blue-400' : currentStep === index ? 'bg-blue-400 animate-pulse' : 'bg-gray-600'} transition-colors`} />
                      <span className={`${currentStep >= index ? 'text-white' : 'text-gray-400'} transition-colors`}>
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

            {!isAnalyzing && (
              <div className="w-full max-w-5xl space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-center mb-6 text-gray-300">
                    Try These Example Questions:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exampleQueries.map((example, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setQuery(example);
                          handleAnalyze(example);
                        }}
                        className="text-left p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-400/50 transition-all group"
                      >
                        <div className="flex items-start space-x-3">
                          <Lightbulb className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 group-hover:text-white transition-colors">
                            {example}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-center space-x-2 mb-6">
                    <TrendingUp className="h-6 w-6 text-green-400" />
                    <h3 className="text-xl font-semibold text-gray-300">Popular Topics</h3>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3">
                    {trendingTopics.map((topic, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setQuery(`How can I improve my ${topic.toLowerCase()}?`);
                          handleAnalyze(`How can I improve my ${topic.toLowerCase()}?`);
                        }}
                        className="px-4 py-2 rounded-full border border-green-400/30 bg-green-400/10 hover:bg-green-400/20 text-green-300 hover:text-green-200 transition-all"
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Analysis Complete
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

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-300 flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Key Stakeholders</span>
                  </h4>
                  <div className="space-y-2">
                    {analysis.stakeholders.map((stakeholder, index) => (
                      <div key={index} className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300">
                        {stakeholder}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-purple-300 flex items-center space-x-2">
                    <Target className="h-5 w-5" />
                    <span>Key Considerations</span>
                  </h4>
                  <div className="space-y-2">
                    {analysis.keyConsiderations.map((consideration, index) => (
                      <div key={index} className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300">
                        {consideration}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-300 flex items-center space-x-2">
                    <Star className="h-5 w-5" />
                    <span>Success Metrics</span>
                  </h4>
                  <div className="space-y-2">
                    {analysis.successMetrics.map((metric, index) => (
                      <div key={index} className="px-3 py-1 text-sm rounded-full bg-green-500/20 text-green-300">
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-orange-300">Analysis Info</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-orange-400" />
                      <span className="text-sm text-orange-300">Complexity: {analysis.complexity}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-red-400" />
                      <span className="text-sm text-red-300">Urgency: {analysis.urgency}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold flex items-center space-x-3">
                <Lightbulb className="h-7 w-7 text-yellow-400" />
                <span>Strategic Options & Recommendations</span>
              </h3>
              
              {analysis.options.map((option, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start justify-between space-y-4 md:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <h4 className="text-xl font-bold text-white">{option.title}</h4>
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getTypeColor(option.type)}`}>
                          {option.type === 'primary' ? 'Recommended' : 
                           option.type === 'secondary' ? 'Alternative' : 'Quick Option'}
                        </div>
                        <div className={`text-2xl font-bold ${getScoreColor(option.score)}`}>
                          {option.score}/100
                        </div>
                      </div>
                      <p className="text-gray-300 mb-6 leading-relaxed">{option.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-green-300 mb-3 flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4" />
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
                          <h5 className="font-semibold text-orange-300 mb-3 flex items-center space-x-2">
                            <AlertCircle className="h-4 w-4" />
                            <span>Considerations</span>
                          </h5>
                          <ul className="space-y-2">
                            {option.cons.map((con, idx) => (
                              <li key={idx} className="text-gray-300 flex items-start space-x-2">
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
                  <h4 className="font-semibold text-white mb-2">Next Steps</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Consider your specific context, available resources, and timeline when choosing an approach. 
                    You can always start with a smaller pilot and scale up based on results. Remember to gather 
                    feedback from key stakeholders throughout the process.
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