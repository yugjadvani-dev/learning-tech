import ClearEntries1 from "./ClearEntries1";
const FrameComponent5 = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1416px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full ${className}`}
    >
      <header className="h-[804px] w-[1160px] flex flex-row items-start justify-between pt-1.5 px-0 pb-[710px] box-border relative gap-5 max-w-full text-left text-base text-midnightblue-100 font-poppins mq450:pb-[300px] mq450:box-border mq750:h-auto mq1050:pt-5 mq1050:pb-[461px] mq1050:box-border">
        <div className="mt-[-23px] flex flex-row items-start justify-start text-5xl font-monument-extended">
          <img
            className="h-[111px] w-[78px] relative object-cover z-[2]"
            alt=""
            src="/logo@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-[23px] px-0 pb-0">
            <a className="[text-decoration:none] relative text-[inherit] z-[1] mq450:text-lgi">
              <p className="m-0">STAMINA</p>
              <p className="m-0">FITNESS</p>
            </a>
          </div>
        </div>
        <div className="w-[689px] flex flex-row flex-wrap items-start justify-start gap-[113px] max-w-[calc(100%_-_242px)] mq450:gap-7 mq750:gap-14">
          <nav className="m-0 flex-1 flex flex-row items-start justify-start min-w-[206px] text-left text-base text-midnightblue-100 font-poppins">
            <div className="rounded-3xs flex flex-row items-start justify-start p-5 z-[1]">
              <a href="#About" className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[51px]">
                About
              </a>
            </div>
            <div className="flex-1 rounded-3xs flex flex-row items-start justify-start p-5 z-[1]">
              <a href="#WhyJoinUs" className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[109px]">
                Why Join Us?
              </a>
            </div>
            <div className="rounded-3xs flex flex-row items-start justify-start p-5 z-[2] text-midnightblue-200">
              <a href="#Plan" className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[37px]">
                Plan
              </a>
            </div>
          </nav>
          <div className="flex flex-row items-start justify-start">
            <div className="rounded-3xs flex flex-row items-start justify-start p-5 z-[1]">
              <a href="#VisitourGym" className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[111px]">
                Visit our Gym
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
              <ClearEntries1
                propBackgroundColor="#fdee21"
                clearEntries="Register"
                propFontSize="16px"
                propColor="#1a1363"
                propTextDecoration="none"
                propFontWeight="700"
                propDisplay="inline-block"
                propMinWidth="68px"
              />
            </div>
          </div>
        </div>
        <div className="w-[561px] !m-[0] absolute right-[37px] bottom-[0px] flex flex-row items-start justify-center pt-0 pb-[734px] pl-1 pr-0 box-border bg-cover bg-no-repeat bg-[top] max-w-full z-[3]">
          <img
            className="h-[798px] w-[561px] relative object-cover hidden max-w-full"
            alt=""
            src="/317448272-616806260217094-5636782586877860459-n-3@2x.png"
          />
          <div className="rounded-3xs flex flex-row items-start justify-start p-5 z-[4]">
            <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[73px]">
              Coaches
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FrameComponent5;
