import GetaVisa from "@/public/getavisaLogo.svg"
import GreyWall from "@/public/grey-wall.svg"
import Bookwise from "@/public/bookwise.svg"



export const features = [
  {
    icon: "camera",
    title: "Professional Quality",
    description: "Studio-grade portraits generated in seconds",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: "wand",
    title: "Magic Editing",
    description: "Advanced AI tools to perfect every detail",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "users",
    title: "Family Collections",
    description: "Create stunning portraits for the whole family",
    gradient: "from-pink-500 to-red-500",
  },
  {
    icon: "clock",
    title: "Instant Delivery",
    description: "Get your photos in minutes, not days",
    gradient: "from-red-500 to-orange-500",
  },
];

export const testimonials = [
  {
    text: "The quality of these AI portraits is absolutely incredible. They look better than my professional headshots!",
    author: "Vishnuvardhan",
    role: "Founder",
    avatar:
      "https://res.cloudinary.com/dxgtjsaze/image/upload/c_crop,ar_1:1/v1740406826/myImage1_srcjfa.jpg",
  },
  {
    text: "We used this for our family portraits and the results were stunning. So much easier than a traditional photoshoot.",
    author: "Mahi",
    role: "Developer",
    avatar:
      "https://i.ibb.co/ZpvLpgf8/Whats-App-Image-2024-12-08-at-01-17-05.jpg",
  },
  {
    text: "Game-changer for my professional brand. The variety of styles and quick delivery is unmatched.",
    author: "Saravana",
    role: "Founder of WebCraft",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQH9LnII_HXrHQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698821079941?e=2147483647&v=beta&t=1XGvRit2_LVRAtb-8y_e9mbtqXF102Ia_fX88-OvEI0",
  },
];

export const carouselImages = [
  {
    url: "https://cdn.lucidpic.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c43b25bee70.png",
    title: "Professional Portrait",
    description: "Perfect for LinkedIn and business profiles",
    style: "Corporate",
  },
  {
    url: "https://img.freepik.com/premium-photo/woman-kimono-with-flowers-her-head_1139689-3664.jpg",
    title: "Casual Lifestyle",
    description: "Natural and relaxed everyday portraits",
    style: "Casual",
  },
  {
    url: "https://img.freepik.com/premium-photo/young-asian-traveling-backpacker-khaosan-road-outdoor-market-bangkok-thailand_1168123-58814.jpg",
    title: "Creative Portrait",
    description: "Artistic shots with unique lighting",
    style: "Creative",
  },
  {
    url: "https://img.freepik.com/free-photo/front-view-young-man-with-wings_23-2151038809.jpg",
    title: "Fashion Portrait",
    description: "High-end fashion inspired photography",
    style: "Fashion",
  },
];

export const brands = [
  {
    name: "Company 1",
    logo: GetaVisa,
  },
  { name: "Company 2", logo: "https://res.cloudinary.com/dxgtjsaze/image/upload/v1740411195/open-ai-logo_uj52zg.png" },
  { name: "Company 3", logo: GreyWall },
  { name: "Company 4", logo: Bookwise },
];

export const stats = [
  { value: "100K+", label: "AI Portraits Generated" },
  { value: "50K+", label: "Happy Users" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24/7", label: "AI Support" },
];

export const plans = [
  {
    name: "Starter",
    price: "$5.99",
    features: [
      "10 AI Portraits",
      "Basic Styles",
      "24h Support",
      "Basic Export",
    ],
    highlighted: false,
  },
  {
    name: "Basic",
    price: "$12.99",
    features: ["20+ AI Portraits", "Pack Styles", "24h Support", "HD Export"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29.99",
    features: [
      "100 AI Portraits",
      "Premium Styles",
      "Priority Support",
      "HD Export",
      "Advanced Editing",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited Portraits",
      "Custom Styles",
      "Dedicated Support",
      "API Access",
      "Custom Integration",
    ],
    highlighted: false,
  },
];
