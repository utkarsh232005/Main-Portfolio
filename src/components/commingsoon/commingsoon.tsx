import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import animationJson from "../../json/commingsoon.json";

export default function ComingSoon() {
  const navigate = useRouter();

  function handleReturn() {
    navigate.push("/", { scroll: false });
  }

  return (
    <div className="fixed inset-0 z-[1000] bg-white">
      <div className="w-screen flex flex-col gap-10 justify-center items-center h-screen px-7">
        <div className="max-w-xl md:max-w-full">
          <Lottie animationData={animationJson} loop={true} autoplay={true} />
        </div>
        <div className="cursor-pointer">
          <button
            onClick={handleReturn}
            className="border border-gray-300 px-9 py-4 rounded-full transition-colors duration-700 hover:bg-black hover:text-white hover:border-0"
          >
            Go back?
          </button>
        </div>
      </div>
    </div>
  );
}
