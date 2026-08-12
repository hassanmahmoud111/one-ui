<template>

  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform',
      isHidden
        ? '-translate-y-full opacity-0 pointer-events-none'
        : 'translate-y-0 opacity-100',
      isScrolled
        ? 'w-full bg-white border-b border-[#D4B896]/40 shadow-md'
        : 'mx-4 md:mx-6 lg:mx-8 mt-5 rounded-full bg-[#9A8878]/40 border border-[#C8AD90]/30 backdrop-blur-xl shadow-lg'
    ]"
    dir="ltr"
  >
    <div class="flex items-center justify-between px-4 md:px-6 py-2.5">

      <!-- ================= Icons (Left in RTL) ================= -->
      <div class="flex items-center gap-2 order-3 md:order-1">

        <!-- User -->
        <button
          class="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:scale-110 hover:bg-white transition-all duration-200 shadow-sm"
        >
          <UserIcon class="w-[18px] h-[18px] text-[#4A3728]" />
        </button>

        <!-- Cart -->
        <NuxtLink to="/cart">
          <button
            class="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:scale-110 hover:bg-white transition-all duration-200 shadow-sm"
          >
            <ShoppingBagIcon class="w-[18px] h-[18px] text-[#4A3728]" />
          </button>
        </NuxtLink>

        <!-- Favorite -->
        <button
          class="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:scale-110 hover:bg-white transition-all duration-200 shadow-sm"
        >
          <HeartIcon class="w-[18px] h-[18px] text-[#4A3728]" />
        </button>

        <!-- Search -->
        <button
          class="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:scale-110 hover:bg-white transition-all duration-200 shadow-sm"
        >
          <MagnifyingGlassIcon class="w-[18px] h-[18px] text-[#4A3728]" />
        </button>

      </div>

      <!-- ================= Navigation ================= -->
      <nav class="hidden md:flex items-center gap-6 lg:gap-8 order-2">

        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          :class="[
            'text-sm lg:text-[15px] font-medium transition-all duration-300 relative group',
            isScrolled
              ? 'text-[#4A3728] hover:text-[#2C1F14]'
              : 'text-[#F5EDE2] hover:text-white'
          ]"
        >
          {{ link.label }}
          <!-- Underline effect -->
          <span
            :class="[
              'absolute -bottom-0.5 right-0 h-px w-0 group-hover:w-full transition-all duration-300',
              isScrolled ? 'bg-[#4A3728]' : 'bg-[#F3C650]'
            ]"
          />
        </NuxtLink>

      </nav>

      <!-- ================= Logo (Right in RTL) ================= -->
      <NuxtLink
        to="/"
        class="flex items-center justify-center order-1 md:order-3 hover:scale-105 transition-transform duration-200"
      >
        <div class="w-12 h-12">
          <svg
            viewBox="0 0 100 100"
            class="w-full h-full"
            fill="none"
            stroke="#C9A84C"
          >
            <!-- Outer diamond -->
            <rect
              x="22"
              y="22"
              width="56"
              height="56"
              rx="5"
              transform="rotate(45 50 50)"
              stroke-width="3.5"
              fill="rgba(201,168,76,0.08)"
            />
            <!-- Middle diamond -->
            <rect
              x="32"
              y="32"
              width="36"
              height="36"
              rx="3"
              transform="rotate(45 50 50)"
              stroke-width="2.5"
              fill="none"
            />
            <!-- Inner diamond filled -->
            <rect
              x="42"
              y="42"
              width="16"
              height="16"
              transform="rotate(45 50 50)"
              stroke-width="0"
              fill="#C9A84C"
            />
          </svg>
        </div>
      </NuxtLink>

    </div>
  </header>

</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from '#imports'

const route = useRoute()

import {
  UserIcon,
  ShoppingBagIcon,
  HeartIcon,
  MagnifyingGlassIcon
} from '@heroicons/vue/24/outline'


// =========================
// Scroll
// =========================

const isScrolled = ref(false)
const isHidden = ref(false)
const SCROLL_THRESHOLD = 50

// Reads scroll position from whichever source actually reports it.
// window.scrollY is usually right, but on some Nuxt/CSS setups the page
// scrolls inside a wrapper (html/body with overflow, or a layout div),
// so we fall back to documentElement/body scrollTop too.
const getScrollY = () => {
  return (
    window.scrollY ||
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  )
}

const handleScroll = () => {
  const y = getScrollY()
  const isHome = route.path === '/'

  if (isHome) {
    const viewportHeight = window.innerHeight
    const secondSectionThreshold = viewportHeight - 100

    if (y < 50) {
      isScrolled.value = false
      isHidden.value = false
    } else if (y >= 50 && y < secondSectionThreshold) {
      isScrolled.value = false
      isHidden.value = true
    } else {
      isScrolled.value = true
      isHidden.value = false
    }
  } else {
    isHidden.value = false
    isScrolled.value = y > SCROLL_THRESHOLD
  }
}

let scrollParent = null

onMounted(async () => {
  // Run once on mount, and again after the DOM has fully painted -
  // covers cases where layout/height isn't settled yet on first tick
  // (common right after SSR hydration).
  handleScroll()
  await nextTick()
  handleScroll()

  window.addEventListener('scroll', handleScroll, { passive: true })

  // If the page actually scrolls inside a wrapper element instead of
  // the window (overflow-y: auto/scroll on a parent), window scroll
  // events never fire. Detect that element and listen on it too.
  scrollParent = document.querySelector('[data-scroll-container]')
  if (scrollParent) {
    scrollParent.addEventListener('scroll', handleScroll, { passive: true })
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (scrollParent) {
    scrollParent.removeEventListener('scroll', handleScroll)
  }
})


// =========================
// Navigation Links
// =========================

const navLinks = [
  {
    label: 'المنتجات',
    to: '/products'
  },
  {
    label: 'تجارنا',
    to: '/merchants'
  },
  {
    label: 'العروض',
    to: '/offers'
  },
  {
    label: 'مقارنة',
    to: '/compare'
  },
  {
    label: 'انضم كمسوق',
    to: '/affiliate'
  }
]


// Active Link
// =========================

const isActive = (path) => {
  return route.path === path
}
</script>
