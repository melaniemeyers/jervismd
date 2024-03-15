import './Blog.css'
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
import OrangeButton from "../../Components/OrangeButton/OrangeButton";

function Blog(){
    return (
        <div id='blog'>
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
                    <p className='heading_p_about'>BLOG</p>
                    <div className="content_wrapper">
                        <div className="content">
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            <div className="dayBox">
                                <div className="entryBox">
                                    <a name="tips-for-getting-your-body" id="tips-for-getting-your-body"></a>
                                    <span><h2 className="postTitle"><a
                                        href="" className='a_link'>Tips for Getting Your Body Summer Ready</a></h2></span>
                                    by William Jervis on 04/09/15<br/>

                                    <p className="entryContent">


                                    <p className="entryInfo" align="right">

                                        <a href=""
                                           className='a_link'>Comments&nbsp;(0)</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </p></p></div>



                            </div>
                            <div className="dayBox">
                                <div className="entryBox">
                                    <a name="which-facial-procedure-do-i" id="which-facial-procedure-do-i"></a>
                                    <span><h2 className="postTitle"><a
                                        href="" className='a_link'>Which Facial Procedure Do I Need?</a></h2></span>
                                    by William Jervis on 03/30/15<br/>



                                    <p className="entryInfo" align="right">

                                        <a href=""
                                           className='a_link'>Comments&nbsp;(0)</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </p>

                                </div>

                            </div>
                            <div className="dayBox">
                                <div className="entryBox">
                                    <a name="staying-healthy-this-holiday-season"
                                       id="staying-healthy-this-holiday-season"></a>
                                    <span><h2 className="postTitle"><a className='a_link'
                                        href="">Stay Healthy Over The Holiday Season</a></h2></span>
                                    by William Jervis on 12/30/14<br/>

                                    <p className="entryContent"></p>

                                    <p className="entryInfo" align="right">

                                        <a href="" className='a_link'
                                           >Comments&nbsp;(0)</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </p>

                                </div>

                            </div>
                            <div className="dayBox">
                                <div className="entryBox">
                                    <span><h2 className="postTitle"><a className='a_link' href=''>Get Your Face Ready For The Holidays</a></h2></span>
                                    by William Jervis on 12/11/14<br/>


                                    <p></p>

                                    <p className="entryInfo" align="right">

                                        <a className="commentsLink" href='' className='a_link'>Comments&nbsp;(0)</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </p>

                                </div>

                            </div>
                            <div className="dayBox">
                                <div className="entryBox">
                                    <a name="diets-and-exercise-can-t" id="diets-and-exercise-can-t"></a>
                                    <span><h2 className="postTitle"><a
                                        href="" className='a_link'>Diets and Exercise Can't Spot Reduce</a></h2></span>
                                    by William Jervis on 11/07/14<br/>



                                    <p className="entryInfo" align="right">

                                        <a href="" className='a_link'
                                           >Comments&nbsp;(0)</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </p>

                                </div>

                            </div>


                        </div>
                    </div>


                    <br/><br/><br/><br/>
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
                    <br/><br/><br/><br/><br/><br/><br/>

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

export default Blog;