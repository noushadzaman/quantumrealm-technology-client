import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Avatar } from '@mui/joy';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';


const TestimonialsSection = () => {
    const axiosPublic = useAxiosPublic();

    const { data: reviewsData, isLoading } = useQuery({
        queryKey: ['reviews'],
        queryFn: () => axiosPublic.get('/reviews')
    })

    if (isLoading) {
        return <progress></progress>
    }

    return (
        <div className='my-[80px] lg:w-[90%] xl:w-[80%] mx-auto'> 
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {
                    reviewsData.data.map((review, index) => <SwiperSlide key={index}>
                        <div className='p-5 border bg-[white]'>
                            <p className='text-[#9c9ea6]'>
                                {review.review}
                            </p>
                            <div className='flex gap-5 my-4 '>
                                <Avatar alt="Cindy Baker" src="https://i.ibb.co/2vr92pb/austin-distel-waw-Ef-Ydpkag-unsplash.jpg" />
                                <div>
                                    <h2 className='text-[19px]'>{review.name}</h2>
                                    <p className='text-[15px]'>{review.role} @ {review.company}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }


            </Swiper>
        </div >
    );
};

export default TestimonialsSection;