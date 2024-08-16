import FrameComponent10 from "../components/FrameComponent10";

const EquipmentInventory = () => {
  return (
    <div className="w-full h-[950px] relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[68px] px-[73px] pb-[63px] box-border gap-[92px] leading-[normal] tracking-[normal] mq1000:h-auto mq725:gap-[23px] mq1050:gap-[46px] mq1050:pl-9 mq1050:pr-9 mq1050:box-border">
      <div className="w-[930px] h-[590px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-white hidden max-w-full" />
      <div className="w-[647px] h-[485px] relative rounded-tl-none rounded-tr-3xs rounded-b-none bg-darkslategray-300 hidden max-w-full" />
      <main className="w-[930px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-whitesmoke-100 flex flex-row items-start justify-start pt-0.5 px-0 pb-0 box-border gap-10 max-w-full mq1000:flex-wrap mq450:gap-5">
        <div className="self-stretch w-[930px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-whitesmoke-100 hidden max-w-full" />
        <FrameComponent10 />
        <section className="w-[597px] flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border min-w-[597px] max-w-full text-left text-xl text-midnightblue-100 font-monument-extended mq1000:flex-1 mq1000:min-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-5 max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-5 mq725:flex-wrap">
              <div className="w-[249px] flex flex-col items-start justify-start gap-[34px]">
                <div className="flex flex-row items-start justify-start py-0 px-[47px]">
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
                <div className="self-stretch flex flex-col items-start justify-start gap-[11px] font-poppins">
                  <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-81xl bg-white flex flex-row items-start justify-start py-0 px-[23px] whitespace-nowrap z-[1]">
                    <h3 className="m-0 relative text-inherit font-bold font-inherit">
                      Add Equipment
                    </h3>
                  </div>
                  <div className="self-stretch h-0 flex flex-row items-start justify-start py-0 pl-[7px] pr-0 box-border text-mini text-gray-200">
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
                Manage Equipments
              </h3>
              <div className="w-[538px] flex flex-row items-start justify-between gap-5 max-w-full text-sm mq725:flex-wrap">
                <div className="w-[164px] flex flex-col items-start justify-start py-0 pl-0 pr-[7px] box-border gap-[21.6px] text-xs">
                  <div className="flex flex-row items-start justify-start">
                    <div className="flex flex-col items-start justify-start pt-[4.3px] px-0 pb-0">
                      <div className="relative font-light inline-block min-w-[82px] z-[2]">
                        Show Entities
                      </div>
                    </div>
                    <div className="w-[58px] rounded-xl bg-darkslateblue-100 flex flex-row items-start justify-start py-[3px] px-[9px] box-border gap-2.5 z-[3] text-center text-base text-white">
                      <div className="w-[17px] relative flex items-center justify-center shrink-0 min-w-[17px]">
                        10
                      </div>
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/materialsymbolskeyboardarrowdownrounded1.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[18.2px] text-sm">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                      <div className="flex flex-col items-start justify-start pt-[5.4px] px-0 pb-0">
                        <img
                          className="w-[11px] h-[10.8px] relative z-[2]"
                          loading="lazy"
                          alt=""
                          src="/vector3.svg"
                        />
                      </div>
                      <b className="flex-1 relative z-[2]">Equipment Name</b>
                    </div>
                    <div className="w-[136px] flex flex-row items-start justify-start py-0 px-1.5 box-border text-white">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[11.8px]">
                        <div className="w-[82px] relative inline-block z-[2]">
                          Treadmill
                        </div>
                        <div className="relative inline-block min-w-[107px] z-[2]">
                          10 lbs Dumbell
                        </div>
                        <div className="w-[113px] relative inline-block z-[2]">
                          15 lbs Dumbell
                        </div>
                        <div className="self-stretch relative z-[2]">
                          20 lbs Dumbell
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[67px] flex flex-col items-start justify-start pt-[51.6px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[19.3px]">
                    <b className="relative inline-block min-w-[67px] z-[2]">
                      Total no.
                    </b>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-5 pr-[23px] text-white">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[11.8px]">
                        <div className="w-5 relative inline-block z-[2]">1</div>
                        <div className="w-5 relative inline-block z-[2]">3</div>
                        <div className="w-5 relative inline-block z-[2]">6</div>
                        <div className="self-stretch relative whitespace-pre-wrap z-[2]">{`12   `}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[187px] flex flex-col items-end justify-start gap-[21.6px] text-white">
                  <div className="self-stretch flex flex-row items-end justify-start gap-3">
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
                  <div className="flex flex-row items-start justify-start gap-[5px]">
                    <div className="flex flex-col items-start justify-start gap-[31.6px]">
                      <div className="w-[88px] flex flex-col items-start justify-start gap-[13.4px]">
                        <div className="w-[77px] flex flex-col items-start justify-start gap-[18.2px] text-cornsilk">
                          <div className="w-[71px] flex flex-row items-start justify-start">
                            <b className="flex-1 relative z-[2]">Status</b>
                            <div className="flex flex-col items-start justify-start pt-[6.4px] px-0 pb-0">
                              <img
                                className="w-[11px] h-[10.8px] relative z-[3]"
                                loading="lazy"
                                alt=""
                                src="/vector4.svg"
                              />
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-0 text-white">
                            <div className="flex-1 relative z-[2]">Active</div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-[11px]">
                          <div className="flex-1 relative z-[2]">Inactive</div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-1.5">
                          <div className="flex-1 relative z-[2]">Active</div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-0">
                          <div className="flex-1 relative z-[2]">Active</div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pl-7 pr-0 text-center text-gray-200">
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
      <div className="w-[898px] flex flex-row items-start justify-center max-w-full">
        <img className="h-5 w-5 relative overflow-hidden shrink-0" alt="" />
      </div>
    </div>
  );
};

export default EquipmentInventory;
