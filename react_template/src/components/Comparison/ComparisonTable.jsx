import React from 'react';
import { motion } from 'framer-motion';

const ComparisonTable = ({ features, tools }) => {
  // Helper function to generate comparison data
  const generateComparisonData = (feature) => {
    // In a real application, this would be based on actual data
    // For now, we'll generate synthetic comparison data
    const supportLevels = ['Full', 'Partial', 'Limited', 'None'];
    const descriptions = {
      'Full': 'Comprehensive implementation of this feature',
      'Partial': 'Feature is available but with limitations',
      'Limited': 'Basic implementation or in early stages',
      'None': 'Feature not currently supported'
    };
    
    // Using a deterministic approach based on feature name and tool id
    const getToolSupportLevel = (toolId, featureName) => {
      // This is a simple hash function to get deterministic but varied results
      const hash = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
          hash += str.charCodeAt(i);
        }
        return hash;
      };
      
      const combined = `${toolId}-${featureName}`;
      const value = hash(combined) % 100;
      
      if (value < 10) return 'None';
      if (value < 30) return 'Limited';
      if (value < 60) return 'Partial';
      return 'Full';
    };

    return tools.map(tool => ({
      toolId: tool.id,
      toolName: tool.name,
      toolColor: tool.color,
      supportLevel: getToolSupportLevel(tool.id, feature.name),
      description: descriptions[getToolSupportLevel(tool.id, feature.name)]
    }));
  };

  // Get support level icon
  const getSupportIcon = (level) => {
    switch (level) {
      case 'Full':
        return (
          <div className="flex items-center">
            <span className="text-green-500">●</span>
            <span className="ml-2 text-green-500 font-medium">Full</span>
          </div>
        );
      case 'Partial':
        return (
          <div className="flex items-center">
            <span className="text-yellow-500">◐</span>
            <span className="ml-2 text-yellow-500 font-medium">Partial</span>
          </div>
        );
      case 'Limited':
        return (
          <div className="flex items-center">
            <span className="text-orange-500">◔</span>
            <span className="ml-2 text-orange-500 font-medium">Limited</span>
          </div>
        );
      case 'None':
        return (
          <div className="flex items-center">
            <span className="text-red-500">○</span>
            <span className="ml-2 text-red-500 font-medium">None</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-2 min-w-[768px]">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-800/50">
              <th className="text-left p-3 text-gray-300 w-1/4">Feature</th>
              {tools.map((tool) => (
                <th 
                  key={tool.id} 
                  className="text-left p-3 font-medium" 
                  style={{ color: tool.color }}
                >
                  {tool.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, idx) => {
              const comparisonData = generateComparisonData(feature);
              
              return (
                <motion.tr 
                  key={idx}
                  className="border-t border-gray-700/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <td className="p-3">
                    <div className="font-medium text-white">{feature.name}</div>
                    <div className="text-xs text-gray-400 mt-1">{feature.description}</div>
                  </td>
                  
                  {comparisonData.map((data, i) => (
                    <td key={i} className="p-3">
                      <div className="mb-1">{getSupportIcon(data.supportLevel)}</div>
                      <div className="text-xs text-gray-400">{data.description}</div>
                    </td>
                  ))}
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;