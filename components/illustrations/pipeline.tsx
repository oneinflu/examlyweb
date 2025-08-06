
import Image from "next/image";
import Glow from "../ui/glow";

const PipelineIllustration: React.FC = () => {
  return (
    <div className="relative flex w-full flex-col text-xs">
      <Image
        src="/exam.png"
        alt="Pipeline Illustration"
        width={1200}
        height={800}
        className="w-full"
        priority
      />
      <Glow
        variant="center"
        className="opacity-20 transition-all duration-300 group-hover:opacity-30"
      />
      <div className="absolute left-0 top-[calc(50%-1px)]  w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
    </div>
  );
};

export default PipelineIllustration;
