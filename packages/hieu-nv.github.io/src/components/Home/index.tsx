import * as React from 'react';
import { Header } from '..';
import { RouteComponentProps } from '@reach/router';
import { Cover } from '../Cover';
import './Home.scss';
import { ProjectList } from '../ProjectList';
export class Home extends React.PureComponent<RouteComponentProps> {
  public render(): React.ReactNode {
    return <div className="home">
      <Header/>
      <Cover/>
      <ProjectList/>
    </div>;
  }
}
