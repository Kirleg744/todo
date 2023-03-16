import React from "react";

// class FilterItem extends React.Component {
//     render() {
//         const { label } = this.props;

//         return <button className="btn btn-outline-primary">{label}</button>;
//     }
// }

const FilterItem = ({label}) => {

    return <button className="btn btn-outline-primary">{label}</button>;
}

export default FilterItem