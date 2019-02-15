import React from 'react';
import {withRouter} from "react-router-dom";


class RedirectGoogleComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        let results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    render() {
        const token = this.getUrlParameter('token');
        const error = this.getUrlParameter('error');

        let currentHref = window.location.href;
        let splitWithEquals = currentHref.split("=");
        let googleToken = splitWithEquals[1].split("#")[0];
        // googleToken = "ey";

        if (googleToken.substring(0, 2) === "ey") {
            localStorage.setItem('accessToken', googleToken);
            this.props.history.push({
                pathname: "redirected-google"
            });
            return <div className="row redirect-page-main-div">
                Redirecting......
            </div>
        } else {
            return <div>
                There is no googleToken
            </div>
        }

        /*if (token) {
            // localStorage.setItem('accessToken', token);
            /!*api.getUserInfoAfterLogin(token)
                .then(result => {
                    this.props.saveToken(result)
                        .then(() => {
                            this.props.history.push({
                                pathname: "/documents"
                            });
                        });
                });*!/
            return <div>
                <h1>Redirecting......</h1>
            </div>;

        } else {
            // window.location.href = "http://docpress.io";
            return (<div>
                <h1>Error while logging in</h1>
                <p>Please try again</p>
                <p>{error}</p>
            </div>);
        }*/
    }
}

/*
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        saveToken: authAction
    }, dispatch)
};
const mapStateToProps = (state) => {
    return {};
};
*/

/*
const smartRedirectGoogleComponent = connect(mapStateToProps, mapDispatchToProps)(RedirectGoogleComponent);
export default smartRedirectGoogleComponent;
*/


/*const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        saveDetailsOfMe: saveDetailsOfMe
    }, dispatch)
};*/

export default withRouter(RedirectGoogleComponent);
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RedirectGoogleComponent));


/*
import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {testAction} from "../redux-stuffs/actions/test_action";


class RedirectGoogle extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>This is a RedirectGoogle component</h1>
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

const smartRedirectGoogle = connect(mapStateToProps, mapDispatchToProps)(RedirectGoogle);
export default smartRedirectGoogle;*/
