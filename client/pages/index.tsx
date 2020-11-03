import { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [test, setTest] = useState('test');
  useEffect(() => {
    setTest('initialize');
  
    const axiosBase = require('axios');
    const axios = axiosBase.create({
      baseURL: process.env.SERVER_HOST,
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      responseType: 'json'  
    });

    axios.get('/', {})
    .then(function(response) {

      // 返ってきたレスポンスはそのまま加工せずに callback で呼び出し元へ渡す
      console.log(response)
    })
    .catch(function(error) {
      console.log('ERROR!! occurred in Backend.')
    });

  });

  return (
  <div>Welcome to Next.js Typesctipt!!!!{test}</div>
  )
}

export default HomePage