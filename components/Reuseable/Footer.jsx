import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaPhone,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdOutlineFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-3 ">
      <div className="container mx-auto flex flex-wrap  justify-between  px-4">
        <div className=" mb-6">
          <Link href="/">
            <Image
              src="/assets/temoLogo.png"
              alt="TrackED Logo"
              className="max-w-full h-auto"
              width={120}
              height={120}
            />
          </Link>
        </div>
        <div className=" mb-6">
          <h4 className="text-lg font-bold mb-2">Services</h4>
          <ul>
            <li className="mb-1">
              <a href="/#feature" className="text-gray-700 hover:text-gray-900">
                Features
              </a>
            </li>
            <li className="mb-1">
              <a href="/#pricie" className="text-gray-700 hover:text-gray-900">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className=" mb-6">
          <h4 id="contact" className="text-lg font-bold mb-2">
            Contact
          </h4>
          <p className="font-semibold ">Phone: </p>
          <p className="text-gray-700"> +251900423958</p>
          <p className="font-semibold">Email: </p>
          <p className="text-gray-700">teklumoges482@gmail.com</p>
        </div>
        <div className=" mb-6">
          <h4 className="text-lg font-bold mb-2">Company</h4>
          <ul>
            <li className="mb-1">
              <a href="/AboutUs" className="text-gray-700 hover:text-gray-900">
                About
              </a>
            </li>
            <li className="mb-1">
              <Link
                href="/SignUp"
                className="text-gray-700 hover:text-gray-900"
              >
                Join us
              </Link>
            </li>
          </ul>
        </div>
        <div id="update" className=" mb-6">
          <h4 className="text-lg font-bold mb-2">
            Subscribe to our newsletter
          </h4>
          <p className="text-gray-700 mb-2">
            Get the latest news and updates from TrackED
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Input your email"
              className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 bg-Primarys hover:border-gray-600 text-white rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap  justify-center gap-11 items-center px-4 mt-7 text-sm   border-gray-300">
        <p className="text-gray-600">
          &copy; 2024 TrackED, Inc. •{" "}
          <a href="#" className="hover:underline">
            Privacy
          </a>{" "}
          •{" "}
          <a href="#" className="hover:underline">
            Terms
          </a>{" "}
          •{" "}
          <a href="#" className="hover:underline">
            Sitemap
          </a>
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://t.me/Tsemadre" className="text-lg text-blue-500">
            <FaTelegram />
          </a>
          <a href="mailto:teklumoges482@gmail.com" className="text-lg ">
            <MdEmail className="" />
          </a>
          <a
            href="www.linkedin.com/in/teklu-moges"
            className="text-lg text-yellow-700"
          >
            <FaLinkedin />
          </a>
          <a href="tel:+251900423958" className="text-lg t">
            <FaPhone />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
