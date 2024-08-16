
const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`w-full relative flex flex-row items-start justify-between pt-[167px] pb-0 pl-[147px] pr-[142px] box-border max-w-full gap-5 text-left text-2xl text-white font-poppins mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[73px] mq750:pt-[109px] mq750:pr-[71px] mq750:box-border mq750:flex-wrap mq750:justify-center ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-[17px] px-0 pb-0">
        <div className="flex flex-col items-start justify-start gap-[49.5px]">
          <b className="w-[79px] relative leading-[34px] inline-block z-[5] mq450:text-mid mq450:leading-[27px]">
            About
          </b>
          <b className="w-[143px] relative leading-[34px] inline-block z-[5] mq450:text-mid mq450:leading-[27px]">
            Contact Us
          </b>
          <b className="relative leading-[34px] z-[5] mq450:text-mid mq450:leading-[27px]">
            Privacy Policy
          </b>
        </div>
      </div>
      <div className="w-[764px] flex flex-row items-start justify-start gap-[17px] max-w-full text-center mq750:flex-wrap">
        <div className="flex-1 flex flex-col items-end justify-start gap-[249px] min-w-[242px] max-w-full mq450:gap-[124px]">
          <div className="w-[275px] flex flex-col items-start justify-start gap-[19px]">
            <b className="relative leading-[34px] inline-block min-w-[88px] z-[5] mq450:text-mid mq450:leading-[27px]">
              Contact
            </b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[29px] text-left text-base">
              <div className="self-stretch relative leading-[34px] font-light z-[5]">
                16501 Northcross Dr Ste D Huntersville, NC 28078
              </div>
              <div className="relative leading-[34px] font-light inline-block min-w-[111px] z-[5]">
                704-595-7729
              </div>
            </div>
          </div>
          <div className="self-stretch h-[42px] relative text-2xs leading-[16px] inline-block shrink-0 z-[5]">
            <p className="m-0">{`© 2022 HealthCareAllyear All rights reserved `}</p>
            <p className="m-0">Tarry Insurance Group LLC</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-5 min-w-[244px] max-w-full">
          <b className="relative leading-[34px] z-[5] mq450:text-mid mq450:leading-[27px]">
            This site provides
          </b>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full text-left text-base">
            <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
              <div className="h-[260px] flex-1 relative leading-[34px] font-light inline-block max-w-full z-[5]">
                <p className="m-0">{`This site provides health insurance information and quotes. Each rate shown is a quote based on information provided by the carrier. `}</p>
                <p className="m-0">
                  No portion of HealthCareAllYear.com may be copied, published,
                  or distributed in any manner for any purpose without the prior
                  written authorization of the owner.
                </p>
              </div>
              <div className="h-[662px] w-[1457px] absolute !m-[0] top-[-221px] left-[-942px]">
                <div className="absolute top-[0px] left-[0px] bg-gray-400 w-full h-full z-[4]" />
                <img
                  className="absolute top-[495px] left-[182px] w-[39px] h-[39px] object-cover z-[5]"
                  loading="lazy"
                  alt=""
                  src="/facebook-1@2x.png"
                />
                <img
                  className="absolute top-[495px] left-[245px] w-[39px] h-[39px] object-cover z-[5]"
                  loading="lazy"
                  alt=""
                  src="/twitter-1@2x.png"
                />
                <img
                  className="absolute top-[495px] left-[370px] w-[39px] h-[39px] object-cover z-[5]"
                  loading="lazy"
                  alt=""
                  src="/linkedin-1@2x.png"
                />
                <img
                  className="absolute top-[495px] left-[433px] w-[39px] h-[39px] object-cover z-[5]"
                  loading="lazy"
                  alt=""
                  src="/instagram-1@2x.png"
                />
                <img
                  className="absolute top-[495px] left-[308px] w-[38px] h-[39px] object-cover z-[5]"
                  loading="lazy"
                  alt=""
                  src="/youtube-1@2x.png"
                />
                <img
                  className="absolute top-[40px] left-[164px] w-[269px] h-[127px] object-cover z-[5]"
                  loading="lazy"
                  alt=""
                  src="/main-logo-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
