import { Link } from "react-router-dom";
const Header= ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[487.1px] relative max-w-full text-center text-mid text-steelblue-400 font-poppins ${className}`}
    >
      <div className="absolute top-[231.1px] left-[0px] bg-darkslateblue-100 w-[1440px] flex flex-row items-start justify-start pt-[33px] px-[151px] pb-[27px] box-border max-w-full text-left text-9xl text-white">
        <div className="h-[180px] w-[1440px] relative bg-darkslateblue-100 hidden max-w-full" />
        <h2 className="m-0 w-[476px] relative text-inherit leading-[40px] font-black font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-3xl mq450:leading-[32px]">
          We are Dedicated To Helping Families Find Affordable Health Insurance
        </h2>
      </div>
      <b className="absolute top-[40.1px] left-[475px] leading-[16px] inline-block w-[274px] h-4">
        Life and Health Products
      </b>
      <Link to="/about" className="[text-decoration:none] absolute top-[41.1px] left-[769px] leading-[16px] font-bold text-[inherit] inline-block w-[78px] h-4">{`About `}</Link>
      <a href="/contact-us" className="[text-decoration:none] absolute top-[40.1px] left-[867px] leading-[16px] font-bold text-[inherit] inline-block w-[78px] h-4 min-w-[78px]">
        Contact
      </a>
      <div className="absolute top-[0px] left-[150px] w-44 h-[74.1px]">
        <div className="absolute top-[35.1px] left-[59px] w-14 h-2 overflow-hidden hidden" />
        <img
          className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/main-logo@2x.png"
        />
      </div>
      <button className="cursor-pointer [border:none] pt-[23px] pb-[21px] pl-[23px] pr-[11px] bg-crimson absolute top-[7.1px] left-[1122px] rounded-16xl w-44 flex flex-row items-start justify-start box-border z-[2]">
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 hidden z-[1]"
          alt=""
          src="/whitephone.svg"
        />
        <div className="w-[131px] relative text-mini leading-[16px] font-poppins text-white text-center hidden shrink-0 z-[2]">
          704-595-7729
        </div>
        <div className="h-[61px] w-44 relative rounded-16xl bg-crimson hidden z-[3]" />
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/whitephone.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 ml-[-5px]">
          <a className="[text-decoration:none] self-stretch relative text-mini leading-[16px] font-semibold font-poppins text-white text-center z-[1]">
            704-595-7729
          </a>
        </div>
      </button>
      <div className="absolute top-[61.1px] left-[483px] bg-aliceblue-200 border-darkslateblue-100 border-[5px] border-solid box-border w-[272px] flex flex-col items-start justify-start pt-6 px-0 pb-5 gap-[18.5px] z-[2] text-darkslateblue-100">
        <div className="self-stretch h-[253px] relative bg-aliceblue-200 border-darkslateblue-100 border-[5px] border-solid box-border hidden" />
        <a href="/on-marketplace" className="self-stretch relative leading-[16px] z-[3]">
          Marketplace Plans
        </a>
        <a href="/off-marketplace" className="self-stretch relative leading-[16px] z-[3]">
          Off-Market Plans
        </a>
        <a href="/medicare-health-plans" className="self-stretch relative leading-[16px] z-[3]">
          Medicare Plans
        </a>
        <a href="/life-insurance" className="self-stretch relative leading-[16px] z-[3]">
          Life Insurance
        </a>
        <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
          <a href="/burial-insurance-plans" className="self-stretch h-[25px] relative leading-[16px] inline-block shrink-0 z-[3]">
            Burial Insurance
          </a>
          <a href="/vision-and-dental" className="self-stretch h-[25px] relative leading-[16px] inline-block shrink-0 z-[3]">
            Dental and Vision
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
