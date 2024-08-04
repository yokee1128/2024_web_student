import LogImg from "../atom/LogImg";
import NavContent from "../atom/NavContent";

const Navi = () => {
  return (
    <div>
      <div className="w-full h-12 flex justify-center text-center gap-6">
        <LogImg />
        <NavContent />
        <LogImg />
      </div>
    </div>
  );
};

export default Navi;
