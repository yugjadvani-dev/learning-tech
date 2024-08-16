import Content from "../components/Content";
import FooterLinks from "../components/FooterLinks";
import HelpTopic from "../components/HelpTopic";
import RequestQuote from "../components/RequestQuote";

const ContactUsDesktop = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[46.9px] px-0 pb-0 box-border leading-[normal] tracking-[normal]">
      <div className="w-[375px] h-[372px] absolute !m-[0] top-[219px] left-[-21px] bg-powderblue-200 z-[1]" />
      <Content />
      <HelpTopic />
      <FooterLinks />
      <RequestQuote />
    </div>
  );
};

export default ContactUsDesktop;
