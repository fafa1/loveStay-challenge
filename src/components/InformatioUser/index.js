import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss'
import { api } from '../../services/api';


export const InformationUser = () => {
  const informationUser = useSelector(state => state.information)

  const [listRepos, setListRepo] = useState([]);

  const formaterUrlApi = () => {
    if (informationUser?.repos_url) {
      const result = informationUser.repos_url.split('.com')[1];
      return result;
    }
  }

  useEffect(() => {
    const getListRepositoies = async () => {
      const resultFormater = formaterUrlApi();
      if (resultFormater) {
        const listRepositories = await api.get(resultFormater);

        setListRepo(listRepositories.data);

        console.log(listRepositories.data, 'bora');
      }
    }

    getListRepositoies()
  }, [])
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ background: '#fefefe' }}>
            <Card sx={{ minWidth: 275 }} >
              <CardContent className={styles.cardBody}>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                  Nome: <span style={{ fontWeight: 'bold' }}> {informationUser?.name} </span>
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" gutterBottom>
                  Trabalhar na empresa: <span style={{ fontWeight: 'bold' }} >{informationUser?.company}</span>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Biografia:
                  <span style={{ fontWeight: 'bold' }}> {informationUser?.bio}</span>

                </Typography>
                <Typography variant="body2" gutterBottom>
                  <span>Repositório públicos</span>: <span style={{ fontWeight: 'bold' }}>{informationUser?.public_repos}</span>
                </Typography>
                <Typography variant="body2">
                  <span>Localização: </span>
                  {informationUser?.location}
                </Typography>

                <p>List Repositories:</p>

                {listRepos &&
                  listRepos.map((value, index) => {
                    return (
                      <Typography key={index} variant="body2">
                        <br />
                        Name: <span style={{ fontWeight: 'bold' }}>{value?.name}</span>
                        <br />
                        {value?.description &&
                          <span>
                            Description: <span style={{ fontWeight: 'bold' }}>{value?.description}</span>
                          </span>

                        }
                      </Typography>

                    )
                  })

                }

              </CardContent>
              <CardActions>
                <Link className={styles.LinkBack} to="/">Voltar</Link>
              </CardActions>
            </Card>

          </Grid>
        </Grid>
      </Box>
    </>
  )
}