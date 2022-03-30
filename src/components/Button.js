import React from 'react';
import '../styles/Button.css';

// const Button = ({ value, buttonList }) => {
//   return (
//     <div className="rate-btn">
//       <button className="btn btn-primary">{value}</button>
//     </div>
//   );
// };

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.buttonRef = React.createRef();
  }
  render() {
    return (
      <div
        onClick={() => console.log(this.buttonRef.current)}
        className="rate-btn"
      >
        <button ref={this.buttonRef} className="btn btn-primary">
          {this.props.value}
        </button>
      </div>
    );
  }
}

export default Button;
