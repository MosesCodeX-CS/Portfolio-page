import React from 'react';
import { motion } from 'framer-motion';
import ComparisonTable from '../components/Comparison/ComparisonTable';
import FeatureRadar from '../components/Comparison/FeatureRadar';
import ProsConsCard from '../components/Comparison/ProsConsCard';
import toolsData from '../data/toolsData';
import { CursorLogo, WindsurfLogo, TraeLogo, GithubCopilotLogo } from '../utils/LogoSVGs';

const ComparisonPage = () => {
  const tools = [
    toolsData.cursor,
    toolsData.windsurf,
    toolsData.trae,
    toolsData.githubCopilot
  ];

  // Define the features to compare
  const featureCategories = [
    {
      name: 'Core Features',
      features: [
        { name: 'Code Completion', description: 'Intelligent code completion capabilities' },
        { name: 'Chat Interface', description: 'Interactive chat functionality for coding questions' },
        { name: 'Multi-File Editing', description: 'Ability to work across multiple files' },
        { name: 'Context Awareness', description: 'Understanding project context and relationships' },
        { name: 'Error Detection', description: 'Identification and correction of coding errors' },
        { name: 'Custom Commands', description: 'Support for custom natural language commands' }
      ]
    },
    {
      name: 'Integration',
      features: [
        { name: 'IDE Support', description: 'Range of supported IDEs and editors' },
        { name: 'Framework Integration', description: 'Support for popular frameworks and libraries' },
        { name: 'Version Control', description: 'Integration with version control systems' },
        { name: 'Plugin System', description: 'Extensibility through plugins or add-ons' }
      ]
    },
    {
      name: 'Performance',
      features: [
        { name: 'Response Time', description: 'Speed of AI suggestions and responses' },
        { name: 'Resource Usage', description: 'System resources required (CPU, RAM, etc.)' },
        { name: 'Large Project Support', description: 'Performance with large codebases' },
        { name: 'Offline Capability', description: 'Functionality without internet connection' }
      ]
    }
  ];

  // Data for radar chart
  const radarData = [
    {
      feature: 'Code Quality',
      cursor: 4.2,
      windsurf: 4.0,
      trae: 4.5,
      githubCopilot: 4.3
    },
    {
      feature: 'Speed',
      cursor: 4.0,
      windsurf: 4.6,
      trae: 3.8,
      githubCopilot: 4.2
    },
    {
      feature: 'Accuracy',
      cursor: 4.3,
      windsurf: 3.9,
      trae: 4.4,
      githubCopilot: 4.5
    },
    {
      feature: 'Context Understanding',
      cursor: 4.6,
      windsurf: 3.8,
      trae: 4.1,
      githubCopilot: 4.2
    },
    {
      feature: 'Documentation',
      cursor: 4.0,
      windsurf: 3.7,
      trae: 3.5,
      githubCopilot: 4.6
    },
    {
      feature: 'Resource Efficiency',
      cursor: 3.5,
      windsurf: 4.7,
      trae: 4.0,
      githubCopilot: 3.8
    },
  ];

  // Page animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Page Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              AI Coding Tools Comparison
            </span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            A comprehensive comparison of features, performance metrics, and use cases for the top AI coding assistants: Cursor, Windsurf, Trae, and GitHub Copilot.
          </p>
        </motion.div>

        {/* Tools Overview */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={pageVariants}
          initial="initial"
          animate="animate"
        >
          {tools.map((tool) => (
            <motion.div 
              key={tool.id}
              variants={itemVariants}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-5"
              style={{ 
                background: `linear-gradient(135deg, ${tool.color}20, transparent)`,
                borderColor: `${tool.color}40`
              }}
            >
              <div className="flex items-center mb-4">
                {tool.id === 'cursor' && <CursorLogo size={40} />}
                {tool.id === 'windsurf' && <WindsurfLogo size={40} />}
                {tool.id === 'trae' && <TraeLogo size={40} />}
                {tool.id === 'githubCopilot' && <GithubCopilotLogo size={40} />}
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                  <p className="text-sm text-gray-400">{tool.tagline}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">{tool.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Radar Chart Comparison */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Performance Comparison
            </span>
          </h2>
          
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <p className="text-gray-300 mb-6 text-center">
              Comparing key performance metrics across all tools (scale: 1-5)
            </p>
            <div className="h-96">
              <FeatureRadar data={radarData} tools={tools} />
            </div>
          </div>
        </motion.section>

        {/* Feature Comparison Tables */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Feature Comparison
            </span>
          </h2>

          {featureCategories.map((category, idx) => (
            <div key={idx} className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-4">{category.name}</h3>
              <ComparisonTable features={category.features} tools={tools} />
            </div>
          ))}
        </motion.section>

        {/* Pros and Cons */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Pros and Cons
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tools.map((tool) => (
              <ProsConsCard key={tool.id} tool={tool} />
            ))}
          </div>
        </motion.section>

        {/* Pricing Comparison */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Pricing Comparison
            </span>
          </h2>

          <div className="overflow-x-auto">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 min-w-[768px]">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-3 text-gray-300">Tool</th>
                    <th className="text-left p-3 text-gray-300">Free Plan</th>
                    <th className="text-left p-3 text-gray-300">Individual Plan</th>
                    <th className="text-left p-3 text-gray-300">Business/Team Plan</th>
                    <th className="text-left p-3 text-gray-300">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700/50">
                    <td className="p-3">
                      <div className="flex items-center">
                        <CursorLogo size={24} />
                        <span className="ml-2 font-medium text-white">Cursor</span>
                      </div>
                    </td>
                    <td className="p-3 text-gray-300">
                      {toolsData.cursor.pricing.freePlan.price === 0 ? (
                        <div>
                          <span className="text-green-400">✓</span> {toolsData.cursor.pricing.freePlan.features.join(', ')}
                        </div>
                      ) : 'Not available'}
                    </td>
                    <td className="p-3 text-gray-300">
                      ${toolsData.cursor.pricing.proPlan.price}/{toolsData.cursor.pricing.proPlan.period}
                    </td>
                    <td className="p-3 text-gray-300">
                      ${toolsData.cursor.pricing.businessPlan.price}/{toolsData.cursor.pricing.businessPlan.period}
                    </td>
                    <td className="p-3 text-gray-300">Contact sales</td>
                  </tr>

                  <tr className="border-b border-gray-700/50">
                    <td className="p-3">
                      <div className="flex items-center">
                        <WindsurfLogo size={24} />
                        <span className="ml-2 font-medium text-white">Windsurf</span>
                      </div>
                    </td>
                    <td className="p-3 text-gray-300">
                      <div>
                        <span className="text-green-400">✓</span> {toolsData.windsurf.pricing.freeTier.features.join(', ')}
                      </div>
                    </td>
                    <td className="p-3 text-gray-300">
                      ${toolsData.windsurf.pricing.paidSubscription.price}/{toolsData.windsurf.pricing.paidSubscription.period}
                    </td>
                    <td className="p-3 text-gray-300">Not specified</td>
                    <td className="p-3 text-gray-300">Not specified</td>
                  </tr>

                  <tr className="border-b border-gray-700/50">
                    <td className="p-3">
                      <div className="flex items-center">
                        <TraeLogo size={24} />
                        <span className="ml-2 font-medium text-white">Trae</span>
                      </div>
                    </td>
                    <td className="p-3 text-gray-300">
                      <div>
                        <span className="text-green-400">✓</span> Currently free (Beta)
                      </div>
                    </td>
                    <td className="p-3 text-gray-300">Not yet announced</td>
                    <td className="p-3 text-gray-300">Not yet announced</td>
                    <td className="p-3 text-gray-300">Not yet announced</td>
                  </tr>

                  <tr>
                    <td className="p-3">
                      <div className="flex items-center">
                        <GithubCopilotLogo size={24} />
                        <span className="ml-2 font-medium text-white">GitHub Copilot</span>
                      </div>
                    </td>
                    <td className="p-3 text-gray-300">
                      <div>
                        {toolsData.githubCopilot.pricing.freePlan.eligibility.map((item, i) => (
                          <div key={i}><span className="text-green-400">✓</span> {item}</div>
                        ))}
                      </div>
                    </td>
                    <td className="p-3 text-gray-300">
                      ${toolsData.githubCopilot.pricing.individualPlan.price}/month
                      <div className="text-sm text-gray-400">
                        (${toolsData.githubCopilot.pricing.individualPlan.annualPrice}/year)
                      </div>
                    </td>
                    <td className="p-3 text-gray-300">
                      ${toolsData.githubCopilot.pricing.businessPlan.price}/{toolsData.githubCopilot.pricing.businessPlan.period}
                    </td>
                    <td className="p-3 text-gray-300">
                      ${toolsData.githubCopilot.pricing.enterprisePlan.price}/{toolsData.githubCopilot.pricing.enterprisePlan.period}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ComparisonPage;