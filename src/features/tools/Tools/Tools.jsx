import React, {Component} from "react";
import {connect} from "react-redux";
import {
    Segment,
    Button,
} from "semantic-ui-react";

import {loadUnitData} from "../toolActions";
import {openModal} from "features/modals/modalActions.js";

const actions = {loadUnitData, openModal};

class Tools extends Component {

    onOpenModalClicked = () => {
        this.props.openModal("ColorPickerDialog");
    }

    render() {
        const {loadUnitData} = this.props;

        return (
            <Segment attached="bottom">
                <Button onClick={loadUnitData}>Reload Unit Data</Button>
                <Button primary onClick={this.onOpenModalClicked}>Show Test Modal</Button>
            </Segment>
        )
    }
}

export default connect(null, actions)(Tools);
