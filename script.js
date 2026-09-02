const productCatalog = [
  {
    id: 1,
    name: 'Signature No. 01',
    image: 'pexels-abigailrivm-31842234.jpg',
    price: 890,
    originalPrice: 1040,
    discountPercent: 15,
    gender: 'unisex',
    type: 'خشبي',
    occasion: 'سهرة',
    mood: 'فاخرة',
    strength: 'قوي',
    skinWeight: 'ثقيل',
    notes: ['عود', 'مِسْك', 'بخور'],
    description: 'رائحة خشبية دافئة مع لمسات من المسك والعود لتمنحك حضوراً قويًا في كل مناسبة.',
    tag: 'خشبي',
    collection: 'Amber',
    highCopy: true,
    shortLabel: 'Signature'
  },
  {
    id: 2,
    name: 'Velvet No. 02',
    image: 'pexels-akki-15348377.jpg',
    price: 760,
    originalPrice: 910,
    discountPercent: 16,
    gender: 'women',
    type: 'زهري',
    occasion: 'مناسبة خاصة',
    mood: 'هادئة',
    strength: 'متوسط',
    skinWeight: 'خفيف',
    notes: ['ورد', 'مشمش', 'فانيليا'],
    description: 'مزيج زهري ناعم يفتح جمالية عصرية وتناغم ناعم في كل لحظة.',
    tag: 'زهري',
    collection: 'Bloom',
    highCopy: true,
    shortLabel: 'Velvet'
  },
  {
    id: 3,
    name: 'Oud No. 03',
    image: 'pexels-alesiakozik-7796498.jpg',
    price: 980,
    originalPrice: 1240,
    discountPercent: 21,
    gender: 'men',
    type: 'شرقي',
    occasion: 'العمل',
    mood: 'قوية',
    strength: 'قوي',
    notes: ['عود', 'ليمون', 'دخان'],
    description: 'رائحة شرقية غنية تجعل من كل يوم عملية كتجربة فاخرة ومتماسكة.',
    tag: 'شرقي',
    collection: 'Oud',
    highCopy: true,
    shortLabel: 'Oud'
  },
  {
    id: 4,
    name: 'Noir No. 04',
    image: 'pexels-alkady-7850600.jpg',
    price: 870,
    originalPrice: 980,
    discountPercent: 11,
    gender: 'men',
    type: 'خشبي',
    occasion: 'سهرة',
    mood: 'فاخرة',
    strength: 'قوي',
    notes: ['خشب', 'بنزوين', 'مسك'],
    description: 'لمسة داكنة من الخشب والغامق، عطر أنيق يليق بمناسبات الليل.',
    tag: 'خشبي',
    collection: 'Noir',
    highCopy: true,
    shortLabel: 'Noir'
  },
  {
    id: 5,
    name: 'Amber No. 05',
    image: 'pexels-alokkd1-29801355.jpg',
    price: 910,
    originalPrice: 1080,
    discountPercent: 16,
    gender: 'unisex',
    type: 'شرقي',
    occasion: 'مناسبة خاصة',
    mood: 'فاخرة',
    strength: 'متوسط',
    notes: ['عنبر', 'عطر', 'بنفسجي'],
    description: 'عنبر دافئ فخم مع شذى خاص يعزز الثقة والهوية.',
    tag: 'شرقي',
    collection: 'Amber',
    shortLabel: 'Amber'
  },
  {
    id: 6,
    name: 'Bloom No. 06',
    image: 'pexels-alokkd1-35806939.jpg',
    price: 740,
    originalPrice: 900,
    discountPercent: 18,
    gender: 'women',
    type: 'زهري',
    occasion: 'يومي',
    mood: 'منعشة',
    strength: 'خفيف',
    notes: ['ورد', 'يوسفي', 'خزامى'],
    description: 'رائحة زهرية نضرة تمنحك دفءًا لطيفًا خلال اليوم.',
    tag: 'زهري',
    collection: 'Bloom',
    shortLabel: 'Bloom'
  },
  {
    id: 7,
    name: 'Saffron No. 07',
    image: 'pexels-anis-salmani-208342252-11711811.jpg',
    price: 930,
    originalPrice: 1120,
    discountPercent: 17,
    gender: 'unisex',
    type: 'شرقي',
    occasion: 'سهرة',
    mood: 'جذابة',
    strength: 'قوي',
    notes: ['زعفران', 'عود', 'مسك'],
    description: 'ملامح شرقية حارة تضيف tiq to your presence and lingers beautifully.',
    tag: 'شرقي',
    collection: 'Saffron',
    shortLabel: 'Saffron'
  },
  {
    id: 8,
    name: 'Cedar No. 08',
    image: 'pexels-bolarinwa-olasunkanmi-114406689-11705153.jpg',
    price: 800,
    originalPrice: 950,
    discountPercent: 16,
    gender: 'men',
    type: 'خشبي',
    occasion: 'العمل',
    mood: 'هادئة',
    strength: 'متوسط',
    notes: ['سدر', 'فاخر', 'تنوب'],
    description: 'متانة خشبية أنيقة مع حضور هادئ يمنحك طابعًا عمليًا وملمسًا فاخرًا.',
    tag: 'خشبي',
    collection: 'Cedar',
    shortLabel: 'Cedar'
  },
  {
    id: 9,
    name: 'Musk No. 09',
    image: 'pexels-cede-joey-2050570-15260901.jpg',
    price: 780,
    originalPrice: 930,
    discountPercent: 16,
    gender: 'women',
    type: 'مسكي',
    occasion: 'يومي',
    mood: 'هادئة',
    strength: 'خفيف',
    notes: ['مسك', 'برغموت', 'قرفة'],
    description: 'عطر مسكي رقيق يترك أثرًا لطيفاً مستمرًا في كل لحظة يومية.',
    tag: 'مسكي',
    collection: 'Musk',
    shortLabel: 'Musk'
  },
  {
    id: 10,
    name: 'Aura No. 10',
    image: 'pexels-felipepelaquim-1895015.jpg',
    price: 860,
    originalPrice: 1040,
    discountPercent: 17,
    gender: 'unisex',
    type: 'منعش',
    occasion: 'يومي',
    mood: 'منعشة',
    strength: 'خفيف',
    notes: ['ليمون', 'نيم', 'صنوبر'],
    description: 'منعش وقوي في نفس الوقت، يفتح الروح ويضيف حيوية في اليوم.',
    tag: 'منعش',
    collection: 'Aura',
    shortLabel: 'Aura'
  },
  {
    id: 11,
    name: 'Silk No. 11',
    image: 'pexels-jessbaileydesign-755992.jpg',
    price: 845,
    originalPrice: 1030,
    discountPercent: 18,
    gender: 'women',
    type: 'حلو',
    occasion: 'مناسبة خاصة',
    mood: 'فاخرة',
    strength: 'متوسط',
    notes: ['فانيليا', 'مِرْجان', 'موز'],
    description: 'حلاوة ناعمة مع لمسة أنثوية عميقة وممتدة على طول اليوم.',
    tag: 'حلو',
    collection: 'Silk',
    shortLabel: 'Silk'
  },
  {
    id: 12,
    name: 'Elan No. 12',
    image: 'pexels-karola-g-8361478.jpg',
    price: 920,
    originalPrice: 1120,
    discountPercent: 18,
    gender: 'unisex',
    type: 'خشبي',
    occasion: 'العمل',
    mood: 'قوية',
    strength: 'قوي',
    notes: ['أرز', 'بازيل', 'كافور'],
    description: 'رائحة متوازنة تجمع بين الطابع الخشبي والهواء الفاخر.',
    tag: 'خشبي',
    collection: 'Elan',
    shortLabel: 'Elan'
  },
  {
    id: 13,
    name: 'Solstice No. 13',
    image: 'pexels-kho-n-c-hoa-505433892-16125025.jpg',
    price: 770,
    gender: 'women',
    type: 'زهري',
    occasion: 'سهرة',
    mood: 'جذابة',
    strength: 'متوسط',
    notes: ['وردة', 'أفوكادو', 'مستكة'],
    description: 'مزيج زهري جذاب يضيف نضارة متحولة إلى كل ليلة.',
    tag: 'زهري',
    collection: 'Solstice',
    shortLabel: 'Solstice'
  },
  {
    id: 14,
    name: 'Rose No. 14',
    image: 'pexels-laurachouette-21547017.jpg',
    price: 810,
    gender: 'women',
    type: 'زهري',
    occasion: 'يومي',
    mood: 'هادئة',
    strength: 'خفيف',
    notes: ['وردة', 'رحيق', 'قرفة'],
    description: 'تجربة رقيقة تحمل عبير الوردة مع لمسات دافئة ومتناغمة.',
    tag: 'زهري',
    collection: 'Rose',
    shortLabel: 'Rose'
  }
];

const sizePreset = {
  1: [{ ml: 50, price: 890 }, { ml: 100, price: 1220 }],
  2: [{ ml: 50, price: 760 }, { ml: 100, price: 1040 }],
  3: [{ ml: 50, price: 980 }, { ml: 100, price: 1360 }],
  4: [{ ml: 50, price: 870 }, { ml: 100, price: 1180 }],
  5: [{ ml: 50, price: 910 }, { ml: 100, price: 1260 }],
  6: [{ ml: 50, price: 740 }, { ml: 100, price: 980 }],
  7: [{ ml: 50, price: 930 }, { ml: 100, price: 1290 }],
  8: [{ ml: 50, price: 800 }, { ml: 100, price: 1090 }],
  9: [{ ml: 50, price: 780 }, { ml: 100, price: 1060 }],
  10: [{ ml: 50, price: 860 }, { ml: 100, price: 1180 }],
  11: [{ ml: 50, price: 845 }, { ml: 100, price: 1140 }],
  12: [{ ml: 50, price: 920 }, { ml: 100, price: 1280 }],
  13: [{ ml: 50, price: 770 }, { ml: 100, price: 1040 }],
  14: [{ ml: 50, price: 810 }, { ml: 100, price: 1120 }]
};

