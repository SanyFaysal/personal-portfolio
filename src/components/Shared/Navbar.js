import React from 'react';

import { IconButton, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import TextsmsIcon from '@mui/icons-material/Textsms';

import NavLink from './Navlink';
import '../../style/style.css';

const Navbar = () => {
  return (
    <div className="sticky bottom-0 mt-[-3px]">
      <div className=" flex none">
        <div className="w-full justify-center py-5  px-6 my-auto flex   items-center  ">
          <Tooltip
            title="Home"
            color="success"
            size="large"
            placement="right-end"
            className=""
          >
            <NavLink to="/" className="rounded-full mx-3">
              <IconButton aria-label="delete" size="medium">
                <HomeIcon fontSize="medium" className=" text-white" />{' '}
              </IconButton>
            </NavLink>
          </Tooltip>
          <NavLink to="/about" className="rounded-full mx-3">
            <IconButton aria-label="delete" size="medium">
              <PersonIcon fontSize="medium" className="text-white" />
            </IconButton>
          </NavLink>
          <NavLink to="/projects" className="rounded-full mx-3">
            <IconButton aria-label="delete" size="medium">
              <BusinessCenterIcon fontSize="medium" className="text-white" />
            </IconButton>
          </NavLink>
          <NavLink to="/contact" className="rounded-full mx-3">
            <IconButton aria-label="delete" size="medium">
              <TextsmsIcon fontSize="medium" className="text-white" />
            </IconButton>
          </NavLink>
          <NavLink to="/blog" className="rounded-full mx-3">
            <IconButton aria-label="delete" size="medium">
              <LibraryBooksIcon fontSize="medium" className="text-white" />
            </IconButton>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
