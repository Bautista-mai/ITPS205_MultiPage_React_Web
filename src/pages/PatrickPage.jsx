import Patrick from "../assets/patrick.png";
import AboutLabel from "../assets/about-label.png";
import SubBg from "../assets/bg/bg-2.png";

export default function PatrickPage() {
  return (
    <div className="fixed inset-0 flex items-center justify-center px-6 -z-10">
      <img
        src={SubBg}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="flex items-center gap-6 max-w-3xl w-full">
        <div className="text-center max-w-sm">
          <img src={AboutLabel} alt="About" className="w-48 mx-auto mb-4" />
          <p className="font-bold text-xl leading-relaxed drop-shadow">
            Patrick Star is SpongeBob's dimwitted, pink, and fiercely loyal
            starfish best friend who lives under a literal rock in Bikini
            Bottom. He is best known for his slow-witted nature, massive
            appetite, and incredibly laid-back lifestyle.
          </p>
        </div>

        <img
          src={Patrick}
          alt="Patrick Star"
          className="w-100 drop-shadow-xl shrink-0"
        />
      </div>
    </div>
  );
}
