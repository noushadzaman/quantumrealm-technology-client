import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Title from '../../ui/Title';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const ServicesSection = () => {
    const axiosPublic = useAxiosPublic();
    const { data: servicesData, isLoading } = useQuery({
        queryKey: ['services'],
        queryFn: () => axiosPublic.get('services')
    })
    if (isLoading) {
        return <progress></progress>
    }
    return (
        <div className='my-[80px] lg:w-[90%] xl:w-[80%] mx-auto'>
            <div className='mb-[70px]'>
                <Title
                    title={"01.Services"}
                    subTitle={"Next-gen Tech Solutions for Seamless Digital Transformation."}
                    textAlign={"center"}
                    w={"50%"}
                ></Title>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                     servicesData.data.map((service, index) => <SwiperSlide key={index}>
                        <div className='flex flex-col items-center justify-center shadow-lg rounded-lg bg-white h-[400px] my-5'>

                            <img className='px-[40px] pt-[20px] md:px-[60px] md:pt-[25px] lg:px-[70px] lg:pt-[30px] max-h-[250px]' src={service.image_url} alt="" />
                            <h2 className='text-[#2d2929] text-[23px] font-semibold my-3'>{service.title}</h2>
                            <p className='text-[15px] text-center text-[#9c9ea6] mb-4 w-[80%]'>{service.subtitle}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default ServicesSection;