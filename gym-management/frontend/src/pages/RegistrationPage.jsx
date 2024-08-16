import FrameComponent8 from "../components/FrameComponent8";

const RegistrationPage = () => {
  return (
    <div className="w-full h-[950px] relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[31px] px-[73px] pb-[63px] box-border gap-[92px] leading-[normal] tracking-[normal] mq725:h-auto mq725:gap-[23px] mq1050:gap-[46px] mq1050:pl-9 mq1050:pr-9 mq1050:box-border">
      <div className="w-[930px] h-[590px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-white hidden max-w-full" />
      <div className="w-[647px] h-[485px] relative rounded-tl-none rounded-tr-3xs rounded-b-none bg-darkslategray-300 hidden max-w-full" />
      <main className="w-[930px] flex flex-col items-start justify-start shrink-0 max-w-full">
        <FrameComponent8 />
        <section className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-whitesmoke-100 flex flex-col items-start justify-start pt-[3px] px-[39px] pb-[29px] box-border gap-[173px] max-w-full mt-[-780px] text-left text-13xl text-goldenrod font-poppins mq450:gap-[43px] mq1000:gap-[86px]">
          <div className="w-[930px] h-[819px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-whitesmoke-100 hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-[19px] box-border max-w-full">
            <div className="w-[623px] flex flex-col items-end justify-start gap-[29px] max-w-full">
              <header className="self-stretch flex flex-row items-start justify-between pt-[29px] pb-[34px] pl-[76px] pr-0 relative gap-5 text-left text-xl text-midnightblue-100 font-monument-extended mq725:pl-[38px] mq725:box-border">
                <a className="[text-decoration:none] relative text-[inherit] z-[1]">
                  <p className="m-0">STAMINA</p>
                  <p className="m-0">FITNESS</p>
                </a>
                <img
                  className="h-full w-[78px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] max-h-full object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src="/logo@2x.png"
                />
                <div className="w-[140px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border text-center text-sm font-poppins">
                  <div className="self-stretch flex flex-row items-start justify-between gap-5">
                    <div className="w-[86px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                      <a className="[text-decoration:none] self-stretch relative text-[inherit] z-[1]">
                        Feedback
                      </a>
                    </div>
                    <img
                      className="h-[23px] w-[23px] relative overflow-hidden shrink-0 min-h-[23px] z-[1]"
                      loading="lazy"
                      alt=""
                      src="/rinotification2fill.svg"
                    />
                  </div>
                </div>
              </header>
              <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
                <div className="w-[415px] flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                    <h1 className="m-0 w-[415px] relative text-inherit tracking-[0.05em] leading-[42px] font-bold font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-lgi mq450:leading-[25px] mq1000:text-7xl mq1000:leading-[34px]">
                      Become a Member!
                    </h1>
                    <div className="w-[242px] flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border ml-[-384px] text-mini text-gray-200">
                      <h3 className="m-0 self-stretch h-0 relative text-inherit font-normal font-inherit inline-block z-[2]">{` `}</h3>
                    </div>
                  </div>
                  <h1 className="m-0 self-stretch h-[42px] relative text-21xl tracking-[0.05em] font-normal font-monument-extended text-midnightblue-100 inline-block shrink-0 z-[1] mq450:text-5xl mq1000:text-13xl">
                    Register
                  </h1>
                </div>
                <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white flex flex-col items-end justify-start pt-[43px] pb-4 pl-[27px] pr-[34px] box-border gap-[34px] max-w-full z-[1] text-base text-gray-200 mq450:pt-[3px] mq450:pb-5 mq450:box-border mq725:gap-[17px]">
                  <div className="w-[623px] h-[354px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white hidden max-w-full" />
                  <div className="self-stretch flex flex-row items-start justify-start gap-[15px] mq725:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[17px] min-w-[193px]">
                      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1.5 gap-1.5">
                        <h2 className="m-0 relative text-inherit font-bold font-inherit z-[2]">
                          Name of Participant
                        </h2>
                        <input
                          className="[border:none] [outline:none] bg-whitesmoke-200 self-stretch h-[33px] relative rounded-xl min-w-[178px] z-[2]"
                          type="text"
                        />
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
                        <div className="w-[274px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
                          <b className="flex-1 relative z-[2]">Email Address</b>
                        </div>
                        <div className="self-stretch h-[33px] relative rounded-xl bg-whitesmoke-200 z-[2]" />
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
                        <div className="w-[283px] flex flex-row items-start justify-start gap-[47px] mq450:gap-[23px]">
                          <h2 className="m-0 flex-1 relative text-inherit font-bold font-inherit z-[2]">
                            Plan
                          </h2>
                          <h2 className="m-0 flex-1 relative text-inherit font-bold font-inherit z-[2]">
                            Price
                          </h2>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[34px] mq450:gap-[17px] mq725:flex-wrap">
                          <input
                            className="[border:none] [outline:none] bg-whitesmoke-200 h-[33px] flex-1 relative rounded-xl min-w-[85px] z-[2]"
                            type="text"
                          />
                          <div className="h-[33px] flex-1 relative rounded-xl bg-whitesmoke-200 min-w-[85px] z-[2]" />
                        </div>
                      </div>
                    </div>
                    <div className="w-[250px] flex flex-col items-start justify-start gap-[23px] min-w-[250px] mq725:flex-1">
                      <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
                        <b className="w-[170px] relative inline-block z-[2]">
                          Date of Join
                        </b>
                        <div className="self-stretch rounded-xl bg-whitesmoke-200 flex flex-row items-start justify-end pt-[7px] px-3.5 pb-1.5 z-[2]">
                          <div className="h-[33px] w-[250px] relative rounded-xl bg-whitesmoke-200 hidden" />
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0 z-[3]"
                            alt=""
                            src="/journalcheck-1.svg"
                          />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
                        <b className="w-[170px] relative inline-block z-[2]">
                          Contact No.
                        </b>
                        <div className="self-stretch h-[33px] relative rounded-xl bg-whitesmoke-200 z-[2]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-3 text-center text-white mq725:flex-wrap">
                    <div className="rounded-xl bg-midnightblue-100 flex flex-row items-start justify-start py-[3px] px-[21px] whitespace-nowrap z-[2]">
                      <h2 className="m-0 relative text-inherit font-bold font-inherit">
                        Avail Membership
                      </h2>
                    </div>
                    <div className="w-[99px] rounded-xl bg-white border-midnightblue-100 border-[2px] border-solid box-border flex flex-row items-start justify-start py-0 px-[19px] z-[2] text-midnightblue-100">
                      <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[57px]">
                        Cancel
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[14.8px] text-3xs text-white">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[2]"
              loading="lazy"
              alt=""
              src="/boxarrowright1.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="relative inline-block min-w-[34px] shrink-0 z-[2]">
                Logout
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="w-[898px] flex flex-row items-start justify-center max-w-full">
        <img className="h-5 w-5 relative overflow-hidden shrink-0" alt="" />
      </div>
    </div>
  );
};

export default RegistrationPage;
