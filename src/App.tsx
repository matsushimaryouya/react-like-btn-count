import React from 'react';
import './App.css';

// Likeボタンコンポーネント
function LikeButton(props: any){
  // いいねのボタンの色の状態をstate管理。setLikeが変更されると画面が更新される
  const [liked, setLike] = React.useState(false);
  // クリック時の処理。アロー関数
  const clicked = () => {
    props.onClick((likeCount: number) => likeCount + 1);
    // 現在のlikedの状態と逆のboolean型をchangeに代入
    const change = !liked;
    // setLikeの更新。画面が更新される。changeを代入
    setLike(change);
  }
  // 三項演算子
  // likedがtlueの場合はclassがlikedに
  const className = liked?'liked':'like';
  // ボタンを生成
  return <button className={className + ' likeBtn'} onClick={()=> clicked()}>Like</button>
}



// いいね数を表示
function LikeText(props: any){
  return <p>いいね数：{props.likeCount}</p>
}



// 描画----------------------------------------
function App() {
  // stateをAppで管理
  const [likeCount, setCount] = React.useState(11);

  return (
    <div className="App">
      <div className="AppBox">
        <div className="AppAbout">
            <h1 className="parentComponentTxt componentTxt">LikeText（親コンポーネント）</h1>
            <p className="componentAbout">stateはAppで管理：const [likeCount, setCount] = React.useState(11);</p>
        </div>
        <div className="AppBoxContents">
          <div className="AppContent LikeButtonBox">
            <h1 className="componentTxt">LikeButton（子コンポーネント）</h1>
            <p className="componentAbout">いいねのボタンの色の状態をstate管理。setLikeが変更されると画面が更新される。</p>
            <p className="componentAbout">const [liked, setLike] = React.useState(false);</p>
            <p className="componentAbout"> propsにCountを+1にする。</p>
            <LikeButton onClick={setCount} />
          </div>
          <div className="AppContent LikeTextBox">
            <h1 className="componentTxt">LikeText（子コンポーネント）</h1>
            <p className="componentAbout">propsからlikeCountを取得し表示。</p>
            <LikeText likeCount={likeCount}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
