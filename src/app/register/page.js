"use client";

import { useState } from "react";
import MultiSelectDropdown from "../components/auth/MultiSelectDropdown";
import Footer from "../components/home/footer";

import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shadcomponents/ui/select";
import { Input } from "@/shadcomponents/ui/input";
import { SendRegister } from "../actions/register";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    major: "",
    college: "",
    year: "",
    interests: [],
  });

  const handleChange = (field, value) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      return updated;
    });
  };

  const handleRegistration = async (
    email,
    password,
    firstName,
    lastName,
    year,
    major,
    college,
    interests
  ) => {
    const response = await SendRegister(
      email,
      password,
      firstName,
      lastName,
      year,
      major,
      college,
      interests
    );
    if (response) {
      window.location.href = response;
    } else {
      window.location.href = "https://indie-b-sides-frontend.vercel.app/login"
    }
  };

  return (
    <>
      <div className="bg-gray-100 font-lexend">
        <div className="p-4 space-y-4">
          <h1 className="font-bold text-3xl">Create Profile</h1>
          <div>
            <h2 className="text-sm text-gray-400">
              Your Responses are not Automatically Saved
            </h2>
            <p className="text-sm text-gray-400">
              Disclaimer: your answers will not affect your admissions in any
              way.
            </p>
          </div>
        </div>

        <div className="flex flex-col p-4 space-y-4">
          <h1 className="text-2xl font-bold">Personal Data</h1>
          <div>
            <label className="text-xs">First Name</label>
            <Input
              className="rounded-xs bg-white"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
            <label className="text-xs">Last Name</label>
            <Input
              className="rounded-xs bg-white"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
            <label className="text-xs">Email</label>
            <Input
              type="email"
              className="rounded-xs bg-white"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <label className="text-xs">Password</label>
            <Input
              type="password"
              className="rounded-xs bg-white"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col p-4 space-y-4">
          <h1 className="text-2xl font-bold">School Data</h1>

          <div className="flex flex-col">
            <label className="text-xs">Major</label>
            <Select onValueChange={(val) => handleChange("major", val)}>
              <SelectTrigger className="bg-white rounded-xs w-full">
                <SelectValue placeholder="Life Science, Engineering, Economics..." />
              </SelectTrigger>
              <SelectContent className="font-lexend">
                <SelectGroup>
                  <SelectLabel>Majors</SelectLabel>
                  <SelectItem value="kinesiology">Kinesiology</SelectItem>
                  <SelectItem value="computer_science">
                    Computer Science
                  </SelectItem>
                  <SelectItem value="psychology">Psychology</SelectItem>
                  <SelectItem value="economics">Economics</SelectItem>
                  <SelectItem value="life_sciences">Life Sciences</SelectItem>
                  <SelectItem value="engineering">
                    Engineering Science
                  </SelectItem>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="political_science">
                    Political Science
                  </SelectItem>
                  <SelectItem value="rotman_commerce">
                    Rotman Commerce
                  </SelectItem>
                  <SelectItem value="architecture">Architecture</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col">
            <label className="text-xs">College</label>
            <Select onValueChange={(val) => handleChange("college", val)}>
              <SelectTrigger className="bg-white rounded-xs w-full">
                <SelectValue placeholder="New College, Innis, University..." />
              </SelectTrigger>
              <SelectContent className="font-lexend">
                <SelectGroup>
                  <SelectLabel>College / Campus</SelectLabel>
                  <SelectItem value="UTM">UTM</SelectItem>
                  <SelectItem value="UTSC">UTSC</SelectItem>
                  <SelectItem value="Trinity College">
                    Trinity College
                  </SelectItem>
                  <SelectItem value="Victoria College">
                    Victoria College
                  </SelectItem>
                  <SelectItem value="Innis College">Innis College</SelectItem>
                  <SelectItem value="New College">New College</SelectItem>
                  <SelectItem value="St. Mikes College">
                    St. Michael’s College
                  </SelectItem>
                  <SelectItem value="Woodsworth College">
                    Woodsworth College
                  </SelectItem>
                  <SelectItem value="University College">
                    University College
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col">
            <label className="text-xs">Year</label>
            <Select onValueChange={(val) => handleChange("year", val)}>
              <SelectTrigger className="bg-white rounded-xs w-full">
                <SelectValue placeholder="First, Second, Third..." />
              </SelectTrigger>
              <SelectContent className="font-lexend">
                <SelectGroup>
                  <SelectLabel>Year</SelectLabel>
                  <SelectItem value="First">First Year</SelectItem>
                  <SelectItem value="Second">Second Year</SelectItem>
                  <SelectItem value="Third">Third Year</SelectItem>
                  <SelectItem value="Fourth">Fourth Year</SelectItem>
                  <SelectItem value="COOP">PEY / COOP Term</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col w-full">
            <label className="text-xs">Interests?</label>
            <MultiSelectDropdown
              value={formData.interests}
              onChange={(val) => handleChange("interests", val)}
            />
          </div>
        </div>

        <div className="p-4 space-y-4">
          <p className="text-xs text-gray-500">
            By Clicking Register You Agree To The{" "}
            <span className="text-blue-400 underline">Terms of Service</span>{" "}
            and <span className="text-blue-400 underline">Privacy Policy</span>.
            You also acknowledge that you filled this form to the best of your
            knowledge.
          </p>

          <button
            onClick={() =>
              handleRegistration(
                formData.email,
                formData.password,
                formData.firstName,
                formData.lastName,
                formData.year,
                formData.major,
                formData.college,
                formData.interests
              )
            }
            className=" flex items-center gap-2 text-xs sm:text-sm rounded-xs px-4 py-2 bg-white cursor-pointer text-[#004875] border-2 border-[#004875] hover:text-white hover:bg-[#004875] transition"
          >
            <Image
              src="/spotify.svg"
              width={30}
              height={30}
              alt="Spotify Logo"
            />
            <span className="text-sm">
              Connect to Spotify + Register
            </span>
          </button>
        </div>

        <Footer />
      </div>
    </>
  );
}
