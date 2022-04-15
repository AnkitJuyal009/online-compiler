import React, { useState } from 'react';
import logo from '../logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = ({
  userLang,
  setUserLang,
  userTheme,
  setUserTheme,
  fontSize,
  setFontSize,
}) => {
  const languages = [
    { value: 'c', label: 'C' },
    { value: 'cpp', label: 'C++' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
  ];
  const themes = [
    { value: 'vs-dark', label: 'Dark' },
    { value: 'light', label: 'Light' },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className='shadow-md py-3 px-6 mb-6'>
      <div className='md:flex items-center justify-between'>
        <div className='flex items-center'>
          <img src={logo} alt='logo' className='w-16 object-contain' />
          <div className='text-xl font-bold'>HIREKARMA Online IDE</div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className='text-2xl absolute right-8 top-6 cursor-pointer md:hidden'
        >
          <GiHamburgerMenu name={open ? 'close' : 'menu'}></GiHamburgerMenu>
        </div>
        <div
          className={`block md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-[100] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in gap-4 bg-gray-100 pb-8 ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}
        >
          <select
            onChange={(e) => setUserLang(e.target.value)}
            value={userLang}
            className='w-24 border-blue-300 rounded appearance-none text-center outline-none px-2 py-2 font-medium bg-sky-400 hover:bg-sky-500 mx-3 mt-4 md:mt-0'
          >
            {languages.map((language) => (
              <option
                key={language.label}
                value={language.value}
                className='bg-white text-black'
              >
                {language.label}
              </option>
            ))}
          </select>
          <select
            onChange={(e) => setUserTheme(e.target.value)}
            value={userTheme}
            className='w-24 border-blue-300 rounded appearance-none text-center outline-none px-2 py-2 font-medium bg-sky-400 hover:bg-sky-500 mx-3 mt-4 md:mt-0'
          >
            {themes.map((theme) => (
              <option
                key={theme.label}
                value={theme.value}
                className='text-black bg-white'
              >
                {theme.label}
              </option>
            ))}
          </select>
          <label>Font Size</label>
          <input
            type='range'
            min='16'
            max='30'
            value={fontSize}
            step='2'
            onChange={(e) => {
              setFontSize(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
