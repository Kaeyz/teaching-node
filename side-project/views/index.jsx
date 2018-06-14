var React = require('react')

class Index extends React.Component {
  render() {
    return (
      <div>
      <h1>Welcome to using |Express-react-views</h1>
      Hello from {this.props.name}
      </div>
    )
  }
}

module.exports = Index