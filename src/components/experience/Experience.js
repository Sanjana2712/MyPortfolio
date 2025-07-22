import React from 'react';
import { Box, Typography } from '@mui/material';
import './Experience.css'; // Ensure this file contains the styles

export default function Experience() {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'DXC Technology',
      duration: 'Jan 2024 - Present',
      location: 'Remote, USA',
      responsibilities: [
        'Developed RESTful APIs with AWS Elasticsearch improving query performance by 20%',
        'Implemented JWT authentication and AWS SNS notifications boosting engagement by 23%',
        'Integrated AWS CloudWatch monitoring for PostgreSQL hosted on RDS',
        'Implemented global state management with Redux and Context API',
        'Authored API documentation and unit tests of React components'
      ]
    },
    {
      title: 'Graduate Teaching Associate',
      company: 'San Francisco State University',
      duration: 'Jan 2023 - Dec 2023',
      location: 'USA',
      responsibilities: [
        'Instructed bi-weekly classes for CSC-698: Topics in Computing and CSC-805: Data Visualization',
        'Guided a cohort of 50+ students through data visualization principles, D3.js, and Tableau',
        'Fostered a comprehensive understanding of core concepts in Information Visualization'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Infosys',
      duration: 'Aug 2021 - July 2022',
      location: 'Hyderabad, India',
      responsibilities: [
        'Developed RESTful APIs in Node.js achieving sub-200ms response times',
        'Improved integration testing with Jest and React Testing Library, achieving 85% code coverage',
        'Implemented OAuth2 and JWT security for authentication and backend security',
        'Utilized Prometheus for real-time system metrics monitoring and proactive issue resolution'
      ]
    },
    {
      title: 'Frontend Engineer Intern',
      company: 'Confegure',
      duration: 'May 2020 - Aug 2020',
      location: 'Hyderabad, India',
      responsibilities: [
        'Designed responsive UX frames for a food delivery system and a pet adoption application using Figma and Adobe XD',
        'Conducted user testing sessions and interviews to gather qualitative feedback',
        'Performed competitive analysis and leveraged design systems to establish a cohesive and user-centric interface',
        'Ensured optimal interaction across various devices'
      ]
    }
  ];

  // STEP 1: Detect mouse movement with addEventListener
  // STEP 2: Create a div element for the glow
  React.useEffect(() => {
    console.log('Step 1: Setting up mouse movement detection');
    console.log('Step 2: Creating glow div element');
    
    // Create a large soft spotlight cursor follower with cool blue theme colors
    const glowDiv = document.createElement('div');
    glowDiv.className = 'cursor-follower';
    glowDiv.style.cssText = `
      position: fixed;
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(12, 20, 35, 0.3) 0%, rgba(15, 23, 42, 0.2) 30%, rgba(20, 35, 67, 0.12) 50%, rgba(30, 58, 138, 0.06) 70%, transparent 85%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      opacity: 0.25;
      filter: blur(60px);
      transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
      mix-blend-mode: screen;
      will-change: transform;
    `;
    
    // Add the glow div to the body
    document.body.appendChild(glowDiv);
    console.log('Glow div created and added to DOM');
    
    const handleMouseMove = (e) => {
      console.log('Mouse detected at:', e.clientX, e.clientY);
      
      // Update glow position with smooth movement using requestAnimationFrame
      requestAnimationFrame(() => {
        glowDiv.style.left = e.clientX + 'px';
        glowDiv.style.top = e.clientY + 'px';
      });
      
      // Make glow always visible on entire page
      glowDiv.style.opacity = '1';
    };

    // Add event listener to detect mouse movement
    document.addEventListener('mousemove', handleMouseMove);
    console.log('Mouse event listener added');

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(glowDiv);
      console.log('Mouse event listener removed and glow div cleaned up');
    };
  }, []);

  return (
    <Box
      component="main"
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt="3rem"
      className="timeline-container"
    >
      <Box className="timeline">
        {experiences.map((exp, index) => (
          <Box key={index} className="timeline-item">
            <Box className="timeline-box" style={{marginTop:'0.1rem'}}>
              <Typography variant="subtitle2" className="duration">
                {exp.duration}
              </Typography>
              <Box className="timeline-content">
                <Typography style={{marginBottom:'0.3rem', fontWeight: '600'}}>
                  {exp.title}
                </Typography>
                <Typography style={{marginBottom:'0.8rem', color: '#9498a9', fontSize: '0.9rem'}}>
                  {exp.company}
                </Typography>
                <Typography className="description-text">
                  {exp.responsibilities.join('. ')}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}