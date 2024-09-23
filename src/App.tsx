import Navbar from "./components/Navbar"


const App = () => {

  return (
    <div className="w-full h-full">
     <Navbar />
     <div className="w-full h-full">
      <img className="bg-cover w-full h-full" src="https://images.pexels.com/photos/20143999/pexels-photo-20143999/free-photo-of-glass-multi-colored-ornate-lamps.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="home" />
     </div>
    </div>
  )
}

export default App
