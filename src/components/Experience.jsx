import React from 'react';
import { Timeline } from 'antd';
import Blinkit from "../assets/Blinkit-yellow-app-icon.svg.png";
import Amazon from "../assets/Amazon_logo.svg.png";
import scaler from "../assets/scaler-academy.png";
import Vymo from "../assets/vymo.png";


const Experience = () => {

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 text-2xl">Here is my professional experience </p>
        </div>
                <Timeline mode="alternate" className="max-w-screen-lg mx-auto p-4 text-white text-2xl font-raleway border-white" color ="white">
                <Timeline.Item color="white" label={<div classname="flex p-10 justfiy-end "><img
            src={Blinkit}
            alt="my profile"
            className="rounded-xl mx-auto w-48 h-48"
          /></div>}>
                    <p className="text-4xl">Blinkit</p>
                    <p className='text-base'>Software Developement Engineer</p>
                    <p className="text-gray text-xl">July 2022 - Present</p>
                    <p className="text-justify text-lg
">
                    ◦ Working with Inventory team to maintain the records of items at different warehouses across the country.<br/>
                    ◦ Introduced various notification systems which made the system more scalable and user-friendly.<br/>
                    ◦ Set up Grafana dashboard and decreased the error rate of new relic to 0.5 % for Movement team . Tech Stack : Python, Django, Jenkins, AWS.
                    </p>
                </Timeline.Item>
                <Timeline.Item color="white" label={<div classname="flex p-10 justfiy-end "><img
            src={Amazon}
            alt="my profile"
            className="rounded-xl mx-auto w-48 h-48"
          /></div>}>
                    <p className="text-4xl">Amazon</p>
                    <p className='text-base'>Software Developement Engineer Intern</p>
                    <p className="text-gray text-xl">Febraury 2022 - July 2022</p>
                    <p className="text-justify text-lg ">
                    ◦ Worked with Middle Mile Prod Tech Team as an Software Development Engineer Intern.<br/>
                    ◦ Worked as an On-call for a team for around 3 weeks, solved around 45 tickets for the team.<br/>
                    ◦ Built new software for the team which increased the overall efficiency by nearly 15%, and reduced the latency time, also
                      built new feature which saved a huge cost of the company and improved the current System Architecture of the
                        organization. Tech Stack : Java, AWS.
                    </p>
                </Timeline.Item>
                <Timeline.Item color="white" label={<img
            src={Vymo}
            alt="my profile"
            className="rounded-xl mx-auto"
          />}>
                    <p className="text-4xl">Vymo</p>
                    <p className='text-base'>Software Developement Engineer Intern</p>
                    <p className="text-gray text-xl">June 2021 - December 2021</p>
                    <p className="text-justify text-lg ">
                    ◦ Worked with Data Engineering team,working on building the data pipelines using big data tools like Kafka,Elastic
Search,Kibana, MongoDB,NodeJS,JavaScript,Jenkins.
                    </p>
                </Timeline.Item>
                <Timeline.Item color="white" label={<img
            src={scaler}
            alt="my profile"
            className="rounded-xl mx-auto w-40 h-40"
          />}>
                    <p className="text-4xl">InterviewBit</p>
                    <p className='text-base'>Teaching Assistant</p>
                    <p className="text-gray text-xl">Nobember 2020 - June 2021</p>
                    <p className="text-justify text-lg">
                    ◦ Framed new Problems on Data Structures and Algorithms, Solved Live and text help requests raised by students for
programming problems based on Data Structures and Algorithms.Resolved more than 1000+ DSA Problems.
                    </p>
                </Timeline.Item>
            </Timeline>
    
      </div>
    </div>
  );
};

export default Experience;
