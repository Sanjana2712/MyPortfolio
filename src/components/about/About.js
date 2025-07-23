import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About({innerRef, darkMode}) {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p style={{fontSize:'1.1rem',color: darkMode ? '#a8b2d1' : '#475569'}}> <span style={{color: darkMode ? '#4369ae' : '#1e293b', fontWeight:'bold'}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about {firstName} </p>
            <p style={{fontSize:'1.1rem',color: darkMode ? '#a8b2d1' : '#475569'}}><span style={{color: darkMode ? '#4369ae' : '#1e293b', fontWeight:'bold'}}>about{firstName} <span
                style={{color: darkMode ? '#64ffda' : '#60a5fa'}}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p style={{fontSize:'1.1rem',color: darkMode ? '#a8b2d1' : '#475569'}}><span style={{color: darkMode ? '#4369ae' : '#1e293b', fontWeight:'bold'}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p style={{fontSize:'1.1rem',color: darkMode ? '#a8b2d1' : '#475569'}}><span style={{color: darkMode ? '#4369ae' : '#1e293b', fontWeight:'bold'}}>skills/tools <span
                style={{color: darkMode ? '#64ffda' : '#60a5fa'}}>(main)</span> $</span> ls</p>
            <p style={{color: darkMode ? '#64ffda' : '#60a5fa', fontWeight:'bold', fontSize:'1.1rem'}}> Languages</p>
            <ul style={{fontSize:'1.1rem'}} className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li style={{color: darkMode ? '#a8b2d1' : '#475569'}} key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: darkMode ? '#64ffda' : '#60a5fa', fontWeight:'bold',  fontSize:'1.1rem'}}> Frameworks/Tools</p>
            <ul className={Style.skills}  style={{fontSize:'1.1rem'}}>
                {info.skills.exposedTo.map((skill, index) => <li style={{color: darkMode ? '#a8b2d1' : '#475569'}} key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return (
            <>
                <p style={{ fontSize: '1.1rem', color: darkMode ? '#a8b2d1' : '#475569' }}>
                    <span style={{ color: darkMode ? '#4369ae' : '#1e293b', fontWeight: 'bold' }}>{firstName}{info.lastName.toLowerCase()} $</span> cd hobbies/interests
                </p>
                <p style={{ fontSize: '1.1rem', color: darkMode ? '#a8b2d1' : '#475569' }}>
                    <span style={{ color: darkMode ? '#4369ae' : '#1e293b', fontWeight: 'bold' }}>hobbies/interests <span style={{ color: darkMode ? '#64ffda' : '#60a5fa', fontSize: '1.1rem' }}>(main)</span> $</span> ls
                </p>
                <ul className={`${Style.skills}`} style={{ fontSize: '1.1rem', color: darkMode ? '#a8b2d1' : '#475569', paddingLeft: '0' }}>
                    {info.hobbies.map((hobby, index) => (
                        <li key={index} style={{ color: darkMode ? '#a8b2d1' : '#475569' }}>
                            <Box component={'span'}>{hobby.emoji}</Box>
                            {hobby.label}
                        </li>
                    ))}
                </ul>
            </>
        );
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <Terminal text={aboutMeText()} darkMode={darkMode}/>
            <Terminal text={skillsText()} darkMode={darkMode}/>
            <Terminal text={miscText()} darkMode={darkMode}/>
        </Box>
    )
}