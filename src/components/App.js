import './styles/index.css';

import { Layout } from "antd";
import Map from "./Map";
import PlaceAutocomplete from "./PlaceAutoComplete";
import React from "react";
import SearchHistory from "./SearchHistory";
import SearchResult from "./SearchResult";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ background: "#fff", padding: 0 }}>
        <h1 style={{ textAlign: "center" }}>Google Places Autocomplete</h1>
      </Header>
      <Content className="app-container" style={{ padding: "50px" }}>
        <PlaceAutocomplete className="place-autocomplete-container"/>
        <SearchResult className="search-results-container" />
        <SearchHistory className="search-history-container "/>
        <Map className="map-container"/>
      </Content>
    </Layout>
  );
}

export default App;
