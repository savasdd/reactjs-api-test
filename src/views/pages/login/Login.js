import React from 'react'
import { Link } from 'react-router-dom'
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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { username, password } = this.state

    const login = () => {
      console.log(username)
      console.log(password)
    }

    const onUsername = (e) => {
      this.setState = {
        username: e,
      }
    }

    const onPassword = (e) => {
      this.setState = {
        password: e,
      }
    }

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
                          <CButton color="primary" onClick={login} className="px-4">
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
    )
  }
}

export default Login
