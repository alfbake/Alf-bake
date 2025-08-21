// ImageKit Configuration
export const IMAGEKIT_CONFIG = {
  urlEndpoint: "https://ik.imagekit.io/kwqtma9xf/",
  publicKey: "public_kwqtma9xf",
  authenticationEndpoint: "https://your-backend.com/auth",
};

// Legacy constant for backward compatibility
export const ImageKitUrl: string = IMAGEKIT_CONFIG.urlEndpoint;

// ImageKit URL builder helper
export const buildImageKitUrl = (
  path: string,
  transformations?: string
): string => {
  const baseUrl = IMAGEKIT_CONFIG.urlEndpoint;
  if (transformations) {
    return `${baseUrl}${transformations}/${path}`;
  }
  return `${baseUrl}${path}`;
};

// Common ImageKit transformations
export const IMAGEKIT_TRANSFORMATIONS = {
  thumbnail: "tr=w-300,h-300,fo-face",
  medium: "tr=w-600,h-600,fo-face",
  large: "tr=w-1200,h-1200,fo-face",
  blur: "tr=bl-10",
  quality: "tr=q-80",
  format: "tr=f-webp",
} as const;

// ImageKit URLs organized by sections
export const IMAGEKIT_URLS = {
  // Logo
  logo: "https://cdn.jsdelivr.net/gh/alfbake/static-assets/logo.png",

  // Hero Carousel Section
  heroCarousel: {
    foodCoffee:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/food-coffee.jpg?updatedAt=1755521189422",
    foodDessert:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/food-dessert.jpg?updatedAt=1755521190279",
    foodBurger:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/food-burger.jpg?updatedAt=1755521190309",
    foodSalad:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/food-salad.jpg?updatedAt=1755521190395",
    shawarmaWithoutBg:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/shawarmaWithoutBg2.png?updatedAt=1755521200031",
    meat: "https://ik.imagekit.io/kwqtma9xf/AlfBake/food-steak.jpg?updatedAt=1755521194168",
  },

  // ALF BAKE Specials Section
  specials: {
    chaiWithoutBg:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/chaiWIthoutBg.png?updatedAt=1755521190772",
    burgerWithoutBg:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/burgerWithoutBg.png?updatedAt=1755521191000",
    grillChickenWithoutBg:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/grillChickenWithoutBg.png?updatedAt=1755521195771",
    friedChickenWithoutBg:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/friedChickenWithoutBg2.png?updatedAt=1755521195800",
    tikkaWithoutBg:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/tikkaWIthoutBg.png?updatedAt=1755521200470",
  },

  // Menu Section Main Images
  menuMain: {
    burgerMainSection:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/burgerMainSection.png?updatedAt=1755521191013",
    clubSandwichMainSection:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/clubSandWichMainSection.png?updatedAt=1755521191012",
    dessertMainSection:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/dessertMainSeciton.png?updatedAt=1755521190891",
    sandwichMainSection:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/sandwichMainSection.png?updatedAt=1755521200284",
    mojitoMainSection:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/mojitoMainSection.png?updatedAt=1755521198969",
    mainCourseMainSection:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/mainCouseMainSection.png?updatedAt=1755521196775",
    juiceMainSection:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/juiceMainSection.png?updatedAt=1755521196304",
  },

  // Home Page Menu Items
  homeMenu: {
    specialClub:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/specialClub.png?updatedAt=1755524795038",
    alfbakeSpecialFalooda:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/alfBakeSpecialFalooda.png?updatedAt=1755524795026",
    passionFruitMojito:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/passionFruitMojito.png?updatedAt=1755524794822",
    zingerBurger:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/zingerBurger.png?updatedAt=1755524556101",
  },

  // Common Backgrounds
  backgrounds: {
    footernew:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/e2b3d303-abbd-4747-854a-7ff864a60f4b.png?updatedAt=1755797478653",
    mainBanner:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/mainbanner.png?updatedAt=1755521195896",
    backgroundTexture:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/e2b3d303-abbd-4747-854a-7ff864a60f4b.png?updatedAt=1755797478653",
  },

  // Other Images
  other: {
    burger2:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/burger2.png?updatedAt=1755521190807",
    friedchicken:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/friedchicken.png?updatedAt=1755521195689",
  },

  // Profile Images
  profile: {
    founder1:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/WhatsApp%20Image%202025-08-17%20at%2011.02.13%20PM.jpeg?updatedAt=1755794431684",
    founder2:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/WhatsApp%20Image%202025-08-17%20at%2011.23.48%20PM.jpeg?updatedAt=1755794424154",
  },

  // Our Story Images
  ourStory: {
    backgroundTexture:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/e2b3d303-abbd-4747-854a-7ff864a60f4b.png?updatedAt=1755797478653",
  },
  mobileViewBoldFlavor: {
    image:
      "https://ik.imagekit.io/kwqtma9xf/AlfBake/_%20(13).jpeg?updatedAt=1755801829838",
  },
};
