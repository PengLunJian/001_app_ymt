const kinds = ['身份证'];
Page({
  data: {},
  onLoad(options) {
    let title=options.id=="0"? '新增' : '修改'
    my.setNavigationBar({
      title:title
    });
  },
  
  onPickerTap(e) {
    console.log(e)
    my.showActionSheet({
      title: '选择发卡银行',
      items: kinds,
      success: (res) => {
        this.setData({
          bank: kinds[res.index],
        });
      },
    });
  },
});
