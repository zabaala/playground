import React from 'react'

const StoryBody = (props) => {
    const {
        children
    } = props;

    return (
        <div className="pt-6 pb-6">
            <p>Preview:</p>
            { children }
        </div>
    );
};

export default StoryBody;