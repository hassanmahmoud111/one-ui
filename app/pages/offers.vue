<template>
  <div class="min-h-screen bg-[#F3E9DF] font-ibm text-gray-800 " dir="rtl">
    <header class="sticky top-0 z-50 bg-[#F3E9DF] flex items-center justify-between  md:px-12 py-4 transition-all duration-300" dir="ltr">
  
      <!-- Icons -->
      <div class="flex items-center gap-3">
        <button class="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 hover:bg-white transition">
          <UserIcon class="w-4 h-4" />
        </button>
        <button class="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 hover:bg-white transition">
          <ShoppingBagIcon class="w-4 h-4" />
        </button>
        <button class="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 hover:bg-white transition">
          <HeartIcon class="w-4 h-4" />
        </button>
        <button class="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 hover:bg-white transition">
          <MagnifyingGlassIcon class="w-4 h-4" />
        </button>
      </div>

      <!-- Nav -->
      <nav class="hidden md:flex items-center gap-2 text-gray-700 font-medium">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="px-5 py-2 rounded-full transition"
          :class="isActive(link.to)
            ? 'bg-white/80 text-gray-900 font-bold'
            : 'hover:bg-white/40'"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Logo -->
      <NuxtLink to="/">
        <div
          :class="[
            'flex items-center justify-center transition-all duration-500',
            isScrolled ? 'w-10 h-10' : 'w-12 h-12'
          ]"
        >
          <svg
            viewBox="0 0 100 100"
            class="w-full h-full text-[#F3C650]"
            fill="none"
            stroke="currentColor"
          >
            <rect
              x="25" y="25" width="50" height="50" rx="4"
              transform="rotate(45 50 50)"
              stroke-width="4"
              fill="rgba(243,198,80,.15)"
            />
            <rect
              x="33" y="33" width="34" height="34" rx="2"
              transform="rotate(45 50 50)"
              stroke-width="3"
            />
            <rect
              x="41" y="41" width="18" height="18"
              transform="rotate(45 50 50)"
              stroke-width="2.5"
              fill="#F3C650"
            />
          </svg>
        </div>
      </NuxtLink>
    </header>

    <!-- Hero -->
    <section class="bg-[#F3E9DF] relative overflow-hidden px-6 md:px-12 py-14 flex flex-col items-center justify-center text-center">
      <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900">افضل العروض</h1>
      <div class="flex items-center justify-center gap-2 mt-4 text-gray-600">
        <NuxtLink to="/" class="font-bold text-gray-900">الرئيسية</NuxtLink>
        <ChevronLeftIcon class="w-4 h-4" />
        <span>افضل العروض</span>
      </div>

      <!-- خطوط الزخرفة يسار -->
      <svg class="absolute top-0 left-0 w-80 h-full opacity-40 hidden md:block pointer-events-none" viewBox="0 0 300 300" fill="none">
        <g stroke="#D4A017" stroke-width="1">
          <path v-for="i in 12" :key="i" :d="`M ${i * 25} 0 L 300 ${i * 25}`" />
        </g>
      </svg>
    </section>

    <!-- Products grid -->
    <section class="px-6 md:px-12 pb-16 max-w-7xl mx-auto w-full pt-6 pl-9">
      <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <NuxtLink
          v-for="product in productss"
          :key="product.slug"
          :to="`/products/${product.slug}`"
          class="group block bg-white rounded-[28px] overflow-hidden border border-gray-200 shadow-sm"
        >
          <!-- Image Section -->
          <div class="relative bg-[#F3E9DF] h-56 flex items-center justify-center w-auto">
            <!-- Rating Badge -->
            <span class="absolute top-4 left-4 z-10 flex items-center gap-1 bg-white px-2.5 py-1 rounded-full text-sm font-semibold text-gray-800 shadow-sm">
              <StarIcon class="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              {{ product.rating }}
            </span>

            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-cover"
            >
          </div>

          <!-- Info Section -->
          <div class="p-4">
            <!-- Store Row -->
            <div class="flex items-center justify-between mb-3">
              <div class="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden shrink-0">
                <img
                  v-if="product.storeLogo"
                  :src="product.storeLogo"
                  :alt="product.storeName"
                  class="w-full h-full object-cover"
                >
              </div>
              <span class="text-sm text-gray-500">{{ product.storeName }}</span>
            </div>

            <!-- Product Name -->
            <h3 class="text-base font-bold text-gray-900 leading-snug mb-3 text-right">
              {{ product.name }}
            </h3>

            <!-- Price Row -->
            <div class="flex items-center justify-between mb-4">
              <span v-if="product.discount" class="text-xs font-bold text-rose-500">
                {{ product.discount }}%-
              </span>
              <div class="flex items-center gap-1.5">
                <span v-if="product.oldPrice" class="text-sm text-gray-400 line-through">
                  {{ product.oldPrice.toLocaleString() }}ر.س
                </span>
                <span class="text-xl font-black text-gray-900">
                  {{ product.price.toLocaleString() }}<span class="text-sm font-bold mr-0.5">ر.س</span>
                </span>
              </div>
            </div>

            <!-- Actions Row -->
            <div class="flex items-center gap-3">
              <button
                @click.prevent="addToCart(product)"
                class="flex-1 h-11 rounded-full bg-[#F3C650] hover:bg-[#e0b53f] text-gray-900 font-bold text-sm transition"
              >
                أضف للسلة
              </button>
              <button
                @click.prevent="toggleFavorite(product)"
                class="w-11 h-11 shrink-0 rounded-full border border-gray-200 flex items-center justify-center hover:border-rose-300 transition"
              >
                <HeartIcon
                  class="w-5 h-5 transition"
                  :class="product.isFavorite ? 'text-rose-500 fill-rose-500' : 'text-gray-500'"
                />
              </button>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <footer class="bg-[#FBF3ED] text-gray-900 pt-20 pb-8" dir="rtl">
      <div class="max-w-7xl mx-auto px-6 md:px-12">

        <!-- Top: Logo + Description (Right Aligned) -->
        <div class="text-right mb-10">
          <div class="flex items-center gap-2 mb-6">
            <svg viewBox="0 0 100 100" class="w-10 h-10 text-[#F3C650]" fill="none" stroke="currentColor">
              <rect x="25" y="25" width="50" height="50" rx="4" transform="rotate(45 50 50)" stroke-width="4" fill="rgba(243, 198, 80, 0.15)"/>
              <rect x="41" y="41" width="18" height="18" transform="rotate(45 50 50)" stroke-width="2.5" fill="#F3C650"/>
            </svg>
          </div>
          <p class="text-gray-900 leading-relaxed text-lg lg:text-base max-w-2xl me-auto font-bold">
            منصة موثوقة لبيع السبائك الذهبية والمجوهرات الراقية، نوفر لك قطعاً أصلية بمعايير عالمية مع شحن آمن وسريع داخل المملكة ودول الخليج.
          </p>
        </div>

        <!-- Links Row -->
        <div class="flex flex-wrap items-center justify-start gap-x-8 gap-y-3 pb-8 border-b border-gray-300 text-lg font-medium">
          <a href="#" class="text-gray-700 hover:text-gray-900 transition">الصفحة الرئيسية</a>
          <a href="#" class="text-gray-700 hover:text-gray-900 transition">الأكثر مبيعا</a>
          <a href="#" class="text-gray-700 hover:text-gray-900 transition">سياسة الاسترجاع</a>
          <a href="#" class="text-gray-700 hover:text-gray-900 transition">سياسة الخصوصية</a>
          <a href="#" class="text-gray-700 hover:text-gray-900 transition">الشروط والأحكام</a>
          <a href="#" class="text-gray-700 hover:text-gray-900 transition">لماذا نحن</a>
          <a href="#" class="text-gray-700 hover:text-gray-900 transition">الطلبات</a>
        </div>

        <!-- Bottom Bar: Copyright + Icons -->
        <div class="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-6">

          <div class="flex items-center gap-4">
            <a href="#" class="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-900 hover:shadow-sm transition">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
            </a>
            <a href="#" class="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-900 hover:shadow-sm transition">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
            <a href="#" class="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-900 hover:shadow-sm transition">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.8c.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
            </a>
            <a href="#" class="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-900 hover:shadow-sm transition">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12c0-5.52-4.48-10-10-10z"/></svg>
            </a>
            <a href="#" class="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-900 hover:shadow-sm transition">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.02-2.45-1.49-2.45-1.49 0-1.72 1.16-1.72 2.37v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/></svg>
            </a>
          </div>

          <p class="text-gray-900 text-lg">
            جميع الحقوق محفوظة © 2026
          </p>
        </div>

      </div>
    </footer>

  </div>
