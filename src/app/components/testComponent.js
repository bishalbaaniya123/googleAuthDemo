import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {testAction} from "../redux-stuffs/actions/test_action";


class TestComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>This is a test component</h1>
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

const smartTestComponent = connect(mapStateToProps, mapDispatchToProps)(TestComponent);
export default smartTestComponent;