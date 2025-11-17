// menu-data.ts
// Full GOASAYA Menu Data (JSON + Typescript Types)

export interface MenuItem {
  title: string;
  description: string;
  price: string;
  image: string; // "/your-image.jpg"
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  // ------------------ APPETIZER ------------------
  {
    name: "Appetizer",
    items: [
      {
        title: "Shrimp Secret",
        description: "Freshness with a touch of crunch. Silky parmesan sauce and avocado.",
        price: "121.000",
        image: "/appetizer-shrimp-secret.jpg"
      },
      {
        title: "Griffin’s Mala Shrimp",
        description: "Crispy, spicy, saucy. Goa style shrimp wonton in creamy mala sauce.",
        price: "168.000 / 3 pcs",
        image: "/appetizer-mala-shrimp.jpg"
      },
      {
        title: "Cauliflower Tempura",
        description: "Light, crispy tempura-battered cauliflower with savory dipping sauce.",
        price: "53.000",
        image: "/appetizer-cauliflower-tempura.jpg"
      },
      {
        title: "Sate Padang",
        description: "Elevated Indonesian classic. Options: Beef / Tongue / Mix. Served with lontong.",
        price: "86.000",
        image: "/appetizer-sate-padang.jpg"
      },
      {
        title: "Crispy Paru",
        description: "A curated Indonesian snack. Addictively crispy.",
        price: "70.000",
        image: "/appetizer-crispy-paru.jpg"
      }
    ]
  },

  // ------------------ TO SHARE ------------------
  {
    name: "To Share",
    items: [
      {
        title: "Boneless Wings",
        description: "Open flame smokiness, bold flavor without the mess.",
        price: "195.000 / 3 pcs",
        image: "/share-boneless-wings.jpg"
      },
      {
        title: "Calamari Fritter",
        description: "Crispy fritters with tender squid inside.",
        price: "168.000",
        image: "/share-calamari-fritter.jpg"
      },
      {
        title: "Truffle Fries",
        description: "Sweet potato or potato — your choice.",
        price: "120.000",
        image: "/share-truffle-fries.jpg"
      },
      {
        title: "Oxtail Soup",
        description: "Slow braised Indonesian oxtail soup.",
        price: "282.000",
        image: "/share-oxtail-soup.jpg"
      },
      {
        title: "Iga Kecombrang",
        description: "Tender braised & grilled kecombrang ribs.",
        price: "255.000",
        image: "/share-iga-kecombrang.jpg"
      },
      {
        title: "Layers by Layers",
        description: "Elegant potato crafted like a gold bar.",
        price: "170.000",
        image: "/share-layers.jpg"
      },
      {
        title: "Smokey Toast",
        description: "Chicken, scrambled egg, salad — American style.",
        price: "120.000",
        image: "/share-smokey-toast.jpg"
      },
      {
        title: "Nordic Bite",
        description: "A crisp, modern taste of the North.",
        price: "250.000",
        image: "/share-nordic-bite.jpg"
      },
      {
        title: "Soft Shell Crab",
        description: "Crispy soft shell crab with rich salted egg sauce.",
        price: "235.000",
        image: "/share-soft-shell-crab.jpg"
      }
    ]
  },

