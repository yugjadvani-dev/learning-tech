import FrameComponent13 from "../components/FrameComponent13";

const SalesReport = () => {
  return (
    <div className="w-full h-[950px] relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[68px] px-[73px] pb-[63px] box-border gap-[92px] leading-[normal] tracking-[normal] mq1000:h-auto mq725:gap-[23px] mq1050:gap-[46px] mq1050:pl-9 mq1050:pr-9 mq1050:box-border">
      <div className="w-[930px] h-[590px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-white hidden max-w-full" />
      <div className="w-[647px] h-[485px] relative rounded-tl-none rounded-tr-3xs rounded-b-none bg-darkslategray-300 hidden max-w-full" />
      <main className="w-[930px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-whitesmoke-100 flex flex-row items-start justify-start pt-0.5 px-0 pb-0 box-border gap-[31px] max-w-full mq1000:flex-wrap mq450:gap-[15px]">
        <div className="self-stretch w-[930px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-whitesmoke-100 hidden max-w-full" />
        <FrameComponent13 />
        <section className="w-[612px] flex flex-col items-start justify-start pt-[31px] px-0 pb-0 box-border min-w-[612px] max-w-full text-left text-13xl text-midnightblue-100 font-poppins mq1000:flex-1 mq1000:min-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-[43px] max-w-full mq725:gap-[21px]">
            <div className="self-stretch flex flex-col items-end justify-start gap-[29px] max-w-full">
              <div className="w-[596px] flex flex-row items-start justify-end py-0 px-[7px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq725:flex-wrap">
                  <div className="w-[242px] flex flex-row items-start justify-start relative">
                    <h1 className="!m-[0] w-[415px] absolute right-[-150px] bottom-[-13px] text-inherit tracking-[0.05em] leading-[42px] font-bold font-inherit inline-block z-[1] mq1000:text-7xl mq1000:leading-[34px] mq450:text-lgi mq450:leading-[25px]">
                      Sales Report
                    </h1>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[76px] text-xl font-monument-extended">
                      <div className="flex flex-row items-start justify-start py-0 px-[39px]">
                        <a className="[text-decoration:none] relative text-[inherit] z-[1] mq450:text-base">
                          <p className="m-0">STAMINA</p>
                          <p className="m-0">FITNESS</p>
                        </a>
                      </div>
                      <div className="self-stretch h-0 relative text-mini font-poppins text-gray-200 inline-block z-[2]">{` `}</div>
                    </div>
                    <img
                      className="h-[111px] w-[78px] absolute !m-[0] top-[-29px] left-[-37px] object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="/logo@2x.png"
                    />
                  </div>
                  <div className="w-[140px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border text-center text-sm">
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
              </div>
              <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white flex flex-col items-start justify-start pt-[22px] px-[31px] pb-[49px] box-border gap-1.5 max-w-full z-[1] text-base text-gray-200">
                <div className="w-[612px] h-[134px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white hidden max-w-full" />
                <div className="w-[508.6px] flex flex-row items-start justify-between gap-5 max-w-full mq725:flex-wrap">
                  <b className="w-[119px] relative inline-block shrink-0 z-[2]">
                    From Date
                  </b>
                  <div className="w-[124px] flex flex-col items-start justify-start py-0 pl-0 pr-1.5 box-border">
                    <b className="self-stretch relative z-[2]">To Date</b>
                  </div>
                  <b className="w-[117.6px] relative inline-block shrink-0 z-[2]">
                    Total
                  </b>
                </div>
                <div className="w-[366px] flex flex-row items-start justify-start gap-[18px] max-w-full mq450:flex-wrap">
                  <div className="flex-1 rounded-xl bg-whitesmoke-200 flex flex-row items-start justify-end pt-[7px] px-[9px] pb-1.5 box-border min-w-[114px] z-[2]">
                    <div className="h-[33px] w-[175px] relative rounded-xl bg-whitesmoke-200 hidden" />
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 z-[3]"
                      loading="lazy"
                      alt=""
                      src="/journalcheck-1.svg"
                    />
                  </div>
                  <div className="flex-1 rounded-xl bg-whitesmoke-200 flex flex-row items-start justify-end pt-[7px] px-2 pb-1.5 box-border min-w-[114px] z-[2]">
                    <div className="h-[33px] w-[173px] relative rounded-xl bg-whitesmoke-200 hidden" />
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 z-[3]"
                      loading="lazy"
                      alt=""
                      src="/journalcheck-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white flex flex-col items-start justify-start pt-[23.7px] px-6 pb-[17.1px] box-border gap-[12.8px] max-w-full z-[1] text-xl text-gray-200">
              <div className="w-[611px] h-[289px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white hidden max-w-full" />
              <h3 className="m-0 w-[258.9px] relative text-inherit font-bold font-inherit inline-block z-[2] mq450:text-base">
                Payment History
              </h3>
              <div className="self-stretch flex flex-row items-end justify-start gap-2.5 text-xs mq725:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[22px] min-w-[141px]">
                  <div className="flex flex-row items-start justify-start gap-[1.5px]">
                    <div className="flex flex-col items-start justify-start pt-[1.6px] px-0 pb-0">
                      <div className="relative font-light inline-block min-w-[83.9px] shrink-0 z-[2]">
                        Show Entities
                      </div>
                    </div>
                    <div className="h-[23px] w-[60px] rounded-xl bg-lightslategray-100 flex flex-row items-start justify-start py-0 pl-[9px] pr-0 box-border gap-2.5 shrink-0 z-[2] text-center text-base text-midnightblue-100">
                      <div className="flex-1 relative inline-block min-w-[17px]">
                        10
                      </div>
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/materialsymbolskeyboardarrowdownrounded3.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 text-sm text-midnightblue-100">
                    <div className="flex-1 flex flex-row items-start justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <b className="self-stretch h-[26.7px] relative inline-block shrink-0 z-[2]">
                          Member Name
                        </b>
                        <div className="w-[90.6px] flex flex-row items-start justify-start pt-0 px-[3px] pb-3.5 box-border mt-[-0.6px]">
                          <div className="flex-1 relative z-[3]">Member 1</div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-3 mt-[-0.6px]">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[13.4px]">
                            <div className="w-[109.5px] relative inline-block z-[2]">
                              Member 2
                            </div>
                            <div className="w-[115.6px] relative inline-block z-[2]">
                              Member 3
                            </div>
                            <div className="self-stretch h-[26.7px] relative inline-block shrink-0 z-[2]">
                              Member 4
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[88px] flex flex-col items-start justify-start gap-[11.7px] ml-[-15.3px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
                          <b className="relative inline-block min-w-[88px] z-[3]">
                            Member ID
                          </b>
                          <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5">
                            <div className="flex-1 relative z-[3]">
                              SFM2301N1
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-0.5">
                          <div className="relative inline-block min-w-[84px] z-[2]">
                            SFM2301N2
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-0.5">
                          <div className="relative inline-block min-w-[84px] z-[2]">
                            SFM2301N3
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-0.5">
                          <div className="relative inline-block min-w-[84px] z-[3]">
                            SFM2301N4
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end pt-0 pb-[5.9px] pl-0 pr-1.5 text-sm text-midnightblue-100">
                  <div className="flex flex-col items-start justify-start gap-[13.3px]">
                    <div className="flex flex-col items-start justify-start gap-[5px]">
                      <b className="w-[76px] relative inline-block z-[2]">
                        Plan
                      </b>
                      <div className="relative inline-block min-w-[86px] z-[2]">
                        1 Month - PT
                      </div>
                    </div>
                    <div className="relative inline-block min-w-[97px] z-[2]">
                      6 Months - PT
                    </div>
                    <div className="relative inline-block min-w-[86px] z-[2]">
                      1 Month - M
                    </div>
                    <div className="w-[86px] relative inline-block z-[2]">
                      3 Months
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5.9px] box-border min-w-[144px] text-center text-base text-white">
                  <div className="self-stretch flex flex-col items-end justify-start gap-[13px]">
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[19px] pr-[18px]">
                      <div className="flex-1 flex flex-row items-end justify-start gap-[8.7px]">
                        <div className="flex-1 rounded-xl bg-lightslategray-100 flex flex-row items-start justify-start pt-[5.8px] px-[21px] pb-[5.7px] z-[2]">
                          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[57px]">
                            Search
                          </a>
                        </div>
                        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                          <img
                            className="w-5 h-5 relative z-[2]"
                            alt=""
                            src="/vector-22.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start text-left text-sm text-midnightblue-100">
                      <div className="flex-1 flex flex-row items-start justify-start">
                        <div className="w-[86px] flex flex-col items-start justify-start py-0 pl-0 pr-[25px] box-border">
                          <b className="self-stretch h-[26.7px] relative inline-block shrink-0 z-[3]">
                            Month
                          </b>
                          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[16.6px] pl-px pr-0 mt-[-0.7px]">
                            <div className="flex-1 relative z-[2]">JAN</div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[14.6px] mt-[-0.7px]">
                            <div className="flex-1 relative z-[3]">JAN</div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[16.6px] mt-[-0.7px]">
                            <div className="flex-1 relative z-[3]">JAN</div>
                          </div>
                          <div className="self-stretch relative z-[3] mt-[-0.7px]">
                            JAN
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-4 ml-[-25px]">
                          <div className="self-stretch flex flex-col items-start justify-start">
                            <b className="self-stretch h-[27px] relative inline-block shrink-0 z-[4]">
                              Date Paid
                            </b>
                            <div className="flex flex-row items-start justify-start py-0 px-px mt-[-2px]">
                              <div className="relative inline-block min-w-[76px] z-[3]">
                                10-01-2023
                              </div>
                            </div>
                          </div>
                          <div className="relative inline-block min-w-[82px] z-[2]">
                            10-01-2023
                          </div>
                          <div className="relative inline-block min-w-[82px] z-[2]">
                            10-01-2023
                          </div>
                          <div className="relative inline-block min-w-[82px] z-[2]">
                            10-01-2023
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[1.3px] ml-[-25px]">
                          <div className="flex flex-row items-start justify-start py-0 pl-px pr-0">
                            <b className="h-[26.7px] relative inline-block min-w-[68.6px] z-[5]">
                              Amount
                            </b>
                          </div>
                          <div className="w-12 flex flex-col items-start justify-start gap-[12.7px]">
                            <div className="self-stretch flex flex-row items-start justify-start py-0 px-px">
                              <div className="flex-1 relative z-[2]">1300</div>
                            </div>
                            <div className="w-[46px] relative inline-block z-[2]">
                              6000
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start py-0 px-px">
                              <div className="flex-1 relative z-[2]">1200</div>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0">
                              <div className="flex-1 relative z-[2]">3500</div>
                            </div>
                          </div>
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
      <div className="w-[898px] flex flex-row items-start justify-center max-w-full">
        <img className="h-5 w-5 relative overflow-hidden shrink-0" alt="" />
      </div>
    </div>
  );
};

export default SalesReport;
