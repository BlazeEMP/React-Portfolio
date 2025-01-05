import { BrowserRouter } from 'react-router-dom';
import '../styles/pages/aboutMe.css';

const photoStyles = {
    width: '280px',
}

export default function AboutMe() {
    return (
        <div className="content-section">
            <h2>About Me</h2>
            <img src={"./mypic.jpg"} style={photoStyles} />
            <p className='about-me'>
                Welcome to my page! I won't bore you by telling you how much I love coding and how I've been doing it since I was 5 years old.
                Or even that I have a passion for creating beautiful, responsive websites. Those should happen naturally! (And I don't think anyone coded at 5 years old.)<br /><br />
                In reality, I enjoy learning how to really utilize the tools I use in multiple ways, and spread my knowledge so I can integrate at any level necessary.
                Whether it's adding a simple feature to a microcontroller project for personal home-automation, or creating a website for my friends business with modern tools and frameworks.<br /><br />
                I started coding and creating electronics in my high school years before turning 18. In high school I started with the Java and C++ classes that were offered.
                I also took all 4 levels of the electronics course receiving over 100% on my grade each time, while also becoming an impromptu teachers assistant for the lower level classes.
                That helped me develop my passion for creating functional and fun projects that I carry to this day. Since then I've developed a home lab and worked on C++ based Arduino projects intermittently as I found projects that interested me.
                Recently I've taken the deep-dive into full stack software engineering to better understand the everday services I use and start my journey in contributing to the wide world of the developers. While web development was the focus of my college bootcamp course, my personal experience is in basic embedded engineering so I have many perspectives to offer.<br /><br />
                I'm always looking for new projects to work on and new people to meet. If you're interested in working together, feel free to reach out to me!
            </p>
        </div>
    )
}