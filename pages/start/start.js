Page({
    data: {
        agree: {
            name: 'radio',
            checked: false,
        }
    },
    onLoad() { },
    radioChange(e) {
        console.log(this.agree);
    }
});
