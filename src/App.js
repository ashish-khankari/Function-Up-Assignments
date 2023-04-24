import './App.css';
import Usercard from './Components/Usercard';

function App() {

  function showName(name){
    alert(`${name}`)
  }

  return (
    <div className="App">
    <Usercard 
    src = "https://cdn2.vectorstock.com/i/1000x1000/13/76/icon-of-user-avatar-for-web-site-or-mobile-vector-4031376.jpg"
    designation = "UI/UX Designer"
    name = "Aman Gupta"
    jobDescription = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure voluptatem laborum ut."
    buttonText = "See More"
    displayName = {()=>showName("Aman Gupta")}
    
   />

<Usercard 
    src = "https://static.vecteezy.com/system/resources/previews/004/773/704/original/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg"
    designation = "Front-End Developer"
    name = "Ashneer Grover"
    jobDescription = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure voluptatem laborum ut."
    buttonText = "See More"
    displayName = {()=>showName("Ashneer Grover")}
   />

<Usercard 
    src = "https://www.w3schools.com/w3images/avatar2.png"
    designation = "Back End Developer"
    name = "Sanjay Kumar"
    jobDescription = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure voluptatem laborum ut."
    buttonText = "See More"
    displayName = {()=>showName("Sanjay Kumar")}
   />
    </div>
  );
}

export default App;