import React from "react";

const DoneCounter = ({ done, todo }) => {
    return (
        <span>
            {todo} more to do, {done} done
        </span>
    );
};

export default DoneCounter