
const GroupComponent1 = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-aliceblue-300 flex flex-col items-start justify-start pt-[88px] px-[243px] pb-[105px] box-border gap-[72px] max-w-full z-[4] text-left text-xl text-darkslateblue-100 font-poppins mq450:gap-[18px] mq450:pl-5 mq450:pr-5 mq450:box-border mq825:gap-9 mq825:pt-[57px] mq825:px-[60px] mq825:pb-[68px] mq825:box-border mq1425:pl-[121px] mq1425:pr-[121px] mq1425:box-border ${className}`}
    >
      <div className="w-[1440px] h-[654px] relative bg-aliceblue-300 hidden max-w-full" />
      <div className="w-[1156px] h-[558px] relative bg-white hidden max-w-full" />
      <div className="w-[475px] flex flex-row items-start justify-start py-0 px-2 box-border max-w-full">
        <div className="flex-1 relative leading-[26px] font-extrabold inline-block max-w-full z-[2] mq450:text-base mq450:leading-[21px]">
          Fill out form to get help with your quote
        </div>
      </div>
      <div className="w-[875px] flex flex-row items-start justify-between max-w-full gap-5 text-lgi text-darkslateblue-200 lg:flex-wrap">
        <div className="w-[362px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[362px] max-w-full lg:flex-1 lg:min-w-full">
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
        </div>
        <div className="w-[389px] flex flex-col items-end justify-start gap-[86px] min-w-[389px] max-w-full lg:flex-1 lg:min-w-full mq450:gap-[43px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[27px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-9 max-w-full lg:flex-1 mq450:gap-[18px]">
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
          <div className="w-[214px] rounded-16xl bg-crimson flex flex-row items-start justify-start pt-3.5 px-0 pb-3 box-border whitespace-nowrap z-[2] text-center text-2xl text-white">
            <div className="h-[61px] w-[211.6px] relative rounded-16xl bg-crimson hidden" />
            <div className="flex-1 relative leading-[35px] font-medium z-[1]">
              Get help now!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent1;
