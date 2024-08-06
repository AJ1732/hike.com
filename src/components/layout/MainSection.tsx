import { useState, useEffect } from "react";
import LoadingIcon from "../icons/LoadingIcon";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import Button from "../ui/Button";

const avatars = [
  {
    id: 1,
    src: avatar1,
  },
  {
    id: 2,
    src: avatar2,
  },
  {
    id: 3,
    src: avatar3,
  },
  {
    id: 4,
    src: avatar4,
  },
];

const MainSection = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions]);

  return (
    <main className="relative size-full pb-16 pt-4">
      {/* MASK */}
      <div
        style={{ width: windowDimensions.width }}
        className="clipped-image absolute left-0 right-0"
      />

      {/* CONTENT */}
      <section className="flex min-h-[855px] flex-col justify-between">
        <div className="relative mx-auto mt-2 flex size-fit flex-col items-center justify-center gap-5 p-5">
          <h1 className="from-blue via-red to-orange bg-gradient-to-r from-[6.37%] via-[41.91%] to-[84.33%] bg-clip-text text-5xl font-bold leading-[3.5rem] tracking-[-0.09rem] text-transparent">
            Hike, Explore, Discover
          </h1>

          <p className="text-grey max-w-[30.6875rem] text-center font-medium leading-[1.5625rem]">
            Join Our Community of Hikers and Find the Perfect Trail for You. Get
            expert advice, detailed trail guides, and support from fellow
            adventurers at every step.
          </p>

          <Button className="mx-auto flex items-center justify-center gap-2.5 py-3.5">
            <span>Join our community</span>
            <LoadingIcon />
          </Button>

          {/* ICON */}
          <img className="absolute -left-20 top-6" src="/svg/binoculars.svg" />
          <img className="absolute -top-1 -right-16" src="/svg/compass.svg" />
          <img className="absolute bottom-5 right-10" src="/svg/magnifying-glass.svg" />
        </div>

        <div className="w-full">
          <div className="flex h-[100px] w-[345px] items-center justify-start gap-8 rounded-lg py-5">
            <div className="flex">
              {avatars.map(({ id, src }) => (
                <figure
                  key={`avatar${id}`}
                  className="-mr-3.5 size-[2.8125rem] rounded-full border bg-white"
                >
                  <img src={src} alt="avata image" />
                </figure>
              ))}
            </div>
            <p className="text-grey font-normal leading-6 tracking-[-0.03rem]">
              <span className="from-blue to-red bg-gradient-to-r bg-clip-text font-bold text-transparent">
                10k+
              </span>{" "}
              registered users
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default MainSection;
