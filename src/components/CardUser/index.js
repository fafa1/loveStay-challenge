import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { information } from '../../store/informationUser/Information.action'

export const CardUser = ({ dataUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goInformation = (userInformation) => {
    if (userInformation) {
      dispatch(information(userInformation));
      return navigate('/page-user');
    }
  }


  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={dataUser?.avatar_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {dataUser?.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => goInformation(dataUser)}>Learn More</Button>
        </CardActions>
      </Card>
    </>
  )
}
