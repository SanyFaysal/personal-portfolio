import React from 'react';
import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
const EmergencyContact = () => {
  return (
    <div className="mx-auto lg:block md:block sm:hidden hidden ">
      <div className="lg:my-2 md:my-2">
        <a
          href="http://wa.me/01634319696"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton aria-label="delete" size="large">
            <WhatsAppIcon fontSize="inherit" className="text-white" />
          </IconButton>
        </a>
      </div>
      <div className="lg:my-2 md:my-2">
        <a href="tel://+88016334319696">
          <IconButton aria-label="delete" size="large">
            <PhoneIcon fontSize="inherit" className="text-white" />
          </IconButton>
        </a>
      </div>
      <div className="my-2">
        <a href="https://github.com/SanyFaysal">
          <IconButton aria-label="delete" size="large">
            <GitHubIcon fontSize="inherit" className=" text-white" />
          </IconButton>
        </a>
      </div>
      <div className="my-2">
        <a href="https://www.linkedin.com/in/foysal-ahmed-2b7ab0239/">
          <IconButton aria-label="delete" size="large">
            <LinkedInIcon fontSize="inherit" className="text-white" />
          </IconButton>
        </a>
      </div>
      <div className="my-2">
        <a href="mailto:abu.faysal002@gamil.com">
          <IconButton aria-label="delete" size="large">
            <MailIcon fontSize="inherit" className="text-white" />
          </IconButton>
        </a>
      </div>
    </div>
  );
};

export default EmergencyContact;
