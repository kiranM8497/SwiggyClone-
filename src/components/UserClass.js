import React from "react";

class UserClass extends React.Component {
  //to recieve props we wite a consructor
  constructor(props) {
    super(props);

    //state variable
    this.state = {
      userInfo: {
        name: "potato",
        location: "Kolhapur",
      },
    };

    console.log(this.props.name + " Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " componentDidMount");

    const data = await fetch(" https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component did update called");
  }

  componentWillUnmount() {
    console.log("component will unmount is called");
  }

  // this render method will return a piece of  JSX whcih will be shown to UI
  render() {
    console.log(this.props.name + "  render");

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <img src={avatar_url} alt="img" />
        <h2>Location : {location}</h2>
        <h3>Contact : @Akshaymarch7</h3>
      </div>
    );
  }
}

export default UserClass;
