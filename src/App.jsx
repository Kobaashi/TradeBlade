import './App.css'
import NavBar from "../src/components/NavBar";
import Header from "../src/components/Header";
import Numbers from "../src/components/Numbers";
import PastDeals from "../src/components/PastDeals";
import About from "../src/components/About";
import Tarrifs from "../src/components/Tarrifs";
import FAQ from "../src/components/FAQ";
import Footer from "../src/components/Footer";

function App() {

  return (
   <div className="">
      <NavBar></NavBar>
      <Header></Header>
      <Numbers></Numbers>
      <PastDeals></PastDeals>
      <About></About>
      <Tarrifs></Tarrifs>
      <FAQ></FAQ>
      <Footer></Footer>
   </div>
  )
}

export default App