</template>

<script setup>
definePageMeta({
  hideHeader: true
})

import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import {
  UserIcon,
  ShoppingBagIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ChevronLeftIcon,
  StarIcon
} from '@heroicons/vue/24/outline'

const route = useRoute()

// ---- header ----
const navLinks = [
  { to: '/join', label: 'انضم كمشوق' },
  { to: '/compare', label: 'مقارنة' },
  { to: '/offers', label: 'العروض' },
  { to: '/about', label: 'تجارنا' },
  { to: '/products', label: 'منتجات' }
]

function isActive(path) {
  return route.path === path
}

const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// ---- products ----
function addToCart(product) {
  // hook this up to your cart store / API
  console.log('added to cart:', product.slug)
}

function toggleFavorite(product) {
  product.isFavorite = !product.isFavorite
}

const productss = ref([
  { slug: 'khatm-1', name: 'قلادة ذهب عيار 18 مع حجر زمرد', image: '/diamond-ring.jpg', rating: 4.2, storeName: 'متجر اللمسة الذهبية', storeLogo: '', price: 1890, oldPrice: 2000, discount: 12, isFavorite: false },
  { slug: 'khatm-2', name: 'خاتم ألماس كلاسيك', image: '/diamond-ring.jpg', rating: 4.2, storeName: 'متجر اللمسة الذهبية', storeLogo: '', price: 1500, oldPrice: null, discount: null, isFavorite: false },
  { slug: 'khatm-3', name: 'خاتم ذهب مرصع', image: '/diamond-ring.jpg', rating: 4.2, storeName: 'متجر اللمسة الذهبية', storeLogo: '', price: 2200, oldPrice: 2500, discount: 12, isFavorite: false },
  { slug: 'khatm-4', name: 'خاتم ذهب أنيق', image: '/diamond-ring.jpg', rating: 4.2, storeName: 'متجر اللمسة الذهبية', storeLogo: '', price: 1750, oldPrice: null, discount: null, isFavorite: false },
  { slug: 'khatm-5', name: 'قلادة ذهب عيار 18 مع حجر زمرد', image: '/diamond-ring.jpg', rating: 4.2, storeName: 'متجر اللمسة الذهبية', storeLogo: '', price: 1890, oldPrice: 2000, discount: 12, isFavorite: false },
  { slug: 'khatm-6', name: 'خاتم ألماس كلاسيك', image: '/diamond-ring.jpg', rating: 4.2, storeName: 'متجر اللمسة الذهبية', storeLogo: '', price: 1500, oldPrice: null, discount: null, isFavorite: false },
  { slug: 'khatm-7', name: 'خاتم ذهب مرصع', image: '/diamond-ring.jpg', rating: 4.2, storeName: 'متجر اللمسة الذهبية', storeLogo: '', price: 2200, oldPrice: 2500, discount: 12, isFavorite: false },
  { slug: 'khatm-8', name: 'خاتم ذهب أنيق', image: '/diamond-ring.jpg', rating: 4.2, storeName: 'متجر اللمسة الذهبية', storeLogo: '', price: 1750, oldPrice: null, discount: null, isFavorite: false },
  { slug: 'khatm-9', name: 'قلادة ذهب عيار 18 مع حجر زمرد', image: '/diamond-ring.jpg', rating: 4.2, storeName: 'متجر اللمسة الذهبية', storeLogo: '', price: 1890, oldPrice: 2000, discount: 12, isFavorite: false },
  { slug: 'khatm-10', name: 'خاتم ألماس كلاسيك', image: '/diamond-ring.jpg', rating: 4.2, storeName: 'متجر اللمسة الذهبية', storeLogo: '', price: 1500, oldPrice: null, discount: null, isFavorite: false },
  { slug: 'khatm-11', name: 'خاتم ذهب مرصع', image: '/diamond-ring.jpg', rating: 4.2, storeName: 'متجر اللمسة الذهبية', storeLogo: '', price: 2200, oldPrice: 2500, discount: 12, isFavorite: false },
  { slug: 'khatm-12', name: 'خاتم ذهب أنيق', image: '/diamond-ring.jpg', rating: 4.2, storeName: 'متجر اللمسة الذهبية', storeLogo: '', price: 1750, oldPrice: null, discount: null, isFavorite: false },
])
</script>