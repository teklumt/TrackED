import Image from "next/image";
import Link from "next/link";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { MdMenu } from "react-icons/md";

function ReusableHeader({
  logo,
  middleItems,
  name,
  type,
  handleSetUpgrade,
  showMenu,
  setShowMenu,
}) {
  return (
    <>
      <header className=" items-center justify-between px-[2rem] h-[70px] shadow-md border hidden 900px:flex">
        <Link href="/">
          <Image
            src={logo}
            width={168}
            height={29.92}
            alt="logo"
            className="cursor-pointer"
          />
        </Link>

        <div className="flex gap-10 font-dm-sans text-gray-500 text-[18px] ">
          {middleItems.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer  ${
                item.premium ? "text-yellow-500" : "text-gray-600"
              }`}
            >
              {item.href ? (
                <Link href={item.href}>{item.text}</Link>
              ) : (
                <a href={item.href}>{item.text}</a>
              )}
            </div>
          ))}
        </div>
        {type === 4 && (
          <div className="flex gap-7 items-center justify-center">
            <div>
              <IoMdNotificationsOutline size={30} />
            </div>
            <div
              className=" rounded-full p-1 w-[90px] text-center bg-premium  text-white font-semibold"
              onClick={() => handleSetUpgrade}
            >
              Upgrade
            </div>
            <div className="text-xl font-semibold border rounded-full w-[35px] h-[35px] justify-center items-center text-center flex bg-Primarys text-white">
              {name}
            </div>
            <div>
              <FiLogOut size={35} className="font-bold" />
            </div>
          </div>
        )}
        {type === 2 && (
          <div className="flex gap-7 items-center justify-center">
            <div className="text-xl font-semibold border rounded-full w-[35px] h-[35px] justify-center items-center text-center flex bg-Primarys text-white">
              {name}
            </div>
            <div>
              <FiLogOut size={35} className="font-bold" />
            </div>
          </div>
        )}
      </header>
      <div>
        <div className="flex shadow-md items-center justify-between px-1 sm:px-[2rem] h-[80px]  900px:hidden border ">
          <Link href={"/"}>
            <Image
              src="/assets/temologo.png"
              width={168}
              height={29.92}
              alt="logo"
              className="cursor-pointer"
            />
          </Link>
          <div className="flex md:gap-7 gap-2 items-center justify-center">
            <div className="text-xl font-semibold border rounded-full w-[44px] h-[44px] justify-center items-center text-center flex bg-Primarys text-white">
              {name}
            </div>
            {/* <div className="cursor-pointer">
              <FiLogOut size={35} className="font-bold" />
            </div> */}
          </div>
        </div>
      </div>
      <div>
        {showMenu && (
          <div className="flex gap-1 shadow-md absolute top-[60px]  text-[18px] font-semibold w-full items-center p-2 mt-4 flex-col justify-center text-4xl text-gray-600 font-calibri bg-white">
            {middleItems.map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer   ${
                  item.premium
                    ? "text-yellow-500 hover:font-bold hover:text-yellow-400"
                    : "text-gray-600 hover:font-bold hover:text-black"
                }`}
                onClick={() => setShowMenu((showMenu) => !showMenu)}
              >
                {item.href ? (
                  <Link href={item.href}>{item.text}</Link>
                ) : (
                  <a href={item.href}>{item.text}</a>
                )}
              </div>
            ))}
            {type === 4 && (
              <div className="flex flex-col items-center justify-center">
                <div
                  className=" text-yellow-500 cursor-pointer  hover:text-yellow-400 hover:text-bold"
                  onClick={() => {
                    handleSetUpgrade();
                    setShowMenu((showMenu) => !showMenu);
                  }}
                >
                  Upgrade
                </div>

                <Link href="/">
                  <div className="cursor-pointer hover:font-bold hover:text-black">
                    Logout
                  </div>
                </Link>
              </div>
            )}
          </div>
        )}
        <div
          className="absolute right-10  top-[80px] 900px:hidden cursor-pointer"
          onClick={() => setShowMenu((showMenu) => !showMenu)}
        >
          {/* {!showMenu && (
            <MdMenu
              size={35}
              className="font-bold text-black  border rounded-md bg-white "
            />
          )} */}
          {showMenu && (
            <p className="text-lg ml-3 text-black cursor-pointer font-semibold">
              X
            </p>
          )}
        </div>
        <div className="absolute right-0 900px:hidden bg-white cursor-pointer rounded-md">
          {!showMenu && (
            <div>
              <IoMdNotificationsOutline size={30} />
            </div>
          )}
        </div>
        <div
          className="absolute 900px:hidden  right-[55px] sm:right-[90px] top-[20px] bg-white cursor-pointer rounded-md"
          onClick={() => setShowMenu((showMenu) => !showMenu)}
        >
          {!showMenu && (
            <div>
              <MdMenu size={40} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ReusableHeader;
