import React from 'react'
import './Subject.css';
import {Link} from 'react-router-dom'
import './Subject2';







const  Subject =()=> {

  const Typing = (element, sentence) => {
    [...sentence].forEach((character, index) => {
      setTimeout(() => {
        document.querySelector(element).textContent += character;
      }, 100 * ++index);
    });
  }
  
  Typing('#Typing', 'Welcome My Home Page!!');

  return (
    <div>
      <div className="sj1" id="home">
     <header className="wrapper">
    <h1 className = "title">K.Kの自己PR</h1>
    <nav>
        <ul className="u1">
          <li><Link to={'/Subject2'}>PR</Link></li>
          <li><a href="http://force-corp.co.jp/">会社</a></li>
        </ul>


    </nav>
</header>

<div className="s1">
<h2 className="g1" id="Typing" ></h2>
<p>～初めてのホームページ作成に挑戦中～</p>
<Link to="./Subject2"className="button">自己PRへ</Link>
</div>

<footer className="fo1">
    <ul className="u2">
      <li><a href="https://twitter.com/">twitter</a></li>
      <li><a href="https://ja-jp.facebook.com/">facebook</a></li>
      <li><a href="https://www.instagram.com/">instagram</a></li>
      </ul>
</footer>
</div>
    </div>
  );
}



export default Subject;
