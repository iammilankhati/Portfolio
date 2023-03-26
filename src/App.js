import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetails from './pages/BlogDetails';

function App() {
	return (
		<main className='main'>
			<Router basename='/'>
				<Landing />
				<Navbar />

				<Routes>
					<Route
						exact
						path='/'
						element={
							<>
								<About />
								<Projects />
								<Blog />
								<Contact />
							</>
						}
					/>
					{/* <Route path='/blog/:id' element={<BlogDetails />} /> */}
				</Routes>
				<Footer />
			</Router>
		</main>
	);
}

export default App;
