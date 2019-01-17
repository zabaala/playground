import React from 'react';
import DateField from "../../src/Components/DateInput/index";


const dateInputStory = {
    name: 'Date Input',
    content: function() {
        return (
            <div>
                <p>Try it:</p>

                <DateField
                    name="date_input"
                    value="08/02/1985"
                />
            </div>
        );
    }
};

export default dateInputStory;