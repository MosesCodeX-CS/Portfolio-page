import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaLinux } from "react-icons/fa";

const techIcons = [
  { icon: <FaReact />, color: "text-cyan-400" },
  { icon: <FaNodeJs />, color: "text-green-400" },
  { icon: <FaDocker />, color: "text-blue-400" },
  { icon: <FaAws />, color: "text-yellow-400" },
  { icon: <FaLinux />, color: "text-gray-400" },
];

const HeroSection = () => (
  <section id="hero" className="min-h-[60vh] flex flex-col justify-center items-center text-center relative z-20 select-none px-4 md:px-0 pt-24 md:pt-40">
    <div className="relative mb-4 flex justify-center items-center">
      {/* Animated blurred background ring */}
      <motion.div
        animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.07, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute w-44 h-44 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 blur-2xl opacity-70 z-0"
        style={{ filter: 'blur(24px)' }}
      />
      {/* Profile photo with bounce and pulse */}
      <motion.img
        src="/images/profile/Profile.png"
        alt="Moses Mwangi Profile"
        animate={{
          y: [0, -18, 0, 8, 0],
          scale: [1, 1.06, 1, 0.98, 1]
        }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-transparent bg-gradient-to-tr from-cyan-400 via-blue-400 to-purple-400 p-1 shadow-2xl object-cover z-10 animate-glow"
        style={{ boxShadow: '0 0 42px 8px #22d3ee55, 0 2px 16px 0 #0008' }}
      />
    </div>
    <motion.h1
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 1, type: 'spring', bounce: 0.25 }}
      className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-2 drop-shadow bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
    >
      <span className="block">Moses</span>
      <span className="block text-white">Software Developer</span>
    </motion.h1>
    {/* Tech icons row */}
    <motion.div
      className="flex justify-center gap-4 mb-4 mt-2 text-3xl md:text-4xl"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.13 } } }}
    >
      {techIcons.map((t, i) => (
        <motion.span
          key={i}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          className={`drop-shadow ${t.color}`}
        >
          {t.icon}
        </motion.span>
      ))}
    </motion.div>
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="text-base sm:text-lg md:text-xl text-cyan-200 font-medium mb-8 drop-shadow max-w-xl mx-auto"
    >
      Crafting elegant solutions through code and creativity
    </motion.p>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="flex flex-wrap justify-center gap-4"
    >
      <a
        href="#projects"
        className="px-7 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-200 border-2 border-transparent hover:border-cyan-300 animate-glow"
      >
        View Projects
      </a>
      <a
        href="#contact"
        className="px-7 py-3 bg-transparent border-2 border-cyan-400 rounded-full text-cyan-200 font-semibold text-lg shadow-lg hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all duration-200 animate-glow"
      >
        Contact Me
      </a>
    </motion.div>
  </section>
);

export default HeroSection;