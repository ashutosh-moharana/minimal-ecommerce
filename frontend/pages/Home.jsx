import handlePayment from "../src/handlePayment";
const Home = () => {
  return (
    <div className="h-screen bg-[#0C091D] text-white p-4 flex items-center overflow-hidden relative">
      <div className=" absolute rounded-full size-[500px] bg-blue-700 left-0 top-0 -translate-x-20 -translate-y-48 blur-lg opacity-50"></div>

      <div className=" absolute rounded-full size-[300px] bg-blue-700  top-0  translate-x-full ml-64 -translate-y-1/3 blur-lg opacity-50"></div>
      <div className=" absolute rounded-full size-[500px] bg-blue-700/50 bottom-0 right-0 translate-1/2 blur-3xl z-3"></div>

      <div className=" bg-blue-700 shadow-xl shadow-black rounded-4xl text-center ml-36 flex flex-col justify-center -rotate-90 p-8 relative ">
        <div className="font-extrabold text-9xl text-white/15 ">
          GAMING
        </div>
        <div className="font-extrabold text-9xl text-white/35 ">
          GAMING
        </div>
        <div className="font-extrabold text-9xl text-white/55 ">
          GAMING
        </div>
        <div className="font-extrabold text-9xl text-white/90 ">
          GAMING
        </div>
      </div>
      <div className="absolute  ml-66 z-3 mt-4 hover:rotate-6 hover:scale-125 transition-all duration-500  ">
        <img src="/image.png" alt="" className="w-96   scale-150 " />
      </div>

      <div className="absolute bottom-0 right-0  z-0 mt-4  brightness-50 scale-200 -rotate-45 translate-1/3 opacity-30">
        <img src="/image.png" alt="" className="w-96 scale-150 " />
      </div>

      <div className=" relative right-60 backdrop-blur-3xl h-2/3 rounded-4xl p-10 bg-[#2B2B2B]/40 pl-48 space-y-5 ">
        <h1 className="text-6xl font-extrabold tracking-wide">Dual Sense</h1>
        <p>Wireless Controller</p>
        <p className="text-3xl font-bold tracking-wider my-4">₹ 3200</p>
       
        <p className="text-justify tracking-wider">Wireless Gaming Controller, Joystick Gamepad with Dual-Vibration PC Game
        Controller Compatible with PS5, Switch, Windows 10/8/7 PC, Laptop, TV
        Box, Android Mobile Phones, 6.5 ft USB Cable</p>
        <button className="p-4 rounded-full w-full mt-5 backdrop-blur-2xl bg-blue-700 text-[25px] font-bold hover:scale-95 transition-transform duration-200  transform origin-center" onClick={handlePayment}><span>Buy Now</span></button>
      </div>
    </div>
  );
};

export default Home;
