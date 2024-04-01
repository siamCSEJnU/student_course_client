import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/deleteIcon.png";
import detailsIcon from "../../assets/icons/detailsIcon.png";
import editIcon from "../../assets/icons/editIcon.png";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/students").then((res) => {
      const formattedData = res.data.map((d) => ({
        ...d,
        DOB: formatDate(d.DOB),
      }));
      setData(formattedData);
      console.log(formattedData);
    });
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div>
      <div className=" w-2/5 mx-auto">
        <p className="text-center text-4xl my-12 font-semibold text-sky-600">
          Dhaka Regency Hotel & Resort
        </p>
        <p className="pb-5">
          <Link to="/create">
            <button className="btn py-1 px-2 font-semibold rounded-md hover:bg-lime-600 hover:text-slate-800 hover:border-lime-600  text-slate-200 bg-slate-800 border-slate-800">
              Add New Student Info
            </button>
          </Link>
        </p>

        <table className="table-auto w-full p-3">
          <thead>
            <tr className="bg-slate-400">
              <th className="border border-slate-200 p-2">Name</th>
              <th className="border border-slate-200 p-2">Class</th>
              <th className="border border-slate-200 p-2">DOB</th>
              <th className="border border-slate-200 p-2">Gender</th>
              <th className="border border-slate-200 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((d, i) => (
              <tr key={i} className="bg-orange-200 ">
                <td className="p-2 border border-slate-200">{d.StudentName}</td>
                <td className="text-center border border-slate-200 p-2">
                  {d.ClassName}
                </td>
                <td className="text-center border border-slate-200 p-2">
                  {d.DOB}
                </td>
                <td className="text-center border border-slate-200 p-2">
                  {d.Gender == 1 ? "Male" : "Female"}
                </td>
                <td className="flex justify-center gap-2 border border-slate-200 p-2">
                  <div>
                    {" "}
                    <img src={detailsIcon} alt="Details" className="w-8" />{" "}
                  </div>
                  <div>
                    <img src={editIcon} alt="Edit" className="w-8" />
                  </div>{" "}
                  <div>
                    <img src={deleteIcon} alt="Delete" className="w-8" />{" "}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
