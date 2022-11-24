import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';


const Categories = () => {
    const { data: categorie = [] } = useQuery({
        queryKey: ['categorie'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoriy')
            const data = await res.json();
            return data
        }
    })

    return (
        <div className='lg:w-4/5 lg:mx-auto my-16'>
            <h3 className="text-4xl text-center font-bold ">Categories</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mx-12 mb-28 mt-16'>
                {
                    categorie.map(categoriy => <div key={categoriy._id} className="card card-compact w-96 bg-base-100 shadow-xl">
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