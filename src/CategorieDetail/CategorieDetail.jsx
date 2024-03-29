import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../components/Shared/Loading";
import BookModal from "./BookModal";

const CategorieDetail = () => {
  const [categorieDetail, setCategorieDetail] = useState([]);
  const detail = useLoaderData();
  const { name, product } = detail;
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  return (
    <div className="lg:w-4/5 lg:mx-auto my-16 mx-3">
      <h3 className="text-4xl text-center font-bold ">
        {name} Categories Product
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mx-12 mb-28 mt-16">
        {product.map((categoriy, i) => (
          <div key={i} className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                src={categoriy.img}
                alt="electric"
                className="max-h-44 w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">{categoriy.name}</h2>
              <p className="">Seller Name: {categoriy.sellerName}</p>
              <p className="">Location: {categoriy.location}</p>
              <p className="">
                Original Price:{" "}
                <span className="font-bold">${categoriy.originalPrice}</span>
              </p>
              <p className="">
                Re-sell Price:{" "}
                <span className="font-bold">${categoriy.resalePrice}</span>
              </p>
              <div className="card-actions justify-end">
                <label
                  htmlFor="booking-modal"
                  onClick={() => setCategorieDetail(categoriy)}
                  className="btn btn-primary btn-sm"
                >
                  Book Now
                </label>

                {categorieDetail && (
                  <BookModal categorieDetail={categorieDetail}></BookModal>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorieDetail;
