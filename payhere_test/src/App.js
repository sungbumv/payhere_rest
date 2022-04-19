  /* eslint-disable  */
import React, { useState } from 'react';
import './App.css';
import Header from './components/page/Header';
import Footer from './components/page/Footer';
import Contents from './components/Contents';

function App()
{
  let [header,setHeader] = useState('헤더부분');
  let [title,setTitle] =  useState(['남자 코트 추천','타이틀2','타이틀3']);
  let [count,setCount] = useState(0);
  let [modal,setModal] = useState(false);
 
  // function titleChange()
  // {
  //   var newArray = [...title];
  //   newArray[0] = '여자코트추천';
  //   setTitle(newArray);
  // }

  // function headerChange()
  // {
  //   var newHeader = {...header};
  //   newHeader = '바뀐헤더';
  //   setHeader(newHeader);
  // }



  let post = '포스트 제목';
    return (
      <div className='App'>
        <div className="black-nav">
          <div>{header}</div>
        </div>
        <div className='list'>
          <h3> { title[0] } <span onClick={()=>{setCount(count+1)}}>👍</span>{count}</h3>
          <p>2월 17일 발행</p>
          <hr/>
          <h3> { title[1] }</h3>
          <p>2월 17일 발행</p>
          <hr/>
          <h3> { title[2] }</h3>
          <p>2월 17일 발행</p>
          <hr/>
        </div>
      
      <button onClick={()=>setModal(!modal)}>버튼</button>

      {
        modal === true
        ? <Modal title={title}/>
        : null
      }
      

           {/* <Header/>
           <Contents/>
           <Footer/> */}
      </div>
    );
}

function Modal(props){
    return(
      <div className='modal'>
      <h2>{props.title[0]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    );
}

export default App;
