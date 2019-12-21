import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Spinner from '../Spinner';

interface IProps {
  list: any[]
}

interface IItemProps {
  item: any
}

const CommitItem: React.FC<IItemProps> = ({ item }) => {
  const date = new Date(item.commit.author.date).toUTCString();
  return (
    <ListGroupItem className="d-flex justify-content-between">
      <div>
        <h5>
          {item.commit.message}
        </h5>
        <h6>{item.commit.author.name} at {date}</h6>
      </div>
      <div className="d-flex align-items-center">
        <h6>{item.sha}</h6>
      </div>
    </ListGroupItem>
  );
};

const Commits: React.FC<IProps> = ({ list }) => {
  if (!list) {
    return <Spinner />;
  }
  return (
    <div className="container mt-5">
      <h4 className="text-center">Commits</h4>
      <ListGroup>
        {list.map((item, i) => <CommitItem key={i} item={item} />)}
      </ListGroup>
    </div>
  );
};

export default Commits;
