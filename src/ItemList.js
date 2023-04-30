import LineItems from "./LineItems"

const ItemList = ({Items, handleDelete, handleOnchange}) => {
  return (
    <ul>
    {
      Items.map((item)=>(
        <LineItems
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleOnchange={handleOnchange}
        />
      ))
    }
  </ul>
  )
}

export default ItemList
