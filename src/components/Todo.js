import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class Todo extends Component {
  state = {
    elements: [
      { id: '32424242', isCompleted: true, title: 'Zrobić zakupy' },
      { id: '84439392', isCompleted: false, title: 'Opłacić rachunki' }
    ],
    inputValue: ''

  }


  markCompleted(id) {
    const index = this.state.elements
      .findIndex(x => x.id === id)
    const newElements = this.state.elements
    newElements[index].isCompleted = true

    this.setState({ elements: newElements })
  }
  addItem() {
    const item = {
      id: Math.random(),
      title: this.state.inputValue
    }
    const newElements = [item, ...this.state.elements]
    this.setState({ elements: newElements })
    this.setState({ inputValue: '' })
  }

  inputHandler(event) {
    const newValue = event.target.value
    this.setState({ inputValue: newValue })
  }

  render() {
    const elements = this.state.elements.map(e => {
      return <TodoItem element={e} markClicked={this.markCompleted.bind(this)} />
    })

    return (
      <div>
        Todo
        <input type="text" value={this.state.inputValue} onChange={this.inputHandler.bind(this)} />
        <button onClick={this.addItem.bind(this)}>Dodaj do listy</button>
        {elements}

      </div>
    )
  }
}
