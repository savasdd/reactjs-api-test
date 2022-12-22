import React from "react";
import { CCard, CCardBody, } from '@coreui/react';
import { connect } from 'react-redux';
import { TOASTR_MESSAGE } from "src/core/actions/Type";

class SinavList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { state } = this.state;
        const { dispatch } = this.props;

        const deneme = () => {
            dispatch({ type: TOASTR_MESSAGE, data: { type: 'success', message: 'Kayıt Yapıldı!' } });
        };

        return (
            <>
                <CCard className="mb-4">
                    <CCardBody>
                        <div>Sinav List</div>
                        <button onClick={deneme}>Test</button>
                    </CCardBody>
                </CCard>
            </>
        )
    }

};

function mapStateToProps(state) {
    return {
        state: state
    }
};

function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SinavList);