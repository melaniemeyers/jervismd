import './Consultations.css'
import Header from "../../Components/Header/Header";
import background_heading from "../../images/top.png";
import background_top from "../../images/QuickSiteImages/bodytop.jpg";
import background_repeat from "../../images/QuickSiteImages/bodyrepeat.jpg";
import background_bottom from "../../images/QuickSiteImages/footer.jpg";
import PurpleButton from "../../Components/PurpleButton/PurpleButton";
import OrangeButton from "../../Components/OrangeButton/OrangeButton";
import facebook from "../../images/facebook-icon.jpg";
import yelp from "../../images/yelp-icon.jpg";
import yoga from "../../images/04232007001_200411937-001.jpg";
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
import cons from '../../images/consultations.jpg'
import consult from '../../images/consult.jpg'

function Consultations() {
    return (
        <div id='consultations'>
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
                    <p className='heading_p_about'>COSMETIC CONSULTATIONS</p>
                    <br/>
                    <br/>
                    <blue_bold>From Liposuction to Breast Augmentation: Dr Jervis would be happy to Consult with you to
                        help you Enhance Your Image with Cosmetic Surgery
                    </blue_bold>
                    <img className='cons' src={cons}/>
                    <div className='expectation'>
                        <b>
                            <h3>What can I expect at a Consultation?</h3>
                        </b>
                        <br/>
                        Dr. Jervis personally performs all consultations. That way you'll be able to meet, question
                        and gain insight on your procedure from the actual surgeon who will be doing your surgery.
                        <br/><br/>
                        You will be asked to fill out a patient information form. Basic questions as well as general
                        medical history are needed in order to create the best possible results from your surgery.
                        <br/><br/>
                        It is important that Dr. Jervis discuss your desires & expectations, as well as how a procedure
                        will impact your health, lifestyle & general well-being.
                        <br/><br/>
                        <blue>
                            <under_bold>At the consultation, Dr. Jervis will also:</under_bold>
                            <ul>
                                <li>Evaluate your current health</li>
                                <li>Based on the information gathered, your surgeon will discuss your surgical options
                                    and recommend a course of treatment
                                </li>
                                <li>Disclose the risk of potentials complications associated with the surgery and the
                                    use of anesthesia
                                </li>
                                <li>Cover what to do the day of surgery</li>
                                <li>Cover post-operative care and recovery</li>
                                <li>Pre and post operative photos will be shown.</li>
                                <li>A customized price quote will be calculated for you.</li>
                            </ul>
                            <br/>
                            <br/>
                            <h3>Most consultations are approximately 1 hour in length. </h3>
                            <br/>

                            <h3>We welcome spouses, friends, & family members at your consult if you wish. </h3>
                            <br/>
                            <h3>To schedule your consultation,
                                you may call our office at 925-937-7100 or email us at <a className='a_link'
                                                                                          href='/'><b>DrJervisScheduling@gmail.com</b></a>
                            </h3>
                        </blue>
                    </div>
                    <div className='consult'>
                        <a className='a_link' href='/faqs'>Frequently Asked Questions</a>
                        <img src={consult}/>
                    </div>
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
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Consultations;