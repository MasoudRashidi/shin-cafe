const menuData = {
  hot: {
    title: "نوشیدنی‌های گرم",
    description: "یک انتخاب گرم برای ساختن روزی بهتر",
    products: [
      {
        id: "espresso",
        name: "اسپرسو دبل",
        description: "دو شات عصاره قهوه صددرصد عربیکا با رُست اختصاصی",
        price: 98000,
        tag: "پرفروش",
        image:
          "assets/product-espresso.jpg",
      },
      {
        id: "latte",
        name: "کافه لاته",
        description: "اسپرسو، شیر گرم و بافت نرم فوم شیر با طرح لاته آرت",
        price: 138000,
        tag: "محبوب",
        image:
          "assets/product-latte.jpg",
      },
      {
        id: "cappuccino",
        name: "کاپوچینو",
        description: "ترکیب متعادل اسپرسو، شیر بخارداده‌شده و فوم مخملی",
        price: 128000,
        image:
          "assets/product-cappuccino.jpg",
      },
      {
        id: "mocha",
        name: "موکا",
        description: "اسپرسو با شکلات تلخ، شیر گرم و کمی پودر کاکائو",
        price: 148000,
        image:
          "assets/product-mocha.jpg",
      },
      {
        id: "masala",
        name: "چای ماسالا",
        description: "چای سیاه، شیر و ترکیب ادویه‌های گرم و معطر",
        price: 118000,
        tag: "بدون قهوه",
        image:
          "assets/product-masala.jpg",
      },
      {
        id: "herbal-tea",
        name: "دمنوش آرامش",
        description: "گل گاوزبان، به‌لیمو، لیموعمانی و عسل طبیعی",
        price: 108000,
        tag: "سالم",
        image:
          "assets/product-herbal-tea.jpg",
      },
    ],
  },
  cold: {
    title: "نوشیدنی‌های خنک",
    description: "تازه، خنک و پرانرژی برای روزهای روشن",
    products: [
      {
        id: "iced-latte",
        name: "آیس لاته",
        description: "اسپرسو، شیر سرد و یخ؛ ساده، خنک و دوست‌داشتنی",
        price: 148000,
        tag: "محبوب",
        image:
          "assets/product-iced-latte.jpg",
      },
      {
        id: "cold-brew",
        name: "کلد برو",
        description: "قهوه عصاره‌گیری‌شده با آب سرد طی هجده ساعت",
        price: 158000,
        tag: "پیشنهاد باریستا",
        image:
          "assets/product-cold-brew.jpg",
      },
      {
        id: "lemonade",
        name: "لیموناد نعنا",
        description: "آب لیموی تازه، نعنا، سیروپ خانگی و یخ",
        price: 128000,
        image:
          "assets/product-lemonade.jpg",
      },
      {
        id: "berry-smoothie",
        name: "اسموتی بری",
        description: "توت‌فرنگی، تمشک، موز و ماست یونانی",
        price: 168000,
        tag: "بدون شکر",
        image:
          "assets/product-berry-smoothie.jpg",
      },
      {
        id: "peach-tea",
        name: "آیس‌تی هلو",
        description: "چای سرد دم‌کشیده، پوره هلو و برش میوه تازه",
        price: 138000,
        image:
          "assets/product-peach-tea.jpg",
      },
      {
        id: "mojito",
        name: "موهیتو کلاسیک",
        description: "لیموی تازه، نعنا، سودا و شیرین‌کننده ملایم",
        price: 142000,
        image:
          "assets/product-mojito.jpg",
      },
    ],
  },
  food: {
    title: "غذا",
    description: "غذاهای تازه و دست‌ساز با مواد اولیه روز",
    products: [
      {
        id: "chicken-salad",
        name: "سالاد مرغ گریل",
        description: "مرغ گریل، کاهو، گوجه گیلاسی، پارمزان و سس مخصوص",
        price: 285000,
        tag: "سالم",
        image:
          "assets/product-chicken-salad.jpg",
      },
      {
        id: "caesar",
        name: "سالاد سزار",
        description: "کاهوی تازه، مرغ گریل، نان کروتان و سس سزار خانگی",
        price: 298000,
        tag: "پرفروش",
        image:
          "assets/product-caesar.jpg",
      },
      {
        id: "alfredo",
        name: "پاستا آلفردو",
        description: "پنه، مرغ، قارچ، خامه و پنیر پارمزان",
        price: 345000,
        image:
          "assets/product-alfredo.jpg",
      },
      {
        id: "pesto-pasta",
        name: "پاستا پستو",
        description: "پاستا، سس ریحان و گردو، گوجه گیلاسی و پارمزان",
        price: 325000,
        tag: "گیاهی",
        image:
          "assets/product-pesto-pasta.jpg",
      },
      {
        id: "omelette",
        name: "املت مخصوص رُز",
        description: "تخم‌مرغ محلی، گوجه، کره، پنیر فتا و نان تازه",
        price: 218000,
        image:
          "assets/product-omelette.jpg",
      },
      {
        id: "breakfast",
        name: "صبحانه انگلیسی",
        description: "تخم‌مرغ، سوسیس، قارچ، لوبیا، گوجه و نان تست",
        price: 368000,
        tag: "کامل",
        image:
          "assets/product-breakfast.jpg",
      },
    ],
  },
  fastfood: {
    title: "فست‌فود",
    description: "طعم‌های هیجان‌انگیز برای یک وعده دلچسب",
    products: [
      {
        id: "classic-burger",
        name: "برگر کلاسیک",
        description: "۱۵۰ گرم گوشت، پنیر گودا، سبزیجات و سس مخصوص",
        price: 328000,
        tag: "پرفروش",
        image:
          "assets/product-classic-burger.jpg",
      },
      {
        id: "mushroom-burger",
        name: "ماشروم برگر",
        description: "گوشت دست‌ساز، قارچ و پنیر، گودا و سس مخصوص",
        price: 358000,
        image:
          "assets/product-mushroom-burger.jpg",
      },
      {
        id: "chicken-burger",
        name: "چیکن برگر",
        description: "مرغ سوخاری ترد، کاهو، خیارشور و سس خردل‌عسل",
        price: 298000,
        image:
          "assets/product-chicken-burger.jpg",
      },
      {
        id: "pepperoni",
        name: "پیتزا پپرونی",
        description: "خمیر دست‌ساز، پپرونی، موزارلا و سس گوجه",
        price: 398000,
        tag: "تند",
        image:
          "assets/product-pepperoni.jpg",
      },
      {
        id: "vegetable-pizza",
        name: "پیتزا سبزیجات",
        description: "قارچ، فلفل دلمه، زیتون، ذرت و پنیر موزارلا",
        price: 348000,
        tag: "گیاهی",
        image:
          "assets/product-vegetable-pizza.jpg",
      },
      {
        id: "club-sandwich",
        name: "کلاب ساندویچ",
        description: "مرغ، ژامبون، پنیر، تخم‌مرغ و سبزیجات با سیب‌زمینی",
        price: 288000,
        image:
          "assets/product-club-sandwich.jpg",
      },
    ],
  },
};

