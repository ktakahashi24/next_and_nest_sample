
import axios from 'axios';

class axiosClient {
  get(url: string) {
    return (
      axios({
        method: 'get',
        url: `${process.env.SERVER_HOST}${url}`,
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        responseType: 'json'  
      })
    )
  }

  post(url: string, data: { [key: string]: string }) {
    return (
      axios({
        method: 'post',
        url: `${process.env.SERVER_HOST}${url}`,
        data: data,
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        responseType: 'json'  
      })
    )
  }

}

export default new axiosClient;