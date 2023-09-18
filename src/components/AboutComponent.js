import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class AboutComponent extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is the React course</h2>
        <UserClass name={"Likhith (class)"} location={"Bangalore class"} />
      </div>
    );
  }
}

// const AboutComponent = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is the React course</h2>
//       <UserClass name={"Likhith (class)"} location={"Bangalore class"} />
//     </div>
//   );
// };

export default AboutComponent;
