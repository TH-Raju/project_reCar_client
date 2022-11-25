import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const MyOreders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const { data: buyings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
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

    return (
        <div>
            <h3 className="text-4xl mb-6">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Seller Name</th>
                            <th>Seller Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyings?.map((buying, i) => <tr key={buying._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{buying.buyerName}</td>
                                <td>{buying.buying}</td>
                                <td>{buying.price}</td>
                                <td>{buying.buyerEmail}</td>
                                <td>{buying.sellerName}</td>
                                <td>{buying.userNum}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOreders;