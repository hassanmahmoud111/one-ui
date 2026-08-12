<template>
  <div class="min-h-screen bg-white font-ibm text-gray-800" dir="rtl">
   <header class="sticky top-0 z-50 bg-[#F3E9DF] flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300" dir="ltr">

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
      <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900">سلة التسوق</h1>
      <div class="flex items-center justify-center gap-2 mt-4 text-gray-600">
        <NuxtLink to="/" class="font-bold text-gray-900">الرئيسية</NuxtLink>
        <ChevronLeftIcon class="w-4 h-4" />
        <span>سلة التسوق</span>
      </div>

      <!-- خطوط الزخرفة يمين -->
      <svg class="absolute top-0 right-0 w-80 h-full opacity-40 hidden md:block pointer-events-none" viewBox="0 0 300 300" fill="none">
        <g stroke="#D4A017" stroke-width="1">
          <path v-for="i in 12" :key="i" :d="`M ${300 - i * 25} 0 L 0 ${i * 25}`" />
        </g>
      </svg>
    </section>

    <!-- Cart content -->
    <section>
      <div dir="rtl" class="bg-[#faf6ef] font-[Tahoma,'Segoe_UI',Arial,sans-serif] text-[#2b2620]">
        <div class="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-[1fr_340px] gap-5 items-start p-6">

          <!-- Cart items -->
          <div class="bg-[#f3ece1] rounded-[18px] overflow-hidden">
            <div class="grid grid-cols-[1fr_120px_140px] px-6 py-5 font-bold text-[15px]">
              <span>المنتج</span>
              <span class="text-center">السعر</span>
              <span class="text-center">الكمية</span>
            </div>

            <div
              v-for="item in items"
              :key="item.id"
              class="grid grid-cols-[1fr_120px_140px] items-center bg-[#faf6ef] mx-3 mb-3 px-4 py-3.5 rounded-2xl last:mb-3"
            >
              <div class="flex items-center gap-3.5">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-[78px] h-[78px] shrink-0 rounded-xl object-cover"
                >
                <div class="text-right">
                  <div class="font-bold text-[14.5px] leading-relaxed">{{ item.title }}</div>
                  <div class="text-[12.5px] text-[#8a7f6f] mt-0.5">{{ item.shop }}</div>
                </div>
              </div>

              <div class="text-center">
                <span class="font-bold text-[15px]">{{ item.price.toLocaleString() }} ريال</span>
                <span
                  v-if="item.oldPrice"
                  class="text-xs text-[#b7ab97] line-through mr-1.5"
                >{{ item.oldPrice.toLocaleString() }} ريال</span>
              </div>

              <div class="flex items-center justify-center gap-2.5">
                <button
                  aria-label="حذف"
                  class="w-[30px] h-[30px] rounded-full border border-[#f0d4d4] bg-white text-[#b23b3b] flex items-center justify-center text-base"
                  @click="removeItem(item.id)"
                >
                  🗑
                </button>
                <span class="min-w-[16px] text-center font-bold">{{ item.qty }}</span>
                <button
                  aria-label="زيادة الكمية"
                  class="w-[30px] h-[30px] rounded-full border border-[#e6dcc8] bg-white flex items-center justify-center text-base"
                  @click="increment(item.id)"
                >
                  +
                </button>
              </div>
            </div>

            <p v-if="items.length === 0" class="px-6 py-10 text-center text-[#8a7f6f]">
              سلة التسوق فارغة حاليًا
            </p>
          </div>

          <!-- Sidebar -->
          <div class="flex flex-col gap-4">

            <!-- Coupon -->
            <div class="bg-[#f3ece1] rounded-[20px] px-6 py-5">
  <!-- العنوان -->
  <div class="font-bold text-right mb-4 text-[15px] text-[#171717]">
    الكوبون والخصم
  </div>

  <!-- خانة الكوبون -->
  <div
    class="bg-white rounded-[10px] h-[47px] flex items-center overflow-hidden"
    dir="rtl"
  >
    <!-- الأيقونة -->
    <div class="flex items-center justify-center w-[42px] shrink-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#9b9b9b"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M20 12a2 2 0 0 0 0-4V5a1 1 0 0 0-1-1h-3a2 2 0 0 0-4 0H9a1 1 0 0 0-1 1v3a2 2 0 0 0 0 4v3a1 1 0 0 0 1 1h3a2 2 0 0 0 4 0h3a1 1 0 0 0 1-1z"/>
      </svg>
    </div>

    <!-- النص -->
    <input
      v-model="couponCode"
      type="text"
      placeholder="لديك كوبون خصم أو قسيمة؟ أدخلها هنا"
      class="flex-1 min-w-0 bg-transparent border-none outline-none text-right text-[12px] text-[#8a7f6f] placeholder:text-[#8a7f6f]"
    >

    <!-- الخط الفاصل -->
    <div class="h-[28px] w-px bg-[#e5e5e5] shrink-0"></div>

    <!-- زر التفعيل -->
    <button
      class="w-[65px] h-full shrink-0 font-bold text-[13px] text-[#171717]"
      @click="applyCoupon"
    >
      تفعيل
    </button>
  </div>
