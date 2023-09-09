import FormContainer from "../components/form-container";
import FormContainer1 from "../components/form-container1";

const Desktop1 = () => {
  return (
    <div className="relative bg-white w-full h-full overflow-hidden text-center text-9xl text-white font-fugaz-one">
      <img
        className="w-24 h-24 object-cover"
        alt="logo"
        src="/img-3541-1-1@2x.png"
      />
      <div className="border-l-0 border-r-0 border-t-[1px] border-b-[1px] border-black border-solid py-4 pb-12">
        <FormContainer />
      </div>
      <div className="container my-4">
        <section className="w-full px-1 md:w-[1170px] md:mx-auto flex flex-col sm:pt-5 sm:pb-5 items-center justify-start text-lgi text-darkslategray-100 font-open-sans">
          <div className="rounded-[15px] bg-whitesmoke shadow-[0px_1px_5px_rgba(0,_0,_0,_0.2)] w-full max-w-[1050px] border-[1px] border-solid border-gray-200 p-4">
            <FormContainer1 />
          </div>
          <div className="w-full max-w-sm lg:max-w-5xl text-left">
            <p>
              Who this isn't for? Hey, we've all got to start somewhere, right?
              But if you're a business owner still figuring things out or
              haven't quite got the ball rolling with a consistent MRR & don’t
              have the disposable income to invest, we might just be a few steps
              further down the path.
            </p>
            <p>
              No hard feelings - if you reach out, we’d still be more than happy
              to connect you with an agency in our network more suited to where
              you’re at. We just want to make sure everyone gets the right fit!
            </p>
          </div>
        </section>
        <div className="flex justify-center">
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
      </div>
    </div>
  );
};

export default Desktop1;
