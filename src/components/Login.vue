<!-- src/components/Login.vue -->
<template>
    <div class="text-center max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">Login</h2>
      <p class="mt-4 text-sm sm:text-base text-gray-600">Enter your credentials to access Facilityhub</p>
      <form class="mt-6 space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base" placeholder="Your Email">
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base" placeholder="Your Password">
        </div>
        <button type="submit" class="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition text-sm sm:text-base">Login</button>
      </form>
      <div class="mt-4 flex justify-center gap-4">
        <button @click="$emit('show-signup')" class="text-indigo-600 hover:underline text-sm sm:text-base">Go to Signup</button>
        <button @click="$emit('show-home')" class="text-indigo-600 hover:underline text-sm sm:text-base">Back to Home</button>
      </div>
    </div>
  </template>
  <script setup></script>