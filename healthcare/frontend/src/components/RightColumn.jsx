
const RightColumn = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start pt-[110px] px-5 pb-[137px] box-border relative gap-16 max-w-full text-left text-10xl text-gray-700 font-poppins mq750:gap-4 mq1050:pt-[71px] mq1050:pb-[89px] mq1050:box-border mq450:pt-[46px] mq450:pb-[58px] mq450:box-border mq1225:gap-8 ${className}`}
    >
      <div className="w-[1156px] flex flex-row items-start justify-start py-0 pl-[5px] pr-0 box-border max-w-full">
        <h2 className="m-0 flex-1 relative text-inherit leading-[59px] font-bold font-inherit inline-block max-w-full z-[1] mq450:text-4xl mq450:leading-[47px]">
          Learn about what Medicare covers and compare supplemental insurance
          from top companies
        </h2>
      </div>
      <div className="w-[1156px] flex flex-col items-start justify-start gap-[45px] max-w-full text-2xl text-black mq750:gap-[22px]">
        <div className="w-[474px] flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
          <div className="flex-1 relative leading-[36px] font-medium inline-block max-w-full z-[1] mq450:text-mid mq450:leading-[29px]">
            <li className="m-0">&nbsp;</li>
            <ul className="m-0 font-inherit text-inherit pl-7">
              <li className="m-0">{`Low Cost Plans Available
`}</li>
            </ul>
            <li className="m-0">&nbsp;</li>
            <ul className="m-0 font-inherit text-inherit pl-7">
              <li className="m-0">{`Premium, Quality Health Care for 65+
`}</li>
            </ul>
            <li className="m-0">&nbsp;</li>
            <ul className="m-0 font-inherit text-inherit pl-7">
              <li className="m-0">Free Quote</li>
            </ul>
            <li className="m-0">&nbsp;</li>
            <ul className="m-0 font-inherit text-inherit pl-7">
              <li className="m-0">
                We are available to help you navigate the Medicare maze step by
                step.
              </li>
            </ul>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-center text-white mq1050:flex-wrap">
          <div className="w-[372px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-full">
            <div className="self-stretch h-[61px] relative">
              <div className="absolute top-[0px] left-[4.2px] rounded-16xl bg-crimson w-full h-full z-[1]" />
              <div className="absolute top-[14px] left-[0px] leading-[35px] font-medium inline-block w-[369.9px] h-[35px] z-[2] mq450:text-mid mq450:leading-[27px]">
                Medicare Health plans Quote
              </div>
            </div>
          </div>
          <div className="w-[372px] bg-darkslategray-200 flex flex-row items-start justify-start pt-[30px] px-6 pb-2 box-border whitespace-nowrap max-w-full z-[4] text-right text-lg">
            <div className="h-[83px] w-[372px] relative bg-darkslategray-200 hidden max-w-full" />
            <b className="h-[45px] w-[299.8px] relative inline-block shrink-0 z-[1]">
              Give us a call at 704-595-7729
            </b>
          </div>
        </div>
      </div>
      <div className="w-[1577px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[-99px]">
        <div className="absolute top-[0px] left-[0px] bg-aliceblue-300 w-full h-full" />
        <img
          className="absolute top-[225px] left-[1103px] w-[294px] h-[196px] object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/tatianazanonmmhazst2wtmunsplash-1@2x.png"
        />
        <img
          className="absolute top-[497px] left-[775px] w-[370px] h-[247px] object-cover z-[1]"
          alt=""
          src="/dariovalenzuelapagbejrlidaunsplash-1@2x.png"
        />
        <img
          className="absolute top-[413px] left-[1025px] w-[372px] h-[248px] object-cover z-[3]"
          alt=""
          src="/portraittenderelderlyhikersmanwomanwithbackpackslookingeachotherhugginghikingfamilyconcept-1@2x.png"
        />
        <img
          className="absolute top-[744px] left-[775px] w-[622px] h-0 z-[5]"
          loading="lazy"
          alt=""
          src="/group-93.svg"
        />
        <img
          className="absolute top-[279px] left-[829px] w-[274px] h-[218px] object-cover z-[4]"
          alt=""
          src="/seniormanfaceportraitwearingbowlerhat-1@2x.png"
        />
      </div>
    </div>
  );
};

export default RightColumn;
