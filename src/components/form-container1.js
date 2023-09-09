const FormContainer1 = () => {
  return (
    <div className="w-full max-w-sm lg:max-w-2xl text-left text-base sm:text-lg lg:text-xl text-darkslategray-100 font-open-sans px-1">
      <h1 className="text-[32px] sm:text-23xl leading-none font-normal font-fugaz-one text-gray-100">
        WHO IS THIS FOR?
        <div className="h-3 bg-firebrick-100 w-2/12 sm:w-1/12" />
      </h1>
      <div className="w-full mt-6 flex flex-col items-start justify-start">
        <div className="leading-normal sm:leading-[1.3] lg:leading-[1.5]">
          We work with businesses that consistently achieve and exceed the
          benchmark of AT LEAST $30k per month. Whether you're in e-commerce,
          tech, services, or any other sector, our expertise is tailored to
          drive results across the board.
        </div>
      </div>
      <div className="w-full mt-8 flex flex-col items-start justify-start gap-6">
        <div className="flex items-start">
          <div className="w-5 h-5 bg-limegreen text-gray-50 flex items-center justify-center mt-1">
            <i className="fa-solid fa-check"></i>
          </div>
          <div className="ml-3 leading-normal">
            You're the Expert: You might not have a huge crowd cheering you on,
            but you know your stuff. And if you've got some testimonials going
            or some case studies to prove it - even better.
          </div>
        </div>
        <div className="flex items-start">
          <div className="w-5 h-5 bg-limegreen text-gray-50 flex items-center justify-center mt-1">
            <i className="fa-solid fa-check"></i>
          </div>
          <div className="ml-3 leading-normal">
            Playing the Long Game: If you're here to make a real, lasting
            impression in your industry, we're all ears. We're not into the
            whole 'quick cash grab' scene.
          </div>
        </div>
        <div className="flex items-start">
          <div className="w-5 h-5 bg-limegreen text-gray-50 flex items-center justify-center mt-1">
            <i className="fa-solid fa-check"></i>
          </div>
          <div className="ml-3 leading-normal">
            Growing Together: Looking for a team to have your back, not just now
            but as you continue to soar higher? We're game. If you want a
            done-for-you solution & are able/willing to invest in services to
            rapidly scale your business while saving you some serious time and
            money - let’s chat.
          </div>
        </div>
        <div className="flex items-start">
          <div className="w-5 h-5 bg-limegreen text-gray-50 flex items-center justify-center mt-1">
            <i className="fa-solid fa-check"></i>
          </div>
          <div className="ml-3 leading-normal">
            Big Audience? No Problem!: If you're a lowkey celebrity unsure how
            to make the most of it, we've got some tricks up our sleeves to
            monetize your platform. And don't worry, we won't let anything taint
            your shining reputation.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer1;
