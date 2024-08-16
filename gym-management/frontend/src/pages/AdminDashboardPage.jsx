import GroupComponent from "../components/GroupComponent";

const AdminDashboardPage = () => {
  return (
    <div className="w-full h-[950px] relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[68px] px-[73px] pb-[63px] box-border gap-[92px] leading-[normal] tracking-[normal] mq1000:h-auto mq725:gap-[23px] mq1050:gap-[46px] mq1050:pl-9 mq1050:pr-9 mq1050:box-border">
      <main className="w-[930px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-whitesmoke-100 flex flex-row items-start justify-start gap-[26px] max-w-full z-[1] mq1000:flex-wrap">
        <div className="h-[590px] w-[930px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-whitesmoke-100 hidden max-w-full" />
        <div className="self-stretch w-[930px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-whitesmoke-100 hidden max-w-full" />
        <GroupComponent />
        <section className="w-[630px] flex flex-col items-start justify-start pt-[29px] px-0 pb-0 box-border min-w-[630px] max-w-full text-left text-mini text-midnightblue-100 font-poppins mq1000:flex-1 mq1000:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[9px] max-w-full mq725:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[21px] max-w-full">
              <div className="flex flex-row items-start justify-start pt-0 px-[71px] pb-3 text-xl font-monument-extended mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="flex flex-row items-start justify-start relative">
                  <a className="[text-decoration:none] relative text-[inherit] z-[2] mq450:text-base">
                    <p className="m-0">STAMINA</p>
                    <p className="m-0">FITNESS</p>
                  </a>
                  <img
                    className="h-[111px] w-[78px] absolute !m-[0] bottom-[-34px] left-[-76px] object-cover z-[3]"
                    loading="lazy"
                    alt=""
                    src="/logo@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full text-gray-200">
                <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-xl bg-white flex flex-row items-start justify-start pt-[23px] px-7 pb-7 box-border gap-[21px] max-w-full z-[2] mq450:flex-wrap">
                  <div className="h-[141px] w-[430px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-xl bg-white hidden max-w-full" />
                  <div className="w-[242px] flex flex-col items-start justify-start gap-2">
                    <div className="self-stretch flex flex-col items-start justify-start gap-px">
                      <h3 className="m-0 relative text-inherit z-[1] font-inherit">
                        <span>
                          <span>Welcome Banner,</span>
                          <b className="text-midnightblue-100">{` `}</b>
                        </span>
                        <b className="text-midnightblue-100">
                          <span>Martell</span>
                        </b>
                      </h3>
                      <h3 className="m-0 self-stretch h-0 relative text-inherit font-normal font-inherit inline-block z-[3]">{` `}</h3>
                    </div>
                    <div className="w-[234px] relative text-3xs font-extralight inline-block z-[1]">
                      <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="h-[90px] w-[90px] relative rounded-[50%] bg-midnightblue-100 z-[1]" />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-3 mq450:flex-wrap">
                  <div className="flex-[0.9679] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-xl bg-white flex flex-row items-start justify-start pt-2.5 pb-[27px] pl-[18px] pr-3.5 box-border gap-1 min-w-[138px] z-[2] mq450:flex-1">
                    <div className="h-[198px] w-[213px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-xl bg-white hidden" />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[21px]">
                      <h3 className="m-0 w-[135px] relative text-inherit font-bold font-inherit inline-block z-[3]">
                        Coaches
                      </h3>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[7px] text-xs">
                        <div className="flex flex-col items-start justify-start gap-3">
                          <div className="w-[31px] h-[31px] relative rounded-[50%] bg-darkslateblue-500 z-[3]" />
                          <div className="w-[31px] h-[31px] relative rounded-[50%] bg-darkslateblue-500 z-[3]" />
                          <div className="w-[31px] h-[31px] relative rounded-[50%] bg-darkslateblue-500 z-[3]" />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
                              <div className="self-stretch relative z-[3]">
                                <p className="m-0">Juan Dela Cruz</p>
                                <p className="m-0">&nbsp;</p>
                              </div>
                              <div className="self-stretch relative z-[3]">
                                Peter
                              </div>
                            </div>
                            <div className="self-stretch relative z-[3]">
                              Peter
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <img
                        className="w-5 h-5 relative overflow-hidden shrink-0 z-[3]"
                        loading="lazy"
                        alt=""
                        src="/threedotsvertical.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-xl bg-white flex flex-row items-start justify-start pt-2.5 pb-[37px] pl-4 pr-2.5 box-border gap-6 min-w-[133px] z-[2] text-xl">
                    <div className="h-[198px] w-[205px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-xl bg-white hidden" />
                    <div className="relative font-extrabold hidden min-w-[46px] mq450:text-base">
                      84%
                    </div>
                    <div className="h-[151px] flex-1 flex flex-col items-start justify-start gap-4 text-mini">
                      <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit z-[1]">
                        Sales
                      </h3>
                      <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-3 pr-[11px]">
                        <div className="self-stretch flex-1 relative rounded-[50%] bg-darkslateblue-500 z-[2]" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <img
                        className="w-5 h-5 relative overflow-hidden shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src="/threedotsvertical.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-0 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[7px] max-w-full">
                  <div className="w-[207px] flex flex-row items-start justify-start py-0 px-[5px] box-border">
                    <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit z-[2]">
                      Active Members
                    </h3>
                  </div>
                  <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-xl bg-slategray-100 flex flex-col items-start justify-start pt-4 pb-[33px] pl-[19px] pr-px box-border relative gap-[27px] max-w-full z-[2] text-xs text-white">
                    <div className="w-[430px] h-[253px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-xl bg-slategray-100 hidden max-w-full z-[0]" />
                    <div className="self-stretch flex flex-col items-start justify-start gap-2.5 max-w-full text-3xs">
                      <div className="w-[391px] flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
                        <div className="w-[140px] flex flex-row items-start justify-start gap-[7px]">
                          <div className="flex-1 rounded-8xs bg-darkslateblue-200 flex flex-row items-start justify-start pt-[3px] px-2 pb-0.5 z-[3]">
                            <div className="h-[21px] w-[118px] relative rounded-8xs bg-darkslateblue-200 hidden" />
                            <div className="w-[97px] relative font-medium inline-block shrink-0 z-[4]">
                              Search
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                            <img
                              className="w-[15px] h-[15px] relative overflow-hidden shrink-0 z-[3]"
                              loading="lazy"
                              alt=""
                              src="/search.svg"
                            />
                          </div>
                        </div>
                        <div className="w-[67px] flex flex-row items-start justify-start text-xs">
                          <div className="h-[23px] flex-1 relative font-medium inline-block z-[3]">
                            Sort by
                          </div>
                          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 ml-[-2px]">
                            <img
                              className="w-[15px] h-[15px] relative overflow-hidden shrink-0 z-[4]"
                              loading="lazy"
                              alt=""
                              src="/arrowdownup.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1.5 pr-0 box-border max-w-full text-center text-whitesmoke-100">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
                          <div className="self-stretch flex flex-row items-start justify-end">
                            <div className="w-[221px] flex flex-row items-start justify-start gap-0.5">
                              <b className="flex-1 relative z-[3]">Date paid</b>
                              <div className="flex flex-col items-start justify-start py-0 px-0">
                                <b className="ml-[-2px] w-[73px] relative inline-block z-[4]">
                                  Date Expiry
                                </b>
                              </div>
                              <b className="flex-1 relative z-[3]">Status</b>
                            </div>
                          </div>
                          <div className="w-[191px] flex flex-row items-start justify-start gap-[13px] text-left text-xs text-white">
                            <div className="h-[31px] w-[31px] relative rounded-[50%] [background:linear-gradient(#959595,_#959595),_#204423] z-[3]" />
                            <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                              <div className="self-stretch flex flex-row items-start justify-start gap-2">
                                <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                                  <b className="self-stretch relative z-[3]">
                                    James Medalla
                                  </b>
                                </div>
                                <img
                                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[3]"
                                  loading="lazy"
                                  alt=""
                                  src="/threedotsvertical-2.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-1.5">
                      <div className="flex flex-row items-end justify-start gap-[13px]">
                        <div className="h-[31px] w-[31px] relative rounded-[50%] [background:linear-gradient(#959595,_#959595),_#204423] z-[3]" />
                        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                              <b className="relative z-[3]">
                                Kent Charl Mabutas
                              </b>
                            </div>
                            <img
                              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[4] ml-[-6px]"
                              loading="lazy"
                              alt=""
                              src="/threedotsvertical-2.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[203px] flex flex-row items-start justify-start py-0 px-1.5 box-border">
                      <div className="flex-1 flex flex-row items-end justify-start gap-[13px]">
                        <div className="h-[31px] w-[31px] relative rounded-[50%] [background:linear-gradient(#959595,_#959595),_#204423] z-[3]" />
                        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
                          <div className="self-stretch flex flex-row items-start justify-start">
                            <b className="flex-1 relative z-[3]">
                              John Elmar Rodrigo
                            </b>
                            <img
                              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[4] ml-[-6px]"
                              loading="lazy"
                              alt=""
                              src="/threedotsvertical-2.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <input
                      className="[border:none] [outline:none] bg-[transparent] w-full h-[50px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] rounded-t-none rounded-b-xl [background:linear-gradient(180deg,_rgba(116,_120,_155,_0.29),_#74789b_69.43%)] z-[5]"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[561px] w-[187px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border min-w-[187px] text-center text-sm mq725:flex-1">
              <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[46px]">
                <div className="w-[172px] flex flex-row items-start justify-end py-0 px-4 box-border">
                  <div className="flex-1 flex flex-row items-start justify-between gap-5">
                    <div className="w-[86px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                      <a className="[text-decoration:none] self-stretch relative text-[inherit] z-[2]">
                        Feedback
                      </a>
                    </div>
                    <img
                      className="h-[23px] w-[23px] relative overflow-hidden shrink-0 min-h-[23px] z-[2]"
                      loading="lazy"
                      alt=""
                      src="/rinotification2fill.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[13px] text-left text-mini text-gray-200">
                  <textarea
                    className="[border:none] bg-white h-[178px] w-auto [outline:none] self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-xl flex flex-row items-start justify-start py-[11px] px-[13px] box-border font-poppins font-bold text-mini text-gray-200 z-[2]"
                    placeholder="Calendar"
                    rows={9}
                    cols={9}
                  />
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-2">
                    <h3 className="m-0 w-[135px] relative text-inherit font-bold font-inherit inline-block z-[2]">
                      Inventory
                    </h3>
                    <div className="self-stretch flex-1 relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-xl bg-white z-[2]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="w-[930px] h-[590px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-white hidden max-w-full" />
      <div className="w-[647px] h-[485px] relative rounded-tl-none rounded-tr-3xs rounded-b-none bg-darkslategray-300 hidden max-w-full" />
      <div className="w-[898px] flex flex-row items-start justify-center max-w-full">
        <img className="h-5 w-5 relative overflow-hidden shrink-0" alt="" />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
