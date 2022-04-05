import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TabBarNav.css';

const TabBarNav = ({ navLabel, className, onChangeActiveTab }) => {
  const classes = classNames(
    className,
    'nav-item-tab',
  );

  return (
    <button
      type="button"
      className={classes}
      onClick={() => { onChangeActiveTab(navLabel); }}
    >
      
    </button>
  );
};

TabBarNav.propTypes = {
  navLabel: PropTypes.string,
  className: PropTypes.string,
  onChangeActiveTab: PropTypes.func,
};

TabBarNav.defaultProps = {
  navLabel: '',
  className: '',
  onChangeActiveTab: () => {},
};

export default TabBarNav;
