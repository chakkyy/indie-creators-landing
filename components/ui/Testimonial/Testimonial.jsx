import SectionWrapper from '@/components/SectionWrapper';
import GradientWrapper from '@/components/GradientWrapper';
import user1 from '@/public/testimonial/user1.webp';
import user2 from '@/public/testimonial/user2.webp';
import user3 from '@/public/testimonial/user3.webp';
import user4 from '@/public/testimonial/user4.webp';
import user5 from '@/public/testimonial/user5.webp';
import user6 from '@/public/testimonial/user6.webp';
import Image from 'next/image';
import LayoutEffect from '@/components/LayoutEffect';

const Testimonial = () => {
  const testimonials = [
    {
      avatar: user1,
      name: 'Mark Zuckerberg',
      title: 'Founder of meta',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra faucibus aliquet. Donec vel maximus magna.',
    },
    {
      avatar: user2,
      name: 'Guillermo Rauch',
      title: 'Founder of Vercel',
      quote:
        'Vestibulum euismod enim eu mi maximus, vel tristique velit mattis. Quisque ut velit vel turpis vestibulum viverra ac eu nibh.',
    },
    {
      avatar: user3,
      name: 'David Lee',
      title: 'Founder of 123 Startups',
      quote:
        'Praesent tincidunt ligula ut lorem imperdiet consectetur. Nunc ut velit vitae magna faucibus vestibulum. Fusce sagittis nibh sit amet quam tristique tristique.',
    },
    {
      avatar: user4,
      name: 'Ghazbel',
      title: 'Founder of forceY',
      quote:
        'Nullam vel euismod eros. Duis vel ex sit amet turpis bibendum placerat. Donec imperdiet magna a augue dapibus, sit amet suscipit lacus venenatis.',
    },
    {
      avatar: user5,
      name: 'Ana khan',
      title: 'Founder of larax',
      quote:
        'Proin dapibus pharetra felis, ac ullamcorper turpis convallis vel. Duis vitae enim quis velit dictum iaculis. Donec interdum sem vel sapien sagittis elementum.',
    },
    {
      avatar: user6,
      name: 'Ahmed khasem',
      title: 'Founder of Let’s code',
      quote:
        'Sed venenatis diam non lectus ullamcorper, eu blandit nibh consequat. Proin aliquam ipsum ac mi varius, nec lacinia velit blandit.',
    },
  ];

  return (
    <SectionWrapper>
      <div id="testimonials" className="custom-screen text-gray-300">
        <div className="max-w-2xl text-center md:mx-auto">
          <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
            Our community is loved by the best creators around the
            world
          </h2>
        </div>
        <GradientWrapper
          wrapperclassName="max-w-sm h-40 top-12 inset-x-0"
          className="mt-12"
        >
          <LayoutEffect
            className="duration-1000 delay-300"
            isInviewState={{
              trueState: 'opacity-1',
              falseState: 'opacity-0 translate-y-12',
            }}
          >
            <ul className="grid gap-6 duration-1000 delay-300 ease-in-out sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((item, idx) => (
                <li
                  key={idx}
                  className="p-4 rounded-xl border border-gray-800"
                  style={{
                    backgroundImage:
                      'radial-gradient(100% 100% at 50% 50%, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0) 100%)',
                  }}
                >
                  <figure className="flex flex-col justify-between gap-y-6 h-full">
                    <blockquote className="">
                      <p className="">{item.quote}</p>
                    </blockquote>
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <span className="block text-gray-50 font-semibold">
                          {item.name}
                        </span>
                        <span className="block text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
              ))}
            </ul>
          </LayoutEffect>
        </GradientWrapper>
      </div>
    </SectionWrapper>
  );
};

export default Testimonial;
