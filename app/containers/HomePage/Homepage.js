import React from 'react';
import { Helmet } from 'react-helmet-async';
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div className="container mx-auto">Home Page</div>
      </article>
    );
  }
}
