import CustomButton from "../Button";
import Image from "next/image";

function Trends() {
  return (
    <div className="font-mainFont flex flex-col items-center md:flex-row md:justify-center md:gap-10 md:my-32 md:mx-4 lg:mx-0">
      <div className="mb-10 md:mb-0">
        <h3 className="text-6xl uppercase font-black md:text-8xl">
          Trends<br></br>2021
        </h3>
        <div className="max-w-[240px] md:max-w-[180px]">
          <p className="font-light text-sm py-8 md:py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus
            eget habitasse et vestibulum. Felis libero enim morbi curabitur
            lectus nisi, eu id commodo.
          </p>
          <CustomButton text={"Find Out"} />
        </div>
      </div>
      <div className="relative max-w-[240px] md:max-w-2xl">
        <Image
          src="/product.png"
          width={460}
          height={640}
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default Trends;
