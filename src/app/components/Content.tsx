'use client'
import React, { useEffect } from "react";
import Button from "./Button";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Content = () => {
  useEffect(() => {
    AOS.init({
      duration:1200,
      easing: 'ease-in-out'
    });
  }, []);
  return (
    <main>
      <div className="pt-16 pl-2" data-aos="fade-right">
        <h1 className="font-bold text-7xl" >WE ARE ONE OF PAKISTAN</h1>{" "}
        <h1 className="font-bold text-7xl"> FIRST COMMUNITY</h1>{" "}
        <h1 className="font-bold text-7xl"> BASED GYM</h1>
      </div>
      <div>
        <Button />
      </div>
      <hr className="w-1/3 border-2 border-yellow-400" />
      <div className="pt-60">
        <h1 className="font-bold text-5xl text-center bg-transparent underline" data-aos="zoom-in-up">
          Our Process
        </h1>
        <div className=" flex space-x-48 justify-center pt-11 items-center mt-40" data-aos="zoom-in-up">
          <div className="bg-yellow-400 border-2 border-dashed border-black hover:text-black shadow-xl shadow-red-900 rounded-full hover:rounded-b-xl w-48 h-44 hover:shadow-2xl hover:shadow-yellow-400 duration-500">
            <h1 className="font-bold text-2xl p-7 text-center">
              ANALIZE YOUR GOAL
            </h1>
          </div>
          <div className="bg-yellow-400 border-2 border-dashed border-black hover:text-black shadow-xl shadow-red-900 rounded-full hover:rounded-b-xl w-48 h-44 hover:shadow-2xl hover:shadow-yellow-400 duration-500">
            <h1 className="font-bold text-2xl p-7 text-center">
              WORK HARD ON IT
            </h1>
          </div>
          <div className="bg-yellow-400 border-2 border-dashed border-black hover:text-black shadow-xl shadow-red-900 rounded-full hover:rounded-b-xl w-48 h-44 hover:shadow-2xl hover:shadow-yellow-400 duration-500">
            <h1 className="font-bold text-2xl p-7 text-center">
              IMPROVE YOURSELFE NOW
            </h1>
          </div>
          <div className="bg-yellow-400 border-2 border-dashed border-black hover:text-black shadow-xl shadow-red-900 rounded-full hover:rounded-b-xl w-48 h-44 hover:shadow-2xl hover:shadow-yellow-400 duration-500">
            <h1 className="font-bold text-2xl p-7 text-center">
              YOU CAN DO IT BE POSITIVE
            </h1>
          </div>
          <div className="bg-yellow-400 border-2 border-dashed border-black hover:text-black shadow-xl shadow-red-900 rounded-full hover:rounded-b-xl w-48 h-44 hover:shadow-2xl hover:shadow-yellow-400 duration-500">
            <h1 className="font-bold text-2xl p-7 text-center">
              NOTHING IS IMPOSSIBLE
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center" data-aos="zoom-in-up">
  <h1 className="font-bold text-5xl text-white text-center p-14">Equipment</h1>
  <p className="text-center text-balance w-1/4 pb-11"> 
    At Structure Health & Fitness, we are dedicated to transforming your fitness aspirations into reality. Our range of fitness equipment is meticulously designed to cater to all your exercise needs, whether your a beginner or a seasoned athlete. From treadmills that propel you towards your cardio goals to weightlifting apparatus that build strength, our high-quality products ensure a holistic workout experience. Join us on the path to a healthier lifestyle, backed by the reliability of Structure Health & Fitness.
  </p>
</div>

    </main>
  );
};

export default Content;
