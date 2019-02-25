const apis = {
  baseUrl: '192.168.1.192/SmallProgram/v1/',
  method: 'POST',
  timeout: 20000,
  dataType: 'json',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  selectUserGrant: {
    url: 'auth/token',
    params: {
      auth_code: ''
    }
  },
  selectRefreshToken: {
    url: 'refush/token',
    params: {
      refresh_token: ''
    }
  },
  selectAuthFace: {
    url: 'auth/face',
    params: {
      biz_id: '',
      zim_id: ''
    }
  }
};

export default apis;