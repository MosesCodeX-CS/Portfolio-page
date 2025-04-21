import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';

const FeatureRadar = ({ data, tools }) => {
  // Get color by tool ID
  const getColorById = (id) => {
    const tool = tools.find(t => t.id === id);
    return tool ? tool.color : '#ffffff';
  };

  // Custom tooltip component
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      const toolId = data.dataKey;
      const toolName = tools.find(t => t.id === toolId)?.name || toolId;
      const feature = data.payload.feature;
      const score = data.value;

      return (
        <div className="bg-gray-800 p-3 rounded border border-gray-700 shadow-lg">
          <p className="font-medium text-white">{feature}</p>
          <p className="text-sm mb-1" style={{ color: getColorById(toolId) }}>
            {toolName}: <span className="font-bold">{score}/5</span>
          </p>
        </div>
      );
    }
    return null;
  };

  // Custom legend for the chart
  const CustomLegend = ({ payload }) => {
    return (
      <div className="flex justify-center flex-wrap gap-4 mt-4">
        {payload.map((entry, index) => {
          const toolId = entry.dataKey;
          const tool = tools.find(t => t.id === toolId);
          const toolName = tool ? tool.name : toolId;
          
          return (
            <div key={index} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-sm text-gray-300">{toolName}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart 
        cx="50%" 
        cy="50%" 
        outerRadius="70%" 
        data={data}
      >
        <PolarGrid stroke="#4b5563" />
        <PolarAngleAxis 
          dataKey="feature" 
          tick={{ fill: '#9ca3af', fontSize: 12 }} 
        />
        <PolarRadiusAxis 
          angle={30} 
          domain={[0, 5]} 
          tick={{ fill: '#9ca3af', fontSize: 10 }}
        />
        
        {/* Generate a radar for each tool */}
        {tools.map((tool) => (
          <Radar
            key={tool.id}
            name={tool.name}
            dataKey={tool.id}
            stroke={tool.color}
            fill={tool.color}
            fillOpacity={0.2}
          />
        ))}
        
        <Tooltip content={<CustomTooltip />} />
        <Legend content={<CustomLegend />} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default FeatureRadar;