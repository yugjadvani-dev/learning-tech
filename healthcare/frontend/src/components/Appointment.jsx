const Appointment= ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[59px] box-border max-w-full text-center text-2xl text-white font-poppins mq750:pb-[25px] mq750:box-border mq1250:pb-[38px] mq1250:box-border ${className}`}
    >
      <div className="w-[1156px] flex flex-col items-end justify-start gap-[59px] max-w-full mq750:gap-[29px]">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image-41@2x.png"
        />
        <div className="self-stretch bg-darkslateblue-100 flex flex-row items-start justify-start pt-5 px-[104px] pb-[23px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[71px] w-[1156px] relative bg-darkslateblue-100 hidden max-w-full" />
          <b className="relative leading-[28px] z-[1] mq450:text-mid mq450:leading-[22px]">
            Book an Appointment
          </b>
        </div>
        <div className="w-[1128px] h-[610px] relative max-w-full text-2xs text-darkslategray-400">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[1107px]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover"
              alt=""
              src="/image-43@2x.png"
            />
            <img
              className="absolute top-[541px] left-[1068px] w-[39px] h-[39px] overflow-hidden z-[1]"
              loading="lazy"
              alt=""
              src="/frame.svg"
            />
          </div>
          <b className="absolute top-[579px] left-[1050px] leading-[26px] inline-block w-[78px] h-6 z-[2]">
            Back to Top
          </b>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
