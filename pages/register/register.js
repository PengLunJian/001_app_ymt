import * as utils from '../../utils/index';

Page({
    data: {
        params: {
            name: '',
            number: '',
            nation: '',
            phone: '',
            address: '',
            gender: '',
            birthday: '',
            birthdayAddr: '',
            registerAddr: ''
        }
    },
    onLoad() { },
    onDatePicker() {
        let date = new Date();
        my.datePicker({
            currentDate: utils.dateFormat(date),
            startDate: '1900-01-01',
            endDate: utils.dateFormat(date),
            success: (res) => {
                my.alert({
                    title: JSON.stringify(res)
                });
            },
        });
        date = null;
    },
});