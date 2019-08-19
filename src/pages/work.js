import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import Nav from "../components/nav";

import Cyber from "../markdowns/cyber.md";

const Intro = () => <div>KYLIN IS DREAMING IN CYBER SPACE</div>;

const projectListData = [
  {
    title: "cyber",
    url: "/cyber",
    subtitle: "Creating Transparent and Human-centric A.I. Dashboard",
    thumbnailAddress: " ",
    tags: ["Product Design", "Data Visualization", "UI/UX"]
  }
];

const ProjectCard = props => (
  <div>
    {/*<div>{props.title}</div>*/}
    <div>{props.subtitle}</div>
    <div>
      tags:{" "}
      {props.tags.map(t => (
        <span>{t}</span>
      ))}
    </div>
    <button>
      <Link to={props.url}>Go to project</Link>
    </button>
  </div>
);

const ProjectList = () => (
  <div>
    {projectListData.map(el => (
      <ProjectCard {...el} />
    ))}
  </div>
);

const Work = () => (
  <div>
    <Nav />
    <Intro />
    <ProjectList />
  </div>
);

export default Work;
