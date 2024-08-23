import { Component } from 'react'

export default class FilmCard extends Component {
  state = {
    film: {
      Image: this.props.img,
      imdbID: this.props.id,
    },
  }

  render() {
    return (
      <div className="col mb-2 text-center px-1">
        <img
          className="img-fluid"
          src={this.state.film.Image}
          alt="movie"
          key={this.state.film.imdbID}
        />
      </div>
    )
  }
}
