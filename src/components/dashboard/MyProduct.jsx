import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigation } from 'react-router-dom';
import Loading from '../Shared/Loading';


const MyProduct = () => {


    const { data: product = [], refetch } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch('https://resale-handing-server-side.vercel.app/product')
            const data = await res.json();
            return data
        }
    })

    const handleDelete = product => {
        const agree = window.confirm(`Are you sure you want to this Item`)
        if (agree) {
            fetch(`https://resale-handing-server-side.vercel.app/product/${product}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                })
        }
    }


    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }

    return (
        <div className='lg:w-4/5 lg:mx-auto my-16'>
            <h3 className="text-4xl text-center font-bold "> Product</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mx-12 mb-28 mt-16'>
                {
                    product.map((categoriy, i) => <div key={i} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={categoriy.img} alt="electric" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">{categoriy.name}</h2>
                            <p className="card-title">Seller Name: {categoriy.sellerName}</p>
                            <p className="card-title">Location: {categoriy.location}</p>
                            <p className="card-title">Original Price: ${categoriy.originalPrice}</p>
                            <p className="card-title">Re-sell Price: ${categoriy.resalePrice}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleDelete(categoriy._id)} className='btn btn-warning btn-sm'>Delete</button>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyProduct;

