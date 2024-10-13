import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 xl:w-1/3">
            <h4 className="text-2xl font-bold mb-4 text-black">Structure Health & Fitness</h4>
            <p className="text-gray-600">
              Structure Health & Fitness Is The Best Gym For Ladies & Gents Located In Gulberg Lahore, Pakistan. A Top-notch Health Fitness Club With Experienced Trainers & Latest Gym Equipment.
            </p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3">
            <h4 className="text-2xl font-bold mb-4 text-black">Quick Links</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-600">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-600">Services</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-blue-600">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3">
            <h4 className="text-2xl font-bold mb-4 text-black">Contact Us</h4>
            <p className="text-gray-600">
              Address: North Karachi, Pakistan
              <br />
              Phone: +92 123 456 7890
              <br />
              Email: <a href="#" className="text-gray-600 hover:text-blue-600">iamhammad224@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-600">&copy; 2024 Structure Health & Fitness Hammad. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;