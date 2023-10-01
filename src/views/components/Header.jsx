import { Link } from 'react-router-dom'

export default function TheHeader() {
  return (
    <header className="the-header">
      <Link to="/">
        <img src="../../src/assets/img/logo.svg" alt="logo" />
      </Link>
    </header>
  )
}
