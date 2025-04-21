// toolsData.js
// This file contains structured data about the four AI coding tools

// Structure of each tool object:
// - Basic info: id, name, logo, description, tagline, color
// - Features: coreFeatures, keyStrengths, features (with ratings), platforms, languageSupport, uniqueFeatures
// - Details: technology, pros, cons, targetUsers, pricing, userFeedback, latestUpdates
// - Website: URL for the tool's homepage

const toolsData = {
  cursor: {
    id: "cursor",
    name: "Cursor AI",
    logo: "/assets/images/cursor-logo.svg",
    description: "AI-powered code editor forked from Visual Studio Code with advanced AI assistance",
    tagline: "The AI-first code editor",
    color: "#3b82f6", // Blue
    website: "https://cursor.sh",
    platforms: ["macOS", "Windows", "Linux"],
    languageSupport: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Go", "Ruby", "PHP", "Swift", "Rust", "C#"],
    longDescription: "Cursor is an AI-first code editor that revolutionizes the way developers write and understand code. Forked from Visual Studio Code, it maintains a familiar interface while adding powerful AI capabilities that help you navigate complex codebases, generate code, refactor existing implementations, and explain code logic.",
    keyStrengths: [
      { title: "Context-Aware Intelligence", description: "Cursor analyzes your entire codebase to provide suggestions that truly understand your project structure." },
      { title: "Multi-line Edits", description: "Unlike other tools, Cursor can edit multiple lines at once, helping you refactor and implement larger code blocks efficiently." },
      { title: "AI Model Options", description: "Access to both GPT-4 and Claude 3.5 Sonnet gives you powerful AI capabilities for different use cases." }
    ],
    features: {
      codeCompletion: 5,
      contextAwareness: 5,
      languageSupport: 4,
      performance: 3,
      integration: 4,
      customization: 3,
      explanation: 4,
      bugDetection: 3,
      refactoring: 4
    },
    uniqueFeatures: [
      { title: "Context Finder", description: "Quickly locate and understand relevant code across your entire codebase, even in unfamiliar projects." },
      { title: "Composer Mode", description: "Generate entire files or complex functions with natural language descriptions of what you want to build." }
    ],
    coreFeatures: [
      "AI Code Completion with multi-line edits",
      "Natural Language Commands for code editing",
      "Composer Mode (Beta) for multi-file creation",
      "Context Finder for codebase understanding",
      "Codebase Chat with context-aware responses",
      "Error Detection and Correction",
      "Diff View for Changes before applying AI suggestions"
    ],
    technology: {
      base: "Fork of Visual Studio Code",
      aiModels: ["GPT-4", "Claude 3.5 Sonnet", "Other AI models"],
      implementation: [
        "Analyzes codebase by chunking code and creating embeddings",
        "Uses AI models for code semantic understanding",
        "Provides context-aware suggestions based on project structure",
        "Uploads local code to cloud services for processing"
      ]
    },
    pros: [
      "Productivity boost (20-30% faster coding reported)",
      "Familiar VS Code interface makes adoption easier",
      "Sophisticated AI integration",
      "Strong context awareness of project structure",
      "Helpful for learning unfamiliar codebases"
    ],
    cons: [
      "Stability issues, especially on Linux",
      "Privacy concerns with cloud processing",
      "Struggles with very complex, multi-file architectures",
      "API costs for team environments",
      "Limited language-specific deep understanding"
    ],
    targetUsers: [
      "Professional developers looking for efficiency gains",
      "New programmers learning to code",
      "Teams working on small to medium projects",
      "Developers needing to understand unfamiliar codebases"
    ],
    pricing: {
      freePlan: {
        price: 0,
        features: [
          "2,000 code autocompletions",
          "Limited access to advanced AI models"
        ]
      },
      proPlan: {
        price: 20,
        period: "monthly",
        features: [
          "Unlimited AI usage",
          "Advanced features"
        ]
      },
      businessPlan: {
        price: 40,
        period: "monthly",
        features: [
          "Enterprise features",
          "Team management"
        ]
      }
    },
    userFeedback: {
      overall: "Mixed but generally positive",
      notableUsers: ["Samsung", "Replicate", "Midjourney", "Shopify"],
      commonFeedback: "Best used alongside other tools rather than as complete replacement"
    },
    latestUpdates: {
      plannedImprovements: [
        "Enhanced multi-file editing",
        "Improved bug detection",
        "Better context retention"
      ]
    }
  },
  windsurf: {
    id: "windsurf",
    name: "Windsurf AI",
    logo: "/assets/images/windsurf-logo.svg",
    description: "Lightweight AI-powered code editor and coding assistant",
    tagline: "Lightweight AI coding partner",
    color: "#22c55e", // Green
    website: "https://getwindsurf.com",
    platforms: ["macOS", "Windows", "Linux", "Web"],
    languageSupport: ["JavaScript", "TypeScript", "Python", "Java", "Ruby", "PHP", "Go", "C#"],
    longDescription: "Windsurf AI is designed to be a lightweight yet powerful coding assistant that integrates with your development environment with minimal performance impact. It focuses on providing smart code suggestions while staying out of your way, making it ideal for developers who want AI assistance without sacrificing system resources.",
    keyStrengths: [
      { title: "Lightweight Performance", description: "Minimal system resource usage means your coding environment stays fast and responsive." },
      { title: "Multi-IDE Compatibility", description: "Works across various development environments for a consistent experience regardless of your editor preference." },
      { title: "Agentic Features", description: "Can autonomously handle tasks like file creation and code modification with minimal guidance." }
    ],
    features: {
      codeCompletion: 4,
      contextAwareness: 3,
      languageSupport: 3,
      performance: 5,
      integration: 4,
      customization: 3,
      explanation: 3,
      bugDetection: 3,
      refactoring: 2
    },
    uniqueFeatures: [
      { title: "Cascade Mode", description: "Powered by Claude Sonnet 3.5, this mode provides advanced suggestions with minimal latency." },
      { title: "Terminal Command Generation", description: "Can suggest and generate terminal commands based on natural language descriptions of what you want to accomplish." }
    ],
    coreFeatures: [
      "Lightweight design with minimal performance impact",
      "Real-time code suggestions and completions",
      "IDE integration capabilities",
      "Context-aware coding assistance",
      "Cascade mode powered by Claude Sonnet 3.5",
      "Agentic features for autonomous development tasks"
    ],
    technology: {
      implementation: [
        "Focuses on minimal system resource usage",
        "Multi-IDE compatibility",
        "Agentic system that can write code, create file structures",
        "Can generate terminal commands"
      ]
    },
    pros: [
      "Fast and lightweight with minimal system resource usage",
      "Multi-IDE compatibility for flexible workflow integration",
      "Smart code completions and inline suggestions",
      "Free tier makes it accessible for beginners",
      "Provides context-aware code assistance"
    ],
    cons: [
      "Less advanced debugging capabilities than competitors",
      "Fewer integrations than established tools like GitHub Copilot",
      "May not support as many programming languages",
      "Still developing its ecosystem and community",
      "Limitations in generating full code blocks compared to competitors"
    ],
    targetUsers: [
      "Developers seeking lightweight coding assistance",
      "Those preferring minimal workflow disruption",
      "Beginners wanting accessible AI coding help",
      "Developers working on smaller projects"
    ],
    pricing: {
      freeTier: {
        price: 0,
        features: [
          "Basic features"
        ]
      },
      paidSubscription: {
        price: 10,
        period: "monthly",
        features: [
          "Premium features"
        ]
      }
    },
    userFeedback: {
      benchmarkPerformance: "In prompt-to-API benchmark, created API with 10/15 endpoints working correctly on first attempt"
    },
    latestUpdates: {
      agenticFeatures: [
        "Code writing",
        "File structure creation",
        "Code modification",
        "Terminal command generation"
      ]
    }
  },
  trae: {
    id: "trae",
    name: "Trae",
    fullName: "The Real AI Engineer",
    logo: "/assets/images/trae-logo.svg",
    description: "AI-powered coding assistant by ByteDance with a unique approach to code completion",
    tagline: "The think-before-doing AI engineer",
    color: "#a855f7", // Purple
    website: "https://trae.ai",
    platforms: ["macOS", "Windows", "Linux"],
    languageSupport: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Go", "Ruby", "PHP", "Swift", "Rust", "C#"],
    longDescription: "Trae (The Real AI Engineer) takes a uniquely methodical approach to AI-assisted coding. Rather than providing instant suggestions, it thinks through problems systematically, breaking down complex tasks into manageable steps and providing a plan before implementation. This approach often leads to more accurate first-attempt solutions.",
    keyStrengths: [
      { title: "Think-Before-Doing", description: "Analyzes tasks thoroughly before providing solutions, resulting in more accurate code generation." },
      { title: "Multimodal Input", description: "Can process images, files, and directories for better context understanding of your projects." },
      { title: "Premium Models for Free", description: "Currently offers free access to powerful AI models including GPT-4 and Claude 3.5." }
    ],
    features: {
      codeCompletion: 4,
      contextAwareness: 5,
      languageSupport: 5,
      performance: 3,
      integration: 4,
      customization: 4,
      explanation: 5,
      bugDetection: 4,
      refactoring: 4
    },
    uniqueFeatures: [
      { title: "Builder Mode", description: "A systematic approach that plans out changes across multiple files with previews before implementation." },
      { title: "Comment-Driven Development", description: "Write comments describing what you want, and Trae implements the code for you." }
    ],
    coreFeatures: [
      "Suggests completions when hitting Enter for a new line",
      "Tab to accept all suggestions or Ctrl+→ for word-by-word acceptance",
      "Comment-driven generation - write comments, Trae implements",
      "Think-before-doing Builder mode that analyzes tasks before execution",
      "Systematic breakdown of project-wide operations with previews",
      "Multimodal input support - upload images, files, or directories",
      "GitHub integration",
      "Code reformatting capabilities",
      "Application design suggestions"
    ],
    technology: {
      base: "Built on VS Code foundation with redesigned interface",
      aiModels: ["GPT-4", "Claude 3.5"],
      implementation: [
        "Multi-agent system selecting best AI model for specific tasks",
        "Human-in-the-loop approach allowing review before applying AI suggestions",
        "Real-time terminal output monitoring"
      ]
    },
    pros: [
      "Cost-effective (currently free) with access to powerful AI models",
      "Fresh, redesigned interface built on familiar VS Code platform",
      "Methodical think-before-doing approach for more accurate first-attempt solutions",
      "Multimodal input support for better context understanding",
      "Seamless GitHub integration"
    ],
    cons: [
      "Lacks web access for external documentation lookup",
      "Potential data privacy concerns given ByteDance ownership",
      "Beta status means potential future changes in pricing or features",
      "Newer and less established than competitors"
    ],
    targetUsers: [
      "Developers seeking methodical AI assistance",
      "Users who prefer planning-first approach to code generation",
      "Programmers wanting free access to premium AI models"
    ],
    pricing: {
      current: "Free (Beta)",
      futurePlans: "No official information available"
    },
    userFeedback: {
      status: "In Beta - comprehensive feedback not yet available"
    },
    latestUpdates: {
      status: "Recently launched in Beta by ByteDance"
    }
  },
  githubCopilot: {
    id: "githubCopilot",
    name: "GitHub Copilot",
    logo: "/assets/images/github-copilot-logo.svg",
    description: "AI-powered coding assistant developed by GitHub in collaboration with OpenAI",
    tagline: "Your AI pair programmer",
    color: "#eab308", // Yellow
    website: "https://github.com/features/copilot",
    platforms: ["VS Code", "Visual Studio", "JetBrains IDEs", "Neovim", "Web"],
    languageSupport: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Go", "Ruby", "PHP", "Swift", "Rust", "C#", "HTML", "CSS", "Shell", "SQL"],
    longDescription: "GitHub Copilot is an AI pair programmer that helps you write better code by offering suggestions as you type. It's trained on billions of lines of code from public repositories and integrates seamlessly with your favorite editors. Copilot can generate whole functions, write tests, and help you navigate unfamiliar languages and frameworks.",
    keyStrengths: [
      { title: "Widespread Adoption", description: "The most widely used AI coding assistant with a large and established user base." },
      { title: "Extensive IDE Support", description: "Seamlessly integrates with all major development environments including VS Code, JetBrains, and Neovim." },
      { title: "Deep GitHub Integration", description: "Naturally works with GitHub features and understands GitHub repository structures." }
    ],
    features: {
      codeCompletion: 4,
      contextAwareness: 4,
      languageSupport: 5,
      performance: 4,
      integration: 5,
      customization: 3,
      explanation: 3,
      bugDetection: 3,
      refactoring: 3
    },
    uniqueFeatures: [
      { title: "Copilot Chat", description: "Interactive chat interface for asking coding questions and getting immediate help with specific code problems." },
      { title: "IDE-Native Experience", description: "Feels like a natural extension of your existing IDE rather than a separate tool." }
    ],
    coreFeatures: [
      "Intelligent Code Completion for lines or blocks",
      "Interactive Chat Functionality for coding questions",
      "Multi-file Editing",
      "Seamless IDE Integration with VS Code, JetBrains IDEs, Neovim",
      "Natural Language Processing to convert comments into code",
      "Bug Detection and Fixing"
    ],
    technology: {
      aiModels: ["Based on OpenAI models"],
      implementation: [
        "Trained on public repositories",
        "Integrates with popular IDEs",
        "Real-time code suggestion system"
      ]
    },
    pros: [
      "Enhanced Productivity (55% faster task completion reported)",
      "Reduces repetitive coding by automating boilerplate",
      "Serves as learning tool for new languages and frameworks",
      "Fits naturally into existing development processes",
      "50% faster time-to-merge for code changes"
    ],
    cons: [
      "Inconsistent performance with complex tasks",
      "Learning curve to use effectively",
      "Privacy concerns regarding training on public repositories",
      "Cost may be prohibitive for individuals or small teams",
      "Generated code sometimes requires review and modification"
    ],
    targetUsers: [
      "Professional developers seeking productivity boost",
      "Teams wanting to reduce time spent on boilerplate code",
      "Developers learning new languages or frameworks",
      "Organizations looking to streamline development workflows"
    ],
    pricing: {
      individualPlan: {
        price: 10,
        period: "monthly",
        annualPrice: 100
      },
      businessPlan: {
        price: 19,
        period: "monthly per user"
      },
      enterprisePlan: {
        price: 39,
        period: "monthly per user"
      },
      freePlan: {
        eligibility: [
          "Verified students",
          "Popular open-source project maintainers"
        ]
      }
    },
    userFeedback: {
      overall: "Generally positive for increasing productivity",
      bestUseCases: [
        "Generating standard functions and algorithms",
        "Completing repetitive code patterns",
        "Providing starting points for new features"
      ],
      cautions: "Many emphasize importance of code review and understanding"
    },
    latestUpdates: {
      status: "Continuing to evolve and improve as collaborative coding tool"
    }
  },
  comparison: {
    pricingComparison: {
      lowestToHighest: [
        "Trae (Free)",
        "Windsurf ($10/month)",
        "GitHub Copilot ($10/month)",
        "Cursor ($20/month)"
      ]
    },
    featureComparison: {
      multiFileEditing: [
        "Cursor",
        "GitHub Copilot",
        "Trae"
      ],
      methodologyApproach: {
        "Cursor": "Context-aware assistance",
        "Windsurf": "Lightweight efficiency",
        "Trae": "Think-before-doing planning approach",
        "GitHub Copilot": "Intelligent completion and chat"
      },
      basePlatform: {
        "Cursor": "VS Code fork",
        "Trae": "VS Code foundation with redesign",
        "GitHub Copilot": "IDE plugins"
      }
    },
    targetAudience: {
      beginners: [
        "Windsurf",
        "Trae",
        "GitHub Copilot"
      ],
      professionals: [
        "Cursor",
        "GitHub Copilot",
        "Trae"
      ],
      teams: [
        "GitHub Copilot",
        "Cursor"
      ],
      resourceLimited: [
        "Windsurf"
      ]
    },
    uniqueSellingPoints: {
      "Cursor": "Advanced context awareness and codebase understanding",
      "Windsurf": "Lightweight performance with minimal system impact",
      "Trae": "Think-before-doing systematic approach and free access to premium AI models",
      "GitHub Copilot": "Established platform with seamless integration and widespread adoption"
    }
  }
};

export default toolsData;