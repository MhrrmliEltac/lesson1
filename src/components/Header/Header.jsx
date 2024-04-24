import './Header.css'

const Header = () => {
  return (
    <header>
        <div className="nav">
          <div className="logo">
            <img src="" alt="" />
          </div>
          <nav>
            <ul>
              <li>Portfolio</li>
              <li>Blogs</li>
              <li>About</li>
            </ul>
          </nav>
          <div className="auth">
            <button>Login</button>
          </div>
        </div>
      </header>
  )
}

export default Header