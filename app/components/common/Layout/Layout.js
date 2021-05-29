import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import withLang from '../../redux/providers/withLang';
import config from '../../../config';

function Layout(props) {
  const { children } = props;

  useEffect(() => {
    let lang = props.match.params.lang;
    if (lang !== undefined && config.availableLangs.includes(lang)) {
      props.setLang(lang);
    } else {
      props.setLang(config.defaultLang);
    }
  }, [props.match.params.lang]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default withLang(Layout);
