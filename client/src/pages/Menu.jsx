import React, { useMemo } from "react";
import { Tab, Tabs } from "react-bootstrap";
import MenuList from "../features/menu/MenuList";
import menuData from "../data.json";

function CreateMenu() {
  // Calculate all items with their global indices
  /* const indexedMenuItems = useMemo(() => {
    let globalIndex = 0;
    return Object.entries(menuData.menu).reduce((acc, [category, items]) => {
      acc[category] = items.map((item) => ({
        ...item,
        id: ++globalIndex,
      }));
      return acc;
    }, {});
  }, []); */

  return (
    <Tabs
      defaultActiveKey="Appetizers"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      {/* Iterate through categories */}
      {Object.entries(menuData.menu).map(([category, items]) => (
        <Tab key={category} eventKey={category} title={category}>
          <div className="items-list">
            <MenuList categoryList={items} />
          </div>
        </Tab>
      ))}
    </Tabs>
  );
}

export default CreateMenu;
