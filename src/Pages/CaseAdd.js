import React, { Component } from 'react'

export default class CaseAdd extends Component {
  dropRef = React.createRef()

  componentDidMount() {
    let div = this.dropRef.current
    div.addEventListener('dragenter', this.handle)
    div.addEventListener('drop', this.handle)
  }

  handle() {
    console.log('hello')
  }
  render() {
    
    return (
      
         <div ref={this.dropRef}>
          Pawan Jain
        </div>
    )
  }
}
