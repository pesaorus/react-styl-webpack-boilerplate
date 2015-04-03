var React = require('react');
require("./paragraph.styl");

var Paragraph = React.createClass({
    render: function() {
        return (
            <p className="paragraph">{this.props.children}</p>
        );
    }
});

module.exports = Paragraph;