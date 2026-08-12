<template>
  <div class="min-h-screen bg-[#F9F6F0] font-ibm text-gray-800 pt-28 pb-16 px-6 md:px-12" dir="rtl">
    <div class="max-w-5xl mx-auto">
      
      <!-- Back link -->
      <NuxtLink to="/products" class="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-amber-600 mb-8 transition">
        <span>→</span>
        <span>العودة لجميع المنتجات</span>
      </NuxtLink>

      <div class="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <!-- Product Image -->
        <div class="relative bg-[#F4EFEA] rounded-2xl h-80 md:h-96 flex items-center justify-center p-6 overflow-hidden">
          <span class="absolute top-4 right-4 bg-[#F3C650] text-gray-950 font-bold text-xs px-3 py-1 rounded-full z-10 shadow-sm">
            ذهب عيار 21
          </span>
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        <!-- Product Information -->
        <div class="flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-sm text-gray-500 mb-2">
              <span>{{ product.category }}</span>
              <span class="text-amber-500 font-semibold">★ {{ product.rating }}</span>
            </div>

            <h1 class="text-3xl font-extrabold text-gray-900 mb-4">{{ product.name }}</h1>
            <p class="text-gray-500 text-sm leading-relaxed mb-6">
              قطعة فريدة مصممة بعناية من الذهب الخالص والألماس النقي لتضفي لمسة من الفخامة والجمال على إطلالتك في كافة المناسبات.
            </p>

            <div class="mb-8">
              <span class="text-xs text-gray-400 block mb-1">السعر التقريبي</span>
              <div class="flex items-baseline gap-2">
                <span class="text-4xl font-black text-gray-900">{{ product.price.toLocaleString('ar-SA') }}</span>
                <span class="text-base font-bold text-gray-500">ر.س</span>
              </div>
            </div>
          </div>

          <div class="flex gap-4">
            <button
              @click="addToCart"
              class="flex-1 py-4 bg-gray-900 hover:bg-[#F3C650] hover:text-gray-950 text-white font-bold rounded-2xl transition duration-300 shadow-lg text-base"
            >
              أضف للسلة 🛍️
            </button>
            <button
              @click="toggleFavorite"
              class="w-14 h-14 rounded-2xl border border-stone-200 flex items-center justify-center hover:bg-red-50 text-gray-700 hover:text-red-500 transition"
            >
              ❤️
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const route = useRoute();
const productId = computed(() => route.params.id || "1");

const product = computed(() => {
  return {
    id: productId.value,
    name: "خاتم الماس زمردي فاخر",
    category: "خواتم ألماس",
    price: 4850,
    rating: 4.9,
    image: "/diamond-ring.jpg"
  };
});

useHead({
  title: `${product.value.name} - جولد استور`,
});

function addToCart() {
  alert(`تمت إضافة "${product.value.name}" إلى السلة 🛍️`);
}

function toggleFavorite() {
  alert("تمت الإضافة للمفضلة ❤️");
}
</script>