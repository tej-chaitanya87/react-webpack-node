import React, {PropTypes, Component} from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/sidebar';

const cx = classNames.bind(styles);

class SideBar extends Component {

    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps){
        console.log('props are',nextProps)
    }
    render() {
        return <div className={cx('sidebar')}>
            <div className={cx('sidebar-content',{left:!this.props.showRight},{right:this.props.showRight},{visible:this.props.isVisible})}>
                {this.props.sidebar}
            </div>
            <div>
            {this.props.children}
            </div>
        </div>
    }
}

SideBar.propTypes = {
    showRight: PropTypes.bool,
    isVisible: PropTypes.bool,
};
SideBar.defaultProps={
    showRight:false,
    isVisible:false,
    sidebar:null
}

export default SideBar