function getProductSizes(product) {
  if (product.sizes && product.sizes.length) return product.sizes;
  return sizePreset[product.id] || [{ ml: 100, price: product.price }];
}

function getDefaultProductSize(product) {
  const sizes = getProductSizes(product);
  return sizes[0] || { ml: 100, price: product.price };
}

const state = {
  theme: localStorage.getItem('perfume-theme') || 'dark',
  lang: localStorage.getItem('perfume-lang') || 'ar',
  cart: JSON.parse(localStorage.getItem('perfume-cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('perfume-wishlist') || '[]'),
  compare: JSON.parse(localStorage.getItem('perfume-compare') || '[]'),
  activeFilter: 'all',
  currentSlide: 0,
  heroInterval: null,
  activePanel: null,
  finderAnswers: {},
  aiStep: 0,
  aiFormState: {},
  aiMessages: [],
  selectedSizes: {},
  productQuantities: {}
};

const siteKnowledge = {
  ar: {
    storeName: 'اسم متجر العطور',
    owner: '.................',
    phone: '010XXXXXXXX',
    email: 'perfume@example.com',
    address: 'القاهرة، مصر',
    support: 'الدعم متاح عبر الهاتف أو البريد الإلكتروني، ويمكنك أيضًا استخدام قسم المساعدة في أسفل الموقع.',
    hours: 'من الأحد إلى الخميس، من 10:00 صباحًا إلى 10:00 مساءً.',
    booking: 'يمكنك حجز زيارة أو استلام العينة من قسم الحجز في الموقع.',
    location: 'المتجر موجود في القاهرة، مصر، ويمكنك العثور عليه من قسم الموقع في الصفحة.',
    sections: 'الموقع يتضمن قسم الرئيسية، المجموعة، العروض، اكتشاف العطر، النسخ الفاخرة، آراء العملاء، الموقع، الحجز، والمساعدة.',
    products: 'المتجر يحتوي على عطور رجالية، نسائية، للجنسين، وعروض خاصة، مع معلومات المقاسات والأسعار لكل منتج.',
    contact: 'للاستفسارات يمكن التواصل عبر الهاتف 010XXXXXXXX أو البريد perfume@example.com.',
    description: 'هذا هو متجر تجريبي فاخر للمواد العطرية، يضم مجموعة من العطور المصممة للرجال والنساء وللجنسين مع أسعار وعينات ومعلومات حسب المقاسات.',
    website: 'الموقع هو متجر عطور إلكتروني احترافي يعمل بالكامل في الواجهة الأمامية باستخدام HTML، CSS، وJavaScript فقط، بدون أي نظام خلفي أو API.'
  },
  en: {
    storeName: 'اسم متجر العطور',
    owner: '.................',
    phone: '010XXXXXXXX',
    email: 'perfume@example.com',
    address: 'Cairo, Egypt',
    support: 'Support is available by phone or email, and you can also use the Help section at the bottom of the site.',
    hours: 'Sunday to Thursday, from 10:00 AM to 10:00 PM.',
    booking: 'You can reserve a visit or a pickup through the booking section on the page.',
    location: 'The store is located in Cairo, Egypt and can be found via the location section.',
    sections: 'The website includes Home, Collection, Offers, Discover Your Fragrance, High-Copy, Customer Reviews, Location, Booking, and Help sections.',
    products: 'The shop includes mens, womens, unisex, and exclusive offers with size and price details for each product.',
    contact: 'For inquiries, contact us by phone at 010XXXXXXXX or by email at perfume@example.com.',
    description: 'This is a premium demo fragrance store featuring a luxury perfume collection for men, women, and unisex customers with sizes, pricing, and product details.',
    website: 'This storefront is a front-end-only perfume e-commerce demo built with HTML, CSS, and JavaScript, with no backend or API required.'
  }
};

const translations = {
  ar: {
    brandName: 'اسم متجر العطور',
    navHome: 'الرئيسية',
    navCollection: 'المجموعة',
    navMen: 'الرجال',
    navWomen: 'النساء',
    navUnisex: 'للجنسين',
    navDiscover: 'اكتشف عطرك',
    navOffers: 'العروض',
    navStory: 'قصتنا',
    navHelp: 'المساعدة',
    searchAria: 'بحث',
    wishlistAria: 'المفضلة',
    cartAria: 'العربة',
    aiAria: 'مساعد العطور',
    themeLight: 'فاتح',
    themeDark: 'داكن',
    heroTag: 'عطر فخم جديد',
    heroTitle: 'العطر ليس مجرد رائحة.<br />إنه حضور.',
    heroText: 'اكتشف مجموعة من العطور المصممة لتمنح كل لحظة طابعها الخاص.',
    heroPrimaryBtn: 'اكتشف المجموعة',
    heroSecondaryBtn: 'اكتشف عطرك',
    heroTag2: 'مزيج من الزهور والعود',
    heroTitle2: 'رائحة تُبقيك<br />في دائرة الضوء.',
    heroText2: 'عطور متوازنة بين الهدوء والدفء، مصممة للسهرات واللحظات الراقية.',
    heroTag3: 'ذوق فاخر',
    heroTitle3: 'تجربة عطرية<br />تتجاوز الذاكرة.',
    heroText3: 'أصالة المكونات، وأناقة الحزمة، وثبات يرافقك من أول لمسة إلى آخر مشهد.',
    collectionEyebrow: 'مجموعتنا',
    collectionTitle: 'مجموعة عطور فاخرة',
    collectAmberTag: 'أمبري',
    collectAmberTitle: 'أصالة النار والدفء',
    collectFloralTag: 'زهري',
    collectFloralTitle: 'زهور ناعمة وشفافة',
    collectWoodTag: 'خشبي',
    collectWoodTitle: 'أرضية متينة وقوية',
    viewMore: 'استعرض',
    menSectionEyebrow: 'العطور الرجالية',
    menSectionTitle: 'عطور رجالية فاخرة',
    womenSectionEyebrow: 'العطور النسائية',
    womenSectionTitle: 'عطور نسائية أنيقة',
    unisexSectionEyebrow: 'للجنسين',
    unisexSectionTitle: 'عطور للجنسين',
    offersSectionEyebrow: 'العروض',
    offersSectionTitle: 'عروض خاصة حصرية',
    viewAll: 'عرض الكل',
    catalogEyebrow: 'مميزتنا',
    catalogTitle: 'اكتشف العطور المميزة',
    filterAll: 'الكل',
    filterMen: 'رجالي',
    filterWomen: 'نسائي',
    filterUnisex: 'للجنسين',
    finderEyebrow: 'اكتشف عطرك',
    finderTitle: 'ملفك العطري',
    finderQ1: 'ما نوع العطر الذي تفضله؟',
    finderQ2: 'لمن العطر؟',
    finderQ3: 'ما المناسبة؟',
    finderQ4: 'ما الأجواء التي تفضلها؟',
    finderQ5: 'ما مستوى الثبات؟',
    optionFresh: 'منعش',
    optionWoody: 'خشبي',
    optionOriental: 'شرقي',
    optionFloral: 'زهري',
    optionSweet: 'حلو',
    optionMusk: 'مسكي',
    optionMen: 'رجالي',
    optionWomen: 'نسائي',
    optionUnisex: 'للجنسين',
    optionDaily: 'يومي',
    optionWork: 'العمل',
    optionSpecial: 'مناسبة خاصة',
    optionEvening: 'سهرة',
    optionCalm: 'هادئة',
    optionVivid: 'جذابة',
    optionLuxury: 'فاخرة',
    optionBold: 'قوية',
    optionFreshMood: 'منعشة',
    optionLight: 'خفيف',
    optionMedium: 'متوسط',
    optionStrong: 'قوي',
    finderResultEyebrow: 'ملفك العطري',
    storyEyebrow: 'قصتنا',
    storyTitle: 'صنع نبرة خاصة لك.',
    storyText: 'نصمم العطور بعناية لتتحدث بلغة مميزة، تجمع بين الوداعة والهيبة، وبين الروائح الطبيعية والأنسجة الفاخرة. كل زجاجة مصممة لتكون جزءًا من يومك ودخلك.',
    storyPoint1: 'مكونات مختارة بعناية',
    storyPoint2: 'تجهيزات فاخرة ومحددة',
    storyPoint3: 'تجربة شخصية دقيقة',
    reviewsEyebrow: 'آراء العملاء',
    reviewsTitle: 'تجارب تليق بالانتظار',
    reviewerName: 'عميل / .................',
    reviewerMeta: 'مشتري من المجموعة',
    helpEyebrow: 'الدعم',
    helpTitle: 'تحتاج إلى نصيحة؟',
    helpText: 'نرشدك في اختيار العطر المناسب للمناسبة، المذاق المفضل، ومستوى الثبات الذي تفضله.',
    helpButton: 'اسأل مساعد العطور',
    footerText: 'مزيج من الفخامة والهوية، مصمم ليبقى معك.',
    footerAbout: 'من نحن',
    footerExplore: 'اكتشف',
    footerContact: 'تواصل',
    cartTitle: 'عربة التسوق',
    subtotalText: 'المجموع',
    checkoutBtn: 'الدفع',
    wishlistTitle: 'المفضلة',
    compareTitle: 'مقارنة المنتجات',
    searchTitle: 'البحث',
    searchPlaceholder: 'ابحث عن عطر، رائحة أو نوع',
    checkoutTitle: 'إتمام الطلب',
    checkoutName: 'الاسم',
    checkoutPhone: 'الهاتف',
    checkoutEmail: 'البريد',
    checkoutAddress: 'العنوان',
    submitOrder: 'تأكيد الطلب',
    aiTitleEyebrow: 'مساعد ذكي',
    aiTitle: 'مساعد اختيار العطر',
    aiQuestion1: 'ما نوع العطر الذي تفضله؟',
    aiQuestion2: 'لمن العطر؟',
    aiQuestion3: 'ما المناسبة؟',
    aiQuestion4: 'ما الأجواء التي تفضلها؟',
    aiQuestion5: 'ما مستوى الثبات؟',
    aiInputPlaceholder: 'اكتب سؤالاً عن العطور',
    floatingAiBtn: 'اسأل مساعد العطور',
    addToCart: 'أضف إلى السلة',
    viewProduct: 'عرض المنتج',
    compare: 'قارن',
    wishlist: 'المفضلة',
    remove: 'حذف',
    recommendation: 'مناسب لك لأنه',
    emptyCart: 'عربة التسوق فارغة',
    emptyWishlist: 'لا توجد عناصر في المفضلة',
    noResults: 'لا توجد نتائج بحث',
    pending: 'يكتب الآن...',
    englishLabel: 'English',
    arabicLabel: 'العربية',
    productPriceLabel: 'السعر',
    price: 'جنيه',
    aiIntro: 'أعرف معلومات المتجر والعنوان والهاتف والبريد والوظائف الأساسية في الموقع، وأجيب فقط باستخدام بيانات المتجر. اسألني عن العطر أو الموقع أو الحجز أو المساعدة.',
    noInfo: 'لا أملك معلومات كافية عن ذلك داخل المتجر.'
  },
  en: {
    brandName: 'The Perfume House',
    navHome: 'Home',
    navCollection: 'Collection',
    navMen: 'Men',
    navWomen: 'Women',
    navUnisex: 'Unisex',
    navDiscover: 'Discover Your Scent',
    navOffers: 'Offers',
    navStory: 'Our Story',
    navHelp: 'Help',
    searchAria: 'Search',
    wishlistAria: 'Wishlist',
    cartAria: 'Cart',
    aiAria: 'Fragrance assistant',
    themeLight: 'Light',
    themeDark: 'Dark',
    heroTag: 'New luxury scent',
    heroTitle: 'Perfume is not just a scent.<br />It is presence.',
    heroText: 'Discover a collection designed to give every moment its own signature.',
    heroPrimaryBtn: 'Explore the collection',
    heroSecondaryBtn: 'Discover your scent',
    heroTag2: 'Floral and oud blend',
    heroTitle2: 'A scent that keeps you<br />in the spotlight.',
    heroText2: 'Balanced blends between calm and warmth, created for elegant evenings and refined moments.',
    heroTag3: 'Luxury taste',
    heroTitle3: 'A fragrance experience<br />beyond memory.',
    heroText3: 'Authentic ingredients, elegant packaging, and a lasting trail from first touch to final scene.',
    collectionEyebrow: 'Our Collection',
    collectionTitle: 'Luxury fragrance collection',
    collectAmberTag: 'Amber',
    collectAmberTitle: 'Warmth and fire',
    collectFloralTag: 'Floral',
    collectFloralTitle: 'Soft floral notes',
    collectWoodTag: 'Woody',
    collectWoodTitle: 'Structured and bold',
    viewMore: 'View',
    menSectionEyebrow: 'Men fragrances',
    menSectionTitle: 'Luxury men scents',
    womenSectionEyebrow: 'Women fragrances',
    womenSectionTitle: 'Elegant women scents',
    unisexSectionEyebrow: 'Unisex',
    unisexSectionTitle: 'Signature unisex fragrances',
    offersSectionEyebrow: 'Offers',
    offersSectionTitle: 'Exclusive special offers',
    viewAll: 'View all',
    catalogEyebrow: 'Our Favourites',
    catalogTitle: 'Explore signature scents',
    filterAll: 'All',
    filterMen: 'Men',
    filterWomen: 'Women',
    filterUnisex: 'Unisex',
    finderEyebrow: 'Discover your scent',
    finderTitle: 'Your fragrance profile',
    finderQ1: 'What fragrance family do you prefer?',
    finderQ2: 'Who is it for?',
    finderQ3: 'What occasion?',
    finderQ4: 'What mood do you prefer?',
    finderQ5: 'What strength level?',
    optionFresh: 'Fresh',
    optionWoody: 'Woody',
    optionOriental: 'Oriental',
    optionFloral: 'Floral',
    optionSweet: 'Sweet',
    optionMusk: 'Musk',
    optionMen: 'Men',
    optionWomen: 'Women',
    optionUnisex: 'Unisex',
    optionDaily: 'Daily',
    optionWork: 'Work',
    optionSpecial: 'Special occasion',
    optionEvening: 'Evening',
    optionCalm: 'Calm',
    optionVivid: 'Pleasing',
    optionLuxury: 'Luxury',
    optionBold: 'Bold',
    optionFreshMood: 'Fresh',
    optionLight: 'Light',
    optionMedium: 'Medium',
    optionStrong: 'Strong',
    finderResultEyebrow: 'Your fragrance profile',
    storyEyebrow: 'Our Story',
    storyTitle: 'Crafting a signature for you.',
    storyText: 'We carefully design perfumes that speak in a distinctive language, blending softness with presence and natural notes with refined textures. Every bottle is made to become part of your daily identity.',
    storyPoint1: 'Meticulously selected ingredients',
    storyPoint2: 'Refined luxury finishes',
    storyPoint3: 'A precise personal experience',
    reviewsEyebrow: 'Customer reviews',
    reviewsTitle: 'Experiences worth waiting for',
    reviewerName: 'Customer / .................',
    reviewerMeta: 'Repeat buyer',
    helpEyebrow: 'Support',
    helpTitle: 'Need guidance?',
    helpText: 'We help you choose the right scent for the occasion, your preferred character, and the longevity you enjoy.',
    helpButton: 'Ask the fragrance assistant',
    footerText: 'A blend of elegance and character, designed to stay with you.',
    footerAbout: 'About us',
    footerExplore: 'Explore',
    footerContact: 'Contact',
    cartTitle: 'Cart',
    subtotalText: 'Subtotal',
    checkoutBtn: 'Checkout',
    wishlistTitle: 'Wishlist',
    compareTitle: 'Compare items',
    searchTitle: 'Search',
    searchPlaceholder: 'Search for a scent, note or style',
    checkoutTitle: 'Complete your order',
    checkoutName: 'Name',
    checkoutPhone: 'Phone',
    checkoutEmail: 'Email',
    checkoutAddress: 'Address',
    submitOrder: 'Confirm order',
    aiTitleEyebrow: 'Smart assistant',
    aiTitle: 'Fragrance advisor',
    aiQuestion1: 'What fragrance family do you prefer?',
    aiQuestion2: 'Who is the fragrance for?',
    aiQuestion3: 'What occasion?',
    aiQuestion4: 'What mood do you prefer?',
    aiQuestion5: 'What level of longevity?',
    aiInputPlaceholder: 'Ask about fragrances',
    floatingAiBtn: 'Ask the fragrance assistant',
    addToCart: 'Add to cart',
    viewProduct: 'View product',
    compare: 'Compare',
    wishlist: 'Wishlist',
    remove: 'Remove',
    recommendation: 'This suits you because',
    emptyCart: 'Your cart is empty',
    emptyWishlist: 'No items in wishlist',
    noResults: 'No search results',
    pending: 'Typing now...',
    englishLabel: 'English',
    arabicLabel: 'العربية',
    productPriceLabel: 'Price',
    price: 'EGP',
    aiIntro: 'I know the store information, address, phone, email, and key website sections, and I answer only using the store data. Ask me about fragrance type, location, booking, or help.',
    noInfo: 'I do not have enough information about that inside the store.'
  }
};

const ui = {
  body: document.body,
  themeToggle: document.querySelector('[data-theme-toggle]'),
  langToggle: document.querySelector('[data-lang-toggle]'),
  themeIcon: document.querySelector('.theme-icon'),
  themeText: document.querySelector('.theme-text'),
  productGrid: document.getElementById('productGrid'),
  menProducts: document.getElementById('menProducts'),
  womenProducts: document.getElementById('womenProducts'),
  unisexProducts: document.getElementById('unisexProducts'),
  offersProducts: document.getElementById('offersProducts'),
  highCopyProducts: document.getElementById('highCopyProducts'),
  cartItems: document.getElementById('cartItems'),
  wishlistItems: document.getElementById('wishlistItems'),
  compareGrid: document.getElementById('compareGrid'),
  cartTotal: document.getElementById('cartTotal'),
  searchResults: document.getElementById('searchResults'),
  searchInput: document.getElementById('searchInput'),
  productModalBody: document.getElementById('productModalBody'),
  profileSummary: document.getElementById('profileSummary'),
  matchedProducts: document.getElementById('matchedProducts'),
  mobileMenu: document.getElementById('mobileMenu'),
  backdrop: document.getElementById('backdrop'),
  aiPanel: document.getElementById('aiAssistant'),
  aiMessages: document.getElementById('aiMessages'),
  aiPromptForm: document.getElementById('aiPromptForm'),
  aiPromptInput: document.getElementById('aiPromptInput'),
  openAiButton: document.getElementById('openAiButton'),
  heroTrack: document.getElementById('heroTrack'),
  heroDots: Array.from(document.querySelectorAll('.dot')),
  navToggle: document.querySelector('.nav-toggle'),
  mobileNavLinks: document.querySelectorAll('.mobile-nav a')
};

function saveState() {
  localStorage.setItem('perfume-theme', state.theme);
  localStorage.setItem('perfume-lang', state.lang);
  localStorage.setItem('perfume-cart', JSON.stringify(state.cart));
  localStorage.setItem('perfume-wishlist', JSON.stringify(state.wishlist));
  localStorage.setItem('perfume-compare', JSON.stringify(state.compare));
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if (!badge) return;
  const totalItems = state.cart.reduce((sum, item) => sum + Number(item.qty || 0), 0);
  badge.textContent = String(totalItems);
}

function formatPrice(value) {
  return `${value.toLocaleString()} ${translations[state.lang].price}`;
}

function updateTheme() {
  const isDark = state.theme === 'dark';
  ui.body.classList.toggle('theme-light', !isDark);
  ui.body.classList.toggle('theme-dark', isDark);
  ui.themeIcon.textContent = isDark ? '☀' : '☾';
  ui.themeText.textContent = isDark ? translations[state.lang].themeLight : translations[state.lang].themeDark;
  ui.themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  saveState();
}

function updateLanguage() {
  const isArabic = state.lang === 'ar';
  document.documentElement.lang = state.lang;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  ui.body.setAttribute('data-rtl', isArabic ? 'true' : 'false');

  const langToggle = document.querySelector('[data-lang-toggle]');
  const currentLabel = langToggle?.querySelector('.lang-current');
  const altLabel = langToggle?.querySelector('.lang-alt');

  if (currentLabel && altLabel) {
    currentLabel.textContent = isArabic ? 'AR' : 'EN';
    altLabel.textContent = isArabic ? 'EN' : 'AR';
    currentLabel.classList.toggle('is-active', true);
    altLabel.classList.toggle('is-active', false);
  }

  if (langToggle) {
    langToggle.setAttribute('aria-label', isArabic ? 'Switch to English' : 'Switch to Arabic');
  }

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[state.lang][key]) {
      el.innerHTML = translations[state.lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[state.lang][key]) {
      el.placeholder = translations[state.lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria;
    if (translations[state.lang][key]) {
      el.setAttribute('aria-label', translations[state.lang][key]);
    }
  });

  renderProducts();
  renderCategorySections();
  renderCart();
  renderWishlist();
  renderCompare();
  renderSearchResults();
  updateTheme();
  updateFinderSteps();
  renderAiMessages();
}

function applyFilters() {
  const selected = state.activeFilter;
  document.querySelectorAll('.filter-chip').forEach((button) => {
    button.classList.toggle('active', button.dataset.filter === selected);
  });
  renderProducts();
}

function getActiveProducts() {
  return state.activeFilter === 'all'
    ? productCatalog
    : productCatalog.filter((product) => product.gender === state.activeFilter);
}

function getProductPriceForSize(product, ml) {
  const target = Number(ml);
  const sizes = getProductSizes(product);
  const match = sizes.find((size) => Number(size.ml) === target);
  if (match) return match.price;
  return Number(product.price || 0);
}

function getSelectedProductSize(product) {
  const sizes = getProductSizes(product);
  const current = Number(state.selectedSizes[product.id]);
  if (sizes.some((size) => Number(size.ml) === current)) return current;
  return Number(sizes[0]?.ml || product.price || 100);
}

function renderProductCard(product) {
  const categoryLabel = product.gender === 'men'
    ? translations[state.lang].filterMen
    : product.gender === 'women'
      ? translations[state.lang].filterWomen
      : translations[state.lang].filterUnisex;

  const sizes = getProductSizes(product);
  const selectedSizeMl = getSelectedProductSize(product);
  const selectedSize = sizes.find((size) => Number(size.ml) === Number(selectedSizeMl)) || sizes[0] || { ml: 100, price: product.price };
  const displayedSize = sizes.map((size) => `${size.ml}ml`).join(' • ');
  const displayPrice = selectedSize.price;

  const priceMarkup = product.originalPrice && product.originalPrice > displayPrice
    ? `
      <div class="price-stack">
        <span class="old-price">${formatPrice(product.originalPrice)}</span>
        <span class="product-price">${formatPrice(displayPrice)}</span>
      </div>
      <span class="offer-badge">-${product.discountPercent}%</span>
    `
    : `
      <div class="price-stack">
        <span class="product-price">${formatPrice(displayPrice)}</span>
      </div>
      <span class="tag">${categoryLabel}</span>
    `;

  const sizeMarkup = sizes.map((size) => {
    const active = Number(size.ml) === Number(selectedSizeMl);
    return `
      <button class="size-option ${active ? 'selected' : ''}" type="button" data-product-id="${product.id}" data-size-ml="${size.ml}" data-size-price="${size.price}">
        <span>${size.ml}ml</span>
        <strong>${formatPrice(size.price)}</strong>
      </button>
    `;
  }).join('');

  return `
    <article class="product-card" data-id="${product.id}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" />
        <div class="product-actions">
          <button class="icon-pill wishlist-toggle" data-wishlist="${product.id}" aria-label="Toggle wishlist">${state.wishlist.includes(product.id) ? '♥' : '♡'}</button>
          <button class="icon-pill compare-toggle" data-compare="${product.id}" aria-label="Compare product">⇄</button>
        </div>
      </div>
      <div class="product-meta">
        <div class="product-row">
          <h3>${product.name}</h3>
          <span class="tag">${product.tag}</span>
        </div>
        <div class="product-row product-row-price">
          ${priceMarkup}
        </div>
        <div class="size-row"><span>${displayedSize}</span></div>
        <div class="size-list">${sizeMarkup}</div>
        <p class="product-note">${product.description}</p>
      </div>
      <div class="product-footer">
        <button class="btn btn-secondary view-product" data-product-id="${product.id}">${translations[state.lang].viewProduct}</button>
        <button class="btn btn-primary add-cart" data-product-id="${product.id}" data-size-ml="${selectedSizeMl}">${translations[state.lang].addToCart}</button>
      </div>
    </article>
  `;
}

function attachProductCardActions(root = document) {
  root.querySelectorAll('.size-option').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = Number(button.dataset.productId);
      const sizeMl = Number(button.dataset.sizeMl);
      state.selectedSizes[productId] = sizeMl;
      const card = button.closest('.product-card');
      if (card) {
        card.querySelectorAll('.size-option').forEach((option) => {
          option.classList.toggle('selected', Number(option.dataset.sizeMl) === sizeMl);
        });
        const addButton = card.querySelector('.add-cart');
        if (addButton) addButton.dataset.sizeMl = String(sizeMl);
        const priceText = card.querySelector('.product-price');
        if (priceText) {
          priceText.textContent = formatPrice(Number(button.dataset.sizePrice));
        }
      }
    });
  });

  root.querySelectorAll('.add-cart').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = Number(button.dataset.productId);
      const sizeMl = Number(button.dataset.sizeMl || state.selectedSizes[productId] || getDefaultProductSize(productCatalog.find((item) => item.id === productId)).ml);
      addToCart(productId, sizeMl, 1);
    });
  });

  root.querySelectorAll('.view-product').forEach((button) => {
    button.addEventListener('click', () => openProductModal(Number(button.dataset.productId)));
  });

  root.querySelectorAll('.wishlist-toggle').forEach((button) => {
    button.addEventListener('click', () => toggleWishlist(Number(button.dataset.wishlist)));
  });

  root.querySelectorAll('.compare-toggle').forEach((button) => {
    button.addEventListener('click', () => toggleCompare(Number(button.dataset.compare)));
  });
}

