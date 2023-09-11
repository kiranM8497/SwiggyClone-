import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div className="about">
//       <h1>
//         <strong>Potato's World</strong>
//       </h1>
//       <h2>About Our Food Delivery App</h2>
//       <p>
//         Welcome to our food delivery app, where we bring delicious meals right
//         to your doorstep! Whether you're craving your favorite comfort food or
//         want to try something new, we've got you covered.
//       </p>
//       <p>
//         Our mission is to provide you with a seamless and delightful food
//         ordering experience. We partner with the best restaurants in town to
//         offer you a wide range of cuisines and dishes to satisfy your taste
//         buds.
//       </p>
//       {/* <User name={"Akshay Saini"} location={"Dehradhun"} /> */}
//       <UserClass name={"Akshay Saini"} location={"Dehradhun"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent Constructor");
  }

  // this method will run after render() has been called for the first time on the client side only once per component instance
  componentDidMount() {
    console.log(" Parent componentDidMount");
  }

  render() {
    console.log("Parent render");
    return (
      <div className="about">
        <h1>
          <strong>Potato's World</strong>
        </h1>
        <h2>About Our Food Delivery App</h2>
        <p>
          Welcome to our food delivery app, where we bring delicious meals right
          to your doorstep! Whether you're craving your favorite comfort food or
          want to try something new, we've got you covered.
        </p>
        <p>
          Our mission is to provide you with a seamless and delightful food
          ordering experience. We partner with the best restaurants in town to
          offer you a wide range of cuisines and dishes to satisfy your taste
          buds.
        </p>
        {/* <User name={"Akshay Saini"} location={"Dehradhun"} /> */}
        <UserClass name={"First Child"} location={"Dehradhun"} />
      </div>
    );
  }
}

{
  /*

parent constructor
parent rendor

first child constructor
first child render

second child constructor
second child render

third child constructor
third child render

first child componentDidMount
second child componenDidMount
third child componentdidmount

parent componentDidMount



*/
}

export default About;
