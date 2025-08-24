import { IMAGEKIT_URLS } from "./constants";

// Images are now served from ImageKit for better performance

export const menuData = [
  {
    id: "burgers",
    title: "BURGERS",
    image: IMAGEKIT_URLS.menuMain.burgerMainSection,
    imagePosition: "right",
    items: [
      {
        name: "BEEF BURGER",
        description:
          "Classic beef burger with fresh vegetables and special sauce",
        price: "₹299",
      },
      {
        name: "BEEF DOUBLE BURGER",
        description:
          "Double beef patty with double cheese and premium toppings",
        price: "₹399",
      },
      {
        name: "CAJUN BURGER",
        description: "Spicy cajun seasoned beef burger with jalapeños",
        price: "₹349",
      },
      {
        name: "CHICKEN BURGER",
        description: "Grilled chicken breast with lettuce and mayo",
        price: "₹279",
      },
      {
        name: "CHICKEN FILLED BURGER",
        description: "Stuffed chicken burger with cheese and vegetables",
        price: "₹329",
      },
      {
        name: "CHICKEN LEMON BURGER",
        description: "Lemon-marinated chicken with fresh herbs",
        price: "₹299",
      },
      {
        name: "CHICKEN NUGGETS BURGER",
        description: "Crispy chicken nuggets in a soft bun",
        price: "₹259",
      },
      {
        name: "CHICKEN TIKKA BURGER",
        description: "Tikka-marinated chicken with mint chutney",
        price: "₹289",
      },
      {
        name: "EGG BURGER",
        description: "Fresh egg burger with cheese and vegetables",
        price: "₹199",
      },
      {
        name: "KHALEEJ BURGER",
        description: "Arabian-style burger with special spices",
        price: "₹379",
      },
      {
        name: "VEGETABLE BURGER",
        description: "Fresh vegetable patty with garden vegetables",
        price: "₹249",
      },
      {
        name: "ZINGER BURGER",
        description: "Spicy crispy chicken with hot sauce",
        price: "₹319",
      },
    ],
  },
  {
    id: "club-sandwiches",
    title: "CLUB SANDWICHES",
    image: IMAGEKIT_URLS.menuMain.clubSandwichMainSection,
    imagePosition: "left",
    items: [
      {
        name: "CHICKEN 65 CLUB",
        description: "Spicy chicken 65 with triple-decker bread",
        price: "₹349",
      },
      {
        name: "CLUB EMARAAT",
        description: "Premium club sandwich with Emaraat spices",
        price: "₹379",
      },
      {
        name: "CLUB MIX",
        description: "Mixed meat club sandwich with special sauce",
        price: "₹399",
      },
      {
        name: "DYNAMITE CLUB",
        description: "Explosive flavors with spicy chicken and cheese",
        price: "₹359",
      },
      {
        name: "EGG CLUB",
        description: "Triple-decker egg sandwich with vegetables",
        price: "₹279",
      },
      {
        name: "FALAFEL CLUB",
        description: "Crispy falafel with tahini sauce",
        price: "₹299",
      },
      {
        name: "KEBAB CLUB",
        description: "Grilled kebab with fresh vegetables",
        price: "₹329",
      },
      {
        name: "LULU CLUB",
        description: "Premium club sandwich with Lulu special sauce",
        price: "₹389",
      },
      {
        name: "PLUS CLUB",
        description: "Extra large club sandwich with all toppings",
        price: "₹369",
      },
      {
        name: "PRAWNS CLUB",
        description: "Fresh prawns with cocktail sauce",
        price: "₹429",
      },
      {
        name: "SHAWARMA CLUB",
        description: "Traditional shawarma in club sandwich style",
        price: "₹319",
      },
      {
        name: "SPECIAL CLUB",
        description: "Chef's special club sandwich with premium ingredients",
        price: "₹449",
      },
      {
        name: "VEGETABLE CLUB",
        description: "Fresh vegetables with hummus spread",
        price: "₹259",
      },
    ],
  },
  {
    id: "main-course",
    title: "MAIN COURSE",
    image: IMAGEKIT_URLS.menuMain.mainCourseMainSection,
    imagePosition: "right",
    items: [
      {
        name: "BROAST",
        description: "Traditional broast with aromatic spices",
        price: "₹399",
      },
      {
        name: "FATOOSH",
        description: "Fresh fatoosh salad with pita bread",
        price: "₹249",
      },
      {
        name: "FISH GRILL",
        description: "Grilled fish with herbs and lemon",
        price: "₹599",
      },
      {
        name: "HUMMUS",
        description: "Creamy hummus with olive oil",
        price: "₹199",
      },
      {
        name: "KEBAB",
        description: "Grilled kebab with spices",
        price: "₹349",
      },
      {
        name: "LAMB CHOPS",
        description: "Tender lamb chops with mint sauce",
        price: "₹699",
      },
      {
        name: "MANDI",
        description: "Traditional mandi rice with meat",
        price: "₹549",
      },
      {
        name: "MIX GRILL",
        description: "Assorted grilled meats with sides",
        price: "₹799",
      },
      {
        name: "MUTTABAL",
        description: "Smoky eggplant dip with tahini",
        price: "₹229",
      },
      {
        name: "PRAWNS",
        description: "Grilled prawns with garlic butter",
        price: "₹649",
      },
      {
        name: "ROOB TIKKA",
        description: "Tikka with roob sauce",
        price: "₹449",
      },
      {
        name: "SHAWAYA",
        description: "Traditional shawaya with rice",
        price: "₹399",
      },
      {
        name: "SQUID TIKKA",
        description: "Grilled squid with tikka spices",
        price: "₹499",
      },
      {
        name: "TABOOLEH",
        description: "Fresh tabooleh salad with bulgur",
        price: "₹199",
      },
      {
        name: "TIKKA",
        description: "Classic tikka with mint chutney",
        price: "₹379",
      },
    ],
  },
  {
    id: "sandwiches",
    title: "SANDWICHES",
    image: IMAGEKIT_URLS.menuMain.sandwichMainSection,
    imagePosition: "left",
    items: [
      {
        name: "BARTWA ROAD MATAFI COMBO",
        description: "Special combo sandwich from Bartwa Road",
        price: "₹299",
      },
      {
        name: "BUTTERFLY COMBO SANDWICH",
        description: "Butterfly-shaped sandwich with combo filling",
        price: "₹329",
      },
      {
        name: "CAJUN COMBO",
        description: "Spicy cajun combo sandwich",
        price: "₹359",
      },
      {
        name: "CAJUN COMBO SANDWICH",
        description: "Cajun spiced sandwich with combo filling",
        price: "₹379",
      },
      {
        name: "CHICKEN LEMON COMBO SANDWICH",
        description: "Lemon-marinated chicken combo sandwich",
        price: "₹339",
      },
      {
        name: "FILLET COMBO SANDWICH",
        description: "Chicken fillet combo sandwich",
        price: "₹369",
      },
      {
        name: "HOT DOG COMBO SANDWICH",
        description: "Classic hot dog with combo sides",
        price: "₹249",
      },
      {
        name: "KEBAB COMBO SANDWICH",
        description: "Kebab combo sandwich with special sauce",
        price: "₹319",
      },
      {
        name: "NUGGETS SANDWICH",
        description: "Crispy nuggets sandwich",
        price: "₹289",
      },
      {
        name: "PRAWNS SANDWICH",
        description: "Fresh prawns sandwich with cocktail sauce",
        price: "₹399",
      },
      {
        name: "SHISH TAWOOK COMBO SANDWICH",
        description: "Shish tawook combo sandwich",
        price: "₹349",
      },
      {
        name: "TANDOORI COMBO",
        description: "Tandoori spiced combo sandwich",
        price: "₹359",
      },
      {
        name: "TIKKA COBO SANDWICH",
        description: "Tikka combo sandwich with special sauce",
        price: "₹329",
      },
      {
        name: "ZINGER CHEETOS SANDWICH",
        description: "Zinger sandwich with Cheetos topping",
        price: "₹309",
      },
      {
        name: "ZINGER COMBO",
        description: "Zinger combo sandwich with sides",
        price: "₹339",
      },
    ],
  },
  {
    id: "desserts",
    title: "DESSERTS",
    image: IMAGEKIT_URLS.menuMain.dessertMainSection,
    imagePosition: "right",
    items: [
      {
        name: "ALF BAKE SPECIAL FALOODA",
        description: "House special falooda with rose syrup and ice cream",
        price: "₹199",
      },
      {
        name: "FRUIT SALAD",
        description: "Fresh seasonal fruits with honey dressing",
        price: "₹149",
      },
      {
        name: "FRUIT SALAD WITH ICE CREAM",
        description: "Fruit salad topped with vanilla ice cream",
        price: "₹179",
      },
      {
        name: "KINDER CRUSH",
        description: "Kinder chocolate shake with whipped cream",
        price: "₹189",
      },
      {
        name: "KIWI BRICKS",
        description: "Refreshing kiwi ice cream bricks",
        price: "₹159",
      },
      {
        name: "MANGO BRICKS",
        description: "Sweet mango ice cream bricks",
        price: "₹149",
      },
      {
        name: "MANGO FALOODA",
        description: "Mango falooda with vermicelli and ice cream",
        price: "₹189",
      },
      {
        name: "NUTELLA CRUSH",
        description: "Nutella shake with chocolate chips",
        price: "₹199",
      },
      {
        name: "OREO SHAKE",
        description: "Creamy Oreo milkshake with cookie pieces",
        price: "₹179",
      },
      {
        name: "PINEAPPLE BRICKS",
        description: "Tangy pineapple ice cream bricks",
        price: "₹159",
      },
      {
        name: "PINEAPPLE FALOODA",
        description: "Pineapple falooda with tropical flavors",
        price: "₹189",
      },
      {
        name: "PISTA FALOODA",
        description: "Pistachio falooda with nuts and ice cream",
        price: "₹169",
      },
      {
        name: "POMEGRANATE SEEDS",
        description: "Fresh pomegranate seeds with mint",
        price: "₹139",
      },
      {
        name: "SNICKERS CRUSH",
        description: "Snickers shake with caramel and peanuts",
        price: "₹199",
      },
      {
        name: "WATERMELON BRICKS",
        description: "Refreshing watermelon ice cream bricks",
        price: "₹149",
      },
    ],
  },
  {
    id: "fresh-juices",
    title: "FRESH JUICES",
    image: IMAGEKIT_URLS.menuMain.juiceMainSection,
    imagePosition: "left",
    items: [
      {
        name: "ABBADI JUICE",
        description: "Traditional Abbadi juice blend",
        price: "₹129",
      },
      {
        name: "ABC JUICE",
        description: "Apple, Beetroot, and Carrot juice",
        price: "₹119",
      },
      {
        name: "ABOOD JUICE",
        description: "Special Abood blend with tropical fruits",
        price: "₹139",
      },
      {
        name: "ALF BAKE SPECIAL",
        description: "House special juice blend",
        price: "₹159",
      },
      {
        name: "ANWAR QALB",
        description: "Heart-healthy juice blend",
        price: "₹149",
      },
      {
        name: "APPLE JUICE",
        description: "Fresh pressed apple juice",
        price: "₹99",
      },
      {
        name: "AVOCADO JUICE",
        description: "Creamy avocado smoothie",
        price: "₹169",
      },
      {
        name: "BANANA JUICE",
        description: "Fresh banana smoothie",
        price: "₹109",
      },
      {
        name: "BODY BUILDER",
        description: "Protein-rich juice for fitness",
        price: "₹189",
      },
      {
        name: "BURJ KHALEEFA",
        description: "Premium juice blend named after the iconic tower",
        price: "₹179",
      },
      {
        name: "CARROT JUICE",
        description: "Fresh carrot juice with ginger",
        price: "₹89",
      },
      {
        name: "CHICKOO JUICE",
        description: "Sweet chickoo fruit juice",
        price: "₹119",
      },
      {
        name: "COCKTAIL JUICE",
        description: "Mixed fruit cocktail juice",
        price: "₹149",
      },
      {
        name: "DESERT POWER",
        description: "Energy-boosting desert fruit blend",
        price: "₹139",
      },
      {
        name: "FALAK SPECIAL",
        description: "Special blend named after Falak",
        price: "₹169",
      },
      { name: "GRAPE JUICE", description: "Fresh grape juice", price: "₹129" },
      { name: "GUAVA JUICE", description: "Fresh guava juice", price: "₹119" },
      {
        name: "HABEEBI JUICE",
        description: "Special blend for loved ones",
        price: "₹139",
      },
      {
        name: "HANGOVER CURE",
        description: "Detoxifying juice blend",
        price: "₹159",
      },
      { name: "KIWI JUICE", description: "Fresh kiwi juice", price: "₹149" },
      {
        name: "LEMON MINT",
        description: "Refreshing lemon mint juice",
        price: "₹99",
      },
      {
        name: "LIFE JUICE",
        description: "Life-giving juice blend",
        price: "₹139",
      },
      {
        name: "MANGO BANANA",
        description: "Mango and banana smoothie",
        price: "₹129",
      },
      {
        name: "MAZBOOTH JUICE",
        description: "Strong and powerful juice blend",
        price: "₹159",
      },
      { name: "MOMI JUICE", description: "Special Momi blend", price: "₹119" },
      { name: "ORANGE JUICE", description: "Fresh orange juice", price: "₹89" },
      {
        name: "PINEAPPLE JUICE",
        description: "Fresh pineapple juice",
        price: "₹119",
      },
      {
        name: "POMEGRANATE JUICE",
        description: "Fresh pomegranate juice",
        price: "₹139",
      },
      {
        name: "POWER BOOSTER",
        description: "Energy-boosting juice blend",
        price: "₹169",
      },
      {
        name: "QUEEN JUICE",
        description: "Royal juice blend fit for a queen",
        price: "₹179",
      },
      {
        name: "ROOB AVOCADO",
        description: "Avocado juice with special roob blend",
        price: "₹189",
      },
      {
        name: "ROOB MANGO",
        description: "Mango juice with roob syrup",
        price: "₹149",
      },
      {
        name: "ROOB ROMAN",
        description: "Pomegranate juice with roob syrup",
        price: "₹159",
      },
      {
        name: "ROOB STRAWBERRY",
        description: "Strawberry juice with roob syrup",
        price: "₹139",
      },
      {
        name: "STRAWBERRY JUICE",
        description: "Fresh strawberry juice",
        price: "₹129",
      },
      {
        name: "SUMMER COOL",
        description: "Cooling summer juice blend",
        price: "₹119",
      },
      {
        name: "SWEET LEMON",
        description: "Sweetened lemon juice",
        price: "₹109",
      },
      {
        name: "THABAKKATH JUICE",
        description: "Special Thabakkath blend",
        price: "₹149",
      },
      {
        name: "WATERMELON JUICE",
        description: "Fresh watermelon juice",
        price: "₹99",
      },
      {
        name: "WEIGHT LOSS JUICE",
        description: "Detoxifying juice for weight loss",
        price: "₹159",
      },
    ],
  },
  {
    id: "mojitos",
    title: "MOJITOS",
    image: IMAGEKIT_URLS.menuMain.mojitoMainSection,
    imagePosition: "right",
    items: [
      {
        name: "LEMON MINT MOJITO",
        description: "Refreshing lemon mint mojito",
        price: "₹199",
      },
      {
        name: "PASSION FRUIT MOJITO",
        description: "Tropical passion fruit mojito",
        price: "₹219",
      },
      {
        name: "STRAWBERRY MOJITO",
        description: "Sweet strawberry mojito",
        price: "₹209",
      },
      {
        name: "TINDER BLUE MOJITO",
        description: "Blue curacao mojito with special blend",
        price: "₹229",
      },
    ],
  },
];
