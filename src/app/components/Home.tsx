"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { title } from "process";
import { b } from "framer-motion/client";
import { url } from "inspector";

const slides = [
  {
    id: 1,
    title: "Estimated Tax return at No Cost",
    bgImage: "https://cleartaxfiler.com/old/img/slider/slider_bg.jpg",
    description: [
      "Get your taxes done quickly and accurately with Clear Tax Filer.",
    ],
  },
  {
    id: 2,
    title: "File Your Taxes in Just 4 Clicks",
    bgImage: "https://cleartaxfiler.com/old/img/slider/slider_bg_01.jpg",

    description: ["Tax Representation Services Simplifying Tax Process"],
  },
  {
    id: 3,
    title: "Say Goodbye to Tax stress",
    bgImage: "https://cleartaxfiler.com/old/img/slider/slider_bg_02.jpg",
    description: [
      "1. Get your taxes done quickly and accurately with Clear Tax Filer",
      "2. Tax Return Preparation",
      "3. Review The Tax Return and Make Payment",
      "4. Filing The Tax Return",
    ],
  },
  {
    id: 4,
    title: "Trust Us We are expertise",
    bgImage: "https://cleartaxfiler.com/old/img/slider/slider_bg_01.jpg",

    description: [
      "Don't let tax filing be a headache - let Clear Tax Filer do the work for you.",
    ],
  },
  {
    id: 5,
    title: " Authorized IRS e - File Provider",
    bgImage: "https://cleartaxfiler.com/old/img/slider/slider_bg_02.jpg",
    description: [
      "Don't let tax filing be a headache - let Clear Tax Filer do the work for you.",
    ],
  },
];

const slideVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const TaxLandingPage = ({ index }: any) => {
  return (
    <motion.div
      className="relative min-h-screen w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${slides[index].bgImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 pt-40">
        <div className="max-w-3xl flex flex-col h-full">
          <motion.h2
            className="text-white text-2xl font-bold mb-4"
            variants={slideVariants}
          >
            {slides[index].title}
          </motion.h2>

          <motion.div className="mb-6" variants={slideVariants}>
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white">
              {slides[index].title.split(" ").slice(0, -3).join(" ")}{" "}
              <span className="text-yellow-500">
                {slides[index].title.split(" ").slice(-3).join(" ")}
              </span>
            </h1>
          </motion.div>

          <motion.div
            className="text-white text-lg md:text-xl mb-8"
            variants={slideVariants}
          >
            {slides[index].description.map((desc: string, idx: number) => (
              <motion.p key={idx} variants={slideVariants}>
                {desc}
              </motion.p>
            ))}
          </motion.div>

          <motion.button
            className="relative bg-yellow-500 text-white px-6 py-5 rounded-md font-semibold overflow-hidden w-[250px] transition-all group delay-300 hover:bg-blue-950"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: { type: "spring", stiffness: 50, damping: 25 },
              },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <span className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 h-10 w-10 bg-blue-950 rounded-full transition-all duration-500 ease-in-out group-hover:h-full hover:w-full hover:rounded-none hover:p-20 "></span>
            <span className="relative z-10">CONTACT NOW</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  const slideVariants = {
    enter: (direction: any) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: any) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: any) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) => (prevIndex + newDirection + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 11000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-black "
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={slides[currentIndex].id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full"
        >
          <TaxLandingPage index={currentIndex} />
        </motion.div>
      </AnimatePresence>

      {showArrows && (
        <>
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-200 z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-200 z-20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;

export const FeaturesSection = () => {
  return (
    <div className="bg-gray-100 pb-[3cm]">
      <div className="flex justify-center gap-6 pt-0 mb-[3cm]">
        <div className="flex bg-white p-4 pr-6 pt-6 w-[350px] h-[200px]">
          <div className="flex items-center justify-center w-24 h-24 mr-4">
            <img
              src="https://cleartaxfiler.com/old/img/icon/sve-icon5.png"
              alt="24/7 Customer Support"
              className="w-16 h-16 object-contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-2 text-blue-900 font-sans">
              24/7 Customer Support
            </h3>
            <p className="text-gray-500 font-sans">
              Never worry, always support - 24/7 customer service.
            </p>
          </div>
        </div>

        <div className="flex bg-white p-4 pr-6 pt-6 w-[350px] h-[200px]">
          <div className="flex items-center justify-center w-24 h-24 mr-4">
            <img
              src="https://cleartaxfiler.com/old/img/icon/sve-icon4.png"
              alt="No Hidden Prices"
              className="w-16 h-16 object-contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-2 text-blue-900 font-sans">
              No Hidden Prices
            </h3>
            <p className="text-gray-500 font-sans">
              What you see is what you pay - no hidden prices.
            </p>
          </div>
        </div>

        <div className="flex bg-white p-4 pr-6 pt-6 w-[350px] h-[200px]">
          <div className="flex items-center justify-center w-24 h-24 mr-4">
            <img
              src="https://cleartaxfiler.com/old/img/icon/sve-icon6.png"
              alt="Money Back Guarantee"
              className="w-16 h-16 object-contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-2 text-blue-900 font-sans">
              Money Back Guarantee
            </h3>
            <p className="text-gray-500 font-sans">
              Satisfaction guaranteed or your money back.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CreateDesign = () => {
  return (
    <motion.div
      className="relative h-[80vh] bg-[url('https://cleartaxfiler.com/old/img/bg/cta_bg02.jpg')] bg-cover bg-center flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <h1 className="text-white font-bold text-4xl sm:text-6xl mb-4">
          No tricks, no traps - just
        </h1>
        <p className="text-white text-lg sm:text-xl font-medium">
          STRAIGHTFORWARD PRICING WE'RE HERE FOR YOU, DAY OR NIGHT 24/7 SERVICES
        </p>
        <div className="mt-6">
          <motion.button
            className="relative bg-blue-950 text-white px-6 py-5 rounded-md font-semibold overflow-hidden w-[250px] transition-all group delay-300 hover:bg-yellow-500"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: { type: "spring", stiffness: 50, damping: 25 },
              },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <span className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 h-10 w-10 bg-yellow-500 rounded-full transition-all duration-500 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-none group-hover:p-20"></span>
            <span className="relative z-10">CONTACT NOW</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-white">
      <div className="w-full md:w-1/2">
        <img
          src="https://cleartaxfiler.com/old/img/features/about_img_02.jpg"
          alt="About Us"
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
        <h2 className="text-3xl font-bold text-blue-950 mb-6">About Us</h2>
        <p className="text-gray-700 leading-7 mb-4">
          Every year, The US citizens are busy in preparing the income tax
          return. Many people try to do it in-house whereas, many people decide
          to outsource the task because they feel it is quite complex. When you
          assign the work to Clear Tax Filer, the New Hampshire registered
          company formed by a bunch of IRS Certified Professionals with most
          experience and dedicated people who know the ins and outs of dealing
          with a variety of tax matters; it is guaranteed that you do it
          flawlessly. Our diversified experience gives us the capability of
          handling the full spectrum of tax returns, process with ease and
          confidence.
        </p>
        <p className="text-gray-700 leading-7 mb-6">
          Our aim is to offer services of tax filing that are secure, smooth and
          easy. We want to offer the best protection and support that you expect
          from the tax filing consultants. We continue to establish our growing
          presence and ever-increasing market share in the tax consultancy
          market. Even if there are hundreds and thousands of tax filing
          services operating in the niche, we want to outshine in the fiercely
          competitive market.
        </p>

        <motion.button
          className="relative bg-blue-950 text-white px-6 py-4 rounded-md font-semibold overflow-hidden w-[200px] transition-all group delay-300 hover:bg-yellow-500"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 50, damping: 25 },
            },
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <span className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 h-10 w-10 bg-yellow-500 rounded-full transition-all duration-500 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-none group-hover:p-20"></span>
          <span className="relative z-10">READ MORE</span>
        </motion.button>
      </div>
    </div>
  );
};
