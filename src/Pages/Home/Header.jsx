import * as React from 'react';

export default function Header() {
    return (
        <nav x-data="{ isOpen: false }" class="relative bg-[#fceac8] shadow dark:bg-gray-800">
            <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div class="flex items-center justify-between">
                    <div>
                        <img src="https://scontent.fcmh1-1.fna.fbcdn.net/v/t39.30808-6/310554146_159438173397714_7013024384196446488_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Nn4TQgZxaE8AX9e9UVJ&_nc_ht=scontent.fcmh1-1.fna&oh=00_AfDeL5uos2NMssJUwLBgeO23kVU9isEZ-26PTV4Z6W78GA&oe=63A6BB82" width="40px" height="40px" alt=""/>
                    </div>

                    <div class="flex lg:hidden">
                        <button x-cloak click="isOpen = !isOpen" type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                            </svg>

                            <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div x-cloak:class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                    <div class="flex flex-col md:flex-row md:mx-6">
                        <a class="my-2 text-gray-900 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/">Home</a>
                        <a class="my-2 text-gray-900 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/Roberto">Roberto's Story</a>
                        <a class="my-2 text-gray-900 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/Services">Resources</a>
                        <a class="my-2 text-gray-900 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/Contact">Contact</a>
                    </div>

                </div>
            </div >
        </nav >
    );
}
