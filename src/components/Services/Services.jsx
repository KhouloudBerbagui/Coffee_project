import coffee2 from '../../assets/coffee2.png'
const ServicesData=[
    {
        id:1,
        img:coffee2,
        name:`Espresso`,
        description:"Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
        aosDelay: "100",
    },
    {
        id: 2,
        img: coffee2,
        name: "Americano",
        description:
          "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
        aosDelay: "300",
      },
      {
        id: 3,
        img: coffee2,
        name: "Cappuccino",
        description:
          "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
        aosDelay: "500",
      },
]
const Services = () => {
  return (
    <div className="py-10">
        <div className="container">
            {/*Header Title*/}
            <div className="text-center mb-20">
                <h1 className="text-4xl font-bold font-cursive text-gray-800 ">
                    Best Coffee For You</h1>
            </div>


            {/*Services Card Section*/ }
            <div className='flex items-center
            gap-10'>
                {
                    ServicesData.map((data,index)=>{
                        return(
                          <>
                            <span id="services"></span>
                            <div 
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={index} 
                            className='rounded-2xl bg-white
                            hover:bg-primary hover:text-white shadow-xl duration-200
                            max-width-[300px] group relative '>
                              <div className='h-[122px]'>
                                <img src={data.img} alt="" 
                                className='max-w-[200px] block mx-auto 
                                transform -translate-y-14
                                group-hover:scale-110 group-hover:rotate-6 duration-300 ' />
                              </div>
                              {/*Text-Content*/}
                              <div className='p-4 text-center'>
                                <h1 className='text-xl font-bold'>{data.name} </h1>
                                <p className='text-gray-500 group-hover:text-white
                                duration-300 text-sm line-clamp-2'>{data.description}</p>
                              </div>
                            </div>
                            </>
                        );
                        }
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Services