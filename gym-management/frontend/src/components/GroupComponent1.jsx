import { useMemo } from "react";
const GroupComponent1= ({
  className = "",
  propBackgroundImage,
  propMarginLeft,
  rectangle52,
  propWidth,
}) => {
  const groupSectionStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
      marginLeft: propMarginLeft,
    };
  }, [propBackgroundImage, propMarginLeft]);

  const rectangleIconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <section
      className={`w-full relative flex flex-row items-start justify-end py-[58px] px-[534px] box-border bg-[url('/public/rectangle-521@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-center text-2xl text-white font-poppins mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[133px] mq750:pr-[133px] mq750:box-border mq750:pl-[267px] mq750:pr-[267px] mq750:box-border ${className}`}
      style={groupSectionStyle}
    >
      <img
        className="h-[177px] w-[1445px] relative object-cover hidden max-w-full z-[0]"
        alt=""
        src={rectangle52}
        style={rectangleIconStyle}
      />
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] bg-darkslategray-800 z-[1]" />
      <div className="h-[61px] w-[274px] relative">
        <div className="absolute top-[0px] left-[3.1px] rounded-16xl bg-crimson w-full h-full z-[2]" />
        <div className="absolute top-[14px] left-[0px] leading-[35px] font-medium inline-block w-[272.5px] h-[35px] z-[3] mq450:text-mid mq450:leading-[27px]">
          Request a Quote
        </div>
      </div>
    </section>
  );
};

export default GroupComponent1;
