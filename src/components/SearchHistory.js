import { Avatar, List } from 'antd';

import PropTypes from 'prop-types';
import React from 'react';

const SearchHistory = ({ searchHistory }) => {
  return (
    <List
      dataSource={searchHistory}
      header={<div>Search History</div>}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.icon} />}
            title={<a href={item.url}>{item.title}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
};

SearchHistory.propTypes = {
  searchHistory: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default SearchHistory;

