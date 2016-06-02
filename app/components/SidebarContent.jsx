import React, {PropTypes, Component} from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/sidebar-content';

const cx = classNames.bind(styles);

const  SidebarContent= () =>{
    return <div className={cx('content')}>
        <h3 className={cx('header')}>Food Menu</h3>
        <ul className={cx('menu')}>
            <li className={cx('menu-item')}>
                SANDWICHES
            </li>
            <li className={cx('menu-item')}>
                HOT ROLLS
            </li>
            <li className={cx('menu-item')}>
                HOT POTS
            </li>
            <li className={cx('menu-item')}>
               BREAKFAST
            </li>
            <li className={cx('menu-item')}>
               SALADS
            </li>
            <li className={cx('menu-item')}>
               DESSERTS
            </li>
        </ul>
    </div>

}
export default SidebarContent