const numberFormatter = new Intl.NumberFormat("fa-IR");

function renderProductsPage() {
  const productList = document.querySelector("#product-list");
  if (!productList) return;

  const requestedCategory = new URLSearchParams(window.location.search).get("category");
  const categoryKey = Object.hasOwn(menuData, requestedCategory) ? requestedCategory : "hot";
  const category = menuData[categoryKey];

  document.title = `${category.title} | کافه شین`;
  document.querySelector("#category-title").textContent = category.title;
  document.querySelectorAll("#category-tabs a").forEach((link) => {
    const linkCategory = new URL(link.href).searchParams.get("category");
    link.classList.toggle("tab-active", linkCategory === categoryKey);
  });

  productList.innerHTML = category.products
    .map(
      (product) => `
        <article class="grid h-[120px] grid-cols-[125px_1fr] overflow-hidden rounded-[15px] border border-[rgba(104,113,61,0.12)] bg-white/40 p-[5px] transition duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]">
          <div class="relative min-h-[116px] overflow-hidden rounded-xl">
            <img class="h-[120px] object-cover" src="${product.image}" alt="${product.name}" loading="lazy" />
          </div>
          <div class="flex min-w-0 flex-col justify-between px-[17px] pt-4 pb-[13px] text-right">
            <h2 class="m-0 text-[20px] text-[#292c20]">${product.name}</h2>
            <div class="self-end whitespace-nowrap text-[#292c20]">
              <strong class="text-[20px] font-semibold">${numberFormatter.format(product.price)}</strong>
              <span class="text-[16px] text-muted"> تومان</span>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

renderProductsPage();
