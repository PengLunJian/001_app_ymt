const apis = {
    baseUrl: 'zero.yizuanbao.cn/',
    method: 'POST',
    timeout: 20000,
    dataType: 'json',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    selectDeviceId: {
        url: 'UserCenter/v1/refresh/did'
    },
    selectUserGrant: {
        url: 'SmallProgram/v1/auth/token',
        params: {
            auth_code: ''
        }
    },
    selectRefreshToken: {
        url: 'SmallProgram/v1/refush/token',
        params: {
            refresh_token: ''
        }
    },
    selectAuthFace: {
        url: 'SmallProgram/v1/auth/face',
        params: {
            biz_id: '',
            zim_id: ''
        }
    }
};

export default apis;