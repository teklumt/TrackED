import { RiDeleteBin2Line } from "react-icons/ri";

function FeedbackCard({ Feed }) {
  return (
    <div className="w-[289px] h-[248px] border shadow-md p-2 rounded-md flex flex-col justify-between ">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div
            className="w-[40px] bg-primeGray rounded-full h-[40px]"
            style={{
              backgroundImage: `url(${Feed.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div>
            <h1
              className=" text-Primarys font-semibold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {Feed.name}
            </h1>
            <p className="text-[12px] text-gray-400">{Feed.email}</p>
          </div>
        </div>
        <div className="cursor-pointer">
          <RiDeleteBin2Line size={19} className="text-[#FF3B30]" />
        </div>
      </div>
      <div className="">
        {Feed.message.length > 100
          ? Feed.message.slice(0, 100) + "..."
          : Feed.message}
      </div>
      <div>
        {Feed.tag
          .split(" ")

          .map((cur, i) => (
            <span
              key={cur}
              className="bg-primeGray text-sm font-semibold  p-1 rounded-md"
            >
              {cur}
            </span>
          ))}
      </div>
      <div>
        {
          <button
            className={`${
              Feed.status === "Unseen"
                ? "bg-Primarys text-white"
                : "bg-primeGray text-Primarys"
            } w-full  p-2 text-[14px] font-bold  rounded-md`}
          >
            {Feed.status === "Unseen" ? "View" : "Seen"}
          </button>
        }
      </div>
    </div>
  );
}

export default FeedbackCard;
