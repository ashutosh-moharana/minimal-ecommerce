import handlePayment from "../src/handlePayment";
import { useEffect, useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  async function fetchData(){
    const data = await fetch('https://minimal-ecommerce-backend.onrender.com')
  }
  
  useEffect(()=>{
    fetchData();
  },[])

  const handlePaymentClick = async () => {
    setIsClicked(true);
    setIsLoading(true);
    
    try {
      await handlePayment();
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setIsLoading(false);
      // Reset click animation after a short delay
      setTimeout(() => setIsClicked(false), 200);
    }
  };
  
  return (
    <div className="min-h-screen  bg-[#0C091D] text-white p-4 flex flex-col md:flex-row  md:justify-normal items-center overflow-hidden relative">
      {/* Three blurred Circles */}
      <div className=" size-[100px] absolute rounded-full md:size-[500px] bg-blue-700 left-0 top-0  -translate-1/2 md:-translate-x-20 md:-translate-y-48 blur-lg opacity-50"></div>
      <div className="size-[100px] absolute rounded-full md:size-[300px] bg-blue-700  top-0  translate-x-full ml-64 -translate-y-1/3 blur-lg opacity-50"></div>
      <div className="size-[100px] absolute rounded-full md:size-[500px] bg-blue-700/50 bottom-0 right-0 translate-1/2 blur-3xl z-3"></div>

      {/* Gaming Card */}
      <div className="relative  md:h-fit translate-y-8 md:translate-y-0 bg-blue-700 shadow-xl shadow-black md:rounded-4xl text-center md:ml-36 flex flex-col justify-center -rotate-90 p-8 rounded-full  ">
        <div className="font-bold md:font-extrabold text-4xl md:text-9xl text-white/15 ">
          GAMING
        </div>
        <div className="font-bold md:font-extrabold text-4xl md:text-9xl text-white/35 ">
          GAMING
        </div>
        <div className="font-bold md:font-extrabold text-4xl md:text-9xl text-white/55 ">
          GAMING
        </div>
        <div className="font-bold md:font-extrabold text-4xl md:text-9xl text-white/90 ">
          GAMING
        </div>
      </div>

      {/* Image  */}
      <div className=" absolute translate-y-14  md:block md:ml-66 z-3 mt-4 md:mt-4 hover:rotate-6 hover:scale-125 transition-all duration-500  ">
        <img src="/image.webp" alt="" className=" w-60  md:w-96   scale-150 " />
      </div>

      {/* Bottom Image */}
      <div className="absolute hidden md:block bottom-0 right-0  z-0 mt-4  brightness-50 md:scale-200 -rotate-45 translate-1/3 opacity-30">
        <img src="/image.webp" alt="" className="w-96 md:scale-150 " />
      </div>

      {/* Description Box */}
      <div className=" relative md:right-60 backdrop-blur-3xl md:h-2/3 rounded-4xl p-4 md:p-10 bg-[#2B2B2B]/40  md:block  md:pl-48 pt-16   md:space-y-5 ">
        <h1 className="text-3xl md:text-6xl font-extrabold tracking-wide">Dual Sense</h1>
        <p>Wireless Controller</p>
        <p className="text-3xl font-bold tracking-wider my-4">₹ 3200</p>

        <p className="text-justify md:tracking-wider">
          Wireless Gaming Controller, Joystick Gamepad with Dual-Vibration PC
          Game Controller Compatible with PS5, Switch, Windows 10/8/7 PC,
          Laptop, TV Box, Android Mobile Phones, 6.5 ft USB Cable
        </p>
        <button
          className={`p-4 rounded-full w-full mt-5 backdrop-blur-2xl bg-blue-700 text-[25px] font-bold transition-all duration-300 transform origin-center relative overflow-hidden ${
            isClicked 
              ? 'scale-95 shadow-lg shadow-blue-500/50' 
              : 'hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95'
          } ${isLoading ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}`}
          onClick={handlePaymentClick}
          disabled={isLoading}
        >
          {/* Loading Spinner */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-blue-700 rounded-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
          )}
          
          {/* Button Text */}
          <span className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
            {isLoading ? 'Processing...' : 'Buy Now'}
          </span>
          
          {/* Ripple Effect */}
          <div className={`absolute inset-0 bg-white/20 rounded-full transform scale-0 transition-transform duration-300 ${
            isClicked ? 'scale-100' : ''
          }`}></div>
        </button>
      </div>
      {/* Description Box End */}
    </div>
  );
};

export default Home;
