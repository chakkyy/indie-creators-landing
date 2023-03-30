import { DiscordIcon } from '@/components/Icons';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import NavHeader from '../NavHeader';

const Navbar = () => {
  const [state, setState] = useState(false);
  const menuBtnEl = useRef();

  const navigation = [
    { name: 'Features', href: '/#features' },
    { name: 'Testimonios', href: '/#testimonials' },
    { name: 'FAQs', href: '/#faqs' },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!menuBtnEl.current.contains(target)) setState(false);
    };
  }, []);

  return (
    <header className="relative">
      <div className="custom-screen md:hidden">
        <NavHeader
          menuBtnEl={menuBtnEl}
          state={state}
          onClick={() => setState(!state)}
        />
      </div>
      <nav
        className={`pb-5 md:text-sm md:static md:block ${
          state
            ? 'bg-gray-900 absolute z-20 top-0 inset-x-0 rounded-b-2xl shadow-xl md:bg-gray-900'
            : 'hidden'
        }`}
      >
        <div className="custom-screen items-center md:flex">
          <NavHeader state={state} onClick={() => setState(!state)} />
          <div
            className={`flex-1 items-center mt-8 text-gray-300 md:font-medium md:mt-0 md:flex ${
              state ? 'block' : 'hidden'
            } `}
          >
            <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="hover:text-gray-50">
                    <Link href={item.href} className="block">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
              <button
                type="button"
                className="flex items-center justify-center w-full px-4 py-2.5 border border-blue-700 rounded-lg text-sm font-medium text-white bg-transparent  hover:bg-blue-700 focus:ring-blue-600 duration-150"
              >
                <DiscordIcon className="w-5 h-5 mr-2" />
                Entrar con Discord
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
