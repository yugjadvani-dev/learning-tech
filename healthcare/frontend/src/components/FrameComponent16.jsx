
const FrameComponent16= ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[72px] box-border gap-[21px] max-w-full text-center text-xl text-white font-poppins ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-3.5 pl-[31px] pr-5">
        <img
          className="h-[127px] w-[269px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/main-logo-1@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[26px] pr-5 box-border max-w-full">
        <div className="w-[764px] flex flex-col items-end justify-start max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-6 pr-5 box-border max-w-full">
            <div className="w-[470px] bg-steelblue-600 flex flex-row items-start justify-start pt-[29px] px-0 pb-6 box-border whitespace-nowrap max-w-full z-[1]">
              <div className="h-[82px] w-[470px] relative bg-steelblue-600 hidden max-w-full" />
              <div className="flex-1 relative leading-[25px] font-extrabold inline-block max-w-full z-[1]">
                Your privacy is critically important to us
              </div>
            </div>
          </div>
          <div className="self-stretch bg-indianred flex flex-row items-start justify-center pt-[35px] px-5 pb-7 box-border max-w-full z-[2]">
            <div className="h-[200px] w-[764px] relative bg-indianred hidden max-w-full" />
            <b className="h-[137px] w-[372px] relative leading-[25px] inline-block shrink-0 max-w-full z-[1] mq450:text-base mq450:leading-[20px]">
              <p className="m-0">{`Health Care All Year is located at
`}</p>
              <p className="m-0">16501 Northcross Drive, Ste D,</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">Huntersville, NC 28078</p>
            </b>
          </div>
        </div>
      </div>
      <div className="self-stretch relative leading-[25px] font-medium text-darkslategray-400 text-left z-[1] mq450:text-base mq450:leading-[20px]">
        <p className="[margin-block-start:0] [margin-block-end:61px]">{`It is Health Care All Year policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to (Health Care All Year hereinafter, “us”, “we”, or “Health Care All Year”).
We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. 
We have adopted this privacy policy (“Privacy Policy”) to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.`}</p>
        <p className="m-0">
          This Privacy Policy, together with the Terms and conditions posted on
          our Website, set forth the general rules and policies governing your
          use of our Website. Depending on your activities when visiting our
          Website, you may be required to agree to additional terms and
          conditions.
        </p>
      </div>
    </section>
  );
};

export default FrameComponent16;
