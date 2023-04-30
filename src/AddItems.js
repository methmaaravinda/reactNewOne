const AddItems = () => {
  return (
    <form className='addForm'>
      
      <input
        autoFocus
        id='addItems'
        type='text'
        placeholder="Add Items"
        required
       />
       <button
            type="submit"
            aria-label="Add-Items"
        />
    </form>
  )
}

export default AddItems
