<template>
  <div class="min-h-screen bg-[#F4EFEA] font-ibm text-gray-800 selection:bg-[#F3C650] selection:text-gray-900" dir="rtl">
    
    <!-- Top Header -->
    <header class="sticky top-0 z-50 bg-[#F4EFEA]/90 backdrop-blur-md flex items-center justify-between px-6 md:px-12 py-5 border-b border-stone-200/60 shadow-xs transition-all duration-300">
      <!-- Left Header Icons -->
      <div class="flex items-center gap-3">
        <button aria-label="الحساب" class="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition shadow-xs">
          <UserIcon class="w-5 h-5 text-gray-800" />
        </button>
        <button aria-label="سلة التسوق" class="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition shadow-xs">
          <ShoppingBagIcon class="w-5 h-5 text-gray-800" />
        </button>
        <button aria-label="المفضلة" class="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition shadow-xs">
          <HeartIcon class="w-5 h-5 text-gray-800" />
        </button>
        <button aria-label="البحث" class="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition shadow-xs">
          <MagnifyingGlassIcon class="w-5 h-5 text-gray-800" />
        </button>
      </div>

      <!-- Navigation Links -->
      <nav class="hidden md:flex items-center gap-8 xl:gap-10 font-medium text-base text-gray-700">
        <NuxtLink to="/affiliate" class="hover:text-gray-950 transition">انضم كمسوق</NuxtLink>
        <NuxtLink to="/compare" class="hover:text-gray-950 transition">مقارنة</NuxtLink>
        <NuxtLink to="/offers" class="hover:text-gray-950 transition">العروض</NuxtLink>
        <NuxtLink to="/merchants" class="hover:text-gray-950 transition">تجارنا</NuxtLink>
        <NuxtLink to="/products" class="text-gray-950 font-bold">منتجات</NuxtLink>
      </nav>

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 shrink-0">
        <div class="w-11 h-11 flex items-center justify-center">
          <svg viewBox="0 0 100 100" class="w-full h-full text-[#D4A017]" fill="none" stroke="currentColor">
            <rect x="25" y="25" width="50" height="50" rx="4" transform="rotate(45 50 50)" stroke-width="4" fill="rgba(243,198,80,.15)" />
            <rect x="33" y="33" width="34" height="34" rx="2" transform="rotate(45 50 50)" stroke-width="3" />
            <rect x="41" y="41" width="18" height="18" transform="rotate(45 50 50)" stroke-width="2.5" fill="#F3C650" />
          </svg>
        </div>
      </NuxtLink>
    </header>

    <section class="bg-[#F3E9DF] relative overflow-hidden px-6 md:px-12 py-14 flex flex-col items-center justify-center text-center">
      <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900">تفاصيل المنتج</h1>
      <div class="flex items-center justify-center gap-2 mt-4 text-gray-600">
        <NuxtLink to="/" class="font-bold text-gray-900">الرئيسية</NuxtLink>
        <ChevronLeftIcon class="w-4 h-4" />
        <span>تفاصيل المنتج</span>
      </div>

      <!-- خطوط الزخرفة يسار -->
      <svg class="absolute top-0 left-0 w-80 h-full opacity-40 hidden md:block pointer-events-none" viewBox="0 0 300 300" fill="none">
        <g stroke="#D4A017" stroke-width="1">
          <path v-for="i in 12" :key="i" :d="`M ${i * 25} 0 L 300 ${i * 25}`" />
        </g>
      </svg>
    </section>

    <!-- Main Product Showcase Section -->
    <main class="relative px-4 sm:px-6 md:px-12 py-8 md:py-12 max-w-7xl mx-auto overflow-hidden">
      
      <!-- Decorative Golden Vector Lines (Bottom Left) -->
      <div class="absolute -bottom-10 -left-10 w-96 h-96 pointer-events-none opacity-25">
        <svg viewBox="0 0 300 300" fill="none" class="w-full h-full text-[#D4A017]">
          <g stroke="currentColor" stroke-width="1.2">
            <path v-for="i in 18" :key="i" :d="`M 0 ${i * 18} L ${i * 18} 300`" />
          </g>
        </svg>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">

        <!-- Right Side: Gallery & Main Image (lg:col-span-7) -->
        <div class="lg:col-span-7 order-1 flex flex-row gap-4 sm:gap-6 items-start">
          
          <!-- Vertical Thumbnails Column (Right side in RTL) -->
          <div class="flex flex-col gap-3.5 shrink-0">
            <button
              v-for="(img, i) in product.gallery"
              :key="i"
              @click="activeImage = img"
              class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl overflow-hidden bg-white border-2 p-1 flex items-center justify-center cursor-pointer transition"
              :class="activeImage === img ? 'border-[#F5C445]' : 'border-stone-200'"
            >
              <img :src="img" :alt="`معاينة ${i + 1}`" class="w-full h-full object-cover rounded-xl" />
            </button>
          </div>

          <!-- Big Main Image Showcase Card (Left side in RTL) -->
          <div class="flex-1 bg-white rounded-[32px] md:rounded-[40px] p-6 sm:p-10 shadow-sm border border-stone-200/50 flex items-center justify-center min-h-[380px] sm:min-h-[460px] md:min-h-[520px]">
            <img
              :src="activeImage"
              :alt="product.name"
              class="w-full h-auto max-h-[460px] object-contain"
            />
          </div>

        </div>

        <!-- Left Side: Product Info & Actions (lg:col-span-5) -->
        <div class="lg:col-span-5 order-2 text-right">

          <!-- Seller Info Pill -->
          <div class="bg-white/90 backdrop-blur-md rounded-full px-4 sm:px-5 py-2.5 shadow-sm border border-stone-200/60 flex items-center justify-between mb-6">
            <!-- Follow Button (Left) -->
            <button class="flex items-center gap-1.5 bg-[#F5C445] hover:bg-[#E2B234] text-gray-950 font-bold text-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-xs transition transform hover:-translate-y-0.5 active:translate-y-0">
              <UserPlusIcon class="w-4 h-4" />
              <span>متابعة</span>
            </button>

            <!-- Seller Metadata & Rating (Right) -->
            <div class="flex items-center gap-3">
              <span class="flex items-center gap-1 bg-stone-100 border border-stone-200/80 px-2.5 py-1 rounded-full text-xs font-extrabold text-gray-800 shadow-2xs">
                <span>{{ product.sellerRating }}</span>
                <StarSolidIcon class="w-3.5 h-3.5 text-amber-400" />
              </span>

              <div class="text-right">
                <h4 class="text-sm font-bold text-gray-950 leading-tight">{{ product.sellerName }}</h4>
                <p class="text-xs text-gray-400 font-medium mt-0.5">{{ product.sellerTag }}</p>
              </div>

              <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-950 flex items-center justify-center text-white overflow-hidden shadow-xs shrink-0 border border-amber-400/40">
                <img v-if="product.sellerLogo" :src="product.sellerLogo" class="w-full h-full object-cover" />
                <span v-else class="text-xs font-bold text-[#F5C445]">ف</span>
              </div>
            </div>
          </div>

          <!-- Product Title & Share Icon -->
          <div class="flex items-start justify-between gap-4 mb-3">
            <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-950 leading-tight">
              {{ product.name }}
            </h1>

            <button
              aria-label="مشاركة المنتج"
              class="w-10 h-10 rounded-full bg-white/90 border border-stone-200 flex items-center justify-center text-gray-700 hover:text-gray-950 hover:bg-white shadow-xs transition shrink-0 transform hover:scale-105"
            >
              <ShareIcon class="w-4 h-4" />
            </button>
          </div>

          <!-- Star Rating & Score -->
          <div class="flex items-center gap-2 mb-6" dir="rtl">
            <div class="flex text-amber-400 gap-0.5">
              <StarSolidIcon v-for="i in 5" :key="i" class="w-4 h-4" />
            </div>
            <span class="text-sm font-bold text-gray-500">({{ product.rating }})</span>
          </div>

          <!-- Price Row -->
          <div class="flex items-center gap-3 mb-6">
            <span v-if="product.discount" class="bg-[#D1F2F0] text-[#1E7872] text-xs font-extrabold px-3 py-1 rounded-md shadow-2xs">
              -{{ product.discount }}%
            </span>

            <span v-if="product.oldPrice" class="text-gray-400 line-through text-lg font-semibold">
              {{ product.oldPrice.toLocaleString() }} ﷼
            </span>

            <div class="flex items-baseline gap-1">
              <span class="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
                {{ product.price.toLocaleString() }}
              </span>
              <span class="text-base font-bold text-gray-600">﷼</span>
            </div>
          </div>

          <!-- Specs Badges Pills -->
          <div class="flex flex-wrap gap-2.5 mb-6">
            <span
              v-for="(spec, i) in product.specs"
              :key="i"
              class="bg-white/80 backdrop-blur-xs border border-stone-200/80 text-gray-800 text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-2xs"
            >
              {{ spec }}
            </span>
          </div>

          <!-- Description Paragraph -->
          <p class="text-gray-600 leading-relaxed text-sm sm:text-base font-normal mb-8 max-w-xl">
            {{ product.description }}
          </p>

          <!-- Bottom Action Buttons: Quantity & Add to Cart -->
          <div class="flex items-center gap-4">
            <!-- Quantity Counter Pill -->
            <div class="flex items-center justify-between gap-4 bg-white/90 backdrop-blur-xs border border-stone-200 rounded-full px-4 py-2.5 shadow-xs">
              <button
                @click="quantity > 1 && quantity--"
                class="w-7 h-7 rounded-full flex items-center justify-center text-gray-700 hover:bg-stone-100 font-extrabold text-base transition"
              >
                -
              </button>
              <span class="font-black text-gray-950 text-base min-w-[20px] text-center">{{ quantity }}</span>
              <button
                @click="quantity++"
                class="w-7 h-7 rounded-full flex items-center justify-center text-gray-700 hover:bg-stone-100 font-extrabold text-base transition"
              >
                +
              </button>
            </div>

            <!-- Add to Cart Button -->
            <button
              @click="addToCart(product)"
              class="flex-1 bg-[#F5C445] hover:bg-[#E2B234] text-gray-950 font-extrabold text-base sm:text-lg py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              أضف للسلة
            </button>
          </div>

        </div>

      </div>
    </main>

    <ProductTabs />

    <section class="py-12 md:py-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto" dir="ltr">

  <!-- Header -->
  <div class="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-10 gap-6">

    <div class="order-1 lg:order-2 text-right w-full lg:w-auto">
      <span class="inline-block bg-[#F7C74C] text-gray-950 text-xs font-bold px-4 py-1.5 rounded-full mb-3">
        وصل حديثًا
      </span>
      <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-3">وصل حديثًا</h2>
      <p class="text-gray-600 text-sm md:text-base leading-relaxed max-w-lg">
        اكتشفي أحدث تصاميم المجوهرات الفاخرة المختارة بعناية لتواكب ذوقك الراقي وأحدث صيحات الأناقة.
      </p>
    </div>

    <a href="#" class="order-2 lg:order-1 text-gray-900 font-semibold underline underline-offset-4 hover:text-[#F7C74C] transition-colors">
      عرض الكل
    </a>
  </div>

  <!-- Carousel -->
  <div class="relative">
    <div
      ref="scrollContainer"
      class="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
      @scroll="onScroll"
    >
      <div
        v-for="product in newArrivals"
        :key="product.id"
        class="snap-start flex-shrink-0 w-[calc(50%-8px)] lg:w-[calc(25%-18px)] bg-[#FBF3ED] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <!-- Image -->
        <div class="relative p-4 pb-1">
          <span class="absolute top-4 right-4 bg-white rounded-full px-2.5 py-1 text-xs font-bold shadow-sm flex items-center gap-1 z-10">
            <span class="text-[#F7C74C]">★</span>
            <span>{{ product.rating }}</span>
          </span>
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full aspect-square object-contain"
          />
        </div>

        <!-- Details -->
        <div class="px-4 pb-4 pt-1">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                <!-- <img :src="product.storeLogo" alt="" class="w-full h-full object-cover" /> -->
              </div>
              <span class="text-xs text-gray-500">{{ product.storeName }}</span>
              
            </div>
            <div class="w-6 h-6 rounded-full bg-[#F7C74C]/20 flex items-center justify-center">
              <span class="text-xs">🔗</span>
            </div>
          </div>

          <h3 class="text-sm font-bold text-gray-900 mb-2 leading-snug text-right">
            {{ product.name }}
          </h3>

          <p class="text-lg font-black text-gray-900 mb-3 text-right">
            <span class="text-sm">﷼</span>{{ product.price }}
          </p>

          <div class="flex items-center gap-2">
            <button class="w-9 h-9 flex-shrink-0 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
              <span class="text-gray-400">♡</span>
            </button>
            <button class="flex-1 bg-[#F7C74C] hover:bg-[#E5B53D] text-gray-950 text-sm font-bold py-2.5 rounded-full transition-colors">
              أضف للسلة
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Pagination Controls -->
  <div class="flex items-center justify-center gap-4 mt-10">
    <button
      @click="prevSlide"
      class="w-11 h-11 flex-shrink-0 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
    >
      <span class="text-gray-600 text-lg">←</span>
    </button>

    <div class="flex items-center gap-2">
      <button
        v-for="(dot, index) in totalSlides"
        :key="index"
        @click="goToSlide(index)"
        class="h-2.5 rounded-full transition-all duration-300"
        :class="currentSlide === index
          ? 'w-8 bg-[#F7C74C]'
          : 'w-2.5 bg-gray-300 hover:bg-gray-400'"
      ></button>
    </div>

    <button
      @click="nextSlide"
      class="w-11 h-11 flex-shrink-0 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
    >
      <span class="text-gray-600 text-lg">→</span>
    </button>
  </div>

