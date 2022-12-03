import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Loading from '../Shared/Loading';

const MyOreders = () => {
    const { user } = useContext(AuthContext);
    const url = `https://resale-handing-server-side.vercel.app/bookings?email=${user.email}`;
    const { data: buyings = [], isLoading, refetch } = useQuery({
        queryKey: ['buyings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;

        }

    })

    const handleDelete = buyings => {
        const agree = window.confirm(`Are you sure you want to this Item`)
        if (agree) {
            fetch(`https://resale-handing-server-side.vercel.app/bookings/${buyings}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                    console.log(data)
                })
        }
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className="text-4xl mb-6">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Seller Number</th>
                            <th>Delete Order</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buyings ?
                            buyings?.map((buying, i) => <tr key={buying._id} className="hover">
                                <th>{i + 1}</th>
                                <th>
                                    <div className="avatar online">
                                        <div className="w-14 rounded-full">
                                            <img src={buying.img} alt='buyer' />
                                        </div>
                                    </div>
                                </th>
                                <td>{buying.sellerName}</td>
                                <td>{buying.buying}</td>
                                <td>{buying.price}</td>
                                <td>{buying.userNum}</td>
                                <td><button onClick={() => handleDelete(buying._id)} className='btn btn-warning btn-sm'>Delete</button></td>
                                <td>
                                    {
                                        buying.price && !buying.paid &&
                                        <Link to={`/dashboard/payment/${buying._id}`}><button className='btn btn-success btn-sm'>Pay</button></Link>
                                    }
                                    {
                                        buying.price && buying.paid &&
                                        <span className='text-success'>paid</span>
                                    }
                                </td>
                            </tr>)
                            : null
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOreders;