import { Component } from "react";
import FilmCard from "./FilmCard";
import { Col, Row } from "react-bootstrap";

class Gallery extends Component {
  state = {
    filmsArray: [],
    gallery: this.props.gallery,
    
  }

  componentDidMount = () => {
    this.Fetch();
  };

  Fetch = () => {
    fetch(`https://www.omdbapi.com/?apikey=c2c0c52c&s=${this.props.gallery}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("La chiamata non è andata a buon fine");
        }
      })

      .then((arrayFilm) => {
        const films = arrayFilm.Search.slice(0, 6);
        this.setState(
          {
            ...this.state,
            filmsArray: films,
          },
          () => {
            console.log(this.state);
          }
        );
      })

      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Row className="py-5">
        <Col>
          <Row xs={2} md={6}>
            {this.state.filmsArray.map((film) => {
              return (
                <FilmCard
                  key={film.imdbID}
                  img={film.Poster}
                />
              );
            })}
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Gallery;