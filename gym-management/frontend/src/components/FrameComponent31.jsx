import ClearEntries1 from "./ClearEntries1";
const FrameComponent31 = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[3px] box-border max-w-full text-left text-21xl text-white font-monument-extended ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
        <div className="self-stretch bg-darkslategray-900 flex flex-col items-start justify-start pt-[37px] pb-[60px] pl-[180px] pr-0 box-border gap-2.5 max-w-full z-[1] mq450:pl-5 mq450:box-border mq750:pl-[90px] mq750:pt-6 mq750:pb-[39px] mq750:box-border">
          <div className="w-[1440px] h-[662px] relative bg-darkslategray-900 hidden max-w-full" />
          <div className="w-[290px] flex flex-row items-start justify-start py-0 px-1.5 box-border">
            <h1 className="m-0 flex-1 relative text-inherit tracking-[0.08em] font-normal font-inherit z-[2] mq450:text-5xl mq1050:text-13xl">
              REGISTER
            </h1>
          </div>
          <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
            <div className="self-stretch flex flex-row items-end justify-start gap-[15px] max-w-full lg:flex-wrap">
              <div className="h-[435px] w-[453px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white border-black border-[1px] border-solid box-border flex flex-col items-start justify-start py-8 px-[29px] gap-3 min-w-[453px] max-w-full z-[3] lg:flex-1 mq450:pt-[21px] mq450:pb-[21px] mq450:box-border mq750:min-w-full">
                <div className="w-[453px] h-[435px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white border-black border-[1px] border-solid box-border hidden max-w-full" />
                <b className="relative text-xl inline-block font-poppins text-gray-500 text-left min-w-[109px] z-[1] mq450:text-base">
                  Last Name
                </b>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-[5px] box-border max-w-full">
                  <input
                    className="[border:none] [outline:none] bg-silver h-9 flex-1 relative rounded-31xl min-w-[230px] max-w-full z-[1]"
                    type="text"
                  />
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-0.5">
                  <b className="relative text-xl inline-block font-poppins text-gray-500 text-left min-w-[112px] z-[1] mq450:text-base">
                    First Name
                  </b>
                </div>
                <div className="self-stretch h-9 flex flex-row items-start justify-start py-0 pl-1 pr-[5px] box-border max-w-full">
                  <div className="self-stretch flex-1 relative rounded-31xl bg-silver max-w-full z-[1]" />
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-1">
                  <b className="relative text-xl inline-block font-poppins text-gray-500 text-left min-w-[58px] z-[1] mq450:text-base">
                    Email
                  </b>
                </div>
                <div className="self-stretch h-9 flex flex-row items-start justify-start py-0 pl-0.5 pr-[7px] box-border max-w-full">
                  <div className="self-stretch flex-1 relative rounded-31xl bg-silver max-w-full z-[1]" />
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-1.5">
                  <b className="relative text-xl inline-block font-poppins text-gray-500 text-left min-w-[65px] z-[1] mq450:text-base">
                    Phone
                  </b>
                </div>
                <div className="self-stretch h-9 flex flex-row items-start justify-start py-0 pl-1 pr-[5px] box-border max-w-full">
                  <div className="self-stretch flex-1 relative rounded-31xl bg-silver max-w-full z-[1]" />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border min-w-[513px] max-w-full mq750:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full">
                  <h1 className="m-0 w-[612px] relative text-21xl font-normal font-monument-extended text-goldenrod text-left inline-block max-w-full z-[2] mq450:text-5xl mq1050:text-13xl">{`Customer’s Progress `}</h1>
                  <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                    <img
                      className="h-full w-[271px] absolute !m-[0] top-[0px] bottom-[0px] left-[-24px] max-h-full object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="/rectangle-97@2x.png"
                    />
                    <div className="flex-1 flex flex-row items-start justify-end max-w-full">
                      <div className="w-[542px] flex flex-row items-start justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
                        <img
                          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[176px] min-h-[350px] z-[3]"
                          loading="lazy"
                          alt=""
                          src="/rectangle-98@2x.png"
                        />
                        <img
                          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[176px] min-h-[350px] z-[4]"
                          loading="lazy"
                          alt=""
                          src="/rectangle-99@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-0.5">
              <div className="flex flex-row items-start justify-start gap-[18px]">
                <ClearEntries1
                  propBackgroundColor="#deba3b"
                  clearEntries="Submit"
                  propFontSize="20px"
                  propColor="#1a1363"
                  propTextDecoration="unset"
                  propFontWeight="unset"
                  propDisplay="inline-block"
                  propMinWidth="75px"
                />
                <ClearEntries1 clearEntries="Clear Entries" />
              </div>
            </div>
          </form>
        </div>
        <footer className="w-[660px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-mini text-gray-500 font-poppins">
          <div className="w-[296px] flex flex-row items-start justify-between gap-5">
            <div className="flex flex-col items-start justify-start gap-[0.2px]">
              <b className="relative text-xl inline-block min-w-[48px] shrink-0 mq450:text-base">
                GYM
              </b>
              <div className="relative font-semibold inline-block min-w-[93px] shrink-0">
                Why Join Us
              </div>
              <div className="h-[22px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                <div className="mt-[-1px] relative font-semibold inline-block min-w-[47px] shrink-0 z-[1]">
                  About
                </div>
              </div>
              <div className="relative font-semibold inline-block min-w-[34px] shrink-0 z-[2]">
                Plan
              </div>
              <div className="relative font-semibold inline-block min-w-[68px] shrink-0 z-[3]">
                Coaches
              </div>
              <div className="relative font-semibold inline-block min-w-[54px] shrink-0 z-[4]">
                Inquiry
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-3 text-xl">
              <b className="relative inline-block min-w-[97px] mq450:text-base">
                MEMBERS
              </b>
              <div className="flex flex-col items-start justify-start gap-px text-mini">
                <div className="relative font-semibold inline-block min-w-[39px]">
                  FAQs
                </div>
                <div className="relative font-semibold inline-block min-w-[85px]">
                  Contact Us
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default FrameComponent31;
