import './About.css'
import Header from "../../Components/Header/Header";
import background_heading from "../../images/top.png";
import background_top from "../../images/QuickSiteImages/bodytop.jpg";
import background_repeat from "../../images/QuickSiteImages/bodyrepeat.jpg";
import background_bottom from "../../images/QuickSiteImages/footer.jpg";
import PurpleButton from "../../Components/PurpleButton/PurpleButton";
import OrangeButton from "../../Components/OrangeButton/OrangeButton";
import facebook from "../../images/facebook-icon.jpg";
import yelp from "../../images/yelp-icon.jpg";
import body_pic from "../../images/QuickSiteImages/body_pic1.jpg";
import body_pic2 from "../../images/dr_jervis_waiting_room_cosmetic_surgery.JPG";
import body_pic3 from "../../images/QuickSiteImages/body_pic3.jpg";
import logo1 from "../../images/QuickSiteImages/logo_american-society.jpg";
import logo2 from "../../images/QuickSiteImages/logo_csps.jpg";
import logo3 from "../../images/QuickSiteImages/logo_picture.jpg";
import logo5 from "../../images/project_beauty.JPG";
import logo6 from "../../images/QuickSiteImages/logo_international-society.jpg";
import logo7 from "../../images/QuickSiteImages/logo_ipras.jpg";
import Footer from "../../Components/Footer/Footer";

