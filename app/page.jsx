import LandingHeading from "@/components/Header/LandingHeading";
import Headlines from "@/components/Reuseable/Headlines";
import Image from "next/image";
import { FaRegCheckCircle, FaRegEnvelope } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

import Swip from "@/components/Reuseable/Swip";
import Link from "next/link";

function page() {
  const trustedBy = [
    "/assets/campanyLogo/Group.png",
    "/assets/campanyLogo/Container 25.png",
    "/assets/campanyLogo/Image 76-1.png",
    "/assets/campanyLogo/Image 76-2.png",
    "/assets/campanyLogo/Image 76-3.png",
    "/assets/campanyLogo/Image 76-4.png",
    "/assets/campanyLogo/Image 76-5.png",
    "/assets/campanyLogo/Image 76-6.png",
    "/assets/campanyLogo/Image 76-7.png",
    "/assets/campanyLogo/Image 76.png",
  ];
  const slides = [
    {
      image: "/assets/persons/person5.jpg",
      testi:
        "As an educational institution, issuing and managing certificates has never been easier. TrackED ensures our documents are securely stored and easily verified.",
      name: "Dr. Mesfin Workneh",
      title: "Doctor at Addis Ababa University",
    },
    {
      image: "/assets/persons/person2.jpg",
      testi:
        "TrackED has made it easier for us to manage our student records. It is a great tool for any educational institution.",
      name: "Dr. Abebe Kebede",
      title: "Doctor at Addis Ababa University",
    },
    {
      image: "/assets/persons/person3.jpg",
      testi:
        "TrackED has made it easier for us to manage our student records.It is a great tool for any educational institution.",
      name: "Dr. Helen Tadesse",
      title: "Chamistry Teacher at Addis Ababa.",
    },
  ];
  return (
    <>
      <header
        className="sticky top-0 w-full  bg-white shadow-md "
        style={{
          zIndex: 1000,
        }}
      >
        <LandingHeading />
      </header>
      <Headlines
        title="Revolutionize Credential Management "
        description="Simplify credential management and verification for educational institutions, employers, and individuals with secure, user-friendly and advanced document handling features."
        buttonTextPrimary="Join us now"
        buttonTextSecondary="Learn more"
        imageUrl="/assets/maninoffice.jpg"
        URL1="/auth/Signup"
        URL2="/#feature"
      />
      <section id="feature" className="sm:mt-5 sm:mb-10">
        <div className="container mx-auto p-4 ">
          <div className="text-center mb-[80px]">
            <h2 className="text-yellow-500 uppercase font-semibold text-xs font-calibri">
              Our featured services
            </h2>
            <h3 className="text-4xl font-bold font-calibri ">Features</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-10">
            <div className="text-center p-6 pb-10 bg-white shadow-lg rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gray-100 rounded-full">
                  <Image
                    src="/assets/icons/secureStorage.png"
                    alt="User-Friendly Interfaces"
                    className="h-12 w-12"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">Digital Storage</h4>
              <p>Revolutionize Your File Organization with Digital Storage</p>
            </div>
            <div className="text-center p-6 bg-white shadow-lg rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gray-100 rounded-full">
                  <Image
                    src="/assets/icons/Verification.png"
                    alt="User-Friendly Interfaces"
                    className="h-12 w-12"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Document Verification
              </h4>
              <p>
                Seamlessly handle document verification from employers and
                institutions.
              </p>
              <button className="mt-4 px-4 py-2 border border-gray-400 rounded-lg">
                Learn more
              </button>
            </div>
            <div className="text-center pb-10 p-6 bg-white shadow-lg rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gray-100 rounded-full">
                  <Image
                    src="/assets/icons/userfrendly.png"
                    alt="User-Friendly Interfaces"
                    className="h-12 w-12"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">
                User-Friendly Interfaces
              </h4>
              <p>
                Tailored interfaces for institutions, employers, and
                individuals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="trust"
        className="bg-primeGray   flex flex-col items-center py-16 px-4 sm:px-8 lg:px-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-calibri ">
          Trusted by
        </h2>
        <p className="text-gray-500 text-center mb-10">
          Trusted by leading institutions, employers, and individuals.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center w-full max-w-4xl">
          {trustedBy.map((image, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={image}
                alt="Solitudir"
                width={150}
                height={150}
                className="h-auto w-auto"
              />
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-lg text-gray-600 cursor-pointer hover:text-gray-800">
          Read customer stories
        </p>
      </section>
      <section className="text-center mt-7">
        <div className="mb-4">
          <p className="mt-10 text-center text-sm font-semibold text-yellow-500 ">
            Our Users say
          </p>
        </div>
        <h2 className="text-3xl font-bold mb-6 text-center">Testimonials</h2>
        <Swip slides={slides} />
      </section>
      <section>
        <div
          id="price"
          className="flex flex-col items-center p-6 bg-background text-foreground"
        >
          <h1 className="text-4xl font-bold mb-2">Pricing</h1>
          <p className="text-muted-foreground  text-gray-400 font-medium mb-6">
            Affordable Plans Tailored to Your Needs
          </p>
          <div className="flex w-[160px] justify-between bg-Primarys rounded-md mb-8 ">
            <button className="px-4 py-2 rounded-md bg-white font-semibold border border-primary text-primary ">
              Monthly
            </button>
            <button className="px-4 py-2 bg-primary rounded-md  bg-Primarys text-white font-semibold ">
              Yearly
            </button>
          </div>
          <div className="flex flex-wrap space-y-6 md:space-y-0 md:space-x-6 justify-center items-center gap-4 ">
            <div className="bg-card p-6 rounded-lg bg-primeGray shadow-md sm:w-80 w-full">
              <h2 className="text-xl font-bold text-Primarys mb-2">Personal</h2>
              <p className="text-muted-foreground font-semibold text-gray-400 mb-4">
                Perfect for everyone
              </p>
              <div className="text-3xl font-bold mb-2">
                $3<span className="text-lg font-normal">/month</span>
              </div>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">
                    <FaRegCheckCircle />
                  </span>
                  Advanced Security
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">
                    <FaRegCheckCircle />
                  </span>
                  Secure Digital Storage
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">
                    <FaRegCheckCircle />
                  </span>
                  Unlimited Verification Requests
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">
                    <FaRegCheckCircle />
                  </span>
                  30-day free trial
                </li>
              </ul>
              <Link href="/auth/Signup">
                <button className="w-full py-2 border border-primary text-primary rounded-md bg-white">
                  Sign Up
                </button>
              </Link>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md  sm:w-80 w-full relative h-[400px]">
              <h2 className="text-xl font-bold text-Primarys mb-2">Premium</h2>
              <p className="text-muted-foreground mb-4 font-semibold text-gray-400">
                Perfect for Individuals
              </p>
              <div className="text-3xl font-bold mb-2">
                $5<span className="text-lg font-normal">/team/month</span>
              </div>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">
                    <FaRegCheckCircle />
                  </span>
                  Quick Verification
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">
                    <FaRegCheckCircle />
                  </span>
                  Job Application
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">
                    <FaRegCheckCircle />
                  </span>
                  No ADs
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">
                    <FaRegCheckCircle />
                  </span>
                  30-day free trial
                </li>
              </ul>
              <Link href="/auth/Signup">
                <button className="w-full bg-Primarys text-white py-2 border border-primary text-primary rounded-md mt-5">
                  Upgrade
                </button>
              </Link>
              <span className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-sm">
                Popular
              </span>
            </div>
            <div className="bg-card p-6 rounded-lg bg-primeGray shadow-md sm:w-80 w-full">
              <h2 className="text-xl font-bold text-Primarys mb-2">
                Premium Plus
              </h2>
              <p className="text-muted-foreground mb-4">
                Perfect for organizations
              </p>
              <div className="text-3xl font-bold mb-2">
                $15<span className="text-lg font-normal">/user/month</span>
              </div>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">
                    <FaRegCheckCircle />
                  </span>
                  Recruiting Packages
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">
                    <FaRegCheckCircle />
                  </span>
                  No ADs
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">
                    <FaRegCheckCircle />
                  </span>
                  No ADs
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">
                    <FaRegCheckCircle />
                  </span>
                  30-day free trial
                </li>
              </ul>
              <button className="w-full py-2 border bg-white border-primary text-primary rounded-md">
                <Link href="mailto:teklumoges482@gmail.com">
                  <div className="flex justify-center items-center gap-2">
                    {" "}
                    <FaRegEnvelope /> Contact Us
                  </div>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
