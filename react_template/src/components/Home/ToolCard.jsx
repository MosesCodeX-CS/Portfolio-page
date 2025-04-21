import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CursorLogo, WindsurfLogo, TraeLogo, GithubCopilotLogo } from '../../utils/LogoSVGs';

const ToolCard = ({ tool }) => {
  // Get the right logo component based on the tool id
  const getLogo = () => {
    switch(tool.id) {
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

  // Extract pricing info for display
  const getPricingInfo = () => {
    if (tool.id === 'trae') {
      return tool.pricing.current;
    } else if (tool.id === 'githubCopilot') {
      return `From $${tool.pricing.individualPlan.price}/${tool.pricing.individualPlan.period}`;
    } else if (tool.id === 'cursor') {
      return `From $${tool.pricing.proPlan.price}/${tool.pricing.proPlan.period}`;
    } else if (tool.id === 'windsurf') {
      return `From $${tool.pricing.paidSubscription.price}/${tool.pricing.paidSubscription.period}`;
    }
    return 'Pricing varies';
  };

  return (
    <motion.div 
      whileHover={{ 
        y: -5, 
        boxShadow: `0 15px 30px -10px ${tool.color}30`
      }}
      className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden h-full flex flex-col transition-all`}
    >
      {/* Card header with logo and name */}
      <div 
        className="p-6 flex items-center" 
        style={{ 
          background: `linear-gradient(to right, ${tool.color}30, transparent)`,
          borderBottom: `1px solid ${tool.color}40`
        }}
      >
        <div className="mr-4">
          {getLogo()}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{tool.name}</h3>
          <p className="text-sm text-gray-300">{tool.tagline}</p>
        </div>
      </div>
      
      {/* Card content */}
      <div className="p-6 flex-grow">
        <p className="text-gray-300 text-sm mb-4">{tool.description}</p>
        
        <div className="mb-4">
          <h4 className="text-white text-sm font-medium mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {tool.coreFeatures.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-gray-400 text-xs flex items-start">
                <span className="text-cyan-400 mr-2">✓</span>
                <span>{feature}</span>
              </li>
            ))}
            {tool.coreFeatures.length > 3 && (
              <li className="text-gray-400 text-xs">
                <span className="text-cyan-400 mr-2">+</span>
                <span>{tool.coreFeatures.length - 3} more features</span>
              </li>
            )}
          </ul>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h4 className="text-white text-sm font-medium">Price:</h4>
            <span className="text-sm" style={{ color: tool.color }}>
              {getPricingInfo()}
            </span>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-white text-sm font-medium mb-2">Best for:</h4>
          <div className="flex flex-wrap gap-1">
            {tool.targetUsers.slice(0, 2).map((user, index) => (
              <span 
                key={index}
                className="inline-block px-2 py-1 rounded-full text-xs bg-gray-700/70" 
                style={{ border: `1px solid ${tool.color}50` }}
              >
                {user.split(' ').slice(0, 2).join(' ')}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Card footer */}
      <div className="p-4 border-t border-gray-700 mt-auto">
        <Link 
          to={`/tools/${tool.id}`}
          className="block w-full text-center py-2 rounded bg-gray-700/50 hover:bg-gray-700/80 transition-colors text-sm font-medium"
          style={{ color: tool.color }}
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ToolCard;