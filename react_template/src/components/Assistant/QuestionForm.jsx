import React, { useState } from 'react';
import { motion } from 'framer-motion';

const QuestionForm = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    experience: 'intermediate',
    projectSize: 'medium',
    primaryUse: 'productivity',
    platform: 'vscode',
    resources: 'medium',
    budget: 'affordable'
  });
  
  // Form steps with questions and options
  const formSteps = [
    {
      id: 'experience',
      question: 'What is your programming experience level?',
      options: [
        { value: 'beginner', label: 'Beginner', description: 'Learning to code or with less than 1 year of experience' },
        { value: 'intermediate', label: 'Intermediate', description: 'Comfortable with code, 1-3 years of experience' },
        { value: 'advanced', label: 'Advanced', description: 'Experienced developer, 3+ years of experience' }
      ]
    },
    {
      id: 'projectSize',
      question: 'What size of projects do you typically work on?',
      options: [
        { value: 'small', label: 'Small', description: 'Simple scripts, small features, individual files' },
        { value: 'medium', label: 'Medium', description: 'Multi-file components, moderate complexity' },
        { value: 'large', label: 'Large', description: 'Complex applications, large codebases, multiple services' }
      ]
    },
    {
      id: 'primaryUse',
      question: 'What will be your primary use for the AI coding tool?',
      options: [
        { value: 'completion', label: 'Code Completion', description: 'Automating repetitive coding tasks' },
        { value: 'refactoring', label: 'Refactoring', description: 'Improving existing code structure and quality' },
        { value: 'learning', label: 'Learning', description: 'Understanding concepts and exploring techniques' },
        { value: 'productivity', label: 'General Productivity', description: 'All-around coding assistant for daily tasks' }
      ]
    },
    {
      id: 'platform',
      question: 'Which development environment do you primarily use?',
      options: [
        { value: 'vscode', label: 'VS Code', description: 'Microsoft\'s popular code editor' },
        { value: 'jetbrains', label: 'JetBrains IDEs', description: 'IntelliJ, PyCharm, WebStorm, etc.' },
        { value: 'web', label: 'Web-Based Editors', description: 'Browser-based development environments' },
        { value: 'custom', label: 'Custom Editors', description: 'Specialized editors or self-contained IDEs' }
      ]
    },
    {
      id: 'resources',
      question: 'What are your system\'s computational resources?',
      options: [
        { value: 'low', label: 'Limited', description: 'Older hardware, <8GB RAM, or low CPU power' },
        { value: 'medium', label: 'Average', description: '8-16GB RAM, mid-tier CPU' },
        { value: 'high', label: 'Powerful', description: '16GB+ RAM, high-end CPU' }
      ]
    },
    {
      id: 'budget',
      question: 'What\'s your budget for AI coding tools?',
      options: [
        { value: 'free', label: 'Free Only', description: 'No budget for paid tools' },
        { value: 'affordable', label: 'Moderate', description: 'Can pay for reasonably priced subscriptions' },
        { value: 'noLimit', label: 'No Limit', description: 'Budget is not a constraint' }
      ]
    }
  ];
  
  const handleOptionSelect = (option) => {
    // Update form data with selected option
    setFormData({
      ...formData,
      [formSteps[currentStep].id]: option.value
    });
    
    // Move to next step or submit form
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };
  
  const handleStepBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleSubmit = () => {
    onSubmit(formData);
  };

  // Animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };
  
  // Current step data
  const currentStepData = formSteps[currentStep];
  
  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">
            Step {currentStep + 1} of {formSteps.length}
          </span>
          <span className="text-sm text-gray-400">
            {Math.round(((currentStep + 1) / formSteps.length) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="h-2 rounded-full bg-blue-500 transition-all duration-300" 
            style={{ width: `${((currentStep + 1) / formSteps.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      {/* Question */}
      <motion.div
        key={currentStepData.id}
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="mb-8"
      >
        <motion.h2 
          className="text-2xl font-bold text-white mb-6"
          variants={itemVariants}
        >
          {currentStepData.question}
        </motion.h2>
        
        {/* Options */}
        <div className="space-y-4">
          {currentStepData.options.map((option, index) => (
            <motion.div 
              key={option.value}
              variants={itemVariants}
              className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                formData[currentStepData.id] === option.value
                  ? 'border-blue-500 bg-blue-500/10'
                  : 'border-gray-600 hover:border-gray-500 bg-gray-800/30'
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              <div className="flex items-start">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 mt-0.5 ${
                  formData[currentStepData.id] === option.value
                    ? 'border-blue-500'
                    : 'border-gray-500'
                }`}>
                  {formData[currentStepData.id] === option.value && (
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                  )}
                </div>
                <div>
                  <div className="font-medium text-white">{option.label}</div>
                  <div className="text-sm text-gray-400 mt-1">{option.description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Navigation */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleStepBack}
          disabled={currentStep === 0}
          className={`px-5 py-2 rounded-lg text-sm font-medium ${
            currentStep === 0
              ? 'text-gray-600 cursor-not-allowed'
              : 'text-gray-300 hover:text-white bg-gray-700/50 hover:bg-gray-700'
          }`}
        >
          Back
        </button>
        
        {currentStep < formSteps.length - 1 ? (
          <button
            type="button"
            onClick={() => setCurrentStep(currentStep + 1)}
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-sm font-medium text-white"
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-sm font-medium text-white"
          >
            Get Recommendations
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionForm;