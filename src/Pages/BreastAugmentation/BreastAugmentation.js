import './BreastAugmentation.css'
import Header from "../../Components/Header/Header";
import background_heading from "../../images/top.png";
import background_top from "../../images/QuickSiteImages/bodytop.jpg";
import background_repeat from "../../images/QuickSiteImages/bodyrepeat.jpg";
import background_bottom from "../../images/QuickSiteImages/footer.jpg";
import PurpleButton from "../../Components/PurpleButton/PurpleButton";
import OrangeButton from "../../Components/OrangeButton/OrangeButton";
import facebook from "../../images/facebook-icon.jpg";
import yelp from "../../images/yelp-icon.jpg";
import pht1 from "../../images/Breast Reduction1.jfif";
import pht2 from "../../images/Breast Reduction2.jfif";
import pht3 from "../../images/Breast Reduction3.jfif";
import pht4 from "../../images/Breast Reduction4.jfif";
import pht5 from "../../images/Breast Reduction11.jfif";
import pht6 from "../../images/Breast Reduction12.jpg";
import pht7 from "../../images/Breast Reduction13.jfif";
import pht8 from "../../images/Breast Reduction14.jpg";
import Box_3 from "../../Components/box-3/box-3";
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

import photo1 from "../../images/Breast Augmentation (Enlargement) 1.jpg"
import photo2 from "../../images/Breast Augmentation (Enlargement) 2.jfif"
import photo3 from "../../images/Breast Augmentation (Enlargement) 3.jpg"
import photo4 from "../../images/Breast Augmentation (Enlargement) 4.jpg"
import photo5 from "../../images/Breast Augmentation (Enlargement) 5.jpg"
import photo6 from "../../images/Breast Augmentation (Enlargement) 6.jfif"
import photo7 from "../../images/Breast Augmentation (Enlargement) 21.jpg"
import photo8 from "../../images/Breast Augmentation (Enlargement) 22.jpg"
import photo9 from "../../images/Breast Augmentation (Enlargement) 23.jpg"
import photo10 from "../../images/Breast Augmentation (Enlargement) 24.jpg"
import photo11 from "../../images/Breast Augmentation (Enlargement) 25.jpg"
import photo12 from "../../images/Breast Augmentation (Enlargement) 26.jpg"
import photo13 from "../../images/Breast Augmentation (Enlargement) 31.jpg"
import photo14 from "../../images/Breast Augmentation (Enlargement) 32.jpg"
import photo15 from "../../images/Breast Augmentation (Enlargement) 33.jpg"
import photo16 from "../../images/Breast Augmentation (Enlargement) 34.jpg"

function BreastAugmentation() {
    return (
        <div id='about_doctor'>
            <Header/>
            <background>
                <img src={background_heading}/>
                <img src={background_top}/>
                <img src={background_repeat} className='repeat_about'/>
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

                <div className='column_2_about'>
                    <p className='heading_p_about'>Breast Augmentation (Enlargement)</p>
                    <p className='heading_1'>Breast Augmentation l Breast Enlargement: California Leading Specialist</p>
                    <br/>
                    <div4>Dr. Jervis believes that the best results can be obtained when the procedure, implant type,
                        location & size are customized to meet the specific patient’s body type, life style & desired
                        look.
                    </div4>
                    <div id='row3'>
                        <div5>
                            Age: 24 5'7" 125lbs No Children <br/>
                            Mentor Round Smooth Saline Implants-<br/>
                            Both sides 450cc<br/>
                        </div5>
                        <div5>
                            3 months after surgery
                        </div5>
                    </div>
                    <div id='row3'>
                        <img src={photo1}/>
                        <img src={photo2}/>
                    </div>
                    <div id='row3'>
                        <img src={photo3}/>
                        <img src={photo4}/>
                    </div>
                    <div id='row3'>
                        <img src={photo5}/>
                        <img src={photo6}/>
                    </div>
                    <div id='row3'>
                        <div5>
                            Age: 28 5'4" 125lbs No Children<br/>
                            Mentor Round Smooth Saline Implants-<br/>
                            Left side 425cc Right Side 431cc<br/>
                        </div5>
                        <div5>
                            3 months after surgery
                        </div5>
                    </div>
                    <div id='row3'>
                        <img src={photo7}/>
                        <img src={photo8}/>
                    </div>
                    <div id='row3'>
                        <img src={photo9}/>
                        <img src={photo10}/>
                    </div>
                    <div id='row3'>
                        <img src={photo11}/>
                        <img src={photo12}/>
                    </div>
                    <div id='row3'>
                        <div5>
                            Age: 21 5'3" 125lbs<br/>
                            2 Children<br/>
                            475cc on each side<br/>
                        </div5>
                        <div5>
                            3 years after surgery
                        </div5>
                    </div>
                    <div id='row3'>
                        <img src={photo13}/>
                        <img src={photo14}/>
                    </div>
                    <div id='row3'>
                        <img src={photo15}/>
                        <img src={photo16}/>
                    </div>
                    <Box_3/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
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
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default BreastAugmentation;