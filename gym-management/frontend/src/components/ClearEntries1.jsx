import { useMemo } from "react";

const ClearEntries1 = ({
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
  const clearEntries2Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const clearEntries3Style = useMemo(() => {
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
    <a href="/register-page"
      className={`cursor-pointer [border:none] py-2.5 px-5 bg-cornsilk rounded-31xl flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-antiquewhite ${className}`}
      style={clearEntries2Style}
    >
      <b
        className="relative text-xl font-poppins text-gray-200 text-left"
        style={clearEntries3Style}
      >
        {clearEntries}
      </b>
    </a>
  );
};

export default ClearEntries1;
