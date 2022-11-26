import './App.css';
import teamData from "./assets/soccer-teams.json";
import TeamItem from "./components/TeamItem";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';

teamData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const [sort, setSort] = useState("0");
  const [type, setType] = useState("All");
  const[cart, setCart] = useState({});
  const[price, setPrice] = useState(0)

  const updateCart =(props) => {
    let newCart = cart;
    if(newCart[props.index]){
      newCart[props.index]+=1;
    }
    else{
      newCart[props.index] = 1;
    }
    setCart({...newCart});
    setPrice(props.price + props.item.price);
  }

  const removeFromCart =(props) => {
    let newCart = cart;
    if (newCart[props.index]){
      if(newCart[props.index] != 0){
        if (newCart[props.index] == 1) {
          newCart[props.index] = 0
          setPrice(0)
        } else {
          newCart[props.index] -= 1
          setPrice(props.price - props.item.price);
        }
      }
    }
    setCart(newCart)
  }

  function compareTeams(a, b) {
    if (sort === "0") {
      return 0
    } else if (a.world_ranking < b.world_ranking) {
      return -1
    } else {
      return 1
    }

  }

  return (
    <div className="App">
      <div>
      <h1>Filter By Region</h1>
      <Nav onSelect={eventKey => {
          setType(eventKey);
        }}>
      <Nav.Item><Nav.Link eventKey="All">All Regions</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="North, Central America and Caribbean">North, Central America and Caribbean</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="South America">South America</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="Africa">Africa</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="Asia">Asia</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="Oceania">Oceania</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="Europe">Europe</Nav.Link></Nav.Item>
      </Nav>

      <h1>Filter By Group</h1>
      <Nav onSelect={eventKey => {
          setType(eventKey);
        }}>
      <Nav.Item><Nav.Link eventKey="All">All Groups</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="A">Group A</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="B">Group B</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="C">Group C</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="D">Group D</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="E">Group E</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="F">Group F</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="G">Group G</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="H">Group H</Nav.Link></Nav.Item>
      </Nav>
      </div>

      <div>
      <h1>Sort By</h1>
      <Nav onSelect={eventKey => {
          setSort(eventKey);
        }}>
      <Nav.Item><Nav.Link eventKey="1">World Ranking</Nav.Link></Nav.Item>
      </Nav>
      </div>

      <div className="teams">
      <h1>World Cup Team Flags Shop</h1>
      {teamData.sort(compareTeams).map((item, index) => {
          if (type === "All") {
            return(
              <TeamItem updateCart={updateCart}
              removeFromCart={removeFromCart}
                item={item}
                index={index}
                  price={price}
                  setPrice={setPrice} />
            )
          } else if (type === item.region || type === item.group) {
            return(
              <TeamItem updateCart={updateCart}
              removeFromCart={removeFromCart}
                item={item}
                index={index}
                  price={price}
                  setPrice={setPrice} />
            )
          }
          })};
      </div>

      <div>
        <h1> Cart </h1>
        {Object.keys(cart).map((key) =>{
          if (cart[key] > 0) {
            return(
              <div>
              {cart[key]+"x " + teamData[key].nation + " flags"}
              </div>
            )
          }
      })}
        <h4>Total: ${price}</h4>
        <button class="button3" onClick={()=>{setCart({});
             setPrice(0)}}> Reset Cart </button>
      </div>
    </div>
  );
}

export default App;
