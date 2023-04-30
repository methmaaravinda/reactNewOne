import ItemList from "./ItemList"
const Form = ({Items, handleDelete, handleOnchange}) => {
  return (
    <main>{Items.length ? (
      <ItemList
          Items = {Items}
          handleDelete = {handleDelete}
          handleOnchange = {handleOnchange}
       />
      
      ) : (<h1>ITEMS ARE DELETED</h1>) }
    </main>
  )
}

export default Form
