import './App.css';

export default function App() {
  return (
  <>  
  <nav class="nav">
  <a class="nav-link active" aria-current="page" href="#">Company Name</a>
  <a class="nav-link" href="#">Features</a>
  <a class="nav-link" href="#">Enterprise</a>
  <a class="nav-link disabled">Support</a>
  <button className="boton">Login</button>
</nav>
<div class="d-flex">
  <div class="card">
    <h1>Free</h1>
    <div class="card-body">
      <h5 class="card-title">$0/mo</h5>
      <p class="card-text">    10 users included
    2 GB of storage
    Help center access
    Email support</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
   <h1>Pro</h1>
   <h2>Most popular</h2>
    <div class="card-body">
      <h5 class="card-title">$15/mo</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <h1>Enterprise</h1>
    <div class="card-body">
      <h5 class="card-title">$30/mo</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

</>    
);
}

    
 