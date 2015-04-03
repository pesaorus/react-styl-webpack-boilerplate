var React = require("react");
var Paragraph = require("./components/paragraph/paragraph.jsx");
var Title = require("./components/h1/h1.jsx");

var Test = React.createClass({
    render: function() {
        return (
            <div>
                <Title>
                    Title
                </Title>
                <Paragraph>
                    Paragraph
                </Paragraph>
            </div>
        );
    }
});

React.render(
  <Test />,
  document.getElementById('content')
);