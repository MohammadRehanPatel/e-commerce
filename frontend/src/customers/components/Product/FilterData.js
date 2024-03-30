export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      {
        value: "black",
        label: "Black",
        class: "bg-black text-black",
      },
      {
        value: "white",
        label: "White",
        class: "bg-yellow-400 text-yellow-400",
      },
      {
        value: "blue",
        label: "Blue",
        class: "bg-blue-400 text-blue-400",
      },
      {
        value: "brown",
        label: "Brown",
        class: "bg-brown-400 text-brown-400",
      },
      {
        value: "green",
        label: "Green",
        class: "bg-green-400 text-green-400",
      },
      {
        value: "red",
        label: "Red",
        class: "bg-red-400 text-red-400",
      },
      {
        value: "yellow",
        label: "Yellow",
        class: "bg-yellow-400 text-yellow-400",
      },
      {
        value: "purple",
        label: "Purple",
        class: "bg-purple-400 text-purple-400",
      },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "M", label: "M" },
      { value: "L", label: "L" },
      { value: "XL", label: "XL" },
      { value: "XXL", label: "XXL" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "₹159 To ₹399" },
      { value: "399-999", label: "₹399 To ₹999" },
      { value: "999-1999", label: "₹999 To ₹1999" },
      { value: "1999-2999", label: "₹1999 To ₹2999" },
      { value: "2999-3999", label: "₹2999 To ₹3999" },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "10", label: "10% And Above" },
      { value: "20", label: "20% And Above" },
      { value: "30", label: "30% And Above" },
      { value: "40", label: "40% And Above" },
      { value: "50", label: "50% And Above" },
      { value: "60", label: "60% And Above" },
      { value: "70", label: "70% And Above" },
      { value: "80", label: "80% And Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out Of Stock" },
    ],
  },
];
