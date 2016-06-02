import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/about';
import {connect} from 'react-redux'
import {toggleSidebar} from 'actions/sidebar';
const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const About = ({toggleSidebar}) => {
    return (

            <div className={cx('about')}>
                <h1 className={cx('header')}>Product Listing Page</h1>
                <div className={cx('description')}>
                    <p>Imagine an ocean of ninjas. Now think of it as a metaphor.<br />
                        Seriously, we love good tech. React, redux, scala, Haskell, machine learning, you name it!
                    </p>
                </div>
              <button className={cx('toggle-button')}
                  onClick={toggleSidebar}>Toggle Sidebar</button>
            </div>
        );
};

export default connect(null,{toggleSidebar})(About);
