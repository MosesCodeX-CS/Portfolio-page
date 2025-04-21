import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Particle configuration
    const particlesArray = [];
    const numberOfParticles = 100;
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = this.getRandomColor();
      }
      
      // Get random color from theme palette
      getRandomColor() {
        const colors = [
          'rgba(59, 130, 246, 0.7)',  // Blue (Cursor)
          'rgba(34, 197, 94, 0.7)',   // Green (Windsurf)
          'rgba(168, 85, 247, 0.7)',  // Purple (Trae)
          'rgba(234, 179, 8, 0.7)'    // Yellow (GitHub Copilot)
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges
        if (this.x >= canvas.width || this.x <= 0) {
          this.speedX = -this.speedX;
        }
        
        if (this.y >= canvas.height || this.y <= 0) {
          this.speedY = -this.speedY;
        }
        
        // Reset if particle gets stuck
        if (
          this.x > canvas.width + 100 || 
          this.x < -100 || 
          this.y > canvas.height + 100 || 
          this.y < -100
        ) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Initialize particles
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    // Animate particles
    const animate = () => {
      // Use a semi-transparent background to create trail effect
      ctx.fillStyle = 'rgba(17, 24, 39, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw each particle
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      // Draw connections between nearby particles
      connectParticles();
      
      // Continue animation loop
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Connect particles that are close to each other
    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = 1 - distance / 100;
            ctx.strokeStyle = `rgba(147, 197, 253, ${opacity * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Start the animation
    init();
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 bg-transparent"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ParticleBackground;