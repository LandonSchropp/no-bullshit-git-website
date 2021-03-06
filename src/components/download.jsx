import React from "react";

import { useSectionData } from "../hooks/landing-page-data";

export function Download() {
  let data = useSectionData("Download");

  return <section className="download" id="download">
    <h2>{ data.header }</h2>
    <p className="subhead">{ data.subhead }</p>

    <div className="call-to-action">
      <button type="button">Download Free Sample</button>
    </div>
  </section>;
}
