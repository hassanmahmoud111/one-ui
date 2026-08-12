<template>
  <div class="min-h-screen bg-[#F9F6F0] font-ibm text-gray-800 pt-28 pb-16 px-6 md:px-12" dir="rtl">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <span class="text-[#D4A017] font-bold text-sm tracking-widest uppercase mb-2 block">مقارنة المنتجات</span>
        <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900">مقارنة القطع والمجوهرات</h1>
        <p class="text-gray-500 mt-3 text-lg">قارني بين مواصفات وأسعار ومميزات مجوهراتك المفضلة جنبًا إلى جنب</p>
        <div class="w-20 h-1 bg-[#F3C650] mx-auto mt-4 rounded-full"></div>
      </div>

      <div class="bg-white rounded-3xl p-12 text-center shadow-md border border-stone-200">
        <div class="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#D4A017] text-3xl">
          ⚖️
        </div>
        <h2 class="text-2xl font-bold text-gray-900 mb-3">قائمة المقارنة فارغة حالياً</h2>
        <p class="text-gray-500 max-w-md mx-auto mb-8">قم بإضافة منتجات من صفحة المنتجات لمقارنة المواصفات والأسعار مباشرة.</p>
        <NuxtLink to="/products" class="px-8 py-3.5 bg-[#F3C650] hover:bg-amber-400 text-gray-950 font-bold rounded-full transition shadow-lg inline-block">
          تصفحي المنتجات الآن
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'مقارنة المنتجات - جولد استور',
});
</script>
