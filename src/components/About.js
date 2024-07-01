import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-lg mt-5">
          I am a dedicated software developer specializing in React.js and
          Spring Boot, with a proven track record in delivering dynamic and
          responsive web applications. My experience extends beyond development,
          as I have also contributed significantly as a QA member, ensuring the
          reliability and performance of applications through rigorous testing
          methodologies. In my development work, I emphasize clean code
          practices and maintainable architectures, leveraging React.js to
          create intuitive user interfaces that enhance user engagement and
          satisfaction. With Spring Boot, I design efficient back-end systems
          that support seamless integration with front-end components,
          optimizing performance and scalability. 
        </p>
        <br />
        <p className="text-lg mt-5">My background in quality
          assurance equips me with a keen understanding of software testing
          strategies and automation tools, enabling me to identify and resolve
          issues early in the development lifecycle. I thrive in collaborative
          environments, where my ability to communicate effectively and adapt
          quickly contributes to successful team dynamics and project outcomes.
          Driven by a passion for continuous learning and innovation, I stay
          updated with the latest trends and best practices in software
          development. I am committed to delivering solutions that not only meet
          but exceed client expectations, leveraging my diverse skill set to
          tackle challenges and deliver impactful results.</p>
      </div>
    </div>
  );
};

export default About;
