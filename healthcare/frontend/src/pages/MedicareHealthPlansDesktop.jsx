import Desktop1 from "../components/Desktop1";
import Footer2 from "../components/Footer2";
import GroupComponent5 from "../components/GroupComponent5";
import RightColumn from "../components/RightColumn";

const MedicareHealthPlansDesktop = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[46.9px] px-0 pb-0 box-border gap-[171px] leading-[normal] tracking-[normal] mq750:gap-[85px] mq450:gap-[43px]">
      <Desktop1 />
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <RightColumn />
        <GroupComponent5 />
      </section>
      <Footer2 />
    </div>
  );
};

export default MedicareHealthPlansDesktop;
