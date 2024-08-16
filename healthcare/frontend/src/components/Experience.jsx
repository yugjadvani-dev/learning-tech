
const Experience = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[74px] max-w-full text-left text-xl text-gray-600 font-poppins mq450:gap-[18px] mq750:gap-[37px] ${className}`}
    >
      <div className="w-[757px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[467px] relative leading-[45px] font-medium inline-block shrink-0 max-w-full mq450:text-base mq450:leading-[36px]">
          <p className="m-0">{`This is our 17th year helping families in North Carolina, South Carolina, Georgia, Tennessee, Alabama, Louisiana, Florida & Texas with their health insurance options. `}</p>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[39px] max-w-full text-center text-2xl text-white mq750:gap-[19px]">
        <div className="self-stretch flex flex-row items-start justify-end max-w-full">
          <div className="w-[1405px] flex flex-row items-start justify-start py-0 pl-5 pr-0 box-border relative max-w-full">
            <div className="w-[568px] !m-[0] absolute top-[-510px] right-[142px] bg-darkslategray-600 flex flex-col items-center justify-start pt-[65px] px-5 pb-9 box-border gap-[39px] max-w-full z-[1]">
              <div className="w-[568px] h-[766px] relative bg-darkslategray-600 hidden max-w-full" />
              <img
                className="w-[396px] relative max-h-full object-cover max-w-full z-[2]"
                loading="lazy"
                alt=""
                src="/image-52@2x.png"
              />
              <div className="w-[396px] relative leading-[34px] font-semibold inline-block max-w-full z-[2] mq450:text-mid mq450:leading-[27px]">
                Chalmes Tarry and Tonya Tarry
              </div>
            </div>
            <div className="flex-1 bg-aliceblue-400 flex flex-row items-start justify-start py-[55px] px-[90px] box-border min-h-[256px] max-w-full text-left text-xl text-darkslateblue-100 mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[45px] mq750:pr-[45px] mq750:box-border">
              <div className="h-64 w-[1385px] relative bg-aliceblue-400 hidden max-w-full" />
              <b className="w-[467px] relative leading-[40px] inline-block shrink-0 max-w-full z-[1] mq450:text-base mq450:leading-[32px]">
                <p className="m-0">
                  We have learned from experience that enrolling in a health
                  plan is just the beginning...
                </p>
              </b>
            </div>
          </div>
        </div>
        <div className="w-[774px] h-[267px] relative max-w-full text-left text-9xl">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[-71px] bg-darkslateblue-100 w-[825px] z-[1]" />
          <h2 className="m-0 absolute top-[118px] left-[142px] text-inherit leading-[34px] font-black font-inherit inline-block w-[556px] h-11 z-[2] mq450:text-3xl mq450:leading-[27px]">{`There are many other factors that must be considered. `}</h2>
        </div>
      </div>
    </section>
  );
};

export default Experience;
