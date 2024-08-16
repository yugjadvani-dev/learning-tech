import ClearEntries1 from "../components/ClearEntries1";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent21 from "../components/FrameComponent21";
import FrameComponent31 from "../components/FrameComponent31";
import FrameComponent5 from "../components/FrameComponent5";
import GymContact from "../components/GymContact";
const ClientRegistrationWebsite = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[26px] box-border leading-[normal] tracking-[normal] text-center text-xl text-midnightblue-100 font-monument-extended">
      <section className="w-[1440px] !m-[0] absolute top-[2494px] left-[0px] flex flex-row items-start justify-start max-w-full">
        <img
          className="h-[1302px] flex-1 relative max-w-full overflow-hidden object-cover"
          alt=""
          src="/rectangle-52@2x.png"
        />
        <img
          className="h-[532px] w-[390px] absolute !m-[0] top-[59px] left-[158px] rounded-xl object-cover z-[2]"
          alt=""
          src="/rectangle-54@2x.png"
        />
      </section>
      <div className="self-stretch h-[76px] relative bg-white hidden z-[1]" />
      <section className="w-[1440px] !m-[0] absolute top-[73px] left-[0px] flex flex-row items-start justify-start max-w-full text-left text-[50px] text-white font-poppins">
        <img
          className="h-[620px] flex-1 relative max-w-full overflow-hidden object-cover"
          alt=""
          src="/rectangle-46@2x.png"
        />
        <h1 className="!m-[0] w-[453px] absolute top-[171px] left-[152px] text-inherit tracking-[0.05em] flex items-center z-[2] font-inherit mq450:text-11xl mq1050:text-21xl">
          <span className="w-full">
            <p className="[margin-block-start:0] [margin-block-end:1px]">
              <b>Start a better shape of you!</b>
            </p>
            <p className="m-0 font-extrabold text-khaki-100">{`Come Join Us! `}</p>
          </span>
        </h1>
      </section>
      <section className="w-full h-[331px] !m-[0] absolute top-[369px] right-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(26,_19,_99,_0),_#1a1363)] flex flex-row items-start justify-start py-[101px] px-[153px] box-border max-w-full z-[1] mq450:pl-[76px] mq450:pr-[76px] mq450:box-border">
        <div className="h-[331px] w-[1442px] relative [background:linear-gradient(180deg,_rgba(26,_19,_99,_0),_#1a1363)] hidden max-w-full" />
        <ClearEntries1
          propBackgroundColor="#fffadf"
          clearEntries="Learn More"
          propFontSize="20px"
          propColor="#3e3e3e"
          propTextDecoration="unset"
          propFontWeight="unset"
          propDisplay="inline-block"
          propMinWidth="114px"
        />
      </section>
      <div className="w-[200px] h-[226px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-white border-midnightblue-100 border-[3px] border-solid box-border hidden z-[7]" />
      <section id="VisitourGym" className="self-stretch flex flex-col items-end justify-start max-w-full">
        <FrameComponent5 />
        <FrameComponent11 />
      </section>
      <img
        className="w-[170px] h-[170px] absolute !m-[0] bottom-[1780px] left-[257px] rounded-[50%] object-cover z-[6]"
        loading="lazy"
        alt=""
        src="/ellipse-16@2x.png"
      />
      <img
        className="w-[170px] h-[170px] absolute !m-[0] right-[260px] bottom-[1780px] rounded-[50%] object-cover z-[6]"
        loading="lazy"
        alt=""
        src="/ellipse-18@2x.png"
      />
      <div className="w-[332px] h-[347px] !m-[0] absolute top-[2115px] left-[552px] flex flex-row items-start justify-start max-w-full">
        <img
          className="h-[555px] w-[1439px] absolute !m-[0] top-[-164px] right-[-556px] object-cover z-[4]"
          alt=""
          src="/coach-martell-image@2x.png"
        />
        <div className="self-stretch flex-1 rounded-21xl bg-thistle-200 flex flex-row items-start justify-start py-[114px] pl-[60px] pr-[55px] box-border max-w-full z-[5]">
          <div className="h-[347px] w-[332px] relative rounded-21xl bg-thistle-200 hidden max-w-full" />
          <div className="flex-1 relative [text-decoration:underline] tracking-[0.1em] z-[6] mq450:text-base">
            Coach Martell
          </div>
        </div>
      </div>
      <FrameComponent21 />
      <div className="w-[280px] !m-[0] absolute top-[1982px] left-[588px] flex flex-row items-start justify-start text-21xl text-white">
        <div className="h-[68px] w-[1437px] absolute !m-[0] top-[-32px] left-[-588px] [background:linear-gradient(180deg,_#2b2b2b,_rgba(43,_43,_43,_0))] z-[5]" />
        <h1 className="m-0 flex-1 relative text-inherit [text-decoration:underline] tracking-[0.1em] font-normal font-inherit z-[6] mq450:text-5xl mq1050:text-13xl">
          COACHES
        </h1>
      </div>
      <GymContact />
      <FrameComponent31 />
    </div>
  );
};

export default ClientRegistrationWebsite;
