import Spongebob from "../assets/spongebob.png";
import AboutLabel from "../assets/about-label.png";
import SubBg from "../assets/bg/bg-2.png";

export default function SpongebobPage() {
  return (
    <div className="fixed inset-0 flex items-center justify-center px-6 -z-10">
      <img
        src={SubBg}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="flex items-center gap-6 max-w-3xl w-full">
        <img
          src={Spongebob}
          alt="SpongeBob"
          className="w-100 drop-shadow-xl shrink-0"
        />

        <div className="text-center max-w-sm">
          <img src={AboutLabel} alt="About" className="w-48 mx-auto mb-4" />
          <p className="font-bold text-xl leading-relaxed drop-shadow">
            SpongeBob SquarePants is the cheerful, energetic, and relentlessly
            optimistic sea sponge who serves as the main character of the
            series. Residing in a multi-story pineapple house in Bikini Bottom,
            he is defined by his child-like innocence, unyielding positivity,
            and distinctive high-pitched laugh.
          </p>
        </div>
      </div>
    </div>
  );
}
