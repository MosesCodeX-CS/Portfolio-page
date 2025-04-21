import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CodeExamples = ({ tool }) => {
  const [activeExample, setActiveExample] = useState(0);

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

  // Define code examples for each tool
  // These examples show how the AI assistant helps with different coding scenarios
  const codeExamples = [
    {
      title: 'Code Completion',
      description: `See how ${tool.name} suggests code completions as you type`,
      before: `// Define a function to fetch user data
function fetch`,
      after: `// Define a function to fetch user data
function fetchUserData(userId) {
  return fetch(\`/api/users/\${userId}\`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('User data:', data);
      return data;
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
      throw error;
    });
}`,
      language: 'javascript'
    },
    {
      title: 'Code Refactoring',
      description: `Learn how ${tool.name} can help improve existing code`,
      before: `// This function checks if a number is prime
function isPrime(num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
}`,
      after: `/**
 * Determines if a number is prime by checking if it has any divisors
 * other than 1 and itself.
 * 
 * @param {number} num - The number to check for primality
 * @returns {boolean} True if the number is prime, false otherwise
 */
function isPrime(num) {
  // Handle edge cases
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  // Check for divisibility up to square root of num
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  
  return true;
}`,
      language: 'javascript'
    },
    {
      title: 'Bug Fixing',
      description: `See how ${tool.name} identifies and fixes bugs in your code`,
      before: `// Function to calculate average of an array
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

// This will throw an error
const avg = calculateAverage([1, 2, 3, 4, 5]);
console.log(avg);`,
      after: `// Function to calculate average of an array
function calculateAverage(numbers) {
  // Check if array is empty or not an array
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }
  
  let sum = 0;
  // Fix: loop should go from 0 to length-1
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

// Now it works correctly
const avg = calculateAverage([1, 2, 3, 4, 5]);
console.log(avg); // 3`,
      language: 'javascript'
    }
  ];

  const renderCodeBlock = (code, language) => {
    return (
      <pre className="bg-gray-900/80 rounded-lg p-4 overflow-x-auto">
        <code className="text-gray-200 font-mono text-sm whitespace-pre">{code}</code>
      </pre>
    );
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-8 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl">
        <div className="border-b border-gray-700 flex overflow-x-auto">
          {codeExamples.map((example, index) => (
            <button
              key={index}
              onClick={() => setActiveExample(index)}
              className={`px-5 py-4 font-medium transition-colors whitespace-nowrap ${
                activeExample === index
                  ? `text-white bg-gray-700/50 border-b-2`
                  : 'text-gray-400 hover:text-gray-200'
              }`}
              style={activeExample === index ? { borderColor: tool.color } : {}}
            >
              {example.title}
            </button>
          ))}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-medium text-white mb-2">{codeExamples[activeExample].title}</h3>
          <p className="text-gray-300 mb-6">{codeExamples[activeExample].description}</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-gray-400 text-sm">Before</span>
              </div>
              {renderCodeBlock(codeExamples[activeExample].before, codeExamples[activeExample].language)}
            </div>
            
            <div>
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-gray-400 text-sm">After {tool.name}'s Assistance</span>
              </div>
              {renderCodeBlock(codeExamples[activeExample].after, codeExamples[activeExample].language)}
            </div>
          </div>
          
          <div className="text-center mt-8 text-gray-300 text-sm">
            <p>This is a simulated example of how {tool.name} might help with coding tasks.</p>
            <p className="mt-1">Actual results may vary based on context, settings, and version of the tool.</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div variants={itemVariants} className="text-center">
        <a 
          href={tool.website} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2.5 rounded-lg font-medium text-white transition-all"
          style={{ 
            backgroundColor: tool.color,
            boxShadow: `0 4px 14px ${tool.color}40`
          }}
        >
          Try {tool.name} yourself →
        </a>
      </motion.div>
    </motion.div>
  );
};

export default CodeExamples;