import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="hero-section">
        <div className="w-[350px] px-[16px] lg:w-[637px]">
          <p className="hero-text">
            I'm Ketan <span>front-end developer</span>
          </p>
          <p className="hero-sub-text">
            I craft responsive web application where technologies meet
            creativity
          </p>
          <div className="flex items-start gap-[14px] lg:gap-[20px]">
            <a href="#contact">
              <button className="contact-btn">Contact me!!</button>
            </a>
            <a
              href="Ketan_Resume.pdf"
              download="Ketan_Resume.pdf"
              className="contact-btn"
            >
              {`Resume`}
            </a>
          </div>
        </div>
        <div className="hidden md:flex lg:flex justify-end items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="114"
            height="114"
            fill="none"
            viewBox="0 0 114 114"
          >
            <mask id="path-1-inside-1_312_348" fill="#fff">
              <path
                fillRule="evenodd"
                d="M57.5 0H114v84.75H57.5V56.5h28.25V28.25H57.5V0z"
                clipRule="evenodd"
              ></path>
            </mask>
            <path
              fill="#C778DD"
              d="M57.5 0v-1h-1v1h1zM114 0h1v-1h-1v1zm0 84.75v1h1v-1h-1zm-56.5 0h-1v1h1v-1zm0-28.25v-1h-1v1h1zm28.25 0v1h1v-1h-1zm0-28.25h1v-1h-1v1zm-28.25 0h-1v1h1v-1zM85.75-1H57.5v2h28.25v-2zM114-1H85.75v2H114v-2zm1 29.25V0h-2v28.25h2zm0 28.25V28.25h-2V56.5h2zm0 28.25V56.5h-2v28.25h2zm-29.25 1H114v-2H85.75v2zm0-2H57.5v2h28.25v-2zm-27.25 1V56.5h-2v28.25h2zm-1-27.25h28.25v-2H57.5v2zm27.25-29.25V56.5h2V28.25h-2zm-27.25 1h28.25v-2H57.5v2zM56.5 0v28.25h2V0h-2z"
              mask="url(#path-1-inside-1_312_348)"
            ></path>
            <mask
              id="path-3-outside-2_312_348"
              width="59"
              height="87"
              x="0"
              y="27.25"
              fill="#000"
              maskUnits="userSpaceOnUse"
            >
              <path fill="#fff" d="M0 27.25H59V114.25H0z"></path>
              <path
                fillRule="evenodd"
                d="M1 28.25h56.5V56.5H29.25v28.25H57.5V113H1V28.25z"
                clipRule="evenodd"
              ></path>
            </mask>
            <path
              fill="#C778DD"
              d="M1 28.25v-1H0v1h1zm56.5 0h1v-1h-1v1zm0 28.25v1h1v-1h-1zm-28.25 0v-1h-1v1h1zm0 28.25h-1v1h1v-1zm28.25 0h1v-1h-1v1zm0 28.25v1h1v-1h-1zM1 113H0v1h1v-1zm28.25-85.75H1v2h28.25v-2zm28.25 0H29.25v2H57.5v-2zm1 29.25V28.25h-2V56.5h2zm-29.25 1H57.5v-2H29.25v2zm1 27.25V56.5h-2v28.25h2zm-1 1H57.5v-2H29.25v2zm27.25-1V113h2V84.75h-2zm1 27.25H29.25v2H57.5v-2zM1 114h28.25v-2H1v2zM0 84.75V113h2V84.75H0zM0 56.5v28.25h2V56.5H0zm0-28.25V56.5h2V28.25H0z"
              mask="url(#path-3-outside-2_312_348)"
            ></path>
          </svg>
        </div>
      </div>
      {/* joke section  */}
      <div className="joke-section relative">
        <div className="pair-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="21"
            fill="none"
            viewBox="0 0 26 21"
          >
            <path
              fill="#ABB2BF"
              d="M10.56 15.616c0 1.43-.523 2.635-1.568 3.616-1.024.981-2.272 1.472-3.744 1.472-1.515 0-2.773-.49-3.776-1.472C.491 18.251 0 17.045 0 15.616c0-.683.096-1.408.288-2.176.192-.768.576-1.76 1.152-2.976L6.4 0h4.8L8.544 11.584a4.67 4.67 0 011.44 1.696c.384.683.576 1.461.576 2.336zm14.24 0c0 1.43-.523 2.635-1.568 3.616-1.045.981-2.293 1.472-3.744 1.472-1.472 0-2.72-.49-3.744-1.472-1.003-.981-1.504-2.187-1.504-3.616 0-.683.096-1.408.288-2.176.192-.768.587-1.76 1.184-2.976L20.704 0h4.768l-2.688 11.584c.619.427 1.11.992 1.472 1.696.363.683.544 1.461.544 2.336z"
            ></path>
          </svg>
        </div>
        <div className="pair-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="21"
            fill="none"
            viewBox="0 0 26 21"
          >
            <path
              fill="#ABB2BF"
              d="M10.56 15.616c0 1.43-.523 2.635-1.568 3.616-1.024.981-2.272 1.472-3.744 1.472-1.515 0-2.773-.49-3.776-1.472C.491 18.251 0 17.045 0 15.616c0-.683.096-1.408.288-2.176.192-.768.576-1.76 1.152-2.976L6.4 0h4.8L8.544 11.584a4.67 4.67 0 011.44 1.696c.384.683.576 1.461.576 2.336zm14.24 0c0 1.43-.523 2.635-1.568 3.616-1.045.981-2.293 1.472-3.744 1.472-1.472 0-2.72-.49-3.744-1.472-1.003-.981-1.504-2.187-1.504-3.616 0-.683.096-1.408.288-2.176.192-.768.587-1.76 1.184-2.976L20.704 0h4.768l-2.688 11.584c.619.427 1.11.992 1.472 1.696.363.683.544 1.461.544 2.336z"
            ></path>
          </svg>
        </div>
        With great power comes great electricity bill
        <div className="joke-sub-text">- Dr. Leo</div>
      </div>

      <div className="deco-box hidden lg:block"></div>
    </div>
  );
};

export default HeroSection;
