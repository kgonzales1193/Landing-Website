import { FaStaylinked, FaArrowRight } from 'react-icons/fa';
import Wave from 'react-wavify';

type Props = {};
const Category = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="">
        <Wave mask="url(#mask)" fill="#1277b0">
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0" stopColor="white" />
              <stop offset="0.5" stopColor="black" />
            </linearGradient>
            <mask id="mask">
              <rect
                x="0"
                y="0"
                width="2000"
                height="200"
                fill="url(#gradient)"
              />
            </mask>
          </defs>
        </Wave>
      </div>
      <div className="container mx-auto grid grid-cols-3 gap-[8px] py-[8px]">
        <div className="flex gap-[15px] ">
          <FaStaylinked fontSize={70} />
          <div>
            <h1 className="text-[24px] pt-[10px] font-semibold text-[#0E1D34]">
              Lorem Ipsum
            </h1>
            <p className="text-[15px] font-normal leading-[23px] text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              nobis placeat, laudantium quisquam praesentium temporibus?
            </p>
            <div className="flex items-center gap-[7px] cursor-pointer mt-[10px] text-[14px] font-semibold">
              <p className="text-gray-700">Learn more</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="flex gap-[15px] ">
          <FaStaylinked fontSize={70} />
          <div>
            <h1 className="text-[24px] pt-[10px] font-semibold text-[#0E1D34]">
              Lorem Ipsum
            </h1>
            <p className="text-[15px] font-normal leading-[23px] text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              nobis placeat, laudantium quisquam praesentium temporibus?
            </p>
            <div className="flex items-center gap-[7px] cursor-pointer mt-[10px] text-[14px] font-semibold">
              <p className="text-gray-700">Learn more</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="flex gap-[15px] ">
          <FaStaylinked fontSize={70} />
          <div>
            <h1 className="text-[24px] pt-[10px] font-semibold text-[#0E1D34]">
              Lorem Ipsum
            </h1>
            <p className="text-[15px] font-normal leading-[23px] text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              nobis placeat, laudantium quisquam praesentium temporibus?
            </p>
            <div className="flex items-center gap-[7px] cursor-pointer mt-[10px] text-[14px] font-semibold">
              <p className="text-gray-700">Learn more</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;
