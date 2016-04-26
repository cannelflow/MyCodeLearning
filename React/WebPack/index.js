var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('component/app');
var Main = React.createClass({

    render: function() {
        return (
            <div>
                <h1 className="text-primary">Hello {this.state.name}</h1>
            </div>
        );
    }
});
ReactDOM.render(
    <Home />,
    document.querySelector('#app')
);
