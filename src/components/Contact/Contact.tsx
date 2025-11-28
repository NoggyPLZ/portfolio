import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <>
      <div className="px-8 pt-30 md:pt-40 bg-palered-500">
        <h3 className="text-palegray-500 font-bigger uppercase text-[8vw] md:text-[3vw] pb-1 md:pb-5 -mb-[0.2em] leading-none">
          CONTACT ME
        </h3>
      </div>
      <div className="bg-palered-500 px-8 pt-2 pb-5">
        <div className="flex items-center">
          <h2 className="text-[22vw] md:text-[12vw] font-bigger text-palegray-500 -mb-[0.2em] leading-none uppercase">
            LET'S SOLVE PROBLEMS
          </h2>
        </div>
      </div>
      <ContactInfo />
    </>
  );
}
