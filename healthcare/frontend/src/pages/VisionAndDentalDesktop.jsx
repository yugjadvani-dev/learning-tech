import EyeCareInfo from "../components/EyeCareInfo";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent7 from "../components/FrameComponent7";
import GroupComponent3 from "../components/GroupComponent3";
import Navigation1 from "../components/Navigation1";
import VisionPlan from "../components/VisionPlan";

const VisionAndDentalDesktop = () => {
  return (
    <div className="w-full h-[4372px] relative bg-white overflow-hidden leading-[normal] tracking-[normal] mq1275:h-auto mq1275:min-h-[4372]">
      <img
        className="absolute top-[189px] left-[143px] w-[1155px] h-[570px] object-cover"
        alt=""
        src="/medicalstethoscopewithpapercutfamily-11@2x.png"
      />
      <div className="absolute top-[189px] left-[1297px] [background:linear-gradient(6.69deg,_#dce1dd,_#c8c9c5_43.23%,_#dce1dd)] w-[166px] h-[570px] z-[1]" />
      <div className="absolute top-[189px] left-[-21px] [background:linear-gradient(6.69deg,_#dce1dd,_#c8c9c5_43.23%,_#dce1dd)] w-[166px] h-[570px] z-[1]" />
      <section className="absolute top-[1578px] left-[0px] w-[1440px] flex flex-row items-start justify-start max-w-full">
        <div className="ml-[-21px] h-[570px] w-[1461px] relative shrink-0 max-w-[102%]">
          <div className="absolute top-[0px] left-[0px] [background:linear-gradient(-82.27deg,_#c7c7c7,_#d0d0ce_27.84%,_#d6d6d4)] w-full h-full" />
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[164px] max-h-full w-[1155px] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/medicalstethoscopewithpapercutfamily-2@2x.png"
          />
        </div>
      </section>
      <img
        className="absolute top-[2286px] left-[0px] w-[1440px] h-[613px] z-[3]"
        alt=""
        src="/rectangle-120.svg"
      />
      <div className="absolute top-[1560px] left-[-21px] [background:linear-gradient(90deg,_#8b1552,_#050708)] w-[1494px] h-[18px] z-[2]" />
      <FrameComponent7 />
      <section className="absolute top-[756px] left-[0px] bg-cadetblue-100 w-[1440px] flex flex-row items-start justify-start pt-[53px] px-[157px] pb-[38px] box-border max-w-full z-[3] text-left text-19xl text-white font-poppins">
        <div className="h-[169px] w-[1440px] relative bg-cadetblue-100 hidden max-w-full" />
        <b className="relative leading-[26px] z-[4] mq450:text-3xl mq450:leading-[21px]">
          <p className="m-0">Your Eyes and Teeth Are Worth It</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0 text-9xl"> 100% Online Application</p>
        </b>
      </section>
      <section className="absolute top-[1997px] left-[0px] w-full flex flex-col items-start justify-start max-w-full">
        <EyeCareInfo />
        <VisionPlan />
        <GroupComponent3 />
        <FrameComponent11 />
      </section>
      <Navigation1 />
    </div>
  );
};

export default VisionAndDentalDesktop;
