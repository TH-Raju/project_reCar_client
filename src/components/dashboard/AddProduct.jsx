import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddProduct = data => {
        // console.log(data.img[0]);
        const img = data.img[0];
        const formData = new FormData();
        formData.append('img', img);
        console.log(data);

        const url = `https://api.imgbb.com/1/upload${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData.data.url)
                if (imgData.success) {
                    // imgData.data.url
                    const product = {
                        name: data.name,
                        categorie: data.categorie,
                        location: data.location,
                        mobile: data.mobile,
                        originalPrice: data.originalPrice,
                        resalePrice: data.resalePrice,
                        yearOfUse: data.yearOfUse,
                        img: imgData.data.url
                    }
                    console.log(product)
                    //save product 

                    fetch('http://localhost:5000/categoriy', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            navigate('/')
                        })
                }

            })
    }
    const { data: categories } = useQuery({
        queryKey: ['categoriy'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoriyProduct');
            const data = await res.json();
            return data;
        }
    })



    return (
        <div className='md:w-5/6 mx-auto p-7'>
            <h2 className="text-4xl">Add Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" placeholder='Enter Your Name' {...register("sellerName", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.sellerName && <p className='text-red-500'>{errors.sellerName.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input type="text" placeholder='Enter Product Name' {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Select Categorie</span></label>
                    <select {...register('categorie')}
                        className="input input-bordered w-full max-w-xs">
                        <option defaultValue>Select a Categorie</option>
                        {
                            categories?.map(categorie =>
                                <option
                                    key={categorie._id}>
                                    {categorie.name}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" placeholder='Enter Your Location' {...register("location", {
                        required: "location is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Original Price</span></label>
                    <input type="text" placeholder='Enter Original Price' {...register("originalPrice", {
                        required: "Price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Re-sell Price</span></label>
                    <input type="text" placeholder='Enter Re-sell Price' {...register("resalePrice", {
                        required: "Price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.resalePrice && <p className='text-red-500'>{errors.resalePrice.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">How many year you use it?</span></label>
                    <input type="text" placeholder='Enter Uses years' {...register("yearOfUse", {
                        required: "year is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.yearOfUse && <p className='text-red-500'>{errors.yearOfUse.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Mobile</span></label>
                    <input type="text" placeholder='Enter Your Mobile Number' {...register("mobile", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.mobile && <p className='text-red-500'>{errors.mobile.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Image</span></label>
                    <input type="file" {...register("img", {
                        required: "Image is Required"
                    })} className="input w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>


                <div className=' text-center mt-8 md:col-span-2'>
                    <input className='btn btn-accent mt-4  md:w-96' value="Add Item" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;