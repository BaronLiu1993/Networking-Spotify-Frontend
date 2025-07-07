"use client";

import { useState } from "react";
import MultiSelectDropdown from "../components/auth/MultiSelectDropdown";
import Navbar from "../components/home/navbar";
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
      console.log("Form Updated:", updated);
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
    console.log(response);
    window.location.href = response;
  };

  return (
    <>
      <div className="bg-gray-100 font-lexend">
        <Navbar />
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
                  <SelectItem value="utm">UTM</SelectItem>
                  <SelectItem value="utsc">UTSC</SelectItem>
                  <SelectItem value="trinity">Trinity College</SelectItem>
                  <SelectItem value="victoria">Victoria College</SelectItem>
                  <SelectItem value="innis">Innis College</SelectItem>
                  <SelectItem value="new">New College</SelectItem>
                  <SelectItem value="st_mikes">
                    St. Michael’s College
                  </SelectItem>
                  <SelectItem value="woods">Woodsworth College</SelectItem>
                  <SelectItem value="uc">University College</SelectItem>
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
                  <SelectItem value="first">First Year</SelectItem>
                  <SelectItem value="second">Second Year</SelectItem>
                  <SelectItem value="third">Third Year</SelectItem>
                  <SelectItem value="fourth">Fourth Year</SelectItem>
                  <SelectItem value="coop">PEY / COOP Term</SelectItem>
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
            className="p-2 w-fit bg-black flex text-white rounded-xs items-center gap-2"
          >
            <Image
              src="/spotify.svg"
              width={30}
              height={30}
              alt="Spotify Logo"
            />
            <span className="text-[#FFFFFF] text-sm">
              Connect to Spotify + Register
            </span>
          </button>
        </div>

        <Footer />
      </div>
    </>
  );
}