function renderProducts() {
  const products = getActiveProducts();
  ui.productGrid.innerHTML = products.map((product) => renderProductCard(product)).join('');
  attachProductCardActions(ui.productGrid);
}

function renderCategorySection(container, items) {
  if (!container) return;
  container.innerHTML = items.map((product) => renderProductCard(product)).join('');
  attachProductCardActions(container);
}

function renderCategorySections() {
  renderCategorySection(ui.menProducts, productCatalog.filter((product) => product.gender === 'men').slice(0, 4));
  renderCategorySection(ui.womenProducts, productCatalog.filter((product) => product.gender === 'women').slice(0, 4));
  renderCategorySection(ui.unisexProducts, productCatalog.filter((product) => product.gender === 'unisex').slice(0, 4));
  renderCategorySection(ui.offersProducts, productCatalog.filter((product) => product.discountPercent).slice(0, 4));
  renderHighCopyProducts();
}

function addToCart(productId, sizeMl = null, quantity = 1) {
  const product = productCatalog.find((item) => item.id === productId);
  const resolvedSize = sizeMl || (product ? getDefaultProductSize(product).ml : null);
  const existing = state.cart.find((item) => item.id === productId && item.sizeMl === resolvedSize);

  if (existing) {
    existing.qty += quantity;
  } else {
    state.cart.push({ id: productId, qty: quantity, sizeMl: resolvedSize });
  }
  saveState();
  renderCart();
  openPanel('cartDrawer');
}

