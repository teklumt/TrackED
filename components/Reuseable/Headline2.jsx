import Image from "next/image";

function Headline2({ headtext }) {
  return (
    <div className="w-full relative h-[150px] ">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className=" text-center p-[15px] sm:p-[20px] md:p-[35px] rounded-[20px] space-y-3">
          <h1 className=" text-2xl md:text-[32px] font-bold ">{headtext}</h1>
          <Image
            src="/assets/Headline/underline.png"
            alt="Picture of the author"
            width={100}
            height={5}
          />
        </div>
      </div>

      <div className="absolute right-0  900px:top-[-100px] 900px:w-[400px]  sm:w-[200px] w-[150px]">
        <Image
          src="/assets/Headline/half2.png"
          alt="Picture of the author"
          width={500}
          height={307}
        />
      </div>
    </div>
  );
}

export default Headline2;
