function TeamItem(props){
    return(
      <div class="items">
        <h2>Nation: {props.item.nation} </h2>
        <img src ={props.item.image}></img>
        <h3>Region: {props.item.region}</h3>
        <h3>Price: {props.item.price}</h3>
        <h3>World Ranking: {props.item.world_ranking}</h3>
        <h3>Group: {props.item.group}</h3>
        <button class="button1" onClick={()=>{props.updateCart(props)}}> Add to Cart </button>
        <button class="button2" onClick={()=>{props.removeFromCart(props)}}> Remove From Cart </button>
      </div>
    )
  }

  export default TeamItem;
