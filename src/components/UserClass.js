import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.name + "Child Constructor");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    //console.log("Child Mount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }
  render() {
    //console.log("Child Render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: likhith@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
