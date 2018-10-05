import * as React from 'react';
import './Project.scss';

interface ProjectProps {
  gh: string;
  npm: string;
  avatar: string;
}

interface ProjectState {
  forks_count: number;
  stargazers_count: number;
  watchers_count: number;
}

export class Project extends React.Component<ProjectProps, ProjectState> {
  constructor(props: ProjectProps) {
    super(props);
    this.state = {
      forks_count: 0,
      stargazers_count: 0,
      watchers_count: 0,
    };
  }

  public async componentWillMount() {
    try {
      const response = await fetch(`https://api.github.com/repos/${this.props.gh}`);
      const json = await response.json();
      this.setState({
        forks_count: json.forks_count,
        stargazers_count: json.stargazers_count,
        watchers_count: json.watchers_count,
      });
    }
    catch (e) {
      console.log(e);
    }
  }

  public render(): React.ReactNode {
    return <div className="project">
      <h2>{this.props.npm}</h2>
      <div className="info">
        <img className="avatar" src={this.props.avatar} alt={this.props.npm} />
        <div>{this.state.forks_count}</div>
        <div>{this.state.stargazers_count}</div>
        <div>{this.state.watchers_count}</div>
      </div>

    </div>;
  }
}
