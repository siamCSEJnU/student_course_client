import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import backIcon from "../../assets/icons/back.png";
import axios from "axios";

const Details = () => {
  const { Id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/students/${Id}`)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [Id]);

  const getClassLabel = (classId) => {
    switch (classId) {
      case 1:
        return "One";
      case 2:
        return "Two";
      case 3:
        return "Three";
      case 4:
        return "Four";
      case 5:
        return "Five";
      case 6:
        return "Six";
      case 7:
        return "Seven";
      case 8:
        return "Eight";
      case 9:
        return "Nine";
      case 10:
        return "Ten";
      default:
        return "Unknown";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div>
      <p className="text-4xl text-center mt-20 mb-10 font-semibold text-sky-700">
        Student Details
      </p>
      {student && (
        <div className="w-1/3 mx-auto bg-blue-200  p-10 text-xl text-slate-800">
          <p className=" pb-1">
            <span className="font-bold">Name:</span> {student.Name}
          </p>
          <p className=" pb-1">
            <span className="font-bold">Class: </span>
            {getClassLabel(student.ClassId)}
          </p>
          <p className=" pb-1">
            <span className="font-bold">DOB: </span>
            {formatDate(student.DOB)}
          </p>
          <p className=" pb-1">
            <span className="font-bold">Gender:</span>{" "}
            {student.Gender === 1 ? "Male" : "Female"}
          </p>
          <p className=" pb-1">
            <span className="font-bold">Created Date:</span>{" "}
            {student.CreatedDate ? formatDate(student.CreatedDate) : "Unknown"}
          </p>
          <p className=" pb-1">
            <span className="font-bold">Last Modification Date:</span>{" "}
            {student.ModificationDate
              ? formatDate(student.ModificationDate)
              : "Unknown"}
          </p>
        </div>
      )}
      <p className="pt-4 text-center">
        <Link to={"/"}>
          {" "}
          <button className="btn py-1 px-2  rounded-md hover:bg-slate-800 hover:text-slate-200 hover:border-slate-800  text-slate-200 bg-blue-700 border-blue-800">
            <div className="flex gap-2 items-center">
              {" "}
              <p>
                <img src={backIcon} className="w-4" alt="" />
              </p>{" "}
              <p>Go Back</p>
            </div>
          </button>
        </Link>
      </p>
    </div>
  );
};

export default Details;
