
const LoginAndRegisterButton = ({
  className = "",
}) => {
  return (
    <div
      className={`relative rounded-3xl bg-midnightblue-100 w-full flex flex-row items-start justify-start py-[13px] px-[129px] box-border text-center text-13xl text-white font-poppins ${className}`}
    >
      <b className="w-[141px] relative inline-block shrink-0">Login</b>
    </div>
  );
};

export default LoginAndRegisterButton;