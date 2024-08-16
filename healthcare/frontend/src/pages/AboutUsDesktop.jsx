import Articles from "../components/Articles";
import Examples from "../components/Examples";
import Experience from "../components/Experience";
import FrameComponent6 from "../components/FrameComponent6";
import GroupComponent2 from "../components/GroupComponent2";
import Header from "../components/Header";

const AboutUsDesktop = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[46.9px] px-0 pb-0 box-border min-h-[5346px] leading-[normal] tracking-[normal] text-center text-2xl text-white font-poppins">
      <div className="w-[1487px] h-[76px] absolute !m-[0] top-[1274px] right-[-29px] bg-steelblue-100" />
      <Header />
      <Experience />
      <Examples />
      <section className="self-stretch h-[633px] relative text-right text-7xl text-white font-poppins">
        <h3 className="m-0 absolute top-[196px] left-[240px] text-inherit leading-[48px] font-bold font-inherit inline-block w-[469px] h-72 z-[1] mq450:text-2xl mq450:leading-[38px]">
          <p className="m-0">{`We will help you enroll in a health plan and help you understand what the Healthcare Marketplace needs from you to keep your Affordable Health plan `}</p>
          <p className="m-0">&nbsp;</p>
        </h3>
        <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[1459px]">
          <div className="absolute top-[0px] left-[0px] bg-darkslateblue-100 w-full h-full" />
          <img
            className="absolute top-[68px] left-[828px] w-[459px] h-[474px] overflow-hidden z-[1]"
            loading="lazy"
            alt=""
            src="/asset-1-1.svg"
          />
        </div>
      </section>
      <div className="ml-[-18px] w-[1499px] h-[59px] relative bg-steelblue-100 max-w-[105%] shrink-0" />
      <div className="w-[568px] h-[136px] relative bg-white hidden max-w-full z-[9]" />
      <section className="self-stretch flex flex-row items-start justify-end pt-[134px] px-36 pb-32 box-border relative max-w-full text-right text-2xl text-white font-poppins mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pt-[87px] mq750:px-[72px] mq750:pb-[83px] mq750:box-border">
        <div className="w-[470px] flex flex-col items-start justify-start pt-[150px] px-0 pb-0 box-border max-w-full">
          <b className="self-stretch relative leading-[44px] z-[1] mq450:text-mid mq450:leading-[35px]">
            <p className="m-0">
              Here at HealthCareAllYear, we work hard to stay up to date with
              these changes and guide you through the complex maze of getting
              healthcare for you and your family
            </p>
          </b>
        </div>
        <h2 className="m-0 h-[85px] w-[463px] relative text-[32px] leading-[41px] font-extrabold font-inherit inline-block shrink-0 max-w-full z-[1] ml-[-468px] mq450:text-lgi mq450:leading-[25px] mq750:text-7xl mq750:leading-[33px]">
          <p className="m-0">{`Understanding the policy changes can be very confusing `}</p>
          <p className="m-0">&nbsp;</p>
        </h2>
        <div className="h-full w-[1486px] absolute !m-[0] top-[0px] right-[-29px] bottom-[0px]">
          <div className="absolute top-[0px] left-[0px] bg-gray-400 w-full h-full" />
          <img
            className="absolute top-[64px] left-[145px] w-[595px] h-[524px] overflow-hidden z-[2]"
            loading="lazy"
            alt=""
            src="/asset-3-1.svg"
          />
        </div>
      </section>
      <FrameComponent6 />
      <Articles />
      <GroupComponent2 />
      <div className="ml-[-5px] self-stretch h-[-642px] flex flex-row items-end justify-start pt-0 px-[5px] pb-0 box-border bg-[url('/public/rectangle-521@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-[102%] shrink-0">
        <img
          className="w-[1452px] relative max-h-full object-cover hidden max-w-full"
          alt=""
          src="/rectangle-521@2x.png"
        />
        <div className="flex-1 flex flex-row items-start justify-end py-[58px] px-[534px] box-border relative max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[133px] mq750:pr-[133px] mq750:box-border mq1225:pl-[267px] mq1225:pr-[267px] mq1225:box-border">
          <div className="h-full w-[1452px] absolute !m-[0] top-[0px] right-[-12px] bottom-[0px] bg-darkslategray-700 z-[1]" />
          <div className="h-[61px] w-[274px] relative">
            <div className="absolute top-[0px] left-[3.1px] rounded-16xl bg-crimson w-full h-full z-[2]" />
            <div className="absolute top-[14px] left-[0px] leading-[35px] font-medium inline-block w-[272.5px] h-[35px] z-[3] mq450:text-mid mq450:leading-[27px]">
              Request a Quote
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDesktop;
