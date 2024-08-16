
const Examples= ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-9xl text-white font-poppins ${className}`}
    >
      <div className="h-[59px] w-[1499px] absolute !m-[0] right-[-41px] bottom-[-7px] bg-steelblue-100 z-[1]" />
      <div className="flex-1 flex flex-row items-start justify-end pt-[152px] px-[142px] pb-[184px] box-border relative min-h-[696px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pt-[99px] mq750:px-[71px] mq750:pb-[120px] mq750:box-border">
        <h2 className="m-0 w-[470px] relative text-inherit leading-[34px] font-extrabold font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-3xl mq450:leading-[27px]">
          Just to name a few...
        </h2>
        <div className="w-[470px] flex flex-col items-start justify-start pt-[70px] px-0 pb-0 box-border max-w-full ml-[-470px] text-xl">
          <b className="self-stretch relative leading-[34px] z-[1] mq450:text-base mq450:leading-[27px]">
            <ul className="m-0 font-inherit text-inherit pl-[27px]">
              <li className="mb-0">
                Reporting life changes to the Marketplace
              </li>
            </ul>
            <p className="m-0">&nbsp;</p>
            <ul className="m-0 font-inherit text-inherit pl-[27px]">
              <li className="mb-0">
                Making sure you have the right forms to take to your tax
                preparer
              </li>
            </ul>
            <p className="m-0">&nbsp;</p>
            <ul className="m-0 font-inherit text-inherit pl-[27px]">
              <li>
                And submitting document requests to the Marketplace in a timely
                manner
              </li>
            </ul>
          </b>
        </div>
        <div className="h-[calc(100%_-_52px)] w-[1486px] absolute !m-[0] top-[0px] right-[-29px] bottom-[52px]">
          <div className="absolute top-[0px] left-[0px] bg-gray-400 w-full h-full" />
          <img
            className="absolute top-[125px] left-[196px] w-[591px] h-[483px] overflow-hidden z-[1]"
            loading="lazy"
            alt=""
            src="/asset-2-1.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Examples;
