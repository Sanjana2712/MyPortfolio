import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio({innerRef, darkMode}) {
    return (
        <Box id={'portfolio'} ref={innerRef} sx={{ 
            px: { xs: 1, sm: 2, md: 3, lg: 4 },
            pt: { xs: 6, sm: 8, md: 9, lg: 10 }
        }}>
            <Grid container display={'flex'} justifyContent={'center'} spacing={4}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} sm={6} md={4} key={index}
                         sx={{
                            /* Mobile-only Grid fixes - force single column */
                            '@media (max-width: 767px)': {
                               width: '100%',
                               maxWidth: '100%',
                               flexBasis: '100%'
                            }
                         }}>
                       <PortfolioBlock 
                           image={project.image} 
                           live={project.live} 
                           source={project.source} 
                           title={project.title}
                           description={project.description}
                           darkMode={darkMode}
                       />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};