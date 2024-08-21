
import React from "react";

class ImageComponent extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
        return <img src={this.props.img} alt={this.props.description}/>
    }
}

export default ImageComponent