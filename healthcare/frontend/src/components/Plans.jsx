
const Plans = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[108px] left-[483px] bg-aliceblue-200 border-darkslateblue-100 border-[5px] border-solid box-border w-[272px] flex flex-col items-start justify-start pt-6 px-0 pb-[29px] gap-[18px] z-[2] text-center text-mid text-darkslateblue-100 font-poppins ${className}`}
    >
      <div className="self-stretch h-[253px] relative bg-aliceblue-200 border-darkslateblue-100 border-[5px] border-solid box-border hidden" />
      <b className="self-stretch relative leading-[16px] z-[3]">
        Marketplace Plans
      </b>
      <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
        <a href="/off-marketplace" className="self-stretch h-[25px] relative leading-[16px] inline-block shrink-0 z-[3]">
          Off-Market Plans
        </a>
        <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
          <a href="/on-marketplace" className="self-stretch relative leading-[16px] z-[3]">
            Medicare Plans
          </a>
          <a href="/life-insurance" className="self-stretch relative leading-[16px] z-[3]">
            Life Insurance
          </a>
          <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
            <a href="/burial-insurance-plans" className="self-stretch h-[25px] relative leading-[16px] inline-block shrink-0 z-[3]">
              Burial Insurance
            </a>
            <a href="/vision-and-dental" className="self-stretch relative leading-[16px] z-[3]">
              Dental and Vision
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
