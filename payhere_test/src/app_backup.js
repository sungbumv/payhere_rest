  /* eslint-disable  */
  import React, { useState } from 'react';
  import logo from './logo.svg';
  import './App.css';
  
  function App() {
  
    
    let posts = '강남 고기 맛집2';
    let [title, ChangeTitle] = useState(["강남맛집", "성수맛집", "강북맛집"]); // [a,b]
    let [count, countChange] = useState(0);
  
    function func_ChangeTitle()
    {
      var newArray = [...title];
      newArray = newArray.sort();
      ChangeTitle(newArray);
    }
  
    return (
      <div className="App">
        <div className="black-nav">
          <div style={{'color' : 'blue', 'fontSize' : '32px' }}>페이히어 과제</div>
        </div>
        <button onClick={func_ChangeTitle}>버튼</button>
        {/* <img src= {logo} alt="profile" />  */}
          {title.map(function(a)
          {
            return (
              <div className="list">
              <h3>{a} <span onClick={ ()=>{ countChange(count++) }}>👍</span>{count}</h3>
              <p>2월 18일 발행</p>
              <hr />
            </div>
            )
          })}
        </div>
    );
  }
  
  export default App;
  