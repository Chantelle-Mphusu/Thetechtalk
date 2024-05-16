import '../App.css'


const Home =() => {
  return (
   <>
      <main>
          <header>
              <a href="/" className="Logo">My Blog</a>
              <nav>
                  <a href="/login">Login</a>
                  <a href="/register">Register</a>
                  <a href="/aboutme">About Me</a>
              </nav>
          </header>
          
          <h2>Welcome</h2>
      </main>
   </>
  );
}

export default Home;
