
const InsuranceTypes = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start [row-gap:20px] max-w-full text-left text-25xl text-black font-poppins mq1275:flex-wrap ${className}`}
    >
      <div className="w-[1155px] flex flex-col items-end justify-start pt-0 pb-[448px] pl-1.5 pr-[720px] box-border relative gap-[5px] bg-[url('/public/medicalstethoscopewithpapercutfamily-12@2x.png')] bg-cover bg-no-repeat bg-[top] shrink-0 max-w-full mq750:pr-[180px] mq750:pb-[291px] mq750:box-border mq450:pr-5 mq450:box-border mq1275:pr-[360px] mq1275:box-border">
        <img
          className="w-[1155px] h-[570px] relative object-cover hidden max-w-full z-[0]"
          alt=""
          src="/medicalstethoscopewithpapercutfamily-12@2x.png"
        />
        <div className="self-stretch bg-darkgray flex flex-row items-start justify-start pt-[33px] px-[34px] pb-[5px] box-border whitespace-nowrap max-w-full z-[1]">
          <div className="h-[105px] w-[423px] relative bg-darkgray hidden max-w-full" />
          <h1 className="m-0 w-[335px] relative text-inherit font-extrabold font-inherit inline-block shrink-0 max-w-[calc(100%_-_0px)] z-[2]">
            Life Insurance
          </h1>
        </div>
        <img
          className="self-stretch h-3 relative max-w-full overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src="/vector-16.svg"
        />
        <div className="w-[166px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[-154px] [background:linear-gradient(0deg,_#0d0d0d_10.07%,_#16181a)] z-[3]" />
        <div className="w-[272px] !m-[0] absolute top-[-81px] left-[340px] bg-aliceblue-200 border-darkslateblue-100 border-[5px] border-solid box-border flex flex-col items-start justify-start pt-6 px-0 pb-[29px] gap-[18.4px] z-[3] text-center text-mid text-darkslateblue-100">
          <div className="self-stretch h-[253px] relative bg-aliceblue-200 border-darkslateblue-100 border-[5px] border-solid box-border hidden" />
          <a href="/on-marketplace" className="self-stretch relative leading-[16px] z-[4]">
            Marketplace Plans
          </a>
          <a href="/off-marketplace" className="self-stretch relative leading-[16px] z-[4]">
            Off-Market Plans
          </a>
          <a href="/medicare-health-plans" className="self-stretch relative leading-[16px] z-[4]">
            Medicare Plans
          </a>
          <a href="/life-insurance" className="self-stretch relative leading-[16px] z-[4]">
            Life Insurance
          </a>
          <a href="/burial-insurance-plans" className="self-stretch relative leading-[16px] z-[4]">
            Burial Insurance
          </a>
          <a href="/vision-and-dental" className="self-stretch relative leading-[16px] z-[4]">
            Dental and Vision
          </a>
        </div>
      </div>
      <div className="h-[570px] w-[166px] relative [background:linear-gradient(0deg,_#0d0d0d_10.07%,_#16181a)] shrink-0" />
    </div>
  );
};

export default InsuranceTypes;
