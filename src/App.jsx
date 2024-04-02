import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import News from './components/News'
// import DashApp from './components/dash/DashApp'
import NoteState from "./context/noteState";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup';
import AuthState from './context/authState';
import Readblog from './components/read/Readblog';
//import Login from './components/login';

// import About from './components/dash/Dash-components/About'

// import About from './components/dash/Dash-components/About'
export default function App() {
	const pageSize = 15;
	const apiKey = import.meta.env.VITE_API_KEY;
	const [progress, setProgress] = useState(0)

	return (
		<>
			<div>
				<AuthState>
				<NoteState>
					<Router>
						<Navbar />
						<Routes>
							<Route path='/' element={<Signup />}></Route>
							{/* <Route path='/login' element={<Login/>}></Route> */}
							<Route path='/home' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} category='general' />}></Route>
							<Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} category='business' />}></Route>
							<Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} category='entertainment' />}></Route>
							<Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} category='health' />}></Route>
							<Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} category='science' />}></Route>
							<Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} category='sports' />}></Route>
							<Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} category='technology' />}></Route>
							<Route path='/addnew' element={<Home />}></Route>
							<Route path='/read' element={<Readblog/>}></Route>
							{/* <Route path='/dashboard' element={<DashApp/>}></Route> */}
							{/* <Route path='/About' element={<About/>}></Route> */}
						</Routes>
					</Router>
				</NoteState>
				</AuthState>
				
			</div>
		</>
	)
}

