import React from 'react'
import './Subject2.css';
import Img from './picture2/s3.jpg';
import Iframe from 'react-iframe';
import {Link} from 'react-router-dom'
import './Subject';





const  Subject2 =()=> {
  return (
    <div>
    <div className="Subject2">
   <header className="wrapper2">
  <div className="y2">
    <h1 className = "title2">K.Kの自己PR</h1>
    <nav>
        <ul className="k2">
          <li><Link to={'/Subject'}>home</Link></li>
          <li><a href="http://force-corp.co.jp/">会社</a></li>
        </ul>
   </nav>
  </div>
</header>


<div class="n1">

  <article>
  <div class="n2" id="nz2">
    <header class="h3">
  <h2 class="p-title">プロフィール</h2>
 </header>
</div>

<div class="g-title">
  <img src={Img}  class="i2"/>
 <p class="p2">久保翔胤斗　<br />1998年10月6日生まれ<br />横浜商科大学　卒業</p>
 </div>

<div class="n3" id="nz3">
  <header class="h4">
    <h2 class="p-title2">大学でしてきたこと</h2>
  </header>
</div>

<div class="g-title2">
  <p class="p3">大学時代にやってきたことは、主に資格取得の勉強とAIについて少し研究をしていました。資格取得はITパスポート、基本情報技術者といったITの資格を重点的に勉強をしていました。勉強方法は、苦手な分野を理解するまでやり続けることと、過去問題を満点とれるぐらいまで復習をしていました。無事に合格出来たので嬉しかったです。</p>
    <p class="p5">私が受けた資格が気になる方　→　<a href="https://www.jitec.ipa.go.jp/">基本情報技術者試験</a>へ！</p>
  <p class="p4">AIについての研究では、音声AIの声質をより人間の話し方に近づけるかの研究を少ししていました。ボーカロイドといったSNSで話題の人間の音源を使用したソフトウェアです。その技術を利用して感情を取り入れた音源が自由自在に作れるのではないかといった研究をしていました。AIはビックデータで返答しているので、分野ごとに分けれるのではないかと考えました。その研究では、情報科の教授にプレゼンをしたり、ゼミの時間をフルで設けて貰い発表をしたりしていました。ゼミは、簿記のゼミであったため全く関係なかったですがゼミの教授に協力をしてもらいました。</p>
  <p class="p6">詳しくボーカロイドをしたい方は　→　<a href="https://www.vocaloid.com/">公式サイト</a>へ！</p>
</div>

<div class="n4" id="nz4">
  <header class="h5">
    <h2 class="p-title3">今後の将来性</h2>
  </header>
</div>

<div class="g-title3">
  <p class="p7">今後の将来性としては、まずプログラミングの知識をたくさん覚えてそれを仕事で実践をして実績を積むことが第一の目標です。また、コミュニケーションを相手とうまくやり取りをすることを第一の目標の段階で成果を出したいです。
  <br />　次に、プロジェクトを企画して相手に指示ができる立場になることを第二の目標です。
  <br />　最後に、大学からやってきたAIの分野についてシステム開発していくことを第三の目標にしています。
  </p>
</div>


<div class="n5" id="nz5">
  <header class="h6">
    <h2 class="p-title4">会社地図詳細</h2>
  </header>
</div>

<div class="map">
  <p>住所：東京都千代田区<br />
     神田錦町3-18<br />
     寿ビル7階<br />
     電話：03-5259-5231<br />
     営業時間:9:30　～ 18:30 </p>
</div>

<div class="g-map">
  <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.3448337052523!2d139.7592723148193!3d35.69313098019161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0fe0ed6591%3A0x4df0f27d6a1119!2z44OV44Kp44O844K55qCq5byP5Lya56S-!5e0!3m2!1sja!2sjp!4v1622182449456!5m2!1sja!2sjp"width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" />
</div>
</article>





<aside>
    <div className="box">
 <h3 className="as1">カテゴリー</h3>
 <ul className="c1">
 <li className="li1"><a href="#nz2">プロフィール</a></li>
 <li className="li2"><a href="#nz3">大学でしたこと</a></li>
 <li className="li3"><a href="#nz4">今後の将来性</a></li>
 <li className="li4"><a href="#nz5">地図</a></li>
 </ul>
    </div>


  </aside>


</div>


<footer ClassName="fo2">
    <ul class="u3">
    <li><a href="https://twitter.com/">twitter</a></li>
    <li><a href="https://ja-jp.facebook.com/">facebook</a></li>
    <li><a href="https://www.instagram.com/">instagram</a></li>
    </ul>
</footer>
    </div>
    </div>
  );
}




export default Subject2;