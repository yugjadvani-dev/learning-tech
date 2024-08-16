
const RectangleComponent = ({
  className = "",
}) => {
  return (
    <div
      className={`w-full h-full !m-[0] absolute top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-6xl flex flex-row items-start justify-start max-w-full z-[1] ${className}`}
    >
      <div className="self-stretch flex-1 relative rounded-6xl bg-darkslategray-300 border-lightsteelblue-300 border-[8px] border-solid box-border max-w-full" />
    </div>
  );
};

export default RectangleComponent;
