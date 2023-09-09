const Divsection86361126 = () => {
  return (
    <div className="relative w-full h-full py-5 px-0 sm:px-72 box-border items-center justify-start bg-[url('/public/divsection86361126@3x.png')] bg-cover bg-no-repeat">
      <section className="relative w-full text-center text-13xl text-darkslategray-200 font-fugaz-one">
        <div className="flex justify-center text-center mb-8">
          WANT TO SEE SOME PROOF?
        </div>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-3 px-2 sm:px-0">
          {[
            "./img_3176.png",
            "./img_3177.png",
            "./img_3178.png",
            "./img_3179.png",
            "./img_3180.png",
            "./img_6012.png",
            "./img_6050.png",
            "./img_6522.png",
            "./img_7661.png",
          ].map((imgSrc, index) => (
            <div className="w-full h-56 sm:h-72 overflow-hidden shadow-2xl" key={index}>
              <img src={imgSrc} alt={`img ${index + 1}`} className="w-full h-full" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Divsection86361126;
