import React, { Component } from 'react';

export default class SubHeader extends Component {
  render() {
    return (
      <div className="SubHeader">
        <span id="title">
          <h6>TAREFAS</h6>
        </span>
        <span id="swarm">
          <h6>Swarm/ </h6>
        </span>
        {' '}
        <span id="todo-list-title">
          <h6> Lista de tarefas</h6>
        </span>
      </div>
    );
  }
}
