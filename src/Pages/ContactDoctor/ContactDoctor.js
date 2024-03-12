import './ContactDoctor.css'
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
import {useState} from "react";

function ContactDoctor() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comments: ''
    });
    const handleReset = () => {
        setFormData({
            ...formData,
            comments: ''
        });
    };
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform form submission actions here
        console.log(formData);
        // Reset form fields after submission
        setFormData({
            name: '',
            email: '',
            comments: ''
        });
    };


    return (
        <div id='contact_doctor'>
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
                    <h3>
                        <bold>From Liposuction to Breast Augmentation: Ask Dr. Jervis your Cosmetic Questions or book
                            an appointment!
                        </bold>
                    </h3>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="comments">Comments:</label>
                            <textarea
                                id="comments"
                                name="comments"
                                value={formData.comments}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                            <button type="button" onClick={handleReset}>Reset</button>
                        </div>
                    </form>
                    <immediate>
                        <p>
                            <blue>For more a immediate response, please call our office at:</blue>
                        </p>
                        <h3>(925) 937-7100</h3>
                    </immediate>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <immediate>
                        <h3>Whether you're looking to set up<br/> a <a className='a_link'
                                                                       href='/consultations'>consultation</a> with <a
                            className='a_link' href='/about_doctor'>Dr.
                            Jervis</a> or just<br/> have a question, <br/>we'd love to hear from you!</h3>
                    </immediate>
                    <br/>
                    <br/>
                    <br/>
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

export default ContactDoctor;