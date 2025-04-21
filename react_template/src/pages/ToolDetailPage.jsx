import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CursorLogo, WindsurfLogo, TraeLogo, GithubCopilotLogo } from '../utils/LogoSVGs';
import toolsData from '../data/toolsData';
import ToolFeatures from '../components/ToolDetail/ToolFeatures';
import CodeExamples from '../components/ToolDetail/CodeExamples';

const ToolDetailPage = () => {
  const { toolId } = useParams();
  const [tool, setTool] = useState(null);
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    // Find the tool based on the URL parameter
    const currentTool = toolsData[toolId];
    if (currentTool) {
      setTool(currentTool);
      document.title = `${currentTool.name} | AI Coding Tools Comparison`;
    }
  }, [toolId]);

  const getLogo = () => {
    switch (toolId) {
      case 'cursor':
        return <CursorLogo size={64} />;
      case 'windsurf':
        return <WindsurfLogo size={64} />;
      case 'trae':
        return <TraeLogo size={64} />;
      case 'githubCopilot':
        return <GithubCopilotLogo size={64} />;
      default:
        return null;
    }
  };

  const getNextToolId = () => {
    const toolIds = Object.keys(toolsData);
    const currentIndex = toolIds.indexOf(toolId);
    return toolIds[(currentIndex + 1) % toolIds.length];
  };

  const getPrevToolId = () => {
    const toolIds = Object.keys(toolsData);
    const currentIndex = toolIds.indexOf(toolId);
    return toolIds[(currentIndex - 1 + toolIds.length) % toolIds.length];
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (!tool) {
    return (
      <div className="pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Tool not found</h1>
          <p className="text-xl text-gray-300 mb-6">
            The tool you're looking for doesn't exist or has been removed.
          </p>
          <Link 
            to="/comparison" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors"
          >
            View All Tools
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tool navigation */}
          <motion.div variants={itemVariants} className="flex justify-between mb-6">
            <Link 
              to={`/tool/${getPrevToolId()}`} 
              className="px-4 py-2 bg-gray-800/30 hover:bg-gray-700/50 rounded-lg text-gray-300 flex items-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Tool
            </Link>
            <Link 
              to={`/tool/${getNextToolId()}`} 
              className="px-4 py-2 bg-gray-800/30 hover:bg-gray-700/50 rounded-lg text-gray-300 flex items-center transition-colors"
            >
              Next Tool
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Tool header */}
          <motion.div 
            variants={itemVariants}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-8"
            style={{
              borderColor: `${tool.color}40`,
              backgroundImage: `radial-gradient(circle at top right, ${tool.color}10, transparent 70%)`
            }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="flex items-center mb-6 md:mb-0">
                <div className="mr-6">
                  {getLogo()}
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white">{tool.name}</h1>
                  <p className="text-xl mt-1" style={{ color: tool.color }}>{tool.tagline}</p>
                </div>
              </div>
              <div className="md:ml-auto mt-4 md:mt-0 space-y-3 md:space-y-0 md:space-x-3 flex flex-col md:flex-row">
                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg font-medium text-white text-center"
                  style={{ 
                    backgroundColor: tool.color,
                    boxShadow: `0 4px 14px ${tool.color}40`
                  }}
                >
                  Visit Website
                </a>
                <Link
                  to="/comparison"
                  className="px-5 py-2.5 rounded-lg font-medium bg-gray-700 hover:bg-gray-600 text-white text-center"
                >
                  Compare with Others
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Tool overview */}
          <motion.div 
            variants={itemVariants}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {tool.description}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {tool.longDescription || "This AI coding assistant helps developers code more efficiently by providing intelligent suggestions, automating repetitive tasks, and assisting with complex coding challenges."}
                </p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Pricing Model</div>
                    <div className="font-medium text-white">
                      {tool.id === 'trae' ? 'Free (Beta)' : 
                       tool.id === 'windsurf' && tool.pricing.freeTier ? 'Freemium' : 'Subscription'}
                    </div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Free Tier</div>
                    <div className="font-medium text-white">
                      {tool.id === 'cursor' && tool.pricing.freePlan ? 'Available' :
                       tool.id === 'windsurf' && tool.pricing.freeTier ? 'Available' :
                       tool.id === 'trae' ? 'Full Access (Beta)' :
                       tool.id === 'githubCopilot' && tool.pricing.freePlan ? 'Limited Access' : 'Not Available'}
                    </div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Starting Price</div>
                    <div className="font-medium text-white">
                      {tool.id === 'cursor' ? `$${tool.pricing.proPlan.price}/month` :
                       tool.id === 'windsurf' ? `$${tool.pricing.paidSubscription.price}/month` :
                       tool.id === 'trae' ? 'Currently Free' :
                       tool.id === 'githubCopilot' ? `$${tool.pricing.individualPlan.price}/month` : 'N/A'}
                    </div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Enterprise Plan</div>
                    <div className="font-medium text-white">
                      {tool.id === 'cursor' && tool.pricing.businessPlan ? 'Available' :
                       tool.id === 'githubCopilot' && tool.pricing.enterprisePlan ? 'Available' :
                       'Contact for Details'}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="text-sm text-gray-400 mb-2">Platform Compatibility</div>
                  <div className="flex flex-wrap gap-2">
                    {tool.platforms.map((platform, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm text-white"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tab navigation */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex space-x-2 border-b border-gray-700">
              <button
                className={`px-5 py-3 font-medium transition-colors ${
                  activeTab === 'features'
                    ? 'text-white border-b-2 border-blue-500'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                onClick={() => setActiveTab('features')}
              >
                Features & Capabilities
              </button>
              <button
                className={`px-5 py-3 font-medium transition-colors ${
                  activeTab === 'examples'
                    ? 'text-white border-b-2 border-blue-500'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                onClick={() => setActiveTab('examples')}
              >
                Code Examples
              </button>
            </div>
          </motion.div>

          {/* Tab content */}
          {activeTab === 'features' ? (
            <ToolFeatures tool={tool} />
          ) : (
            <CodeExamples tool={tool} />
          )}

          {/* Decision helper */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-xl p-8 border border-blue-800/50 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-3">Need help deciding if {tool.name} is right for you?</h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Use our Decision Assistant to get a personalized recommendation based on your specific needs and preferences.
            </p>
            <Link 
              to="/assistant" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium inline-flex items-center transition-colors"
            >
              Try Decision Assistant
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ToolDetailPage;