import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

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
        Tab content for soup
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
