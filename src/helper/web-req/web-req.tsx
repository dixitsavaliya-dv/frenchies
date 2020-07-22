import axios from 'axios';
import Constant from '../../constant/constant';

const WebReqUrl = {
    get: async function (url: string) {
        try {
            let response;
            response = await axios.get(url, { headers: Constant.headers })
            if (response.status === 200) {
                console.log(response);
                return response?.data;
            } else {
                return [];
            }
        } catch (err) {
            console.error(err);
        }
    },
    delete: async function (url: string) {
        try {
            let response;
            response = await axios.delete(url, { headers: Constant.headers })
            if (response.status === 200) {
                console.log(response);
                return response?.data;
            } else {
                return [];
            }
        } catch (err) {
            console.error(err);
        }
    },
    put: async function (url: string, body: any) {
        try {
            let response;
            response = await axios.put(url, body, { headers: Constant.headers })
            if (response.status === 200) {
                console.log(response);
                return response?.data;
            } else {
                return [];
            }
        } catch (err) {
            console.error(err);
        }
    },
    post: async function (url: string, body: any) {
        try {
            let response;
            response = await axios.post(url, body, { headers: Constant.headers })
            if (response.status === 200) {
                console.log(response);
                return response?.data;
            } else {
                return [];
            }
        } catch (err) {
            console.error(err);
        }
    }
}

export default WebReqUrl;