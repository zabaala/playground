import React from 'react';
import EmailInput from "../../src/EmailInput";


const emailInputStory = {
    name: 'E-mail Input',
    content: function() {
        return (
            <div>
                <p>Try it:</p>

                <EmailInput
                    name="date_input"
                    value="08/02/1985"
                    ok={true}
                />
            </div>
        );
    }
};

export default emailInputStory;