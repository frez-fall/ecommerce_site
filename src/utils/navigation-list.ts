export interface Navigation {
  value: string;
  icon: any;
  selected: boolean;
  id: string;
}

export interface NavigationWithMethod extends Navigation {
  onClick: () => void;
}

export const navigationItems = [
  {
    value: "Home",
    icon: "/src/assets/icons/Home.svg",
    selected: false,
    id: "home",
  },
  {
    value: "Products",
    icon: "/src/assets/icons/Products.svg",
    selected: false,
    id: "products",
    hasModal: true
  },
  {
    value: "Skin Quiz",
    icon: "/src/assets/icons/Skin Quiz.svg",
    selected: false,
    id: "skin-quiz",
  },
  {
    value: "User",
    icon: "/src/assets/icons/User.svg",
    selected: false,
    id: "user",
  },
  {
    value: "About",
    icon: "/src/assets/icons/brandlogo_secondary.svg",
    selected: false,
    id: "about",
  },
];
