import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { CursorLogo, WindsurfLogo, TraeLogo, GithubCopilotLogo } from '../../utils/LogoSVGs';
import toolsData from '../../data/toolsData';

const QuickComparison = ({ tools }) => {
  // Define comparison categories and metrics
  const comparisonData = [
    {
      name: 'Performance',
      cursor: 85,
      windsurf: 78,
      trae: 80,
      githubCopilot: 88,
    },
    {
      name: 'Ease of Use',
      cursor: 82,
      windsurf: 90,
      trae: 75,
      githubCopilot: 85,
    },
    {
      name: 'Code Quality',
      cursor: 87,
      windsurf: 80,
      trae: 90,
      githubCopilot: 85,
    },
    {
      name: 'Integration',
      cursor: 80,
      windsurf: 75,
      trae: 70,
      githubCopilot: 95,
    },
  ];

  // Pricing comparison data for pie chart
  const pricingData = [
    { name: 'Free', value: 1, label: 'Trae' },
    { name: '$10/mo', value: 2, label: 'Windsurf & GitHub Copilot' },
    { name: '$20/mo', value: 1, label: 'Cursor' },
  ];

  const COLORS = ['#a855f7', '#22c55e', '#3b82f6'];

  // Get logo component by tool ID
  const getLogoById = (id, size = 24) => {
    switch (id) {
      case 'cursor':
        return <CursorLogo size={size} />;
      case 'windsurf':
        return <WindsurfLogo size={size} />;
      case 'trae':
        return <TraeLogo size={size} />;
      case 'githubCopilot':
        return <GithubCopilotLogo size={size} />;
      default:
        return null;
    }
  };

  // Get color by tool ID
  const getColorById = (id) => {
    switch (id) {
      case 'cursor':
        return '#3b82f6';
      case 'windsurf':
        return '#22c55e';
      case 'trae':
        return '#a855f7';
      case 'githubCopilot':
        return '#eab308';
      default:
        return '#ffffff';
    }
  };

  // Format tooltip for bar chart
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      const toolId = data.dataKey;
      const toolName = tools.find(t => t.id === toolId)?.name || toolId;
      return (
        <div className="bg-gray-800 p-2 rounded border border-gray-700">
          <p className="font-medium text-white">{toolName}</p>
          <p className="text-sm" style={{ color: getColorById(toolId) }}>
            Score: {data.value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div 
      className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Performance comparison */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-medium text-white mb-4">Performance Metrics</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={comparisonData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                  barGap={2}
                >
                  <XAxis 
                    dataKey="name" 
                    stroke="#9ca3af"
                    tick={{ fill: '#9ca3af', fontSize: 12 }}
                  />
                  <YAxis 
                    stroke="#9ca3af" 
                    tick={{ fill: '#9ca3af', fontSize: 12 }}
                    domain={[0, 100]}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  {tools.map((tool) => (
                    <Bar key={tool.id} dataKey={tool.id} fill={getColorById(tool.id)} radius={[4, 4, 0, 0]} />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Price comparison */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Pricing Distribution</h3>
            <div className="h-72 flex flex-col items-center justify-center">
              <ResponsiveContainer width="100%" height="80%">
                <PieChart>
                  <Pie
                    data={pricingData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={40}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                      const RADIAN = Math.PI / 180;
                      const radius = 25 + innerRadius + (outerRadius - innerRadius) * 1.2;
                      const x = cx + radius * Math.cos(-midAngle * RADIAN);
                      const y = cy + radius * Math.sin(-midAngle * RADIAN);
                      
                      return (
                        <text 
                          x={x} 
                          y={y} 
                          fill={COLORS[index % COLORS.length]}
                          textAnchor={x > cx ? 'start' : 'end'} 
                          dominantBaseline="central"
                          fontSize={12}
                          fontWeight={500}
                        >
                          {pricingData[index].name}
                        </text>
                      );
                    }}
                  >
                    {pricingData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="text-gray-300 text-sm text-center mt-2">
                Price tier distribution across tools
              </div>
            </div>
          </div>
        </div>
        
        {/* Key strengths comparison */}
        <div className="mt-8">
          <h3 className="text-lg font-medium text-white mb-4">Unique Strengths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <div 
                key={tool.id} 
                className="p-4 border border-gray-700 rounded-lg"
                style={{ background: `linear-gradient(to bottom right, ${getColorById(tool.id)}20, transparent)` }}
              >
                <div className="flex items-center mb-3">
                  {getLogoById(tool.id, 30)}
                  <h4 className="ml-3 font-medium text-white">{tool.name}</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  {toolsData.comparison.uniqueSellingPoints[tool.id]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuickComparison;