import React from "react";
import FilterItem from "./filter-item";

const TaskFilter = ({ items }) => {
    const elements = items.map((item) => {
        const { ...itemProps } = item;

        return <FilterItem {...itemProps} />;
    });

    return <div className="">{elements}</div>;
};

export default TaskFilter;
