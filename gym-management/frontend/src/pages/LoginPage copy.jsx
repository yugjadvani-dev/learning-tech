import Main from "../components/Main";

const LoginPage = () => {
  return (
    <div className="w-full h-[1024px] relative bg-whitesmoke-100 overflow-hidden flex flex-row items-start justify-start pt-[174px] pb-1 pl-[141px] pr-[58px] box-border gap-[108px] leading-[normal] tracking-[normal] mq750:gap-[54px] mq750:pl-[70px] mq750:pr-[29px] mq750:box-border mq450:h-auto mq450:gap-[27px] mq450:pl-5 mq450:box-border">
      <Main />
      <img
        className="mt-[-188px] h-[1034px] flex-1 relative max-w-[calc(100%_-_514px)] overflow-hidden object-cover mq1025:max-w-full mq1125:hidden"
        alt=""
        src="/317448272-616806260217094-5636782586877860459-n-31@2x.png"
      />
    </div>
  );
};

export default LoginPage;
