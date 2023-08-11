import logo from './logo.svg';
import './App.css';
import React from 'react';

function Header({ headerTitle }) {
  return <h1>{headerTitle ? headerTitle : "Welcome app "}</h1>;
}


function BodyAndHeader() {
  const userNames = ["halil", "Kamal", "Mustofa"];
  const [clickNumber,setClick] =React.useState("Halil");

  function handleClick(){
    setClick(clickNumber +"l");
  }



  return (
    <div>
      <Header headerTitle={"Title area "}></Header>
      <ul>
        {userNames.map((singleName) => (<li>{singleName}</li>))}
      </ul>
      <button onClick={handleClick} >Click button </button>
      <h4>count = {clickNumber}</h4>
    </div>
  );
}

function App() {


  return (
    <div>< BodyAndHeader /></div>

  );
}

export default App;
