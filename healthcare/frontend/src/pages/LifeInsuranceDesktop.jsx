import Footer1 from "../components/Footer1";
import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent8 from "../components/FrameComponent8";
import GroupComponent4 from "../components/GroupComponent4";
import InsuranceTypes from "../components/InsuranceTypes";

const LifeInsuranceDesktop = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[46.9px] px-0 pb-0 box-border leading-[normal] tracking-[normal]">
      <section className="w-[1317px] flex flex-col items-start justify-start py-0 pl-5 pr-0 box-border gap-[68px] max-w-full mq750:gap-[34px] mq450:gap-[17px]">
        <FrameComponent8 />
        <InsuranceTypes />
      </section>
      <FrameComponent12 />
      <GroupComponent4 />
      <Footer1 />
    </div>
  );
};

export default LifeInsuranceDesktop;
