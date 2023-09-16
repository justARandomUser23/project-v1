const RoadmapContainer = () => {
  return (
    <div>
      <section class="z-50 text-center text-black font-fugaz-one">
        <div class="py-2 px-4 mx-auto max-w-screen-lg lg:px-6">
          <div class="flex flex-col justify-center items-center my-8">
            <div class="w-full text-9xl sm:text-23xl uppercase flex flex-col items-center max-w-[983px] leading-tight sm:leading-normal relative pb-1 text-center">
              Our Roadmap to 50 Appointments a Month (and Beyond)
              <span class="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-[6px] bg-firebrick-300 w-1/2 md:w-8/12 lg:w-4/12"></span>
            </div>

            <div className="text-2xl sm:text-6xl uppercase text-center max-w-4xl z-10 pt-6 py-2 px-2 mt-0 sm:mt-4">
              So, you're here and you mean business! We get it, and we're stoked
              to be part of your journey. Here's a sneak peek into our secret
              sauce:
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:gap-12 md:space-y-0">
            <div class="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div className="flex items-center justify-center h-20  bg-gainsboro shadow-[0px_2px_5px_2px_rgba(0,_0,_0,_0.4)]">
                  <img
                    className="w-10 h-10 object-cover"
                    alt=""
                    src={"/compass@2x.png"}
                  />
                  <h3 class="text-6xl text-darkslategray-200 p-3">
                    Discovery Dive
                  </h3>
                </div>
                <div className="relative text-left text-lg text-darkslategray-200 font-open-sans">
                  <div class="h-[280px] sm:h-[265px] bg-gainsboro shadow-[0px_2px_5px_2px_rgba(0,_0,_0,_0.4)] my-1 relative leading-[25.71px] flex-col p-[15px] box-border items-start justify-start">
                    <p className="m-1">
                      We kick things off by really getting to know you. What
                      makes your business tick? What are your dreams? Your
                      challenges?
                    </p>
                    <p>
                      The better we understand, the better we can serve you.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center h-20  bg-gainsboro shadow-[0px_2px_5px_2px_rgba(0,_0,_0,_0.4)]">
                  <img
                    className="w-10 h-10 object-cover"
                    alt=""
                    src={"/financial-dynamic-presentation@2x.png"}
                  />
                  <h3 class="text-center text-6xl text-darkslategray-200 p-3">
                    Strategy Central
                  </h3>
                </div>
                <div className="relative text-left text-lg text-darkslategray-200 font-open-sans">
                  <div class="h-[280px] sm:h-[265px] bg-gainsboro shadow-[0px_2px_5px_2px_rgba(0,_0,_0,_0.4)] my-1 relative leading-[25.71px] flex-col p-[15px] box-border items-start justify-start">
                    <p className="m-1">
                      This isn't our first rodeo. Using insights from our deep
                      dive and industry experience, we craft a unique strategy
                      tailored for your business.
                    </p>
                    <p>
                      One that's not just about numbers - but real, impactful
                      results.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center h-20 bg-gainsboro shadow-[0px_2px_5px_2px_rgba(0,_0,_0,_0.4)]">
                  <img
                    className="w-10 h-10 object-cover"
                    alt=""
                    src={"/group.svg"}
                  />
                  <h3 class="text-center text-6xl text-darkslategray-200 p-3">
                    Action Stations
                  </h3>
                </div>
                <div className="relative text-left text-lg text-darkslategray-200 font-open-sans">
                  <div class="h-[280px] sm:h-[265px] bg-gainsboro shadow-[0px_2px_5px_2px_rgba(0,_0,_0,_0.4)] my-1 relative leading-[25.71px] flex-col p-[15px] box-border items-start justify-start">
                    <p className="m-1">
                      With a game plan in hand, our team rolls up their sleeves.
                    </p>
                    <p>
                      Be it crafting killer ads, optimizing sales funnels, or
                      jazzing up your email sequences, we're on it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 md:gap-12 md:space-y-0">
              <div className="sm:w-2/5">
                <div className="flex items-center justify-center h-20 bg-gainsboro shadow-[0px_2px_5px_2px_rgba(0,_0,_0,_0.4)]">
                  <img
                    className="w-10 h-10 object-cover"
                    alt=""
                    src={"/vector.svg"}
                  />
                  <h3 class="text-center text-6xl text-darkslategray-200 p-3">
                    Rinse & Repeat
                  </h3>
                </div>
                <div className="relative text-left text-lg text-darkslategray-200 font-open-sans">
                  <div class="h-[300px] sm:h-[265px] bg-gainsboro shadow-[0px_2px_5px_2px_rgba(0,_0,_0,_0.4)] my-1 relative leading-[25.71px] flex-col p-[15px] box-border items-start justify-start">
                    <p className="m-1">
                      We're always watching, always learning. Each month, we
                      analyze the results,
                    </p>
                    <p>
                      see what's working & what’s not, and tweak our strategies
                      to get you closer to those 50 monthly golden appointments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:w-2/5">
                <div className="flex items-center justify-center h-20 bg-gainsboro shadow-[0px_2px_5px_2px_rgba(0,_0,_0,_0.4)]">
                  <img
                    className="w-10 h-10 object-cover"
                    alt=""
                    src={"/increase@2x.png"}
                  />
                  <h3 class="text-center text-6xl text-darkslategray-200 p-3 alatsi">
                    Cheers to Growth
                  </h3>
                </div>
                <div className="relative text-left text-lg text-darkslategray-200 font-open-sans">
                  <div class="h-[300px] sm:h-[265px] bg-gainsboro shadow-[0px_2px_5px_2px_rgba(0,_0,_0,_0.4)] my-1 relative leading-[25.71px] flex-col p-[15px] box-border items-start justify-start">
                    <p className="m-1">
                      Hitting 50 appointments? That's just the start. Together,
                      we'll keep pushing, keep evolving, and keep aiming higher.
                    </p>
                    <p>
                      Because why stop at good when great is around the corner?
                      Still scrolling? Really? Wow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center my-8">
        <button className="cursor-pointer border-none pt-[9px] px-[25px] pb-[10.279998779296875px] bg-firebrick-100 rounded-41xl hover:transform hover:-translate-y-2 hover:bg-firebrick-300 transition duration-300 ease-in-out">
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
  );
};

export default RoadmapContainer;