</section>

  </div>
</template>

<script setup>
import ProductTabs from '~/components/ProductTabs.vue';

definePageMeta({
  hideHeader: true
});

import { ref, computed } from 'vue';
import {
  UserIcon,
  ShoppingBagIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
  ShareIcon,
  ChevronLeftIcon
} from "@heroicons/vue/24/outline";
import { StarIcon as StarSolidIcon } from '@heroicons/vue/24/solid';

useHead({
  title: 'تفاصيل المنتج - جولد استور',
});

const product = ref({
  name: 'خاتم فضة عيار 926 للنساء – تصميم ملكي أنيق',
  rating: 4.5,
  sellerName: 'فيصل العتيبي',
  sellerTag: 'تاجر مجوهرات فاخر',
  sellerRating: 4.2,
  sellerLogo: '',
  price: 1890,
  oldPrice: 2000,
  discount: 12,
  specs: ['مقاس المنتج : 11', 'الوزن : 8 جرام', 'مصنوع من فضة عيار 925'],
  description: 'يتميز الخاتم بتفاصيل دقيقة ولمسات عصرية تعكس الذوق الرفيع، مع جودة عالية تمنح القطعة متانة ولمعانًا يدوم طويلاً. تصميمه الأنيق يجعله خيارًا مثاليًا للباحثات عن قطعة مجوهرات تضيف لمسة من الأناقة والفخامة إلى إطلالتهن.',
  mainImage: '/necklace.png',
  gallery: [
    '/necklace.png',
    '/diamond-ring.jpg',
    '/one.jpg',
    '/necklace.png',
  ]
});

