import React from 'react';
import { Box, Typography } from '@mui/material';
import './Experience.css';

export default function Experience({darkMode}) {

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'DXC Technology',
      duration: 'Jan 2024 — Present',
      location: 'Remote, USA',
      responsibilities: [
        'Built high-performance REST APIs with Elasticsearch achieving 400ms response times. Architected real-time analytics dashboards and monitoring systems processing 100k+ metrics per minute. Optimized React applications reducing load times by 20% while maintaining 85% test coverage.'
      ],
      techStack: ['React', 'JavaScript', 'AWS', 'PostgreSQL', 'CI/CD', 'Cypress', 'JWT']
    },
    {
      title: 'Graduate Teaching Associate',
      company: 'San Francisco State University',
      duration: 'Jan 2023 — Dec 2023',
      location: 'USA',
      responsibilities: [
        'Instructed bi-weekly classes for CSC-698: Topics in Computing and CSC-805: Data Visualization',
        'Guided a cohort of 50+ students through data visualization principles, D3.js, and Tableau',
        'Fostered a comprehensive understanding of core concepts in Information Visualization.'
      ],
      techStack: ['D3.js', 'Tableau', 'Power BI', 'Data Visualization', 'Teaching']
    },
    {
      title: 'Software Engineer',
      company: 'Infosys',
      duration: 'Aug 2021 — July 2022',
      location: 'Hyderabad, India',
      responsibilities: [
        'Optimized MongoDB performance achieving 40% faster query response times through advanced indexing strategies. Built robust React applications with Redux state management and comprehensive testing suites. Led code reviews and API documentation initiatives while working in Agile development cycles.'
      ],
      techStack: ['Node.js', 'MongoDB', 'Redux', 'Jest', 'New Relic']
    },
    {
      title: 'Frontend Engineer Intern',
      company: 'Confegure',
      duration: 'May 2020 — Aug 2020',
      location: 'Hyderabad, India',
      responsibilities: [
        'Developed responsive UX frameworks for food delivery and pet adoption platforms using Figma and Adobe XD. Conducted comprehensive user research including usability testing and competitive analysis to inform design decisions. Implemented design systems and cross-device compatibility standards, ensuring consistent user experiences across multiple touchpoints.'
      ],
      techStack: ['AdobeXD', 'A/B Testing', 'Figma', 'Bootstrap', 'Responsive Design']
    }
  ];

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
                  <Typography style={{ color: '#9498a9', marginBottom: '0.1rem', fontSize: '0.9rem' }}>
                    {exp.responsibilities.join('. ')}
                  </Typography>
                  
                  {/* Tech Stack Badges */}
                  <Box 
                    display="flex" 
                    flexWrap="wrap" 
                    gap="0.5rem" 
                    mt="1rem"
                    sx={{ paddingTop: '0.5rem' }}
                  >
                    {exp.techStack.map((tech, techIndex) => (
                      <Box
                        key={techIndex}
                        sx={{
                          backgroundColor: darkMode ? 'rgba(100, 255, 218, 0.1)' : '#ccfbf1',
                          color: darkMode ? '#64ffda' : '#0f766e',
                          padding: '0.4rem 0.75rem',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: '400',
                          display: 'inline-block',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
  );
}