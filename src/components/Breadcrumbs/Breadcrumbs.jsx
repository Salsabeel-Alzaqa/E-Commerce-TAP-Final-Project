import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

function Breadcrumb() {
  const { pathname } = window.location;
  const pathnames = pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant="body1">Home</Typography>
      </Link>
      {pathnames.map((name, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography key={to} variant="body1">
            {name}
          </Typography>
        ) : (
          <Link key={to} to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="body1">{name}</Typography>
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}

export default Breadcrumb;