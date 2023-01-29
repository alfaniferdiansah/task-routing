import React from "react";
import Typed from "react-typed";

const Services = () => {
  return (
    <div className="header-wraper">
        <div className="main-info">
            <Typed
                className="typed-text1"
                strings={['Welcome to Services Page']}
                typeSpeed={40}
            />
        </div>
    </div>
  )
}

export default Services