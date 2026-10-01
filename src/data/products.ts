import image1 from "@/assets/images/1.jpg";
import image2 from "@/assets/images/2.jpg";
import image3 from "@/assets/images/3.jpg";
import image4 from "@/assets/images/4.jpg";
import image5 from "@/assets/images/5.jpg";
import image6 from "@/assets/images/6.jpg";
import image7 from "@/assets/images/7.jpg";
import image8 from "@/assets/images/8.jpg";
import image9 from "@/assets/images/9.jpg";
import image10 from "@/assets/images/10.jpg";
import image11 from "@/assets/images/11.jpg";
import image12 from "@/assets/images/12.jpg";
import image13 from "@/assets/images/13.jpg";
import image14 from "@/assets/images/14.jpg";
import image15 from "@/assets/images/15.jpg";
import image16 from "@/assets/images/16.jpg";
import image17 from "@/assets/images/17.jpg";
import image18 from "@/assets/images/18.jpg";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Pink Roses",
    price: 45,
    image: image1,
    description: "لمسة ناعمة تضيف دفئًا وجمالًا لكل لحظة.",
  },
  {
    id: 2,
    title: "White Bouquet",
    price: 50,
    image: image2,
    description: "تنسيق هادئ وأنيق، صُمم ليترك أثرًا جميلًا.",
  },
  {
    id: 3,
    title: "Soft Pink Flowers",
    price: 55,
    image: image3,
    description: "تفاصيل رقيقة تعبّر عن مشاعر جميلة دون كلمات.",
  },
  {
    id: 4,
    title: "Spring Bouquet",
    price: 48,
    image: image4,
    description: "لمسة مشرقة تضيف إحساسًا بالانتعاش والجمال.",
  },
  {
    id: 5,
    title: "Elegant Roses",
    price: 60,
    image: image5,
    description: "اختيار أنيق بتفاصيل ناعمة للمناسبات الخاصة.",
  },
  {
    id: 6,
    title: "Fresh Garden",
    price: 52,
    image: image6,
    description: "تنسيق طبيعي يمنح المكان إحساسًا هادئًا ومريحًا.",
  },
  {
    id: 7,
    title: "Soft Blush",
    price: 45,
    image: image7,
    description: "لمسة ناعمة تضيف دفئًا وجمالًا لكل لحظة.",
  },
  {
    id: 8,
    title: "Pure Elegance",
    price: 52,
    image: image8,
    description: "تنسيق هادئ وأنيق، صُمم ليترك أثرًا جميلًا.",
  },
  {
    id: 9,
    title: "Sweet Moment",
    price: 48,
    image: image9,
    description: "تفاصيل رقيقة تعبّر عن مشاعر جميلة دون كلمات.",
  },
  {
    id: 10,
    title: "Morning Glow",
    price: 55,
    image: image10,
    description: "لمسة مشرقة تمنح المكان إحساسًا بالانتعاش.",
  },
  {
    id: 11,
    title: "Lovely Touch",
    price: 50,
    image: image11,
    description: "تنسيق بسيط وناعم للمناسبات واللحظات الخاصة.",
  },
  {
    id: 12,
    title: "Gentle Charm",
    price: 58,
    image: image12,
    description: "جمال هادئ بتفاصيل مختارة بعناية.",
  },
  {
    id: 13,
    title: "Dreamy Bloom",
    price: 62,
    image: image13,
    description: "لمسة حالمة تضيف أناقة ورقّة للمكان.",
  },
  {
    id: 14,
    title: "Pure Moment",
    price: 54,
    image: image14,
    description: "تنسيق أنيق يحمل إحساسًا دافئًا وبسيطًا.",
  },
  {
    id: 15,
    title: "Soft Harmony",
    price: 60,
    image: image15,
    description: "مزيج متوازن يمنح اللحظة طابعًا هادئًا ومميزًا.",
  },
  {
    id: 16,
    title: "Forever Lovely",
    price: 65,
    image: image16,
    description: "اختيار أنيق ليبقى جمال اللحظة في الذاكرة.",
  },
  {
    id: 17,
    title: "Tender Grace",
    price: 57,
    image: image17,
    description: "تفاصيل ناعمة تضيف لمسة من الهدوء والأناقة.",
  },
  {
    id: 18,
    title: "Lovely Whisper",
    price: 63,
    image: image18,
    description: "تنسيق رقيق يكمّل اللحظات الجميلة ببساطة.",
  },
];
