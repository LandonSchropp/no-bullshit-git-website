import React from "react";

import _ from "lodash";

import { LearnItem } from "../components/learn-item";
import { useSectionData } from "../hooks/landing-page-data";

export function Why() {
  let data = useSectionData(/learn/i);

  let mainItems = _.slice(data.list, 0, 6);
  let secondaryItems = _.slice(data.list, 6);

  return <section className="why" id="why">
    <h2>{ data.header }</h2>
    <p className="subhead why__subhead">{ data.subhead }</p>

    <div className="why__why-items">
      {
        mainItems.map(item => <LearnItem key={ item } content={ item } />)
      }
    </div>

    <ul className="learn__list icon-list icon-list--check">
      {
        secondaryItems.map(item => {
          return <li key={ item } className="icon-list__item learn__list-item">{ item }</li>;
        })
      }
    </ul>
  </section>;
}
