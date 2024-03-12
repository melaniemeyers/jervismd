import './AAAASF.css'
import Header from "../../Components/Header/Header";
import background_heading from "../../images/top.png";
import background_top from "../../images/QuickSiteImages/bodytop.jpg";
import background_repeat from "../../images/QuickSiteImages/bodyrepeat.jpg";
import background_bottom from "../../images/QuickSiteImages/footer.jpg";
import PurpleButton from "../../Components/PurpleButton/PurpleButton";
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
import aaaasf from '../../images/dr_jervis_aaaasf_surgery_center.jpg'

function AAAASF() {
    return (
        <div id='aaaasf'>
            <Header/>
            <background>
                <img src={background_heading}/>
                <img src={background_top}/>
                <img src={background_repeat} className='repeat4'/>
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
                    <p className='heading_p_about'>AAAASF SURGICAL FACILITY</p>
                    <p className='heading_1'>AAAASF Accredited Surgery Center in Walnut Creek, CA for all your Cosmetic
                        Surgery needs</p>
                    <trans>
                        <bold>Dr. William Jervis devotes his practice almost exclusively to aesthetic surgery, improving
                            our patients appearance, form, function and self-image.
                            <br/>
                            <br/>
                            For the discretion, comfort and safety of his clients, <a className='a_link'
                                                                                      href='about_doctor'> Dr.
                                Jervis</a> has built and maintains a
                            surgical and recovery facility adjacent to his office which has been certified by the
                            American Association for Accreditation of Ambulatory Surgical Facilities <a
                                className='a_link' href='http://www.aaaasf.org/'>www.aaaasf.org</a>
                        </bold>
                    </trans>
                    <br/>
                    <img src={aaaasf}/>
                    <br/>
                    <p><b>AAAASF</b> certifies surgery centers to be safe for all types of sedation and anesthesia, and
                        recovery
                        for most aesthetic procedures. <a href='about_doctor' className='a_link'>Dr. Jervis</a> also does longer and more complicated procedures, or
                        on
                        those with medical conditions, at one of several hospitals.</p>
                    <br/>
                    <black_border>
                        <blue><b>Uncompromising Safety</b><br/>Safety, sterilization and germ control is of utmost
                            importance to us. To protect you our patients, we strictly maintain sterilization and adhere
                            to safety standards to ensure you are safe and protected at all times.

                        </blue>
                    </black_border>
                        <br/>
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

export default AAAASF;