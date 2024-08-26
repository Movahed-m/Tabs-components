import { useState } from "react";
import Content from "./Content";

function NavAndMain() {
  const [activeTab, setActiveTab] = useState(1);
  const data = [
    {
      id: 1,
      tabTitle: "Tab1",
    },
    {
      id: 2,
      tabTitle: "Tab2",
    },
    {
      id: 3,
      tabTitle: "Tab3",
    },
    {
      id: 4,
      tabTitle: "Tab4",
    },
  ];

  const changeHandler = (event) => {
    const tabId = Number(event.target.accessKey);
    setActiveTab((activeTab) => tabId);
    return tabId;
  };

  return (
    <>
      <nav>
        <div className="nav-container">
          <ul className="list-container">
            {data.map((item) => (
              <li key={item.id} onClick={changeHandler} accessKey={item.id}>
                {item.tabTitle}
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main>
        <div className="main-container">
          {activeTab === 1 ? <Content title={"Content1"} /> : null}
          {activeTab === 2 ? <Content title={"Content2"} /> : null}
          {activeTab === 3 ? <Content title={"Content3"} /> : null}
          {activeTab === 4 ? <Content title={"Content4"} /> : null}
        </div>
      </main>
    </>
  );
}

export default NavAndMain;
