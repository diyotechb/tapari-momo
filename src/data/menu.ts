export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    title: "Chicken Momo",
    items: [
      { name: "Chicken Steam Momo", description: "Chicken MoMo served with dipping sauce of tomato, timur, roasted sesame and soybean", price: 11.99 },
      { name: "Chicken Jhol Momo", description: "Chicken Momo served with soup of tomato, timur, hot plum powder, roasted peanuts, sesame and soybean", price: 11.99 },
      { name: "Chicken Fry Momo", description: "Chicken MoMo fried and topped with tapari spices", price: 11.99 },
      { name: "Chicken Chilly Momo", description: "Fried Chicken MoMo sauté with ketchup, soy sauce, onion, bell pepper and Himalayan spices", price: 12.99 },
    ],
  },
  {
    title: "Buff Momo",
    items: [
      { name: "Buff Steam Momo", description: "Buff MoMo served with dipping sauce of tomato, timur, roasted sesame and soybean", price: 13.99 },
      { name: "Buff Jhol Momo", description: "Buff MoMo served with soup of tomato, timur, hot plum powder, roasted peanuts, sesame and soybean", price: 13.99 },
      { name: "Buff Fry Momo", description: "Buff MoMo fried and topped with tapari spices", price: 13.99 },
      { name: "Buff Chilly Momo", description: "Buff MoMo sauté with ketchup, soy sauce, onion, bell pepper and Himalayan spices", price: 14.99 },
    ],
  },
  {
    title: "Veg Momo",
    items: [
      { name: "Veg Steam Momo", description: "Veg Momo served with dipping sauce of tomato, timur, roasted sesame and soybean", price: 9.99 },
      { name: "Veg Jhol Momo", description: "Veg Momo served with soup of tomato, timur, hot plum powder, roasted peanuts, sesame and soybean", price: 9.99 },
      { name: "Veg Fry Momo", description: "Veg MoMo fried and topped with tapari spices", price: 9.99 },
      { name: "Veg Chilly Momo", description: "Veg MoMo sauté with ketchup, soy sauce, onion, bell pepper and Himalayan spices", price: 11.99 },
    ],
  },
  {
    title: "Chowmein",
    items: [
      { name: "Chicken Chowmein", description: "Noodles, chicken breast, cabbage, carrots, bell pepper, onion sauté in tomato ketchup and soy sauce adding aromatic Himalayan spices", price: 11.99 },
      { name: "Egg Chowmein", description: "Noodles, egg, cabbage, carrots, bell pepper, onion sauté in tomato ketchup and soy sauce adding aromatic Himalayan spices", price: 10.99 },
      { name: "Veg Chowmein", description: "Noodles, cabbage, carrots, bell pepper, onion sauté in tomato ketchup and soy sauce adding aromatic Himalayan spices", price: 9.99 },
      { name: "Mix Chowmein", description: "Noodles, chicken breast, Chicken Sausage, Egg, cabbage, carrots, bell pepper, onion sauté in tomato ketchup and soy sauce adding aromatic Himalayan spices", price: 13.99 },
    ],
  },
  {
    title: "Appetizers",
    items: [
      { name: "Selroti (2pcs)", description: "A traditional, ring-shaped sweet bread or doughnut originating from Nepal", price: 4.99 },
      { name: "Choila", description: "Smoked chicken thigh marinated with spring onion, garlic and ginger, timur with Himalayan spices served cold", price: 9.99 },
      { name: "Mustang Aalo", description: "Fried Potato sauté in butter, garlic, timur, red chilly, jimbu and Himalayan spices", price: 8.99 },
      { name: "Kathmandu Style Sausage", description: "Chicken Sausage topped with tapari spices", price: 7.99 },
      { name: "Mango Akbare Wings", description: "Fried Wings sauté in nepali spice with tapari special mango akbare sauce", price: 11.99 },
      { name: "Timur Wings", description: "Chicken wings sauté with timur, red chilly, and himalayan spices", price: 10.99 },
      { name: "Chilly Wings", description: "Chicken wings sauté with ketchup, soy sauce, onion, bell pepper and Himalayan spices", price: 10.99 },
      { name: "Samosa (2pcs)", description: "A Fried Triangular-Shaped Pastry typically filled with mixture of spiced potatoes, onions, peas, and lentils", price: 4.99 },
    ],
  },
];
