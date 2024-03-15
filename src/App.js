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
import FacialProcedures from "./Pages/FacialProcedures/FacialProcedures";
import Products from "./Pages/Products/Products";
import BottoxAndFillers from "./Pages/BottoxAndFillers/BottoxAndFillers";
import EyelidLift from "./Pages/EyelidLift/EyelidLift";
import Breast from "./Pages/Breast/Breast";
import BreastReduction from "./Pages/BreastReduction/BreastReduction";
import BreastAugmentation from "./Pages/BreastAugmentation/BreastAugmentation";
import Body from "./Pages/Body/Body";

function App() {
  return (
      <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/about_doctor' element={<About />} />
              <Route path='/consultations' element={<Consultations />} />
              <Route path='/procedures' element={<Procedures />} />

              <Route path='/breast' element={<Breast />} />
              <Route path='/botox_and_fillers' element={<BottoxAndFillers />} />
              <Route path='/face' element={<FacialProcedures />} />
              {/*<Route path='/body' element={<Body/>} />*/}

              <Route path='/contact_doctor' element={<ContactDoctor />} />
              <Route path='/faqs' element={<FAQS />} />
              <Route path='/surgery_center' element={<SurgeryCenter />} />
              <Route path='/testimonials' element={<Testimonials />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/links' element={<Links />} />
              <Route path='/aaaasf' element={<AAAASF />} />

              <Route path='/products' element={<Products />} />

              <Route path='/breast/augmentation' element={<BreastAugmentation />} />
              <Route path='/breast/reduction' element={<BreastReduction />} />

              <Route path='/face/eyelid_lift' element={<EyelidLift />} />

              <Route path='/face/lip_augmentation' element={<Body />} />


          </Routes>
      </Router>
  );
}

export default App;
