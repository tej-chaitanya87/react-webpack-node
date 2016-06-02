import React, {PropTypes, Component} from 'react';
import Navigation from 'containers/Navigation';
import Message from 'containers/Message';
import classNames from 'classnames/bind';
import styles from 'css/main';
import SideBar from 'components/SideBar';
import SidebarContent from 'components/SidebarContent'
import {connect} from 'react-redux'

const cx = classNames.bind(styles);


/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
class App extends Component {

    render() {
        let isVisible=this.props.showSidebar
        return (
            <SideBar isVisible={isVisible}
            sidebar={SidebarContent()}>
                <div className={cx('app')}>
                    <Navigation />
                    <Message />
                    {this.props.children}
                 </div>
            </SideBar>
        );
    }
}
;

App.propTypes = {
    children: PropTypes.object
};

function mapStateToProps(state,props) {
    return {
        showSidebar: state.sidebar.showSidebar,
        ...props
    };
}

export default connect(mapStateToProps,null)(App);
