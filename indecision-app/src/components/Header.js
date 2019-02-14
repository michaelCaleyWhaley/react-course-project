import React from "react";

// CLASS BASES COMPONENT - doesn't require state so converted to stateless functional component
// class Header extends React.Component {
//   render() {
//     const { props } = this;
//     return (
//       <div>
//         <h1>{props.title}</h1>
//         <h2>{props.subTitle}</h2>
//       </div>
//     );
//   }
// }

// STATELESS FUNCTIONAL COMPONENT
// HEADER COMPONENT
const Header = props => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2>}
    </div>
  </div>
);

Header.defaultProps = {
  title: "Indecision"
};

export default Header;
