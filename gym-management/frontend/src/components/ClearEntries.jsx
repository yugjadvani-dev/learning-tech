import { useMemo } from "react";
const ClearEntries= ({
  className = "",
  propBackgroundColor,
  clearEntries,
  propFontSize,
  propColor,
  propTextDecoration,
  propFontWeight,
  propDisplay,
  propMinWidth,
}) => {
  const clearEntriesStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const clearEntries1Style = useMemo(() => {
    return {
      fontSize: propFontSize,
      color: propColor,
      textDecoration: propTextDecoration,
      fontWeight: propFontWeight,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [
    propFontSize,
    propColor,
    propTextDecoration,
    propFontWeight,
    propDisplay,
    propMinWidth,
  ]);

  return (
    <button
      className={`cursor-pointer [border:none] py-2.5 px-5 bg-cornsilk relative rounded-31xl w-full flex flex-row items-start justify-start box-border whitespace-nowrap z-[3] hover:bg-antiquewhite ${className}`}
      style={registerStyle}
    >
      <b
        className="relative text-xl inline-block font-poppins text-darkslategray-200 text-left min-w-[114px]"
        style={visitOurGymStyle}
      >
        {clearEntries}
      </b>
    </button>
  );
};

export default ClearEntries;
