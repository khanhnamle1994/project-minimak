import React, {Component} from "react";
import {connect} from "react-redux";

import {
    Grid,
    Segment,
    Header,
} from "semantic-ui-react";

import schema from "app/schema";

import MechsList from "../MechsList";
import MechDetails from "../MechDetails";


const mapState = (state) => {
    const session = schema.from(state.entities);
    const {Mech} = session;

    const mechs = Mech.all().withModels.map(mechModel => {
        const mech = {
            // Copy the data from the plain JS object
            ...mechModel.ref,
            // Provide a default empty object for the relation
            mechType : {},
        };

        if(mechModel.type) {
            // Replace the default object with a copy of the relation's data
            mech.mechType = {...mechModel.type.ref};
        }

        return mech;
    });

    return {mechs}
}

class Mechs extends Component {
    render() {
        const {mechs = []} = this.props;

        const currentMech = mechs[0] || {};

        return (
            <Segment>
                <Grid>
                    <Grid.Column width={10}>
                        <Header as="h3">Mechs List</Header>
                        <MechsList mechs={mechs}/>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header as="h3">Mech Details</Header>
                        <Segment >
                            <MechDetails mech={currentMech} />
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}


export default connect(mapState)(Mechs);
