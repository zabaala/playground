import React from 'react';
import CpfInput from "../../src/CpfInput";


const cpfInputStory = {
    name: 'Cpf Input',
    content: function() {
        return (
            <div>
                <p>Try it:</p>
                <CpfInput name="input" />
            </div>
        );
    }
};

export default cpfInputStory;