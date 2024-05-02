import Navbar from "../components/Navbar";
import { TypeAnimation } from 'react-type-animation';
import sarajevo from "../assets/images/sarajevo.svg";


const LandingPage = () => {
  return (
    <div className="bg-gradient-to-l from-[#C679FF] via-[#DDB2E3] to-[#C77FFD]">
      <Navbar />
      <div
        className="flex items-start justify-center h-screen px-40"
        style={{
          backgroundImage: `url(${sarajevo})`, 
          backgroundSize: '100vw auto', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-[50%] text-center">
          <div className="font-Montserrat text-[36px] text-white">
            <TypeAnimation
              sequence={[
                'Your gateway to Sarajevo\'s cultural heartbeat, simplifying event discovery and participation.',
                2000, // wait 2 seconds before repeating
              ]}
              wrapper="span"
              speed={30}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </div> 
          <button
            onClick={() => {
              window.location.href = `/evently/register`;
            }}
            className="mt-8 bg-[#9B62C5] text-white px-5 rounded-2xl border-white font-Montserrat tracking-wide py-1"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
