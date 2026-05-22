import Squidward from "../assets/squidward.png";
import SubBg from "../assets/bg/bg-2.png";

export default function ContactPage() {
  return (
    <div className="fixed inset-0 flex items-center justify-center px-6 -z-10">
      <img
        src={SubBg}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="flex items-center gap-6 max-w-3xl w-full">
        <img
          src={Squidward}
          alt="Squidward"
          className="w-100 drop-shadow-xl shrink-0"
        />

        <div className="bg-white/30 backdrop-blur-sm rounded-xl p-8 text-center shadow-lg min-w-[260px]">
          <h2 className="text-2xl font-bold mb-4">Contact Spongebob</h2>
          <p className="text-xl bg-white/30 rounded-lg px-4 py-2 mb-4 font-semibold">
            028340283210
          </p>
          <p className="text-sm font-medium">
            If you can't contact him, maybe your phone is broken.
          </p>
        </div>
      </div>
    </div>
  );
}
