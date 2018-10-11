import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { AppContent, Header, MainContent } from '@hieunv/react-mdc/components';
import classNames from 'classnames';

export class Home extends React.PureComponent<RouteComponentProps> {

  public render(): React.ReactNode {
    return <div className="Home">
      <AppContent>
        <Header>Dash</Header>
        <MainContent>
          <div className={classNames('mdc-top-app-bar--fixed-adjust')}><h1>Dash</h1></div>
        </MainContent>
      </AppContent>
    </div>
  }
}
