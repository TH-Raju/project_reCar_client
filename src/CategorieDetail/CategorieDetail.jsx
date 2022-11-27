import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../components/Shared/Loading';
import BookModal from './BookModal';

const CategorieDetail = () => {
    const [categorieDetail, setCategorieDetail] = useState([]);
    const detail = useLoaderData();
    const { name, product } = detail;
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }

    return (
        <div className='lg:w-4/5 lg:mx-auto my-16'>
            <h3 className="text-4xl text-center font-bold ">{name} Categories Product</h3>
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
                                <label htmlFor="booking-modal" onClick={() => setCategorieDetail(categoriy)} className="btn btn-primary">Book Now</label>

                                {
                                    categorieDetail &&
                                    <BookModal
                                        categorieDetail={categorieDetail}
                                    ></BookModal>
                                }

                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default CategorieDetail;

