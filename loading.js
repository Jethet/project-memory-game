import React from "react"

class PhotoFetcher extends React.Component {
  state = {
    isLoading: true,
    image: null
  }

  componentDidMount = () {
    fetch('https.some_url/photo/numberphoto')
    .then(res => res.json())
    .then(data => {
      this.setState({
        isLoading: false,
        image: data.photo.numberphoto[0]
      })
    })
  }

  render() {
    if (this.state.isLoading) {
      return <span>Loading ....</span>
    } else { 
    return <span>{this.state.image}</span>
    }
  }
}

export default PhotoFetcher