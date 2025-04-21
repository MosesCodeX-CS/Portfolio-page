import React from 'react';
import { Link } from 'react-router-dom';
import { CursorLogo, WindsurfLogo, TraeLogo, GithubCopilotLogo } from '../../utils/LogoSVGs';

const ResourceCard = ({ resource }) => {
  // Get the appropriate logo component if the resource is tool-specific
  const getToolLogo = () => {
    if (!resource.toolId) return null;

    switch (resource.toolId) {
      case 'cursor':
        return <CursorLogo size={20} />;
      case 'windsurf':
        return <WindsurfLogo size={20} />;
      case 'trae':
        return <TraeLogo size={20} />;
      case 'githubCopilot':
        return <GithubCopilotLogo size={20} />;
      default:
        return null;
    }
  };

  // Get category badge color
  const getCategoryColor = () => {
    switch (resource.category) {
      case 'tutorials':
        return 'bg-blue-500/20 border-blue-500/30 text-blue-400';
      case 'articles':
        return 'bg-purple-500/20 border-purple-500/30 text-purple-400';
      case 'videos':
        return 'bg-red-500/20 border-red-500/30 text-red-400';
      case 'docs':
        return 'bg-green-500/20 border-green-500/30 text-green-400';
      default:
        return 'bg-gray-500/20 border-gray-500/30 text-gray-400';
    }
  };

  // Get formatted category name
  const getCategoryName = () => {
    switch (resource.category) {
      case 'tutorials':
        return 'Tutorial';
      case 'articles':
        return 'Article';
      case 'videos':
        return 'Video';
      case 'docs':
        return 'Documentation';
      default:
        return resource.category;
    }
  };

  return (
    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden h-full flex flex-col transition-all hover:border-gray-500 group">
      {/* Image */}
      <div className="h-48 bg-gray-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 via-transparent to-transparent z-10"></div>
        <div className="h-full w-full bg-gradient-to-br from-blue-900/30 to-purple-900/30"></div>
        
        {/* Category badge */}
        <div className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor()}`}>
          {getCategoryName()}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">
          {resource.title}
        </h3>
        
        <p className="text-gray-400 mb-4 text-sm flex-grow">
          {resource.description}
        </p>
        
        <div className="flex justify-between items-center mt-auto">
          {/* Tool badge if applicable */}
          {resource.toolId && (
            <div className="flex items-center text-sm">
              <span className="mr-2">
                {getToolLogo()}
              </span>
              <Link 
                to={`/tool/${resource.toolId}`} 
                className="text-gray-400 hover:text-white transition-colors"
              >
                {resource.toolId === 'cursor' ? 'Cursor' : 
                 resource.toolId === 'windsurf' ? 'Windsurf' : 
                 resource.toolId === 'trae' ? 'Trae' : 'GitHub Copilot'}
              </Link>
            </div>
          )}
          
          {/* Date */}
          <div className="text-xs text-gray-500">
            {resource.date}
          </div>
        </div>
      </div>
      
      {/* Button */}
      <a 
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-6 py-3 text-center text-sm font-medium border-t border-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
      >
        View Resource
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  );
};

export default ResourceCard;