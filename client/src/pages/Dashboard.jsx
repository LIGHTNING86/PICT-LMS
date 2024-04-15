import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Navbar1 from "../components/Navbar";

export default function Dashboard() {
    const {user} = useContext(UserContext)
  return (
    <div className="w-screen h-screen ">
      <div>
        <Navbar1 />
      </div>
      <div className=" h-[100vh] flex items-center justify-center bg-cover text-white text-3xl centered font-oswald font-bold">
        <div className="bg-slate-100 rounded-lg p-8 m-10 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-50">
          <h1 className="centered">Dashboard</h1>
          <br />
          {!!user && (<h2>Hi {user.name}!</h2>)}
          <div>

          <main className="content">
            <h1>Welcome to the Dashboard</h1>
            {/* Your dashboard content goes here */}
          </main>
          </div>
        </div>
      </div>
    </div>
  )
}
