import { useState } from "react"
import Button from "../components/Button"

const Home = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Home</h1>
      <Button title={'Add Item'} handleClick={setCount} count={count}/>
      <Button title={'Subtract Item'} handleClick={setCount} count={count}/>
      <Button title={'Empty Cart'} handleClick={setCount} count={count}/>
      <h1>Current Item count: {count}</h1>
    </>
  )
}

export default Home