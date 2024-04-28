import { CookingPot } from "lucide-react";
import { FaFacebook, FaInstagram, FaSnapchat, FaYelp } from "react-icons/fa";

export const navigationBarLinks = [
    {
        id: 0,
        name: "Menu",
        href: "/menu",
        target: "_self",
        type: "simple",
        icon: null
    },
    {
        id: 1,
        name: "Our Story",
        href: "/about",
        target: "_self",
        type: "simple",
        icon: null
    },
    {
        id: 2,
        name: "Reviews",
        href: "/reviews",
        target: "_self",
        type: "simple",
        icon: null
    },
    {
        id: 3,
        name: "Place Order",
        href: "#",
        target: "_self",
        type: "bold",
        icon: <CookingPot className="text-white" />
    }
];

export const menu = {
    categories: [
        {
            id: 0,
            name: "House Specials",
            image: "https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg"
        },
        {
            id: 1,
            name: "Curries",
            image: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg"
        },
        {
            id: 2,
            name: "Noodles",
            image: "https://images.pexels.com/photos/12481161/pexels-photo-12481161.jpeg"
        },
        {
            id: 3,
            name: "From the Wok",
            image: "https://images.pexels.com/photos/5602458/pexels-photo-5602458.jpeg"
        },
        {
            id: 4,
            name: "Soups",
            image: "https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg"
        },
        {
            id: 5,
            name: "Rice",
            image: "https://images.pexels.com/photos/12100417/pexels-photo-12100417.jpeg"
        },
        {
            id: 6,
            name: "Sweets",
            image: "https://images.pexels.com/photos/7361018/pexels-photo-7361018.jpeg"
        },
        {
            id: 7,
            name: "Drinks",
            image: "https://images.pexels.com/photos/19750078/pexels-photo-19750078/free-photo-of-close-up-of-a-glass-with-flower-petals-and-food-on-a-table.jpeg"
        }
    ],
    items: [
        {
            "name": "Wagyu Cheeseburger Egg Rolls (3pcs)",
            "description": "Ground wagyu beef, American cheese, onion",
            "price": 11.99,
            "category": "House Specials"
        },
        {
            "name": "Grilled BBQ Beef Ribs with Curry Dipping (3pcs)",
            "description": "Burnt ends, creamy curry",
            "price": 11.99,
            "category": "House Specials"
        },
        {
            "name": "Tom Yum Wonton (8pcs)",
            "description": "Pork & lime leaves, tom yum soup (contains milk)",
            "price": 12.99,
            "category": "House Specials"
        },
        {
            "name": "Thai Shrimp Cake (3pcs)",
            "description": "Shrimp, pork, water chestnuts, lemongrass, tom yum mayo",
            "price": 8.99,
            "category": "House Specials"
        },
        {
            "name": "Water Beef Salad",
            "price": 15.99,
            "category": "House Specials"
        },
        {
            "name": "Chili Basil Beef & Fried Eggs",
            "description": "Wok blasted steak strips, vegetable mix",
            "price": 16.99,
            "category": "House Specials"
        },
        {
            "name": "Pomelo Salad (Seasonal)",
            "description": "Fresh pomelo, shrimp, lettuce, lime leaves, lemongrass",
            "price": 16.99,
            "category": "House Specials"
        },
        {
            "name": "Red Curry",
            "price": 16.99,
            "category": "Curries"
        },
        {
            "name": "Yellow Curry",
            "price": 16.99,
            "category": "Curries"
        },
        {
            "name": "Green Curry",
            "price": 11.99,
            "category": "Curries"
        },
        {
            "name": "Tom Yum Soup",
            "price": 16.99,
            "category": "Soups"
        },
        {
            "name": "Spicy Thai Drunken Noodle (Pad Kee Mao)",
            "price": 12.99,
            "category": "Noodles"
        },
        {
            "name": "Pad Thai",
            "price": 16.99,
            "category": "Noodles"
        },
        {
            "name": "Pad See Ew",
            "price": 16.99,
            "category": "Noodles"
        },
        {
            "name": "Tom Yum Noodle Soup",
            "price": 17.99,
            "category": "Noodles"
        },
        {
            "name": "Cashew Nut",
            "price": 15.99,
            "category": "From the Wok"
        },
        {
            "name": "Fresh Chili & Thai Basil",
            "price": 14.99,
            "category": "From the Wok"
        },
        {
            "name": "Ginger & Shallot",
            "price": 16.99,
            "category": "From the Wok"
        },
        {
            "name": "Garlic & Black Pepper",
            "price": 16.99,
            "category": "From the Wok"
        },
        {
            "name": "Thai Chili Jam",
            "price": 16.99,
            "category": "From the Wok"
        },
        {
            "name": "Steamed Rice",
            "price": 2.99,
            "category": "Rice"
        },
        {
            "name": "Thai Pork Hock Rice",
            "price": 15.99,
            "category": "Rice"
        },
        {
            "name": "Vegetarian Fried Rice with Truffle Oil",
            "price": 15.99,
            "category": "Rice"
        },
        {
            "name": "Joy Thai's Special Fried Rice",
            "price": 14.99,
            "category": "Rice"
        },
        {
            "name": "Mango Sticky Rice",
            "price": 6.99,
            "category": "Sweets"
        },
        {
            "name": "Pandan Buns",
            "price": 6.99,
            "category": "Sweets"
        },
        {
            "name": "Thai Tea",
            "price": 5.99,
            "category": "Drinks"
        },
        {
            "name": "Coke/Coke Zero/Sprite/Fanta",
            "price": 2.99,
            "category": "Drinks"
        },
        {
            "name": "Soy Milk/Aloe Vera Drink",
            "price": 3.99,
            "category": "Drinks"
        }
    ]
};

export const socialLinks = [
    {
        id: 0,
        href: "#",
        icon: <FaInstagram />
    },
    {
        id: 1,
        href: "#",
        icon: <FaYelp />
    },
    {
        id: 2,
        href: "#",
        icon: <FaFacebook />
    },
    {
        id: 3,
        href: "#",
        icon: <FaSnapchat />
    }
];

export const reviews: Review[] = [
    {
        id: 0,
        reviewer: "Cesar Almendarez",
        location: "Alhambra, CA",
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 1,
        reviewer: "John Doe",
        location: "Los Angeles, CA",
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 2,
        reviewer: "Ray Dalio",
        location: "Pasadena, CA",
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    },
]