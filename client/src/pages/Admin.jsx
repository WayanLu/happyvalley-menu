import Stack from "react-bootstrap/Stack";
import { useState } from "react";
import menuData from "../data.json";

export default function CreateAdmin() {
  const [menuItems, setMenuItems] = useState(menuData);

  return (
    <Stack gap={3}>
      {Object.entries(menuItems.menu).map(([category, items]) => (
        <div key={category}>
          <div>
            {items.map((item) => (
              <Stack
                direction="horizontal"
                gap={3}
                key={item.id}
                className="d-flex"
              >
                <div className="p-2">{category}</div>
                <div className="p-2">{item.id}</div>
                <div className="p-2">{item.name}</div>
                <div className="p-2">{item.price}</div>
              </Stack>
            ))}
          </div>
        </div>
      ))}
    </Stack>

    /* <Tabs deafultActiveKey="Create" id="fill-tab-example" className="mb-3" fill>
      <Tab key="Create" eventKey="Create" title="Create"></Tab>
      <Tab key="Update" eventKey="Update" title="Update"></Tab>
      <Tab key="Delete" eventKey="Delete" title="Delete"></Tab>
    </Tabs> */
  );
}
