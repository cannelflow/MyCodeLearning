var React = require('react');
var Hello = React.createClass({
    getInitialState:function(){
        return({
            name:"Lowshoulder"
        });
    },
    click:function(){
        this.setSate({name:cannelflow});
    },
    render: function() {
        return (
            <div>
                <h1 className="text-primary">Hello {this.state.name}</h1>
                <button onClick={this.click}>Click Me!!</button>
            </div>
        );
    }
});
module.exports = Hello;