const activeImage = ref(product.value.mainImage);
const quantity = ref(1);

function addToCart(p) {
  console.log('أضيف للسلة:', p.name, 'الكمية:', quantity.value);
}

// كروت
const newArrivals = ref([
  {
    id: 1,
    name: 'قلادة ذهب عيار 18 مع حجر زمرد',
    price: '1,890',
    rating: '4.2',
    image: '/diamond-ring.jpg',
    storeName: 'متجر اللمسة الذهبية',
    storeLogo: '/stores/store-logo.jpg',
  },
  {
    id: 2,
    name: 'خاتم الألماس',
    price: '4,850',
    rating: '4.2',
    image: '/numtwo.png',
    storeName: 'متجر اللمسة الذهبية',
    storeLogo: '/stores/store-logo.jpg',
  },
  {
    id: 3,
    name: 'قلادة ذهب عيار 18 مع حجر زمرد',
    price: '1,890',
    rating: '4.2',
    image: '/diamond-ring.jpg',
    storeName: 'متجر اللمسة الذهبية',
    storeLogo: '/stores/store-logo.jpg',
  },
  {
    id: 4,
    name: 'قلادة ذهب عيار 18 مع حجر زمرد',
    price: '1,890',
    rating: '4.2',
    image: '/numtwo.png',
    storeName: 'متجر اللمسة الذهبية',
    storeLogo: '/stores/store-logo.jpg',
  },
  {
    id: 5,
    name: 'قلادة ذهب عيار 18 مع حجر زمرد',
    price: '1,890',
    rating: '4.2',
    image: '/diamond-ring.jpg',
    storeName: 'متجر اللمسة الذهبية',
    storeLogo: '/stores/store-logo.jpg',
  },
  {
    id: 6,
    name: 'قلادة ذهب عيار 18 مع حجر زمرد',
    price: '1,890',
    rating: '4.2',
    image: '/numtwo.png',
    storeName: 'متجر اللمسة الذهبية',
    storeLogo: '/stores/store-logo.jpg',
  },
  {
    id: 7,
    name: 'قلادة ذهب عيار 18 مع حجر زمرد',
    price: '1,890',
    rating: '4.2',
    image: '/diamond-ring.jpg',
    storeName: 'متجر اللمسة الذهبية',
    storeLogo: '/stores/store-logo.jpg',
  },
  // كرر لباقي المنتجات...
]);

