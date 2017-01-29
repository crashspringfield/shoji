import React, { Component } from 'react'
import Resizable, { ResizableBox } from 'react-resizable'

import Left from './Left'
import Right from './Right'

class Shoji extends Component {
  constructor() {
    super()
    this.state = {
      height: window.innerHeight,
      leftWidth: (window.innerWidth/2),
      rightWidth: (window.innerWidth/2),
    }
  }

  onResize(event, {element, size}){
    this.setState({
      leftWidth: size.width,
      rightWidth: (window.innerWidth-size.width)
    })

    console.log('Width of left component is ' + this.state.leftWidth + 'px')
    console.log('Width of right component is ' + this.state.rightWidth + 'px')
  }

  render() {
    return (
      <div>
        <div>
        <ResizableBox className="left"
          width={this.state.leftWidth} height={this.state.height}
          axis={'x'}
          onResize={this.onResize.bind(this)}>
          <Left  />
        </ResizableBox>
        </div>
        <div>
        <ResizableBox className="right"
          width={this.state.rightWidth} height={this.state.height}
          axis={'x'}>
          <Right />
        </ResizableBox>
        </div>
      </div>
    )
  }
}

export default Shoji
