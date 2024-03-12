import React from "react";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count1: 1,
      count2: 1,
    };
  }

  render() {
    const { name } = this.props;
    const { count1, count2 } = this.state;

    return (
      <>
        <h1>About this page</h1>
        <h2>{name} Good vibes only!</h2>
        <h3>{count1}</h3>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Increment
        </button>
      </>
    );
  }
}

export default AboutClass;
