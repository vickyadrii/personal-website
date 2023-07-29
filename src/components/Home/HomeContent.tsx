import { motion } from "framer-motion";

import shapeHeader from "/images/header-shape.png";

const HomeContent = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
        className="flex flex-col items-center"
      >
        <h2 className="text-primary font-extrabold xl:text-5xl md:text-4xl text-xl">
          Vicky Herdiansyah Adri.
        </h2>
        <div className="relative -z-10">
          <img
            src={shapeHeader}
            alt="shape header"
            className="absolute -z-10 md:bottom-0 bottom-1.5 xl:w-auto md:w-80 w-28"
          />
          <h1 className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-[#1487B9] to-[#1FC2F0] xl:text-[82px] md:text-[70px] text-[32px] font-bold">
            Frontend Engineer
          </h1>
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.5 }}
        className="md:text-[24px] max-w-3xl text-center text-slate-500 md:leading-10 leading-6"
      >
        <span className="font-semibold">
          2+ years of experience in front-end development,
        </span>{" "}
        using React.js for developing a website and web applications.
      </motion.p>
    </>
  );
};

export default HomeContent;
