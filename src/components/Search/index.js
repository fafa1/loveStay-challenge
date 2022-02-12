import React, { useCallback, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import styles from './styles.module.scss'
import { api } from '../../services/api';
import { CardUser } from '../CardUser';

export const Search = () => {
  const dataUserGit = {
    id: null,
    name: '',
    bio: '',
    login: '',
    followers: 0,
    company: '',
    email: '',
    location: '',
    avatar_url: '',
    public_repos: 0
  }

  const [name, setName] = useState('')
  const [dataUser, setDataUser] = useState(dataUserGit)

  const handleData = useCallback(() => {
    return api.get(`/users/${name}`);
  }, [name])

  const submitSearch = async (e) => {
    e.preventDefault();

    try {
      const result = await handleData();

      if (result.status === 200) {
        console.log(result.data)
        setDataUser(result.data)
      }

    } catch (error) {
      console.log(error)

    }
  }

  return (
    <>
      <div className={styles.containerBox}>
        <form onSubmit={submitSearch} style={{ width: '30%', alignSelf: 'center' }}>
          <div className={styles.formSearch}>
            <TextField
              id="standard-basic"
              label="Usuário"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)} />
            <Button variant="contained" type="submit">Pesquisar</Button>
          </div>
        </form>

        <div style={{ marginTop: '50px', alignSelf: 'center' }}>
          {dataUser.id &&
            <CardUser dataUser={dataUser} />
          }
        </div>
      </div>

    </>
  )

}
