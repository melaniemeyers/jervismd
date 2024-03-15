import './Products.css'
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

function Products() {
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
                    <p className='heading_p_about'>Products you'll love!</p>
                    <p className='heading_1'>The Obagi skin care line will leave your skin healthy and glowing. Latisse
                        for longer lashes too!</p>
                    <br/>
                    <br/>
                    <br/>
                    <bluebox>
                        <green><h2>The Next Generation of Chemical Peel</h2></green>
                    </bluebox>
                    <blue_box>
                        <blue_bold>
                            APEELE™ gives you a quality, sophisticated peel for textural and pigment improvement.
                            APEELE™ is a next-generation revitalizing chemical peel designed to provide controlled
                            exfoliation of damaged skin. This powerful yet non-invasive chemical resurfacing procedure
                            improves the quality and appearance of face, neck, chest and hands. Consistent and
                            predictable
                            results for all skin types. Improvement for photodamage, melasma, hyperpigmentation and acne
                            scarring.
                        </blue_bold>
                        <br/>
                        <br/>
                        <h3>$300.00</h3>
                        <br/>
                    </blue_box>
                    <bluebox>
                        <blue_bold>
                            Latisse
                        </blue_bold>
                        <br/>
                        <blue>
                            by Allergan
                        </blue>
                        <br/>
                        <blue_bold>
                            $120 for 3ml size
                        </blue_bold>
                        <br/>
                        <p>
                            <blue>Price subject to change without notice</blue>
                        </p>
                    </bluebox>
                    <br/>
                    <purple_box><br/>LATISSE® works from the inside out. As the treatment progresses, you'll begin to
                        see changes
                        in length, thickness and darkness gradually. After week 16, you'll see the full effect of
                        LATISSE® — and so will others.<br/><br/>
                    </purple_box>
                    <br/>
                    <br/>
                    <blue_back>
                        <b>ELASTIderm</b> is a one of a kind eye treatment from Obagi Medical Products. By using a
                        revolutionary bi-mineral complex called Copper Zinc Malonate, it works to help restore the
                        elasticity around your eyes and reduce the appearance of visible fine lines and wrinkles.
                        <br/>
                        <br/>
                        The eye treatment that works to reduce the appearance of visible fine lines and wrinkles around
                        your eyes.
                    </blue_back>
                    <blue_back>
                        <b>The Obagi Condition & Enhance System</b> is clinically proven to address age spots, fine
                        lines and wrinkles, hyperpigmentation (discoloration), erythema (redness) and future skin
                        damage, while transforming the quality of your skin on a daily basis.
<br/>
<br/>
                        The environment, the sun and the normal aging process all contribute to the fine lines, wrinkles
                        and other facial concerns we work so hard to correct. While facial treatments and procedures
                        such as BOTOX® Cosmetic and fillers focus on specific areas of improvement, the Condition &
                        Enhance System is the only prescription-strength skin care system that's proven to collaborate
                        with these procedures to make your overall results even better.
                    </blue_back>
                    <br/>
                    <br/>
                    <br/>

                    <Box_3/>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/><br/><br/>
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

export default Products;