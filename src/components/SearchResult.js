import { List } from 'antd';
import React from 'react';

const SearchResult = ({ places }) => {
  return (
    <List
      bordered
      dataSource={places}
      renderItem={item => (
        <List.Item>
          {item.description}
        </List.Item>
      )}
    />
  );
};

export default SearchResult;
