import { useEffect, useState } from 'react';
import axiosClient from '../functions/axios_client';

import Map from '../componets/map';
const HomePage = () => {
  const [test, setTest] = useState('test');
  useEffect(() => {
    axiosClient.get('/cats')
    .then(function(response) {
      // 返ってきたレスポンスはそのまま加工せずに callback で呼び出し元へ渡す
      setTest(response.data.message);
    })
    .catch(function(error) {
      console.log(error);
      console.log('ERROR!! occurred in Backend.');
    });
  });

  return (
    <>
      <div>Welcome to Next.js Typesctipt!!!!{test}</div>
      <Map />
    </>
  )
}

export default HomePage