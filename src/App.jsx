import React from "react";
import "./App.css";
import Section1 from "./Section1";
import Nav from "./Nav";
import Hero from "./Hero";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Footer from "./Footer";
function App() {

  // navbar 
 let nav = [
    {
      logo:'EatWell',
      li1:'HOME',
      li2:'ABOUT',
      li3:'OFFER',
      li4:'MENU',
      li5:'NEWS',
      li6:'GALLERY',
      li7:'CONTACT',
      menu:'MENU'
    }
];

  // hero section
  let hero=[{
    h1:'Welcome To EatWell',
    p:'Come and eat well with our delicious & healthy foods.',
    btn:'Reservation'
  }];

  // section 1
  let section1 = [
    {
      h2: "Our Story",
      h1: "Welcome",
      p1: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      p2: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      btn: "Learn More About This",
      img: "assets/illustration/about_img_1.jpg",
    }
  ];

  // section 2
  let section2=[{
    h2:'Our Offers',
    h1:'Our Offer This Summer',
    p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    img1:'assets/illustration/offer_1.jpg.webp',
    img2:'assets/illustration/offer_2.jpg.webp',
    img3:'assets/illustration/offer_3.jpg.webp',
    rs1:'$35.50',
    rs2:'$40.50',
    rs3:'$25',
    t1:'Beef with Sauce',
    p1:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    btn1:'Order Now',
    t2:'Beef Ribs',
    t3:'Egg with Garlic '
  }];
  // section 3
  let section3=[
    {
      h1:'Delicious Menu',
      p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      img1:'assets/illustration/menu_1.jpg.webp',
      img2:'assets/illustration/menu_2.jpg.webp',
      img3:'assets/illustration/menu_3.jpg.webp',
      t1:'Italian Sauce Mushroom',
      t2:'Fried Potato w/ Garlic',
      t3:'Salted Fried Chicken',
      p1:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      rs1:'$24.50',
      rs2:'$45',
      rs3:'$60.50'
    }
  ]
  
  // section 4
  let section4=[{
    
    h1:'News',
    p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    img1:'assets/illustration/offer_1.jpg.webp',
    img2:'assets/illustration/offer_2.jpg.webp',
    img3:'assets/illustration/offer_3.jpg.webp',
    
    t1:'We Have Dilecious Food',
    p1:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    btn1:'Read More',
    t2:'Chef Special Menu',
    t3:'Merriage Celebrations'
  }];

  // section 5
  let section5=[{
    h1:'Gallery',
    p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    img1:'assets/illustration/menu_1.jpg.webp',
    img2:'assets/illustration/menu_2.jpg.webp',
    img3:'assets/illustration/menu_3.jpg.webp'
  }]

  // section 6
  let section6=[{
    h1:'Get In Touch',
    p:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    i1:'Name',
    i2:'Email',
    i3:'Write Your Message',
    btn:"Send Message",
    add:'Address:',
    add2:'121 Street, Melbourne Victoria 3000 Australia',
    phone:'Phone:',
    phone2:'90 987 65 44',
    email:'Email :',
    email2:'info@yoursite.com',
    img: "assets/illustration/about_img_1.jpg"
  }]
  // footer
  let footer=[
    {
      a:'About Us',
      p:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, similique, delectus blanditiis odit expedita amet. Sed labore ipsum vel dolore, quis, culpa et magni autem sequi facere eos tenetur, ex?',
      b:'The Restaurant',
      li1:'About Us',
      li2:'Chefs',
      li3:'Events',
      li4:'Contact',
      c:'Useful links',
      li5:'Foods',
      li6:'Drinks',
      li7:'Brunch',
      li8:'Dinner',
      insta:'bi bi-instagram',
      face:'bi bi-facebook',
      twit:'bi bi-twitter',
      love:'© Copyright ©2024 All rights reserved | This template is made with Love by Rohan Kumbharkar'
    }
  ]

  return (
    <>
      
      <Nav data1={nav}></Nav>
     
      <Hero data={hero} ></Hero>
      
      <Section1 data={section1}></Section1>
      
      <Section2 data={section2}></Section2>

      <Section3 data={section3}></Section3>

      <Section4 data={section4}></Section4>

      <Section5 data={section5}></Section5>

      <Section6 data={section6}></Section6>

      <Footer data={footer}></Footer>
    </>
  );
}

export default App;