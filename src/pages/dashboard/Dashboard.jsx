import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../component/navbar/NavBar";
import imageHero from "../../assets/img/learning-kids.jpg";
import { BsArrowRight } from "react-icons/bs";
import { SiSololearn } from "react-icons/si";

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <div
        className="bg-no-repeat bg-cover  text-center text-white md:p-20 p-4 h-screen"
        style={{ backgroundImage: `url(${imageHero})` }}
      >
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">Learning Center for your Kids</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            non aliquid soluta aperiam. vitae quis distinctio minus quod minima
            hic Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores non aliquid, soluta aperiam vitae quis distinctio minus
            quod minima hic?
          </p>
          <div className="flex items-center justify-center">
            <Link
              to={""}
              className="bg-RfGreen rounded  py-3 px-6 border z-50 flex items-center justify-center"
            >
              Explore Now <BsArrowRight className="ml-2" />{" "}
            </Link>
          </div>
        </div>
        <div className="md:flex flex-row items-center justify-around md:mt-[120px] md:space-x-6 mt-7 ">
          <div className="bg-RfBlue2 md:w-1/3 w-full p-8 text-left md:mb-0 mb-4">
            <div className="flex">
              <div className="border p-4 rounded-full bg-RfDark opacity-25 font-bold">
                <SiSololearn />
              </div>
            </div>
            <h2 className="cursor-pointer font-bold">Learn</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores non aliquid soluta aperiam vitae. quis distinctio minus
              quod minima hic?
            </p>
          </div>
          <div className="bg-RfOrange4 md:w-1/3 p-8 text-left md:mb-0 mb-4">
            <div className="flex">
              <div className="border p-4 rounded-full bg-RfDark opacity-25 font-bold">
                <SiSololearn />
              </div>
            </div>
            <h2 className="cursor-pointer font-bold">Play</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores non aliquid soluta aperiam vitae quis distinctio minus
              quod minima hic?
            </p>
          </div>
          <div className="bg-RfGreen p-8 md:w-1/3 text-left">
            <div className="flex">
              <div className="border p-4 rounded-full bg-RfDark opacity-25 font-bold">
                <SiSololearn />
              </div>
            </div>
            <h2 className="cursor-pointer font-bold">Meal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores non aliquid soluta aperiam vitae quis distinctio minus
              quod minima hic?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
