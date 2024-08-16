import FrameComponent15 from "./FrameComponent15";
const FrameComponent23 = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[46px] box-border gap-[49px] max-w-full text-left text-2xl text-darkslategray-400 font-poppins mq750:gap-6 ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start pt-[142px] px-0 pb-0 box-border relative gap-[69px] max-w-full lg:gap-[34px] mq750:gap-[17px]">
        <img
          className="w-[79px] h-[79px] absolute !m-[0] top-[0px] left-[490px] z-[1]"
          loading="lazy"
          alt=""
          src="/group-128.svg"
        />
        <div className="self-stretch relative leading-[25px] z-[1] mq450:text-base mq450:leading-[20px]">
          <p className="[margin-block-start:0] [margin-block-end:61px]">
            <b>– Gathering of Personally-Identifying Information</b>
          </p>
          <p className="m-0 text-xl font-medium">
            Certain visitors to Health Care All Year websites choose to interact
            with Health Care All Year in ways that require Health Care All Year
            to gather personally-identifying information. The amount and type of
            information that Health Care All Year gathers depends on the nature
            of the interaction. For example, we ask visitors who sign up for a
            blog at Health Care All Year to provide a username and email
            address.
          </p>
        </div>
        <FrameComponent15
          group129="/group-129.svg"
          security="– Security"
          theSecurityOfYourPersonalInfor="The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
"
        />
      </div>
      <FrameComponent15
        propPadding="0px 0px 57px"
        propGap="3px"
        group129="/group-143.svg"
        security="– Advertisements"
        theSecurityOfYourPersonalInfor="Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by Health Care All Year and does not cover the use of cookies by any advertisers."
      />
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <div className="flex-1 relative leading-[25px] inline-block max-w-full z-[1] mq450:text-base mq450:leading-[20px]">
          <p className="[margin-block-start:0] [margin-block-end:61px]">
            <span className="text-xl font-medium font-poppins"></span>
            <b>– Links To External Sites</b>
          </p>
          <p className="m-0 text-xl font-medium">
            Our Service may contain links to external sites that are not
            operated by us. If you click on a third party link, you will be
            directed to that third party’s site. We strongly advise you to
            review the Privacy Policy and terms and conditions of every site you
            visit. We have no control over, and assume no responsibility for the
            content, privacy policies or practices of any third party sites,
            products or services.
          </p>
        </div>
        <img
          className="h-[79px] w-[79px] absolute !m-[0] top-[-57px] left-[490px] z-[2]"
          loading="lazy"
          alt=""
          src="/group-132.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent23;
