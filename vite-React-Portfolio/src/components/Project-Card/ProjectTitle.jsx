import React, { useState } from 'react';

const ProjectLinks = (props) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const styles = {
        backgroundImage: `linear-gradient( rgba(10,10,10,.4), rgba(10,10,10,.4) ), url(${props.bgImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        ...(isHovering && {
            backgroundImage: `linear-gradient( rgba(150,150,150,.2), rgba(150,150,150,.2) ), url(${props.bgImg})`,
        })
    };

    const spanStyles = {
        ...(isHovering && {
            visibility: 'visible',
        })
    };

    return (
        <div className="card-title" style={styles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <span style={spanStyles}>{props.title}</span>
        </div>
    )
}

export default ProjectLinks;