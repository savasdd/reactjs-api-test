import React from 'react'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

class Sinav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <CCard className="mb-4">
          <CCardBody>
            <div>Sinav List</div>
          </CCardBody>
        </CCard>
      </>
    )
  }
}

export default Sinav
