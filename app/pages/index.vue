<template>
  <div class="min-h-screen bg-[#F9F6F0] font-ibm text-gray-800 selection:bg-[#F3C650] selection:text-gray-900" dir="rtl">
    
    <!-- 1. HERO BANNER SECTION (Matching Figma Prototype) -->
    <section class="min-h-screen relative overflow-hidden bg-[#CDBFB2] flex items-center pb-16">
      <!-- Background Image & Lighting Gradient -->
      <div class="absolute inset-0 bg-[url('/Gemini_Generated_Image_ghrff1ghrff1ghrf.png')] bg-cover bg-center opacity-90"></div>
      <!-- <div class="absolute inset-0 bg-gradient-to-tr from-[#B5A496]/60 via-[#D5C6BA]/40 to-transparent"></div> -->

      <!-- Radial Soft Glow behind Headline -->
      <!-- <div class="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#F7E7CE]/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div> -->

      <!-- Main Container -->
      <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <!-- Right Side: Main Text Content -->
        <div class="lg:col-span-7 text-right pt-6 lg:pt-0">
          <!-- Greeting Pill -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5   text-white text-sm md:text-base font-medium mb-6 shadow-sm">
            <span>حياك في جولد استور</span>
            <span class="text-lg">👋</span>
          </div>

          <!-- Headline -->
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-white leading-[1.2] tracking-normal mb-6">
            تألقي بأجمل <span class="text-[#F3C650] inline-block font-black">المجوهرات </span>
            <br class="hidden sm:block" />
           المصممه لتليق بذوقك الرفيع 
          </h1>

          <!-- Subtitle -->
          <p class="text-white/80 text-lg md:text-xl font-normal leading-relaxed max-w-xl mb-8">
            مجوهرات فاخرة بتصاميم راقية تليق بذوقك وتكمل أناقتك في كل لحظة
          </p>

          <!-- CTA Button -->
          <div>
            <a
              href="#products"
              class="inline-flex items-center gap-3 px-9 py-4 bg-[#F5C445] hover:bg-[#E2B234] text-gray-950 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
            >
              <span>تسوق الآن</span>
              <span class="text-xl">←</span>
            </a>
          </div>
           <div class="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full mt-6" dir="rtl">
  

  <div class="flex -space-x-1.5 space-x-reverse">
    <img src="/one.jpg" class="w-7 h-7 rounded-full border-2 border-yellow-400 object-cover" />
    <img src="/two.jpg" class="w-7 h-7 rounded-full border-2 border-yellow-400 object-cover" />
    <img src="/one.jpg" class="w-7 h-7 rounded-full border-2 border-yellow-400 object-cover" />
    <img src="/three.jpg" class="w-7 h-7 rounded-full border-2 border-yellow-400 object-cover" />
  </div>
  <span class="text-white text-sm font-medium">
    اختاري أكثر من <b>50,000</b> عميلة سعودية
  </span>
