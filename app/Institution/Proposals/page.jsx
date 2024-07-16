import ProfileCard from "@/components/Cards/ProfileCrds";
import Headline2 from "@/components/Reuseable/Headline2";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { RiDeleteBin2Line } from "react-icons/ri";

const cards = [
  {
    image: "/assets/persons/person1.jpg",
    email: "teklu@gmail.com",
    phone: "0900423958",
    portfolio: "https://www.linkedin.com/in/teklu-moges",
  },
  {
    image: "/assets/persons/person2.jpg",
    email: "name@gmail.com",
    phone: "0900423958",
    portfolio: "https://www.linkedin.com/in/teklu-moges",
  },
  {
    image: "/assets/persons/person1.jpg",
    email: "teklu@gmail.com",
    phone: "0900423958",
    portfolio: "https://www.linkedin.com/in/teklu-moges",
  },
  {
    image: "/assets/persons/person2.jpg",
    email: "name@gmail.com",
    phone: "0900423958",
    portfolio: "https://www.linkedin.com/in/teklu-moges",
  },
  {
    image: "/assets/persons/person3.jpg",
    email: "man@gmail",
    phone: "0900423958",
    portfolio: "https://www.linkedin.com/in/teklu-moges",
  },
  {
    image: "/assets/persons/person2.jpg",
    email: "name@gmail.com",
    phone: "0900423958",
    portfolio: "https://www.linkedin.com/in/teklu-moges",
  },
  {
    image: "/assets/persons/person2.jpg",
    email: "name@gmail.com",
    phone: "0900423958",
    portfolio: "https://www.linkedin.com/in/teklu-moges",
  },
  {
    image: "/assets/persons/person3.jpg",
    email: "man@gmail",
    phone: "0900423958",
    portfolio: "https://www.linkedin.com/in/teklu-moges",
  },
];

function page() {
  return (
    <section>
      <div className="shadow-md">
        <Headline2 headtext={"Proposals"} />
      </div>
      <main className="max-w-[1195px] mx-auto p-3">
        <div>
          <input
            type="text"
            placeholder="🔍  Search by job title"
            name="ownerName"
            className="w-full sm:w-[400px] h-[50px] bg-primeGray p-2 rounded-md"
          />
        </div>
        <div className="mt-5">
          <hr />
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-yellow-500">#Job-1245IT</h1>
            <RiDeleteBin2Line
              size={25}
              className="text-red-500 cursor-pointer"
            />
          </div>
          <div className="flex gap-2">
            <p className="font-bold">Job Title:</p>
            <p className="text-gray-400">React Developer</p>
          </div>
          <div className="flex gap-2 mb-4">
            <p className="font-bold">Proposals Submitted:</p>
            <p className="text-gray-400">50</p>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-8">
            {cards.map((card, index) => (
              <ProfileCard
                image={card.image}
                email={card.email}
                phone={card.phone}
                portfolio={card.portfolio}
                key={index}
              />
            ))}
          </div>
          <div className="flex justify-end mt-10">
            <div className="flex gap-5">
              <div className="flex gap-3">
                <GrFormPrevious
                  className="bg-primeGray rounded-[10px] cursor-pointer"
                  size={36}
                />
                <GrFormNext
                  className="bg-primeGray rounded-[10px]     cursor-pointer"
                  size={36}
                />
              </div>
            </div>
          </div>
          <hr className="mt-5" />
        </div>

        <div className="mt-16 justify-center items-center flex">
          <button className="bg-Primarys w-[150px] h-[36px] text-primeGray rounded-md">
            load more
          </button>
        </div>
      </main>
    </section>
  );
}

export default page;
