import React, { useCallback,  useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import styles from './styles.module.scss'
import { api } from '../../services/api';
import { CardUser } from '../CardUser';

export const Search = () => {
  const dataUserGit = {
    id: null,
    name: '',
  }

  const [name, setName] = useState('')
  const [dataUser, setDataUser] = useState(dataUserGit)

  const handleData = useCallback(() => {
    return api.get(`/users/${name}`);
  }, [name])

  const submitSearch = async (e) => {
    e.preventDefault();

    // ver o uso do trinm()
    if(!name.trim()) return;

    try {
      const result = await handleData();

      if (result.status === 200) {
        setDataUser(result.data)
      }

    } catch (error) {
      alert('User could not be found!')

    }
  }

  return (
    <>
      <div className={styles.containerBox}>
        <form onSubmit={submitSearch} style={{ width: '30%', alignSelf: 'center' }}>
          <div className={styles.formSearch}>
            <TextField
              id="standard-basic"
              label="User"
              variant="standard"
              inputProps={{ "data-testid": "input-element" }}
              value={name}
              onChange={(e) => setName(e.target.value)} />
            <Button
              data-testid="button-element"
              variant="contained"
              type="submit">Search</Button>
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
