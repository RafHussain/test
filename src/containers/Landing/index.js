import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Form,
  Button,
  ButtonGroup,
  Image,
  Col,
  Row,
} from "react-bootstrap";
import {
  getBreed,
  getRandomBreed,
  addFavourite,
  removeFavourite,
} from "../../actions/home.js";
import "./landing.css";
import Favourites from "../../components/favourites";
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breedData: "",
      isLoading: "true",
    };
  }

  handleBreed = () => {
    this.props.getBreed(this.state.breed);
  };

  hadleFavourite = () => {
    this.props.addFavourite(this.props.breedData);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={4}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter Breed Name:</Form.Label>
                <Form.Control
                  value={this.state.breed}
                  type="text"
                  placeholder="Please specify"
                  onChange={(e) => this.setState({ breed: e.target.value })}
                />
              </Form.Group>
            </Form>
            <ButtonGroup>
              <Button variant="info" type="submit" onClick={this.handleBreed}>
                Search
              </Button>
              <Button
                variant="danger"
                type="submit"
                onClick={() => {
                  this.setState({ breed: "" });
                  this.props.getRandomBreed();
                }}
              >
                Random Search
              </Button>
            </ButtonGroup>
          </Col>
        </Row>

        {this.props.breedData !== null ? (
          <div className="breed-container">
            <h4 className="breed-name">{this.props.breedData.name}</h4>
            <div className="breedImageContainer">
              <Button variant="secondary" onClick={this.hadleFavourite}>
                Add to Favourite
              </Button>
              <Image
                src={this.props.breedData.image}
                className="breed-image"
                rounded
              />
            </div>
          </div>
        ) : null}

        <Favourites
          removeFavourite={(e) => this.props.removeFavourite(e)}
          favourites={this.props.favourites}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  breedData: state.AppState.home.breedData,
  favourites: state.AppState.home.favourites,
});

const mapDispatchToProps = (dispatch) => ({
  getBreed: (breed) => dispatch(getBreed(breed)),
  getRandomBreed: () => dispatch(getRandomBreed()),
  addFavourite: (fav) => dispatch(addFavourite(fav)),
  removeFavourite: (fav) => dispatch(removeFavourite(fav)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
