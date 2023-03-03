import { FaAward } from 'react-icons/fa';
import Lottie from 'lottie-react';
import AboutUs from '../public/AboutUs.json';

type Props = {};
function About({}: Props) {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-2 gap-[40px] pt-[40px]">
        <div>
          <Lottie animationData={AboutUs} />
        </div>
        <div>
          <h1 className="text-[32px] font-bold text-[#0E1D34] align-center">
            ABOUT
          </h1>
          <p className="text-[15px] font-normal leading-[23px] text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit cum
            voluptates voluptas aliquid at adipisci soluta suscipit, debitis
            voluptate doloribus voluptatem a nihil sint nulla beatae libero
            molestiae. Autem, quibusdam.
          </p>
          <div className="space-y-[15px] pt-[20px] pl-[10px]">
            <div className="flex gap-[15px] border-[#0E1D34]/[0.2] border-b-[1px] p-b-[10px] items-center">
              <FaAward fontSize={38} />
              <div>
                <h2 className="text-[22px] font-semibold tracking-[0.3px] text-[#0E1D43">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-[15px] font-normal leading-[32px] text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quod.
                </p>
              </div>
            </div>
            <div className="flex gap-[15px] border-[#0E1D34]/[0.2] border-b-[1px] p-b-[10px] items-center">
              <FaAward fontSize={38} />
              <div>
                <h2 className="text-[22px] font-semibold tracking-[0.3px] text-[#0E1D43">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-[15px] font-normal leading-[32px] text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quod.
                </p>
              </div>
            </div>
            <div className="flex gap-[15px] border-[#0E1D34]/[0.2] border-b-[1px] p-b-[10px] items-center">
              <FaAward fontSize={38} />
              <div>
                <h2 className="text-[22px] font-semibold tracking-[0.3px] text-[#0E1D43">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-[15px] font-normal leading-[32px] text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quod.
                </p>
              </div>
            </div>
            <div className="flex gap-[15px] border-[#0E1D34]/[0.2] border-b-[1px] p-b-[10px] items-center">
              <FaAward fontSize={38} />
              <div>
                <h2 className="text-[22px] font-semibold tracking-[0.3px] text-[#0E1D43">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-[15px] font-normal leading-[32px] text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quod.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