  // ------------------ MAINS ------------------
  {
    name: "Mains",
    items: [
      { title: "Caesar Salad", description: "Romaine with creamy Caesar dressing.", price: "175.000", image: "/mains-caesar-salad.jpg" },
      { title: "Goa Salad", description: "Light, sweet, zesty citrus salad.", price: "160.000", image: "/mains-goa-salad.jpg" },
      { title: "Thai Beef Salad", description: "Grilled beef, herbs, Thai citrus dressing.", price: "142.000", image: "/mains-thai-beef-salad.jpg" },
      { title: "Coastal Aglio Olio", description: "Ocean-fresh spaghetti with white wine.", price: "245.000", image: "/mains-aglio-olio.jpg" },
      { title: "Capellini A La Vodka", description: "Blue shrimp, tomato vodka sauce.", price: "249.000", image: "/mains-capellini.jpg" },
      { title: "The Italian Goa", description: "Deconstructed pasta seasoned by you.", price: "168.000", image: "/mains-italian-goa.jpg" },
      { title: "Creamy Chicken Pasta", description: "Velvety cream pasta with grilled chicken.", price: "170.000", image: "/mains-creamy-chicken-pasta.jpg" },
      { title: "Seafood Marinara", description: "Rich marinara with fresh seafood.", price: "230.000", image: "/mains-seafood-marinara.jpg" },
      { title: "Beef Burger", description: "Goa patty, Australian style, with fries.", price: "270.000", image: "/mains-beef-burger.jpg" },
      { title: "Duck Confit", description: "Slow cooked duck on mashed potato.", price: "295.000", image: "/mains-duck-confit.jpg" },
      { title: "Black Cod", description: "Caviar gin beurre blanc.", price: "185.000", image: "/mains-black-cod.jpg" },
      { title: "Lemon Butter Salmon", description: "Seared salmon with lemon butter.", price: "270.000", image: "/mains-lemon-butter-salmon.jpg" },
      { title: "Aromatic Grilled Chicken Rice", description: "Herb grilled chicken over warm rice.", price: "199.000", image: "/mains-aromatic-rice.jpg" },
      { title: "Minang Fried Rice", description: "Spiced Minang rice with beef tongue.", price: "210.000", image: "/mains-minang-rice.jpg" },
      { title: "Beef Cheek 18 Hours", description: "Melt-in-mouth slow cooked beef cheek.", price: "288.000", image: "/mains-beef-cheek.jpg" },
      { title: "Duck Collagen Soba", description: "Soba served with smoked duck.", price: "230.000", image: "/mains-duck-soba.jpg" },
      { title: "The Goa Steak", description: "6 sauces & potato pillows.", price: "999.000", image: "/mains-goa-steak.jpg" },
      { title: "Smoked Duck with Red Wine Sauce", description: "Smoked duck with rich wine sauce.", price: "289.000", image: "/mains-smoked-duck.jpg" }
    ]
  },

  // ------------------ WHOLE CAKES ------------------
  {
    name: "Whole Cakes",
    items: [
      { title: "Carrot Cake", description: "Moist spiced carrot cake.", price: "300.000", image: "/whole-carrot.jpg" },
      { title: "Goa Golden Cake", description: "Vanilla sponge with burnt meringue.", price: "400.000", image: "/whole-golden.jpg" },
      { title: "Bumble Bee", description: "Milk chocolate mousse + banana caramel.", price: "400.000", image: "/whole-bumblebee.jpg" },
      { title: "Lady Whisper", description: "Oolong chiffon + melon.", price: "500.000", image: "/whole-ladywhisper.jpg" },
      { title: "Manjari Chocolate Cake", description: "Valrhona dark chocolate.", price: "900.000", image: "/whole-manjari.jpg" },
      { title: "Mango & Coconut Cake", description: "Tropical mousse layers.", price: "400.000", image: "/whole-mango-coconut.jpg" },
      { title: "Ube Basque Burnt Cheesecake", description: "Purple ube cheesecake.", price: "700.000", image: "/whole-ube.jpg" }
    ]
  },

  // ------------------ SLICE CAKES ------------------
  {
    name: "Slice Cakes",
    items: [
      { title: "Ube Basque Burnt Cheesecake", description: "Creamy ube cheesecake.", price: "75.000", image: "/slice-ube.jpg" },
      { title: "Carrot Cake", description: "Carrot, walnut, citrus frosting.", price: "65.000", image: "/slice-carrot.jpg" },
      { title: "Bolu Jadul", description: "Classic Indonesian cake.", price: "50.000", image: "/slice-bolu.jpg" },
      { title: "Banana Bread Chocochips & Pecan", description: "Banana cake with pecan & ganache.", price: "65.000", image: "/slice-banana.jpg" },
      { title: "Chocolate Fudge Brownie", description: "Dense, moist chocolate.", price: "70.000", image: "/slice-brownie.jpg" }
    ]
  },

