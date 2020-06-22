import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import "./favourites.css";

class Favourites extends Component {
  render() {
    return (
      <div className="favourite-Container">
          {
          this.props.favourites.length !== 0 && this.props.favourites.map((item,idx)=>{
            return <div className="breed-container">
            <h5 className="breed-name">{item.name}</h5>
            <div className="breedImageContainer">
              <Button
                className="removeFavourite"
                variant="danger"
                onClick={()=>this.props.removeFavourite(item.name)}
              >
                remove
              </Button>
              <Image
                src={item.image}
                className="breed-image"
                rounded
              />
            </div>
          </div>
          })
          }
      </div>
    );
  }
}

export default Favourites;
