Component({
    mixins: [],
    data: {},
    props: {
        label: '',
        value: '',
        onDatePicker: 'onDatePicker'
    },
    didMount() { },
    didUpdate() { },
    didUnmount() { },
    methods: {
        datePicker() {
            this.props.onDatePicker();
        }
    },
});
