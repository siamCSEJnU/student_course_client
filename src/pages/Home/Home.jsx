import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="px-52">
        <p className="text-center text-4xl my-12">
          Dhaka Regency Hotel & Resort
        </p>
        <Link to="/create">
          <button>Add New Student Info</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
