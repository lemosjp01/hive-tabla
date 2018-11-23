import React, { Component } from 'react';
import listMap from '../../API/listsMap';

const itemsList = [];

function searchingFor(term) {
  return function (x) {
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

export default class SearchField extends Component {
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

  componentWillMount() {
    listMap.getList(this.state.value).then((res) => {
      res.data.map((data) => {
        itemsList.push(data);
      });
    });

    listMap.getList().then((res) => {
      this.setState({
        value: res,
      });
    });
  }

  render() {
    console.log(this.term);
    return (
      <div>
        <form>
          <input type="text" onChange={this.searchHandler} />
        </form>
        <div>
          {itemsList.filter(searchingFor(this.state.term)).map(data => (
            <div key={data.id}>
              <h1>{data.title}</h1>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
