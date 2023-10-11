import React, { useState, useEffect } from "react";
import './home.css';
import bg from '../assets/bg.jpg';
import mountain1 from '../assets/mountain1.png';
import mountain2 from '../assets/mountain2.png';
import text from '../assets/text.png';

const Home = () => {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => setOffset(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="Home">
      <div className="zoom">
        <img src={mountain1} alt="" id="img1" 
        style={{width: (100 + offset * 0.3) + '%'}}
        />
       <img src={mountain2} alt="" id="img2"
      style={{width: (100 + offset * 0.3) + '%'}}
      />
       <h1 id="text">WELCOME TO OUR JOURNEY</h1>
      </div>

      <div className="content">
        <h1>AYTOUR</h1>
        <p>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptates perspiciatis ex possimus error ut est veritatis commodi beatae doloremque, blanditiis sequi dicta harum non, numquam, ad necessitatibus porro neque tenetur alias aspernatur omnis facilis. Doloribus sit accusamus mollitia vitae ducimus placeat omnis, autem ipsa, laborum iure voluptatibus vero, nulla quod iusto debitis labore vel? Ad earum quis numquam, nobis est, quod voluptate accusamus aperiam minima necessitatibus iure nisi architecto omnis debitis hic ipsam? Assumenda fugit aperiam, inventore aliquid earum quos. Optio, blanditiis similique id eaque nihil sunt, nulla, consequuntur eligendi laborum vel omnis ut! Ab sequi commodi earum, velit perspiciatis qui minima sint, nihil laborum quos ipsa necessitatibus deserunt vero aliquam illum temporibus quia, quam inventore fugit a. Accusantium accusamus sed perspiciatis mollitia ipsam, distinctio natus rerum autem recusandae enim quasi eos quod, voluptatem ducimus beatae! Voluptatem dolor sit porro deserunt quia odio blanditiis voluptates harum rerum tempore, autem, officiis non nemo soluta labore modi aliquam fugit? Molestias ad tempora alias culpa hic repellat pariatur consectetur nesciunt, quo facere, aperiam placeat. Magnam rerum voluptates ad quisquam asperiores, inventore commodi tempora tenetur, aliquam reprehenderit libero porro nemo placeat magni! Libero reiciendis illo blanditiis, saepe placeat debitis culpa dolores nostrum deleniti!
      </p>
      </div>
    </div>
  );
}

export default Home;
