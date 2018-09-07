import React from "react";
import "./FriendCard.css";

const styles = {
  containerStyles: {
    height: "200px",
    width: "200px"
  },
  cardStyles: {
    height: "200px",
    width: "200px"
  },
  imageStyles: {
    height: "200px",
    width: "200px"
  }
}
const FriendCard = props => (
  <div className="card" style={styles.cardStyles}>
    <div className="img-container" style={styles.containerStyles}>
      <img style={styles.imageStyles} alt={props.name} src={props.image} id= {props.id} onClick={() => props.rearrange(props.id)}/>
    </div>
  </div>
);

export default FriendCard;
