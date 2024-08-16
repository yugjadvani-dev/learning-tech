import { useCallback } from "react";

const EquipmentInventoryAdd = () => {
  const onGroupContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='inventoryRect']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full h-[950px] relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[68px] px-[73px] pb-[61px] box-border gap-[90px] leading-[normal] tracking-[normal] mq725:h-auto mq725:gap-[22px] mq1050:gap-[45px] mq1050:pl-9 mq1050:pr-9 mq1050:box-border">
      <div className="w-[930px] h-[590px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-white hidden max-w-full" />
      <div className="w-[647px] h-[485px] relative rounded-tl-none rounded-tr-3xs rounded-b-none bg-darkslategray-300 hidden max-w-full" />
      <main className="w-[933px] h-[821px] relative max-w-full shrink-0 mq725:h-auto mq725:min-h-[821]">
        <section className="absolute top-[0px] left-[3px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-whitesmoke-100 w-full h-full">
          <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-whitesmoke-100 w-full h-full hidden mix-blend-normal" />
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-midnightblue-100 w-[226px] mix-blend-normal z-[1]" />
        </section>
        <section className="absolute top-[2px] left-[0px] w-full flex flex-col items-start justify-start pt-[3px] px-9 pb-[31px] box-border gap-28 max-w-full h-full text-left text-mini text-white font-poppins mq450:gap-7 mq1000:gap-14">
          <div className="w-[833px] flex flex-row items-start justify-start gap-7 max-w-full">
            <div className="w-[183px] flex flex-col items-start justify-start pt-11 px-0 pb-0 box-border mq725:hidden">
              <div className="self-stretch flex flex-col items-start justify-start gap-[50px]">
                <div className="w-[173px] flex flex-col items-start justify-start gap-2.5">
                  <div className="flex flex-row items-start justify-start py-0 px-[52px]">
                    <img
                      className="h-[51px] w-[51px] relative overflow-hidden shrink-0 mix-blend-normal z-[2]"
                      loading="lazy"
                      alt=""
                      src="/personcircle1.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit mix-blend-normal z-[2]">
                      Administrator Name
                    </h3>
                    <div className="w-40 relative text-3xs text-center inline-block mix-blend-normal whitespace-nowrap z-[2] mt-[-2px]">
                      juan.delacruz@gmail.com
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-0 text-xs">
                  <div className="flex-1 flex flex-row items-start justify-start gap-3">
                    <div className="flex flex-col items-start justify-start gap-[18px]">
                      <input className="m-0 w-[23px] h-5" type="checkbox" />
                      <div className="flex flex-col items-start justify-start gap-[15.9px]">
                        <div className="flex flex-row items-start justify-start pt-0 pb-[5.1px] pl-px pr-0.5">
                          <img
                            className="h-5 w-5 relative mix-blend-normal z-[2]"
                            loading="lazy"
                            alt=""
                            src="/group-61.svg"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-start pt-0 pb-[4.1px] pl-px pr-[5px]">
                          <img
                            className="h-[17px] w-[17px] relative overflow-hidden shrink-0 mix-blend-normal z-[2]"
                            loading="lazy"
                            alt=""
                            src="/pencilsquare1.svg"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-start pt-0 pb-[2.2px] pl-px pr-0.5">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0 mix-blend-normal z-[2]"
                            loading="lazy"
                            alt=""
                            src="/journalcheck11.svg"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pl-[3px] pr-0">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0 mix-blend-normal z-[2]"
                            loading="lazy"
                            alt=""
                            src="/creditcard2back1.svg"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-px">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0 z-[3]"
                            loading="lazy"
                            alt=""
                            src="/materialsymbolsinventory2outline1.svg"
                          />
                        </div>
                        <img
                          className="w-5 h-5 relative overflow-hidden shrink-0 z-[2]"
                          loading="lazy"
                          alt=""
                          src="/people1.svg"
                        />
                        <div className="flex flex-row items-start justify-start pt-0 pb-[2.1px] pl-0.5 pr-px">
                          <img
                            className="h-5 w-5 relative z-[2]"
                            loading="lazy"
                            alt=""
                            src="/vector-11.svg"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-px">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0 object-contain z-[2]"
                            loading="lazy"
                            alt=""
                            src="/book1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[25px]">
                      <div className="w-[106px] flex flex-row items-start justify-start py-0 px-px box-border">
                        <a href="/admin-dashboard-page" className="[text-decoration:none] flex-1 relative text-[inherit] mix-blend-normal z-[2]">
                          Dashboard
                        </a>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[22px] text-3xs">
                        <div className="w-[108px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
                          <div className="flex-1 relative mix-blend-normal z-[2]">
                            Admiin Profile
                          </div>
                        </div>
                        <div className="w-[108px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
                          <div className="flex-1 relative mix-blend-normal z-[2]">
                            Registration
                          </div>
                        </div>
                        <div className="w-[108px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
                          <div className="flex-1 relative mix-blend-normal z-[2]">
                            Plan
                          </div>
                        </div>
                        <div className="w-[108px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
                          <div className="flex-1 relative mix-blend-normal z-[2]">
                            Payment
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 text-midnightblue-100">
                          <div className="flex-1 flex flex-row items-start justify-start relative">
                            <div
                              className="h-[35px] w-[197px] absolute !m-[0] top-[-11px] left-[-48px] mix-blend-normal cursor-pointer z-[2]"
                              onClick={onGroupContainerClick}
                            >
                              <div
                                className="absolute top-[0px] left-[0px] shadow-[0px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-whitesmoke-100 w-full h-full"
                                data-scroll-to="inventoryRect"
                              />
                            </div>
                            <b className="flex-1 relative z-[3]">Inventory</b>
                          </div>
                        </div>
                        <div className="self-stretch relative z-[2]">
                          View Members
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                          <div className="flex-1 relative z-[2]">Coaches</div>
                        </div>
                        <div className="w-[108px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
                          <div className="flex-1 relative z-[2]">Report</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-end justify-start gap-[1.3px] max-w-[calc(100%_-_211px)] text-xl text-midnightblue-100 mq725:max-w-full">
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[3px] box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[40.4px] max-w-full mq725:gap-5">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <header className="self-stretch flex flex-row items-start justify-between pt-[29px] pb-[34px] pl-[76px] pr-0 relative gap-5 text-left text-xl text-midnightblue-100 font-monument-extended mq725:pl-[38px] mq725:box-border">
                      <a className="[text-decoration:none] relative text-[inherit] z-[5]">
                        <p className="m-0">STAMINA</p>
                        <p className="m-0">FITNESS</p>
                      </a>
                      <img
                        className="h-full w-[78px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] max-h-full object-cover z-[6]"
                        loading="lazy"
                        alt=""
                        src="/logo@2x.png"
                      />
                      <div className="w-[140px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border text-center text-sm font-poppins">
                        <div className="self-stretch flex flex-row items-start justify-between gap-5">
                          <div className="w-[86px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                            <a className="[text-decoration:none] self-stretch relative text-[inherit] z-[5]">
                              Feedback
                            </a>
                          </div>
                          <img
                            className="h-[23px] w-[23px] relative overflow-hidden shrink-0 min-h-[23px] z-[5]"
                            loading="lazy"
                            alt=""
                            src="/rinotification2fill1.svg"
                          />
                        </div>
                      </div>
                    </header>
                    <div className="w-[307px] flex flex-row items-start justify-start py-0 px-[29px] box-border">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[11px]">
                        <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-81xl bg-white flex flex-row items-start justify-start py-0 px-[23px] mix-blend-normal whitespace-nowrap z-[1]">
                          <h1 className="m-0 relative text-inherit font-bold font-inherit whitespace-nowrap">
                            Add Equipment
                          </h1>
                        </div>
                        <div className="self-stretch h-0 flex flex-row items-start justify-start py-0 pl-[7px] pr-0 box-border text-mini text-gray-200">
                          <h3 className="m-0 h-0 flex-1 relative text-inherit font-normal font-inherit inline-block mix-blend-normal whitespace-nowrap z-[1]">{` `}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[594px] flex flex-row items-start justify-start py-0 px-[46px] box-border max-w-full text-cornsilk mq725:pl-[23px] mq725:pr-[23px] mq725:box-border">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[15.3px] max-w-full">
                      <h1 className="m-0 w-[253px] relative text-inherit font-bold font-inherit inline-block mix-blend-normal z-[2] mq450:text-base">
                        Manage Equipments
                      </h1>
                      <div className="self-stretch flex flex-row items-start justify-between gap-5 text-xs mq725:flex-wrap">
                        <div className="flex flex-row items-start justify-start">
                          <div className="flex flex-col items-start justify-start pt-[4.3px] px-0 pb-0">
                            <div className="relative font-light inline-block mix-blend-normal min-w-[82px] z-[2]">
                              Show Entities
                            </div>
                          </div>
                          <div className="w-[58px] rounded-xl bg-darkslateblue-100 flex flex-row items-start justify-start py-[3px] px-[9px] box-border gap-2.5 mix-blend-normal z-[3] text-center text-base text-white">
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
                        <button className="cursor-pointer [border:none] py-[3px] px-[21px] bg-darkslateblue-100 w-[151px] rounded-xl flex flex-row items-start justify-start box-border mix-blend-normal z-[2] hover:bg-cornflowerblue">
                          <div className="relative text-base font-poppins text-white text-center inline-block min-w-[57px]">
                            Search
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-sm text-white">
                <div className="h-[362px] w-[597px] absolute !m-[0] top-[-98px] right-[3px]">
                  <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-slategray-200 w-full h-full mix-blend-normal z-[1]" />
                  <img
                    className="absolute top-[69.9px] left-[538px] w-6 h-[25.8px] mix-blend-normal z-[2]"
                    loading="lazy"
                    alt=""
                    src="/vector-211.svg"
                  />
                </div>
                <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white flex flex-col items-end justify-start pt-[21px] pb-[29px] pl-[34px] pr-[38px] box-border gap-7 max-w-full z-[5]">
                  <b className="w-[139px] relative hidden text-cornsilk mix-blend-normal">
                    Equipment Name
                  </b>
                  <div className="w-[82px] relative hidden mix-blend-normal">
                    Treadmill
                  </div>
                  <div className="relative hidden mix-blend-normal min-w-[107px]">
                    10 lbs Dumbell
                  </div>
                  <div className="w-[113px] relative hidden mix-blend-normal">
                    15 lbs Dumbell
                  </div>
                  <div className="w-[124px] relative hidden mix-blend-normal">
                    20 lbs Dumbell
                  </div>
                  <div className="w-[69px] relative hidden mix-blend-normal">
                    Active
                  </div>
                  <div className="w-[69px] relative hidden mix-blend-normal">
                    Inactive
                  </div>
                  <div className="w-[74px] relative hidden mix-blend-normal">
                    Active
                  </div>
                  <div className="w-20 relative hidden mix-blend-normal">
                    Active
                  </div>
                  <b className="w-[60px] relative hidden text-cornsilk mix-blend-normal">
                    Status
                  </b>
                  <b className="relative hidden text-cornsilk mix-blend-normal min-w-[60px]">
                    Actions
                  </b>
                  <img
                    className="w-[11px] h-[10.8px] relative hidden mix-blend-normal"
                    alt=""
                    src="/vector3.svg"
                  />
                  <img
                    className="w-[11px] h-[10.8px] relative hidden mix-blend-normal"
                    alt=""
                    src="/vector4.svg"
                  />
                  <div className="rounded-3xs bg-white hidden flex-row items-center justify-center py-[3px] px-2.5 mix-blend-normal text-center text-3xs text-gray-200">
                    <div className="relative inline-block min-w-[18px]">
                      Edit
                    </div>
                  </div>
                  <div className="rounded-3xs bg-slategray-300 hidden flex-row items-center justify-center py-[3px] px-[15px] mix-blend-normal text-center text-gray-200">
                    <div className="relative inline-block min-w-[59px]">
                      Previous
                    </div>
                  </div>
                  <div className="rounded-3xs bg-slategray-300 hidden flex-row items-center justify-center py-[3px] px-4 mix-blend-normal text-center text-gray-200">
                    <div className="relative inline-block min-w-[31px]">
                      Next
                    </div>
                  </div>
                  <div className="rounded-3xs bg-white hidden flex-row items-center justify-center py-[3px] px-2.5 mix-blend-normal text-center text-3xs text-gray-200">
                    <div className="relative inline-block min-w-[18px]">
                      Edit
                    </div>
                  </div>
                  <div className="rounded-3xs bg-white hidden flex-row items-center justify-center py-[3px] px-2.5 mix-blend-normal text-center text-3xs text-gray-200">
                    <div className="relative inline-block min-w-[18px]">
                      Edit
                    </div>
                  </div>
                  <div className="rounded-3xs bg-white hidden flex-row items-center justify-center py-[3px] px-2.5 mix-blend-normal text-center text-3xs text-gray-200">
                    <div className="relative inline-block min-w-[18px]">
                      Edit
                    </div>
                  </div>
                  <div className="w-5 relative hidden mix-blend-normal">1</div>
                  <div className="w-5 relative hidden mix-blend-normal">3</div>
                  <div className="w-5 relative hidden mix-blend-normal">6</div>
                  <div className="w-6 relative whitespace-pre-wrap hidden mix-blend-normal">{`12   `}</div>
                  <b className="relative hidden text-cornsilk mix-blend-normal min-w-[67px]">
                    Total no.
                  </b>
                  <div className="w-[615px] h-[383px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white hidden max-w-full" />
                  <div className="self-stretch flex flex-col items-end justify-start gap-[9px] max-w-full text-xl text-midnightblue-100">
                    <div className="self-stretch flex flex-col items-end justify-start gap-1.5">
                      <div className="self-stretch flex flex-row items-start justify-between gap-5 mq725:flex-wrap">
                        <div className="w-[238px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[49px]">
                            <div className="self-stretch flex flex-col items-start justify-start">
                              <h1 className="m-0 self-stretch h-[42px] relative text-inherit font-bold font-inherit inline-block shrink-0 z-[1] mq450:text-base">
                                Add Equipment
                              </h1>
                              <div className="w-[143px] flex flex-row items-start justify-start py-0 px-px box-border mt-[-11px] text-base text-lightslategray-200">
                                <div className="flex-1 flex flex-row items-start justify-start py-0 pl-0 pr-[15px]">
                                  <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit shrink-0 z-[1]">
                                    Attach Photo
                                  </h2>
                                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 ml-[-32px]">
                                    <img
                                      className="w-[17px] h-[17px] relative overflow-hidden shrink-0 z-[2]"
                                      loading="lazy"
                                      alt=""
                                      src="/pencilsquare-11.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                              <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit z-[1] mq450:text-base">
                                Equipment Name
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div className="h-[109px] w-[109px] relative bg-steelblue-100 z-[1]" />
                      </div>
                      <div className="self-stretch h-[42px] relative rounded-xl bg-lightgray z-[1]" />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-1 max-w-full">
                      <div className="w-[443px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap">
                        <h1 className="m-0 w-28 relative text-inherit font-bold font-inherit inline-block shrink-0 z-[1] mq450:text-base">
                          Status
                        </h1>
                        <div className="w-28 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                          <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit z-[1] mq450:text-base">
                            Total No.
                          </h1>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-2.5 max-w-full">
                        <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[209px] max-w-full">
                          <div className="self-stretch h-[42px] relative rounded-xl bg-lightgray z-[1]" />
                        </div>
                        <div className="h-[42px] w-[211px] relative rounded-xl bg-lightgray z-[1]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-3.5 text-center text-base text-midnightblue-100 mq725:flex-wrap">
                    <div className="w-[99px] rounded-xl bg-white border-midnightblue-100 border-[2px] border-solid box-border flex flex-row items-start justify-start py-0 px-[19px] z-[1]">
                      <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[57px]">
                        Cancel
                      </h2>
                    </div>
                    <div className="rounded-xl bg-goldenrod flex flex-row items-start justify-start py-[3px] px-[21px] whitespace-nowrap z-[1]">
                      <h2 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[119px]">
                        Save Changes
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-gray-600 z-[4]" />
          <div className="w-[88px] flex flex-row items-start justify-start py-0 px-1.5 box-border text-3xs">
            <div className="flex-1 flex flex-row items-start justify-start gap-4">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 mix-blend-normal min-h-[20px] z-[2]"
                loading="lazy"
                alt=""
                src="/boxarrowright1.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="self-stretch relative mix-blend-normal z-[2]">
                  Logout
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

export default EquipmentInventoryAdd;
