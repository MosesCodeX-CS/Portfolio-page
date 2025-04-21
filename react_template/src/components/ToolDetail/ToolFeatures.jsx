import React from 'react';
import { motion } from 'framer-motion';

const ToolFeatures = ({ tool }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Feature categories with their respective features for this specific tool
  const featureCategories = [
    {
      name: 'Code Intelligence',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        {
          name: 'Code Completion',
          description: 'Suggests code as you type based on context and patterns',
          rating: tool.features.codeCompletion || 4
        },
        {
          name: 'Context Awareness',
          description: 'Understands surrounding code and project structure',
          rating: tool.features.contextAwareness || 4
        },
        {
          name: 'Language Support',
          description: `Supports ${tool.languageSupport.length}+ programming languages`,
          rating: tool.features.languageSupport || 4
        }
      ]
    },
    {
      name: 'Developer Experience',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: [
        {
          name: 'Performance',
          description: 'Speed and resource usage of suggestions',
          rating: tool.features.performance || 4
        },
        {
          name: 'IDE Integration',
          description: 'How well it integrates with coding environments',
          rating: tool.features.integration || 4
        },
        {
          name: 'Customization',
          description: 'Ability to adapt to coding style and preferences',
          rating: tool.features.customization || 3
        }
      ]
    },
    {
      name: 'Advanced Capabilities',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      features: [
        {
          name: 'Code Explanation',
          description: 'Ability to explain what code does and why',
          rating: tool.features.explanation || 3
        },
        {
          name: 'Bug Detection',
          description: 'Identifies potential issues and suggests fixes',
          rating: tool.features.bugDetection || 3
        },
        {
          name: 'Refactoring Assistance',
          description: 'Helps improve existing code structure and quality',
          rating: tool.features.refactoring || 3
        }
      ]
    }
  ];

  // Function to render rating stars
  const renderRatingStars = (rating) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${
              star <= rating ? 'text-yellow-500' : 'text-gray-600'
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Key strengths */}
      <motion.div variants={itemVariants} className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Key Strengths</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tool.keyStrengths.map((strength, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" 
                style={{ backgroundColor: `${tool.color}20`, color: tool.color }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{strength.title}</h3>
              <p className="text-gray-400">{strength.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Feature categories */}
      {featureCategories.map((category, index) => (
        <motion.div key={index} variants={itemVariants} className="mb-8">
          <div className="flex items-center mb-6">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" 
              style={{ backgroundColor: `${tool.color}20`, color: tool.color }}
            >
              {category.icon}
            </div>
            <h2 className="text-2xl font-bold text-white">{category.name}</h2>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-800/50">
                  <th className="text-left py-4 px-6 text-gray-300 font-medium">Feature</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-medium hidden md:table-cell">Description</th>
                  <th className="text-center py-4 px-6 text-gray-300 font-medium">Rating</th>
                </tr>
              </thead>
              <tbody>
                {category.features.map((feature, featureIndex) => (
                  <tr 
                    key={featureIndex} 
                    className={`border-t border-gray-700/50 ${featureIndex % 2 === 0 ? 'bg-gray-800/20' : ''}`}
                  >
                    <td className="py-4 px-6">
                      <div className="font-medium text-white">{feature.name}</div>
                      <div className="text-gray-400 text-sm md:hidden mt-1">{feature.description}</div>
                    </td>
                    <td className="py-4 px-6 text-gray-300 hidden md:table-cell">{feature.description}</td>
                    <td className="py-4 px-6">
                      <div className="flex justify-center">
                        {renderRatingStars(feature.rating)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      ))}

      {/* Language support */}
      <motion.div variants={itemVariants} className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Language Support</h2>
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex flex-wrap gap-3">
            {tool.languageSupport.map((language, index) => (
              <div 
                key={index} 
                className="px-4 py-2 rounded-lg text-white"
                style={{ backgroundColor: `${tool.color}30`, border: `1px solid ${tool.color}50` }}
              >
                {language}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Unique features */}
      {tool.uniqueFeatures && tool.uniqueFeatures.length > 0 && (
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold text-white mb-6">Unique Features</h2>
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <ul className="space-y-4">
              {tool.uniqueFeatures.map((feature, index) => (
                <li key={index} className="flex">
                  <div 
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-3"
                    style={{ backgroundColor: `${tool.color}30`, color: tool.color }}
                  >
                    <span>✦</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{feature.title}</h4>
                    <p className="text-gray-400 mt-1">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ToolFeatures;