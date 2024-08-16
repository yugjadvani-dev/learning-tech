
const FrameComponent61 = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full relative flex flex-row items-start justify-end py-0 pl-0 pr-0.5 box-border max-w-full text-center text-base text-white font-poppins ${className}`}
    >
      <div className="flex-1 bg-aliceblue-200 flex flex-row items-start justify-center py-[46px] pl-[21px] pr-5 box-border gap-[19.5px] max-w-full mq450:pt-[30px] mq450:pb-[30px] mq450:box-border mq750:flex-wrap">
        <div className="h-[470px] w-[1438px] relative bg-aliceblue-200 hidden max-w-full" />
        <Docterbox
          doctor="/doctor@2x.png"
          weCanFindOutYourSituationAnd="We can find out your situation and give you a free quote and our expert opinion about which plans might fit you best."
        />
        <Docterbox
          propGap="17px"
          doctor="/officeworker@2x.png"
          propHeight="181px"
          propWidth="181px"
          weCanFindOutYourSituationAnd="Or you can compare quotes yourself instead, and enroll in an affordable health insurance plan on your own."
        />
        <div className="w-[372px] flex flex-col items-start justify-start pt-[33px] pb-[57px] pl-[72px] pr-[60px] box-border relative gap-[34px] max-w-full mq450:gap-[17px] mq450:pt-[21px] mq450:px-5 mq450:pb-[37px] mq450:box-border">
          <RectangleComponent />
          <div className="flex flex-row items-start justify-start py-0 pl-[27px] pr-[37px]">
            <img
              className="h-44 w-44 relative object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/robot@2x.png"
            />
          </div>
          <b className="self-stretch h-[69px] relative leading-[28px] inline-block shrink-0 z-[2]">{`Seek our expert advice since our service is FREE at no charge to you. `}</b>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent61;
