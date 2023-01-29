import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
        <div className="main-info">
            <Typed
                className="typed-text1"
                strings={['hello my name is ferdi, i build things for the web. i am a software engineer specializing. i am focussed on building responsive app']}
                typeSpeed={40}
            />
            <h1>list of my current skill as fullstack web development</h1>
            <Typed 
                className="typed-text2"
                strings={["HTML/CSS", "JavaScript", "Bootstrap", "ReactJS", "NodeJS", "MongoDB", "MySQL"]}
                typeSpeed={60}
                backSpeed={60}
                loop
            />
            <Link to='/contact'>
              <p className="btn-main">contact me</p>
            </Link>
        </div>
    </div>
  )
}

export default Header
