import React, { useState } from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
   const { image, live, source, title } = props;

   // State to manage hover status for each button
   const [hoveredButton, setHoveredButton] = useState(null); // 'live' or 'source'

   // Inline styles for scaling on hover
   const buttonStyle = (button) => ({
      border: '1px solid #9498a9',
      borderRadius: '12px',
      padding: '0.6rem',
      transition: 'transform 0.2s ease',
      transform: hoveredButton === button ? 'scale(1.07)' : 'scale(1)', // Apply scale based on which button is hovered
   });

   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
          <Box 
            component={'img'} 
            src={image} 
            alt={'mockup'}
            style={{ 
                marginTop: '0.1rem',
                maxWidth: '80%' // Ensures responsiveness
            }}
         />
         <h1 style={{ fontSize: '1.5rem' }}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'row'} gap={'1rem'}
              alignItems={'center'} fontSize={'1.2rem'} py={'2rem'}>
            {/* <Box 
               style={buttonStyle('live')} // Pass 'live' to identify this button
               onMouseEnter={() => setHoveredButton('live')} 
               onMouseLeave={() => setHoveredButton(null)}
            >
               <IconLink link={live} title={'View Live'} icon={'fa fa-safari'} />
            </Box> */}
            <Box 
               style={buttonStyle('source')} // Pass 'source' to identify this button
               onMouseEnter={() => setHoveredButton('source')} 
               onMouseLeave={() => setHoveredButton(null)}
            >
               <IconLink link={source} title={'Check Code'} icon={'fa fa-code'} />
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;
