var React = require('react')

class About extends React.Component {
  render() {
    return (
      <div>
      <h1>Welcome to using |Express-react-views</h1>
      Hello from {this.props.name}
      <h2>About Page</h2>
      </div>
    )
  }
}

module.exports = About
