import * as React from 'react';
import { NavLink as BaseNavLink } from 'react-router-dom';

const NavLink = React.forwardRef(
  ({ activeClassName, activeStyle, ...props }, ref) => {
    return (
      <BaseNavLink
        ref={ref}
        {...props}
        className={({ isActive }) =>
          [props.className, isActive ? 'bg-green-500' : 'bg-gray-700']
            .filter(Boolean)
            .join(' ')
        }
      />
    );
  }
);

export default NavLink;
