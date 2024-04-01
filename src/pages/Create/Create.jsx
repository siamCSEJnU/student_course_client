import React from "react";

const Create = () => {
  return (
    <div>
      <p className="text-4xl font-semibold text-sky-700 text-center mt-16 mb-8">
        Add New Student Info
      </p>
      <div className="w-1/3 mx-auto bg-sky-200 p-4">
        <form>
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
              placeholder="Enter name"
              className="border rounded-md px-3 py-2 w-full outline-none"
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
              className="border rounded-md px-3 py-2 w-full"
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
              className="border rounded-md px-3 py-2 w-full outline-none"
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
                  className="form-radio"
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="form-radio"
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
    </div>
  );
};

export default Create;