  // ------------------ INDONESIAN ICE ------------------
  {
    name: "Indonesian Ice",
    items: [
      { title: "Es Uing-Uing Palu Butung", description: "Makassar dessert with banana, palm fruits, red bean.", price: "60.000", image: "/ice-uwing"},
      { title: "Es Uing-Uing Palu Butung", description: "Makassar dessert with banana, palm fruits, red bean.", price: "60.000", image: "/ice-uwing.jpg" },
      { title: "Es Fruitasia", description: "Seasonal fruit over shaved ice.", price: "65.000", image: "/ice-fruitasian.jpg" }
    ]
  },

  // ------------------ PLATED DESSERT ------------------
  {
    name: "Plated Dessert",
    items: [
      { title: "Tropical Havana", description: "Pineapple, coconut crème, passionfruit sorbet.", price: "99.000", image: "/dessert-havana.jpg" },
      { title: "Lady Whisper", description: "Oolong chiffon, melon spheres, citrus compote.", price: "110.000", image: "/dessert-ladywhisper.jpg" },
      { title: "Matcha Affair", description: "Matcha mousse, crumble, marshmallow cream.", price: "115.000", image: "/dessert-matcha.jpg" }
    ]
  },

  // ------------------ BEVERAGES ------------------
  {
    name: "Beverages",
    items: [
      { title: "Tea", description: "Chamomile / English Breakfast / Earl Grey / Green Tea.", price: "35.000", image: "/bev-tea.jpg" },
      { title: "Milk Tea / Sweet Tea", description: "Classic comfort teas.", price: "30.000", image: "/bev-milktea.jpg" },
      { title: "Mineral Water", description: "Still or sparkling.", price: "20.000", image: "/bev-water.jpg" }
    ]
  },

  // ------------------ SIGNATURE COCKTAILS ------------------
  {
    name: "Signature Cocktails",
    items: [
      { title: "Goa Sunset", description: "Tropical lychee & citrus spritz.", price: "165.000", image: "/cocktail-goasunset.jpg" },
      { title: "Midnight Bloom", description: "Floral gin infusion.", price: "185.000", image: "/cocktail-midnight.jpg" },
      { title: "Golden Palm", description: "Whisky, spice, pineapple.", price: "175.000", image: "/cocktail-goldenpalm.jpg" }
    ]
  },

  // ------------------ CLASSIC COCKTAILS ------------------
  {
    name: "Classic Cocktails",
    items: [
      { title: "Negroni", description: "Bold bittersweet classic.", price: "165.000", image: "/classic-negroni.jpg" },
      { title: "Old Fashioned", description: "Whisky, sugar, bitters.", price: "180.000", image: "/classic-oldfashioned.jpg" },
      { title: "Margarita", description: "Tequila, lime, triple sec.", price: "160.000", image: "/classic-margarita.jpg" }
    ]
  },

  // ------------------ MOCKTAILS ------------------
  {
    name: "Mocktails",
    items: [
      { title: "Berry Blush", description: "Fresh berries & fizz.", price: "55.000", image: "/mock-berry.jpg" },
      { title: "Citrus Spark", description: "Orange, lime, tonic.", price: "50.000", image: "/mock-citrus.jpg" },
      { title: "Garden Cooler", description: "Herbal, refreshing cucumber mint.", price: "48.000", image: "/mock-garden.jpg" }
    ]
  },

  // ------------------ HEALTHY JUICE ------------------
  {
    name: "Healthy Juice",
    items: [
      { title: "Green Glow", description: "Kale, apple, cucumber.", price: "45.000", image: "/juice-green.jpg" },
      { title: "Tropical Cleanse", description: "Pineapple, turmeric, lemon.", price: "48.000", image: "/juice-cleanse.jpg" },
      { title: "Red Velvet", description: "Beet, carrot, citrus.", price: "50.000", image: "/juice-redvelvet.jpg" }
    ]
  }
];