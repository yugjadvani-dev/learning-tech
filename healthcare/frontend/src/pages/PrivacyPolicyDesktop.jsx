import FrameComponent16 from "../components/FrameComponent16";
import FrameComponent23 from "../components/FrameComponent23";
import FrameComponent32 from "../components/FrameComponent32";
import FrameComponent41 from "../components/FrameComponent41";
import FrameComponent51 from "../components/FrameComponent51";
import Plans from "../components/Plans";

const PrivacyPolicyDesktop = () => {
  return (
    <div className="w-full h-[5785px] relative bg-white overflow-hidden leading-[normal] tracking-[normal] text-center text-mid text-steelblue-400 font-poppins mq750:h-auto mq750:min-h-[5785]">
      <FrameComponent51 />
      <main className="absolute top-[179px] left-[0px] w-full flex flex-col items-start justify-start pt-[98px] px-[141px] pb-[612px] box-border gap-24 max-w-full lg:pl-[70px] lg:pr-[70px] lg:box-border mq450:gap-6 mq750:gap-12 mq750:pl-[35px] mq750:pr-[35px] mq750:box-border">
        <section className="w-full h-[13470px] absolute !m-[0] right-[0px] bottom-[-7864px] left-[0px] bg-aliceblue-300" />
        <FrameComponent16 />
        <section className="flex flex-col items-start justify-start gap-[49px] max-w-full text-left text-2xl text-darkslategray-400 font-poppins mq750:gap-6">
          <div className="w-[1059px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <img
              className="h-[79px] w-[79px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/group-127.svg"
            />
          </div>
          <div className="w-[1152px] h-[398px] relative leading-[25px] inline-block max-h-[398px] [word-break:break-word] z-[1] mq450:text-base mq450:leading-[20px]">
            <p className="[margin-block-start:0] [margin-block-end:61px]">
              <span className="whitespace-pre-wrap">
                <b>– Website Visitors</b>
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:61px] text-xl">
              <span className="font-medium whitespace-pre-wrap">
                <span className="whitespace-pre-wrap">
                  Like most website operators, Health Care All Year collects
                  non-personally-identifying information of the sort that web
                  browsers and servers typically make available, such as the
                  browser type, language preference, referring site, and the
                  date and time of each visitor request. Health Care All Year’s
                  purpose in collecting non-personally identifying information
                  is to better understand how Health Care All Year visitors use
                  its website. From time to time, Health Care All Year may
                  release non-personally-identifying information in the
                  aggregate, e.g., by publishing a report on trends in the usage
                  of its website.
                </span>
              </span>
            </p>
            <p className="m-0">
              <span className="font-medium whitespace-pre-wrap">
                <span className="whitespace-pre-wrap">
                  Health Care All Year also collects potentially
                  personally-identifying information like Internet Protocol (IP)
                  addresses for logged in users and for users leaving comments
                  on healthcareallyear.com blog posts. Health Care All Year only
                  discloses logged in user and commenter IP addresses under the
                  same circumstances that it uses and discloses
                  personally-identifying information as described below.
                </span>
              </span>
            </p>
          </div>
        </section>
        <FrameComponent23 />
        <FrameComponent32 />
        <FrameComponent41 />
      </main>
      <b className="absolute top-[87px] left-[475px] leading-[16px] inline-block w-[274px] h-4">
        {" "}
        Marketplace Health plans
      </b>
      <a href="/about" className="[text-decoration:none] absolute top-[88px] left-[769px] leading-[16px] font-bold text-[inherit] inline-block w-[78px] h-4">{`About `}</a>
      <a href="/contact-us" className="[text-decoration:none] absolute top-[87px] left-[867px] leading-[16px] font-bold text-[inherit] inline-block w-[78px] h-4 min-w-[78px]">
        Contact
      </a>
      <img
        className="absolute top-[46.9px] left-[150px] w-44 h-[74.1px] object-cover"
        loading="lazy"
        alt=""
        src="/main-logo@2x.png"
      />
      <button className="cursor-pointer [border:none] pt-[23px] pb-[21px] pl-[23px] pr-[11px] bg-crimson absolute top-[54px] left-[1122px] rounded-16xl w-44 flex flex-row items-start justify-start box-border">
        <div className="h-[61px] w-44 relative rounded-16xl bg-crimson hidden z-[1]" />
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/whitephone.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 ml-[-5px]">
          <a className="[text-decoration:none] self-stretch relative text-mini leading-[16px] font-semibold font-poppins text-white text-center z-[1]">
            704-595-7729
          </a>
        </div>
      </button>
      <Plans />
    </div>
  );
};

export default PrivacyPolicyDesktop;
