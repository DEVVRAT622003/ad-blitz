import React from 'react';

const OurTeam = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Devvrat Singh Rathore</h3>
          <p className="text-gray-600 mb-2">Email: dsr622003@gmail.com</p>
          <a href="https://www.linkedin.com/in/devvrat-singh-rathore-498726221/" className="text-blue-500">LinkedIn</a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Ashish Sharma</h3>
          <p className="text-gray-600 mb-2">Email: sharmaashish172004@gmail.com</p>
          <a href="https://www.linkedin.com/in/ashish-sharma-847a33221" className="text-blue-500">LinkedIn</a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Rahul Sharma</h3>
          <p className="text-gray-600 mb-2">Email: rahulraghavsharma2003@gmail.com</p>
          <a href="https://in.linkedin.com/in/rahul-sharma-6b7299228" className="text-blue-500">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
