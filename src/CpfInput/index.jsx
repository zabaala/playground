import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input, { states as availableInputStates } from "../Input";

const propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    feedbackText: PropTypes.string,
    required: PropTypes.bool,
    normalState: PropTypes.oneOf(availableInputStates)
};

const defaultProps = {
    feedbackText: 'Invalid CPF.',
    required: false,
    onChange: () => {},
    availableInputStates: 'normal'
};

class CpfInput extends Component {

    state = {
        isValid: false,
        inputLength: 0,
        value: '',
        ok: false
    };

    isValid = (value) => {
        const cpf = value.replace(/[^\d]+/g, '');

        if(cpf === '') return false;

        // Elimina CPFs invalidos conhecidos
        if (cpf.length !== 11 ||
            cpf === "00000000000" ||
            cpf === "11111111111" ||
            cpf === "22222222222" ||
            cpf === "33333333333" ||
            cpf === "44444444444" ||
            cpf === "55555555555" ||
            cpf === "66666666666" ||
            cpf === "77777777777" ||
            cpf === "88888888888" ||
            cpf === "99999999999")
            return false;

        // Valida 1o digito
        let add = 0;

        for (let i=0; i < 9; i ++) {
            add += parseInt(cpf.charAt(i)) * (10 - i);
        }

        let rev = 11 - (add % 11);

        if (rev === 10 || rev === 11) {
            rev = 0;
        }

        if (rev !== parseInt(cpf.charAt(9))) {
            return false;
        }

        // Valida 2o digito
        add = 0;

        for (let i = 0; i < 10; i ++) {
            add += parseInt(cpf.charAt(i)) * (11 - i);
        }

        rev = 11 - (add % 11);

        if (rev === 10 || rev === 11) {
            rev = 0;
        }

        return rev === parseInt(cpf.charAt(10));
    };

    /**
     * Handle onChange.
     *
     * @param e
     */
    handleOnChange = (e) => {
        e.persist();

        const isValid = this.isValid(e.target.value);

        this.setState({
            inputLength: e.target.value.length,
            value: e.target.value,
            isValid: isValid,
            ok: isValid
        }, () => {
            this.props.onChange(e, this.state.isValid);
        });
    };

    render() {

        const {
            name,
            value,
            onChange,
            normalState,
            feedbackText,
            mask,
            dateFormat,
            required,
            ...attributes
        } = this.props;

        return (
            <Input
                type="tel"
                numberOnly={true}
                name={name}
                maxLength={11}
                state={this.state.isValid ? normalState : (this.state.inputLength === 0 ? normalState : 'error')}
                feedbackText={feedbackText}
                showFeedbackText={this.state.inputLength > 0 && !this.state.isValid}
                onChange={this.handleOnChange}
                value={this.state.value}
                required={required}
                ok={this.state.inputLength > 0 && this.state.ok && this.props.ok}
                {...attributes}
            />
        );
    }
}

CpfInput.propTypes = propTypes;
CpfInput.defaultProps = defaultProps;

export default CpfInput;