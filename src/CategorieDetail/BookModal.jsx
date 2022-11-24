import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../components/context/AuthProvider';

const BookModal = ({ categorieDetail }) => {
    const { user } = useContext(AuthContext);
    const { name, sellerName, location, originalPrice, resalePrice, yearOfUse } = categorieDetail;
    const userNum = '+880 18590 53543'

    const handleBooing = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const buyerName = form.name.value;
        const buyerEmail = form.email.value;



        const booking = {
            buying: name,
            buyerName: buyerName,
            buyerEmail: buyerEmail,
            price: price,
            sellerName: sellerName,
            userNum: userNum,
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert("Booking Confirmed");
                }
            })



    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold">{name}</h3>
                    <form onSubmit={handleBooing} className='grid grid-cols-1 gap-4 mt-10'>
                        <input name='sellerName' type="sellerName" disabled value={"Seller Name: " + sellerName} className="input input-bordered w-full font-bold" />
                        <input name='userNum' type="userNum" disabled value={"Phone Number: " + userNum} className="input input-bordered w-full font-bold" />
                        <input type="text" value={"Meeting Location: " + location + " or virtually"} className="input input-bordered w-full " />
                        <input type="text" disabled value={"Original Price: $" + originalPrice} className="input input-bordered w-full " />
                        <input name='price' type="price" disabled value={"$" + resalePrice} className="input input-bordered w-full font-bold" />
                        <input name='name' type="name" disabled value={user?.displayName} className="input input-bordered w-full font-bold" />
                        <input name='email' type="email" value={user?.email} disabled className="input input-bordered w-full font-bold" />
                        <br />
                        <input type="submit" className='btn btn-primary w-full ' value="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookModal;