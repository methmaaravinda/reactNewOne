const LineItems = (item , handleOnchange, handleDelete) => {
  return (<>
    <li className="item" key={item.id}>
        <input type='checkbox' checked={item.checked} onChange={()=>handleOnchange(item.id)}></input>
        <label>{item.name}</label>
        <button onClick={()=>handleDelete(item.id)}>Delete</button>
    </li>
    </>)
}

export default LineItems
