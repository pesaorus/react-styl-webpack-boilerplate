var React = require("react");
var Paragraph = require("./paragraph_component/paragraph.jsx");
var Title = require("./h1_component/h1.jsx");

var Test = React.createClass({
    render: function() {
        return (
            <div>
                <Title>
                    Test
                </Title>
                <Paragraph>
                    Параграф
                </Paragraph>
            </div>
        );
    }
});

React.render(
  <Test />,
  document.getElementById('content')
);