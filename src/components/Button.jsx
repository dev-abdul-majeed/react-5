const Button = ({title, handleClick, count}) => {
  return (
    <button
      onClick={()=>{
        if(title == 'Add Item'){
          handleClick(count + 1)
        }
        else if(title == 'Subtract Item'){
          handleClick(count - 1);
        }
        else{
          handleClick(0)
        }
      }}
    >
      {title}
    </button>
  )
}

export default Button