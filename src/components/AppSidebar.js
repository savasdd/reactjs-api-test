import React from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { AppSidebarNav } from './AppSidebarNav'
import { logoNegative } from 'src/assets/brand/logo-negative'
import { sygnet } from 'src/assets/brand/sygnet'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import {
  SIDEBAR_SHOW
} from "../../src/core/actions/Type";


// sidebar nav config
import navigation from '../_nav'

class AppSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unfoldable: false,
      sidebarShow: true,
      show: 'responsive',
    }
  }
  //const dispatch = useDispatch()
  //const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  //const sidebarShow = useSelector((state) => state.sidebarShow)

  async componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.state.main.get('sidebarShow'),
    });
  }

  render() {
    const { unfoldable, sidebarShow, show } = this.state;
    const { dispatch, state } = this.props;

    return (
      <CSidebar
        position="fixed"
        //unfoldable={unfoldable}
        visible={!show}
        onVisibleChange={(val) => dispatch({ type: SIDEBAR_SHOW, data: { sidebarShow: val } })}
      >
        <CSidebarBrand className="d-none d-md-flex" to="/">
          <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
          <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
        </CSidebarBrand>
        <CSidebarNav>
          <SimpleBar>
            <AppSidebarNav items={navigation} />
          </SimpleBar>
        </CSidebarNav>
        <CSidebarToggler
          className="d-none d-lg-flex"
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebar>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state,
  }
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AppSidebar);
