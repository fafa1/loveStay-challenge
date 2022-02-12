import React, { useEffect } from 'react';
import { api } from './services/api'
import { Search } from './components/Search'
import { CardUser } from './components/CardUser';

export function App() {
  // useEffect(() => {
  //   (async () => {
  //   const result = await api.get('/users/fafa1')
  //   console.log(result.data)
  // }
 
  // )()
  // }, [ ])
  return (
    <div>
      <Search />
    </div>
  );
}

