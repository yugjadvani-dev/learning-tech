import FormContainer from "../components/FormContainer";
import UserIconContainer from "../components/UserIconContainer";

const PointOfSale = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[70px] px-[97px] pb-[63px] box-border leading-[normal] tracking-[normal] mq725:pl-6 mq725:pr-6 mq725:box-border mq1050:pl-12 mq1050:pr-12 mq1050:box-border">
      <div className="w-[930px] h-[590px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_4px_4px_rgba(77,_149,_83,_0.11)] rounded-lg bg-white hidden max-w-full z-[0]" />
      <div className="w-[647px] h-[485px] relative rounded-tl-none rounded-tr-3xs rounded-b-none bg-darkslategray-300 hidden max-w-full z-[1]" />
      <img
        className="w-5 h-5 absolute !m-[0] right-[512px] bottom-[-49px] overflow-hidden shrink-0"
        alt=""
      />
      <main className="w-[872px] flex flex-row items-start justify-start gap-[23px] max-w-full mq1000:flex-wrap">
        <UserIconContainer />
        <section className="flex-1 flex flex-col items-start justify-start pt-[241px] px-0 pb-0 box-border relative min-w-[405px] max-w-full mq725:pt-[157px] mq725:box-border mq725:min-w-full">
          <FormContainer />
          <img
            className="w-[23px] h-[23px] absolute !m-[0] top-[41px] right-[0px] overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/rinotification2fill1.svg"
          />
        </section>
      </main>
    </div>
  );
};

export default PointOfSale;
