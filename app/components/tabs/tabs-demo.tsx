import { useState } from "react";
import type { TabItem } from "./tabs";
import Tabs from "./tabs";
import "./tabs-demo.css";
import { TABS } from "~/models/components";

export const meta = () => TABS.meta;
export const handle = TABS.routeHandle;
export default function TabsDemo() {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  return (
    <div className="tabs-demo">
      <Tabs
        items={tabs}
        selectedId={selectedTabId}
        onSelected={(id) => {
          setSelectedTabId(id);
        }}
      ></Tabs>
      <div className="content">
        {selectedTabId === "vancouver" && (
          <p>
            Vancouver is a major city in Western Canada, located in the Lower
            Mainland region of British Columbia. As the most populous city in
            the province, the 2021 Canadian census recorded 662,248 people in
            the city, up from 631,486 in 2016. The Metro Vancouver area had a
            population of 2.6 million in 2021, making it the third-largest
            metropolitan area in Canada.
          </p>
        )}
        {selectedTabId === "tokyo" && (
          <p>
            Tokyo, officially the Tokyo Metropolis, is the capital and most
            populous city in Japan. With a population of over 14 million in the
            city proper in 2023, it is one of the most populous urban areas in
            the world. The Greater Tokyo Area, which includes Tokyo and parts of
            six neighboring prefectures, is the most populous metropolitan area
            in the world, with 41 million residents as of 2024.
          </p>
        )}
        {selectedTabId === "hk" && (
          <p>
            Hong Kong is a special administrative region of China. Situated on
            China's southern coast just south of Shenzhen, it consists of Hong
            Kong Island, Kowloon, and the New Territories. With 7.5 million
            residents in a 1,114-square-kilometre territory, Hong Kong is the
            fourth most densely populated region in the world.
          </p>
        )}
      </div>
    </div>
  );
}

const tabs: TabItem[] = [
  {
    id: "vancouver",
    displayName: "Vancouver",
  },
  {
    id: "tokyo",
    displayName: "Tokyo",
  },
  {
    id: "hk",
    displayName: "Hong Kong",
  },
];
