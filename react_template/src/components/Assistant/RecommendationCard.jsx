import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CursorLogo, WindsurfLogo, TraeLogo, GithubCopilotLogo } from '../../utils/LogoSVGs';

const RecommendationCard = ({ recommendation, userProfile }) => {
  // Get the appropriate logo component
  const getLogo = () => {
    switch (recommendation.id) {
      case 'cursor':
        return <CursorLogo size={48} />;
      case 'windsurf':
        return <WindsurfLogo size={48} />;
      case 'trae':
        return <TraeLogo size={48} />;
      case 'githubCopilot':
        return <GithubCopilotLogo size={48} />;
      default:
        return null;
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden"
    >
      {/* Match percentage badge */}
      <div 
        className="absolute top-0 right-0 px-4 py-2 rounded-bl-lg text-white text-sm font-bold"
        style={{ backgroundColor: recommendation.color }}
      >
        {recommendation.percentage}% Match
      </div>

      <div className="p-6 rounded-xl border" style={{ 
        backgroundColor: `${recommendation.color}10`, 
        borderColor: recommendation.color 
      }}>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="mr-5">
              {getLogo()}
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">{recommendation.name}</h3>
              <p className="text-lg mt-1" style={{ color: recommendation.color }}>
                {recommendation.tagline}
              </p>
            </div>
          </div>
          
          <div className="md:ml-auto flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <Link 
              to={`/tool/${recommendation.id}`}
              className="px-5 py-2.5 rounded-lg font-medium bg-gray-700 hover:bg-gray-600 text-white text-center"
            >
              View Details
            </Link>
            <a 
              href={recommendation.website}
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-2.5 rounded-lg font-medium text-white text-center"
              style={{ 
                backgroundColor: recommendation.color,
                boxShadow: `0 4px 14px ${recommendation.color}40`
              }}
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>

      {/* Why this tool is recommended */}
      <motion.div 
        variants={itemVariants}
        className="mt-8"
      >
        <h3 className="text-xl font-bold mb-4 text-white">Why {recommendation.name} is recommended for you</h3>
        
        <div className="space-y-4">
          {recommendation.reasons.map((reason, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex items-start"
            >
              <div 
                className="flex items-center justify-center rounded-full p-1 mr-4 mt-1 text-lg"
                style={{ backgroundColor: `${recommendation.color}30` }}
              >
                <span style={{ color: recommendation.color }}>✓</span>
              </div>
              <p className="text-gray-300">{reason}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* User profile summary */}
      <motion.div 
        variants={itemVariants}
        className="mt-8 p-6 bg-gray-800/50 rounded-lg"
      >
        <h4 className="text-lg font-medium mb-3 text-white">Based on your preferences</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-gray-400">Experience level: </span>
            <span className="text-white capitalize">{userProfile.experience}</span>
          </div>
          <div>
            <span className="text-gray-400">Project size: </span>
            <span className="text-white capitalize">{userProfile.projectSize}</span>
          </div>
          <div>
            <span className="text-gray-400">Primary use: </span>
            <span className="text-white capitalize">{userProfile.primaryUse}</span>
          </div>
          <div>
            <span className="text-gray-400">Platform: </span>
            <span className="text-white capitalize">
              {userProfile.platform === 'vscode' ? 'VS Code' : 
               userProfile.platform === 'jetbrains' ? 'JetBrains IDEs' : 
               userProfile.platform === 'web' ? 'Web-Based Editors' : 'Custom Editors'}
            </span>
          </div>
          <div>
            <span className="text-gray-400">System resources: </span>
            <span className="text-white capitalize">{userProfile.resources}</span>
          </div>
          <div>
            <span className="text-gray-400">Budget: </span>
            <span className="text-white capitalize">
              {userProfile.budget === 'free' ? 'Free Only' : 
               userProfile.budget === 'affordable' ? 'Moderate' : 'No Limit'}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RecommendationCard;