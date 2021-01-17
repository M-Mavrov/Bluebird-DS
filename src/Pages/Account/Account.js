import React, { useState } from "react";
import "./Account.css";
import UserSettings from "../../Components/UserSettings/UserSettings";
import { Link } from "react-router-dom";
import SupplierSettings from "../../Components/SupplierSettings/SupplierSettings";
import Subscription from "../../Components/Subscription/Subscription";
import VirtualAssistant from "../../Components/VirtualAssistant/VirtualAssistant";
import Vero from "../../Components/VeroSettings/Vero";
import Listing from "../../Components/Listing/Listing";

function Account() {
  const [active, setActive] = useState(0);

  const TabsButtons = () => {
    const res = [
      "User settings",
      "Supplier settings",
      "Ebay settings",
      "Vero settings",
      "Subscription",
      "Virtual Assistant",
    ];
    return res.map((data, k) => (
      <button
        key={k}
        className={`tabs-button ${active === k ? "active" : "passive"}`}
        onClick={() => {
          setActive(k);
        }}
      >
        {data}
      </button>
    ));
  };
  return (
    <div className="tabs-container">
      <h1>SETTINGS</h1>
      <h2>
        Check out the <Link to="/guide/settings">Guide</Link> page for more
        information on how to properly adjust all settings.
      </h2>

      <div>
        <TabsButtons />
      </div>
      <div className="tabs-info">
        <div className={active === 0 ? "" : "inactive"}>
          <UserSettings />
        </div>
        <div className={active === 1 ? "" : "inactive"}>
          <SupplierSettings />
        </div>
        <div className={active === 2 ? "" : "inactive"}>
          <Listing />
        </div>
        <div className={active === 3 ? "" : "inactive"}>
          <Vero />
        </div>
        <div className={active === 4 ? "" : "inactive"}>
          <Subscription />
        </div>
        <div className={active === 5 ? "" : "inactive"}>
          <VirtualAssistant />
        </div>
      </div>
    </div>
  );
}

export default Account;
