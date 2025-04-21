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

const CertificationsSection = () => (
  <section id="certifications" className="py-20 px-4 bg-gray-900">
    <div className="container mx-auto">
      <h2 className="text-center mb-5 text-4xl font-bold">Certifications & Courses</h2>
      <p className="text-center text-lg mb-10 text-gray-300">My commitment to continuous learning is reflected in these industry-recognized credentials and specialized training programs:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, idx) => (
          <div key={idx} className="bg-gray-800/70 rounded-xl shadow-md p-6 flex flex-col h-full">
            <h5 className="font-bold text-xl mb-2">{cert.title}</h5>
            <p className="text-cyan-300 mb-1 text-sm">{cert.org} <span className="text-gray-400">({cert.date})</span></p>
            <p className="text-gray-300">{cert.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
