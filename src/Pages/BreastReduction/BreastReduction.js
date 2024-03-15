import './BreastReduction.css'
import Header from "../../Components/Header/Header";
import background_heading from "../../images/top.png";
import background_top from "../../images/QuickSiteImages/bodytop.jpg";
import background_repeat from "../../images/QuickSiteImages/bodyrepeat.jpg";
import background_bottom from "../../images/QuickSiteImages/footer.jpg";
import PurpleButton from "../../Components/PurpleButton/PurpleButton";
import OrangeButton from "../../Components/OrangeButton/OrangeButton";
import facebook from "../../images/facebook-icon.jpg";
import yelp from "../../images/yelp-icon.jpg";
import img1 from "../../images/000801_0305_0004_tsls.jpg";
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

import pht1 from '../../images/Breast Reduction1.jfif'
import pht2 from '../../images/Breast Reduction2.jfif'
import pht3 from '../../images/Breast Reduction3.jfif'
import pht4 from '../../images/Breast Reduction4.jfif'

import pht5 from '../../images/Breast Reduction11.jfif'
import pht6 from '../../images/Breast Reduction12.jpg'
import pht7 from '../../images/Breast Reduction13.jfif'
import pht8 from '../../images/Breast Reduction14.jpg'
function BreastReduction() {
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
                    <p className='heading_p_about'>Breast Reduction</p>
                    <p className='heading_1'>Breast Reductions by Dr. Jervis can give you more youthful breasts that are
                        in correct proportion to your body</p>
                    <br/>
                    <bluebox>
                        <blue>
                            Oversized, drooping breasts cause many women to seek breast reduction surgery or medically
                            known as breast hypertrophy.
                        </blue>
                    </bluebox>
                    <div id='row3'>
                        <img src={pht1}/>
                        <img src={pht2}/>
                    </div>
                    <div id='row3'>
                        <img src={pht3}/>
                        <img src={pht4}/>
                    </div>
                    <div id='row3'>
                        <div4>Age:57 5'2" 120lbs 2 children<br/>
                            Bilateral Reduction Mammoplasty<br/>
                            470 grams removed-right side<br/>
                            560 grams removed-left side
                        </div4>
                        <br/>
                        <div4>
                            14 Months after procedure
                        </div4>
                    </div>
                    <bluebox>
                        <blue_bold>Physical symptoms:</blue_bold>
                        <ul>
                            <blue_li>
                                <li>Back, neck & shoulder pain</li>
                                <li>Asymmetrical breasts</li>
                                <li>Skin irritation along bra strap lines or under breasts</li>
                                <li>Indentations in shoulders from pulling bra straps</li>
                                <li>Difficulty exercising or performing normal physical activities without pain</li>
                                <li>Breasts being too large and out of proportion to your body type.</li>
                                <li>Breasts that are pendulous & lack firmness</li>
                                <li>Nipples & areolas that point downward.</li>
                            </blue_li>
                        </ul>
                    </bluebox>
                    <div id='row3'>
                        <img src={pht5}/>
                        <img src={pht6}/>
                    </div>
                    <div id='row3'>
                        <img src={pht7}/>
                        <img src={pht8}/>
                    </div>
                    <div id='row3'>
                        <div4>Breast Reduction w/Lift<br/>
                            Age:39<br/>
                            5'7" 170lbs<br/>
                            1 child
                        </div4>
                        <br/>
                        <div4>
                            2 Months after surgery
                        </div4>
                    </div>
                    <whitebox>
                        There are many variations to the design of a breast reduction surgery. The size and shape of
                        your breasts, size of your areolas, and extent of sagging are factors that will help you and Dr
                        Jervis determine which method is best.
                        <br/>
                        <br/>
                        Sometimes it's possible to avoid the ‘T shaped’ incision. For some, a different technique may be
                        used that avoids the typical scars. The areolas may be reduced in size.
                        <br/>
                        <br/>
                        Following breast reduction, your breasts will be more proportioned to the rest of your body. You
                        should be more comfortable, including during exercise.

                    </whitebox>

                    <Box_3/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
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

export default BreastReduction;