import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <img src="../src/assets/unilogo2.png"/>
      <Link to='/'>Home</Link>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
    </nav>
  )
}