</div>
         </div>
      </div>
    </section>

      
    <section class="py-20 bg-[#F8F2EC]">
  <div class="max-w-7xl mx-auto px-6">

    <!-- Heading -->
    <div class=" mb-14">
      <span
        class="inline-block bg-[#F3C650] text-white text-sm px-4 py-1 rounded-full mb-4">
        الأقسام
      </span>

      <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900">
        الأقسام الرئيسية
      </h2>

      <p class="mt-4 text-gray-600 text-lg">
        اكتشفي مجموعتنا المتنوعة من المجوهرات المصممة لتناسب جميع الأذواق
        والمناسبات.
      </p>
    </div>

    <!-- Categories -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

      <!-- Card 1 -->
      <NuxtLink to="/khawatem" class="group cursor-pointer text-center block"> 
        <div class="bg-white rounded-[32px] overflow-hidden border border-gray-200 transition-all ">
          <img
            src="/diamond-ring.jpg"
            alt="خواتم"
            class="w-full h-60 object-cover  duration-300 ">
        </div>

        <h3 class="mt-5 text-2xl font-bold text-gray-800 ">
          خواتم
        </h3>
      </NuxtLink>

      <!-- Card 2 -->
      <NuxtLink to="/" class="group cursor-pointer text-center block">
        <div class="bg-white rounded-[32px] overflow-hidden border border-gray-200 transition-all ">
          <img
            src="/numone.png"
            alt="مخصصة"
            class="w-full h-60 object-cover  duration-300 ">
        </div>

        <h3 class="mt-5 text-2xl font-bold text-gray-800 ">
          مخصصة
        </h3>
      </NuxtLink>

      <!-- Card 3 -->
      <NuxtLink to="/" class="group cursor-pointer text-center block">
        <div class="bg-white rounded-[32px] overflow-hidden border border-gray-200 transition-all ">
          <img
            src="/diamond-ring.jpg"
            alt="سلاسل"
            class="w-full h-60 object-cover  duration-300 ">
        </div>

        <h3 class="mt-5 text-2xl font-bold text-gray-800 ">
          سلاسل
        </h3>
      </NuxtLink>

      <!-- Card 4 -->
      <NuxtLink to="/" class="group cursor-pointer text-center block">
        <div class="bg-white rounded-[32px] overflow-hidden border border-gray-200  duration-300 ">
          <img
            src="/diamond-ring.jpg"
            alt="أقراط"
            class="w-full h-60 object-cover  duration-300 ">
        </div>

        <h3 class="mt-5 text-2xl font-bold text-gray-800 ">
          أقراط
        </h3>
      </NuxtLink>

      <!-- Card 5 -->
      <NuxtLink to="/khawatem" class="group cursor-pointer text-center block">
        <div class="bg-white rounded-[32px] overflow-hidden border border-gray-200 ">
          <img
            src="/diamond-ring.jpg"
            alt="خواتم"
            class="w-full h-60 object-cover  duration-300 ">
        </div>

        <h3 class="mt-5 text-2xl font-bold text-gray-800  ">
          خواتم
        </h3>
      </NuxtLink>

    </div>

  </div>
