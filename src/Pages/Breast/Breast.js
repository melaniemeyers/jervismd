import './Breast.css'
import Header from "../../Components/Header/Header";
import background_heading from "../../images/top.png";
import background_top from "../../images/QuickSiteImages/bodytop.jpg";
import background_repeat from "../../images/QuickSiteImages/bodyrepeat.jpg";
import background_bottom from "../../images/QuickSiteImages/footer.jpg";
import PurpleButton from "../../Components/PurpleButton/PurpleButton";
import OrangeButton from "../../Components/OrangeButton/OrangeButton";
import facebook from "../../images/facebook-icon.jpg";
import yelp from "../../images/yelp-icon.jpg";
import products from "../../images/products.jfif";
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
import Box_3 from "../../Components/box-3/box-3";

import img1 from '../../images/000801_0305_0004_tsls.jpg'

function Breast() {
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
                    <p className='heading_p_about'>Eyelid lift (Blepharoplasty)</p>
                    <p className='heading_1'>Breast Augmentation l Breast Enlargement l Breast Lift l Breast Reduction:
                        California Leading Specialist</p>
                    <br/>
                    <bluebox>
                        <h2>
                            <blue><a href='/breast/augmentation' className='a_link'>Breast
                                Augmentation</a> (Enlargement)
                            </blue>
                        </h2>
                        <br/>
                        <blue>
                            <a href='/breast/augmentation' className='a_link'>Breast Augmentation</a> surgery increases
                            the
                            size of the breasts through the insertion of silicone or saline filled implants, usually
                            behind
                            the pectoral major muscle. <a href='/breast/augmentation' className='a_link'>Breast
                            Augmentation</a> is
                            also known as augmentation mammaplasty.
                            <br/>
                            <br/>
                            Did you know that many women return to work in as little as 3 days following breast
                            augmentation? As one of the leading surgeons for <a href='/breast/augmentation'
                                                                                className='a_link'>breast
                            augmentation</a>, <a href='/about_doctor' className='a_link'>Dr. Jervis</a> believes
                            that the best results can be obtained when the procedure, implant type, location and size
                            are customized to meet a specific patient's body type, life style and desired look. We offer
                            both saline and silicone filled implants.
                            <br/>
                            <br/>
                            At your <a href='/consultations' className='a_link'>consultation</a>, <a
                            href='/about_doctor' className='a_link'>Dr. Jervis</a> will
                            help you
                            choose a shape and size that is natural
                            looking (some clients prefer very large sizes over the "natural" look). He will also explain
                            the pros and cons associated with each type of implant. The goal of the procedure is to
                            enhance confidence and self esteem by enlargement, correcting asymmetries, and/or disguising
                            moderate sagging.

                        </blue>
                    </bluebox>
                    <br/>
                    <div id='row2'>
                        <b>
                            <a href='/breast/augmentation' className='a_link'>Breast Augmentation
                                Photos #1</a></b>
                        <img src={img1}/>
                    </div>
                    <div1>
                        **Please note, by clicking on these photo galleries, you are acknowledging that you are over the
                        age of 18 years.**
                    </div1>
                    <bluebox>
                        <h2>
                            <blue><a className='a_link'>Breast Lift</a>
                            </blue>
                        </h2>
                        <br/>
                        <blue>
                            Breast lift surgery (mastopexy) raises and reshapes sagging breasts. A breast lift can be
                            performed with or without the insertion of breast implants, depending upon anatomical
                            factors and patient preference.
                            <br/>
                            <br/>
                            Loss of skin elasticity, gravity and other factors such as weight loss, pregnancy and
                            breast-feeding ultimately affect the shape and firmness of your breasts.
                            <br/>
                            <br/>
                            There are several design variations for breast lift surgery. The size and shape of your
                            breasts and areolas, and extent of sagging are factors that will help determine the best
                            technique for you.
                            <br/>
                            <br/>
                            If you and <a
                            href='/about_doctor' className='a_link'>Dr. Jervis</a> decide that it is desirable to
                            enlarge your breasts at the same time
                            as they are lifted, breast implants can be done at the same operation. Or if the patient is
                            unsure, they can be inserted later.
                        </blue>
                    </bluebox>
                    <bluebox>
                        <blue>
                            <h2>
                                <blue><a className='a_link' href='/breast/reduction'>Breast Reduction</a>
                                </blue>
                            </h2>
                            <br/>
                            Also known as reduction mammaplasty, breast reduction surgery removes excess breast fat,
                            glandular tissue and skin to achieve a breast size in proportion with your body and to
                            alleviate the discomfort associated with overly large breasts.
                            <br/>
                            <br/>
                            Those who undergo breast reduction surgery frequently are seeking relief from physical
                            symptoms. Individual factors and personal preferences including size determine specific
                            technique and degree of the breast reduction.
                            <br/>
                            <br/>
                            <a className='a_link' href='/breast/reduction'>Breast reduction</a> surgery clients are more
                            motivated to exercise
                            and frequently lose weight
                            as they are able to do so more comfortably. If desirable, this procedure can be performed in
                            conjunction with liposuction surgery for a complete makeover.
                        </blue>
                    </bluebox>
                    <div4><h3><a className='a_link' href='/breast/reduction'>Breast Reduction Photos</a></h3></div4>
                    <br/>

                    <Box_3/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
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

export default Breast;