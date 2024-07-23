import { useParams } from "react-router-dom"

const ItemDetails = () => {
  const {id} = useParams()

  return (
    <div>ItemDetails</div>
  )
}

export default ItemDetails