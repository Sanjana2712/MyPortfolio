import React from 'react';

function SocialIcon(props) {
    const {link, icon, label} = props;
    return (
        <a target="_blank" aria-label={label}
           rel="noopener noreferrer" href={link}
           style={{
               display: 'inline-block',
               transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
           }}
           onMouseEnter={(e) => e.target.style.transform = 'scale(1.25)'}
           onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
            <i className={icon} aria-hidden="true"/>
        </a>
    );
}

export default SocialIcon;