
const FooterLinks = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch h-[739px] relative max-w-full text-left text-xl text-darkslateblue-100 font-poppins mq1100:h-auto mq1100:min-h-[739] ${className}`}
    >
      <div className="absolute h-full top-[0px] bottom-[0px] left-[-21px] bg-aliceblue-300 w-[1462px]" />
      <div className="absolute top-[49px] left-[142px] bg-white w-[1156px] flex flex-col items-start justify-start pt-[52px] px-[101px] pb-[34px] box-border gap-[72px] max-w-full z-[1]">
        <div className="w-[1156px] h-[606px] relative bg-white hidden max-w-full" />
        <div className="w-[475px] flex flex-row items-start justify-start py-0 px-2 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
            <div className="flex-1 relative leading-[26px] font-extrabold inline-block max-w-full z-[2] mq450:text-base mq450:leading-[21px]">
              Contact Us
            </div>
            <img
              className="h-[32.2px] w-[32.2px] absolute !m-[0] top-[-4px] left-[114px] object-contain z-[3]"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
        <div className="w-[875px] flex flex-col items-start justify-start gap-[19px] max-w-full text-lgi text-darkslateblue-200">
          <div className="w-[848px] flex flex-row items-start justify-between max-w-full gap-5 mq1100:flex-wrap">
            <div className="w-[362px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[41px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
                  <div className="w-[303px] relative font-medium inline-block z-[2]">
                    First Name
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
                    <div className="self-stretch rounded-10xs bg-aliceblue-100 border-lightsteelblue-100 border-[4px] border-solid box-border flex flex-row items-start justify-start pt-0 px-[9px] pb-px max-w-full z-[2]">
                      <div className="h-[41px] w-[362px] relative rounded-10xs bg-aliceblue-100 border-lightsteelblue-100 border-[4px] border-solid box-border hidden max-w-full" />
                      <input
                        className="w-[294px] [border:none] [outline:none] font-medium font-poppins text-lgi bg-[transparent] h-[30px] relative text-lightslategray text-left inline-block p-0 z-[1]"
                        placeholder="First Name"
                        type="text"
                      />
                    </div>
                    <div className="w-[303px] relative font-medium inline-block z-[2]">
                      Last Name
                    </div>
                  </div>
                  <div className="self-stretch rounded-10xs bg-aliceblue-100 border-lightsteelblue-100 border-[4px] border-solid box-border flex flex-row items-start justify-start pt-0 px-[9px] pb-px max-w-full z-[2]">
                    <div className="h-[41px] w-[362px] relative rounded-10xs bg-aliceblue-100 border-lightsteelblue-100 border-[4px] border-solid box-border hidden max-w-full" />
                    <input
                      className="w-[294px] [border:none] [outline:none] font-medium font-poppins text-lgi bg-[transparent] h-[30px] relative text-lightslategray text-left inline-block p-0 z-[1]"
                      placeholder="Last Name"
                      type="text"
                    />
                  </div>
                </div>
                <div className="w-[308px] flex flex-row items-start justify-start py-0 px-[7px] box-border">
                  <div className="flex-1 relative font-medium z-[2]">
                    What do you need help with?
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[362px] flex flex-col items-start justify-start gap-9 max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
                <div className="w-[305px] flex flex-row items-start justify-start py-0 px-px box-border">
                  <div className="flex-1 relative font-medium z-[2]">Email</div>
                </div>
                <div className="self-stretch rounded-10xs bg-aliceblue-100 border-lightsteelblue-100 border-[4px] border-solid box-border flex flex-row items-start justify-start pt-0 px-[9px] pb-px max-w-full z-[2]">
                  <div className="h-[41px] w-[362px] relative rounded-10xs bg-aliceblue-100 border-lightsteelblue-100 border-[4px] border-solid box-border hidden max-w-full" />
                  <input
                    className="w-[294px] [border:none] [outline:none] font-medium font-poppins text-lgi bg-[transparent] h-[30px] relative text-lightslategray text-left inline-block p-0 z-[1]"
                    placeholder="Email"
                    type="text"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
                <div className="w-[294px] relative font-medium inline-block z-[2]">
                  Phone Number
                </div>
                <div className="self-stretch rounded-10xs bg-aliceblue-100 border-lightsteelblue-100 border-[4px] border-solid box-border flex flex-row items-start justify-start pt-0 px-[9px] pb-px max-w-full z-[2]">
                  <div className="h-[41px] w-[362px] relative rounded-10xs bg-aliceblue-100 border-lightsteelblue-100 border-[4px] border-solid box-border hidden max-w-full" />
                  <input
                    className="w-[294px] [border:none] [outline:none] font-medium font-poppins text-lgi bg-[transparent] h-[30px] relative text-lightslategray text-left inline-block p-0 z-[1]"
                    placeholder="Phone Number"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[7px] pr-0 box-border max-w-full">
            <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-5 mq1100:flex-wrap">
              <div className="w-[558px] flex flex-col items-start justify-end pt-0 px-0 pb-3.5 box-border min-w-[558px] max-w-full mq1100:flex-1 mq1100:min-w-full">
                <textarea
                  className="border-lightsteelblue-100 border-[4px] border-solid bg-aliceblue-100 h-[117px] w-auto [outline:none] self-stretch rounded-10xs box-border flex flex-row items-start justify-start pt-[14.3px] px-[13px] pb-3.5 font-poppins font-medium text-lgi text-lightslategray z-[2]"
                  placeholder="Message"
                  rows={6}
                  cols={28}
                />
              </div>
              <button className="cursor-pointer [border:none] pt-3.5 px-0 pb-3 bg-crimson w-[214px] rounded-16xl flex flex-row items-start justify-start box-border z-[2]">
                <div className="h-[61px] w-[211.6px] relative rounded-16xl bg-crimson hidden z-[1]" />
                <div className="w-[187px] relative text-2xl leading-[35px] font-medium font-poppins text-white text-center inline-block shrink-0 z-[1] mq450:text-mid mq450:leading-[27px]">
                  Send
                </div>
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 ml-[-59px]">
                  <img
                    className="w-6 h-6 relative object-cover z-[3]"
                    alt=""
                    src="/message-fill@2x.png"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterLinks;
