import React from "react";

const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    org: "Amazon Web Services",
    date: "Issued: June 2022",
    desc: "Mastered cloud architecture principles, designing scalable and cost-effective solutions on AWS, including EC2, S3, RDS, and VPC configurations. Applied these skills to deploy resilient applications for clients."
  },
  {
    title: "Full-Stack Web Development",
    org: "Coursera via University of Michigan",
    date: "Completed: March 2021",
    desc: "Completed a rigorous program covering HTML, CSS, JavaScript, React, Node.js, and MongoDB. Built a fully functional e-commerce platform as a capstone project, enhancing my full-stack expertise."
  },
  {
    title: "Docker and Kubernetes: The Practical Guide",
    org: "Udemy",
    date: "Completed: September 2022",
    desc: "Gained hands-on experience in containerization and orchestration, deploying a multi-container application with Kubernetes. This knowledge streamlined my DevOps workflows for faster deployments."
  },
  {
    title: "Cybersecurity Essentials",
    org: "Cisco Networking Academy",
    date: "Completed: December 2021",
    desc: "Learned foundational security concepts like threat detection, encryption, and secure coding practices. Implemented these techniques to protect client applications from common vulnerabilities."
  }
];

const CertificationsSection = ({ homePreview }) => (
  <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
    <div className="container mx-auto">
      <h2 className="text-center mb-5 text-4xl font-extrabold text-white drop-shadow">Certifications & Courses</h2>
      <p className={`text-center text-lg mb-10 ${homePreview ? 'text-cyan-200 font-medium drop-shadow' : 'text-gray-200'}`}>My commitment to continuous learning is reflected in these industry-recognized credentials and specialized training programs:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {(homePreview ? certifications.slice(0, 2) : certifications).map((cert, idx) => (
          <div key={idx} className={`${homePreview ? 'bg-gray-800/80 text-white shadow-2xl border border-gray-700 z-20' : 'bg-gray-800/70 text-white shadow-xl border border-gray-700'} rounded-2xl p-6 flex flex-col h-full relative`}>
            <h5 className={`font-bold text-xl mb-2 drop-shadow text-white`}>{cert.title}</h5>
            <p className={`mb-1 text-sm font-semibold text-cyan-300`}>{cert.org} <span className={`text-gray-400`}>({cert.date})</span></p>
            <p className={`text-gray-200 font-medium`}>{cert.desc}</p>
          </div>
        ))}
      </div>
      {homePreview && (
        <div className="text-center mt-10 z-20 relative">
          <a href="/certifications" className="btn btn-outline-primary btn-lg px-6 py-3 border border-cyan-500 text-cyan-400 rounded-full hover:bg-cyan-500/10 transition-colors font-bold shadow">View All Certifications</a>
        </div>
      )}
    </div>
  
  </section>
);

export default CertificationsSection;
