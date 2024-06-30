<template>
  

<!-- nav bar -->
  <nav class="bg-gray-100 border-gray-200">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Visualizing Lightning Network</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
      
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">One</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Two</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Three</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Four </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- links -->
<div class=" flex flex-col max-w-screen-xl mx-auto mt-10">
<div  class="mb-3 text-lg text-gray-500 md:text-3xl dark:text-gray-400">Visitung first time: <NuxtLink to="./first" class="hover:text-blue-500 cursor-pointer">Start Here</NuxtLink></div>

<div class="mb-3 text-lg text-gray-500 md:text-3xl dark:text-gray-400">If you have already visited Plebdashboard: <NuxtLink to="./profile" class="hover:text-blue-500 cursor-pointer">Click Here</NuxtLink></div>

<div class="mb-3 text-lg text-gray-500 md:text-3xl dark:text-gray-400">You Know why you are here (Expert Plebdashboard): <NuxtLink to="./expert" class="hover:text-blue-500 cursor-pointer">Click Here</NuxtLink></div>
</div>



<div class="block py-16 max-w-screen-xl mx-auto mt-10 border border-gray-200 rounded-lg shadow bg-gray-100">

  <div class=" flex justify-around">


    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is Plebdashboard ?</h5>
    </a>
    <p class="mb-3 flex items-top font-normal text-gray-700 dark:text-gray-400"> <span class="flex mt-1.5 w-3 h-3 me-3 bg-gray-900 rounded-full dark:bg-gray-700"></span>Lorem, ipsum dolor sit amet consectetur  elit.</p>
    <p class="mb-3 flex items-top font-normal text-gray-700 dark:text-gray-400"> <span class="flex mt-1.5 w-3 h-3 me-3 bg-gray-900 rounded-full dark:bg-gray-700"></span>Lorem, ipsum dolor sit amet consectetur.</p>
    <p class="mb-3 flex items-top font-normal text-gray-700 dark:text-gray-400"> <span class="flex mt-1.5 w-3 h-3 me-3 bg-gray-900 rounded-full dark:bg-gray-700"></span>Lorem, ipsum dolor sit amet</p>
    <a class=" cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
        Read more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>



<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is New ?</h5>
    </a>
   
    <p class="mb-3 flex items-top font-normal text-gray-700 dark:text-gray-400"> <span class="flex mt-1.5 w-3 h-3 me-3 bg-gray-900 rounded-full dark:bg-gray-700"></span>Lorem, ipsum dolor sit amet consectetur  elit.</p>
    <p class="mb-3 flex items-top font-normal text-gray-700 dark:text-gray-400"> <span class="flex mt-1.5 w-3 h-3 me-3 bg-gray-900 rounded-full dark:bg-gray-700"></span>Lorem, ipsum dolor sit amet consectetur.</p>
    <p class="mb-3 flex items-top font-normal text-gray-700 dark:text-gray-400"> <span class="flex mt-1.5 w-3 h-3 me-3 bg-gray-900 rounded-full dark:bg-gray-700"></span>Lorem, ipsum dolor sit amet</p>

    <a class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
        Read more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>


  </div>

</div>




</template>