function renderCart() {
  updateCartBadge();

  const cartProducts = state.cart.map((entry) => {
    const product = productCatalog.find((item) => item.id === entry.id);
    if (!product) return null;
    const sizes = getProductSizes(product);
    const selectedSize = sizes.find((size) => size.ml === entry.sizeMl) || getDefaultProductSize(product);
    const selectedPrice = selectedSize ? selectedSize.price : product.price;
    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}" />
        <div class="item-info">
          <strong>${product.name}</strong>
          <small>${selectedSize.ml}ml • ${formatPrice(selectedPrice)}</small>
          <div class="qty-box">
            <button class="qty-btn" data-change-qty="decrease" data-product-id="${product.id}" data-size-ml="${selectedSize.ml}">-</button>
            <span>${entry.qty}</span>
            <button class="qty-btn" data-change-qty="increase" data-product-id="${product.id}" data-size-ml="${selectedSize.ml}">+</button>
          </div>
        </div>
        <button class="close-btn remove-cart" data-remove-cart="${product.id}" data-size-ml="${selectedSize.ml}" aria-label="Remove product">×</button>
      </div>
    `;
  }).filter(Boolean).join('');

  if (!cartProducts) {
    ui.cartItems.innerHTML = `<div class="cart-empty">${translations[state.lang].emptyCart}</div>`;
    ui.cartTotal.textContent = `0 ${translations[state.lang].price}`;
    return;
  }

  ui.cartItems.innerHTML = cartProducts;
  const total = state.cart.reduce((sum, item) => {
    const product = productCatalog.find((entry) => entry.id === item.id);
    if (!product) return sum;
    const size = getProductSizes(product).find((option) => Number(option.ml) === Number(item.sizeMl)) || getDefaultProductSize(product);
    return sum + (size.price * item.qty);
  }, 0);
  ui.cartTotal.textContent = `${total.toLocaleString()} ${translations[state.lang].price}`;

  document.querySelectorAll('[data-change-qty]').forEach((button) => {
    button.addEventListener('click', () => updateCartQty(Number(button.dataset.productId), button.dataset.changeQty, Number(button.dataset.sizeMl || 0)));
  });

  document.querySelectorAll('[data-remove-cart]').forEach((button) => {
    button.addEventListener('click', () => removeFromCart(Number(button.dataset.removeCart), Number(button.dataset.sizeMl || 0)));
  });
}

function updateCartQty(productId, action, sizeMl = null) {
  const targetSize = sizeMl || 0;
  const item = state.cart.find((entry) => entry.id === productId && (targetSize === 0 || entry.sizeMl === targetSize));
  if (!item) return;
  if (action === 'increase') item.qty += 1;
  if (action === 'decrease') item.qty -= 1;
  if (item.qty <= 0) {
    state.cart = state.cart.filter((entry) => !(entry.id === productId && (targetSize === 0 || entry.sizeMl === targetSize)));
  }
  saveState();
  renderCart();
}

function removeFromCart(productId, sizeMl = null) {
  const targetSize = sizeMl || 0;
  state.cart = state.cart.filter((entry) => !(entry.id === productId && (targetSize === 0 || entry.sizeMl === targetSize)));
  saveState();
  renderCart();
}

function toggleWishlist(productId) {
  if (state.wishlist.includes(productId)) {
    state.wishlist = state.wishlist.filter((id) => id !== productId);
  } else {
    state.wishlist.push(productId);
  }
  saveState();
  renderProducts();
  renderWishlist();
}

function renderWishlist() {
  if (!state.wishlist.length) {
    ui.wishlistItems.innerHTML = `<div class="wishlist-empty">${translations[state.lang].emptyWishlist}</div>`;
    return;
  }

  ui.wishlistItems.innerHTML = state.wishlist.map((productId) => {
    const product = productCatalog.find((item) => item.id === productId);
    if (!product) return '';
    return `
      <div class="wishlist-item">
        <img src="${product.image}" alt="${product.name}" />
        <div class="item-info">
          <strong>${product.name}</strong>
          <span>${formatPrice(product.price)}</span>
        </div>
        <button class="close-btn remove-wishlist" data-remove-wishlist="${product.id}" aria-label="Remove wishlist item">×</button>
      </div>
    `;
  }).join('');

  document.querySelectorAll('[data-remove-wishlist]').forEach((button) => {
    button.addEventListener('click', () => toggleWishlist(Number(button.dataset.removeWishlist)));
  });
}

function toggleCompare(productId) {
  if (state.compare.includes(productId)) {
    state.compare = state.compare.filter((id) => id !== productId);
  } else if (state.compare.length < 3) {
    state.compare.push(productId);
  }
  saveState();
  renderCompare();
  renderProducts();
  if (state.compare.length) {
    openPanel('comparePanel');
  }
}

function renderCompare() {
  if (!state.compare.length) {
    ui.compareGrid.innerHTML = `<div class="cart-empty">${translations[state.lang].emptyWishlist}</div>`;
    return;
  }

  const rows = state.compare.map((id) => productCatalog.find((product) => product.id === id)).filter(Boolean);
  ui.compareGrid.innerHTML = `
    <div class="compare-table">
      ${rows.map((product) => `
        <div class="compare-card">
          <img src="${product.image}" alt="${product.name}" />
          <h4>${product.name}</h4>
          <span class="product-price">${formatPrice(product.price)}</span>
          <p>${product.description}</p>
          <small>${product.type} • ${product.occasion}</small>
        </div>
      `).join('')}
    </div>
  `;
}

function openSearchPanel() {
  openPanel('searchPanel');
  setTimeout(() => ui.searchInput.focus(), 120);
}

function renderSearchResults(query = '') {
  const lower = query.trim().toLowerCase();
  const matches = lower
    ? productCatalog.filter((product) => {
      const haystack = `${product.name} ${product.type} ${product.notes.join(' ')} ${product.tag}`.toLowerCase();
      return haystack.includes(lower);
    })
    : productCatalog.slice(0, 3);

  if (!matches.length) {
    ui.searchResults.innerHTML = `<div class="search-empty">${translations[state.lang].noResults}</div>`;
    return;
  }

  ui.searchResults.innerHTML = matches.map((product) => {
    const sizes = getProductSizes(product).map((size) => `${size.ml}ml ${formatPrice(size.price)}`).join(' • ');
    const notes = product.notes && product.notes.length ? product.notes.join(' • ') : product.tag;
    return `
      <div class="search-result">
        <img src="${product.image}" alt="${product.name}" />
        <div class="search-result-copy">
          <strong>${product.name}</strong>
          <small>${product.type} • ${product.occasion} • ${product.mood}</small>
          <small>${notes}</small>
          <small>${sizes}</small>
          <span class="search-result-price">${formatPrice(getProductSizes(product)[0]?.price || product.price)}</span>
        </div>
        <button class="btn btn-secondary view-product" data-product-id="${product.id}">${translations[state.lang].viewProduct}</button>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.search-result .view-product').forEach((button) => {
    button.addEventListener('click', () => openProductModal(Number(button.dataset.productId)));
  });
}

