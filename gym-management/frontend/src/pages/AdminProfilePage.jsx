import FrameComponent9 from "../components/FrameComponent9";

const AdminProfilePage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[68px] px-[73px] pb-[42px] box-border gap-[71px] leading-[normal] tracking-[normal] mq725:gap-[18px] mq1050:gap-[35px] mq1050:pl-9 mq1050:pr-9 mq1050:box-border">
      <div className="w-[647px] h-[485px] relative rounded-tl-none rounded-tr-3xs rounded-b-none bg-darkslategray-300 hidden max-w-full" />
      <main className="w-[930px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-whitesmoke-100 flex flex-row items-start justify-start pt-0.5 px-0 pb-0 box-border gap-[25px] max-w-full shrink-0 mq1000:flex-wrap">
        <div className="self-stretch w-[930px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-whitesmoke-100 hidden max-w-full" />
        <FrameComponent9 />
        <section className="w-[615px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border min-w-[615px] max-w-full text-left text-xl text-midnightblue-100 font-monument-extended mq1000:flex-1 mq1000:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[60px] max-w-full mq725:flex-wrap mq725:gap-[30px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[41px] min-w-[270px] max-w-full mq450:gap-5">
                <div className="flex flex-row items-start justify-start py-0 px-[72px] mq450:pl-5 mq450:pr-5 mq450:box-border">
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
                <div className="self-stretch flex flex-col items-start justify-start min-h-[42px] text-13xl font-poppins">
                  <h1 className="m-0 self-stretch relative text-inherit tracking-[0.05em] leading-[42px] font-bold font-inherit z-[1] mq1000:text-7xl mq1000:leading-[34px] mq450:text-lgi mq450:leading-[25px]">
                    Admin Information
                  </h1>
                  <div className="w-72 h-0 flex flex-row items-start justify-start py-0 px-[23px] box-border mt-[-6px] text-mini text-gray-200">
                    <div className="h-0 flex-1 relative inline-block z-[2]">{` `}</div>
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
            <form className="m-0 self-stretch flex flex-row items-start justify-start gap-[11px] max-w-full mq725:flex-wrap">
              <div className="w-[258px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[258px] mq725:flex-1">
                <div className="self-stretch flex flex-col items-end justify-start gap-6">
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-px">
                    <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white flex flex-col items-start justify-start pt-[38px] px-[23px] pb-14 gap-[13px] z-[1]">
                      <div className="w-[257px] h-[331px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white hidden" />
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-2.5">
                        <div className="flex-1 flex flex-col items-end justify-start gap-[9px]">
                          <div className="flex flex-row items-start justify-end py-0 pl-[69px] pr-[62px]">
                            <img
                              className="h-[69px] w-[69px] relative overflow-hidden shrink-0 z-[2]"
                              loading="lazy"
                              alt=""
                              src="/personcircle-1.svg"
                            />
                          </div>
                          <div className="self-stretch flex flex-col items-end justify-start gap-5">
                            <div className="flex flex-row items-start justify-end py-0 px-[25px]">
                              <div className="flex flex-row items-start justify-start">
                                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                                  <img
                                    className="w-[17px] h-[17px] relative overflow-hidden shrink-0 z-[3]"
                                    loading="lazy"
                                    alt=""
                                    src="/pencilsquare-1.svg"
                                  />
                                </div>
                                <div className="flex flex-col items-start justify-start py-0 px-0">
                                  <div className="ml-[-8px] w-[118px] h-6 relative text-smi font-poppins text-gray-200 text-center inline-block shrink-0 z-[2]">
                                    Update Profile
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start gap-[19px]">
                              <div className="relative text-smi font-poppins text-gray-200 text-left inline-block min-w-[73px] z-[2]">
                                Username
                              </div>
                              <div className="flex-1 relative text-smi font-poppins text-gray-200 text-right z-[2]">
                                JuanDelaCruz
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[200px] flex flex-col items-start justify-start gap-[7px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
                          <div className="self-stretch flex flex-row items-start justify-start">
                            <div className="h-6 w-[93px] relative text-smi font-poppins text-gray-200 text-left inline-block shrink-0 z-[3]">
                              Contact no.
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-start py-0 px-0">
                              <div className="ml-[-1px] self-stretch h-6 relative text-smi font-poppins text-gray-200 text-right inline-block shrink-0 z-[2]">
                                09123456789
                              </div>
                            </div>
                          </div>
                          <div className="w-[129px] relative text-smi font-poppins text-gray-200 text-left inline-block z-[2]">
                            Email Address:
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-2.5">
                          <div className="flex-1 relative text-smi font-poppins text-gray-200 text-left whitespace-nowrap z-[2]">
                            juan.delacruz@gmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="/register-page" className="cursor-pointer [border:none] py-0 px-[23px] bg-midnightblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-81xl flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-darkslateblue-300">
                    <b className="relative text-sm font-poppins text-white text-left">
                      Register New Admin Account
                    </b>
                  </a>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[225px] max-w-full">
                <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white flex flex-col items-end justify-start pt-[22px] px-[29px] pb-[25px] box-border gap-2.5 max-w-full z-[1]">
                  <div className="w-[346px] h-[299px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white hidden max-w-full" />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
                    <b className="w-[105px] relative text-base inline-block font-poppins text-gray-200 text-left z-[2]">
                      Username
                    </b>
                    <div className="self-stretch h-[33px] relative rounded-xl bg-whitesmoke-200 z-[2]" />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
                    <b className="w-[118px] relative text-base inline-block font-poppins text-gray-200 text-left z-[2]">
                      Contact No.
                    </b>
                    <div className="self-stretch h-[33px] relative rounded-xl bg-whitesmoke-200 z-[2]" />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px]">
                    <b className="w-[170px] relative text-base inline-block font-poppins text-gray-200 text-left z-[2]">
                      Email Address
                    </b>
                    <div className="self-stretch h-[33px] relative rounded-xl bg-whitesmoke-200 z-[3]" />
                  </div>
                  <div className="w-[191px] flex flex-row items-start justify-start gap-[9px]">
                    <div className="rounded-xl bg-midnightblue-100 flex flex-row items-start justify-start py-[3px] px-[21px] z-[2]">
                      <b className="relative text-base inline-block font-poppins text-white text-center min-w-[41px]">
                        Save
                      </b>
                    </div>
                    <div className="flex-1 rounded-xl bg-white border-midnightblue-100 border-[2px] border-solid flex flex-row items-start justify-start py-0 px-[19px] z-[2]">
                      <a className="[text-decoration:none] relative text-base font-poppins text-midnightblue-100 text-center inline-block min-w-[57px]">
                        Cancel
                      </a>
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white flex flex-col items-end justify-start pt-[17px] px-[29px] pb-[15px] box-border gap-2.5 max-w-full z-[1]">
                  <div className="w-[346px] h-[316px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white hidden max-w-full" />
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pl-16 pr-[62px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <b className="flex-1 relative text-base font-poppins text-midnightblue-100 text-center z-[2]">
                      Password
                    </b>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
                    <b className="w-[159px] relative text-base inline-block font-poppins text-gray-200 text-left z-[2]">
                      Current Password
                    </b>
                    <div className="self-stretch h-[33px] relative rounded-xl bg-whitesmoke-200 z-[2]" />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
                    <b className="w-[159px] relative text-base inline-block font-poppins text-gray-200 text-left z-[2]">
                      New Password
                    </b>
                    <div className="self-stretch h-[33px] relative rounded-xl bg-whitesmoke-200 z-[2]" />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 gap-[3px]">
                    <b className="relative text-base font-poppins text-gray-200 text-left z-[2]">
                      Re-type Password
                    </b>
                    <div className="self-stretch h-[33px] relative rounded-xl bg-whitesmoke-200 z-[2]" />
                  </div>
                  <div className="flex flex-row items-start justify-start gap-2.5">
                    <div className="rounded-xl bg-midnightblue-100 flex flex-row items-start justify-start py-[3px] px-[21px] z-[2]">
                      <b className="relative text-base inline-block font-poppins text-white text-center min-w-[66px]">
                        Change
                      </b>
                    </div>
                    <div className="w-[85px] rounded-xl bg-white border-midnightblue-100 border-[2px] border-solid box-border flex flex-row items-start justify-start py-0 px-[19px] z-[2]">
                      <a className="[text-decoration:none] relative text-base font-poppins text-midnightblue-100 text-center inline-block min-w-[43px]">
                        Clear
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <div className="w-[898px] flex flex-row items-start justify-center max-w-full">
        <img className="h-5 w-5 relative overflow-hidden shrink-0" alt="" />
      </div>
    </div>
  );
};

export default AdminProfilePage;
