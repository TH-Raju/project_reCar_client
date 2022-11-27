import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import Loading from '../Shared/Loading';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const data = useLoaderData();
    const { buying, price, buyerName } = data;
    console.log(data);
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-4xl">Payment for {buying}</h2>
            <p className="text-xl">Please pay <strong>{price}</strong> for your buying prodcut form {buyerName}</p>
            <div className='w-96 my-14 border p-8'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        data={data}
                    ></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;