function renderHighCopyProducts() {
  if (!ui.highCopyProducts) return;
  const items = productCatalog.filter((product) => product.highCopy).slice(0, 4);
  ui.highCopyProducts.innerHTML = items.map((product) => renderProductCard(product)).join('');
  attachProductCardActions(ui.highCopyProducts);
}

function openProductModal(productId) {
  const product = productCatalog.find((item) => item.id === productId);
  if (!product) return;

  const sizes = getProductSizes(product);
  const selectedMl = Number(state.selectedSizes[product.id] || sizes[0]?.ml || product.price || 100);
  const selectedSize = sizes.find((size) => Number(size.ml) === selectedMl) || sizes[0] || { ml: 100, price: product.price };
  const quantity = Number(state.productQuantities[product.id] || 1);
  const total = selectedSize.price * quantity;

  ui.productModalBody.innerHTML = `
    <div class="product-modal-content">
      <img src="${product.image}" alt="${product.name}" />
      <div>
        <h2>${product.name}</h2>
        <span class="price-display">${formatPrice(total)}</span>
        <p class="product-copy">${product.description}</p>
        <div class="size-list product-size-list">
          ${sizes.map((size) => `
            <button class="size-option ${Number(size.ml) === Number(selectedMl) ? 'selected' : ''}" type="button" data-product-id="${product.id}" data-size-ml="${size.ml}" data-size-price="${size.price}">
              <span>${size.ml}ml</span>
              <strong>${formatPrice(size.price)}</strong>
            </button>
          `).join('')}
        </div>
        <div class="qty-box large-qty">
          <button class="qty-btn" type="button" data-qty-action="decrease" data-product-id="${product.id}">-</button>
          <span class="qty-total">${quantity}</span>
          <button class="qty-btn" type="button" data-qty-action="increase" data-product-id="${product.id}">+</button>
        </div>
        <div class="product-spec">
          <div><span>${translations[state.lang].productPriceLabel}</span><strong>${formatPrice(selectedSize.price)}</strong></div>
          <div><span>${translations[state.lang].filterUnisex}</span><strong>${translations[state.lang].filterUnisex}</strong></div>
          <div><span>${product.tag}</span><strong>${product.occasion}</strong></div>
          <div><span>${translations[state.lang].optionStrong}</span><strong>${product.strength}</strong></div>
        </div>
        <div class="hero-actions" style="margin-top:18px;">
          <button class="btn btn-primary add-cart" data-product-id="${product.id}" data-size-ml="${selectedMl}">${translations[state.lang].addToCart}</button>
        </div>
      </div>
    </div>
  `;

  ui.productModalBody.querySelectorAll('.size-option').forEach((button) => {
    button.addEventListener('click', () => {
      const nextMl = Number(button.dataset.sizeMl);
      state.selectedSizes[product.id] = nextMl;
      const nextSize = sizes.find((size) => Number(size.ml) === nextMl) || sizes[0];
      const currentQty = Number(state.productQuantities[product.id] || 1);
      ui.productModalBody.querySelector('.price-display').textContent = formatPrice(nextSize.price * currentQty);
      ui.productModalBody.querySelector('.add-cart').dataset.sizeMl = String(nextMl);
      ui.productModalBody.querySelectorAll('.size-option').forEach((option) => {
        option.classList.toggle('selected', Number(option.dataset.sizeMl) === nextMl);
      });
    });
  });

  ui.productModalBody.querySelectorAll('[data-qty-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = Number(button.dataset.productId);
      const current = Number(state.productQuantities[productId] || 1);
      const next = button.dataset.qtyAction === 'increase' ? current + 1 : Math.max(1, current - 1);
      state.productQuantities[productId] = next;
      const activeSize = Number(state.selectedSizes[productId] || sizes[0]?.ml || 100);
      const activePrice = getProductPriceForSize(product, activeSize);
      ui.productModalBody.querySelector('.qty-total').textContent = String(next);
      ui.productModalBody.querySelector('.price-display').textContent = formatPrice(activePrice * next);
    });
  });

  const addBtn = ui.productModalBody.querySelector('.add-cart');
  addBtn.addEventListener('click', () => addToCart(Number(product.id), Number(addBtn.dataset.sizeMl || selectedMl), Number(state.productQuantities[product.id] || 1)));

  const modalEl = document.getElementById('productModal');
  if (modalEl) {
    const modalWidth = Math.min(900, window.innerWidth - 28);
    modalEl.style.width = `${modalWidth}px`;
    modalEl.style.maxWidth = 'calc(100vw - 28px)';
    modalEl.style.left = '50%';
    modalEl.style.top = '50%';
    modalEl.style.right = 'auto';
    modalEl.style.bottom = 'auto';
    modalEl.style.margin = '0';
    modalEl.style.direction = state.lang === 'ar' ? 'rtl' : 'ltr';
    modalEl.style.setProperty('inset-inline-start', '50%');
    modalEl.style.setProperty('inset-inline-end', 'auto');
    modalEl.style.transform = 'translate(-50%, -50%)';
  }

  openPanel('productModal');
}

function openPanel(panelId) {
  closeAllPanels(false);
  if (panelId === 'cartDrawer' || panelId === 'wishlistDrawer' || panelId === 'comparePanel' || panelId === 'searchPanel' || panelId === 'checkoutModal' || panelId === 'productModal' || panelId === 'aiAssistant') {
    const panel = document.getElementById(panelId);
    if (!panel) return;
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    ui.backdrop.classList.add('is-visible');
    state.activePanel = panelId;
  }
}

function closeAllPanels(withBackdrop = true) {
  const panels = document.querySelectorAll('.panel, .mobile-menu, .ai-assistant, .product-modal');
  panels.forEach((panel) => {
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
  });

  const productModal = document.getElementById('productModal');
  if (productModal) {
    productModal.classList.remove('is-open');
    productModal.setAttribute('aria-hidden', 'true');
  }

  const aiPanel = document.getElementById('aiAssistant');
  if (aiPanel) {
    aiPanel.classList.remove('is-open');
    aiPanel.setAttribute('aria-hidden', 'true');
  }
  if (ui.mobileMenu) {
    ui.mobileMenu.classList.remove('is-open');
    ui.mobileMenu.setAttribute('aria-hidden', 'true');
  }
  if (ui.navToggle) {
    ui.navToggle.setAttribute('aria-expanded', 'false');
  }
  if (withBackdrop && ui.backdrop) {
    ui.backdrop.classList.remove('is-visible');
  }
  state.activePanel = null;
}

function toggleMobileMenu() {
  const isOpen = ui.mobileMenu.classList.contains('is-open');
  if (isOpen) {
    closeAllPanels();
  } else {
    closeAllPanels(false);
    ui.mobileMenu.classList.add('is-open');
    ui.mobileMenu.setAttribute('aria-hidden', 'false');
    ui.navToggle.setAttribute('aria-expanded', 'true');
    ui.backdrop.classList.add('is-visible');
    state.activePanel = 'mobileMenu';
  }
}

function setupHeroSlider() {
  const slides = Array.from(document.querySelectorAll('.hero-slide'));
  const showSlide = (index) => {
    state.currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, idx) => slide.classList.toggle('is-active', idx === state.currentSlide));
    ui.heroDots.forEach((dot, idx) => dot.classList.toggle('is-active', idx === state.currentSlide));
  };

  document.querySelector('.slider-btn.prev').addEventListener('click', () => {
    showSlide(state.currentSlide - 1);
    resetAutoSlide();
  });

  document.querySelector('.slider-btn.next').addEventListener('click', () => {
    showSlide(state.currentSlide + 1);
    resetAutoSlide();
  });

  ui.heroDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      showSlide(Number(dot.dataset.slide));
      resetAutoSlide();
    });
  });

  const resetAutoSlide = () => {
    clearInterval(state.heroInterval);
    state.heroInterval = setInterval(() => {
      showSlide(state.currentSlide + 1);
    }, 4200);
  };

  let touchStartX = 0;
  let touchEndX = 0;
  document.querySelector('.hero-viewport').addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
    touchEndX = touchStartX;
    clearInterval(state.heroInterval);
  }, { passive: true });

  document.querySelector('.hero-viewport').addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) showSlide(state.currentSlide + 1);
    if (touchEndX - touchStartX > 50) showSlide(state.currentSlide - 1);
    resetAutoSlide();
  }, { passive: true });

  resetAutoSlide();
  showSlide(0);
}

function setupFinder() {
  const finderSteps = Array.from(document.querySelectorAll('.finder-step'));

  const answerStorage = {};

  document.querySelectorAll('.finder-option').forEach((button) => {
    button.addEventListener('click', () => {
      const step = button.closest('.finder-step');
      const group = button.parentElement.dataset.answers;
      button.parentElement.querySelectorAll('.finder-option').forEach((option) => option.classList.remove('selected'));
      button.classList.add('selected');
      answerStorage[group] = button.dataset.value;
      const activeIndex = finderSteps.indexOf(step);
      const nextIndex = activeIndex + 1;

      if (nextIndex < finderSteps.length) {
        finderSteps[activeIndex].classList.remove('active');
        finderSteps[nextIndex].classList.add('active');
      } else {
        const summary = [answerStorage.profileType, answerStorage.profileGender, answerStorage.profileOccasion, answerStorage.profileMood, answerStorage.profileStrength].filter(Boolean).join(' — ');
        ui.profileSummary.textContent = summary || '—';
        const matches = findMatchesByProfile(answerStorage);
        renderMatchedProducts(matches);
      }
    });
  });
}

function findMatchesByProfile(profile) {
  let matches = [...productCatalog];

  if (profile.profileType) {
    const typeValue = String(profile.profileType).trim();
    matches = matches.filter((product) => {
      if (typeValue === 'منعش') return product.type === 'منعش' || product.tag === 'منعش' || product.notes.some((note) => ['ليمون', 'صنوبر', 'برتقال', 'نيم'].includes(note));
      if (typeValue === 'خشبي') return product.type === 'خشبي' || product.tag === 'خشبي' || product.notes.some((note) => ['عود', 'خشب', 'سدر', 'أرز'].includes(note));
      if (typeValue === 'شرقي') return product.type === 'شرقي' || product.tag === 'شرقي' || product.notes.some((note) => ['عود', 'عنبر', 'زعفران', 'بخور'].includes(note));
      if (typeValue === 'زهري') return product.type === 'زهري' || product.tag === 'زهري' || product.notes.some((note) => ['ورد', 'زهور', 'مِرْجان', 'خزامى'].includes(note));
      if (typeValue === 'حلو') return product.type === 'حلو' || product.tag === 'حلو' || product.notes.some((note) => ['فانيليا', 'موز', 'مشمش', 'مِرْجان'].includes(note));
      if (typeValue === 'مسكي') return product.type === 'مسكي' || product.tag === 'مسكي' || product.notes.some((note) => ['مسك', 'مِسْك', 'مِسك'].includes(note));
      return product.type === typeValue || product.tag === typeValue;
    });
  }

  if (profile.profileGender) {
    const genderValue = String(profile.profileGender).trim();
    matches = matches.filter((product) => {
      if (genderValue === 'رجالي') return product.gender === 'men';
      if (genderValue === 'نسائي') return product.gender === 'women';
      if (genderValue === 'للجنسين') return product.gender === 'unisex';
      return true;
    });
  }

  if (profile.profileOccasion) {
    const occasionValue = String(profile.profileOccasion).trim();
    matches = matches.filter((product) => product.occasion === occasionValue);
  }

  if (profile.profileMood) {
    const moodValue = String(profile.profileMood).trim();
    matches = matches.filter((product) => product.mood === moodValue);
  }

  if (profile.profileStrength) {
    const strengthValue = String(profile.profileStrength).trim();
    matches = matches.filter((product) => product.strength === strengthValue);
  }

  return matches.slice(0, 3);
}

function renderMatchedProducts(matches) {
  if (!matches.length) {
    ui.matchedProducts.innerHTML = '<p class="cart-empty">لا توجد نتائج مطابقة.</p>';
    return;
  }

  ui.matchedProducts.innerHTML = matches.map((product) => `
    <div class="matched-product">
      <img src="${product.image}" alt="${product.name}" />
      <div>
        <strong>${product.name}</strong>
        <small>${product.type}</small>
      </div>
      <span>${formatPrice(product.price)}</span>
    </div>
  `).join('');
}

