import './App.css';

export default function App() {
  return (
  <>  
  <nav class="nav">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled">Disabled</a>
</nav>
<div className="App">
      <h1>Pircing</h1>
      <h2>
        Quickly build an effective pricing table for your potential customers
        with this layout. It's built with default MUI components with little
        customization.
      </h2>
      <div className="Tarjetas">
        <div className="#1">
          <h1>Free</h1>
          <p>
            $0 /mo 10 users included 2 GB of storage Help center access Email
            support
          </p>
          <button>Sig in up for free</button>
        </div>
      </div>
      <div className="Tarjetas">
        <div className="#2">
          <h1>Pro</h1>
          <p>
            $15 /mo 20 users included 10 GB of storage Help center access
            Priority email support
          </p>
          <button>Get started</button>
        </div>
      </div>
      <div className="Tarjetas">
        <div className="#3">
          <h1>Enterprise</h1>
          <p>
            $30 /mo 50 users included 30 GB of storage Help center access Phone
            & email support
          </p>
          <button>Contact Us</button>
        </div>
      </div>
      <footer>
        <p>
          Copyrigth &copy;<span>Company Name</span>
        </p>
      </footer>
    </div>
    </>
  );
}