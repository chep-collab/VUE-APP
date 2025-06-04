<template>
  <div class="min-h-screen bg-gray-50 font-sans">
    <!-- Landing Page -->
    <div v-if="currentView === 'home'">
      <!-- Navbar -->
      <nav class="bg-white shadow-lg fixed w-full z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16 items-center">
            <div class="flex items-center">
              <h1 class="text-2xl font-bold text-indigo-600">Facilityhub</h1>
            </div>
            <div class="flex items-center space-x-6">
              <a href="#about" class="text-gray-600 hover:text-indigo-600 transition">About</a>
              <a href="#features" class="text-gray-600 hover:text-indigo-600 transition">Features</a>
              <a href="#contact" class="text-gray-600 hover:text-indigo-600 transition">Contact</a>
              <button @click="currentView = 'login'" class="text-gray-600 hover:text-indigo-600 transition">Login</button>
            </div>
          </div>
        </div>
      </nav>

      <!-- Hero Section with New Image -->
      <section
        class="pt-24 pb-20 text-white bg-cover bg-center min-h-[500px]"
        style="background-image: linear-gradient(to right, rgba(0, 0, 255, 0.8), rgba(135, 206, 250, 0.8)), url('pexels-carsten-ruthemann-8804932-15664454.jpg');"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div class="relative z-10">
            <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight">
              Streamline Your Facility with Facilityhub
            </h2>
            <p class="mt-4 text-lg md:text-xl text-white max-w-3xl mx-auto">
              Manage gyms, coworkspaces, sports complexes, and more with ease. Discover a platform designed for seamless operations and user satisfaction.
            </p>
            <!-- Animated Services -->
            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <TransitionGroup name="slide-scale" tag="div" class="flex flex-wrap justify-center gap-4">
                <div
                  v-for="(service, index) in services"
                  :key="service"
                  class="bg-white text-indigo-600 px-6 py-3 rounded-full font-medium text-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
                  :style="{ animationDelay: `${index * 0.3}s` }"
                >
                  {{ service }}
                </div>
              </TransitionGroup>
            </div>
            <div class="mt-8 flex justify-center gap-4">
              <button
                @click="currentView = 'signup'"
                class="bg-white text-indigo-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-50 transition shadow-md"
              >
                Get Started
              </button>
              <button
                @click="bookDemo"
                class="border border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-50 hover:text-indigo-600 transition"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center">Why Facilityhub?</h2>
          <p class="mt-6 text-lg text-gray-600 max-w-3xl mx-auto text-center">
            Facility Hub is a comprehensive platform for workspace owners and users. Workspace owners can list and manage their available services, invite users to join and subscribe to their services, and manage subscriptions in one app.

Users benefit from a streamlined subscription experience and access to personalized dashboards, making it easy to find and book spaces that suit their needs.
          </p>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="py-20 bg-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center">Powerful Features for You</h2>
          <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="feature in features" :key="feature.title" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <div class="flex items-center mb-4">
                <span class="text-indigo-600 text-2xl mr-2">{{ feature.icon }}</span>
                <h3 class="text-xl font-semibold text-gray-900">{{ feature.title }}</h3>
              </div>
              <p class="text-gray-600">{{ feature.description }}</p>
              <div v-if="feature.comingSoon" class="mt-4">
                <button class="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 hover:text-white hover:scale-105 transition duration-300">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center">Get in Touch</h2>
          <p class="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Ready to transform your facility management? Contact us or book a demo today!
          </p>
          <form @submit.prevent="submitContact" class="mt-8 max-w-lg mx-auto space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" v-model="contactForm.name" id="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Your Name">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" v-model="contactForm.email" id="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Your Email">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea v-model="contactForm.message" id="message" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" class="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">Send Message</button>
          </form>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-gray-900 py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-300">
          <p>© 2025 Facilityhub. All rights reserved.</p>
          <div class="mt-4 space-x-4">
            <a href="#about" class="hover:text-indigo-400 transition">About</a>
            <a href="#features" class="hover:text-indigo-400 transition">Features</a>
            <a href="#contact" class="hover:text-indigo-400 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>

    <!-- Login Form -->
    <div v-if="currentView === 'login'" class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Login @show-signup="currentView = 'signup'" @show-home="currentView = 'home'" />
    </div>

    <!-- Signup Form -->
    <div v-if="currentView === 'signup'" class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Signup @show-login="currentView = 'login'" @show-home="currentView = 'home'" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'

const currentView = ref('home')

const services = ref([
  'Effortless Facility Management',
  'Gym',
  'Coworkspace',
  'Facility Management',
  'Sports Complex'
])

const features = ref([
  {
    title: 'Service Management',
    description: 'Easily add, update, or deactivate services like workspaces or gym access, and set pricing—all from one intuitive platform.',
    icon: '🛠️'
  },
  {
    title: 'User Onboarding & App Access',
    description: 'Invite users for instant access to services with streamlined onboarding and a user-friendly web app.',
    icon: '👥'
  },
  {
    title: 'Subscription Tracking',
    description: 'Monitor all user subscriptions to stay on top of engagement and renewals with ease.',
    icon: '📊'
  },
  {
    title: 'Automated Renewal Reminders',
    description: 'Never miss a renewal with automatic notifications that keep users informed and engaged.',
    icon: '🔔',
    comingSoon: true
  },
  {
    title: 'Quick Booking',
    description: 'Enable users to book services instantly by scanning a QR code, making access fast and hassle-free.',
    icon: '📱',
    comingSoon: true
  },
  {
    title: 'Centralized Management Dashboard',
    description: 'Manage everything—services, users, and bookings—through a single, powerful dashboard.',
    icon: '📋'
  }
])

const contactForm = ref({
  name: '',
  email: '',
  message: ''
})

const submitContact = () => {
  console.log('Contact form submitted:', contactForm.value)
  contactForm.value = { name: '', email: '', message: '' }
}

const bookDemo = () => {
  console.log('Book a Demo clicked')
}
</script>

<style scoped>
/* Animation for services */
.slide-scale-enter-active,
.slide-scale-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.slide-scale-enter-from,
.slide-scale-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.8);
}
.slide-scale-enter-to,
.slide-scale-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>