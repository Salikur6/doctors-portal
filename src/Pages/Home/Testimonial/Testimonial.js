import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            name: 'Winson Herry',
            address: 'Cailfornia'
        },
        {
            _id: 2,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            name: 'John b.',
            address: 'Cailfornia'
        },
        {
            _id: 3,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            name: 'Sanju Samuel',
            address: 'Cailfornia'
        },
    ]
    return (
        <section className='container mx-auto mb-36' style={{
            background: `url(${quote})no-repeat`, backgroundPosition: 'right top',
            backgroundSize: ' 15%'
        }}>
            <div>
                <h5 className='text-xl font-bold text-primary'>Testimonial</h5>
                <h4 className='text-4xl'>What Our Patients Says</h4>
            </div>


            {/* Testimonial Card section */}


            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-36 justify-items-center'>
                {
                    reviews.map(review =>

                        <div key={review._id} className="card m-3 shadow-xl">
                            <div className="card-body">
                                <p className='my-9 mx-2'>{review.description}</p>
                                <div className='flex items-center'>
                                    <div className='mr-3'>

                                        <div className="avatar">
                                            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={review.img} alt='Reviewer img' />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className='text-xl font-bold'>{review.name}</h5>
                                        <p className=''>{review.address}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>


        </section>
    );
};

export default Testimonial;