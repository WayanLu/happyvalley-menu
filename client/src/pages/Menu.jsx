import React, { useMemo } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
    <Container>
      <Row>
        {/* Categories*/}
        <Col xs={4} md={3} lg={2}>
          {Object.entries(menuData.menu).map(([category, items]) => (
            <Row key={category}>{category}</Row>
          ))}
        </Col>
        {/* Menu Items*/}
        <Col xs={8} md={9} lg={10}>
          {Object.entries(menuData.menu).map(([category, items]) => (
            <div key={category} className="{category}">
              <h1>{category}</h1>
              <div className={`${category}-items`}>
                {items.map((item) => (
                  <Row key={item.id}>{item.name}</Row>
                ))}
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
{
  /* <Tabs */
}
{
  /*   defaultActiveKey="Appetizers" */
}
{
  /*   id="fill-tab-example" */
}
{
  /*   className="mb-3" */
}
{
  /*   fill */
}
{
  /* > */
}
{
  /*   {/* Iterate through categories */
}
{
  /*   {Object.entries(menuData.menu).map(([category, items]) => ( */
}
{
  /*     <Tab key={category} eventKey={category} title={category}> */
}
{
  /*       <div className="items-list"> */
}
{
  /*         <MenuList categoryList={items} /> */
}
{
  /*       </div> */
}
{
  /*     </Tab> */
}
{
  /*   ))} */
}
{
  /* </Tabs> */
}

export default CreateMenu;
