import LayoutEffect from '@/components/LayoutEffect';
import SectionWrapper from '@/components/SectionWrapper';

const faqsList = [
  {
    q: 'What is Lorem Ipsum?',
    a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    q: 'Why do we use Lorem Ipsum?',
    a: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    q: 'Where does it come from?',
    a: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
  },
  {
    q: 'What is Lorem Ipsum generator?',
    a: 'Lorem Ipsum generators use a predefined piece of Latin text and generate samples of Lorem Ipsum which have random words, sentences, and paragraphs.',
  },
  {
    q: 'Can Lorem Ipsum be translated?',
    a: "Lorem Ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's not meant to be translated.",
  },
  {
    q: 'Is Lorem Ipsum free?',
    a: 'Yes, Lorem Ipsum is free to use for both personal and commercial projects.',
  },
];

const FAQs = () => (
  <SectionWrapper id="faqs">
    <div className="custom-screen text-gray-300">
      <div className="max-w-xl text-center xl:mx-auto">
        <h2 className="text-gray-50 text-3xl font-extrabold sm:text-4xl">
          Everything you need to know
        </h2>
        <p className="mt-3">
          Here are the most questions people always ask about.
        </p>
      </div>
      <div className="mt-12">
        <LayoutEffect
          className="duration-1000 delay-300"
          isInviewState={{
            trueState: 'opacity-1',
            falseState: 'opacity-0 translate-y-12',
          }}
        >
          <ul className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">
            {faqsList.map((item, idx) => (
              <li key={idx} className="space-y-3">
                <summary className="flex items-center justify-between font-semibold text-gray-100">
                  {item.q}
                </summary>
                <p
                  dangerouslySetInnerHTML={{ __html: item.a }}
                  className="leading-relaxed"
                ></p>
              </li>
            ))}
          </ul>
        </LayoutEffect>
      </div>
    </div>
  </SectionWrapper>
);

export default FAQs;
