import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { Id } = useParams();
  return (
    <div>
      <p className="text-4xl">This is details page</p>
    </div>
  );
};

export default Details;
