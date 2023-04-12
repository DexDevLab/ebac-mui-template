import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '@components/Title';

function preventDefault(event) {
  event.preventDefault();
}

function Deposits() {
  return (
    <React.Fragment>
      <Title>Entradas Recentes</Title>
      <Typography component="p" variant="h4">
        R$ 3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        em 10 de abril de 2023
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver Extrato
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Deposits;