import './App.css';
import Header from "./Components/Header/Header";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Consultations from "./Pages/Consultations/Consultations";
import Procedures from "./Pages/Procedures/Procedures";
import ContactDoctor from "./Pages/ContactDoctor/ContactDoctor";
import FAQS from "./Pages/FAQS/FAQS";
import AAAASF from "./Pages/AAAASF/AAAASF";
import SurgeryCenter from "./Pages/SurgeryCenter/SurgeryCenter";
import Testimonials from "./Pages/Testimonials/Testimonials";
import Blog from "./Pages/Blog/Blog";
import Links from "./Pages/Links/Links";

function App() {
  return (
      <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/about_doctor' element={<About />} />
              <Route path='/consultations' element={<Consultations />} />
              <Route path='/procedures' element={<Procedures />} />

              {/*<Route path='/breast' element={<Home />} />*/}
              {/*<Route path='/liposuction' element={<Home />} />*/}
              {/*<Route path='/bottox_and_fillers' element={<Home />} />*/}
              {/*<Route path='/face' element={<Home />} />*/}
              {/*<Route path='/tummy_tuck' element={<Home />} />*/}
              {/*<Route path='/body' element={<Home />} />*/}
              {/*<Route path='/mommy_makeover' element={<Home />} />*/}

              <Route path='/contact_doctor' element={<ContactDoctor />} />
              <Route path='/faqs' element={<FAQS />} />
              {/*<Route path='/photo_gallery' element={<Home />} />*/}
              <Route path='/surgery_center' element={<SurgeryCenter />} />
              <Route path='/testimonials' element={<Testimonials />} />
              {/*<Route path='/financing' element={<Home />} />*/}
              {/*<Route path='/patient_forms' element={<Home />} />*/}
              {/*<Route path='/directions' element={<Home />} />*/}
              {/*<Route path='/whats_new' element={<Home />} />*/}
              <Route path='/blog' element={<Blog />} />
              <Route path='/links' element={<Links />} />
              {/*<Route path='/site_map' element={<Home />} />*/}
              <Route path='/aaaasf' element={<AAAASF />} />
          </Routes>
      </Router>
  );
}

export default App;
