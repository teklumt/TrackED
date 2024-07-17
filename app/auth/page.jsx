"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess("Login successful");
        localStorage.setItem("Email", data.email);
        data.type === "Personal" &&
          data.email === "a@gmail.com" &&
          router.push("/Admin");

        data.type === "Personal" && router.push("/Personal");
        data.type === "Institution" && router.push("/Institution");
        data.type === "Employer" && router.push("/Employer");
      } else {
        setError(result.message);
      }
    } catch (error) {
      console.error("Failed to login", error);
      setError("Failed to login");
    }
  };

  return (
    <section className="flex justify-around">
      <div
        className="lg:w-[500px] lg:flex hidden h-[500px] ml-16"
        style={{
          backgroundImage: `url('/assets/storySet/log.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className=" flex justify-center items-center">
        <form
          className="sm:w-[500px] w-full p-2 sm:p-6 rounded-md shadow-md border space-y-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <h1 className="font-bold text-2xl ">Welcome back 👋</h1>
            <p className="text-gray-500 font-semibold font">
              Log in to your account
            </p>
          </div>
          <div className="mb-4">
            <label className="block font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="teklumoges482@gmail.com"
              className="mt-1 p-2 block w-full h-[40px] text-sm bg-primeGray rounded-md"
              {...register("email", { required: true })}
            />
          </div>

          <div className="flex gap-[8px] w-full">
            <div className="mb-4">
              <label className="block font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                placeholder="***********"
                className="mt-1 p-2 block w-[190px] sm:w-[220px] h-[40px] text-sm bg-primeGray rounded-md"
                {...register("password", { required: true })}
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">Type</label>
              <select
                name="type"
                id="type"
                autoComplete="current-password"
                required
                className="mt-1 p-2 block w-[190px] sm:w-[220px] h-[40px] text-sm bg-primeGray rounded-md"
                {...register("type", { required: true })}
              >
                <option value="Personal">Personal</option>
                <option value="Institution">Institution</option>
                <option value="Employer">Employer</option>
              </select>
            </div>
          </div>
          <div className="mb-4 space-y-4">
            <button
              type="submit"
              className="w-full bg-Primarys text-white p-2 rounded-md"
            >
              Sign in
            </button>
            <div className="text-center font-semibold">
              Do not have an account?
              <Link
                href="/auth/Signup"
                className="text-sm text-yellow-500 ml-2 font-bold"
              >
                Sign Up
              </Link>
            </div>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
        </form>
      </div>
    </section>
  );
}
