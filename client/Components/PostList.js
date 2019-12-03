import React from "react";
import axios from "axios";
import "./PostList.css";

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/list").then(res => {
      console.log(res);
      let data = res.data.images;

      this.setState({ data: data });
    });
  }

  render() {
    const images = this.state.data.map(image => {
      return (
        <div className="grid-container">
          <div className="name" style={{ padding: "2px", margin: "5px" }}>
            {image[1]}
          </div>
          <img className="random_img" src={image[2]}></img>

          <div className="tags" style={{ padding: "2px", margin: "5px" }}>
            {image[3][0]}
            <i
              className="fa fa-tag"
              style={{ fontSize: "12px", padding: "2px" }}
            ></i>
          </div>
          <div className="tags" style={{ padding: "2px", margin: "5px" }}>
            {image[3][1]}
            <i
              className="fa fa-tag"
              style={{ fontSize: "12px", padding: "2px" }}
            ></i>
          </div>
        </div>
      );
    });

    return (
      <div>
        <form>
          <input className="input" type="text" placeholder="Search..." />
        </form>
        {images}
      </div>
    );
  }
}

export default PostList;
