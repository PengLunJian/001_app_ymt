Component({
    mixins: [],
    data: {},
    props: {
        label: '',
        value: '',
        onSelectValue: 'onSelectValue'
    },
    didMount() { },
    didUpdate() { },
    didUnmount() { },
    methods: {
        onSelectValue() {
            this.props.onSelectValue();
        }
    },
});