</section>

    <!-- 3. DISCOUNT / OFFER BANNER -->
    <section class="py-12 md:py-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
  <div class="relative rounded-[36px] md:rounded-[44px] bg-[#0A1124] overflow-hidden shadow-2xl border border-white/10 min-h-[360px] md:min-h-[400px]">

    <!-- Left Side: Jewelry Image -->
    <div class="w-full lg:w-1/2 h-72 lg:h-full absolute left-0 top-0 bottom-0 pointer-events-none overflow-hidden">
      <img
        src="/pass.png"
        alt="مجوهرات فاخرة"
        class="w-full h-full object-cover object-left opacity-90 scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A1124]/75 to-[#0A1124]"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1124]/50 to-[#0A1124] lg:hidden"></div>
    </div>

    <!-- Decorative SVG -->
    <div class="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 pointer-events-none opacity-30">
      <svg viewBox="0 0 300 300" fill="none" class="w-full h-full text-[#F3C650]">
        <path d="M40 0 C110 80, 210 120, 300 300" stroke="currentColor" stroke-width="1.2" fill="none"/>
        <path d="M70 0 C130 80, 220 130, 300 270" stroke="currentColor" stroke-width="1.2" fill="none"/>
        <path d="M100 0 C150 80, 230 140, 300 240" stroke="currentColor" stroke-width="1.2" fill="none"/>
        <path d="M130 0 C170 80, 240 150, 300 210" stroke="currentColor" stroke-width="1.2" fill="none"/>
        <path d="M160 0 C190 80, 250 160, 300 180" stroke="currentColor" stroke-width="1.2" fill="none"/>
        <path d="M190 0 C210 80, 260 170, 300 150" stroke="currentColor" stroke-width="1.2" fill="none"/>
        <path d="M220 0 C230 80, 270 180, 300 120" stroke="currentColor" stroke-width="1.2" fill="none"/>
      </svg>
    </div>

    <!-- Content: مثبت على اليمين دايمًا -->
    <div class="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 z-10 w-full lg:w-3/5 px-6 md:px-14 py-10 md:py-14 text-center lg:text-right flex flex-col items-center lg:items-end justify-center">
      <h2 class="text-3xl sm:text-4xl md:text-[46px] font-black text-white leading-tight md:leading-[1.25] mb-4 tracking-tight">
        خصومات خاصة على أحدث التصاميم
      </h2>

      <p class="text-white/80 text-base md:text-lg font-normal leading-relaxed max-w-xl mb-8">
        استمتعي بتجربة تسوّق راقية واكتشفي قطع مجوهرات تضيف لمسة فاخرة لإطلالتك.
      </p>

      <div>
        
         <a href="#products"
          class="inline-flex items-center gap-3 px-8 py-3.5 bg-[#F7C74C] hover:bg-[#E5B53D] text-gray-950 font-bold text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>اكتشف العروض</span>
          <span class="text-lg">←</span>
        </a>
      </div>
    </div>

  </div>
</section>

    <!-- 4. FEATURED PRODUCTS GRID -->
    <!-- <section id="products" class="py-16 md:py-24 bg-stone-100/70 px-6 md:px-12 border-y border-stone-200">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span class="text-[#D4A017] font-bold text-sm tracking-widest uppercase block mb-2">المميزة والمصممة بحب</span>
            <h2 class="text-3xl md:text-5xl font-extrabold text-gray-900">أحدث المنتجات الفاخرة</h2>
          </div>
          <a href="#" class="mt-4 md:mt-0 text-[#D4A017] font-bold hover:text-amber-600 transition flex items-center gap-2 text-lg">
            <span>عرض كل المنتجات</span>
            <span>←</span>
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          

          <div class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-stone-200/80">
            <div class="relative bg-[#F4EFEA] h-72 flex items-center justify-center p-6 overflow-hidden">
              <span class="absolute top-4 right-4 bg-[#F3C650] text-gray-950 font-bold text-xs px-3 py-1 rounded-full z-10 shadow-sm">ذهب عيار 21</span>
              <button class="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-700 hover:text-red-500 hover:bg-white transition shadow-sm z-10">
                <HeartIcon class="w-5 h-5" />
              </button>
              <svg class="w-48 h-48 text-[#D4A017] transform group-hover:scale-110 transition-transform duration-500" viewBox="0 0 200 200">
                <ellipse cx="100" cy="100" rx="65" ry="40" fill="none" stroke="currentColor" stroke-width="16"/>
                <circle cx="100" cy="60" r="14" fill="#E2F3FF" stroke="#7998B2" stroke-width="2"/>
              </svg>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span>خواتم ملكية</span>
                <span class="text-amber-500 font-semibold">★ 4.9 (48 تقييم)</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 group-hover:text-[#D4A017] transition mb-3">خاتم الماس زمردي فاخر</h3>
              <div class="flex items-center justify-between mt-4 pt-4 border-t border-stone-100">
                <div>
                  <span class="text-2xl font-black text-gray-900">4,850</span>
                  <span class="text-sm font-bold text-gray-500 mr-1">ر.س</span>
                </div>
                <button class="px-5 py-2.5 bg-gray-900 hover:bg-[#F3C650] hover:text-gray-950 text-white font-bold rounded-full transition-colors duration-300 flex items-center gap-2">
                  <ShoppingBagIcon class="w-4 h-4" />
                  <span>أضف للسلة</span>
                </button>
              </div>
            </div>
          </div>

          
          <div class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-stone-200/80">
            <div class="relative bg-[#F4EFEA] h-72 flex items-center justify-center p-6 overflow-hidden">
              <span class="absolute top-4 right-4 bg-emerald-700 text-white font-bold text-xs px-3 py-1 rounded-full z-10 shadow-sm">الأكثر مبيعاً</span>
              <button class="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-700 hover:text-red-500 hover:bg-white transition shadow-sm z-10">
                <HeartIcon class="w-5 h-5" />
              </button>
              <svg class="w-48 h-48 text-[#D4A017] transform group-hover:scale-110 transition-transform duration-500" viewBox="0 0 200 200">
                <path d="M50 100 Q100 40 150 100 T50 100" fill="none" stroke="currentColor" stroke-width="12"/>
                <circle cx="100" cy="130" r="16" fill="#E2F3FF" stroke="#7998B2" stroke-width="2"/>
              </svg>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span>قلادات وقائد</span>
                <span class="text-amber-500 font-semibold">★ 5.0 (92 تقييم)</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 group-hover:text-[#D4A017] transition mb-3">قلادة العقد الفريد</h3>
              <div class="flex items-center justify-between mt-4 pt-4 border-t border-stone-100">
                <div>
                  <span class="text-2xl font-black text-gray-900">8,200</span>
                  <span class="text-sm font-bold text-gray-500 mr-1">ر.س</span>
                </div>
                <button class="px-5 py-2.5 bg-gray-900 hover:bg-[#F3C650] hover:text-gray-950 text-white font-bold rounded-full transition-colors duration-300 flex items-center gap-2">
                  <ShoppingBagIcon class="w-4 h-4" />
                  <span>أضف للسلة</span>
                </button>
              </div>
            </div>
          </div>

          
          <div class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-stone-200/80">
            <div class="relative bg-[#F4EFEA] h-72 flex items-center justify-center p-6 overflow-hidden">
              <span class="absolute top-4 right-4 bg-amber-800 text-white font-bold text-xs px-3 py-1 rounded-full z-10 shadow-sm">تشكيلة خاصة</span>
              <button class="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-700 hover:text-red-500 hover:bg-white transition shadow-sm z-10">
                <HeartIcon class="w-5 h-5" />
              </button>
              <svg class="w-48 h-48 text-[#D4A017] transform group-hover:scale-110 transition-transform duration-500" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" stroke-width="14"/>
                <circle cx="100" cy="100" r="35" fill="none" stroke="#F3C650" stroke-width="6"/>
              </svg>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span>أساور وفاخرة</span>
                <span class="text-amber-500 font-semibold">★ 4.8 (34 تقييم)</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 group-hover:text-[#D4A017] transition mb-3">سوار الذهب المصقول</h3>
              <div class="flex items-center justify-between mt-4 pt-4 border-t border-stone-100">
                <div>
                  <span class="text-2xl font-black text-gray-900">3,650</span>
                  <span class="text-sm font-bold text-gray-500 mr-1">ر.س</span>
                </div>
                <button class="px-5 py-2.5 bg-gray-900 hover:bg-[#F3C650] hover:text-gray-950 text-white font-bold rounded-full transition-colors duration-300 flex items-center gap-2">
                  <ShoppingBagIcon class="w-4 h-4" />
                  <span>أضف للسلة</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- <ProductsSection /> -->
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

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8" dir="rtl">
  <div v-for="item in products" :key="item.id" class="bg-[#FBF3ED] rounded-[30px] shadow-sm hover:shadow-md duration-300 overflow-hidden">
    <NuxtLink to="/produ">
    <!-- Image Area -->
    <div class="relative ">
      <!-- Rating@ Badge -->
      <span class="absolute top-4 right-4 bg-white rounded-full px-2.5 py-1 text-xs font-bold shadow-sm flex items-center gap-1">
        <span class="text-[#F7C74C]">★</span>
        <span>{{ item.rate }}</span>
      </span>

      <img :src="item.image" class="h-56 w-full object-cover block" />
    </div>

    <!-- Details -->
    <div class="px-5 pb-5 pt-2">
      <!-- Store -->
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
            <!-- <img :src="item.storeLogo" alt="" class="w-full h-full object-cover" /> -->
          </div>
          <span class="text-xs text-gray-500">{{ item.store }}</span>
          
        </div>
        <div class="w-7 h-7 rounded-full bg-[#F7C74C]/20 flex items-center justify-center">
          <span class="text-xs">🔗</span>
        </div>
      </div>

      <!-- Name -->
      <h3 class="text-base font-bold text-gray-900 mb-2 leading-snug text-right">
        {{ item.name }}
      </h3>

      <!-- Price -->
      <p class="text-xl font-black text-gray-900 mb-4 text-right">
        <span class="text-sm">﷼</span>{{ item.price }}
      </p>

      <!-- Actions -->
      <div class="flex items-center gap-2">
        <button class="flex-1 bg-[#F7C74C] hover:bg-[#E5B53D] text-gray-950 text-sm font-bold py-3 rounded-full transition-colors">
          أضف للسلة
        </button>
        <button class="w-11 h-11 flex-shrink-0 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
          <span class="text-gray-400 text-2xl">♡</span>
        </button>
      </div>
    </div>
    </NuxtLink>
  </div>
</div>
  </div>
</section>

<section class="py-12 md:py-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto" dir="rtl">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

    <!-- العمود اليمين: كارتين فوق بعض -->
    <div class="flex flex-col gap-6">

      <!-- كارت يمين 1 -->
      <NuxtLink to="/offers" class="block">
        <div class="relative rounded-[32px] overflow-hidden min-h-[280px] flex flex-col justify-end px-8 md:px-10 py-8 bg-[#0A1124] group cursor-pointer">
          <img
            src="/diamond-ring.jpg"
            alt="أقراط فاخرة"
            class="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0A1124] via-[#0A1124]/60 to-transparent"></div>
          <div class="relative z-10 text-right">
            <h3 class="text-white text-2xl font-bold mb-3">✨ لأن الأناقة تبدأ من التفاصيل</h3>
            <p class="text-white/80 text-sm mb-4 max-w-md ms-auto">
              اكتشفي تشكيلة من المجوهرات الفاخرة المصممة بعناية لتمنحك إطلالة راقية تليق بكل مناسبة
            </p>
            <span class="inline-flex items-center gap-2 text-amber-300 font-semibold group-hover:text-[#F3C650] transition">
              <span>اكتشف العروض</span>
              <span>←</span>
            </span>
          </div>
        </div>
      </NuxtLink>

      <!-- كارت يمين 2 -->
      <NuxtLink to="/offers" class="block">
        <div class="relative rounded-[32px] overflow-hidden min-h-[280px] flex flex-col justify-end px-8 md:px-10 py-8 bg-[#0A1124] group cursor-pointer">
          <img
            src="/diamond-ring.jpg"
            alt="خاتم فاخر"
            class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0A1124] via-[#0A1124]/60 to-transparent"></div>
          <div class="relative z-10 text-right">
            <h3 class="text-white text-2xl font-bold mb-3">حيث تلتقي الفخامة بالأناقة</h3>
            <p class="text-white/80 text-sm mb-4 max-w-md ms-auto">
              تسوّقي أحدث تصاميم المجوهرات العصرية بلمسات راقية وجودة عالية تمنحك حضورًا مميزًا بكل ثقة.
            </p>
            <span class="inline-flex items-center gap-2 text-amber-300 font-semibold group-hover:text-[#F3C650] transition">
              <span>اكتشف العروض</span>
              <span>←</span>
            </span>
          </div>
        </div>
      </NuxtLink>

    </div>

    <!-- العمود الشمال: كارت واحد بنفس ارتفاع الاتنين مجمعين -->
    <NuxtLink to="/offers" class="block h-full">
      <div class="relative rounded-[32px] overflow-hidden min-h-[280px] h-full group cursor-pointer">
        <img
          src="/diamond-ring.jpg"
          alt="خاتم مجوهرات"
          class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <!-- تدرج غامق من فوق لوضوح النص -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>

        <div class="relative z-10 text-right px-6 md:px-8 py-6 md:py-8">
          <h3 class="text-white text-xl md:text-2xl font-bold mb-3">✨ لأن الأناقة تبدأ من التفاصيل</h3>
          <p class="text-white/90 text-sm mb-4 max-w-md ms-auto">
            اكتشفي تشكيلة من المجوهرات الفاخرة المصممة بعناية لتمنحك إطلالة راقية تليق بكل مناسبة
          </p>
          <span class="inline-flex items-center gap-2 text-amber-300 font-semibold group-hover:text-[#F3C650] transition">
            <span>اكتشف العروض</span>
            <span>←</span>
          </span>
        </div>
      </div>
    </NuxtLink>

  </div>
</section>

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
        <div class="relative ">
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
<section class="py-12 md:py-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto" dir="rtl">
  <div class="relative rounded-[36px] md:rounded-[44px] bg-[#0A1124] overflow-hidden shadow-2xl border border-white/10 flex flex-col lg:flex-row items-center justify-end min-h-[360px] md:min-h-[400px]">
    
    <!-- Left Side: Jewelry Image -->
    <div class="w-full lg:w-1/2 h-72 lg:h-full absolute left-0 top-0 bottom-0 pointer-events-none overflow-hidden">
      <img
        src="/passs.jpeg"
        alt="مجوهرات فاخرة"
        class="w-full h-full object-cover object-left opacity-90 scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A1124]/75 to-[#0A1124]"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1124]/50 to-[#0A1124] lg:hidden"></div>
    </div>

    <!-- Decorative SVG -->
    <div class="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 pointer-events-none opacity-30">
      <svg viewBox="0 0 300 300" fill="none" class="w-full h-full text-[#F3C650]">
        <path d="M40 0 C110 80, 210 120, 300 300" stroke="currentColor" stroke-width="1.2" fill="none"/>
        <path d="M70 0 C130 80, 220 130, 300 270" stroke="currentColor" stroke-width="1.2" fill="none"/>
        <path d="M100 0 C150 80, 230 140, 300 240" stroke="currentColor" stroke-width="1.2" fill="none"/>
        <path d="M130 0 C170 80, 240 150, 300 210" stroke="currentColor" stroke-width="1.2" fill="none"/>
        <path d="M160 0 C190 80, 250 160, 300 180" stroke="currentColor" stroke-width="1.2" fill="none"/>
        <path d="M190 0 C210 80, 260 170, 300 150" stroke="currentColor" stroke-width="1.2" fill="none"/>
        <path d="M220 0 C230 80, 270 180, 300 120" stroke="currentColor" stroke-width="1.2" fill="none"/>
      </svg>
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full lg:w-3/5 ml-auto px-6 md:px-14 py-10 md:py-14 text-right flex flex-col items-end justify-end">
      <h2 class="text-3xl sm:text-4xl md:text-[46px] font-black text-white leading-tight md:leading-[1.25] mb-4 tracking-tight">
        عروض خاصه بخصم 20%
      </h2>

      <p class="text-white/80 text-base md:text-lg font-normal leading-relaxed max-w-xl mb-8">
        اكتشفي اجمل المجوهرات العصريه بلمسات فاخره وجوده عاليه باسعار لا تفوت
      </p>

      <div>
        <a
          href="#products"
          class="inline-flex items-center gap-3 px-8 py-3.5 bg-[#F7C74C] hover:bg-[#E5B53D] text-gray-950 font-bold text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>اكتشف العروض</span>
          <span class="text-lg">←</span>
        </a>
      </div>
    </div>

  </div>
</section>



    <!-- 4. FOOTER SECTION -->
   <footer class="bg-[#FBF3ED] text-gray-900 pt-20 pb-8 " dir="rtl">
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
import { HeartIcon, ShoppingBagIcon } from "@heroicons/vue/24/outline";

useHead({
  title: 'جولد استور - مجوهرات فاخرة',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap'
    }
  ]
})
const products=[
{id:1,name:"خاتم الألماس",store:"دار الذهب",price:"4,850",rate:"4.2",image:"/diamond-ring.jpg"},
{id:2,name:"قلادة ذهب",store:"دار الذهب",price:"8,200",rate:"4.8",image:"/necklace.png"},
{id:3,name:"سوار فاخر",store:"دار الذهب",price:"3,650",rate:"4.5",image:"/bracelet.png"},
{id:4,name:"حلق مميز",store:"دار الذهب",price:"2,950",rate:"4.7",image:"/earring.png"},
{id:5,name:"خاتم ذهب",store:"دار الذهب",price:"5,200",rate:"4.9",image:"/diamond-ring.jpg"},
{id:6,name:"قلادة ذهب",store:"دار الذهب",price:"6,800",rate:"4.6",image:"/necklace.png"},
{id:7,name:"سوار فاخر",store:"دار الذهب",price:"4,100",rate:"4.4",image:"/bracelet.png"},
{id:8,name:"حلق مميز",store:"دار الذهب",price:"3,750",rate:"4.3",image:"/earring.png"}
]


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

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(2deg); }
}
@keyframes floatDelayed {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-16px) rotate(-2deg); }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}
.animate-float-delayed {
  animation: floatDelayed 5s ease-in-out infinite 1s;
}
.font-cairo {
  font-family: 'Cairo', sans-serif;
}
</style>
