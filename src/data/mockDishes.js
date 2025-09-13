import airFryerPaneerTikka from '../components/images/air-fryer-paneer-tikka-featured.jpg';
import alooTikki from '../components/images/aloo-tikki.jpg';
import b0248411d7b2645a9f5392014fbee514 from '../components/images/b0248411d7b2645a9f5392014fbee514.jpg';
import butterChicken from '../components/images/butter-chicken--750x750.jpg';
import Cabbagee from '../components/images/Cabbagee.png';
import ChickenCurryThumbnail from '../components/images/Chicken-Curry-Thumbnail.jpg';
import DakMakhni from '../components/images/Dak Makhni.png';
import easyVegetableBiryani from '../components/images/easy-vegetable-biryani.jpg';
import french from '../components/images/french.png';
import haraBharaKabab from '../components/images/hara-bhara-kabab.png';

import IceCreamSundaeHero from '../components/images/Ice-cream-sundae-hero-11-1024x1024.jpg';
import KadaiPaneer from '../components/images/Kadai Paneer.png';
import mangoKulfi from '../components/images/mango-kulfi-500x500.jpg';
import OIP from '../components/images/OIP.png';
import PaneerButterMasala from '../components/images/Paneer Butter Masala.png';
import papad from '../components/images/papad.png';
import Phirni from '../components/images/Phirni.png';
import R from '../components/images/R.jpeg';
import Rasgulla from '../components/images/Rasgulla.png';
import TandooriChicken from '../components/images/Tandoori-Chicken.png';
import VegetableSpringRolls from '../components/images/Vegetable-Spring-Rolls.jpg';
import wp2370074 from '../components/images/wp2370074.jpg';
import GarlicBreadFoodiecrush from '../components/images/Garlic-Bread-foodiecrush.com-007.jpg';