const scrollContainer = ref(null);
const currentSlide = ref(0);

// عدد الكروت الظاهرة في الشاشة (2 في الموبايل، 4 في الشاشات الكبيرة)
const visibleCount = computed(() => {
  if (import.meta.client && typeof window !== 'undefined') {
    return window.innerWidth >= 1024 ? 4 : 2;
  }
  return 4;
});

// عدد النقط = عدد "الصفحات" الممكنة
const totalSlides = computed(() =>
  Math.max(1, newArrivals.value.length - visibleCount.value + 1)
);

function scrollToIndex(index) {
  if (!scrollContainer.value) return;
  const card = scrollContainer.value.children[0];
  if (!card) return;
  const cardWidth = card.offsetWidth + 16; // 16 = gap تقريبًا (عدّلها لو الـ gap مختلف)
  scrollContainer.value.scrollTo({
    left: cardWidth * index,
    behavior: 'smooth',
  });
}

function goToSlide(index) {
  currentSlide.value = index;
  scrollToIndex(index);
}

function nextSlide() {
  if (currentSlide.value < totalSlides.value - 1) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0;
  }
  scrollToIndex(currentSlide.value);
}

function prevSlide() {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  } else {
    currentSlide.value = totalSlides.value - 1;
  }
  scrollToIndex(currentSlide.value);
}

function onScroll() {
  if (!scrollContainer.value) return;
  const card = scrollContainer.value.children[0];
  if (!card) return;
  const cardWidth = card.offsetWidth + 16;
  currentSlide.value = Math.round(scrollContainer.value.scrollLeft / cardWidth);
}
</script>