import React from 'react';
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import {Box} from "@mui/material";

const iconClass = "fa fa-circle";

function Terminal(props) {
   const {text, darkMode} = props;

   return (
      <Box component={'section'} className={classNames(Style.terminal, Style.shadowed, darkMode ? Style.dark : Style.light)}
           width={{xs: '80%', md: '50%'}} borderRadius={'0.5rem'} mb={'4rem'}>
         <Box sx={{backgroundColor: darkMode ? '#222f43' : '#e5e7eb'}} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
              fontSize={'1rem'}>
            <i className={classNames(iconClass, Style.red)}/>
            <i className={classNames(iconClass, Style.amber)}/>
            <i className={classNames(iconClass, Style.green)}/>
         </Box>
         <Box py={{xs: '1rem', md: '2rem'}} px={{xs: '2rem', md: '3rem'}} borderRadius={'0 0 0.5rem 0.5rem'}
              sx={{backgroundColor: darkMode ? '#071120' : '#f6f8fa'}} fontSize={'1.4rem'} fontFamily={'Trebuchet MS'}>
            {text}
         </Box>
      </Box>
   );
}

export default Terminal;