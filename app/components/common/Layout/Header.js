import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import withLang from '../../redux/providers/withLang';
import history from '../../../utils/history';
import { ReactComponent as Openmenu } from '../../../assets/svg/openmenu.svg';
import { ReactComponent as Closemenu } from '../../../assets/svg/closemenu.svg';
import ClickAwayListener from 'react-click-away-listener';
import _ from 'lodash';

const Header = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const lang = props.lang;

  return (
    <ClickAwayListener
      onClickAway={() => {
        setMobileMenuOpen(false);
      }}
    >
      <div
        x-data={mobileMenuOpen ? 'false' : 'true'}
        className="relative bg-indigo-600 text-white"
      >
        <div className="bg-gradient-to-r from-indigo-600 to-light-blue-500 h-16">
          <div className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex w-full items-center h-16">
              <div className="z-10 flex py-4 sm:py-2 justify-between items-center md:justify-start md:space-x-10 w-full">
                <div className="flex justify-start items-center lg:w-0 lg:flex-1 group">
                  <a href="#">
                    <span className="sr-only">UFAS</span>
                    <img
                      src={logo}
                      className="fill-current text-indigo-600 h-8 w-auto sm:h-10"
                    />
                  </a>
                </div>
                <div className="z-10 -mr-2 -my-2 md:hidden">
                  <button
                    onClick={() => setMobileMenuOpen(true)}
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Open menu</span>
                    <Openmenu className="h-6 w-6" />
                  </button>
                </div>
                <nav className="hidden md:flex space-x-10">
                  <Link
                    to="/"
                    className="z-10 text-base font-medium text-white hover:text-gray-300 cursor-pointer"
                  >
                    Home
                  </Link>
                </nav>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  Languages
                </div>
              </div>
            </div>
            <div
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              style={{ display: mobileMenuOpen ? '' : 'none' }}
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        src={logo}
                        className="fill-current text-indigo-600 h-8 w-auto"
                      />
                    </div>
                    <div className="-mr-2">
                      <button
                        onClick={() => setMobileMenuOpen(false)}
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      >
                        <span className="sr-only">Close menu</span>
                        <Closemenu className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <Link
                      to="/"
                      className="text-base font-medium text-gray-900 hover:text-gray-700 cursor-pointer z-50"
                    >
                      Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default withLang(Header);
