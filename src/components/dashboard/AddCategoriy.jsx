import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddCategoriy = () => {
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddCategoriy = (data) => {
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
          const categoriy = {
            name: data.name,
            detail: data.detail,
            img: imgData.data.url,
            product: [],
          };

          //save categoriy

          fetch(
            "https://resale-handing-server-side-770erufms-th-raju.vercel.app/categoriy",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(categoriy),
            }
          )
            .then((res) => res.json())
            .then((result) => {
              toast.success("Categoriy Added");
              //   console.log(result);
              navigate("/products");
            });
        }
      });
  };

  return (
    <div className="w-5/6 mx-auto p-7">
      <h2 className="text-3xl md:text-5xl font-bold mb-10">
        Add New Categoriy
      </h2>
      <form
        onSubmit={handleSubmit(handleAddCategoriy)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-xl font-bold">Categoriy Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Categoriy Name"
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
            <span className="label-text text-xl font-bold">
              Categoriy Details
            </span>
          </label>
          <textarea
            type="text"
            placeholder="Write Details about this Categoriy"
            {...register("detail", {
              required: "categoriy detail is Required",
            })}
            className="input input-bordered w-full max-w-lg"
          />
          {errors.detail && (
            <p className="text-red-500">{errors.detail.message}</p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text text-xl font-bold">
              Upload Categoriy Image
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

        <div className=" text-center mt-8 md:col-span-2">
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

export default AddCategoriy;
