import CountUp, { useCountUp } from 'react-countup';
import Lottie from 'lottie-react';
import Scene5 from '../public/scene5.json';

type Props = {};
const Header = (props: Props) => {
  useCountUp({
    ref: 'counter',
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div className="bg-[#0E1D34] head ">
      <div className="container mx-auto  pt-[20px] text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[32px] font-semibold cursor-pointer">Logo</h1>
          </div>
          <div className="flex items-center gap-[50px]">
            <ul className="flex items-center gap-[40px] cursor-pointer font-semibold">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Dropdown</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <button className="bg-[#2756FF] py-[10px] px-[20px] text-white text-[16px] font-semibold tracking-[0.4px] cursor-pointer rounded-[7px]">
              Get a Quote
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-[40px] pb-[40px] animate-pulse">
          <div className="text-white">
            <h1 className="text-[48px] leading-[58px] w-[60%] font-bold mt-[50px]">
              Fast and Reliable Internet
            </h1>
            <p className="text-[15px] leading-[23px] font-normal mt-[30px] w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Incidunt, exercitationem. Accusamus, commodi alias modi doloribus
              voluptatem deserunt harum tempora, voluptatibus minus obcaecati
              doloremque quis repellendus ducimus a delectus quos praesentium!
            </p>
            <div className="bg-white w-[60%] pr-[4px] rounded-[6px] flex items-center mt-[30px]">
              <input
                type="text"
                className="bg-white outlined-none w-full text-black py-[17px] pl-[14px]"
                placeholder="Enter your Postal Code to Check Availability"
              />
              <button className="bg-[#2756FF] py-[12px] px-[20px] text-white rounded-[4px]">
                Search
              </button>
            </div>
            <div className="grid grid-cols-4 mt-[30px] pl-[20px]">
              <div className="space-y-[10px] flex flex-col items-start justify-start">
                <h2 className="text-[32px] font-semibold">
                  <CountUp end={300} enableScrollSpy />
                </h2>
                <div className="h-[4px] w-[20px] bg-[#2756FF]">
                  <p>Clients</p>
                </div>
              </div>
              <div className="space-y-[10px] flex flex-col items-start justify-start">
                <h2 className="text-[32px] font-semibold">
                  <CountUp end={300} enableScrollSpy />
                </h2>
                <div className="h-[4px] w-[20px] bg-[#2756FF]">
                  <p>Customers</p>
                </div>
              </div>
              <div className="space-y-[10px] flex flex-col items-start justify-start">
                <h2 className="text-[32px] font-semibold">
                  <CountUp end={300} enableScrollSpy />
                </h2>
                <div className="h-[4px] w-[20px] bg-[#2756FF]">
                  <p>Support</p>
                </div>
              </div>
              <div className="space-y-[10px] flex flex-col items-start justify-start">
                <h2 className="text-[32px] font-semibold">
                  <CountUp end={300} enableScrollSpy />
                </h2>
                <div className="h-[4px] w-[20px] bg-[#2756FF]">
                  <p>Workers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div style={{ width: '70%' }}>
              <Lottie animationData={Scene5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
