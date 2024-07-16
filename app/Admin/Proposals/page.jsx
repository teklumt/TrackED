import ProfileCard from "@/components/Cards/ProfileCrds";
import Headline2 from "@/components/Reuseable/Headline2";

function page() {
  return (
    <section>
      <Headline2 headtext={"Proposals"} />
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
          <h1 className="text-3xl font-bold text-yellow-500">#Job-1245IT</h1>
          <div className="flex gap-2">
            <p className="font-bold">Job Title:</p>
            <p className="text-gray-400">React Developer</p>
          </div>
          <div className="flex gap-2 mb-4">
            <p className="font-bold">Proposals Submitted:</p>
            <p className="text-gray-400">50</p>
          </div>
          <div>
            <ProfileCard />
          </div>
        </div>
      </main>
    </section>
  );
}

export default page;
