import React from "react";


class FocusUseRef extends React.Component {

    render() {
        return (

            <div>

                <InputFields></InputFields>
            </div>
        );
    }
}

class InputFields extends React.Component {
    handleChange = (e) => {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");

        let fieldIntIndex = parseInt(fieldIndex, 10);

        // Check if no of char in field == maxlength
        if (value.length >= maxLength) {

            // It should not be last input field
            if (fieldIntIndex < 3) {

                // Get the next input field using it's name
                const nextfield = document.querySelector(
                    `input[name=field-${fieldIntIndex + 1}]`
                );

                // If found, focus the next field
                if (nextfield !== null) {
                    nextfield.focus();
                }
            }
        }
    };

    render() {
        return (
            <div style={{ padding: 30 }}>
                <InputFild name="field-1" length="3"
                    handleChange={this.handleChange} />
                <InputFild name="field-2" length="4"
                    handleChange={this.handleChange} />
                <InputFild name="field-3" length="3"
                    handleChange={this.handleChange} />
            </div>
        );
    }
}
class InputFild extends React.Component {
    render() {
        return (
            <input
                style={{ margin: 10 }}
                type="text"
                name={this.props.name}
                maxLength={this.props.length}
                onChange={this.props.handleChange}
            ></input>
        );
    }
}

export default FocusUseRef;