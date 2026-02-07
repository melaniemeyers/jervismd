import './Body.css'
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
import Box3 from "../../Components/box-3/box-3";

import img1 from '../../images/LIP FILLERS-LIP AUGMENTATION1.jfif'
import img2 from '../../images/LIP FILLERS-LIP AUGMENTATION2.jfif'
import img3 from '../../images/LIP FILLERS-LIP AUGMENTATION11.jfif'
import img4 from '../../images/LIP FILLERS-LIP AUGMENTATION12.jpg'
import img5 from '../../images/LIP FILLERS-LIP AUGMENTATION31.jpg'
import img6 from '../../images/LIP FILLERS-LIP AUGMENTATION32.jfif'
import img7 from '../../images/LIP FILLERS-LIP AUGMENTATION33.jpg'
import img8 from '../../images/LIP FILLERS-LIP AUGMENTATION34.jpg'

function Body() {
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
                    <p className='heading_p_about'>COSMETIC BODY PROCEDURES</p>
                    <p className='heading_1'>From Cosmetic Procedures following major weight loss to Liposuction for
                        Men- Dr Jervis can help you feel better about your appearance</p>
                    <br/>
                    <br/>
                    <div id='row3'>
                        <img src={img1} alt=""/>
                        <img src={img2} alt=""/>
                    </div>
                    <whitebox>
                        <a href='/about_doctor' className='a_link'>Dr. Jervis</a> & RN Julie Quinn uses injectable lip
                        fillers to give the lips a plump, voluptuous
                        look. There is a wide variety of materials used for lip augmentation. Temporary fillers are a
                        great way to ‘try out’ fuller lips before having permanent lip enhancement.
                    </whitebox>
                    <div id='row3'>
                        <img src={img3} alt=""/>
                        <img src={img4} alt=""/>
                    </div>
                    <whitebox>
                        Lip augmentation with injectable lip fillers provides great results in as little as 30 minutes.
                        Most fillers now contain lidocaine or another topical anesthetic (numbing agent). The results
                        with injectable lip fillers are temporary because the body eventually breaks down and absorbs
                        the filler. The length of time the results last varies with each individual, the amount used,
                        and the product used but the average is generally four to six months.

                    </whitebox>
                    <div id='row3'>
                        <img src={img5} alt=""/>
                        <img src={img6} alt=""/>
                    </div>
                    <div id='row3'>
                        <p>Before</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 week after Juvederm Ultra injections</p>

                    </div>
                    <div id='row3'>
                        <img src={img7} alt=""/>
                        <img src={img8} alt=""/>
                    </div>
                    <p>Juvederm to both upper and lower lips</p>
                    <whitebox>
                        Many patients report that the main benefit of injectable lip fillers
                        is the increased confidence they have in their appearance.
                        Lip fillers restore the <b>plump, sensuous look</b> that is lost with age.
                        Fuller lips can help give you a more <b>youthful, sexy</b> appearance.
                    </whitebox>
                    <Box3/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
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

export default Body;