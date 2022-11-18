import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const AddService = () => {
    const services = useLoaderData()
    const servicesCount = services.length
    const handleAddService = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const service = {
            name: name,
            price: price,
            description: description,
            pic: photo,
        }
        fetch(`http://localhost:5000/services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => { })
        toast.success('Service Added Succesfully')
        form.reset()
    }
    return (
        <form onSubmit={handleAddService}>
            <div className="hero-content flex-col lg:flex-row-reverse w-full mx-auto">
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 p-28">
                    <h1 className="text-3xl font-bold text-center">ADD A SERVICE</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Service Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name='price' placeholder="Enter Service Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Enter Service Description" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter Service's Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">ADD SERVICE</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddService;