function About() {
    return (
        <div id='about_doctor'>
            <Header/>
            <background>
                <img src={background_heading} alt=""/>
                <img src={background_top} alt=""/>
                <img src={background_repeat} className='repeat_about' alt=""/>
                <img src={background_bottom} alt=""/>
            </background>
            <div className='home_columns'>
                <div className='column_1'>
                    <PurpleButton text='Home' link='/home'/>
                    <PurpleButton text='About Dr. jervis' link='/about_doctor'/>
                    <PurpleButton text='Consultations' link='/consultations'/>
                    <PurpleButton text='Procedures' link='/procedures'/>

                    <OrangeButton text='breast' link='/breast'/>
                    {/*<OrangeButton text='liposuction' link='/liposuction'/>*/}
                    <OrangeButton text='botox & fillers' link='/botox_and_fillers'/>
                    <OrangeButton text='face' link='/face'/>
                    {/*<OrangeButton text='tummy tuck' link='/tummy_tuck'/>*/}
                    {/*<OrangeButton text='body' link='/body'/>*/}
                    {/*<OrangeButton text='mommy makeover' link='/mommy_makeover'/>*/}

                    <PurpleButton text='CONTACT DR.JERVIS' link='/contact_doctor'/>
                    <PurpleButton text='FAQS' link='/faqs'/>
                    {/*<PurpleButton text='PHOTO GALLERY' link='/photo_gallery'/>*/}
                    <PurpleButton text='SURGERY CENTER' link='/surgery_center'/>
                    <PurpleButton text='TESTIMONIALS' link='/testimonials'/>
                    {/*<PurpleButton text='FINANCING' link='/financing'/>*/}
                    {/*<PurpleButton text='PATIENT FORMS' link='/patient_forms'/>*/}
                    {/*<PurpleButton text='DIRECTIONS' link='/directions'/>*/}
                    {/*<PurpleButton text="WHAT'S NEW" link='/whats_new'/>*/}
                    <PurpleButton text='BLOG' link='/blog'/>
                    <PurpleButton text='LINKS' link='/links'/>
                    {/*<PurpleButton text='SITE MAP' link='/site_map'/>*/}
                    <div className='column_1_form'>
                        <p className='form_heading'>
                            Sign Up For e-News & Specials
                        </p>
                        <form id='column_1'>
                            <div>
                                <label>
                                    Name:
                                    <input
                                        type="text"
                                        name="name"
                                    />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Email:
                                    <input
                                        type="email"
                                        name="email"
                                    />
                                </label>
                            </div>
                            <div>
                                <button className='submit_btn' type="submit"></button>
                            </div>
                        </form>
                    </div>
                    <div className='icons'>
                        <a href='#!'>
                            <img src={facebook} alt=""/>
                        </a>
                        <a href='#!'>
                            <img src={yelp} alt=""/>
                        </a>
                    </div>
                </div>

                <div className='column_2_about'>
                    <p className='heading_p_about'>ABOUT DR. JERVIS</p>
                    <p className='heading_1'>Leading Bay Area Plastic Surgeon: About Dr. Jervis</p>
                    <br/>
                    <p className='simple_text'>
                        William Jervis, M.D. is a board certified plastic surgeon in the Bay Area with many years of
                        education, training, and experience in the field of plastic surgery. Prior to receiving his
                        board certification by the American Board of Plastic Surgery, Dr. Jervis attended medical school
                        at McGill University in Montreal. He then completed his internship at Los Angeles County General
                        Hospital before serving two years as a Flight Surgeon in the United States Air Force. Following
                        his service in the USAF, Dr. Jervis received extensive training in general surgery at Pacific
                        Medical Center in San Francisco, Kaiser Foundation in Oakland, and in plastic surgery at the
                        University of Texas Southwestern, Dallas. In addition, Dr. Jervis spent 14 years training young
                        doctors in the art and science of plastic surgery as a Clinical Instructor of Plastic Surgery at
                        the University of California, Davis School of Medicine and was also a Visiting Scholar at the
                        Department of Plastic Surgery at Stanford University. He is also a Fellow of both the American
                        College of Surgeons and the International Society of Aesthetic Plastic Surgery.
                    </p>

                    <p className='simple_text'>
                        In addition to his extensive education, training, and experience in the field of plastic
                        surgery, Dr. Jervis utilizes the newest, state-of-the-art technologies to provide his patients
                        results that are beautiful, natural looking, and long lasting.
                    </p>
                    <p className='simple_text'>
                        Special Recognition for <a className='a_link' href='#!'> Breast Augmentation, California:</a>
                    </p>
                    <p className='simple_text'>
                        Dr. Jervis was voted by his plastic surgery
                        peers in 1999 to be the most expert Bay Area plastic surgeon for <a className='a_link' href='#!'>augmentation
                        mammaplasty</a> in the
                        book, The Best Plastic and Reconstructive Surgeons. Additional recognition and affiliations
                        include:
                    </p>
                    <ul>
                        <li>Diplomate of National Board of Medical Examiners 1961</li>
                        <li>California Physician's and Surgeon's License #G8005 1961</li>
                        <li>Member, Alameda-Contra Costa Medical Society, California Medical Association and American
                            Medical Association 1966-1971
                        </li>
                        <li>Diplomate of American Board of Plastic Surgery 1975</li>
                        <li>Member, California Society of Plastic Surgeons 1976</li>
                        <li>Fellow, American College of Surgeons 1977</li>
                        <li>Clinical Instructor of Plastic Surgery, School of Medicine, University of California, Davis,
                            California 1979-1992
                        </li>
                        <li>Member, Icarus Society of Plastic Surgeons 1979</li>
                        <li>Fellow, International College of Surgeons 1980</li>
                        <li>Chairman, Section of Plastic Surgery, John Muir Medical Center, Walnut Creek, CA 1982-1985
                            and 1998-2000
                        </li>
                        <li>Member, Lipoplasty Society 1983</li>
                        <li>Member, American Society for Aesthetic Plastic Surgery 1984</li>
                        <li>Visiting scholar, Department of Plastic Surgery, Stanford University November 1991</li>
                        <li>Chairman, Membership Committee, California Society of Plastic Surgeons 1990-1994</li>
                        <li>Member, International Society of Aesthetic Plastic Surgery 2001</li>
                        <li>Member, International Society of Aesthetic Plastic Surgery 2001</li>
                        <li>Plastic Surgery: University of Texas Southwestern, Dallas, Texas, John Muir Medical Center,
                            Concord Campus; Mt. Diablo Surgery Center
                        </li>
                    </ul>
                    <b>Education:</b>
                    <ul>
                        <li>CoolSculpt University by Zeltiq - extensive in depth training about
                            cryolipolysis/CoolSculpting 2014
                        </li>
                        <li>Volunteer Reconstructive Surgery: 1983-1990, 1993, 1998 Volunteer Reconstructive Surgery:
                            1983-1990, 1993, 1998
                        </li>
                        <li>Plastic Surgery: University of Texas Southwestern, Dallas, Texas 1974</li>
                        <li>General Surgery: Pacific Medical Center, San Francisco, California and Kaiser Foundation
                            Hospital, Oakland, California 1971
                        </li>
                        <li>Military Service: Flight Surgeon, USAF 1963-1965</li>
                        <li>Internship: Los Angeles County General Hospital 1962</li>
                        <li>Medical School: McGill University, Montreal 1961
                        </li>
                    </ul>
                    <b>Papers Presented:</b>
                    <ul>
                        <li>"Experience with over 1500 Saline Inflatable Breast Implants," Annual Meeting of American
                            Society for Aesthetic Plastic Surgery, Los Angeles, CA, May 4, 1992
                        </li>
                        <li>"Current Status of Mammary Implants," December 17, 1991, John Muir Medical Center Staff
                            Meeting
                        </li>
                        <li>"Update on 119 Patients with Polyurethane Covered Mammary Implants," September 1986,
                            Advanced Symposium on Plastic Surgery of the Breast, Santa Fe, New Mexico
                        </li>
                        <li>"Experience with 232 Polyurethane Covered Mammary Prostheses Over a Two Year Period,"
                            American Society for Aesthetic Plastic Surgery, Boston, Massachusetts, April 18, 1985.
                            Re-presented at joint meeting of Philippine Society of Plastic Surgeons, January 18, 1986,
                            Manila, Philippines
                        </li>
                        <li>"Closure of Meningomyelocele Defects," 30th Annual Meeting of California Society of Plastic
                            Surgeons, March 21, 1980, San Diego, CA
                        </li>
                        <li>"Theory and Use of Limberg and Dufourmentel Flaps," William H. Jervis, M.D., Kenneth E.
                            Salyer, M.D., M. Vargas Busquets, M.D., and Ronald Atkins, M.D. Presented at the Sixth
                            International Congress of Plastic and Reconstructive Surgery, August, 1975, Paris, France
                        </li>
                        <li>"Further Experience with Limberg and Dufourmentel Flaps," William H. Jervis, M.D., Kenneth
                            E. Salyer, M.D., presented at meeting of American Society of Plastic and Reconstructive
                            Surgeons, October 23, 1974, Hollywood, Florida
                        </li>
                        <li>"Our Experience with Limberg and Dufourmentel Flaps," William H. Jervis, M.D., Kenneth
                            E.Salyer, M.D., presented at meeting of Texas Society of Plastic Surgeons, May 4, 1973,
                            Dallas, Texas
                        </li>
                        <li>"Air Evacuation of Maxillo-Facial Injuries," International Committee of Military Medicine
                            and Pharmacy, November 1964, Algiers
                        </li>
                        <li>"Technic Reversals in Selected Cases: Suction Lipectomy and lower lid Blepharoplasty,"
                            Department of Plastic Surgery, Stanford University, August 22, 2001.
                        </li>
                    </ul>
                    <b>Publications:</b>
                    <ul>
                        <li>"Further Applications of the Limberg and Dufourmentel Flaps," William H.Jervis, M.D.,
                            Kenneth E. Salyer, M.D., Miguel A. Vargas Busquets, M.D. and Ronald W. Atkins, M.D.; Plastic
                            and Reconstructive Surgery, 1974, The Williams & Wilkins Co., Vol. 54, No.3
                        </li>
                        <li>"Theory and Use of Limberg and Dufourmentel Flaps," William H. Jervis, M.D.; Plastic and
                            Reconstructive Surgery; Transactions of the Sixth International Congress, 1975, Masson, Inc.
                            1976
                        </li>
                        <li>"Revisions in Breast Augmentation," Neal Handel, M.D., Barbara B. Hayden, M.D., William H.
                            Jervis, M.D. and Patrick G. Maxwell, M.D., Aesthetic Surgery Journal, March/April 2000, Vol.
                            20, No. 2
                        </li>
                    </ul>
                    <b>Media Events:</b>
                    <p className='simple_text'>
                        Bay Area plastic surgeon Dr. Jervis has been featured on The Learning Channel in 2 different
                        segments; an episode of A Personal Story called "Bigger in Berkeley" on <a href='#!'
                        className='a_link'> breast augmentation</a>, California style, and "The Makings of Michael,"
                        which focused on <a className='a_link' href='#!'> liposuction</a> surgery.
                    </p><p className='simple_text'>
                    He has also been featured on The Discovery Health Channel segment "Plastic Surgery Before and
                    After," for <a className='a_link' href='#!'> facial rejuvenation</a>.

                </p><p className='simple_text'>
                    Interviews with him can be seen on "Heartbeat of America: Keeping America Strong" television
                    magazine series and "The Wellness Hour," featuring his views on <a className='a_link' href='#!'> Vaser®
                    assisted liposelection</a>.
                </p>
                    <br/>
                    <br/>
                    <div className='box-3'>
                        <b>
                            Dr. William Jervis
                            <br/>
                            1844 San Miguel Dr #109
                            <br/>
                            Walnut Creek, CA 94596
                            <br/>
                            <span className='colored_field'>925-937-7100</span>
                        </b>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/><br/><br/>
                </div>

                <div className='column_3'>
                    <a href='/about_doctor'>
                        <img src={body_pic} alt=""/>
                    </a>
                    <br/>
                    <br/>
                    <b>1844 San Miguel Dr #109</b>
                    <b>Walnut Creek, CA 94596</b>
                    <br/>
                    <br/>
                    <b>Phone (925) 937-7100</b>
                    <b>Fax (925) 937-3896</b>
                    <br/>
                    <br/>
                    <b>Hours are 9:00 am to 5:30 pm</b>
                    Monday-Friday
                    <br/>
                    <br/>
                    <br/>
                    <a href='/consultations' className='a_link'>
                        <img src={body_pic2} alt=""/>
                    </a>
                    Waiting Area
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <a href='/aaaasf' className='a_link'>
                        <img src={body_pic3} alt=""/>
                        AAAASF Surgical Center
                    </a>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <img src={logo1} alt=""/>
                    <div>
                        <img src={logo2} alt=""/>
                        <img src={logo3} alt=""/>
                    </div>
                    <br/>
                    <img src={logo5} alt=""/>
                    <br/>
                    <img src={logo6} alt=""/>
                    <br/>
                    <img src={logo7} alt=""/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About;