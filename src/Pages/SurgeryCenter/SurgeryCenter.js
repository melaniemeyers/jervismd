import './SurgeryCenter.css'
import Header from "../../Components/Header/Header";
import background_heading from "../../images/top.png";
import background_top from "../../images/QuickSiteImages/bodytop.jpg";
import background_repeat from "../../images/QuickSiteImages/bodyrepeat.jpg";
import background_bottom from "../../images/QuickSiteImages/footer.jpg";
import PurpleButton from "../../Components/PurpleButton/PurpleButton";
import facebook from "../../images/facebook-icon.jpg";
import yelp from "../../images/yelp-icon.jpg";
import aaaasf from "../../images/dr_jervis_aaaasf_surgery_center.jpg";
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
import surg1 from '../../images/1.jfif'
import surg2 from '../../images/2.jpg'
function SurgeryCenter() {
    return (
        <div id='surgery'>
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

                    {/*<OrangeButton text='breast' link='/breast'/>*/}
                    {/*<OrangeButton text='liposuction' link='/liposuction'/>*/}
                    {/*<OrangeButton text='botox & fillers' link='/bottox_and_fillers'/>*/}
                    {/*<OrangeButton text='face' link='/face'/>*/}
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
                    <p className='heading_p_about'>SURGICAL CENTER</p>
                    <p className='heading_1'>From Liposuction to Breast Augmentation: AAAASF Surgery Center of Walnut
                        Creek CA</p>
                    <blued_box>
                        <blue_bold>
                            OPERATING ROOM STAFF
                        </blue_bold>
                        <br/>
                        <br/>
                        <p>Our operating room staff has been employed by <a href='about_doctor' className='a_link'>Dr.
                            Jervis</a> ranging
                            from 4 to 22 years. Dr.
                            Jervis
                            and his nursing staff are certified in Advanced Cardiac Life Support.</p><br/>
                        <blue_bold>
                            AAAASF Operating Room
                        </blue_bold>
                        <br/><br/>
                        <a href='about_doctor' className='a_link'>Dr. Jervis</a> has always maintained certification by
                        the American
                        Association for Accreditation of
                        Ambulatory Surgical Facilities, long before it became a state law that such accreditation was
                        required. This assures compliance with multiple regional and national standards for patient
                        safety, comfort, and confidentiality.
                        <br/>
                        <br/>
                        Surgical suite on-site has the advantage of discretion for the patient, as well as a less
                        stressful environment than a commercial surgery center. In my center, I work with the same
                        surgical team who is familiar with the instrumentation, techniques, and supplies I use so there
                        is a smoother operation. Likewise, if a procedure takes longer than anticipated at a commercial
                        surgery center, there is the issue of delaying the next surgeon scheduled to follow in the same
                        operating room, as well as the added expense. Consequently, we are not forced to hurry and get
                        the procedure over in my surgery center. We are accredited for local, heavy sedation with local,
                        and general anesthesia and recovery by the American Association for Accreditation of Ambulatory
                        Surgery Facilities (AAAASF). We use board certified anesthesiologists and trained recovery
                        nurses. We also have back up power in the even of a power outage, as well as meeting numerous
                        medical/surgical, business, and ethical standards.
                    </blued_box>

                    <div className='images'>
                        <img src={surg1}/>
                        <img src={surg2}/>
                    </div>
                    <br/>
                    <br/>
                    <br/> <br/>
                    <br/>
                    <br/> <br/>
                    <br/>
                    <br/> <br/>
                    <br/>
                    <br/> <br/>
                    <br/>
                    <br/> <br/>
                    <br/>
                    <br/> <br/>
                    <br/>
                    <br/> <br/>
                    <br/>
                    <br/> <br/>
                    <br/>
                    <br/> <br/>
                    <br/>
                    <br/> <br/>
                    <br/>
                    <br/> <br/>
                    <br/>
                    <br/> <br/>
                    <br/>
                    <br/> <br/>
                    <br/>
                    <br/> <br/>
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
                    <img src={logo7}/>
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SurgeryCenter;