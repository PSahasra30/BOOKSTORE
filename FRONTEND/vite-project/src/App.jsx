import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import TermsOfUse from './components/TermsOfUse';
import ForgotYourPassword from './components/ForgotYourPassword';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
// import Career from './components/Career';
import BlogPage from './components/BlogPage';
// import Books from './components/Books';
// import LudoBoard from './components/LudoBoard';
import Books from './components/Books';
import BooksA from './components/BooksA';
import EditBook from './components/EditBook';
import LibraryCard from './components/LibraryCard';
import BooksPage from './components/BooksPage';
function App() {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
  };
  return (
    // <div className='container'>
    // <Navbar/>
    // <TermsOfUse/>
    // <LoginPage/>
    // <SignUpPage/>
    // <ForgotYourPassword/>
    // <Footer/>
    // <ContactUs/>
    // <BlogPage/>
    // {/* <LudoBoard/> */}
    // {/* <Career/> */}
    // </div>
    <Router>
      <Routes>
      {/* <Route path="/" element={<LibraryCard user={user} />} /> */}
      <Route path="/" element={<Navbar />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/booksu" element={<Books />} />
      <Route path="/edit/:id" element={<EditBook />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/fup" element={<ForgotYourPassword />} />
      <Route path="/signup" element={<SignUpPage />} />

      </Routes>
    </Router>
  );
}

export default App;
