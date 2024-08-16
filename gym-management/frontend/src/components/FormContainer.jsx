
const FormContainer = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white flex flex-col items-start justify-start pt-[42px] px-[27px] pb-5 box-border gap-[18px] max-w-full z-[1] text-left text-base text-gray-200 font-poppins ${className}`}
    >
      <div className="w-[623px] h-[255px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white hidden max-w-full" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between gap-5 mq725:flex-wrap">
          <div className="w-[170px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
            <h2 className="m-0 self-stretch relative text-inherit font-bold font-inherit z-[2]">
              Name of Member
            </h2>
          </div>
          <div className="w-[252px] flex flex-row items-start justify-start gap-4">
            <h2 className="m-0 flex-1 relative text-inherit font-bold font-inherit z-[2]">
              Plan
            </h2>
            <h2 className="m-0 flex-1 relative text-inherit font-bold font-inherit z-[2]">
              Price
            </h2>
          </div>
        </div>
        <div className="w-[553px] flex flex-row items-start justify-start gap-[15px] max-w-full mq725:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[193px]">
            <input
              className="[border:none] [outline:none] bg-whitesmoke-200 self-stretch h-[33px] relative rounded-xl min-w-[178px] z-[2]"
              type="text"
            />
          </div>
          <div className="w-[119px] flex flex-col items-start justify-start py-0 pl-0 pr-3 box-border">
            <input
              className="[border:none] [outline:none] bg-whitesmoke-200 self-stretch h-[33px] relative rounded-xl min-w-[64px] z-[2]"
              type="text"
            />
          </div>
          <div className="h-[33px] w-[107px] relative rounded-xl bg-whitesmoke-200 z-[2]" />
        </div>
      </div>
      <div className="w-[250px] flex flex-col items-start justify-start gap-1.5">
        <input
          className="w-[170px] [border:none] [outline:none] inline-block font-poppins text-base bg-[transparent] h-6 relative font-bold text-gray-200 text-left shrink-0 p-0 z-[2]"
          placeholder="Date of Join"
          type="text"
        />
        <div className="self-stretch rounded-xl bg-whitesmoke-200 flex flex-row items-start justify-end pt-[7px] px-3.5 pb-1.5 z-[2]">
          <div className="h-[33px] w-[250px] relative rounded-xl bg-whitesmoke-200 hidden" />
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 z-[3]"
            alt=""
            src="/journalcheck-1.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-4 text-center text-white">
        <div className="w-[191px] flex flex-row items-start justify-start gap-[9px]">
          <div className="rounded-xl bg-midnightblue-100 flex flex-row items-start justify-start py-[3px] px-[21px] z-[2]">
            <h2 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[41px]">
              Save
            </h2>
          </div>
          <div className="flex-1 rounded-xl bg-white border-midnightblue-100 border-[2px] border-solid flex flex-row items-start justify-start py-0 px-[19px] z-[2] text-midnightblue-100">
            <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[57px]">
              Cancel
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
