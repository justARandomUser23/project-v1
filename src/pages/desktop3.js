import ScrollingCard from "../components/scrolling-card";

const Desktop3 = () => {
  return (
    <div>
      <div className="relative flex justify-center items-center my-4">
        <div
          className="rounded-[22px] w-full sm:max-w-5xl h-full bg-[#FAFAFA]"
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          <ScrollingCard />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img className="w-64 h-32" alt="" src="/img-3541-1-2@2x.png" />
      </div>
    </div>
  );
};

export default Desktop3;
