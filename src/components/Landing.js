import React from 'react';

import Header from './Header';
import IntroBubble from './IntroBubble';
import DebateBlurb from './DebateBlurb';
import Stances from './Stances';
import NewsHome from './NewsHome';
import Footer from './Footer';

const Landing = () => (
        <div className="Landing">
          <Header />
          <IntroBubble />
          <DebateBlurb />
          <Stances />
          <NewsHome />
          <Footer />
        </div>
    );

export default Landing