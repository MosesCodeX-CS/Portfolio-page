import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import QuestionForm from '../components/Assistant/QuestionForm';
import RecommendationCard from '../components/Assistant/RecommendationCard';
import toolsData from '../data/toolsData';
import { CursorLogo, WindsurfLogo, TraeLogo, GithubCopilotLogo } from '../utils/LogoSVGs';

const DecisionAssistantPage = () => {
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [recommendation, setRecommendation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Decision Assistant | AI Coding Tools Comparison";
  }, []);

  const handleFormSubmit = (formData) => {
    // Show loading state
    setIsLoading(true);
    setShowRecommendation(false);
    
    // Simulating API call delay
    setTimeout(() => {
      const result = calculateRecommendation(formData);
      setRecommendation(result);
      setIsLoading(false);
      setShowRecommendation(true);
    }, 1500);
  };

  const calculateRecommendation = (formData) => {
    // Define scoring weights for each factor
    const weights = {
      experience: {
        beginner: { cursor: 8, windsurf: 7, trae: 6, githubCopilot: 9 },
        intermediate: { cursor: 9, windsurf: 6, trae: 8, githubCopilot: 8 },
        advanced: { cursor: 7, windsurf: 6, trae: 9, githubCopilot: 7 },
      },
      projectSize: {
        small: { cursor: 6, windsurf: 9, trae: 7, githubCopilot: 7 },
        medium: { cursor: 8, windsurf: 7, trae: 8, githubCopilot: 9 },
        large: { cursor: 9, windsurf: 5, trae: 8, githubCopilot: 8 },
      },
      primaryUse: {
        completion: { cursor: 8, windsurf: 7, trae: 7, githubCopilot: 9 },
        refactoring: { cursor: 9, windsurf: 6, trae: 8, githubCopilot: 7 },
        learning: { cursor: 7, windsurf: 6, trae: 9, githubCopilot: 7 },
        productivity: { cursor: 9, windsurf: 7, trae: 8, githubCopilot: 9 },
      },
      platform: {
        vscode: { cursor: 5, windsurf: 6, trae: 7, githubCopilot: 9 },
        jetbrains: { cursor: 5, windsurf: 5, trae: 6, githubCopilot: 9 },
        web: { cursor: 7, windsurf: 9, trae: 8, githubCopilot: 5 },
        custom: { cursor: 9, windsurf: 7, trae: 6, githubCopilot: 6 },
      },
      resources: {
        low: { cursor: 6, windsurf: 9, trae: 7, githubCopilot: 8 },
        medium: { cursor: 8, windsurf: 8, trae: 8, githubCopilot: 8 },
        high: { cursor: 9, windsurf: 7, trae: 9, githubCopilot: 8 },
      },
      budget: {
        free: { cursor: 9, windsurf: 8, trae: 9, githubCopilot: 7 },
        affordable: { cursor: 8, windsurf: 8, trae: 8, githubCopilot: 9 },
        noLimit: { cursor: 8, windsurf: 7, trae: 7, githubCopilot: 9 },
      }
    };

    // Calculate scores for each tool
    const scores = {
      cursor: 0,
      windsurf: 0,
      trae: 0,
      githubCopilot: 0
    };

    // Experience level scoring (weight: 1.5)
    const expFactor = 1.5;
    for (const tool in scores) {
      scores[tool] += weights.experience[formData.experience][tool] * expFactor;
    }

    // Project size scoring (weight: 1.2)
    const sizeFactor = 1.2;
    for (const tool in scores) {
      scores[tool] += weights.projectSize[formData.projectSize][tool] * sizeFactor;
    }

    // Primary use scoring (weight: 1.8)
    const useFactor = 1.8;
    for (const tool in scores) {
      scores[tool] += weights.primaryUse[formData.primaryUse][tool] * useFactor;
    }

    // Platform scoring (weight: 1.3)
    const platformFactor = 1.3;
    for (const tool in scores) {
      scores[tool] += weights.platform[formData.platform][tool] * platformFactor;
    }

    // Resources scoring (weight: 1.0)
    const resourceFactor = 1.0;
    for (const tool in scores) {
      scores[tool] += weights.resources[formData.resources][tool] * resourceFactor;
    }

    // Budget scoring (weight: 1.4)
    const budgetFactor = 1.4;
    for (const tool in scores) {
      scores[tool] += weights.budget[formData.budget][tool] * budgetFactor;
    }

    // Sort tools by score
    const sortedTools = Object.keys(scores)
      .map(toolId => ({
        id: toolId,
        score: scores[toolId],
        percentage: 0, // Will be calculated below
        ...toolsData[toolId]
      }))
      .sort((a, b) => b.score - a.score);

    // Calculate percentage match
    const maxPossibleScore = 
      9 * expFactor + 
      9 * sizeFactor + 
      9 * useFactor + 
      9 * platformFactor + 
      9 * resourceFactor + 
      9 * budgetFactor;

    sortedTools.forEach(tool => {
      tool.percentage = Math.round((tool.score / maxPossibleScore) * 100);
    });

    // Generate recommendation reasons
    sortedTools[0].reasons = generateReasons(formData, sortedTools[0]);

    return {
      bestMatch: sortedTools[0],
      allTools: sortedTools,
      userProfile: formData
    };
  };

  const generateReasons = (profile, tool) => {
    const reasons = [];

    // Experience level reason
    if (profile.experience === 'beginner' && tool.id === 'githubCopilot') {
      reasons.push('GitHub Copilot offers excellent guidance for beginners with its intuitive suggestions');
    } else if (profile.experience === 'beginner' && tool.id === 'cursor') {
      reasons.push('Cursor provides helpful explanations and context, perfect for those learning to code');
    } else if (profile.experience === 'intermediate' && tool.id === 'cursor') {
      reasons.push('Cursor\'s balance of assistance and advanced features is ideal for intermediate developers');
    } else if (profile.experience === 'advanced' && tool.id === 'trae') {
      reasons.push('Trae\'s sophisticated reasoning engine aligns with the needs of experienced developers');
    }

    // Project size reason
    if (profile.projectSize === 'small' && tool.id === 'windsurf') {
      reasons.push('Windsurf\'s lightweight design is perfect for small projects and quick tasks');
    } else if (profile.projectSize === 'medium' && (tool.id === 'githubCopilot' || tool.id === 'cursor')) {
      reasons.push(`${tool.name}'s capabilities scale well for medium-sized projects`);
    } else if (profile.projectSize === 'large' && tool.id === 'cursor') {
      reasons.push('Cursor excels at handling large codebases with its multi-file editing capabilities');
    }

    // Primary use reason
    if (profile.primaryUse === 'completion' && tool.id === 'githubCopilot') {
      reasons.push('GitHub Copilot is unmatched for seamless code completion across various languages');
    } else if (profile.primaryUse === 'refactoring' && tool.id === 'cursor') {
      reasons.push('Cursor\'s refactoring capabilities are powerful and context-aware');
    } else if (profile.primaryUse === 'learning' && tool.id === 'trae') {
      reasons.push('Trae\'s explanatory approach helps developers understand why certain code solutions work');
    } else if (profile.primaryUse === 'productivity' && (tool.id === 'cursor' || tool.id === 'githubCopilot')) {
      reasons.push(`${tool.name} significantly boosts productivity with its comprehensive coding assistance`);
    }

    // Platform reason
    if (profile.platform === 'vscode' && tool.id === 'githubCopilot') {
      reasons.push('GitHub Copilot integrates flawlessly with VS Code');
    } else if (profile.platform === 'jetbrains' && tool.id === 'githubCopilot') {
      reasons.push('GitHub Copilot offers excellent JetBrains IDE support');
    } else if (profile.platform === 'web' && tool.id === 'windsurf') {
      reasons.push('Windsurf\'s web-based interface makes it accessible from anywhere');
    } else if (profile.platform === 'custom' && tool.id === 'cursor') {
      reasons.push('Cursor\'s custom IDE provides a tailored development environment');
    }

    // Resources reason
    if (profile.resources === 'low' && tool.id === 'windsurf') {
      reasons.push('Windsurf is optimized to run smoothly on systems with limited resources');
    } else if (profile.resources === 'high' && (tool.id === 'cursor' || tool.id === 'trae')) {
      reasons.push(`${tool.name} leverages your powerful system for optimal performance`);
    }

    // Budget reason
    if (profile.budget === 'free' && (tool.id === 'cursor' || tool.id === 'trae')) {
      reasons.push(`${tool.name} offers robust features in its free tier`);
    } else if (profile.budget === 'affordable' && tool.id === 'githubCopilot') {
      reasons.push('GitHub Copilot provides excellent value for its affordable subscription price');
    } else if (profile.budget === 'noLimit' && tool.id === 'githubCopilot') {
      reasons.push('GitHub Copilot\'s enterprise features support large organizations with comprehensive needs');
    }

    // If we couldn't generate specific reasons, add generic ones
    if (reasons.length < 3) {
      const genericReasons = [
        `${tool.name} aligns with your development workflow needs`,
        `${tool.name}'s feature set complements your specified requirements`,
        `${tool.name} offers the best balance of features for your profile`
      ];
      
      while (reasons.length < 3) {
        const randomIndex = Math.floor(Math.random() * genericReasons.length);
        if (!reasons.includes(genericReasons[randomIndex])) {
          reasons.push(genericReasons[randomIndex]);
        }
      }
    }

    return reasons.slice(0, 3); // Return maximum 3 reasons
  };

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={pageVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            variants={itemVariants} 
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-white mb-4">AI Coding Tool Decision Assistant</h1>
            <p className="text-xl text-gray-300">
              Answer a few questions to find the perfect AI coding tool for your needs
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8"
          >
            <QuestionForm onSubmit={handleFormSubmit} />
          </motion.div>

          {isLoading && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-12 text-center"
            >
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
              <p className="text-gray-300 mt-6 text-lg">Analyzing your preferences...</p>
            </motion.div>
          )}

          {showRecommendation && recommendation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Your Recommendation</h2>
                
                <RecommendationCard 
                  recommendation={recommendation.bestMatch}
                  userProfile={recommendation.userProfile}
                />
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6">All Tools Ranked For You</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 px-4 text-gray-300">Rank</th>
                        <th className="text-left py-3 px-4 text-gray-300">Tool</th>
                        <th className="text-left py-3 px-4 text-gray-300">Match</th>
                        <th className="text-left py-3 px-4 text-gray-300">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recommendation.allTools.map((tool, index) => {
                        const getLogo = () => {
                          switch (tool.id) {
                            case 'cursor': return <CursorLogo size={24} />;
                            case 'windsurf': return <WindsurfLogo size={24} />;
                            case 'trae': return <TraeLogo size={24} />;
                            case 'githubCopilot': return <GithubCopilotLogo size={24} />;
                            default: return null;
                          }
                        };

                        return (
                          <tr key={tool.id} className="border-b border-gray-700/50">
                            <td className="py-4 px-4 text-gray-300">{index + 1}</td>
                            <td className="py-4 px-4">
                              <div className="flex items-center">
                                <div className="mr-3">{getLogo()}</div>
                                <span className="text-white font-medium">{tool.name}</span>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center">
                                <div 
                                  className="w-16 bg-gray-700 rounded-full h-2 mr-3"
                                >
                                  <div 
                                    className="h-2 rounded-full" 
                                    style={{
                                      width: `${tool.percentage}%`,
                                      backgroundColor: tool.color
                                    }}
                                  ></div>
                                </div>
                                <span className="text-white">{tool.percentage}%</span>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-gray-300 text-sm">{tool.tagline}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default DecisionAssistantPage;