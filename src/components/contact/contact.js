import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Container, Grid, useTheme, useMediaQuery, Fade } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { ReactTyped as Typed } from 'react-typed';
import SocialIcon from "../home/SocialIcon";
import { info } from "../../info/Info";
import Style from './Contact.module.scss';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDarkMode = theme.palette.mode === 'dark';
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Show success message
    setIsSubmitted(true);
    // You might want to add actual form submission logic here
  };
  
  const handleNewMessage = () => {
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitted(false);
  };
  
  return (
    <Container maxWidth="lg">
      <Box 
        component="main" 
        sx={{
          py: 8,
          minHeight: 'calc(100vh - 175px)',
        }}
      >
        <Grid container spacing={5}>
          {/* Left side - Personal info */}
          <Grid item xs={12} md={5}>
            <Box 
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginTop:'1.8rem',
              }}
            >
              <Typography variant="h4" component="h1" gutterBottom>
                <span className={Style.highlight}>I'm glad you took the time to check out my work!</span>
              </Typography>
              
              <h2
                style={{
                  background: info.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <Typed
                  strings={info.contact}
                  typeSpeed={50}
                  backSpeed={50}
                  backDelay={1000}
                  loop
                  showCursor={true}
                />
              </h2>
              
              <Typography variant="body1" paragraph sx={{ mb: 4, mt: 2 }}>
                I'd love to hear from you! Whether you have a project in mind, 
                a question about my work, or just want to say hello, feel free to 
                reach out using the form or any of my social channels.
              </Typography>
              
              <Box 
                className={Style.social} 
                sx={{
                  display: 'flex',
                  gap: '1rem',
                  fontSize: isMobile ? '1.5rem' : '1.9rem',
                  flexWrap: 'wrap',
                  mb: 4
                }}
              >
                {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
                ))}
              </Box>
            </Box>
          </Grid>
          
          {/* Right side - Contact form */}
          <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper 
              elevation={3} 
              sx={{
                p: 4,
                borderRadius: 16,
                maxWidth: '90%',
                width: '500px',
                backgroundColor: isDarkMode ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
                }
              }}
              className={Style.formContainer}
            >
              {!isSubmitted ? (
                // Contact Form
                <>
                  <Typography 
                    variant="h5" 
                    component="h2" 
                    gutterBottom
                    sx={{ 
                      textAlign: 'center',
                      fontWeight: 'bold',
                      mb: 2
                    }}
                  >
                    Get In Touch
                  </Typography>
                  
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          margin="normal"
                          InputProps={{
                            className: Style.inputField
                          }}
                        />
                      </Grid>
                      
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          margin="normal"
                          InputProps={{
                            className: Style.inputField
                          }}
                        />
                      </Grid>
                      
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          multiline
                          rows={4}
                          variant="outlined"
                          margin="normal"
                          className={Style.messageBox}
                          placeholder="Share your thoughts, questions, or ideas—I'd love to hear them!"
                          InputProps={{
                            className: Style.messageInput
                          }}
                        />
                      </Grid>
                      
                      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button 
                          type="submit" 
                          variant="contained" 
                          size="large"
                          className={Style.submitButton}
                          sx={{
                            mt: 1,
                            px: 4,
                            background: '#0d2a54',
                            '&:hover': {
                              opacity: 0.9,
                              transform: 'scale(1.05)'
                            }
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </>
              ) : (
                // Success Message
                <Fade in={isSubmitted}>
                  <Box className={Style.successContainer}>
                    <CheckCircleOutlineIcon sx={{ 
                      fontSize: '4rem', 
                      color: '#4CAF50',
                      mb: 2
                    }} />
                    
                    <Typography 
                      variant="h5" 
                      component="h2"
                      sx={{ 
                        textAlign: 'center',
                        fontWeight: 'bold',
                        mb: 2
                      }}
                    >
                      Message Sent!
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        textAlign: 'center',
                        mb: 3
                      }}
                    >
                      Thank you for reaching out, {formData.name}! I've received your message and will get back to you as soon as possible.
                    </Typography>
                    
                    <Button 
                      variant="outlined"
                      onClick={handleNewMessage}
                      className={Style.newMessageButton}
                      sx={{
                        borderRadius: '30px',
                        px: 3,
                        py: 1,
                        mt: 2
                      }}
                    >
                      Send Another Message
                    </Button>
                  </Box>
                </Fade>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}