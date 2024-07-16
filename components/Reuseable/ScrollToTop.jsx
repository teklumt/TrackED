import { MdArrowUpward } from "react-icons/md";

function ScrollToTop() {
  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={
          "bg-[#0D0C22] text-white p-2 rounded-md flex justify-center items-center"
        }
      >
        <MdArrowUpward size={20} />{" "}
        <span className="hidden ">Scroll to top</span>
      </button>
    </div>
  );
}

export default ScrollToTop;
