const FormContainer = () => {
  return (
    <section className="relative text-center text-black font-open-sans">
      <div className="flex justify-center items-center">
        <div className="my-2 mx-3 rounded-3xs bg-firebrick-300 text-center text-white py-2 px-1 sm:px-12 sm:text-5xl text-lgi uppercase inline-block font-bold leading-tight sm:leading-normal">
          Business Owners & Brands Above $30k Per Month
        </div>
      </div>
      <div className="text-13xl sm:text-22xl font-fugaz-one flex justify-center">
        <h1 className="text-inherit font-normal sm:max-w-[983px] leading-tight sm:leading-normal px-4">
          ADD 50 APPOINTMENTS PER MONTH IN THE NEXT 90 DAYS & WIN BACK YOUR TIME
        </h1>
      </div>
      <div className="flex flex-col items-center gap-2 text-3xl">
        <b className="relative leading-[28.6px] inline-block sm:max-w-[983px] my-2">
          Ready to scale?
        </b>
        <button className="cursor-pointer border-none pt-[9px] px-[25px] pb-[10.279998779296875px] bg-firebrick-100 rounded-41xl hover:transform hover:-translate-y-2 hover:bg-firebrick-200 transition duration-300 ease-in-out">
          <a
            className="relative text-5xl text-decoration:underline leading-[34.29px] uppercase font-fugaz-one text-white text-center"
            href="https://calendly.com/iclientcare/30min"
            target="_blank"
            rel="noreferrer"
          >
            Book a call
          </a>
        </button>
      </div>
    </section>
  );
};

export default FormContainer;
