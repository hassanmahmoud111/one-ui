<template>
  <div class="min-h-screen bg-[#F9F6F0] font-ibm text-gray-800 pt-28 pb-16 px-6 md:px-12" dir="rtl">
    <div class="max-w-7xl mx-auto">
      
      <!-- Page Header -->
      <div class="text-center mb-12">
        <span class="text-[#D4A017] font-bold text-sm tracking-widest uppercase mb-2 block">تشكيلة جولد استور</span>
        <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900">جميع المنتجات والمجوهرات</h1>
        <p class="text-gray-500 mt-3 text-lg">تصفحي أرقى الخواتم، الأطقم، السلاسل والأساور المصممة بأعلى معايير الدقة والجودة</p>
        <div class="w-20 h-1 bg-[#F3C650] mx-auto mt-4 rounded-full"></div>
      </div>

      <!-- Filters & Search Bar -->
      <div class="bg-white rounded-3xl p-6 shadow-md border border-stone-200 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <!-- Filter Tabs -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
              'px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300',
              selectedCategory === cat
                ? 'bg-gray-900 text-white font-bold shadow-md scale-105'
                : 'bg-stone-100 hover:bg-amber-100 text-gray-700'
            ]"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Search Input -->
        <div class="relative w-full md:w-72">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="البحث عن مجوهرات..."
            class="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-full text-sm outline-none focus:border-[#F3C650] transition shadow-inner"
          />
          <MagnifyingGlassIcon class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <!-- Notification Toast -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform translate-y-4 opacity-0"
      >
        <div
          v-if="toastMessage"
          class="fixed bottom-6 left-6 z-50 bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-amber-400/30"
        >
          <span class="text-amber-400 text-lg">✓</span>
          <span class="text-sm font-bold">{{ toastMessage }}</span>
        </div>
      </Transition>

      <!-- Empty State -->
      <div v-if="filteredProducts.length === 0" class="text-center py-20 bg-white rounded-3xl border border-stone-200 shadow-sm">
        <div class="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#D4A017]">
          <MagnifyingGlassIcon class="w-8 h-8" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">لا توجد نتائج متطابقة</h3>
        <p class="text-gray-500 text-sm">جرب البحث بكلمات أخرى أو اختر تصنيفًا مختلفًا</p>
        <button
          @click="resetFilters"
          class="mt-4 px-6 py-2.5 bg-[#F3C650] hover:bg-amber-400 text-gray-950 font-bold rounded-full text-sm transition"
        >
          إعادة ضبط الفلاتر
        </button>
      </div>

      <!-- Products Grid -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-stone-200/80 flex flex-col justify-between"
        >
          <div class="relative bg-[#F4EFEA] h-64 flex items-center justify-center p-4 overflow-hidden">
            <span
              class="absolute top-4 right-4 bg-[#F3C650] text-gray-950 font-bold text-xs px-3 py-1 rounded-full z-10 shadow-sm"
            >
              {{ product.tag }}
            </span>
            <button
              @click="toggleFavorite(product.id)"
              class="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center transition shadow-sm z-10 hover:scale-110 active:scale-95"
              :class="favorites.has(product.id) ? 'text-red-500' : 'text-gray-700 hover:text-red-500'"
              :aria-label="favorites.has(product.id) ? 'إزالة من المفضلة' : 'إضافة للمفضلة'"
            >
              <HeartIcon class="w-5 h-5" :class="{ 'fill-current': favorites.has(product.id) }" />
            </button>
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between text-xs text-gray-500 mb-1.5">
                <span>{{ product.category }}</span>
                <span class="text-amber-500 font-semibold">★ {{ product.rating }}</span>
              </div>
              <h3 class="text-lg font-bold text-gray-900 group-hover:text-[#D4A017] transition mb-2">
                {{ product.name }}
              </h3>
            </div>

            <div class="flex items-center justify-between mt-4 pt-3 border-t border-stone-100">
              <div>
                <span class="text-xl font-black text-gray-900">{{ product.price.toLocaleString('ar-SA') }}</span>
                <span class="text-xs font-bold text-gray-500 mr-1">ر.س</span>
              </div>
              <button
                @click="addToCart(product)"
                class="px-4 py-2 bg-gray-900 hover:bg-[#F3C650] hover:text-gray-950 text-white font-bold rounded-full transition-all duration-300 text-xs flex items-center gap-1.5 active:scale-95 shadow-sm"
              >
                <ShoppingBagIcon class="w-3.5 h-3.5" />
                <span>أضف للسلة</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { HeartIcon, ShoppingBagIcon, MagnifyingGlassIcon } from "@heroicons/vue/24/outline";

useHead({
  title: 'المنتجات - جولد استور',
});

const searchQuery = ref("");
const selectedCategory = ref("الكل");
const favorites = ref(new Set());
const toastMessage = ref("");
let toastTimeout = null;

const categories = [
  "الكل",
  "خواتم ألماس",
  "أطقم ملكية",
  "قلادات وسلاسل",
  "أساور ذهبية",
  "أقراط ماسية"
];

const products = [
  {
    id: 1,
    name: "خاتم الماس زمردي فاخر",
    category: "خواتم ألماس",
    tag: "ذهب عيار 21",
    price: 4850,
    rating: 4.9,
    image: "/diamond-ring.jpg",
    store: "دار الذهب"
  },
  {
    id: 2,
    name: "قلادة العقد الفريد",
    category: "قلادات وسلاسل",
    tag: "الأكثر مبيعاً",
    price: 8200,
    rating: 5.0,
    image: "/necklace.png",
    store: "دار الذهب"
  },
  {
    id: 3,
    name: "سوار الذهب المصقول",
    category: "أساور ذهبية",
    tag: "تشكيلة خاصة",
    price: 3650,
    rating: 4.8,
    image: "/bracelet.png",
    store: "دار الذهب"
  },
  {
    id: 4,
    name: "أقراط النجمة الذهبية",
    category: "أقراط ماسية",
    tag: "جديد",
    price: 2900,
    rating: 4.9,
    image: "/earring.png",
    store: "دار الذهب"
  },
  {
    id: 5,
    name: "طقم ملكي مرصع بالألماس",
    category: "أطقم ملكية",
    tag: "طقم كامل",
    price: 14500,
    rating: 5.0,
    image: "/diamond-ring.jpg",
    store: "مجواهرات الفخامة"
  },
  {
    id: 6,
    name: "سوار أنيق ذهب عيار 18",
    category: "أساور ذهبية",
    tag: "الأكثر طلباً",
    price: 4100,
    rating: 4.7,
    image: "/bracelet.png",
    store: "بيت البريق"
  }
];

const filteredProducts = computed(() => {
  return products.filter((p) => {
    const matchesCategory = selectedCategory.value === "الكل" || p.category === selectedCategory.value;
    const matchesQuery = !searchQuery.value || p.name.includes(searchQuery.value) || p.category.includes(searchQuery.value);
    return matchesCategory && matchesQuery;
  });
});

function toggleFavorite(id) {
  if (favorites.value.has(id)) {
    favorites.value.delete(id);
    showToast("تمت إزالة المنتج من المفضلة");
  } else {
    favorites.value.add(id);
    showToast("تمت إضافة المنتج للمفضلة ❤️");
  }
  favorites.value = new Set(favorites.value);
}

function addToCart(product) {
  showToast(`تمت إضافة "${product.name}" إلى السلة 🛍️`);
}

function showToast(msg) {
  toastMessage.value = msg;
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastMessage.value = "";
  }, 3000);
}

function resetFilters() {
  searchQuery.value = "";
  selectedCategory.value = "الكل";
}
</script>
