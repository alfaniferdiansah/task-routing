import React from "react";
import Typed from "react-typed";

const Contact = () => {
  return (
    <div className="header-wraper">
        <div className="main-info">
            <Typed
                className="typed-text1"
                strings={['Welcome to Contact Page']}
                typeSpeed={40}
            />
        </div>
    </div>
  )
}

export default Contact