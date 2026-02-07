import './FacialProcedures.css'
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
import products from '../../images/products.jfif'
function FacialProcedures() {
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
                    <p className='heading_p_about'>FACIAL COSMETIC PROCEDURES</p>
                    <p className='heading_1'>Facelifts, Eyelid Lifts, Browlifts, Facial Fillers and Botox by Dr Jervis,
                        the East Bay Area Top Cosmetic Surgeon</p>
                    <br/>
                    <br/>
                    <a className='a_link' href='#lift'>Eyelid Lift (Blepharoplasty)</a>
                    <a className='a_link' href='/face/lip_augmentation'>Lip Augmentation</a>
                    <br/>
                    <whitebox>
                        <b>Facelift (Rhytidectomy)</b><br/>
                        A facelift smooths the loose skin on your face and neck, tightens underlying tissues and removes
                        excess fat. Your face will appear firmer, fresher and more youthful.
                        <br/>
                        <u><b>Adjustable Vector Tissue Adhesive Facelift</b></u> with tissue sealant allows
                        individualized direction of pull as well as finessing the tension of the closure. This is
                        accomplished by pulling on the narrow flaps with a clamp and placing a skin suture at its base
                        while the tension is maintained, after which the flap is excised. I use about 7 individual flaps
                        in all areas of closure above, in front of, and behind the ear. Another enhancement is the use
                        of Tisseal tissue sealant which is sprayed under the skin prior to closure. This glues the skin
                        to the deeper tissues, holding the narrow flaps with clamps for several minutes for the sealant
                        to work its magic. Drains are almost never needed because of the sealant. Tisseal reduces
                        bruising and swelling, to the degree that sometimes there is none.
                    </whitebox>
                    <span id='lift'></span>
                    <whitebox>
                        <b><a className='a_link' href='/face/eyelid_lift'>Eyelid Lift (Blepharoplasty)</a></b><br/>
                        Upper eyelid excess and drooping skin can make you
                        appear sad, tired, angry or just plain old!
                        Time to get rid of the puffiness and bags?
                        Then eyelid surgery may be right for you.
                    </whitebox>

                    <whitebox>
                        <b>Injectables</b> (Facial Fillers) <br/>
                        Fillers are injected into the skin (or under) in order to add volume to lips and lift up
                        wrinkles & folds.
                        The most common areas for receiving injections are the marionette lines (from the corner of your
                        mouth to your chin), the Nasolabial folds (from the root of the nose to the angle of the mouth)
                        & the lips, although other sites can also be treated.
                        <br/>
                        <br/>
                        <a className='a_link' href='#!'><b>We carry Juvederm, Juvederm Ultra,
                            Radiesse, & Belotero.</b></a>

                        <br/>
                        <br/>
                    </whitebox>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <a href='/products'>
                        <img src={products} alt=""/>
                    </a>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
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

export default FacialProcedures;