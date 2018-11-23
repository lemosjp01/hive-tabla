import React, { Component } from 'react';
import GridList from '../../components/grid-list/GridList';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import SubHeader from '../../components/header/SubHeader';
import SearchField from '../../components/search/SearchField';

export default class MainPage extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Header />
        <SubHeader />
        <div className="content-page">
          <SearchField />
          <GridList className="Todolist" />
        </div>
      </div>
    );
  }
}
