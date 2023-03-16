import React from "react";

const SearchPanel = () => {
    const seachText = "Type here to search";
    const searchStyle = {
        fontSize: "20px",
    };
    return <input style={searchStyle} placeholder={seachText} type="text" />;
};

export default SearchPanel