function updateFinderSteps() {
  const steps = Array.from(document.querySelectorAll('.finder-step'));
  steps.forEach((step) => step.classList.remove('active'));
  steps[0].classList.add('active');
  document.querySelectorAll('.finder-option').forEach((button) => button.classList.remove('selected'));
  ui.profileSummary.textContent = '—';
  ui.matchedProducts.innerHTML = '';
}

function renderAiMessages() {
  if (!ui.aiMessages) return;
  ui.aiMessages.innerHTML = state.aiMessages.map((message) => `
    <div class="ai-bubble ${message.role}">${message.text}</div>
  `).join('');

  ui.aiMessages.querySelectorAll('.view-product').forEach((button) => {
    button.addEventListener('click', () => openProductModal(Number(button.dataset.productId)));
  });

  ui.aiMessages.scrollTop = ui.aiMessages.scrollHeight;
}

function addAiMessage(text, role = 'assistant') {
  state.aiMessages.push({ text, role });
  renderAiMessages();
}

function showTypingIndicator() {
  const bubble = document.createElement('div');
  bubble.className = 'ai-bubble assistant typing-container';
  bubble.innerHTML = '<span class="typing-indicator"><span></span><span></span><span></span></span>';
  ui.aiMessages.appendChild(bubble);
  ui.aiMessages.scrollTop = ui.aiMessages.scrollHeight;
  return bubble;
}

function askAiQuestion(step) {
  const cards = Array.from(document.querySelectorAll('.question-card'));
  cards.forEach((card) => card.classList.toggle('active', Number(card.dataset.aiStep) === step));
}

function generateRecommendationHtml(products) {
  return `
    <div class="ai-recommend-list">
      ${products.map((product) => `
        <div class="ai-recommend-item">
          <img src="${product.image}" alt="${product.name}" />
          <div>
            <strong>${product.name}</strong>
            <div class="price">${formatPrice(product.price)}</div>
            <div>${translations[state.lang].recommendation} ${product.type.toLowerCase()} ${product.mood.toLowerCase()} ${product.occasion.toLowerCase()}.</div>
            <button class="view-product" data-product-id="${product.id}">${translations[state.lang].viewProduct}</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function collectAiAnswers() {
  return state.aiFormState;
}

function findAiMatches() {
  const answers = collectAiAnswers();
  const keys = ['type', 'gender', 'occasion', 'mood', 'strength'];

  if (!keys.some((key) => Object.prototype.hasOwnProperty.call(answers, key))) {
    return [];
  }

  let matches = [...productCatalog];

  if (answers.type) {
    const selected = String(answers.type).trim();
    matches = matches.filter((product) => {
      if (selected === 'منعش') return product.type === 'منعش' || product.tag === 'منعش';
      if (selected === 'خشبي') return product.type === 'خشبي' || product.tag === 'خشبي';
      if (selected === 'شرقي') return product.type === 'شرقي' || product.tag === 'شرقي';
      if (selected === 'زهري') return product.type === 'زهري' || product.tag === 'زهري';
      if (selected === 'حلو') return product.type === 'حلو' || product.tag === 'حلو';
      if (selected === 'مسكي') return product.type === 'مسكي' || product.tag === 'مسكي';
      return product.type === selected || product.tag === selected;
    });
  }

  if (answers.gender) {
    const selected = String(answers.gender).trim();
    matches = matches.filter((product) => {
      if (selected === 'رجالي') return product.gender === 'men';
      if (selected === 'نسائي') return product.gender === 'women';
      if (selected === 'للجنسين') return product.gender === 'unisex';
      return true;
    });
  }

  if (answers.occasion) {
    matches = matches.filter((product) => product.occasion === String(answers.occasion).trim());
  }

  if (answers.mood) {
    matches = matches.filter((product) => product.mood === String(answers.mood).trim());
  }

  if (answers.strength) {
    matches = matches.filter((product) => product.strength === String(answers.strength).trim());
  }

  return matches.slice(0, 3);
}

function resetAiFlow() {
  state.aiStep = 0;
  state.aiFormState = {};
  askAiQuestion(0);
  document.querySelectorAll('.ai-option').forEach((option) => option.classList.remove('selected'));
}

function getSkinWeightForProduct(product) {
  if (product.skinWeight) return product.skinWeight;
  return ['خفيف', 'متوسط'].includes(product.strength) ? 'خفيف' : 'ثقيل';
}

function initializeAiAssistant() {
  const startMessage = `${translations[state.lang].aiIntro}`;
  state.aiMessages = [{ text: startMessage, role: 'assistant' }];
  renderAiMessages();

  document.querySelectorAll('.ai-option').forEach((button) => {
    button.addEventListener('click', () => {
      const currentStep = state.aiStep;
      const keys = ['type', 'gender', 'occasion', 'mood', 'strength'];
      if (currentStep >= keys.length) {
        resetAiFlow();
        return;
      }

      const choice = button.dataset.aiSelect;
      state.aiFormState[keys[currentStep]] = choice;
      button.parentElement.querySelectorAll('.ai-option').forEach((option) => option.classList.remove('selected'));
      button.classList.add('selected');

      if (currentStep < keys.length - 1) {
        state.aiStep += 1;
        askAiQuestion(state.aiStep);
        return;
      }

      const matches = findAiMatches();
      const reply = matches.length ? generateRecommendationHtml(matches) : '<div>لا توجد منتجات مطابقة حالياً.</div>';
      const typingBubble = showTypingIndicator();
      setTimeout(() => {
        typingBubble.remove();
        addAiMessage(reply, 'assistant');
        resetAiFlow();
      }, 700);
    });
  });

  ui.aiPromptForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = ui.aiPromptInput.value.trim();
    if (!value) return;

    addAiMessage(value, 'user');
    ui.aiPromptInput.value = '';
    const typingBubble = showTypingIndicator();
    setTimeout(() => {
      typingBubble.remove();
      const result = answerCatalogQuestion(value);
      addAiMessage(result, 'assistant');
      resetAiFlow();
    }, 700);
  });
}

function getWebsiteKnowledgeAnswer(q) {
  const lang = state.lang;
  const knowledge = siteKnowledge[lang];

  if (!knowledge) return translations[lang].noInfo;

  const normalized = q.replace(/\s+/g, ' ').trim();

  if (
    /(?:اسم|store name|brand|name of store|اسم المتجر|اسم الموقع|website name)/.test(normalized)
  ) {
    return knowledge.storeName;
  }

  if (
    /(?:مالك|owner|who owns|من صاحب|من يملك|المالك)/.test(normalized)
  ) {
    return lang === 'en' ? `Store owner: ${knowledge.owner}.` : `صاحب المتجر: ${knowledge.owner}.`;
  }

  if (
    /(?:العنوان|address|عنوان|location|موقع|where is|أين)/.test(normalized)
  ) {
    return knowledge.location;
  }

  if (
    /(?:هاتف|phone|رقم|mobile|call|تلفون)/.test(normalized)
  ) {
    return lang === 'en' ? `Phone: ${knowledge.phone}.` : `الهاتف: ${knowledge.phone}.`;
  }

  if (
    /(?:بريد|email|e-mail|mail|إيميل|بريد إلكتروني)/.test(normalized)
  ) {
    return lang === 'en' ? `Email: ${knowledge.email}.` : `البريد الإلكتروني: ${knowledge.email}.`;
  }

  if (
    /(?:مساعدة|help|support|الدعم|assistance|تواصل|استفسار|who to contact|who can help|who should i contact|lost|confused|ضائع|تائه|من اتصل|من أستفسر|من أتصل|أتصل|أحتاج إلى شخص|contact us|need help)/.test(normalized)
  ) {
    return lang === 'en'
      ? `For inquiries or help, contact us on ${knowledge.phone}. You can also email ${knowledge.email}.`
      : `للاستفسارات أو المساعدة، يمكنك التواصل على ${knowledge.phone}. كما يمكنك إرسال بريد إلكتروني إلى ${knowledge.email}.`;
  }

  if (
    /(?:ساعة|hours|open|وقت|working|مفتوح|دوام)/.test(normalized)
  ) {
    return knowledge.hours;
  }

  if (
    /(?:منتجات|products|catalog|collection|available items|what do you sell|عروض|موجود|منتج)/.test(normalized)
  ) {
    return knowledge.products;
  }

  if (
    /(?:حجز|booking|reserve|visit|appointment|حجز زيارة)/.test(normalized)
  ) {
    return knowledge.booking;
  }

  if (
    /(?:قسم|sections|website|site|الموقع|صفحة|what does this site have|what is on this website)/.test(normalized)
  ) {
    return knowledge.sections;
  }

  if (
    /(?:هذا الموقع|what is this website|website details|about this store|عن المتجر|عن الموقع|المتجر|store)/.test(normalized)
  ) {
    return knowledge.description;
  }

  if (
    /(?:front-end|frontend|html|css|javascript|api|backend|no backend|without api|without backend|واجهة|جافا سكربت)/.test(normalized)
  ) {
    return knowledge.website;
  }

  return null;
}

