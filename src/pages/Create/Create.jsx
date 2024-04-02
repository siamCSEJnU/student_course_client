import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backIcon from "../../assets/icons/back.png";
import Swal from "sweetalert2";

const Create = () => {
  const [name, setName] = useState("");
  const [classId, setClassId] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/create", { name, classId, dob, gender })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Student Info Created Successfuly!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      <p className="text-4xl font-semibold text-sky-700 text-center mt-16 mb-8">
        Add New Student Info
      </p>
      <div className="w-1/3 mx-auto bg-sky-200 p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Enter name"
              className="border rounded-md px-3 py-2 w-full outline-none"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="class"
              className="block text-gray-700 font-bold mb-2"
            >
              Class
            </label>
            <select
              id="class"
              name="class"
              value={classId}
              onChange={(e) => setClassId(e.target.value)}
              className="border rounded-md px-3 py-2 w-full"
              required
            >
              <option value="">Select Class</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
              <option value="6">Six</option>
              <option value="7">Seven</option>
              <option value="8">Eight</option>
              <option value="9">Nine</option>
              <option value="10">Ten</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="border rounded-md px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Gender</label>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="form-radio"
                  required
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="form-radio"
                  required
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
      <p className="pt-4 text-center">
        <Link to={"/"}>
          {" "}
          <button className="btn py-1 px-2  rounded-md hover:bg-slate-800 hover:text-slate-200 hover:border-slate-800  text-slate-200 bg-blue-700 border-blue-800">
            <div className="flex gap-2 items-center">
              {" "}
              <p>
                <img src={backIcon} className="w-4" alt="" />
              </p>{" "}
              <p className="text-slate-100">Go Back</p>
            </div>
          </button>
        </Link>
      </p>
    </div>
  );
};

export default Create;
