import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    const img = data.img[0];
    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const product = {
            name: data.name,
            sellerName: data.sellerName,
            categorie: data.categorie,
            location: data.location,
            mobile: data.mobile,
            originalPrice: data.originalPrice,
            resalePrice: data.resalePrice,
            yearOfUse: data.yearOfUse,
            img: imgData.data.url,
          };

          //save product

          fetch(
            "https://resale-handing-server-side-770erufms-th-raju.vercel.app/categoriy",
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(product),
            }
          )
            .then((res) => res.json())
            .then((result) => {
              toast.success("Product Added");
              navigate("/");
            });

          fetch(
            "https://resale-handing-server-side-770erufms-th-raju.vercel.app/product",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(product),
            }
          )
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
            });
        }
      });
  };

  const { data: categories } = useQuery({
    queryKey: ["categoriy"],
    queryFn: async () => {
      const res = await fetch(
        "https://resale-handing-server-side-770erufms-th-raju.vercel.app/categoriyProduct"
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="w-5/6 mx-auto pt-3">
      <h2 className="text-4xl font-bold mb-7">Add Product</h2>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 "
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-xl font-bold">
              Select Categorie
            </span>
          </label>
          <select
            {...register("categorie")}
            className="input input-bordered w-full max-w-xs"
          >
            <option defaultValue>Select a Categorie</option>
            {categories?.map((categorie) => (
              <option
                className="font-bold text-lg"
                key={categorie._id}
                value={categorie._id}
              >
                {categorie.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-xl font-bold">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            {...register("sellerName", {
              required: "Name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.sellerName && (
            <p className="text-red-500">{errors.sellerName.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-xl font-bold">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Product Name"
            {...register("name", {
              required: "Name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-xl font-bold">Location</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Location"
            {...register("location", {
              required: "location is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-xl font-bold">Original Price</span>
          </label>
          <input
            type="text"
            placeholder="Enter Original Price"
            {...register("originalPrice", {
              required: "Price is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.originalPrice && (
            <p className="text-red-500">{errors.originalPrice.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-xl font-bold">Re-sell Price</span>
          </label>
          <input
            type="text"
            placeholder="Enter Re-sell Price"
            {...register("resalePrice", {
              required: "Price is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.resalePrice && (
            <p className="text-red-500">{errors.resalePrice.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-xl font-bold">
              How many year you use it?
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter Uses years"
            {...register("yearOfUse", {
              required: "year is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.yearOfUse && (
            <p className="text-red-500">{errors.yearOfUse.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-xl font-bold">Mobile</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Mobile Number"
            {...register("mobile", {
              required: "Name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.mobile && (
            <p className="text-red-500">{errors.mobile.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-xl font-bold">
              Upload Product Image
            </span>
          </label>
          <input
            type="file"
            {...register("img", {
              required: "Image is Required",
            })}
            className="input w-full max-w-xs border border-black pt-2"
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>

        <div className=" text-center mt-4 md:col-span-2">
          <input
            className="btn btn-accent mt-4 font-bold md:w-96"
            value="Add Item"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
