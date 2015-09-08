var Transformer = React.createClass({
    getInitialState: function () {
        return {
            input: '',
            output: '',
            err: ''
        }
    },
    update: function (e) {
        var code = e.target.value;
        try {
            this.setState({
                output: JSXTransformer.Transformer(code).code,
                err: ''
            })
        } catch (err) {
            this.setState({
                error: err.message
            })
        }
    },
    render: function () {
        return (
            <div>
                <div className="row">
                    <p className="alert alert-danger">{this.state.err}</p>
                </div>
                <div className="row">
                </div>
            </div>
        )
    }
});
