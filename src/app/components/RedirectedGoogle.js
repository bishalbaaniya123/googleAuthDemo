import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {testAction} from "../redux-stuffs/actions/test_action";


class RedirectedGoogleComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Google logged in successfully</h1>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        validateUser: testAction
    }, dispatch)
};
const mapStateToProps = (state) => {
    return {
    };
};

const smartRedirectedGoogle = connect(mapStateToProps, mapDispatchToProps)(RedirectedGoogleComponent);
export default smartRedirectedGoogle;