import React from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      password: undefined,
    };
  }

  render() {
    const { username, password } = this.state;
    const { dispatch, state } = this.props;

    const onUsername = (e) => {
      this.setState({
        username: e,
      });
    };

    const onPassword = (e) => {
      this.setState({
        password: e,
      });
    };

    const Login = () => {
      console.log(username);
      console.log(password);
      const dto = {
        username: username,
        password: password,
      };

      fetch("http://localhost:8085/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": " *",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify(dto),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.access_token);
          if (data.access_token != null) {
            window.location = "/";
          }
          getSinav(data.access_token);
        });
    };

    const getSinav = (token) => {
      fetch("http://localhost:8085/api/sinavs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": " *",
          "Access-Control-Allow-Credentials": true,
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    };

    return (
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={4}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <div className="align-items-center">
                        <h5 className="text-center">SINAV SONUÇ SORGULAMA</h5>
                      </div>
                      <br />
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>

                        <CFormInput
                          type="text"
                          placeholder="Kullanıcı adı"
                          value={username}
                          onChange={(e) => onUsername(e.target.value)}
                          autoComplete="username"
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Şifre"
                          value={password}
                          onChange={(e) => onPassword(e.target.value)}
                          autoComplete="current-password"
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs={12} className="text-center">
                          <CButton
                            color="primary"
                            onClick={Login}
                            className="px-4"
                          >
                            Giriş Yap
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
