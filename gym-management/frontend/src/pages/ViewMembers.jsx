import { useCallback } from "react";

const ViewMembers = () => {
  const onGroupButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='memberListBorder']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full h-[950px] relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[68px] px-[73px] pb-[63px] box-border gap-[65px] leading-[normal] tracking-[normal] text-center text-sm text-gray-200 font-poppins mq1000:h-auto mq725:gap-4 mq1050:gap-8 mq1050:pl-9 mq1050:pr-9 mq1050:box-border">
      <div className="w-[930px] h-[590px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-white hidden max-w-full" />
      <div className="w-[647px] h-[485px] relative rounded-tl-none rounded-tr-3xs rounded-b-none bg-darkslategray-300 hidden max-w-full" />
      <main className="w-[930px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-whitesmoke-100 flex flex-row items-start justify-start pt-0.5 px-0 pb-0 box-border gap-10 max-w-full shrink-0 text-left text-mini text-white font-poppins mq1000:flex-wrap mq450:gap-5">
        <div className="self-stretch w-[930px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-whitesmoke-100 hidden max-w-full" />
        <div className="w-[226px] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-midnightblue-100 flex flex-col items-start justify-start pt-[47px] pb-[29px] pl-[29px] pr-0 box-border gap-[50px] min-w-[226px] z-[1] mq1000:flex-1 mq1000:pt-[31px] mq1000:pb-5 mq1000:box-border mq450:pt-5 mq450:box-border">
          <div className="w-[226px] h-[817px] relative rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-midnightblue-100 hidden" />
          <div className="w-[181px] flex flex-row items-start justify-start py-0 px-1 box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-2.5">
              <div className="flex flex-row items-start justify-start py-0 px-[52px]">
                <img
                  className="h-[51px] w-[51px] relative overflow-hidden shrink-0 z-[2]"
                  loading="lazy"
                  alt=""
                  src="/personcircle1.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <b className="self-stretch relative z-[2]">
                  Administrator Name
                </b>
                <div className="w-40 relative text-3xs text-center inline-block whitespace-nowrap z-[2] mt-[-2px]">
                  juan.delacruz@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[204px] gap-[9px] text-xs mq725:pb-[133px] mq725:box-border">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[13px] pr-[9px]">
              <div className="flex-1 flex flex-row items-start justify-start gap-[13px]">
                <div className="flex flex-col items-start justify-start gap-[18px]">
                  <img
                    className="w-5 h-5 relative z-[2]"
                    loading="lazy"
                    alt=""
                    src="/vector2.svg"
                  />
                  <div className="flex flex-col items-start justify-start gap-[19.7px]">
                    <img
                      className="w-5 h-5 relative z-[2]"
                      loading="lazy"
                      alt=""
                      src="/group-61.svg"
                    />
                    <img
                      className="w-[17px] h-[17px] relative overflow-hidden shrink-0 z-[2]"
                      loading="lazy"
                      alt=""
                      src="/pencilsquare1.svg"
                    />
                    <img
                      className="w-5 h-5 relative overflow-hidden shrink-0 z-[2]"
                      loading="lazy"
                      alt=""
                      src="/journalcheck11.svg"
                    />
                    <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
                      <div className="h-[53.9px] w-5 relative">
                        <img
                          className="absolute top-[0px] left-[0px] w-5 h-5 overflow-hidden z-[2]"
                          loading="lazy"
                          alt=""
                          src="/creditcard2back1.svg"
                        />
                        <img
                          className="absolute top-[33.9px] left-[0px] w-5 h-5 overflow-hidden z-[2]"
                          loading="lazy"
                          alt=""
                          src="/materialsymbolsinventory2outline.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[25px]">
                  <a href="/admin-dashboard-page" className="[text-decoration:none] w-[104px] relative text-[inherit] inline-block z-[2]">
                    Dashboard
                  </a>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 text-3xs">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[22.4px]">
                      <a href="/admin-profile-page" className="w-[104px] relative inline-block z-[2]">
                        Admiin Profile
                      </a>
                      <a href="/registration-page" className="w-[104px] relative inline-block z-[2]">
                        Registration
                      </a>
                      <a href="/plan-page" className="w-[104px] relative inline-block z-[2]">
                        Plan
                      </a>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[19.9px]">
                        <a href="/point-of-sale" className="w-[104px] relative inline-block z-[2]">
                          Payment
                        </a>
                        <a href="/equipment-inventory" className="self-stretch relative z-[2]">
                          Inventory
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] pt-[7px] pb-2 pl-[13px] pr-2.5 bg-[transparent] self-stretch flex flex-row items-start justify-start relative gap-[15px] z-[2]"
              onClick={onGroupButtonClick}
            >
              <div
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-whitesmoke-100"
                data-scroll-to="memberListBorder"
              />
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[3]"
                alt=""
                src="/people2.svg"
              />
              <a href="/view-members" className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <b className="self-stretch relative text-3xs font-poppins text-midnightblue-100 text-left z-[3]">
                  View Members
                </b>
              </a>
            </button>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[13px] pr-[9px] text-3xs">
              <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-3">
                  <img
                    className="h-6 w-6 relative z-[2]"
                    loading="lazy"
                    alt=""
                    src="/group-60.svg"
                  />
                  <a href="/coaches" className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="self-stretch relative z-[2]">Coaches</div>
                  </a>
                </div>
                <div className="w-[143px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[15px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 object-contain z-[2]"
                      loading="lazy"
                      alt=""
                      src="/book1.svg"
                    />
                    <a href="/sales-report" className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <div className="self-stretch relative z-[2]">Report</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-24 flex flex-row items-start justify-start py-0 px-2.5 box-border text-3xs">
            <div className="flex-1 flex flex-row items-start justify-start gap-4">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[2]"
                loading="lazy"
                alt=""
                src="/boxarrowright1.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="self-stretch relative z-[2]">Logout</div>
              </div>
            </div>
          </div>
        </div>
        <section className="w-[597px] flex flex-col items-start justify-start pt-[29px] px-0 pb-0 box-border min-w-[597px] max-w-full text-left text-xl text-midnightblue-100 font-monument-extended mq1000:flex-1 mq1000:min-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-5 max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[38px] max-w-full mq725:flex-wrap mq725:gap-[19px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-9 min-w-[270px] max-w-full mq450:gap-[18px]">
                <div className="flex flex-row items-start justify-start py-0 px-[50px]">
                  <div className="flex flex-row items-start justify-start relative">
                    <a className="[text-decoration:none] relative text-[inherit] z-[1] mq450:text-base">
                      <p className="m-0">STAMINA</p>
                      <p className="m-0">FITNESS</p>
                    </a>
                    <img
                      className="h-[111px] w-[78px] absolute !m-[0] bottom-[-34px] left-[-76px] object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="/logo@2x.png"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-13xl font-poppins">
                  <h1 className="m-0 self-stretch relative text-inherit tracking-[0.05em] leading-[42px] font-bold font-inherit z-[2] mq1000:text-7xl mq1000:leading-[34px] mq450:text-lgi mq450:leading-[25px]">
                    Active Members
                  </h1>
                  <div className="w-[262px] h-0 flex flex-row items-start justify-start py-0 px-2.5 box-border text-mini text-gray-200">
                    <div className="h-0 flex-1 relative inline-block z-[1]">{` `}</div>
                  </div>
                </div>
              </div>
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
                    src="/rinotification2fill1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-slategray-200 flex flex-col items-start justify-start pt-[20.4px] px-6 pb-5 box-border gap-[15.3px] max-w-full z-[1] text-cornsilk font-poppins mq450:pt-5 mq450:box-border">
              <div className="w-[597px] h-[362px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-slategray-200 hidden max-w-full" />
              <h3 className="m-0 w-[253px] relative text-inherit font-bold font-inherit inline-block z-[2] mq450:text-base">
                Gym Members
              </h3>
              <div className="w-[538px] flex flex-row items-start justify-start gap-[13px] max-w-full text-sm mq725:flex-wrap">
                <div className="flex-1 flex flex-row items-end justify-start min-w-[135px] text-xs">
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-px">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[28.3px]">
                      <div className="relative font-light inline-block min-w-[82px] z-[2]">
                        Show Entities
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[18.2px] text-sm">
                        <div className="w-[119px] flex flex-row items-start justify-start gap-[7px]">
                          <div className="flex flex-col items-start justify-start pt-[5.4px] px-0 pb-0">
                            <img
                              className="w-[11px] h-[10.8px] relative z-[2]"
                              loading="lazy"
                              alt=""
                              src="/vector3.svg"
                            />
                          </div>
                          <b className="flex-1 relative z-[2]">Name</b>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1.5 pr-0 text-white">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[11.8px]">
                            <div className="w-[82px] relative inline-block z-[2]">
                              Member 1
                            </div>
                            <div className="w-[107px] relative inline-block z-[2]">
                              Member 2
                            </div>
                            <div className="w-[113px] relative inline-block z-[2]">
                              Member 3
                            </div>
                            <div className="self-stretch relative z-[2]">
                              Member 4
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[22.3px] ml-[-48px] text-center text-base text-white">
                    <div className="w-[58px] rounded-xl bg-darkslateblue-100 flex flex-row items-start justify-start py-[3px] px-[9px] box-border gap-2.5 z-[3]">
                      <div className="w-[17px] relative flex items-center justify-center shrink-0 min-w-[17px]">
                        10
                      </div>
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/materialsymbolskeyboardarrowdownrounded1.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[37px] pr-0 text-left text-sm text-cornsilk">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">
                        <b className="relative inline-block min-w-[88px] z-[3]">
                          Member ID
                        </b>
                        <div className="w-[84px] flex flex-col items-start justify-start gap-[11.3px] text-white">
                          <div className="self-stretch relative z-[2]">
                            SFM2301N1
                          </div>
                          <div className="relative inline-block min-w-[84px] z-[2]">
                            SFM2301N2
                          </div>
                          <div className="relative inline-block min-w-[84px] z-[3]">
                            SFM2301N3
                          </div>
                          <div className="relative inline-block min-w-[84px] z-[3]">
                            SFM2301N4
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[52.3px] pb-0 pl-0 pr-2">
                  <div className="flex flex-col items-start justify-start gap-[18px]">
                    <b className="relative inline-block min-w-[102px] z-[2]">
                      Date Enrolled
                    </b>
                    <div className="w-[84px] flex flex-col items-start justify-start gap-[11.9px] text-white">
                      <div className="self-stretch relative z-[2]">Jan 11</div>
                      <div className="self-stretch relative z-[2]">Jan 11</div>
                      <div className="self-stretch relative z-[2]">Jan 11</div>
                      <div className="self-stretch relative z-[2]">Jan 11</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-start gap-[21.6px]">
                  <div className="w-[187px] flex flex-row items-end justify-start gap-3">
                    <button className="cursor-pointer [border:none] py-[3px] px-[21px] bg-darkslateblue-100 flex-1 rounded-xl flex flex-row items-start justify-start z-[2] hover:bg-cornflowerblue">
                      <div className="relative text-base font-poppins text-white text-center inline-block min-w-[57px]">
                        Search
                      </div>
                    </button>
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                      <img
                        className="w-6 h-[25.8px] relative z-[2]"
                        loading="lazy"
                        alt=""
                        src="/vector-211.svg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-start gap-[5px]">
                    <div className="flex flex-col items-start justify-start gap-[17.1px]">
                      <b className="relative inline-block min-w-[111px] z-[2]">
                        Date Expiration
                      </b>
                      <div className="w-[103px] flex flex-row items-start justify-start pt-0 px-[17px] pb-[13.2px] box-border text-white">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[13.9px]">
                          <div className="self-stretch relative z-[2]">
                            Feb 11
                          </div>
                          <div className="self-stretch relative z-[2]">
                            Feb 11
                          </div>
                          <div className="self-stretch relative z-[2]">
                            Feb 11
                          </div>
                          <div className="self-stretch relative z-[2]">
                            Feb 11
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pl-[37px] pr-0 text-center text-gray-200">
                        <div className="rounded-3xs bg-slategray-300 flex flex-row items-start justify-start py-[3px] px-[15px] z-[2]">
                          <div className="relative inline-block min-w-[59px]">
                            Previous
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[18.2px] text-center text-gray-200">
                      <div className="flex flex-row items-start justify-start py-0 pl-1 pr-0 text-left text-cornsilk">
                        <b className="relative inline-block min-w-[60px] z-[2]">
                          Actions
                        </b>
                      </div>
                      <div className="flex flex-row items-start justify-start pt-0 pb-[13.4px] pl-4 pr-2.5 text-3xs">
                        <div className="flex flex-col items-start justify-start gap-[13.4px]">
                          <div className="rounded-3xs bg-white flex flex-row items-start justify-start py-[3px] px-2.5 z-[2]">
                            <div className="relative inline-block min-w-[18px]">
                              Edit
                            </div>
                          </div>
                          <div className="rounded-3xs bg-white flex flex-row items-start justify-start py-[3px] px-2.5 z-[2]">
                            <div className="relative inline-block min-w-[18px]">
                              Edit
                            </div>
                          </div>
                          <div className="rounded-3xs bg-white flex flex-row items-start justify-start py-[3px] px-2.5 z-[2]">
                            <div className="relative inline-block min-w-[18px]">
                              Edit
                            </div>
                          </div>
                          <div className="rounded-3xs bg-white flex flex-row items-start justify-start py-[3px] px-2.5 z-[2]">
                            <div className="relative inline-block min-w-[18px]">
                              Edit
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-3xs bg-slategray-300 flex flex-row items-start justify-start py-[3px] px-4 z-[2]">
                        <div className="relative inline-block min-w-[31px]">
                          Next
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="w-[561px] flex flex-row items-start justify-center max-w-full">
        <div className="w-[357px] flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end">
            <div className="w-[158px] flex flex-row items-start justify-start gap-[5px]">
              <div className="h-[27px] flex-1 rounded-3xs bg-slategray-300 flex flex-row items-start justify-start py-[3px] px-[15px] box-border">
                <div className="self-stretch flex-1 relative flex items-center justify-center">
                  Previous
                </div>
              </div>
              <div className="h-[27px] w-16 rounded-3xs bg-slategray-300 flex flex-row items-start justify-start py-[3px] px-4 box-border">
                <div className="self-stretch flex-1 relative flex items-center justify-center">
                  Next
                </div>
              </div>
            </div>
          </div>
          <img className="w-5 h-5 relative overflow-hidden shrink-0" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ViewMembers;
