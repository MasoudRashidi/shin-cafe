const menuData = {
  "hot-coffee": {
    title: "قهوه‌های گرم",
    products: [
      { id: "espresso", name: "اسپرسو", price: 80000, image: "assets/product-espresso.jpg" },
      { id: "double-espresso", name: "دبل اسپرسو", price: 110000, image: "assets/product-double-espresso.jpg" },
      { id: "americano", name: "آمریکانو", price: 150000, image: "assets/product-americano.jpg" },
      { id: "cappuccino", name: "کاپوچینو", price: 150000, image: "assets/product-cappuccino.jpg" },
      { id: "latte", name: "لاته", price: 150000, image: "assets/product-latte.jpg" },
    ],
  },
  "hot-drinks": {
    title: "نوشیدنی‌های گرم",
    products: [
      { id: "black-tea", name: "چای سیاه", price: 40000, image: "assets/product-black-tea.jpg" },
      { id: "herbal-tea", name: "دمنوش", price: 50000, image: "assets/product-herbal-tea.jpg" },
      { id: "hot-chocolate", name: "هات چاکلت", price: 150000, image: "assets/product-hot-chocolate.jpg" },
      { id: "cocoa-milk", name: "شیر کاکائو", price: 150000, image: "assets/product-cocoa-milk.jpg" },
      { id: "coconut-latte", name: "لاته نارگیل", price: 155000, image: "assets/product-coconut-latte.jpg" },
      { id: "hazelnut-latte", name: "لاته فندق", price: 155000, image: "assets/product-hazelnut-latte.jpg" },
      { id: "pistachio-latte", name: "لاته پسته", price: 155000, image: "assets/product-pistachio-latte.jpg" },
      { id: "masala", name: "ماسالا", price: 150000, image: "assets/product-masala.jpg" },
      { id: "karak-tea", name: "چای کرک هل", price: 160000, image: "assets/product-karak-tea.jpg" },
      { id: "hot-sohan", name: "هات سوهان", price: 155000, image: "assets/product-hot-sohan.jpg" },
    ],
  },
  cool: {
    title: "نوشیدنی‌های خنک",
    products: [
      { id: "lemonade", name: "لیموناد", price: 140000, image: "assets/product-lemonade.jpg" },
      { id: "mojito", name: "موهیتو", price: 160000, image: "assets/product-mojito.jpg" },
      { id: "carrot-juice", name: "آب هویج", price: 125000, image: "assets/product-carrot-juice.jpg" },
      { id: "carrot-ice-cream", name: "آب هویج بستنی", price: 150000, image: "assets/product-carrot-ice-cream.jpg" },
      { id: "magoon", name: "معجون", price: 250000, image: "assets/product-magoon.jpg" },
      { id: "banana-milk", name: "شیرموز بستنی", price: 160000, image: "assets/product-banana-milk.jpg" },
    ],
  },
  shakes: {
    title: "شیک‌ها",
    products: [
      { id: "chocolate-shake", name: "شیک شکلات", price: 230000, image: "assets/product-chocolate-shake.jpg" },
      { id: "vanilla-shake", name: "شیک وانیل یا میلک شیک", price: 220000, image: "assets/product-vanilla-shake.jpg" },
      { id: "strawberry-shake", name: "شیک توت فرنگی", price: 230000, image: "assets/product-strawberry-shake.jpg" },
      { id: "mango-shake", name: "شیک انبه", price: 230000, image: "assets/product-mango-shake.jpg" },
    ],
  },
  desserts: {
    title: "دسرها",
    products: [
      { id: "carrot-walnut-cake", name: "کیک هویج گردو", price: 135000, image: "assets/product-carrot-walnut-cake.jpg" },
      { id: "chocolate-cake", name: "کیک شکلات", price: 140000, image: "assets/product-chocolate-cake.jpg" },
      { id: "pumpkin-cake", name: "کیک کدو حلوایی", price: 135000, image: "assets/product-pumpkin-cake.jpg" },
      { id: "tiramisu", name: "تیرامیسو", price: 200000, image: "assets/product-tiramisu.jpg" },
      { id: "cookie", name: "کوکی", price: 85000, image: "assets/product-cookie.jpg" },
    ],
  },
  cold: {
    title: "نوشیدنی‌های سرد",
    products: [
      { id: "iced-americano", name: "آیس آمریکانو", price: 150000, image: "assets/product-iced-americano.jpg" },
      { id: "iced-strawberry-latte", name: "آیس لاته توت فرنگی", price: 150000, image: "assets/product-iced-strawberry-latte.jpg" },
      { id: "iced-coconut-latte", name: "آیس لاته نارگیل", price: 150000, image: "assets/product-iced-coconut-latte.jpg" },
      { id: "iced-pistachio-latte", name: "آیس لاته پسته", price: 160000, image: "assets/product-iced-pistachio-latte.jpg" },
      { id: "iced-hazelnut-latte", name: "آیس لاته فندق", price: 160000, image: "assets/product-iced-hazelnut-latte.jpg" },
      { id: "iced-latte", name: "آیس لاته", price: 150000, image: "assets/product-iced-latte.jpg" },
    ],
  },
};

const numberFormatter = new Intl.NumberFormat("fa-IR");

function renderProductsPage() {
  const productList = document.querySelector("#product-list");
  if (!productList) return;

  const requestedCategory = new URLSearchParams(window.location.search).get("category");
  const categoryKey = Object.hasOwn(menuData, requestedCategory) ? requestedCategory : "hot-coffee";
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
            <img class="h-[120px] w-full object-cover" src="${product.image}" alt="${product.name}" loading="lazy" />
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
