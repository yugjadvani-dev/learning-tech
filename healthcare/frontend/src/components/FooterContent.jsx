
const FooterContent = ({
  className = "",
}) => {
  return (
    <footer
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-center text-2xl text-white font-poppins ${className}`}
    >
      <div className="ml-[-5px] self-stretch flex flex-row items-start justify-end py-[58px] px-[546px] box-border relative bg-[url('/public/rectangle-521@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-[102%] shrink-0 mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[136px] mq825:pr-[136px] mq825:box-border mq1425:pl-[273px] mq1425:pr-[273px] mq1425:box-border">
        <img
          className="h-[177px] w-[1452px] relative object-cover hidden max-w-full z-[0]"
          alt=""
          src="/rectangle-521@2x.png"
        />
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] bg-darkslategray-700 z-[1]" />
        <div className="h-[61px] w-[274px] relative">
          <div className="absolute top-[0px] left-[3.1px] rounded-16xl bg-crimson w-full h-full z-[2]" />
          <div className="absolute top-[14px] left-[0px] leading-[35px] font-medium inline-block w-[272.5px] h-[35px] z-[3] mq450:text-mid mq450:leading-[27px]">
            Request a Quote
          </div>
        </div>
      </div>
      <div className="ml-[-9px] self-stretch bg-gray-500 flex flex-col items-start justify-start pt-10 pb-5 pl-[164px] pr-[142px] box-border max-w-[102%] shrink-0 z-[4] mt-[-20px] text-left mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[82px] mq825:pr-[71px] mq825:box-border">
        <div className="w-[1457px] h-[662px] relative bg-gray-500 hidden max-w-full" />
        <img
          className="w-[269px] h-[127px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/main-logo-1@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start gap-[79px] max-w-full lg:gap-[39px] mq825:gap-5 mq1425:flex-wrap">
          <div className="w-[308px] flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border min-w-[308px] mq1425:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[49px] mq450:gap-6">
              <a href="/about" className="w-[79px] relative leading-[34px] inline-block z-[1] mq450:text-mid mq450:leading-[27px]">
                About
              </a>
              <div className="self-stretch flex flex-col items-start justify-start gap-[110px] mq450:gap-[55px]">
                <div className="flex flex-col items-start justify-start gap-[50px]">
                  <b className="w-[143px] relative leading-[34px] inline-block z-[1] mq450:text-mid mq450:leading-[27px]">
                    Contact Us
                  </b>
                  <b className="relative leading-[34px] z-[1] mq450:text-mid mq450:leading-[27px]">
                    Privacy Policy
                  </b>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[18px] pr-0">
                  <div className="flex-1 flex flex-row items-start justify-between gap-5">
                    <img
                      className="h-[39px] w-[39px] relative object-cover min-h-[39px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/facebook-1@2x.png"
                    />
                    <img
                      className="h-[39px] w-[39px] relative object-cover min-h-[39px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/twitter-1@2x.png"
                    />
                    <img
                      className="h-[39px] w-[38px] relative object-cover min-h-[39px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/youtube-1@2x.png"
                    />
                    <img
                      className="h-[39px] w-[39px] relative object-cover min-h-[39px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/linkedin-1@2x.png"
                    />
                    <img
                      className="h-[39px] w-[39px] relative object-cover min-h-[39px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/instagram-1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start gap-[17px] min-w-[497px] max-w-full text-center lg:min-w-full mq825:flex-wrap">
            <div className="flex-1 flex flex-col items-end justify-start gap-[249px] min-w-[242px] max-w-full mq450:gap-[124px]">
              <div className="w-[275px] flex flex-col items-start justify-start gap-[19px]">
                <a href="/contact-us" className="relative leading-[34px] inline-block min-w-[88px] z-[1] mq450:text-mid mq450:leading-[27px]">
                  Contact
                </a>
                <div className="self-stretch flex flex-col items-start justify-start gap-[29px] text-left text-base">
                  <div className="self-stretch relative leading-[34px] font-light z-[1]">
                    16501 Northcross Dr Ste D Huntersville, NC 28078
                  </div>
                  <div className="relative leading-[34px] font-light inline-block min-w-[111px] z-[1]">
                    704-595-7729
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[42px] relative text-2xs leading-[16px] inline-block shrink-0 z-[1]">
                <p className="m-0">{`© 2022 HealthCareAllyear All rights reserved `}</p>
                <p className="m-0">Tarry Insurance Group LLC</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-5 min-w-[244px] max-w-full">
              <b className="relative leading-[34px] z-[1] mq450:text-mid mq450:leading-[27px]">
                This site provides
              </b>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full text-left text-base">
                <div className="h-[260px] flex-1 relative leading-[34px] font-light inline-block max-w-full z-[1]">
                  <p className="m-0">{`This site provides health insurance information and quotes. Each rate shown is a quote based on information provided by the carrier. `}</p>
                  <p className="m-0">
                    No portion of HealthCareAllYear.com may be copied,
                    published, or distributed in any manner for any purpose
                    without the prior written authorization of the owner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;
