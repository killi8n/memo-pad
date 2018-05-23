import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthForm from 'components/auth/AuthForm/AuthForm';
import AuthWrapper from 'components/auth/AuthWrapper/AuthWrapper';
import { changeInput, initializeAuthInputs } from 'store/actions/auth';

class AuthContainer extends Component {


    handleChangeInput = ({name, value}) => {
        const { changeInput } = this.props;
        changeInput({name, value});
    }

    initializeAuthInputs = () => {
        const { initializeAuthInputs } = this.props;
        initializeAuthInputs();
    }

    componentDidMount() {
        this.initializeAuthInputs();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.version !== this.props.version) {
            this.initializeAuthInputs();
        }
    }

    render() {
        const { version, email, password, passwordCheck } = this.props;
        const { handleChangeInput } = this;
        return (
            <AuthWrapper>
                <AuthForm 
                    onChangeInput={handleChangeInput}
                    email={email}
                    password={password}
                    passwordCheck={passwordCheck} />
            </AuthWrapper>
        )
    }
}
export default connect(
    (state) => ({
        email: state.auth.email,
        password: state.auth.password,
        passwordCheck: state.auth.passwordCheck
    }),
    (dispatch) => ({
        changeInput: ({name, value}) => {
            return dispatch(changeInput({name, value}));
        },
        initializeAuthInputs: () => {
            return dispatch(initializeAuthInputs());
        }
    })
)(AuthContainer);