</div>

            <!-- Summary -->
            <div class="bg-[#f3ece1] rounded-[20px] p-5">

  <!-- تفاصيل الطلب -->
  <div
    class="bg-[#f8f5f1] border border-[#e5e0da] rounded-[18px] px-4 py-3"
    dir="rtl"
  >
    <!-- الإجمالي -->
    <div class="flex justify-between items-center text-[14px] py-2">
      <span class="text-[#171717]">
        الإجمالي
      </span>
      <span class="font-medium">
        {{ subtotal.toLocaleString() }} ريال
      </span>
    </div>

    <!-- رسوم الشحن -->
    <div class="flex justify-between items-center text-[14px] py-2">
      <span class="text-[#171717]">
        رسوم الشحن
      </span>
      <span class="font-medium">
        {{ SHIPPING.toLocaleString() }} ريال
      </span>
    </div>

    <!-- رسوم الدفع -->
    <div class="flex justify-between items-center text-[14px] py-2">
      <span class="text-[#171717]">
        رسوم الدفع
      </span>
      <span class="font-medium">
        {{ FEES.toLocaleString() }} ريال
      </span>
    </div>

    <!-- الخصم -->
    <div
      v-if="discount"
      class="flex justify-between items-center text-[14px] py-2 text-rose-500"
    >
      <span>
        الخصم
      </span>
      <span>
        - {{ discount.toLocaleString() }} ريال
      </span>
    </div>

    <!-- الخط الفاصل -->
    <div class="border-t border-[#d8d3cd] my-1"></div>

    <!-- الإجمالي النهائي -->
    <div class="flex justify-between items-center pt-3 pb-1">
      <span class="font-bold text-[19px]">
        الإجمالي النهائي شامل الضريبة
      </span>

      <span class="font-bold text-[19px] whitespace-nowrap">
        {{ grandTotal.toLocaleString() }} ريال
      </span>
    </div>
  </div>

  <!-- زر إتمام الطلب -->
  <button
    class="w-full mt-6 h-[45px] rounded-full font-bold text-[15px] text-[#3a2c05] bg-gradient-to-r from-[#ffd77c] to-[#ffc44d] hover:brightness-95 transition"
  >
    اتمام الطلب
  </button>

</div>
          </div>
        </div>
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

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import {
  UserIcon,
  ShoppingBagIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ChevronLeftIcon
} from '@heroicons/vue/24/outline'

definePageMeta({
  hideHeader: true
})

useHead({
  title: 'سلة التسوق - جولد استور'
})

const route = useRoute()

// ---- header ----
const navLinks = [
  { to: '/join', label: 'انضم كمشوق' },
  { to: '/compare', label: 'مقارنة' },
  { to: '/offers', label: 'العروض' },
  { to: '/about', label: 'تجارنا' },
  { to: '/products', label: 'منتجات' }
]

function isActive(path: string) {
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

// ---- cart ----
interface CartItem {
  id: number
  title: string
  shop: string
  image: string
  price: number
  oldPrice?: number
  qty: number
}

const SHIPPING = 100
const FEES = 50

const items = ref<CartItem[]>([
  {
    id: 1,
    title: 'سلسلة ذهب 10 جرام – عيار 24 من ذهب الرياض',
    shop: 'متجر اللمسة الذهبية',
    image: '/necklace.png',
    price: 739,
    oldPrice: 840,
    qty: 1
  },
  {
    id: 2,
    title: 'سلسلة ذهب 10 جرام – عيار 24 من ذهب الرياض',
    shop: 'متجر اللمسة الذهبية',
    image: '/necklace.png',
    price: 739,
    oldPrice: 840,
    qty: 1
  },
  {
    id: 3,
    title: 'سلسلة ذهب 10 جرام – عيار 24 من ذهب الرياض',
    shop: 'متجر اللمسة الذهبية',
    image: '/necklace.png',
    price: 739,
    oldPrice: 840,
    qty: 1
  }
])

const couponCode = ref('')
const discount = ref(0)

function applyCoupon() {
  // اربط هذه الدالة بنقطة نهاية (API) حقيقية للتحقق من الكوبون
  console.log('applying coupon', couponCode.value)
}

function increment(id: number) {
  const item = items.value.find(i => i.id === id)
  if (item) item.qty += 1
}

function removeItem(id: number) {
  items.value = items.value.filter(i => i.id !== id)
}

const subtotal = computed(() =>
  items.value.reduce((sum, item) => sum + item.price * item.qty, 0)
)
const grandTotal = computed(() => subtotal.value + SHIPPING + FEES - discount.value)
</script>