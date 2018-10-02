import * as React from 'react';
import './Cover.scss';

export class Cover extends React.PureComponent {
  public render(): React.ReactNode {
    return <div className="cover">
      <div className="image-bg"/>
      <span className="prev"/>
      <span className="next"/>
      <div className="title">
        <h1>HieuNV</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className="doWn"><span/></div>
    </div>;
  }
}
