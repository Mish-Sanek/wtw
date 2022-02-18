import React from "react";
import TabDetails from "./TabDetails";
import OverviewTab from "./TabOverview";
import TabRewiews from "./TabReviews";

const Tabs = (props) => {
  const activeTab = props.activeTab;
  return (
    <>
      {activeTab === 'Overview' && <OverviewTab tabsInfo={props.tabsInfo} />}
      {activeTab === 'Details' && <TabDetails tabsInfo={props.tabsInfo} />}
      {activeTab === 'Reviews' && <TabRewiews />}
    </>
  )
}

export default Tabs;
