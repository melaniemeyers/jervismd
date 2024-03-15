import './Home.css'
import Header from "../../Components/Header/Header";
import background_heading from '../../images/top.png';
import background_repeat from '../../images/QuickSiteImages/bodyrepeat.jpg'
import background_bottom from '../../images/QuickSiteImages/footer.jpg'
import background_top from '../../images/QuickSiteImages/bodytop.jpg'
import PurpleButton from "../../Components/PurpleButton/PurpleButton";
import OrangeButton from "../../Components/OrangeButton/OrangeButton";
import yelp from '../../images/yelp-icon.jpg'
import facebook from '../../images/facebook-icon.jpg'
import yoga from '../../images/04232007001_200411937-001.jpg'
import body_pic from '../../images/QuickSiteImages/body_pic1.jpg'
import body_pic3 from '../../images/QuickSiteImages/body_pic3.jpg'
import body_pic2 from '../../images/dr_jervis_waiting_room_cosmetic_surgery.JPG'
import logo1 from '../../images/QuickSiteImages/logo_american-society.jpg'
import logo2 from '../../images/QuickSiteImages/logo_csps.jpg'
import logo3 from '../../images/QuickSiteImages/logo_picture.jpg'
import logo5 from '../../images/project_beauty.JPG'
import logo6 from '../../images/QuickSiteImages/logo_international-society.jpg'
import logo7 from '../../images/QuickSiteImages/logo_ipras.jpg'
import Footer from "../../Components/Footer/Footer";

function Home(){
    return(
        <div id='home'>
            <Header/>
            <background>
                <img src={background_heading}/>
                <img src={background_top}/>
                <img src={background_repeat} className='repeat'/>
                <img src={background_bottom}/>
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
                        <a href=''>
                            <img src={facebook}/>
                        </a>
                        <a href=''>
                            <img src={yelp}/>
                        </a>
                    </div>
                </div>

                <div className='column_2'>
                    <p className='heading_p'>WELCOME TO ADVANCED COSMETIC SURGERY<br/>
                        CLINIC OF WALNUT CREEK</p>
                    <p className='heading_1'>From Liposuction to Breast Augmentation: Enhance Your <br/> Image with Cosmetic Surgery</p>
                    <p className='heading_2'>William Jervis, MD of Walnut Creek, CA is a
                        Board-Certified Bay Area Plastic Surgeon who invests in the newest,
                        state-of-the-art technologies, such as <a className='a_link' href=''>Laser LifeSculpt</a> for Liposuction,
                        Coleman System for <a className='a_link' href=''>Autologous fat reinjection</a>, endotine system for <a className='a_link' href=''>brow
                        lifts</a> and Rhytec Portrait Plasma for skin rejuvenation, as well as using
                        traditional technologies for reliably achieving superb outcomes.
                        Dedicated to rejuvenating and enhancing your natural beauty in a
                        way that makes you look better and feel more confident about your appearance.
                    </p>
                    <img src={yoga}/>
                    <div className='box-1'>
                        <h4>Philosophy</h4>
                        <br/>
                        <p>After more than 20 years in practice <a className='a_link' href=''>Dr. Jervis</a> has focused his
                            energy & expertise primarily
                            into aesthetic surgery. We are offer both surgical & non-surgical options for our
                            patients.</p><br/>

                        <p>First, he accurately assesses the client's goals & effectively communicates how to achieve
                            these in the most efficient & safe manner. At your <a className='a_link' href=''>consultation</a> he
                                  will discuss what can
                                reasonably be expected for an outcome as well as possible alternative approaches,
                            limitations, ways to be as pain-free as possible & potential complications. </p><br/>

                        <p>His dedication to expertise and artistry in aesthetic surgery, attention to detail & total
                            post-operative care are the hallmarks of Dr. Jervis' practice. It begins with a <a
                                className='a_link' href=''>consultation</a> with <a className='a_link' href=''>Dr.
                                Jervis</a>
                            , & then to a tour of our fully accredited (<a className='a_link' href=''>AAAASF</a>) <a className='a_link' href=''>surgical
                                suite</a> where most
                            of our surgery is done. Extensive cases, or for those with medical issues could be done at
                            one of the hospitals such as John Muir Medical Center where Dr. Jervis was Plastic Surgery
                            Section Chair, 1982-1985, 1998-2000 or its outpatient surgery center (Aspen Surgery
                            Center). </p><br/>
                    </div>
                    <div className='box-2'>
                        When you are ready to schedule a free <a className='a_link' href=''>consultation appointment
                        with Dr. Jervis</a>, please call us at <b>925-937-7100</b> or
                         email us at DrJervisScheduling@gmail.com.
                        <br/>
                        <br/>
                        We look forward to meeting you and helping you meet your cosmetic improvement goals.
                    </div>
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
                </div>

                <div className='column_3'>
                    <a href='/about_doctor'>
                        <img src={body_pic}/>
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
                        <img src={body_pic2}/>
                    </a>
                    Waiting Area
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <a href='/aaaasf' className='a_link'>
                        <img src={body_pic3}/>
                        AAAASF Surgical Center
                    </a>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <img src={logo1}/>
                    <div>
                        <img src={logo2}/>
                        <img src={logo3}/>
                    </div>
                    <br/>
                    <img src={logo5}/>
                    <br/>
                    <img src={logo6}/>
                    <br/>
                    <img src={logo7}/><br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Home;