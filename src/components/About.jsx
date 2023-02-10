import React from "react";

function About() {
  return (
    <div
      className="h-screen bg-center bg-cover bg-no-repeat bg-faded"
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1515162305285-0293e4767cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2h1cmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60)` }}
    >
      <div className="flex h-full justify-center items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-purple-600 mb-3">
            Welcome to Our Church!
          </h1>
          <p className="text-lg text-gray-700">
            Our church is a community of people who come together to worship God, learn from the Bible, and support each other. We believe in the power of prayer, the importance of family, and the transformative work of the Holy Spirit in our lives. 
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4">
            Join Us!
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
