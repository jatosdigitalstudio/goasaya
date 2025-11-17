export interface MenuItem {
  title: string;
  description: string;
  price: string;
  image: string; 
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
      { title: "Cauliflower Tempura", description: "Light, crispy tempura-battered cauliflower with savory dipping sauce.", price: "53.000", image: "/appetizer-cauliflower-tempura.jpg"},
      { title: "Griffin’s Mala Shrimp", description: "Crispy, spicy, saucy. Goa style shrimp wonton in creamy mala sauce.", price: "70.000", image: "/appetizer-mala-shrimp.jpg" },
      { title: "Crispy Paru", description: "A curated Indonesian snack. Addictively crispy.", price: "86.000", image: "/appetizer-crispy-paru.jpg" },
      { title: "Shrimp Secret", description: "Freshness with a touch of crunch. Silky parmesan sauce and avocado.", price: "121.000", image: "/appetizer-shrimp-secret.jpg" },
      { title: "Sate Padang", description: "Elevated Indonesian classic. Options: Beef / Tongue / Mix. Served with lontong.", price: "168.000 / 3 pcs", image: "/appetizer-sate-padang.jpg" },
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
      },
      { title: "Caesar Salad", description: "Romaine with creamy Caesar dressing.", price: "175.000", image: "/mains-caesar-salad.jpg" },
      { title: "Goa Salad", description: "Light, sweet, zesty citrus salad.", price: "160.000", image: "/mains-goa-salad.jpg" },
      { title: "Thai Beef Salad", description: "Grilled beef, herbs, Thai citrus dressing.", price: "142.000", image: "/mains-thai-beef-salad.jpg" },
    ]
  },

  // ------------------ MAINS ------------------
  {
    name: "Mains",
    items: [
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
      { title: "Es Cendol", description: "A Refreshing Indonesian Delicacies.", price: "50.000", image: "/ice-cendol"},
      { title: "Es Uing-Uing Palu Butung", description: "Traditional Makassar Dessert Served with Bubur Sumsum Custard, Banana Syrup, Ack Fruit, Palm Fruits and Read Bean.", price: "60.000", image: "/ice-uwing.jpg" },
      { title: "Es Goyobod", description: "Traditinal Garut Dessert, Fermented Sweet Cassava, Jack Fruit, Pandan Starch Cake, Palm Fruits, Avovado and Coconut Milk Syrup.", price: "60.000", image: "/ice-fruitasian.jpg" }
    ]
  },

  // ------------------ PLATED DESSERT ------------------
  {
    name: "Plated Dessert",
    items: [
      { title: "Hazelnut Paris Brest", description: "Traditional French Dessert Served White Hazelnut Ganache, Salted Carame and Grill Pineapple.", price: "75.000", image: "/dessert-havana.jpg" },
      { title: "Tres Leches", description: "Vanilla Sponge Infused Three Milk Serve White Chocolate Ganache and Banana Passionfruit Curd.", price: "75.000", image: "/dessert-havana.jpg" },
      { title: "Italian Tiramisu", description: "Traditional Italian Dessert Layer with Mascarpone Cream & Espresso Soaking Lady Finger Biscuit", price: "150.000", image: "/dessert-havana.jpg" },
      { title: "Strawberry Swings", description: "Strawberry Rubby Mousse with Macerated, Chocolate Sponge and Yogurt Gel.", price: "160.000", image: "/dessert-havana.jpg" },
      { title: "Zen Stone", description: "Milk Chocolate Earlgrey with Lychee Filling, Milk Chocolate Biscuit Crumb and Chocolate Ganache.", price: "160.000", image: "/dessert-havana.jpg" },
      { title: "Putu Dery Cake", description: "Fluffy Pandan Chiffon with Aren Coconut Caramel and Pandan Namelaca Cream.", price: "55.000", image: "/dessert-havana.jpg" },
      { title: "Guinnes Caramel Cake", description: "Guinness Sponge, Pretzels Praline, Mousse, Caramel and Ganache Guinness.", price: "80.000", image: "/dessert-havana.jpg" },
      { title: "Coconut Shell", description: "Coconut Mousse with Pineapple Compote, Passion Fuit Curd, Pineapple Mousse and Coconut Chiffon.", price: "85.000", image: "/dessert-havana.jpg" },
      { title: "Jiggly Mushroom", description: "Chocolate and Vanilla Pudding White Chocolate Soil and Cream Anglaise.", price: "115.000", image: "/dessert-havana.jpg" },
    ]
  },

  // ------------------ COFFEE ------------------
  {
    name: "Coffee",
    items: [
      { title: "Espresso", description: "", price: "55.000", image: "/bev-tea.jpg" },
      { title: "Picolo", description: "", price: "55.000", image: "/bev-milktea.jpg" },
      { title: "Latte", description: "(Hot/Iced)", price: "65.000", image: "/bev-water.jpg" },
       { title: "Capuccino", description: "(Hot/Iced)", price: "65.000", image: "/bev-tea.jpg" },
      { title: "Americano", description: "(Hot/Iced)", price: "65.000", image: "/bev-milktea.jpg" },
      { title: "Flat White", description: "", price: "65.000", image: "/bev-water.jpg" }
    ]
  },

  // ------------------ NON COFFEE ------------------
  {
    name: "Non Coffee",
    items: [
      { title: "Chocolate", description: "(Hot/Iced)", price: "55.000", image: "/bev-milktea.jpg" },
      { title: "Cookies and Cream Frappe", description: "", price: "65.000", image: "/bev-water.jpg" },
      { title: "Black Mamba Frappe", description: "", price: "65.000", image: "/bev-water.jpg" },
    ]
  },

  // ------------------ Matcha Series ------------------
  {
    name: "Matcha Series (Hot/Iced)",
    items: [
      { title: "Artisan Matcha", description: "Matcha & Fresh Milk.", price: "65.000", image: "/bev-water.jpg" },
      { title: "Banana Matcha Latte", description: "Matcha Original, Banana & Oat Milk.", price: "65.000", image: "/bev-water.jpg" },
      { title: "Strawberry Matcha Latte", description: "Strowberry, Red Syrup, Milk & Matcha Original.", price: "65.000", image: "/bev-water.jpg" },
      { title: "Ceremonial Matcha", description: "Ceremonial Matcha & Fresh Milk.", price: "135.000", image: "/bev-water.jpg" },
    ]
  },

  // ------------------ SIGNATURE COCKTAILS ------------------
  {
    name: "Signature Cocktails",
    items: [
      { title: "Pink Sakura", description: "Dry Gin, Orange Liqueur, Cordial Sakura & Foamer.", price: "135.000", image: "/cocktail-goasunset.jpg" },
      { title: "Holiday's Inn", description: "Gold Whisky, Irish Cream, Coffee Liqueur, Cold Brew.", price: "145.000", image: "/cocktail-midnight.jpg" },
      { title: "Al Capone", description: "Dry Gin, Dry Vermouth, Kina & Mascarpone.", price: "150.000", image: "/cocktail-goldenpalm.jpg" },
      { title: "The Cambers", description: "Dry Gin, St.Germani, Cucumber & Kina.", price: "150.000", image: "/cocktail-goasunset.jpg" },
      { title: "Bird of Paradise", description: "Saccharum, Aperol, Pineapple & Citrus.", price: "150.000", image: "/cocktail-midnight.jpg" },
      { title: "Gari-gari", description: "Spice Rum, Pina Gum & Gari-Gari.", price: "150.000", image: "/cocktail-goldenpalm.jpg" },
      { title: "Ruby Island", description: "Vodca, Dry Gin, Rum, Orange Liqueur, Red Cordial.", price: "155.000", image: "/cocktail-goasunset.jpg" },
      { title: "La Aurora", description: "Anchitos Oro, Italian Bitters, Pina Gum & Citrus.", price: "165.000", image: "/cocktail-midnight.jpg" },
      { title: "Rhubarb Brandy", description: "Brandy, Ginger, Tangerine, Sweet Sour.", price: "165.000", image: "/cocktail-goldenpalm.jpg" },
      { title: "Neglated", description: "Clarified Negroni with Choco Nutella.", price: "165.000", image: "/cocktail-goldenpalm.jpg" },
    ]
  },

  // ------------------ CLASSIC COCKTAILS ------------------
  {
    name: "Classic Cocktails",
    items: [
      { title: "Lychee Martini", description: "Martini with Gin & lychee liqueur.", price: "130.000", image: "/classic-negroni.jpg" },
      { title: "Margarita", description: "Mix of Tequila, Triple Sec & Citrus.", price: "135.000", image: "/classic-oldfashioned.jpg" },
      { title: "Whiskey Sour", description: "Whiskey, Citrus, & Foamer.", price: "150.000", image: "/classic-margarita.jpg" },
      { title: "Old Fashioned", description: "Whiskey & Bitters.", price: "150.000", image: "/classic-margarita.jpg" },
      { title: "Cosmopolitan", description: "Vodca, Triple sec, Cranberry & Citrus.", price: "160.000", image: "/classic-margarita.jpg" },
    ]
  },

  // ------------------ MOCKTAILS ------------------
  {
    name: "Mocktails",
    items: [
      { title: "Autumn Spice", description: "Cranberry, Orange, Green Apple & Ginger Soda.", price: "120.000", image: "/mock-berry.jpg" },
      { title: "Blue Ocean", description: "Curacao, Pineapple, Coconut Water & Citrus.", price: "120.000", image: "/mock-citrus.jpg" },
      { title: "Sparkling Apple", description: "Green Apple, Pineapple, mint & Citrus.", price: "120.000", image: "/mock-garden.jpg" },
      { title: "Ube Butterfly", description: "Ube, Butterfly Pea, Coconut Milk & Citrus.", price: "120.000", image: "/mock-garden.jpg" },
    ]
  },

  // ------------------ TEA & HEALTHY JUICE ------------------
  {
    name: "Tea by TWG",
    items: [
      { title: "Moroccan Mint Tea", description: "", price: "45.000", image: "/juice-green.jpg" },
      { title: "Chamomile Tea", description: "", price: "45.000", image: "/juice-cleanse.jpg" },
      { title: "Jasmine Tea", description: "", price: "45.000", image: "/juice-redvelvet.jpg" },
      { title: "English Breakfast Tea", description: "", price: "45.000", image: "/juice-redvelvet.jpg" },
      { title: "Earl Grey Tea", description: "", price: "45.000", image: "/juice-redvelvet.jpg" },
      { title: "Vanilla Bourbon Tea", description: "", price: "45.000", image: "/juice-redvelvet.jpg" }
    ]
  },
  {
    name: "Flavour Tea",
    items: [
      { title: "Ice Tea", description: "", price: "35.000", image: "/juice-green.jpg" },
      { title: "Lemon Tea", description: "", price: "45.000", image: "/juice-cleanse.jpg" },
      { title: "Goasaya Tea", description: "", price: "45.000", image: "/juice-redvelvet.jpg" },
      { title: "Lychee Tea", description: "", price: "45.000", image: "/juice-redvelvet.jpg" },
    ]
  },
  {
    name: "Healthy Juice",
    items: [
      { title: "Energy Booster", description: "Orange, Carrot & Ginger.", price: "60.000", image: "/juice-green.jpg" },
      { title: "Green Detox", description: "Green Pokcoy, Pineapple, Kyuri & Citrus.", price: "60.000", image: "/juice-cleanse.jpg" },
      { title: "Glowing Skin", description: "Pineapple; Apple & Citrus.", price: "60.000", image: "/juice-redvelvet.jpg" },
      { title: "Pink Glow", description: "Apple, Strowberry, Carrot & Coconut Water.", price: "60.000", image: "/juice-redvelvet.jpg" },
      { title: "Berry Harmoni", description: "Kiwi & Strawberry.", price: "60.000", image: "/juice-redvelvet.jpg" }
    ]
  }
];