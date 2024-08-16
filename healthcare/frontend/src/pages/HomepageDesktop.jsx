import Appointment from "../components/Appointment";
import Footer from "../components/Footer";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import GroupComponent from "../components/GroupComponent";

const HomepageDesktop= () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[46.9px] px-0 pb-0 box-border leading-[normal] tracking-[normal] text-left text-2xl text-darkslateblue-100 font-poppins">
      <FrameComponent1 />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[55px] box-border max-w-full mq750:pb-[23px] mq750:box-border mq1250:pb-9 mq1250:box-border">
        <div className="w-[1156px] flex flex-col items-start justify-start gap-2 max-w-full">
          <FrameComponent />
          <FrameComponent2 />
        </div>
      </section>
      <div className="w-[470px] !m-[0] absolute top-[215px] left-[142px] flex flex-row items-start justify-start max-w-full">
        <img
          className="h-[562px] w-[996px] absolute !m-[0] right-[-828px] bottom-[-184px] object-cover"
          loading="lazy"
          alt=""
          src="/family6398107-1@2x.png"
        />
        <div className="flex-1 bg-aliceblue-400 flex flex-col items-start justify-start pt-[76px] pb-[67px] pl-24 pr-5 box-border gap-[22.5px] max-w-full z-[1]">
          <div className="w-[470px] h-[419px] relative bg-aliceblue-400 hidden max-w-full" />
          <div className="w-[275px] relative text-9xl leading-[34px] font-black inline-block z-[1] mq450:text-3xl mq450:leading-[27px]">
            Find a plan right for you!
          </div>
          <div className="w-[275px] relative leading-[34px] font-medium inline-block z-[1] mq450:text-mid mq450:leading-[27px]">
            We provide health insurance information and quotes
          </div>
          <div className="w-[178px] rounded-16xl bg-crimson flex flex-row items-start justify-start pt-3.5 px-0 pb-3 box-border whitespace-nowrap z-[1] text-center text-white">
            <div className="h-[61px] w-44 relative rounded-16xl bg-crimson hidden" />
            <div className="flex-1 relative leading-[35px] font-medium z-[1]">
              Get Quote
            </div>
          </div>
        </div>
      </div>
      <GroupComponent />
      <FrameComponent3 />
      <div className="w-[274px] h-[62px] relative rounded-[50%] bg-steelblue-200 hidden z-[5]" />
      <FrameComponent4 />
      <FrameComponent5 />
      <Appointment />
      <section className="self-stretch flex flex-row items-start justify-end py-[58px] px-[534px] box-border relative bg-[url('/public/rectangle-52@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-center text-2xl text-white font-poppins mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[133px] mq750:pr-[133px] mq750:box-border mq1250:pl-[267px] mq1250:pr-[267px] mq1250:box-border">
        <img
          className="h-[177px] w-[1445px] relative object-cover hidden max-w-full z-[0]"
          alt=""
          src="/rectangle-52@2x.png"
        />
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] bg-darkslategray-700 z-[1]" />
        <div className="h-[61px] w-[274px] relative">
          <div className="absolute top-[0px] left-[3.1px] rounded-16xl bg-crimson w-full h-full z-[2]" />
          <div className="absolute top-[14px] left-[0px] leading-[35px] font-medium inline-block w-[272.5px] h-[35px] z-[3] mq450:text-mid mq450:leading-[27px]">
            Request a Quote
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomepageDesktop;
