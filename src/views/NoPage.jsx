import { Link } from 'react-router-dom'
import Button from './components/Button'
export default function NoPage() {
  return (
    <main className="no-page">
      <img src="../src/assets/img/404.gif" alt="" />

      <div className="no-page_text">
        <h1>Page not found</h1>
        <Link to="/">
          <Button onClick={() => null}>
            <p>Home</p>
          </Button>
        </Link>
      </div>
    </main>
  )
}
