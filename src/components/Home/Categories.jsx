import { useQuery } from '@tanstack/react-query';
import { Link, useNavigation } from 'react-router-dom';
import Loading from '../Shared/Loading';


const Categories = () => {
    const { data: categorie = [] } = useQuery({
        queryKey: ['categorie'],
        queryFn: async () => {
            const res = await fetch('https://resale-handing-server-side.vercel.app/categoriy')
            const data = await res.json();
            return data
        }
    })
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }

    return (
        <div className='lg:w-4/5 lg:mx-auto my-16'>
            <h3 className="text-4xl text-center font-bold ">Product Categories</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mx-12 mb-28 mt-16'>
                {
                    categorie.map(categoriy => <div key={categoriy._id} className="card card-compact md:w-96 px-2 bg-base-100 shadow-xl">
                        <figure><img src={categoriy.img} alt="electric" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{categoriy.name}</h2>
                            <p>{categoriy.detail}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/categorieDetail/${categoriy._id}`}><button className="btn btn-primary">See Product</button></Link>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;