function answerCatalogQuestion(value) {
  const q = String(value || '').trim().toLowerCase();
  if (!q) return translations[state.lang].noInfo;

  const siteAnswer = getWebsiteKnowledgeAnswer(q);
  if (siteAnswer) return siteAnswer;

  const typeNames = [...new Set(productCatalog.map((product) => product.type))].join('، ');
  const lightProducts = productCatalog.filter((product) => getSkinWeightForProduct(product) === 'خفيف');
  const heavyProducts = productCatalog.filter((product) => getSkinWeightForProduct(product) === 'ثقيل');

  if (q.includes('خفيف') || q.includes('light') || q.includes('خفيفة') || q.includes('على الجلد') || q.includes('light on')) {
    if (!lightProducts.length) return translations[state.lang].noInfo;
    return generateRecommendationHtml(lightProducts.slice(0, 3));
  }

  if (q.includes('ثقيل') || q.includes('heavy') || q.includes('heavy on') || q.includes('قوي على الجلد')) {
    if (!heavyProducts.length) return translations[state.lang].noInfo;
    return generateRecommendationHtml(heavyProducts.slice(0, 3));
  }

  if ((q.includes('نوع') || q.includes('أنواع') || q.includes('أصناف') || q.includes('عطر') || q.includes('العطور') || q.includes('perfume')) && (q.includes('خفيف') || q.includes('light') || q.includes('ثقيل') || q.includes('heavy'))) {
    if (q.includes('خفيف') || q.includes('light')) {
      if (!lightProducts.length) return translations[state.lang].noInfo;
      return `العطور الخفيفة على الجلد في المتجر هي: ${lightProducts.map((product) => product.name).join('، ')}.`;
    }
    if (q.includes('ثقيل') || q.includes('heavy')) {
      if (!heavyProducts.length) return translations[state.lang].noInfo;
      return `العطور الثقيلة على الجلد في المتجر هي: ${heavyProducts.map((product) => product.name).join('، ')}.`;
    }
  }

  if (q.includes('خشبي') || q.includes('عود') || q.includes('سدر')) {
    const matches = productCatalog.filter((product) => product.type === 'خشبي' || product.tag === 'خشبي' || product.notes.some((note) => ['عود', 'خشب', 'سدر', 'أرز'].includes(note))).slice(0, 3);
    if (!matches.length) return translations[state.lang].noInfo;
    return generateRecommendationHtml(matches);
  }

  if (q.includes('مسك') || q.includes('مسكي') || q.includes('مِسْك')) {
    const matches = productCatalog.filter((product) => product.type === 'مسكي' || product.tag === 'مسكي' || product.notes.some((note) => ['مسك', 'مِسْك', 'مِسك'].includes(note))).slice(0, 3);
    if (!matches.length) return translations[state.lang].noInfo;
    return generateRecommendationHtml(matches);
  }

  if (q.includes('منعش') || q.includes('ليمون') || q.includes('صنوبر')) {
    const matches = productCatalog.filter((product) => product.type === 'منعش' || product.tag === 'منعش' || product.notes.some((note) => ['ليمون', 'صنوبر', 'نيم', 'برتقال'].includes(note))).slice(0, 3);
    if (!matches.length) return translations[state.lang].noInfo;
    return generateRecommendationHtml(matches);
  }

  if (q.includes('زهري') || q.includes('ورد') || q.includes('وردة')) {
    const matches = productCatalog.filter((product) => product.type === 'زهري' || product.tag === 'زهري' || product.notes.some((note) => ['ورد', 'وردة', 'خزامى', 'مِرْجان'].includes(note))).slice(0, 3);
    if (!matches.length) return translations[state.lang].noInfo;
    return generateRecommendationHtml(matches);
  }

  if (q.includes('شرقي') || q.includes('عنبر') || q.includes('زعفران')) {
    const matches = productCatalog.filter((product) => product.type === 'شرقي' || product.tag === 'شرقي' || product.notes.some((note) => ['عود', 'عنبر', 'زعفران', 'بخور'].includes(note))).slice(0, 3);
    if (!matches.length) return translations[state.lang].noInfo;
    return generateRecommendationHtml(matches);
  }

  if (q.includes('حلو') || q.includes('فانيليا') || q.includes('موز')) {
    const matches = productCatalog.filter((product) => product.type === 'حلو' || product.tag === 'حلو' || product.notes.some((note) => ['فانيليا', 'موز', 'مشمش', 'مِرْجان'].includes(note))).slice(0, 3);
    if (!matches.length) return translations[state.lang].noInfo;
    return generateRecommendationHtml(matches);
  }

  if (q.includes('نوع') || q.includes('أنواع') || q.includes('أصناف') || q.includes('العطور') || q.includes('عطر')) {
    if (typeNames) {
      return `الأنواع المتاحة في المتجر هي: ${typeNames}.`;
    }
    return translations[state.lang].noInfo;
  }

  if (q.includes('رجالي') || q.includes('رجل')) {
    const matches = productCatalog.filter((product) => product.gender === 'men').slice(0, 3);
    if (!matches.length) return translations[state.lang].noInfo;
    return `العطور الرجالية المتاحة في المتجر هي: ${matches.map((product) => product.name).join('، ')}.`;
  }

  if (q.includes('نسائي') || q.includes('ست')) {
    const matches = productCatalog.filter((product) => product.gender === 'women').slice(0, 3);
    if (!matches.length) return translations[state.lang].noInfo;
    return `العطور النسائية المتاحة في المتجر هي: ${matches.map((product) => product.name).join('، ')}.`;
  }

  if (q.includes('جنسين') || q.includes('للجنسين') || q.includes('unisex')) {
    const matches = productCatalog.filter((product) => product.gender === 'unisex').slice(0, 3);
    if (!matches.length) return translations[state.lang].noInfo;
    return `العطور للجنسين المتاحة في المتجر هي: ${matches.map((product) => product.name).join('، ')}.`;
  }

  if (q.includes('مساء') || q.includes('سهرة') || q.includes('evening')) {
    const matches = productCatalog.filter((product) => product.occasion === 'سهرة' || product.occasion === 'مناسبة خاصة').slice(0, 3);
    if (!matches.length) return translations[state.lang].noInfo;
    return generateRecommendationHtml(matches);
  }

  if (q.includes('يومي') || q.includes('daily') || q.includes('نهاري')) {
    const matches = productCatalog.filter((product) => product.occasion === 'يومي').slice(0, 3);
    if (!matches.length) return translations[state.lang].noInfo;
    return generateRecommendationHtml(matches);
  }

  if (q.includes('العمل') || q.includes('work')) {
    const matches = productCatalog.filter((product) => product.occasion === 'العمل').slice(0, 3);
    if (!matches.length) return translations[state.lang].noInfo;
    return generateRecommendationHtml(matches);
  }

  return translations[state.lang].noInfo;
}

function bindGlobalEvents() {
  ui.themeToggle.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    updateTheme();
  });

  ui.langToggle.addEventListener('click', () => {
    state.lang = state.lang === 'ar' ? 'en' : 'ar';
    updateLanguage();
  });

  document.querySelector('.search-trigger').addEventListener('click', openSearchPanel);
  document.querySelector('.wishlist-trigger').addEventListener('click', () => openPanel('wishlistDrawer'));
  document.querySelector('.cart-trigger').addEventListener('click', () => openPanel('cartDrawer'));
  document.querySelectorAll('.ai-toggle').forEach((button) => {
    button.addEventListener('click', toggleAiAssistant);
  });
  document.getElementById('openAiButton').addEventListener('click', () => toggleAiAssistant());
  document.querySelector('.checkout-btn').addEventListener('click', () => openPanel('checkoutModal'));
  document.getElementById('checkoutForm').addEventListener('submit', (event) => {
    event.preventDefault();
    closeAllPanels();
  });

  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(bookingForm);
      const bookingDate = formData.get('bookingDay');
      const bookingTime = `${formData.get('bookingHour') || '00'}:${formData.get('bookingMinute') || '00'}`;
      const pickupDate = formData.get('pickupDay');
      const pickupHour = formData.get('pickupHour') || '00';
      const success = document.createElement('p');
      success.className = 'booking-success';
      success.textContent = `تم تسجيل الحجز بنجاح لـ ${formData.get('bookingName')} في ${bookingDate} الساعة ${bookingTime}، مع تاريخ الاستلام ${pickupDate} الساعة ${pickupHour}:00.`;
      const existing = bookingForm.querySelector('.booking-success');
      if (existing) existing.remove();
      bookingForm.appendChild(success);
    });
  }

  document.querySelectorAll('[data-close-panel]').forEach((button) => {
    button.addEventListener('click', () => closeAllPanels());
  });

  ui.backdrop.addEventListener('click', () => closeAllPanels());
  ui.navToggle.addEventListener('click', toggleMobileMenu);
  ui.mobileNavLinks.forEach((link) => link.addEventListener('click', () => closeAllPanels()));

  document.querySelector('.mobile-close').addEventListener('click', closeAllPanels);

  document.getElementById('searchInput').addEventListener('input', (event) => {
    renderSearchResults(event.target.value);
  });

  document.querySelectorAll('.filter-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      state.activeFilter = chip.dataset.filter;
      applyFilters();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeAllPanels();
    }
  });
}

function toggleAiAssistant() {
  const isOpen = ui.aiPanel.classList.contains('is-open');
  if (isOpen) {
    closeAllPanels();
  } else {
    closeAllPanels(false);
    ui.aiPanel.classList.add('is-open');
    ui.aiPanel.setAttribute('aria-hidden', 'false');
    ui.backdrop.classList.add('is-visible');
    state.activePanel = 'aiAssistant';
  }
}

function initializePage() {
  updateTheme();
  updateLanguage();
  renderProducts();
  renderCategorySections();
  renderCart();
  renderWishlist();
  renderCompare();
  renderSearchResults();
  bindGlobalEvents();
  setupHeroSlider();
  setupFinder();
  initializeAiAssistant();
  askAiQuestion(0);
  closeAllPanels();
  if (ui.aiPanel) {
    ui.aiPanel.classList.remove('is-open');
    ui.aiPanel.setAttribute('aria-hidden', 'true');
  }
  if (ui.backdrop) {
    ui.backdrop.classList.remove('is-visible');
  }
}

initializePage();
