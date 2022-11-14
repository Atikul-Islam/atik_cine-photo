import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const Services = useLoaderData()

    return (
        <div>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3'>
                {
                    Services.map(service => <ServiceCard
                    key={service.id}
                    service={service}></ServiceCard> )
                }
            </div>
        </div>
    );
};

export default Services;