export const dishes = [
    // ===== STARTERS =====
    {
        id: 1,
        name: "Paneer Tikka",
        description: "Marinated paneer cubes grilled with spices.",
        image: airFryerPaneerTikka,
        mealType: "STARTER",
        type: "VEG",
        isVeg: true,
        ingredients: [
            { name: "Paneer", quantity: "250g" },
            { name: "Yogurt", quantity: "1/2 cup" },
            { name: "Spices", quantity: "to taste" }
        ]
    },
    {
        id: 2,
        name: "Veg Spring Rolls",
        description: "Crispy rolls stuffed with vegetables.",
        image: VegetableSpringRolls,
        mealType: "STARTER",
        type: "VEG",
        isVeg: true,
        ingredients: [
            { name: "Cabbage", quantity: "1 cup" },
            { name: "Carrot", quantity: "1 cup" },
            { name: "Spring Roll Sheets", quantity: "6 pcs" }
        ]
    },
    {
        id: 3,
        name: "Hara Bhara Kebab",
        description: "Spinach and green peas patties.",
        image: haraBharaKabab,
        mealType: "STARTER",
        type: "VEG",
        isVeg: true,
        ingredients: [
            { name: "Spinach", quantity: "100g" },
            { name: "Green Peas", quantity: "50g" },
            { name: "Potato", quantity: "1 boiled" }
        ]
    },
    {
        id: 4,
        name: "Chicken Tandoori",
        description: "Chicken legs marinated in yogurt and spices, roasted in tandoor.",
        image: TandooriChicken,
        mealType: "STARTER",
        type: "NON-VEG",
        isVeg: false,
        ingredients: [
            { name: "Chicken Legs", quantity: "4 pcs" },
            { name: "Yogurt", quantity: "1/2 cup" },
            { name: "Spices", quantity: "to taste" }
        ]
    },
    {
        id: 5,
        name: "Paneer Butter Masala",
        description: "Cubed paneer cooked in a creamy tomato and butter gravy.",
        image: PaneerButterMasala,
        mealType: "STARTER",
        type: "VEG",
        isVeg: true,
        ingredients: [
            { name: "Paneer", quantity: "250 g" },
            { name: "Butter", quantity: "3 tbsp" },
            { name: "Tomato Puree", quantity: "1 cup" },
            { name: "Cream", quantity: "1/4 cup" },
            { name: "Spices", quantity: "to taste" },
        ],
    },
    {
        id: 6,
        name: "Vegetable Biryani",
        description: "Aromatic basmati rice cooked with mixed vegetables and spices.",
        image: easyVegetableBiryani,
        mealType: "STARTER",
        type: "VEG",
        isVeg: true,
        ingredients: [
            { name: "Basmati Rice", quantity: "1.5 cups" },
            { name: "Mixed Vegetables", quantity: "1 cup" },
            { name: "Yogurt", quantity: "1/4 cup" },
            { name: "Spices", quantity: "to taste" },
            { name: "Coriander Leaves", quantity: "for garnish" },
        ],
    },


    // ===== MAIN COURSE =====
    {
        id: 7,
        name: "Tandoori Chicken",
        description: "Tandoori chicken is a dish made from chic...",
        image: TandooriChicken,
        mealType: "MAIN COURSE",
        type: "NON-VEG",
        isVeg: false,
        ingredients: [
            { name: "Paneer", quantity: "250g" },
            { name: "Yogurt", quantity: "1/2 cup" },
            { name: "Spices", quantity: "to taste" }
        ]
    },
    {
        id: 8,
        name: "Dal Makhani",
        description: "Slow-cooked black lentils with butter and cream.",
        image: DakMakhni,
        mealType: "MAIN COURSE",
        type: "VEG",
        isVeg: true,
        ingredients: [
            { name: "Black Lentils", quantity: "1 cup" },
            { name: "Cream", quantity: "1/2 cup" },
            { name: "Butter", quantity: "50g" }
        ]
    },
    {
        id: 9,
        name: "Cabbage",
        description: "Fragrant rice with mixed vegetables and spices.",
        image: Cabbagee,
        mealType: "MAIN COURSE",
        type: "VEG",
        isVeg: true,
        ingredients: [
            { name: "Basmati Rice", quantity: "2 cups" },
            { name: "Mixed Veggies", quantity: "1 cup" },
            { name: "Biryani Masala", quantity: "2 tbsp" }
        ]
    },
    {
        id: 10,
        name: "Butter Chicken",
        description: "Chicken cooked in creamy tomato butter sauce.",
        image: butterChicken,
        mealType: "MAIN COURSE",
        type: "NON-VEG",
        isVeg: false,
        ingredients: [
            { name: "Chicken", quantity: "500g" },
            { name: "Butter", quantity: "50g" },
            { name: "Cream", quantity: "1/2 cup" }
        ]
    },
    {
        id: 11,
        name: "Kadai Paneer",
        description: "Cottage cheese cubes cooked in spicy tomato and bell pepper gravy.",
        image: KadaiPaneer,
        mealType: "MAIN COURSE",
        type: "VEG",
        isVeg: true,
        ingredients: [
            { name: "Paneer (Cottage Cheese)", quantity: "250 g" },
            { name: "Bell Peppers", quantity: "1 cup, chopped" },
            { name: "Tomatoes", quantity: "3 large, pureed" },
            { name: "Onions", quantity: "2 medium, sliced" },
            { name: "Spices", quantity: "to taste" }
        ]
    },
    {
        id: 12,
        name: "Chicken Curry",
        description: "Tender chicken pieces cooked in a rich and flavorful Indian curry sauce.",
        image: ChickenCurryThumbnail,
        mealType: "MAIN COURSE",
        type: "NON-VEG",
        isVeg: false,
        ingredients: [
            { name: "Chicken Pieces", quantity: "500 g" },
            { name: "Onions", quantity: "2 large, finely chopped" },
            { name: "Tomatoes", quantity: "3 large, pureed" },
            { name: "Garlic & Ginger Paste", quantity: "2 tbsp" },
            { name: "Spices", quantity: "to taste" }
        ]
    },


    // ===== DESSERTS =====
    {
        id: 13,
        name: "Gulab Jamun",
        description: "Deep-fried milk solids soaked in sugar syrup.",
        image: OIP,
        mealType: "DESSERT",
        type: "VEG",
        isVeg: true,
        ingredients: [
            { name: "Khoya", quantity: "200g" },
            { name: "Sugar Syrup", quantity: "1 cup" }
        ]
    },
    {
        id: 14,
        name: "Rasgulla",
        description: "Spongy chenna balls soaked in light sugar syrup.",
        image: Rasgulla,
        mealType: "DESSERT",
        type: "VEG",
        isVeg: true,
        ingredients: [
            { name: "Chenna", quantity: "200g" },
            { name: "Sugar Syrup", quantity: "1 cup" }
        ]
    },
    {
        id: 15,
        name: "Ice Cream Sundae",
        description: "Vanilla ice cream topped with chocolate syrup and nuts.",
        image: IceCreamSundaeHero,
        mealType: "DESSERT",
        type: "VEG",
        isVeg: true,
        ingredients: [
            { name: "Vanilla Ice Cream", quantity: "2 scoops" },
            { name: "Chocolate Syrup", quantity: "2 tbsp" }
        ]
    },
    {
        id: 16,
        name: "Brownie with Ice Cream",
        description: "Chocolate brownie served with vanilla ice cream.",
        image: b0248411d7b2645a9f5392014fbee514,
        mealType: "DESSERT",
        type: "VEG",
        isVeg: true,
        ingredients: [
            { name: "Flour", quantity: "1 cup" },
            { name: "Cocoa Powder", quantity: "1/2 cup" },
            { name: "Sugar", quantity: "1/2 cup" }
        ]
    },
    {
        id: 17,
        name: "Mango Kulfi",
        description: "Creamy Indian mango-flavored frozen dessert made from milk and saffron.",
        image: mangoKulfi,
        mealType: "DESSERT",
        type: "VEG",
        isVeg: true,
        ingredients: [
            { name: "Full-fat milk", quantity: "1 liter" },
            { name: "Mango pulp", quantity: "1/2 cup" },
            { name: "Sugar", quantity: "1/2 cup" },
            { name: "Saffron strands", quantity: "a few" },
            { name: "Cardamom powder", quantity: "1 tsp" }
        ]
    },
    {
        id: 18,
        name: "Pistachio Phirni",
        description: "Smooth rice pudding flavored with cardamom and garnished with chopped pistachios.",
        image: Phirni,
        mealType: "DESSERT",
        type: "VEG",
        isVeg: true,
        ingredients: [
            { name: "Rice flour", quantity: "1/4 cup" },
            { name: "Full-fat milk", quantity: "1 liter" },
            { name: "Sugar", quantity: "1/3 cup" },
            { name: "Cardamom powder", quantity: "1 tsp" },
            { name: "Chopped pistachios", quantity: "2 tbsp" }
        ]
    },


    // ===== SIDES =====
    {
        id: 19,
        name: "French Fries",
        description: "Crispy golden potato fries sprinkled with salt.",
        image: french,
        mealType: "SIDES",
        type: "VEG",
        isVeg: true,
        ingredients: [
            { name: "Potatoes", quantity: "3 large" },
            { name: "Salt", quantity: "to taste" }
        ]
    },
    {
        id: 20,
        name: "Masala Papad",
        description: "Crispy papad topped with onions, tomato and spices.",
        image: papad,
        mealType: "SIDES",
        type: "VEG",
        isVeg: true,
        ingredients: [
            { name: "Papad", quantity: "2 pcs" },
            { name: "Onion", quantity: "1 small" },
            { name: "Tomato", quantity: "1 small" }
        ]
    },
    {
        id: 21,
        name: "Garlic Bread",
        description: "Toasted bread with garlic butter.",
        image: GarlicBreadFoodiecrush,
        mealType: "SIDES",
        type: "VEG",
        isVeg: true,
        ingredients: [
            { name: "Bread", quantity: "4 slices" },
            { name: "Garlic", quantity: "3 cloves" },
            { name: "Butter", quantity: "2 tbsp" }
        ]
    },
    {
        id: 22,
        name: "Chicken Wings",
        description: "Crispy fried chicken wings tossed in spicy sauce.",
        image: wp2370074,
        mealType: "SIDES",
        type: "NON-VEG",
        isVeg: false,
        ingredients: [
            { name: "Chicken Wings", quantity: "10 pcs" },
            { name: "Hot Sauce", quantity: "1/4 cup" }
        ]
    },
    {
        id: 23,
        name: "Crispy Aloo Tikkis",
        description: "Spiced and shallow-fried potato patties, crispy on the outside and soft inside.",
        image: alooTikki,
        mealType: "SIDES",
        type: "VEG",
        isVeg: true,
        ingredients: [
            { name: "Potatoes", quantity: "3 medium, boiled and mashed" },
            { name: "Green chili", quantity: "1 finely chopped" },
            { name: "Coriander leaves", quantity: "2 tbsp chopped" },
            { name: "Garam masala", quantity: "1 tsp" },
            { name: "Breadcrumbs", quantity: "1/2 cup" }
        ]
    },
    {
        id: 24,
        name: "Tandoori Chicken Wings",
        description: "Spicy grilled chicken wings marinated with yogurt and tandoori spices.",
        image: R,
        mealType: "SIDES",
        type: "NON-VEG",
        isVeg: false,
        ingredients: [
            { name: "Chicken wings", quantity: "500 g" },
            { name: "Yogurt", quantity: "1 cup" },
            { name: "Tandoori masala", quantity: "2 tbsp" },
            { name: "Lemon juice", quantity: "1 tbsp" },
            { name: "Garlic paste", quantity: "1 tbsp" }
        ]
    }
];


