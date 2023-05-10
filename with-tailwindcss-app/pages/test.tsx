import { useState } from "react";

type TabProps = {
  tabName: string;
  isActive: boolean;
  onClick: () => void;
};

const Tab = ({ tabName, isActive, onClick }: TabProps) => {
  const bgClass = isActive ? "bg-blue-500" : "bg-gray-500";
  const textClass = isActive ? "text-white" : "text-gray-200";
  return (
    <div
      className={`${bgClass} ${textClass} py-2 px-4 cursor-pointer`}
      onClick={onClick}
    >
      {tabName}
    </div>
  );
};

type TabsProps = {
  tabItems: string[];
};

const Tabs = ({ tabItems }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(tabItems[0]);

  return (
    <div>
      <div className="flex">
        {tabItems.map((item) => (
          <Tab
            key={item}
            tabName={item}
            isActive={item === activeTab}
            onClick={() => setActiveTab(item)}
          />
        ))}
      </div>
      <div className="bg-blue-400 p-4">
        {activeTab === "Tab 1" && <div>dsds</div>}
        {activeTab === "Tab 2" && <div>Tab 2 Content</div>}
        {activeTab === "Tab 3" && <div>Tab 3 Content</div>}
        {activeTab === "Tab 4" && <div>Tab 4 Content</div>}
        {activeTab === "Tab 5" && <div>Tab 5 Content</div>}
        {activeTab === "Tab 6" && <div>Tab 6 Content</div>}
      </div>
    </div>
  );
};

const Index = () => {
  const tabItems = ["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5", "Tab 6"];
  return (
    <div>
      <Tabs tabItems={tabItems} />
    </div>
  );
};

export default Index;
