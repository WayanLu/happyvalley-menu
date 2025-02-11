import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import MenuList from "../features/menu/MenuList";

function CreateMenu() {
  return (
    <Tabs
      defaultActiveKey="appetizers"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="appetizers" title="Appetizers">
        Tab content for Appetizers
      </Tab>
      <Tab eventKey="soup" title="Soup">
        <MenuList />
      </Tab>
      <Tab eventKey="fowl" title="Fowl">
        Tab content for fowl
      </Tab>
      <Tab eventKey="beeforpork" title="Beef/Pork">
        Tab content for Beef/pork
      </Tab>
    </Tabs>
  );
}

export default CreateMenu;
