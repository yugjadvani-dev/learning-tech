
const LoginAndRegisterButton2 = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-[13px] px-5 bg-midnightblue-100 flex-1 rounded-3xl flex flex-row items-start justify-center box-border max-w-full hover:bg-darkslateblue-300 ${className}`}
    >
      <b className="w-[141px] relative text-13xl inline-block font-poppins text-white text-center shrink-0 mq450:text-7xl mq1050:text-lgi">
        Login
      </b>
    </button>
  );
};

export default LoginAndRegisterButton2;