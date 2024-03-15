import './Procedures.css'
import Header from "../../Components/Header/Header";
import background_heading from "../../images/top.png";
import background_top from "../../images/QuickSiteImages/bodytop.jpg";
import background_repeat from "../../images/QuickSiteImages/bodyrepeat.jpg";
import background_bottom from "../../images/QuickSiteImages/footer.jpg";
import PurpleButton from "../../Components/PurpleButton/PurpleButton";
import OrangeButton from "../../Components/OrangeButton/OrangeButton";
import facebook from "../../images/facebook-icon.jpg";
import yelp from "../../images/yelp-icon.jpg";
import cons from "../../images/consultations.jpg";
import consult from "../../images/consult.jpg";
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
import yoga from "../../images/04232007001_200411937-001.jpg";

function Procedures() {
    return (
        <div id='procedures'>
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
                    <p className='heading_p_about'>PROCEDURES</p>
                    <p className='heading_1'>Cosmetic Surgery Procedure Break Down: Enhance Your Image with Cosmetic
                        Surgery</p>
                    <blue_box>
                        <h3>
                            <blue>Breast</blue>
                        </h3>
                        <br/>
                        <a href='' className='a_link'>Breast Augmentation (Implants for enlargement)
                        </a>
                        <br/>
                        <a href='' className='a_link'>Breast Lifts</a>
                        <br/>
                        <a href='' className='a_link'>Breast Reduction</a>
                        <br/>
                        <a href='' className='a_link'>Male Breast Reduction 'Gynecomastia'</a>
                        <br/><br/>
                    </blue_box>
                    <br/>
                    <blue_box>
                        <h3>
                            <blue>Body</blue>
                        </h3>
                        <br/>
                        <a href='' className='a_link'>Breast Lifts</a>
                        <br/>
                        <a href='' className='a_link'>Breast Lifts</a>
                        <br/>
                        <a href='' className='a_link'>Laser LifeSculpt Liposuction</a>
                        <br/>
                        <a href='' className='a_link'>Tummy Tuck 'Abdominoplasty</a>
                        <br/>
                        <a href='' className='a_link'>Mommy Makeovers</a>
                        <br/>
                        <a href='' className='a_link'>'Otoplasty'</a>
                        <br/>
                        <a href='' className='a_link'>Labiaplasty</a>
                        <br/>
                        <a href='' className='a_link'>Earlobe Repair</a>
                        <br/>
                        <a href='' className='a_link'>Buttock Contouring</a>
                        <br/>
                        <a href='' className='a_link'>Thigh Lift 'Thighplasty'</a>
                        <br/>
                        <a href='' className='a_link'>Upper Arm Lift 'Brachioplasty'</a>
                        <br/>
                        <a href='' className='a_link'>Mole/Lesion Removal</a>
                        <br/>
                        <a href='' className='a_link'>Body Sculpting after major weight loss</a>
                        <br/><br/>
                    </blue_box>
                    <br/>
                    <blue_box>
                        <h3>
                            <blue>Face</blue>
                        </h3>
                        <br/>
                        <a href='' className='a_link'>Face Lift</a>
                        <br/>
                        <a href='' className='a_link'>Eyelid Lift 'Blepharoplasty'</a>
                        <br/>
                        <a href='' className='a_link'>Brow Lift</a>
                        <br/>
                        <a href='' className='a_link'>Rhinoplasty</a>
                        <br/>
                        <a href='' className='a_link'>Chin Surgery (Implant)</a>
                        <br/>
                        <a href='' className='a_link'>Otoplasty 'Ear Reduction'</a>
                        <br/>
                        <a href='' className='a_link'>Autologous Fat Transfer</a>
                        <br/>
                        <a href='' className='a_link'>Portrait Plasma Laser Treatment</a>
                        <br/>
                        <a href='' className='a_link'>Ear Lobe Repair</a>
                        <br/>
                        <br/>
                        <h3>
                            <blue>Non-Invasive</blue>
                        </h3>
                        <br/>

                        <a href='' className='a_link'>Botox©</a>
                        <br/>
                        <a href='' className='a_link'>Juvederm</a>
                        <br/>
                        <a href='' className='a_link'>Perlane</a>
                        <br/>
                        <a href='' className='a_link'>Restylane </a>
                        <br/>
                        <a href='' className='a_link'>Radiesse</a>
                        <br/>
                        <a href='' className='a_link'>Obagi Skin Care Line</a>
                        <br/>
                        <a href='' className='a_link'>Latisse- Lash growing Rx</a>
                        <br/>


                    </blue_box>
                    <boxed>
                        <blue><h3><a className='a_link' href='/about_doctor'>Dr. Jervis</a> understands that Cosmetic
                            Surgery choices can be confusing and even overwhelming, call or email our office for a
                            free <a className='a_link' href='/consultations'>consultation</a> and

                            Dr. Jervis will help educate you on your many options.</h3>
                            <br/>
                            <br/>
                            <h4><a className='a_link' href='/contact'>Email</a> or call us at 925-937-7100</h4>
                        </blue>
                    </boxed>
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

export default Procedures;