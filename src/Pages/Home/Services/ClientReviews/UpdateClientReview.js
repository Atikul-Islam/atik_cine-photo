import React from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import UseTitle from '../../../../Layout/Hooks/UseTitle';

const UpdateClientReview = () => {
    UseTitle('Update Client Review')
    const { id } = useParams()
    const handleReviewUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const comment = form.comment.value;
        fetch(`https://assignment11-node-mongodb-server.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ comment })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    form.reset()
                    toast.success('Review updated successfully')
                }
            })
    }
    return (
        <div className='mt-4 min-h-screen ' >
            <h1 className='text-center font-bold text-3xl mb-4'>Update Your Review</h1>
            <form onSubmit={handleReviewUpdate}>
                <textarea name='comment' className="textarea textarea-bordered w-full" placeholder="Update Your Review Here" required></textarea>
                <div className='text-center'>
                    <button className="btn btn-primary mt-2" type='submit'>Update Review</button>
                </div>
            </form>

        </div>
    );
};

export default UpdateClientReview;
