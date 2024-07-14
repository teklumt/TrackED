import Headlines from "@/components/Reuseable/Headlines";
import Swip from "@/components/Reuseable/Swip";
import SwipCards from "@/components/Reuseable/SwipCards";

function page() {
  const slides = [
    {
      image: "/assets/Job/campany/as2sv.jpeg",
      name: "A2SV",
      testi: "20 Jobs | Addis Ababa ",
    },
    {
      image: "/assets/Job/campany/buna.png",
      name: "Buna International Bank",
      testi: "10 Jobs | Addis Ababa ",
    },
    {
      image: "/assets/Job/campany/comer.jpeg",
      name: "CBE",
      testi: "20 Jobs | Addis Ababa ",
    },
    {
      image: "/assets/Job/campany/tele.jpeg",
      name: "Telebirr",
      testi: "20 Jobs | Addis Ababa ",
    },
  ];
  return (
    <section className="text-center ">
      <div className="bg-primeGray lg:mt-[-20px]">
        <Headlines
          title="1780+ Jobs For You "
          description="Discover Over 1780 Job Opportunities Tailored to Your Skills and Aspirations. Join Thousands of Successful Candidates Who Found Their Dream Jobs with Us!"
          buttonTextPrimary="Explore now"
          buttonTextSecondary="Stay Updated"
          imageUrl="/assets/Job/Werh.png"
          URL1="/SignUp"
          URL2="#update"
        />
      </div>
      <div className="text-center mt-7">
        <div className="mb-4">
          <p className="mt-10 text-center text-sm font-semibold text-yellow-500 ">
            Our Users say
          </p>
        </div>
        <h2 className="text-3xl font-bold mb-6 text-center">Testimonials</h2>
        <SwipCards slides={slides} />
      </div>
    </section>
  );
}

export default page;
