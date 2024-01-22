import React from 'react'

const AppBar = () => {
  return (

<nav class="bg-white border-gray-200 border-b">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://prkglobal360.com" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="images/prklogo.png" class="h-8" alt="PRK Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">PRKGlobal360</span>
        </a>
        <button data-collapse-toggle="mega-menu-full-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mega-menu-full-cta" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div id="mega-menu-full-cta" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                
                <li>
                    <a href="/" class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0" >Home</a>
                </li>
                <li>
                    <a href="About" class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0">About Us</a>
                </li>
                <li>
                    <a href="Contact" class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>    
  )
}

export default AppBar
