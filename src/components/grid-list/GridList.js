import React, { Component } from 'react';
// Import API
import { Table, Button } from 'reactstrap';
import listMap from '../../API/listsMap';

const itemsList = [];

function searchingFor(term) {
  return function (x) {
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
      term: '',
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event) {
    this.setState({ term: event.target.value });
  }

  componentDidMount() {
    // Load list
    console.log('Mount called');
    listMap.getList(this.state.value).then((res) => {
      res.data.map((data) => {
        if (data.completed === true) {
          data.completed = 'FINALIZADO';
        } else {
          data.completed = 'FINALIZAR';
        }
        itemsList.push(
          <tr key={data.id}>
            <td>{data.title}</td>
            <td>
              <Button>{data.completed}</Button>
            </td>
          </tr>,
        );
      });
    });

    listMap.getList().then((res) => {
      this.setState({
        value: res,
      });
    });
  }

  componentDidUpdate() {
    console.log('update called');
    listMap.getList(this.state.value).then((res) => {
      res.data.map((data) => {
        if (data.completed === true) {
          data.completed = 'FINALIZADO';
        } else {
          data.completed = 'FINALIZAR';
        }
        itemsList.push(
          <tr key={data.id}>
            <td>{data.title}</td>
            <td>
              <Button>{data.completed}</Button>
            </td>
          </tr>,
        );
      });
    });
  }

  render() {
    return (
      <div className="TodoList">
        <form>
          <input type="text" onChange={this.searchHandler} />
        </form>
        <Table>
          <thead>
            <tr>
              <td>TÍTULO</td>
            </tr>
          </thead>
          <tbody>{itemsList}</tbody>
        </Table>
      </div>
    );
  }
}
