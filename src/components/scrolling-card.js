const ScrollingCard = () => {
  return (
    <section className="text-center text-darkslategray-100 font-open-sans">
      <div className="flex flex-col items-center justify-center mt-6">
        <img
          className="w-[104px] h-[103px] object-cover"
          alt=""
          src="/weddwdwepng@2x.png"
        />
        <div className="text-center text-13xl font-bold pt-5 pb-3">
          Still scrolling? Really? Wow.
        </div>
        <div className="px-2 pb-1 text-9xl max-w-screen-md leading-[45.71px] font-normal">
          Welcome to the bottom of the page. You’re either thorough or very
          contemplative - maybe both?
        </div>
      </div>
      <div className="p-4 text-lg text-left">
        <div className="my-4">
          There could be only one of three reasons why you’re here:
        </div>
        <div className="text-inherit">
          <ol>
            <li>
              You’re funnel hacking me & are scoping out your competition &
              stealing some ideas for your own project. <br /> I’m calling the
              cops.
            </li>
            <li>
              Maybe you’re the super cautious type. Like “read all terms &
              conditions” cautious. That’s cool. We respect a good deep dive.
            </li>
            <li>
              You’re on the fence - not sure if we’re the right fit, or if it’s
              the right time. Scary decisions.
            </li>
          </ol>
        </div>
        <div className="my-4">
          I'm gonna go out on a limb and guess you probably fall in category
          number 3.
        </div>
        <div className="my-4">
          Deep in thought, contemplating if we’re the real deal. We’ve all been
          there.
        </div>
        <div className="my-4">
          <p>
            Now, I’m not psychic (though that would be cool), but I’m pretty
            sure you have questions. Things you’re curious about, things you’re
            uncertain about, or maybe you’re just wondering if we’re actually
            real people & not Jordan Belfort’s disciples that are going to end
            every sentence with “sound fair enough?” & coerce you into signing a
            contract.
          </p>
        </div>
        <div className="my-4">
          <div className="max-w-screen-md">Here’s the thing:</div>
        </div>
        <div className="my-4">
          <p>
            You’ve already invested time scrolling through this page. That tells
            me you must be intrigued, even a smidge. Why not invest a few more
            minutes and find out if we’re the real deal or just great with
            words?
          </p>
        </div>
        <div className="my-4 text-left">
          Look, I know everyone says this, but our goal is truly to give you as
          much value as possible on this call.
        </div>
        <div className="my-4">
          <p>
            The button below is not a commitment. It’s an invitation. A chance
            to have a chat, share some insights, maybe have a laugh (if you
            think we’re funny), and see if there’s potential for something
            bigger.
          </p>
        </div>
        <p className="my-4">So what do ya say?</p>
        <p>Click below & make this scrolling marathon worthwhile.</p>
      </div>
      <button className="cursor-pointer border-none pt-[9px] px-[25px] my-4 pb-[10.279998779296875px] bg-firebrick-100 rounded-41xl hover:transform hover:-translate-y-2 hover:bg-firebrick-300 transition duration-300 ease-in-out">
        <a
          className="relative text-5xl text-decoration:underline leading-[34.29px] uppercase font-fugaz-one text-white text-center"
          href="https://calendly.com/iclientcare/30min"
          target="_blank"
          rel="noreferrer"
        >
          Book a call
        </a>
      </button>
    </section>
  );
};

export default ScrollingCard;
