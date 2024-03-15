import './EyelidLift.css'
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

import image1 from '../../images/Eyelid lift (Blepharoplasty)1.jpg'
import image2 from '../../images/Eyelid lift (Blepharoplasty)2.jpg'
import image3 from '../../images/Eyelid lift (Blepharoplasty)3.jpg'
import image4 from '../../images/Eyelid lift (Blepharoplasty)4.jpg'

import image5 from '../../images/Eyelid lift (Blepharoplasty)1.jfif'
import image6 from '../../images/Eyelid lift (Blepharoplasty)2.jfif'

import image7 from '../../images/Eyelid lift (Blepharoplasty)3.jfif'
import image8 from '../../images/Eyelid lift (Blepharoplasty)4.jfif'

import image9 from '../../images/Eyelid lift (Blepharoplasty)21.jfif'
import image10 from '../../images/Eyelid lift (Blepharoplasty)22.jfif'

import image11 from '../../images/Eyelid lift (Blepharoplasty)31.jpg'
import image12 from '../../images/Eyelid lift (Blepharoplasty)32.jpg'
import image13 from '../../images/Eyelid lift (Blepharoplasty)33.jfif'
import image14 from '../../images/Eyelid lift (Blepharoplasty)34.jfif'

import image15 from '../../images/Eyelid lift (Blepharoplasty)41.jfif'
import image16 from '../../images/Eyelid lift (Blepharoplasty)42.jfif'

import image17 from '../../images/Eyelid lift (Blepharoplasty)51.jfif'

function EyelidLift() {
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
                    <p className='heading_1'>Leading Bay Area Plastic Surgeon: An Eyelid lift help you look more
                        restful, more youthful</p>
                    <br/>
                    <br/>
                    <bluebox>
                        <blue_bold>Blepharoplasty is a cosmetic procedure done to remove the fat & extra skin from your
                            upper and/or lower eyelids.
                            The eyelids are often the telling sign of a person's age!
                        </blue_bold>
                    </bluebox>
                    <div id='row1'>
                        <img src={image1}/>
                        <img src={image2}/>
                    </div>
                    <div id='row1'>
                        <img src={image3}/>
                        <img src={image4}/>
                    </div>
                    <div4>
                        Age: 49 2 years after upper & lower eyelid lift
                    </div4>
                    <div5>
                        As we age, we begin to develop tired, droopy or "puffy" eyelids. This process starts in our 30's
                        & progresses with time. These changes usually occur because over the years, the eyelid skin
                        thins, loses tone, & becomes more susceptible to gravity. The fat pockets gradually bulge
                        forward which can cause bags in both the upper & lower eyelid.
                    </div5>
                    <div id='row1'>
                        <img src={image5}/>
                        <img src={image6}/>
                    </div>
                    <div id='row1'>
                        <div4>
                            Age: 68 Upper & Lower Blepharoplasty
                        </div4>
                        <div4>3 years after procedure</div4>
                    </div>
                    <div id='row1'>
                        <img src={image7}/>
                        <img src={image8}/>
                    </div>
                    <blue_box>
                        <a className='a_link' href='/about_doctor'>Dr. Jervis</a>
                        <blue>is a board certified plastic surgeon who is an expert in cosmetic eyelid surgery.
                            Combine eyelid surgery with other procedures for savings!
                        </blue>
                    </blue_box>
                    <div id='row1'>
                        <img src={image9}/>
                        <img src={image10}/>
                    </div>
                    <div id='row1'>
                        <div4>
                            Pre Eye Lift Age: 52
                        </div4>
                        <div4>3 Months after upper & lower blepharoplasty</div4>
                    </div>
                    <div id='row1'>
                        <img src={image11}/>
                        <img src={image12}/>
                    </div>
                    <div id='row1'>
                        <img src={image13}/>
                        <img src={image14}/>
                    </div>
                    <div id='row1'>
                        <div4>
                            Pre Eye Lift Age: 41
                        </div4>
                        <div4>5 weeks after Upper Eye Lid skin and fat removal</div4>
                    </div>
                    <div id='row1'>
                        <img src={image15}/>
                        <img src={image16}/>
                    </div>
                    <div id='row1'>
                        <div4>
                            Pre Eye Lift Age: 52
                        </div4>
                        <div4>2 Months after Fat Pad Removal through inside of lower eyelid</div4>
                    </div>
                    <img src={image17}/>
                    <Box_3/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
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

export default EyelidLift;