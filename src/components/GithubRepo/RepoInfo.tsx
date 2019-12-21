import React, { ReactNode } from 'react';
import Spinner from '../Spinner';

interface IProps {
  data: any
}

interface ILineProps {
  keyName: string;
  value: string | ReactNode;
}

const InfoLine: React.FC<ILineProps> = (props) => {
  return (
    <div className="row">
      <div className="col-2 offset-3">{props.keyName}</div>
      <div className="col-4">{props.value}</div>
    </div>
  );
};

const RepoInfo: React.FC<IProps> = ({ data }) => {
  if (!data) {
    return <Spinner />;
  }
  return (
    <div className="container mt-5 text-left">
      <h4 className="text-center">Repo info</h4>
      <InfoLine keyName="Name" value={data.name} />
      <InfoLine keyName="Language" value={data.language} />
      <InfoLine keyName="Owner" value={data.owner.login} />
      <InfoLine
        keyName="Url"
        value={<a target="_blank" rel="noopener noreferrer" href={data.html_url}>{data.html_url}</a>}
      />
    </div>
  );
};

export default RepoInfo;
