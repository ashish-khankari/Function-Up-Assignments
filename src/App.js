import React from 'react';
import Card from './components/Card';
import './App.css'
export default function App() {

  
  const productDetails = [
    {
      id: 1,
      name: 'Shoes',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      price: "Price: $100",
      image: 'https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/brand-landing-pages/adidas/2023/spring/deluxe_story2.jpg',
      button: "Add To Card",
      
    },
    {
      id: 2,
      name: 'Headphones',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      price: "Price: $200",
      image: "https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg",
      button: "Add To Card"
    },
    {
      id: 3,
      name: 'Laptop',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: "Price: $300",
      image: 'https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80',
      button: "Add To Card"
    },
  ];

  return (
    <div className='App'>
      {productDetails.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
