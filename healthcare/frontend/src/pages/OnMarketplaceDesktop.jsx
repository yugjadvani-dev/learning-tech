import Benefits from "../components/Benefits";
import Desktop from "../components/Desktop";
import FooterContent from "../components/FooterContent";
import GroupComponent1 from "../components/GroupComponent1";

const OnMarketplaceDesktop = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[46.9px] px-0 pb-0 box-border min-h-[3978px] leading-[normal] tracking-[normal] text-left text-base text-white font-poppins">
      <Desktop />
      <div className="self-stretch h-[472px] relative hidden z-[3]" />
      <Benefits />
      <div className="w-[939px] flex flex-row items-start justify-center pt-0 px-5 pb-[158px] box-border max-w-full">
        <div className="w-[655px] flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch bg-darkslateblue-200 flex flex-row items-start justify-start pt-[31px] pb-[30px] pl-[31px] pr-2.5 box-border max-w-full z-[1]">
            <div className="h-[109px] w-[655px] relative bg-darkslateblue-200 hidden max-w-full" />
            <div className="flex-1 relative font-medium inline-block max-w-full z-[2]">
              There are many more benefits we would love to discuss with you
              about affordable marketplace health insurance plans
            </div>
          </div>
          <div className="w-[568px] bg-royalblue flex flex-row items-start justify-center pt-[26px] pb-3.5 pl-[45px] pr-5 box-border max-w-full z-[2] mt-[-9px] mq450:pl-[22px] mq450:box-border">
            <div className="h-[72px] w-[568px] relative bg-royalblue hidden max-w-full" />
            <div className="h-8 w-[397px] relative font-extrabold inline-block shrink-0 max-w-full z-[3]">
              Get a quote, email, or call us at 704-595-7729
            </div>
          </div>
        </div>
      </div>
      <GroupComponent1 />
      <div className="ml-[-14px] mb-[595px] w-[1466px] h-[-595px] relative bg-aliceblue-300 max-w-[102%] shrink-0" />
      <FooterContent />
    </div>
  );
};

export default OnMarketplaceDesktop;
