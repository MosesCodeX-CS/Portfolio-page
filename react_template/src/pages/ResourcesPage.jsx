import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ResourceCard from '../components/Resources/ResourceCard';

const ResourcesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    document.title = "Resources | AI Coding Tools Comparison";
  }, []);

  // Define resource categories
  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'articles', name: 'Articles' },
    { id: 'videos', name: 'Videos' },
    { id: 'docs', name: 'Documentation' }
  ];

  // Define resources
  const resources = [
    {
      id: 1,
      title: 'Getting Started with GitHub Copilot',
      description: 'A comprehensive guide to setting up and using GitHub Copilot effectively in your development workflow.',
      url: 'https://github.blog/2023-05-17-the-architecture-of-todays-llm-applications/',
      category: 'tutorials',
      imageUrl: '/assets/images/resource-gh-copilot.jpg',
      toolId: 'githubCopilot',
      date: 'September 10, 2023'
    },
    {
      id: 2,
      title: 'Cursor AI: Advanced Features Tutorial',
      description: 'Dive deep into Cursor\'s advanced AI features including multi-file editing and AI terminal functionality.',
      url: 'https://cursor.sh/blog/copilot-vs-cursor',
      category: 'tutorials',
      imageUrl: '/assets/images/resource-cursor.jpg',
      toolId: 'cursor',
      date: 'August 15, 2023'
    },
    {
      id: 3,
      title: 'The Future of AI Coding Assistants',
      description: 'Exploration of how AI coding tools like Trae and Windsurf are shaping the future of software development.',
      url: 'https://medium.com/artificial-corner/cursor-vs-copilot-the-ultimate-ai-code-assistants-f73d750ffb10',
      category: 'articles',
      imageUrl: '/assets/images/resource-ai-future.jpg',
      toolId: null,
      date: 'October 5, 2023'
    },
    {
      id: 4,
      title: 'Windsurf: Lightweight AI Coding Assistant Demo',
      description: 'Video demonstration of Windsurf\'s features and how it compares to heavier AI coding tools.',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'videos',
      imageUrl: '/assets/images/resource-windsurf-demo.jpg',
      toolId: 'windsurf',
      date: 'July 22, 2023'
    },
    {
      id: 5,
      title: 'Understanding Trae\'s Reasoning Engine',
      description: 'Technical breakdown of how Trae\'s reasoning engine works and why it provides better explanations.',
      url: 'https://trae.ai/blog',
      category: 'articles',
      imageUrl: '/assets/images/resource-trae-engine.jpg',
      toolId: 'trae',
      date: 'September 28, 2023'
    },
    {
      id: 6,
      title: 'GitHub Copilot Official Documentation',
      description: 'Official documentation covering all features, pricing plans, and integration options for GitHub Copilot.',
      url: 'https://docs.github.com/en/copilot',
      category: 'docs',
      imageUrl: '/assets/images/resource-gh-docs.jpg',
      toolId: 'githubCopilot',
      date: 'Updated regularly'
    },
    {
      id: 7,
      title: 'Optimizing Performance with AI Coding Tools',
      description: 'Learn how to integrate AI coding assistants into your development workflow for maximum productivity.',
      url: 'https://dev.to/githubblog/how-copilot-works-under-the-hood-3hip',
      category: 'articles',
      imageUrl: '/assets/images/resource-optimization.jpg',
      toolId: null,
      date: 'August 30, 2023'
    },
    {
      id: 8,
      title: 'Cursor vs. Copilot: Feature Comparison',
      description: 'Video comparison demonstrating the key differences between Cursor and GitHub Copilot.',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      category: 'videos',
      imageUrl: '/assets/images/resource-comparison-video.jpg',
      toolId: null,
      date: 'October 12, 2023'
    },
    {
      id: 9,
      title: 'Trae Official Documentation',
      description: 'Complete documentation for all of Trae\'s features and integration options.',
      url: 'https://trae.ai/docs',
      category: 'docs',
      imageUrl: '/assets/images/resource-trae-docs.jpg',
      toolId: 'trae',
      date: 'Updated regularly'
    }
  ];

  // Filter resources based on active category
  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

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

  return (
    <div className="pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Resources & Learning</h1>
            <p className="text-xl text-gray-300">
              Explore tutorials, articles, videos, and documentation to master AI coding tools
            </p>
          </motion.div>

          {/* Category filter */}
          <motion.div variants={itemVariants} className="mb-10 overflow-x-auto hide-scrollbar">
            <div className="flex space-x-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Resources grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredResources.map(resource => (
              <motion.div key={resource.id} variants={itemVariants}>
                <ResourceCard resource={resource} />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state */}
          {filteredResources.length === 0 && (
            <motion.div 
              variants={itemVariants}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center"
            >
              <h3 className="text-xl font-medium mb-2 text-white">No resources found</h3>
              <p className="text-gray-400">
                No resources available in this category yet. Please check back later.
              </p>
            </motion.div>
          )}

          {/* Newsletter signup */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-xl p-8 border border-blue-800/50"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Stay Updated with the Latest AI Coding Tools
              </h2>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter to receive the latest updates, tutorials, and comparisons for AI coding tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 rounded-lg bg-gray-800/70 border border-gray-700 text-white flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResourcesPage;