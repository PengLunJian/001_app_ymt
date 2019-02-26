import apis from '../../apis/index';
import * as $ajax from '../../ajax/index';

const app = getApp();

Page({
    data: {
        radio: {
            name: 'radio',
            checked: false,
        },
        btnConfirm: {
            disabled: true
        }
    },
    onLoad() {
        this.exeSelectDeviceId();
    },
    onHandleConfirm() {
        console.log(app);
    },
    onChangeRadio() {
        this.setData({
            btnConfirm: {
                disabled: false
            }
        });
    },
    exeSelectDeviceId() {
        $ajax.post(apis.selectDeviceId)
            .then((res) => {
                res = res || {};
                const {data, success} = res;
                if (success) {
                    $ajax.setRequestHeader({
                        Authorization: 'Bearer ' + data
                    });
                } else {

                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
});
