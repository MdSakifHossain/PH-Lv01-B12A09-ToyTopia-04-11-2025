import { TbInnerShadowTop } from "react-icons/tb";

const LoadingSpinner = () => {
  return (
    <div className="container mx-auto my-20 font-inter flex-1 flex flex-col items-center justify-center gap-8">
      <TbInnerShadowTop className="size-32 animate-spinny" />
      <p className="text-5xl">loading...</p>
    </div>
  );
};

export default LoadingSpinner;
