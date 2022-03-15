import axios from 'axios';


export const get: (url: string) => Promise<any> = async (url) => {
  try {
    const resp = await axios({ method: 'get', url });
    const { data } = resp;
    return data;
  } catch (err) {
    console.log('err', err)
    return null;
  }
}

