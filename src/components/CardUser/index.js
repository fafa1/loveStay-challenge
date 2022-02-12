import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const CardUser = ({ dataUser }) => {
  debugger
  const goInformation = (userInformation) => {
    // Fazer um push para outra página levando as informações do usuário
    // posso fazer por meio do redux ou pela própria rota

  }
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={dataUser.avatar_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {dataUser.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {dataUser.bio}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => goInformation(dataUser)}>Learn More</Button>
        </CardActions>
      </Card>
    </>
  )
}
