import { useState } from "react";
import Content from "./Content";
import styles from "../styles/NavAndMain.module.css";

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
        <ul className={styles.list_container}>
          {data.map((item) => (
            <li key={item.id} onClick={changeHandler} accessKey={item.id} className={styles.list_item}>
              {item.tabTitle}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <div className={styles.main_container}>
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
