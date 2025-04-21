import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  useEffect(() => {
    document.title = "About | AI Coding Tools Comparison";
  }, []);

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

  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Lead Developer & AI Specialist',
      bio: 'Alex has 8+ years of experience in software development with a focus on AI tools and integrations.',
      image: '/assets/images/team-alex.jpg'
    },
    {
      name: 'Sarah Chen',
      role: 'Product Researcher & UX Designer',
      bio: 'Sarah specializes in evaluating developer tools and creating intuitive interfaces for technical products.',
      image: '/assets/images/team-sarah.jpg'
    },
    {
      name: 'Miguel Rodriguez',
      role: 'Technical Content Writer',
      bio: 'Miguel combines his development background with content creation to produce in-depth technical comparisons.',
      image: '/assets/images/team-miguel.jpg'
    }
  ];

  return (
    <div className="pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">About Our Project</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Helping developers navigate the evolving landscape of AI coding tools through comprehensive, unbiased comparisons
            </p>
          </motion.div>

          {/* Mission section */}
          <motion.section 
            variants={itemVariants}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-12"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We created this comparison platform to help developers make informed decisions about which AI coding tools best fit their specific needs. 
                As the AI coding assistant market grows rapidly, choosing the right tool can significantly impact productivity and code quality.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our goal is to provide unbiased, detailed comparisons based on real-world testing and research. We evaluate each tool across multiple dimensions, 
                from core features and performance to pricing and integration capabilities, ensuring you have all the information you need to select the perfect tool 
                for your development workflow.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This platform is continuously updated as tools evolve and new options enter the market, keeping our comparisons relevant and accurate in this fast-moving field.
              </p>
            </div>
          </motion.section>

          {/* Methodology section */}
          <motion.section 
            variants={itemVariants}
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-12"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Our Methodology</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We employ a rigorous evaluation process to ensure our comparisons are fair, comprehensive, and useful:
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-blue-500/20 rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                    <span className="text-blue-400 text-lg font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Hands-On Testing</h3>
                    <p className="text-gray-400">
                      Our team uses each tool extensively in real development environments, working on various project types and programming languages.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-blue-500/20 rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                    <span className="text-blue-400 text-lg font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Feature Analysis</h3>
                    <p className="text-gray-400">
                      We document and categorize all features, noting strengths, limitations, and unique capabilities of each tool.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-blue-500/20 rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                    <span className="text-blue-400 text-lg font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Performance Metrics</h3>
                    <p className="text-gray-400">
                      We measure response times, resource usage, and accuracy of suggestions across standardized coding tasks.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-blue-500/20 rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                    <span className="text-blue-400 text-lg font-medium">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">User Feedback</h3>
                    <p className="text-gray-400">
                      We incorporate feedback from developers of different experience levels and backgrounds to provide diverse perspectives.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-blue-500/20 rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                    <span className="text-blue-400 text-lg font-medium">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Regular Updates</h3>
                    <p className="text-gray-400">
                      We continually revisit our comparisons as tools receive updates, ensuring our information remains current and accurate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Team section */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold text-white mb-8">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden"
                >
                  <div className="h-48 bg-gray-700">
                    {/* Replace with actual team member images */}
                    <div className="h-full w-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-white mb-1">{member.name}</h3>
                    <p className="text-blue-400 text-sm mb-4">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact section */}
          <motion.section 
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-xl p-8 border border-blue-800/50"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Have Questions or Feedback?</h2>
              <p className="text-gray-300 mb-6">
                We're constantly improving our comparisons and would love to hear from you. 
                Whether you have suggestions, corrections, or want to collaborate, reach out to us.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                >
                  Contact Us
                </Link>
                <a 
                  href="https://github.com/ai-tools-comparison" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-medium transition-colors flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;