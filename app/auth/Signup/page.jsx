"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Signup() {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const router = useRouter();

  const handleSignUp = async (data) => {
    const formData = new FormData();
    formData.append("fname", data.fname);
    formData.append("lname", data.lname);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("ID", data.ID);
    formData.append("type", data.type);
    formData.append("photo", data.photo[0]);
    formData.append("subscrbition", "free");

    try {
      const response = await fetch("/api/auth/create", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess("Account created successfully");
        reset();
        router.push("/auth");
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError("Failed to create Your Acount");
    }
  };

  return (
    <div className="mt-10">
      <div className="flex justify-center items-center gap-6">
        <div>
          <h1 className="text-[32px] text-center mb-5 font-bold">
            Create an account
          </h1>
          {error && <p className=" text-center text-red-500">{error}</p>}
          {success && <p className="text-center  text-green-500">{success}</p>}
          <form
            className="flex flex-col gap-4 mb-16"
            onSubmit={handleSubmit(handleSignUp)}
          >
            <div className="flex gap-[20px] flex-col sm:flex-row">
              <div>
                <p className="font-bold text-[#424856] mb-[0.5px]">
                  First name
                </p>
                <div>
                  <input
                    type="text"
                    name="fname"
                    placeholder="Teklu"
                    className="w-full sm:w-[240px] h-[40px] bg-primeGray p-2 rounded-md"
                    {...register("fname", { required: true })}
                  />
                </div>
              </div>
              <div>
                <p className="font-bold text-[#424856] mb-[0.5px]">
                  Last name *{" "}
                </p>
                <div>
                  <input
                    type="text"
                    name="lname"
                    placeholder="Moges"
                    className="w-full sm:w-[240px] h-[40px] bg-primeGray p-2 rounded-md"
                    {...register("lname")}
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold text-[#424856] mb-[0.5px]">Email</p>
              <div>
                <input
                  type="email"
                  placeholder="teklumoges482@gmail.com"
                  name="email"
                  className="w-full sm:w-[500px] h-[40px] text-sm bg-primeGray p-2 rounded-md"
                  {...register("email", { required: true })}
                />
              </div>
            </div>
            <div>
              <p className="font-bold text-[#424856] mb-[0.5px]">Password</p>
              <div>
                <input
                  type="password"
                  placeholder="***********"
                  name="password"
                  className="w-full sm:w-[500px] h-[40px] bg-primeGray p-2 rounded-md"
                  {...register("password", { required: true })}
                />
              </div>
            </div>
            <div>
              <p className="font-bold text-[#424856] mb-[0.5px]">
                Confirm password
              </p>
              <div>
                <input
                  type="password"
                  placeholder="***********"
                  name="confirmPassword"
                  className="w-full sm:w-[500px] h-[40px] bg-primeGray p-2 rounded-md"
                  {...register("confirmPassword", { required: true })}
                />
              </div>
            </div>
            <div className="flex gap-[20px] flex-col sm:flex-row">
              <div>
                <p className="font-bold text-[#424856] mb-[0.5px]">ID</p>
                <div>
                  <input
                    type="text"
                    name="ID"
                    placeholder="Residential / Institutional ID"
                    className="w-full sm:w-[240px] h-[40px] bg-primeGray p-2 rounded-md"
                    {...register("ID", { required: true })}
                  />
                </div>
              </div>
              <div>
                <p className="font-bold text-[#424856] mb-[0.5px]">Go As</p>
                <div>
                  <select
                    type="text"
                    name="type"
                    className="w-full sm:w-[240px] h-[40px] bg-primeGray p-2 rounded-md"
                    {...register("type", { required: true })}
                  >
                    <option value="Personal">Personal</option>
                    <option value="Institution">Institution</option>
                    <option value="Employer">Employer</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold text-[#424856] mb-[0.5px]">
                Upload Photo
              </p>
              <div>
                <input
                  type="file"
                  name="photo"
                  className="w-full sm:w-[500px] h-[40px] bg-primeGray p-2 rounded-md"
                  {...register("photo", { required: true })}
                />
              </div>
            </div>
            <div className="flex text-sm text-semibold">
              <input type="checkbox" className="mr-2 text-yellow-500" /> By
              signing up, I agree with the{" "}
              <span className="font-semibold cursor-pointer text-yellow-500">
                Terms of Use & Privacy Policy.
              </span>
            </div>
            <div>
              <button className="bg-Primarys text-white w-full sm:w-[500px] h-[40px] font-bold rounded-md">
                Sign Up
              </button>
            </div>
            <div className="mt-[-10px] text-center">
              <p className="font-bold text-[#424856] mb-[0.5px]">
                Have an account?{" "}
                <Link href="/auth">
                  <span className="text-yellow-500 font-bold">Log in</span>
                </Link>
              </p>
            </div>
          </form>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
        </div>
        <Image
          src="/assets/storySet/sign.png"
          alt="ads"
          width={450}
          height={200}
          className="rounded-md ml-5 hidden lg:block"
        />
      </div>
    </div>
  );
}

export default Signup;
