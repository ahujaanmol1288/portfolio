import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
            
        </p>

        <br />

        <p className="text-xl">
        A software engineer who loves to solve challenging problems. Also, an educator by passion likes teaching Data Structures & Algorithms in CPP.
<br/>
<br/>
Languages - C++, C, JavaScript, Java, Python
<br/>
Frameworks & Tools - Django, NodeJS, React, AWS, ExpressJS
<br/>

<br/>
Graduation - 
Jaypee Institute of Information Technology, Noida (Branch - Electronics And Communication Engineering) CGPA - 8.0/10

        </p>
      </div>
    </div>
  );
};

export default About;