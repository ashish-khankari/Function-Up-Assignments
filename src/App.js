import React from "react";
import Cards from "./components/Cards";
import './App.css';

export default function App() {

  const card1Style={
    background:'black'
  }
  const card2Style={
    background:'black'
  }
  const card3Style={
    background:'black'
  }
  const card4Style={
    background:'black'
  }
  const card5Style={
    background:'black'
  }
  const productDetails1 = {
    productId: "1",
    productPic:
      "https://dzp3g6fzlnblr.cloudfront.net/wp-content/uploads/2022/08/Hesh-ANC_True-Black_S6HHW-N740_Hero_v001.jpg",
    productName: "Headphone",
    Brand: "Boat",
    productDescription:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, rem?",
    price: "40$",
    rating: "4.7",
    
  };
 const  productDetails2= {
    productId: "2",
    productPic:
      "https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg",
    productName: "Laptop",
    Brand: "HP",
    productDescription:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, rem?",
    price: "1500$",
    rating: "4",
  };
  const productDetails3 = {
    productId: "3",
    productPic:
      "https://media.4rgos.it/s/Argos/9520103_R_SET?$Main768$&w=620&h=620",
    productName: "Phone",
    Brand: "Samsung",
    productDescription:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, rem?",
    price: "100$",
    rating: "4",
    
  }
  const productDetails4 = {
    productId: "4",
    productPic:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/backpack/f/h/x/7-heavy-duty-durable-college-bag-school-bag-laptop-bag-backpack-original-imaghkyzfva7vrau.jpeg?q=70",
    productName: "Bag",
    Brand: "Reebok",
    productDescription:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, rem?",
    price: "26$",
    rating: "4",
  }
  const productDetails5 = {
    productId: "5",
    productPic:
      "https://5.imimg.com/data5/SELLER/Default/2021/4/XL/PT/EA/96403645/adidas-battary-wt-red-500x500.jpg",
    productName: "Shoe",
    Brand: "Adidas",
    productDescription:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, rem?",
    price: "35$",
    rating: "4.5",
    color:'ProductC'
  };

  return <div className="App">
    <Cards data={productDetails1} cardStyle={card1Style}/>
    <Cards data={productDetails2} cardStyle={card2Style}/>
    <Cards data={productDetails3} cardStyle={card3Style}/>
    <Cards data={productDetails4} cardStyle={card4Style}/>
    <Cards data={productDetails5} cardStyle={card5Style}/>
  </div>;
}
