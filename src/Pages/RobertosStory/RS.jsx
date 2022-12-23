import * as React from 'react';

export default function RS() {
    return (
    <section className="text-gray-700 body-font relative">
      <nav x-data="{ isOpen: false }" class="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
         
      </nav>
  
      <div class="container px-6 py-16 mx-auto text-center">
          <div class="max-w-lg mx-auto">
              <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Roberto's Story</h1>
              <p class="mt-6 text-gray-500 dark:text-gray-300">Paragraph Here</p>
          </div>
  
          <div class="flex justify-center mt-10">
              <img class="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
          </div>
      </div>
  </section>
    );
}