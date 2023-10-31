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
            <div className='flex flex-wrap gap-8 items-center justify-items-center justify-center md:mx-4 mb-28 mt-16'>
                {
                    categorie.map(categoriy => <div key={categoriy._id} className="card card-compact md:w-96 px-2 bg-base-100 shadow-xl">
                        <figure><img src={categoriy.img} alt="electric" className='max-h-52 rounded-md' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{categoriy.name}</h2>
                            <p>{categoriy.detail}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/categorieDetail/${categoriy._id}`}><button className="btn btn-primary btn-sm">See Product</button></Link>
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