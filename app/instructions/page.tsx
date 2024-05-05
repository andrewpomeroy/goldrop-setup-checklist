// src/app/cache-on-demand/page.tsx

"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [isComplete, setIsComplete] = useState(false);

  const cacheContent = async () => {
    const res = await window.serwist.messageSW({ action: "cache-on-demand" });
    setIsComplete(res);
  };

  return (
    <div>
      <>
        <article
          id="b5928ade-5019-4792-85ac-bcbad3b523b7"
          className="page sans"
        >
          <header>
            <h1 className="page-title">
              Setup and Operating Goldrop™ Concentrator
            </h1>
            <p className="page-description"></p>
          </header>
          <div className="page-body">
            <h1 id="05347c09-565d-4de8-a505-f8b3f31c582b" className="">
              Set up Goldrop
            </h1>
            <ul
              id="225057c0-2a5e-4058-bde4-fb27ec57fc2e"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Locate a flat area convenient for processing
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="6f939cef-3d69-46ac-8935-0475c674971f"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Set 2-3 55 Gallon Drums 12&quot; apart (NO OIL RESIDUE!)
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="08f32c22-7c11-4ee9-9dfb-ee4f8c705ae0"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Fill close to the top with clear water
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="23311030-89b6-407f-b7a2-965fdb28a231"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  With yellow thumbscrew bracket, secure the Goldrop column to
                  the drum
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="e5b254ca-22cb-4055-b574-97ad8a63851a"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Ensure feed funnel and flow gauge are accessible.
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="44b15987-2e62-4294-8ffa-a3b34e7e8708"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Submerge and fill siphon tube, link drums with active siphon
                  hose
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="e3542fa8-51d5-40ff-8adf-9e19414fde0d"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Fix bilge pump to the white hose with pipe clamp
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="2b96a118-59b4-4768-8f2b-3778ed3595b7"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Position Solar Panel near Goldrop, away from traffic
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="de8dd0d8-d33b-4119-94c0-b03a39168637"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Face panel towards sun and connect cables, red to red, black
                  to black.
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="e3bcb0ac-ce11-4af3-ae2f-e08714018a2f"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Align solar panel for sunlight
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="05dd3c6f-e308-4079-9f4e-3820dc3316ad"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Place battery by barrels, attach cables, red to positive,
                  black to negative.
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="17f19303-7a8f-4db6-b4d1-bc9da7df21a7"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Connect Bilge Pump to the battery
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="2f1ce304-6e0a-4bb0-aeef-8e71fdbdcdcc"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Connect magnet sluice to tailings pipe and tailings outlet
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="b7d660ef-deba-4787-bf11-8ce8e645ed7a"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Set sluice at 10º angle to start, find your preferred angle
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="b122800c-e131-4b6a-ba00-50b5238b3efa"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Secure sluice to sluice stand, set tilt angle at 0º
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="da352f1c-a55c-4502-bfc5-1ec5ddbefb52"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Cover floor of sluice with magnetite, insert blue Miner&#x27;s
                  Moss, water flow baffle
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="e516fac4-a1f5-46a5-ae47-2bc4488d8328"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Insert blue Miner&#x27;s Moss
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <h1 id="48a38452-ac9a-4c69-b96c-5ef4b7f6d2aa" className="">
              Operating instructions
            </h1>
            <ul
              id="3b3186be-a148-471f-b538-d988ee7a7445"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Ensure all connections are secure and the battery is fully
                  charged.
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="f2396edd-bf2b-4607-9860-3ea43c278405"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Fully open all the water flow valves (3), close Jar gate valve
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="b677d700-69d2-45b0-972c-ff78770a22a6"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Connect the recirculating pump terminals to the corresponding
                  battery terminals to start water flow.
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="f03d045e-1e92-4838-9858-ff53f11ebaa9"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Seal any leaks.
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="dbbd4f4e-1fb0-4873-af34-5abcc366dba3"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Adjust the drop water flow down to 0.5 liters per minute (LPM)
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="ec18878d-32eb-475a-9fd1-440ad8e306c9"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Classify concentrates through a 5/64” (2mm) mesh screen
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="f87eccda-63da-4d78-b794-7b515f45a97f"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Classify concentrates through a 1/8” (3mm) mesh screen
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="ab9d11dd-19d4-4404-a3a0-c2af11ebd8fd"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Process larger 1/8&quot; concentrates first
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="318daca7-c71f-483d-84c6-ad71510a36d6"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Process smaller 1/16&quot; concentrates second combined with
                  tailings from 1/8&quot; run
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="b5a97bdf-dfe8-4fa5-8d11-43470a71e2bc"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Adjust the Drop Water Valve (3) as needed (0.5 GPM for 3mm
                  cons, 0.25 GPM for 2mm cons) to optimize gold recovery. (the
                  finer the concentrate particles, the lower the water flow)
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <p id="f27d6a49-47af-487c-beb2-0f4ad88d2022" className="">
              <mark className="highlight-red_background">!</mark>
              <mark className="highlight-red_background">
                <strong>WARNING</strong>
              </mark>
              <mark className="highlight-red_background">!</mark>
            </p>
            <p id="3e51a436-9792-4f04-b9ba-911a3e186605" className="">
              <mark className="highlight-red">
                ANY MATERIAL LARGER THAN 3MM ENTERING THE FEED FUNNEL CAN CLOG
                THE SYSTEM, LEADING TO TIME-CONSUMING REPAIRS.
              </mark>
            </p>
            <ul
              id="b42c6281-43a3-4f26-8312-9838c45a6056"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Add wet concentrates into the feed funnel on top of the
                  concentrate baffle plate. Allow the funnel flow water to flow
                  concentrates into the concentrate drop tube.
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="a9221b83-405c-48c9-b4a6-e31754072bff"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  When concentrates are exhausted, the Miners Moss appears full,
                  the sluice is clogged with concentrates, or the tailings
                  bucket is full, shut down the Goldrop System, empty the
                  tailings bucket, and clean the sluice.
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="45aadc42-8fa3-4ee7-8f4a-9e5c1933cfb9"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Recover the gold from the jar, the material in the trap, and
                  the gold in the magnet sluice.
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <h1 id="8259fa0c-3ee5-4e18-a76b-180b925a5ccf" className="">
              Gold recovery &amp; cleanup
            </h1>
            <ul
              id="0e860f80-fc4c-460a-a5d7-67b6647afb2b"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Increase drop water flow to move all material up into the
                  trap.
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="dc6bc781-bdd1-4a84-8d51-a1e01b138591"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Close gate valve.
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="0aa9d0e7-6899-458a-af9e-649358696bc0"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Remove jar and empty into a clean bucket.
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="ea9d1e28-bd0f-46d1-9689-bb69d641b3f3"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Open all water valves, open gate valve, drain column into the
                  same bucket.
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="23a645f3-5b74-4e38-b90f-962f1d4cd526"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Drain column until water runs clear, then close all valves.
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="8aabbabc-258a-41f5-b3bb-1d728c2a97c4"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  With the Gold Claw Pan, pan the Jar and Drop Tube&#x27;s
                  contents to separate gold.
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <h2 id="62d53d78-17e6-4d41-8a75-612cd8c1f2b9" className="">
              Video example:
            </h2>
            <figure id="a6bb3135-058f-4958-9610-484cc31d0734">
              <a href="https://www.youtube.com/embed/5hb4ShJM-kw?si=y1J6w2M9mktW8VXO">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/5hb4ShJM-kw?si=y1J6w2M9mktW8VXO"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                Link to video
              </a>
            </figure>
            <h1 id="86b69dcc-eeda-452d-8774-d5ac4411ed5b" className="">
              Clean magnet sluice
            </h1>
            <ul
              id="f4e0baf3-035a-473b-841d-9cab216976f4"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Shut down all water flow, remove blue Miners Moss, rinse well
                  in shallow pan.
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="abf7ebc3-ea58-4c57-bcd7-c8cda9485928"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Scrape magnetite from sluice with plastic scraper into a
                  shallow pan.
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="a2cd682f-fe45-4a01-baf4-0c38cb5937ab"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  In the pan, add water creating a water:magnetite ratio of 2:1.
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="d1ddd577-7805-4543-b4cb-cb19992e2e89"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Use portable drill with Spin It Off to remove magnetite.
                </span>
                <div className="indented"></div>
              </li>
            </ul>
            <ul
              id="960ba787-75ce-4626-bebe-a77e718da05f"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Transfer recovered magnetite to a second pan with water.
                  Repeat three (3) times.
                  <br />
                  <br />
                  <strong>Watch video below for guidance:</strong>
                </span>
                <div className="indented">
                  <figure id="2655d355-6161-49e1-86e9-4b7875e894db">
                    <a href="https://www.youtube.com/embed/5hb4ShJM-kw?si=y1J6w2M9mktW8VXO">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/5hb4ShJM-kw?si=y1J6w2M9mktW8VXO"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                      Link to video
                    </a>
                  </figure>
                </div>
              </li>
            </ul>
            <ul
              id="5f288180-ff01-416b-8377-171a02f6b1c8"
              className="to-do-list"
            >
              <li>
                <div className="checkbox checkbox-off"></div>{" "}
                <span className="to-do-children-unchecked">
                  Separate gold from remaining minerals using the Gold Claw pan.
                  <br />
                  <br />
                  <strong>Watch video below for guidance:</strong>
                </span>
                <div className="indented">
                  <figure id="e401905f-bbda-4bfb-9c30-a67c055adee7">
                    <a href="https://www.youtube.com/embed/5hb4ShJM-kw?si=y1J6w2M9mktW8VXO">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/5hb4ShJM-kw?si=y1J6w2M9mktW8VXO"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                      Link to video
                    </a>
                  </figure>
                </div>
              </li>
            </ul>
            <p id="956c4b7e-fdc8-4607-aa12-9e121837e5bf" className=""></p>
          </div>
        </article>
        {/* <span className="sans" style="font-size:14px;padding-top:2em"></span> */}
      </>
    </div>
  );
}
