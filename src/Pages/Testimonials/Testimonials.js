import './Testimonials.css'
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

function Testimonials() {
    return (
        <div id='testimonials'>
            <Header/>
            <background>
                <img src={background_heading} alt=""/>
                <img src={background_top} alt=""/>
                <img src={background_repeat} className='repeat-testimonials' alt=""/>
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

                <div className='column_2'>
                    <p className='heading_p_about'>What Our Patients Are Saying</p>
                    <p className='heading_1'>From Liposuction to Breast Augmentation: Enhance Your Image with Cosmetic
                        Surgery</p>
                    <br/>
                    <br/>
                    <div1>
                        It was in 1985 when I first heard of <a href='about_doctor' className='a_link'>Dr. Jervis</a>.
                        At the time
                        he was known as “the regional
                        cosmetic breast expert." Several years later and after the birth of my daughter, <b>I NEEDED
                        an <a className='a_link' href='#!'>augmentation</a> </b>. So naturally (and filled with curiousity) I had
                        to go to this renowned breast
                        augmentation wizard.
                        <br/>
                        <br/>
                        On the day of my appt I was nervous. What was I to expect? What would he ask? How bad were my
                        saggy boobs? Could they ever be "normal"? When I walked into Dr Jervis's office I was met with a
                        soothing calming serene environment. Poking from behind a beautiful stained glass partition his
                        receptionist greeted me with a warm comforting smile. I felt welcomed.
                        <br/>
                        <br/>
                        Now, in the exam room with the good Dr. I soon realized I was in the company of a highly
                        skilled, knowledgeable, informative medical professional. Whose first priority was ...me! He
                        proceeded to ask me precise questions while always maintaining an exemplary bedside manner. Upon
                        the conclusion of our visit, <a href='about_doctor' className='a_link'>Dr. Jervis</a> suggested
                        I research "other" plastic surgeons and obtain
                        several opinions.
                        <br/>
                        <br/>
                        Needless to say there was no need to waste time researching the "others".
                        I knew I had the BEST doctor ....my doctor. <b>Dr. William Jervis.</b>
                        <br/>
                        <br/>
                        Today, Dr. Jervis is still my go-to guy. He's always there to let me know I’m "still too young
                        for this" or "you don’t need that"....The only difference now is I no longer refer him as the
                        "augment doctor?, I call him the "best doctor?! I call him my doctor....Dr. J
                        <br/>
                        <br/>
                        Sincerely, Sharon D.T.
                    </div1>
                    <div2>
                        Dr. Jervis and staff,
                        You guys made my visit there so comfortable. Each and every one of you are very dedicated and
                        professional. I'm enjoying my new 'look'!
                    </div2>
                    <div1>
                        "Thank you so much, words can't express how I feel inside!"
                    </div1>
                    <div3>
                        Dr. Jervis,
                        <br/>
                        <br/>
                        Neither a card nor a gift can ever let you know how much you have made me so grateful for what
                        you did for me. When I decided to have this surgery, I was very scared but also excited at the
                        same time! I did a lot of research on everything and that is how I came to your office! I heard
                        nothing but great things about your experience and knowledge when it came to being a plastic
                        surgeon! I was very pleased and at ease from my very first visit with you! You not only made me
                        feel very comfortable but I felt a sense of heartfelt understanding on what I was feeling on my
                        end. My great concern was more the surgery aspect of the procedure but now realize that it was
                        the aftermath that was the hard part! I was so afraid of being put under anesthesia and the
                        complications of something going wrong from that, and looking back I don't even remember being
                        put to sleep! I know I am going thru stages of my breasts changing after the surgery but I still
                        think they are beautiful even at this stage."
                        <br/>
                        <br/>
                        "I went into the bathroom one day and I glanced in the mirror and came out crying. Chris asked
                        me what was wrong and I told him, "I've never seen my breasts look so good.." He started to cry
                        with me and said that he was happy I was crying with joy than sadness like I use to when I would
                        look at my breasts. Dr. Jervis, you have made me feel like a whole woman and very beautiful
                        inside and out and nothing in this world can ever describe what you have given me from being the
                        person whom you are today! I am only one person and I know you have many patients, but for
                        everyone who walks out of your office feeling this very same way, then you should know that you
                        have forever made a difference in that person's life in the most positive way. Thank you again
                        for all you have done for me!"
                    </div3>
                    <div4>
                        Dr. Jervis,<br/>
                        When I look in the mirror now at the new me, I still can't believe it! There are not many
                        doctors that could have made me feel so relaxed and comfortable about the surgery as you have.
                        Thanks again for your encouragement, support, skill and sense of humor! I really am jumping for
                        joy!! Thanks so much!
                    </div4>
                    <div5>
                        Thank you for making me feel pretty! I truly appreciate your time, expertise and artistic
                        talent. Your gift of 'mini repairs' means so much to me-but most of all, your care and concern.
                    </div5>
                    <div6>
                        Dear Dr Jervis,<br/>
                        I want to thank you again for my body! I really didn't realize how good it looked! I knew it was
                        much better, I was also feeling better. But when I saw our pictures from Mexico, WOW!! I am even
                        happier and wanted to not only tell you but show you (photos enclosed).
                        <br/><br/>
                        Thanks again, Love S.
                    </div6>
                    <div1>
                        Dear Dr. Jervis,<br/>
                        I wanted to send you a note to thank you for the precise job you did on my breast augmentation.
                        I have been telling everyone what a great job you did. I have received many nice (and some dirty
                        but nice) compliments which makes me feel good after all I went through to get them. I can't get
                        over the fact of exactly how many cc's you knew to use for them to come out perfectly even and
                        the perfect size! It boggles my mind. How outstanding your work is and your patients are a
                        testimony to that. I have to admit though, I was not emotionally prepared in the beginning for
                        all that I was about to go through (it didn't help with the stress of the wedding). I hated my
                        boobs and didn't like you too much for the first month or so!! LOL It was probably one of the
                        toughest times of my life. But its all behind me and I love my boobies and I show them off on a
                        regular basis! ha, ha
                        <br/>Thank you! p.s. They fit perfectly in my wedding dress!
                    </div1>
                    <div3>
                        Dr. Jervis,<br/><br/>
                        Thank you for an excellent <a className='a_link' href='#!'> boob job!</a> They are perfect! I am so
                        thrilled and absolutely happy to have something to put in a bra! In fact, going to Victoria
                        Secrets today and buying 6 new bras (2 of them D cups!) was a dream come true! You and your
                        staff have been wonderful, encouraging, positive and very complimentary of your professional
                        skills. I felt I was in above excellent care the whole time.
                        <br/>Thank you, thank you!
                    </div3>
                    <div1>
                        Dr. Jervis,<br/>
                        I wanted to thank you for your care and follow up after my surgery. You really went above and
                        beyond the call of duty to ensure that I was well cared for and stable enough to return home to
                        my husbands care.
                        <br/><b>Thank you!</b>
                    </div1>
                    <div4>
                        <a href='/about_doctor' className='a_link'>Dear Dr. Jervis</a>,<br/>
                        Once again, you have my deepest gratitude. Your understanding means so much to me. You can't
                        ever retire as no one could ever replace your artistic talent, skill and TLC.
                        <br/><b>You're the best!</b>
                    </div4>
                    <div2>
                        "Dr. William,<br/>
                        Daniel and I have known you for 20 years now. I must say that you are by far the most kind and
                        generous doctor we know. I really appreciate all you have done for me! Thank you very much
                        always."
                    </div2>
                    <div5>
                        Thank you for your care and concern. The frequent phone calls assured me I was never alone.
                        Driving to the office the morning of the 7th, I was scared to death. But once I got to the
                        office, the staff made me feel everything was going to be alright. And it was. Dr. Jervis, when
                        you called me from Las Vegas to check on me, I thought <b>'Wow, he's one of a kind!'</b>. Thanks
                        so
                        much. You're all so very special!
                    </div5>
                    <div4>
                        Dr. Jervis & Staff,<br/>
                        I just wanted to take this time to say thank you for all your wonderful care I received from you
                        and your staff. Having surgery can be a traumatic decision for the patient, however, your
                        professionalism and expertise demonstrated by you and your staff made my decision easy and very
                        comfortable. I appreciated the wonderful care I once again received in your office. Thanks so
                        much!
                    </div4>
                    <div2>
                        Dr. Jervis,<br/>
                        Thank you for the excellent work you did on my liposuction procedure. Other than some residual
                        swelling, I haven't felt this lean in years. Best wishes for a Merry Christmas and a Happy New
                        Year!
                    </div2>


                    <br/><br/>
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
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Testimonials;