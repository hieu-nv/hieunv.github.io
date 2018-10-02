import * as React from 'react';
import './Header.scss';
import { Link } from '@reach/router';

export class Header extends React.PureComponent {
  public render(): React.ReactNode {
    return <header>
      <h1>HieuNV</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="projects">Projects</Link>
      </nav>
    </header>
  }
}
