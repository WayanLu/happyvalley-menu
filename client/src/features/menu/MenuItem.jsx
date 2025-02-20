function CreateItem({ index, name, price }) {
  return (
    <tr className="menu-item">
      <td>{index}</td>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default CreateItem;
