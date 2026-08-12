<template>
<section class="py-20 bg-[#f8f3ee]">
  <div class="max-w-7xl mx-auto px-6">
    <div class="flex items-center justify-between mb-10">
      <div>
        <span class="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-bold">الأكثر مبيعاً</span>
        <h2 class="text-4xl font-bold mt-4">القطع الأكثر طلباً</h2>
        <p class="text-gray-500 mt-2">المنتجات الأكثر شعبية بين عملائنا السعوديات</p>
      </div>
      <a href="#" class="font-bold text-gray-700 hover:text-yellow-600">عرض الكل ←</a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      <div v-for="item in products" :key="item.id" class="bg-white rounded-[30px] shadow hover:shadow-xl duration-300 overflow-hidden">
        <div class="relative">
          <img :src="item.image" class="h-72 w-full object-cover">
          <span class="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm">⭐ {{item.rate}}</span>
        </div>

        <div class="p-6">
          <p class="text-gray-500 text-sm">{{item.store}}</p>
          <h3 class="font-bold text-xl mt-2">{{item.name}}</h3>

          <div class="flex justify-between items-center mt-6">
            <div>
              <p class="text-2xl font-bold">{{item.price}} ر.س</p>
            </div>

            <div class="flex gap-2">
              <button class="w-12 h-12 rounded-full border">❤</button>
              <button class="w-12 h-12 rounded-full bg-yellow-400">↗</button>
            </div>
          </div>

          <button class="mt-6 w-full bg-yellow-400 rounded-full py-3 font-bold hover:bg-yellow-500">
            أضف للسلة
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
const products=[
{id:1,name:"خاتم الألماس",store:"دار الذهب",price:"4,850",rate:"4.2",image:"/diamond-ring.jpg"},
{id:2,name:"قلادة ذهب",store:"دار الذهب",price:"8,200",rate:"4.8",image:"/necklace.png"},
{id:3,name:"سوار فاخر",store:"دار الذهب",price:"3,650",rate:"4.5",image:"/bracelet.png"},
{id:4,name:"حلق مميز",store:"دار الذهب",price:"2,950",rate:"4.7",image:"/earring.png"},
]
</script>
