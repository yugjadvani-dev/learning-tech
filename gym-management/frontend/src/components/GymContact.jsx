
const GymContact = ({ className = "" }) => {
  return (
    <section
      className={`w-[1200px] flex flex-row items-start justify-center pt-0 px-5 pb-[177px] box-border max-w-full text-left text-21xl text-midnightblue-100 font-monument-extended mq750:pb-[115px] mq750:box-border ${className}`}
    >
      <div className="w-[778px] flex flex-col items-start justify-start gap-2.5 max-w-full">
        <div className="w-[715px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 w-[451px] relative text-inherit tracking-[0.1em] font-normal font-inherit inline-block max-w-full z-[1] mq450:text-5xl mq1050:text-13xl">
            VISIT OUR GYM
          </h1>
        </div>
        <div className="self-stretch rounded-tl-none rounded-tr-21xl rounded-b-none bg-darkslategray-200 flex flex-col items-start justify-start py-[26px] pl-36 pr-[41px] box-border gap-[30px] max-w-full z-[1] text-xl text-khaki-100 font-poppins mq450:gap-[15px] mq450:pl-5 mq450:box-border mq1050:pl-[72px] mq1050:box-border">
          <div className="w-[778px] h-[308px] relative rounded-tl-none rounded-tr-21xl rounded-b-none bg-darkslategray-200 hidden max-w-full" />
          <div className="self-stretch flex flex-col items-start justify-start gap-1 max-w-full">
            <div className="self-stretch h-[63px] relative tracking-[0.05em] inline-block shrink-0 z-[2] mq450:text-base">
              <span className="whitespace-pre-wrap">
                <span className="font-medium">Address:</span>
              </span>
              <b className="text-white">
                <span className="whitespace-pre-wrap">{` `}</span>
                <span className="whitespace-pre-wrap">{`12TH ST. GENERAL MATHA VILLAMOR AIR BASE PASAY CITY    `}</span>
                <span className="text-darkslateblue-500 whitespace-pre-wrap">{`    `}</span>
              </b>
            </div>
            <div className="w-[535px] flex flex-col items-start justify-start gap-2 max-w-full">
              <div className="self-stretch relative z-[2] mq450:text-base">
                <span className="font-medium">{`Email: `}</span>
                <b className="text-white">Martell008@yahoo.com</b>
              </div>
              <div className="w-[371px] relative inline-block max-w-full z-[2] mq450:text-base">
                <span className="font-medium">{`Contact Number: `}</span>
                <b className="text-white">09260417050</b>
              </div>
            </div>
          </div>
          <div className="w-[223px] flex flex-col items-start justify-start gap-[13px] text-5xl text-thistle-100 font-monument-extended">
            <div className="self-stretch relative z-[2] mq450:text-lgi">
              OUR SOCIALS:
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-1.5">
              <div className="flex flex-row items-start justify-start gap-[15px]">
                <img
                  className="h-[47px] w-[47px] relative overflow-hidden shrink-0 min-h-[47px] z-[2]"
                  loading="lazy"
                  alt=""
                  src="/icbaselinefacebook.svg"
                />
                <img
                  className="h-[47px] w-[47px] relative overflow-hidden shrink-0 min-h-[47px] z-[2]"
                  loading="lazy"
                  alt=""
                  src="/mdifacebookmessenger.svg"
                />
                <img
                  className="h-[47px] w-[47px] relative overflow-hidden shrink-0 min-h-[47px] z-[2]"
                  loading="lazy"
                  alt=""
                  src="/phinstagramlogofill.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymContact;
