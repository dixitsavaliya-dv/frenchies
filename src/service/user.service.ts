import Constant from '../constant/constant';
import WebReqUrl from '../helper/web-req/web-req';
import apiUrl from '../helper/apicontroller/apicontroller';

export default {
    loginUser: async function (data: any) {
        return await WebReqUrl.post(Constant.apiUrl + apiUrl.userController.createData, data);
    },
    forgotPassword: async function (data: any) {
        return await WebReqUrl.post(Constant.apiUrl + apiUrl.userController.forgotpassword, data);
    },
    getProfile: async function () {
        return await WebReqUrl.get(Constant.apiUrl + apiUrl.userController.getData);
    },
    updateProfile: async function (data: any) {
        return await WebReqUrl.post(Constant.apiUrl + apiUrl.userController.updateData, data);
    },
    updatePassword: async function (data: any) {
        return await WebReqUrl.post(Constant.apiUrl + apiUrl.userController.updatePassword, data);
    },
    getUserCount: async function () {
        return await WebReqUrl.get(Constant.apiUrl + apiUrl.userController.getCount);
    },
    getUserDataPagination: async function () {
        return await WebReqUrl.get(Constant.apiUrl + apiUrl.userController.getUserPaginationData);
    }
}