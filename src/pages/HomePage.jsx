import MainBg from "../assets/bg/bg-1.png";
import HomeLabel from "../assets/home-label.png";

export default function HomePage() {
  return (
    <div className="fixed inset-0 flex items-end justify-center pb-8 -z-10">
      <img
        src={MainBg}
        alt="SpongeBob cast"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <img
        src={HomeLabel}
        alt="SpongeBob SquarePants logo"
        className="w-100 mb-15"
      />
    </div>
  );
}
