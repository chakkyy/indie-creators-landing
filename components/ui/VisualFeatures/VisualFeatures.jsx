import SectionWrapper from '@/components/SectionWrapper';
import Feature1 from '@/public/images/feature-1.png';
import Image from 'next/image';

const VisualFeatures = () => {
  const features = [
    {
      title: ' Vel facilisis volutpat est velit.',
      desc: 'Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Egestas dui id ornare arcu.',
      img: Feature1,
    },
    {
      title: ' Vel facilisis volutpat est velit.',
      desc: 'Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Egestas dui id ornare arcu.',
      img: Feature1,
    },
  ];
  return (
    <SectionWrapper>
      <div className="custom-screen text-gray-300">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="mt-3">
            Orci nulla pellentesque dignissim enim sit amet. Elementum
            eu facilisis sed odio. Eu consequat ac felis donec et odio
            pellentesque.
          </p>
        </div>
        <div className="mt-12">
          <ul className="space-y-8 gap-x-6 sm:flex sm:space-y-0">
            {features.map((item, idx) => (
              <li
                className="flex-1 flex flex-col justify-between border border-gray-800 rounded-2xl"
                key={idx}
                style={{
                  background:
                    'radial-gradient(141.61% 141.61% at 29.14% -11.49%, rgba(203, 213, 225, 0.15) 0%, rgba(203, 213, 225, 0) 57.72%)',
                }}
              >
                <div className="p-8">
                  <h3 className="text-gray-50 text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 sm:text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
                <div className="pl-8">
                  <Image
                    src={item.img}
                    className="w-full ml-auto"
                    alt={item.title}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default VisualFeatures;
