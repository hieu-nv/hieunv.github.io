import * as React from 'react';
import { Project } from '../Project';
import './ProjectList.scss';

export class ProjectList extends React.PureComponent {
  constructor(props: any) {
    super(props);

  }

  public render(): React.ReactNode {
    return <div className="projects">
      <h1>Projects</h1>
      <Project gh="hieu-nv/create-react-app" npm="@hieunv/react-scripts"
               avatar="https://rawgit.com/hieu-nv/create-react-app/master/packages/react-scripts/template/src/logo.svg"/>
    </div>;
  }
}
