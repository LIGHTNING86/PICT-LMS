import { useState } from "react"
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom"
import { BiUser } from 'react-icons/bi'
import { AiOutlineUnlock } from 'react-icons/ai'

export default function Register() {

  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const registerUser = async (e) => {
    e.preventDefault()
    const {name, email, password} = data
    try {
      const {data} = await axios.post('/register', {
        name, 
        email, 
        password
      });

      if(data.error) {
        toast.error(data.error)
      } else {
        setData({});
        toast.success('User Registered Successfully! Welcome!')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <div>
      <div className="w-screen h-screen grid grid-rows-2 md:grid-cols-10">
        <div className="w-full h-full md:h-screen centered col-span-6">
          <div className="bg-slate-100 rounded-lg p-8 m-10 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-50 relative">
            
              <div className="grid md:grid-cols-10 centered">
                <div className="col-span-3 p-4 w-auto h-auto">
                  <img src="../src/assets/unilogo2.png"/>
                </div>
                
                <div className="col-span-7 p-6 centered">
                  <span className="font-oswald font-semibold text-4xl text-center text-regal-blue">PICT LEAVE MANAGEMENT SYSTEM (PLMS)</span>
                </div>
              </div>
              <div>
                <span className="text-3xl centered font-oswald font-bold text-white">INSTRUCTIONS</span>
                <hr class="h-px my-8 bg-white border-0 dark:bg-white"></hr>
                <ol className="font-oswald list-decimal text-justify text-lg p-3">
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti inventore optio quia aspernatur placeat molestias sapiente expedita necessitatibus quisquam eos ad voluptas harum consectetur, ipsam neque sint, sit quod. Ullam.</li>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor excepturi laborum provident, aliquid nihil et ab sit iusto cum fugit fuga recusandae repellat reprehenderit voluptates repudiandae atque doloremque, labore nostrum.</li>
                  <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In sapiente, perspiciatis ullam aperiam assumenda delectus fugiat dignissimos at error quas porro eos magni iusto obcaecati animi rerum iste corporis nesciunt.</li>
                </ol>
              </div>
            </div>
        </div>
        <div className="w-full h-full md:h-screen centered col-span-4">
         <div className=" bg-slate-100 font-oswald rounded-lg p-8 shadow-lg backdrop-filter backdrop-blur-md bg-opacity-40 relative">
           <form onSubmit={registerUser}>
           <h1 className="text-4xl font-bold text-center">Register</h1>
           <br />
             <div className="relative my-4">
               <input type="text" placeholder="Enter your name" className="placeholder-gray-200 font-semibold block w-72 py-2.3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
               <BiUser className="absolute top-0 right-4" />
             </div>
             <br />
             <div className="relative my-4">
               <input type="email" placeholder="Enter your Email" className="placeholder-gray-200 font-semibold block w-72 py-2.3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
               <AiOutlineUnlock className="absolute top-0 right-4" />
             </div>
             <br />
             
             <div className="relative my-4">
        
               <input type="password" placeholder="Set your Password" className="placeholder-gray-200 font-semibold text-lg block w-72 py-2.3 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
               <AiOutlineUnlock className="absolute top-0 right-4" />
             </div>
             <br />
             <button type='submit' className="w-full mb-4 text-[22px] rounded bg-regal-blue py-2 hover:bg-blue-700 transition-colors duration-300">Register</button>

              {/* <div className="text-center">
                <span>New here? <Link to={'/login'} className="text-md text-regal-blue hover:text-blue-700 transform duration-300">Create an Account</Link></span>
              </div> */}

            </form>
           </div>
         </div>
      </div>
    </div>
  )
}