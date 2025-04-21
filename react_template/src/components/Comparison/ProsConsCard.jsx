import React from 'react';
import { motion } from 'framer-motion';
import { CursorLogo, WindsurfLogo, TraeLogo, GithubCopilotLogo } from '../../utils/LogoSVGs';

const ProsConsCard = ({ tool }) => {
  // Get the correct logo component
  const getLogo = () => {
    switch (tool.id) {
      case 'cursor':
        return <CursorLogo size={36} />;
      case 'windsurf':
        return <WindsurfLogo size={36} />;
      case 'trae':
        return <TraeLogo size={36} />;
      case 'githubCopilot':
        return <GithubCopilotLogo size={36} />;
      default:
        return null;
    }
  };

  // Animation variants
  const variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden h-full"
      whileHover={{ 
        boxShadow: `0 8px 32px -10px ${tool.color}40`,
        borderColor: `${tool.color}60`
      }}
    >
      {/* Card header */}
      <div 
        className="p-4 flex items-center border-b border-gray-700"
        style={{ 
          background: `linear-gradient(to right, ${tool.color}30, transparent)` 
        }}
      >
        {getLogo()}
        <h3 className="ml-3 text-xl font-bold text-white">{tool.name}</h3>
      </div>

      {/* Card content */}
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pros section */}
        <div>
          <h4 className="flex items-center mb-3 text-green-400 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Pros
          </h4>
          
          <motion.ul
            className="space-y-2"
            variants={variants}
            initial="hidden"
            animate="visible"
          >
            {tool.pros.map((pro, index) => (
              <motion.li key={index} className="flex text-sm" variants={itemVariants}>
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-300">{pro}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Cons section */}
        <div>
          <h4 className="flex items-center mb-3 text-red-400 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            Cons
          </h4>
          
          <motion.ul
            className="space-y-2"
            variants={variants}
            initial="hidden"
            animate="visible"
          >
            {tool.cons.map((con, index) => (
              <motion.li key={index} className="flex text-sm" variants={itemVariants}>
                <span className="text-red-500 mr-2">✗</span>
                <span className="text-gray-300">{con}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Card footer */}
      <div className="px-5 py-3 bg-gray-800/50 border-t border-gray-700">
        <h4 className="text-sm font-medium text-white mb-2">Best For:</h4>
        <div className="flex flex-wrap gap-2">
          {tool.targetUsers.map((user, index) => (
            <span 
              key={index}
              className="inline-block px-2 py-1 rounded-full text-xs" 
              style={{ 
                backgroundColor: `${tool.color}20`,
                border: `1px solid ${tool.color}40`,
                color: tool.color
              }}
            >
              {user}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProsConsCard;