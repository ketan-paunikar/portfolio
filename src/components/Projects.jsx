import React, { useState } from "react";
import mustang from "../assest/images/mustang.jpg";
import veg from "../assest/images/veg.jpeg";
import tiger from "../assest/images/tiger.jpeg";
import tree from "../assest/images/tree.jpeg";

const Projects = () => {
  const [loadMore, setLoadMote] = useState(false);

  const projectData = [
    {
      id: 0,
      imagePath: mustang,
      techStack: "HTMl CSS JavaScript React",
      title: "Project 1",
      dec: "Server hosting",
    },
    {
      id: 1,
      imagePath: veg,
      techStack: "HTMl CSS JavaScript React",
      title: "Project 1",
      dec: "Server hosting",
    },
    {
      id: 2,
      imagePath: tiger,
      techStack: "HTMl CSS JavaScript React",
      title: "Project 1",
      dec: "Server hosting",
    },
    {
      id: 3,
      imagePath: tree,
      techStack: "HTMl CSS JavaScript React",
      title: "Project 1",
      dec: "Server hosting",
    },
  ];
  return (
    <div
      id="works"
      className="flex justify-between items-center mt-[125px] md:mt-[125px] lg:mt-[74px]"
    >
      <div className="project-div">
        <div className="flex justify-between items-center mb-[48px] lg:mb-[48px]">
          <div className="projects-header flex justify-start items-center ">
            <span>#</span>projects{" "}
            <svg
              className="ml-[16px] lg:block hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="511"
              height="2"
              fill="none"
              viewBox="0 0 511 2"
            >
              <path
                fill="#C778DD"
                fillRule="evenodd"
                d="M511 1.5H0v-1h511v1z"
                clipRule="evenodd"
              ></path>
            </svg>
            {/* mobile  */}
            <svg
              className="ml-[16px] lg:hidden blocl"
              xmlns="http://www.w3.org/2000/svg"
              width="121"
              height="4"
              fill="none"
              viewBox="0 0 511 2"
            >
              <path
                fill="#C778DD"
                fillRule="evenodd"
                d="M511 1.5H0v-1h511v1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div
            className="view-all"
            onClick={() => [setLoadMote(!loadMore)]}
          >{`${loadMore ? "View less ~~>" : "View all ~~>"}`}</div>
        </div>
        <div className="grid-layout">
          {loadMore
            ? projectData.map((item, index) => {
                return (
                  <div key={index} className="project-box">
                    <div className="overflow-hidden">
                      <img
                        className="project_image"
                        src={item.imagePath}
                        alt="..."
                      />
                    </div>
                    <p className="tech-stack-text">{item.techStack || "-"}</p>
                    <div className="project-content">
                      <p className="project-title">{item.title || "-"}</p>
                      <p className="project-sub-text">{item.dec || "-"}</p>
                      <a className="live-btn">{`Live <~>`}</a>
                    </div>
                  </div>
                );
              })
            : projectData.map((item, index) => {
                if (index <= 2) {
                  return (
                    <div key={index} className="project-box">
                      <div className="overflow-hidden">
                        <img
                          className="project_image"
                          src={item.imagePath}
                          alt="..."
                        />
                      </div>
                      <p className="tech-stack-text">{item.techStack || "-"}</p>
                      <div className="project-content">
                        <p className="project-title">{item.title || "-"}</p>
                        <p className="project-sub-text">{item.dec || "-"}</p>
                        <a className="live-btn">{`Live <~>`}</a>
                      </div>
                    </div>
                  );
                }
              })}
          {/* {projectData.map((item, index) => {
            return (
              <div key={index} className="project-box">
                <div className="overflow-hidden">
                  <img
                    className="project_image"
                    src={item.imagePath}
                    alt="..."
                  />
                </div>
                <p className="tech-stack-text">{item.techStack || "-"}</p>
                <div className="project-content">
                  <p className="project-title">{item.title || "-"}</p>
                  <p className="project-sub-text">{item.dec || "-"}</p>
                  <a className="live-btn">{`Live <~>`}</a>
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
