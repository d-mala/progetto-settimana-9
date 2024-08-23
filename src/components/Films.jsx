import { Component } from 'react'
import Gallery from './Gallery'
import { Container } from 'react-bootstrap'

export default class Films extends Component {
  state = {
    gallery1: 'Harry Potter',
    gallery2: 'Marvel',
    gallery3: 'Pokemon',
  }

  render() {
    return (
      <Container fluid className="px-5 text-light">
        <h4>Trending Now</h4>
        <Gallery gallery={this.state.gallery1} />
        <h4>Watch it Again</h4>
        <Gallery gallery={this.state.gallery2} />
        <h4>New Releases</h4>
        <Gallery gallery={this.state.gallery3} />
      </Container>
    )
  }
}
