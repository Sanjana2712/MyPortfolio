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
      responsibilities: 'Developed RESTful APIs with AWS Elasticsearch improving query performance by 20%. Implemented JWT authentication and AWS SNS notifications boosting engagement by 23%. Integrated AWS CloudWatch monitoring for PostgreSQL hosted on RDS . Implemented global state management with Redux and Context API. Authored API documentation and unit tests of React components.'
    },
    {
      title: 'Graduate Teaching Associate',
      company: 'San Francisco State University',
      duration: 'Dec 2023 - Dec 2024',
      location: 'USA',
      responsibilities: 'Instructed bi-weekly classes for CSC-698: Topics in Computing and CSC-805: Data Visualization. Guided a cohort of 50+ students through data visualization principles, D3.js, and Tableau; fostering a comprehensive understanding of core concepts in Information Visualization.'
    },
    {
      title: 'Software Engineer',
      company: 'Infosys',
      duration: 'Aug 2021 - July 2022',
      location: 'Hyderabad, India',
      responsibilities: 
        'Developed RESTful APIs in Node.js achieving sub-200ms response times. Improved integration testing with Jest and React Testing Library, achieving 85% code coverage. Implemented OAuth2 and JWT security for authentication and backend security. Utilized Prometheus for real-time system metrics monitoring and proactive issue resolution.'
    },
    {
      title: 'Frontend Engineer Intern',
      company: 'Confegure',
      duration: 'May 2020 - Aug 2020',
      location: 'Hyderabad, India',
      responsibilities: 
        'Designed responsive UX frames for a food delivery system and a pet adoption application using Figma and Adobe XD. Conducted user testing sessions and interviews to gather qualitative feedback. Performed competitive analysis and leveraged design systems to establish a cohesive and user-centric interface, ensuring optimal interaction across various devices.'
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
                <Typography style={{marginBottom:'0.6rem'}}>
                  {exp.title} · {exp.company}
                </Typography>
                <Typography style={{ color: '#9498a9', marginBottom: '0.1rem', fontSize: '0.9rem' }}>
                {exp.responsibilities}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}