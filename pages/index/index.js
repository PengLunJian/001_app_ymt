import apis from '../../apis/index';
import * as $ajax from '../../ajax/index';

Page({
  data: {},
  onLoad() {
    // my.getAuthCode({
    //   scopes: 'auth_user',
    //   success: (res) => {
    //     console.log(res.authCode);
    //   },
    // });
    $ajax.post(apis.selectUserGrant)
      .then((res) => {
        res = res || {};
        console.log(res);
      })
      .catch((err) => {
        err = err || {};
        console.log(err);
      })
  },
});
