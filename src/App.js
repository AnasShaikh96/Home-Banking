import "./App.css";
import Account from "./components/Account/Account";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import NewTransfer from "./components/NewTransfer/NewTransfer";
import OtherOps from "./components/OtherOps/OtherOps";
import Transaction from "./components/Transaction/Transaction";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Account />
      <Transaction />
      <NewTransfer />
      <OtherOps />
    </>
  );
}

export default App;
