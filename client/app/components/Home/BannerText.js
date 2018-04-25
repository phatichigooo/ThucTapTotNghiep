import React from 'react';
import { Link } from 'react-router-dom';

const BannerText = () => (
  <div className="banner-text">
    <section className="cd-intro">
      <h2 className="cd-headline letters scale">
        <span>clothes that need to be</span>
        <span className="cd-words-wrapper">
          <b className="is-visible">Sewing</b>
          <b>mending</b>
          <b>applique</b>
          <b>alteration</b>
        </span>
      </h2>
    </section>
    <div className="agileits_w3layouts_call_mail">
      <ul>
        <li><i className="fa fa-phone" aria-hidden="true" />(+84) 123 456 78</li>
        <li><i className="fa fa-envelope-o" aria-hidden="true" /><a href="mailto:maria@example.com">info@example.com</a></li>
      </ul>
    </div>
    <div className="banner-icons-agileinfo">
      <ul className="agileits_social_list">
        <li><a href="#" className="w3_agile_facebook"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
        <li><a href="#" className="agile_twitter"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
        <li><a href="#" className="w3_agile_dribble"><i className="fa fa-amazon" aria-hidden="true" /></a></li>
      </ul>
    </div>
  </div>
);

export default BannerText;
