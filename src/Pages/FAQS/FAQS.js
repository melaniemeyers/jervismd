import './FAQS.css'
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

function FAQS() {
    return (
        <div id='faqs'>
            <Header/>
            <background>
                <img src={background_heading}/>
                <img src={background_top}/>
                <img src={background_repeat} className='repeat_faqs'/>
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
                    <p className='heading_p_about'>FAQS</p>
                    <br/>
                    <br/>
                    <h3>
                        <bold>Enhance your looks with Cosmetic Surgery- Frequently Asked Questions
                        </bold>
                    </h3>
                    <br/>
                    <br/>
                    <bluebox>
                        <p>

                            <blue><b>
                                <a className='a_link' href='/about_doctor'>Dr. Jervis</a> understands the need for good
                                communication … we strive to understand your
                                concerns so you get the best outcome possible.</b>
                                <br/>
                                <br/>
                                From the first time you walk through our doors, we'll make sure you are fully educated
                                on the latest procedures, options, possible complications, final outcomes and ease any
                                concerns.
                            </blue>

                        </p>
                    </bluebox>

                    <ul>
                        <li><a href='#id1' className='a_link_cosmic'>I want to look like myself after surgery</a></li>
                        <li><a href='#id2' className='a_link_cosmic'>Will those close to me be supportive of my decision
                            to
                            have cosmetic surgery? Who should I tell?</a></li>
                        <li><a href='#id3' className='a_link_cosmic'>Is my plastic surgeon qualified?</a></li>
                        <li><a href='#id4' className='a_link_cosmic'>Safety concerns</a></li>
                        <li><a href='#id5' className='a_link_cosmic'>I'm thinking about having a procedure, where do I
                            begin?</a></li>
                        <li><a href='#id6' className='a_link_cosmic'>After my surgery, when can I go home? When do I
                            return?</a></li>
                        <li><a href='#id7' className='a_link_cosmic'>How long will I have bruising and swelling?</a>
                        </li>
                        <li><a href='#id8' className='a_link_cosmic'>How much pain will I have after cosmetic
                            surgery?</a>
                        </li>
                        <li><a href='#id9' className='a_link_cosmic'>How much time should I take off from work?</a></li>
                        <li><a href='#id10' className='a_link_cosmic'>When can I exercise after my plastic surgery
                            procedure?</a></li>
                        <li><a href='#id11' className='a_link_cosmic'>I want to look better but I'm not ready for any
                            'big'
                            procedures. What are my options?</a></li>
                        <li><a href='#id12' className='a_link_cosmic'>Plastic surgery cost?</a></li>
                        <li><a href='#id13' className='a_link_cosmic'>Help! I'm nervous. How can I feel more comfortable
                            with
                            decision to have surgery?</a></li>
                        <li><a href='#id14' className='a_link_cosmic'>Mammograms after a breast augmentation or breast
                            lift?</a></li>
                        <li><a href='#id15' className='a_link_cosmic'>Breast feeding after breast augmentation?</a></li>
                    </ul>
                    <div id='id1'>
                        <h4>Will I look like a better 'me' after my procedure?</h4>
                        <blue> Dr. Jervis understands that you want to look better, feel better but still be the unique
                            person you are. A facelift , brow lift or eye lid lift can give you a more rested, youthful
                            appearance. Often times acquaintances will notice a change but will be unsure what it is.
                            New hairstyle? Different makeup? Weight loss or vacation?
                        </blue>
                        <br/>
                        <br/>
                        <blue>Patients with realistic expectations don’t want to look half their age but want to look
                            refreshed and more like their ‘old self’. Dr. Jervis can help you look rejuvenated while
                            retaining your unique, individual features.
                        </blue>
                    </div>
                    <div id='id2'>
                        <h4>Will those close to me be supportive with my decision to have cosmetic surgery ?</h4>
                        <blue>While patients are happy with their outcomes, many are shocked and suprised at the
                            negative comments from those around them. Some choose to remain quiet about their choice to
                            have plastic surgery while others simply wait until after to tell a select few. While we
                            want to share our happiness with those closest to us we're oftentimes halted by the
                            reactions and judgement of our friends and family. Jealousy, guilt and anger can sometimes
                            occur. Choose carefully who you share these plans with, particularly those with negative
                            outlooks. Forgive those who for whatever reason can not back you on your choice of self
                            improvement.
                            <br/>
                            <br/>
                            The top 5 surgical procedures are:
                            <ul>
                                <li><a className='a_link'>Liposuction (usually laser assisted)</a></li>
                                <li><a className='a_link'>Breast augmentation/ breast lift</a></li>
                                <li><a className='a_link'>Abdominoplasty (Tummy Tuck)</a></li>
                                <li><a className='a_link'>Eyelid lift</a></li>
                                <li><a className='a_link'>Facelifts/necklifts</a></li>
                            </ul>
                            <a className='a_link'>Botox (& other neuromodulators), Fillers (Juvederm, Radiesse, Belotera
                                or your own
                                fat), laser resurfacing (Cutera or Portrait Plasma)and chemical peels (Apeele)</a> are
                            good
                            choices for those who want to make minor improvements but are not ready for 'surgery'.
                            <br/>
                            <br/>
                            Take <a className='a_link'>liposuction</a> for example, or a <a className='a_link'>tummy
                                tuck</a>, some may think surgery is 'cheating'. Not
                            taking into account that we all have different body types and different ways of carrying fat
                            deposits that may or may not respond to exercise. Diet and exercise are important to our
                            health, but some are genetically programmed to struggle more than others. Outer thighs,
                            tummys and hip regions can shrink with exercise but they can still be 'out of proportion'
                            with the rest of you.
                            <br/>
                            <br/>
                            We can be very aware and critical of our 'problem areas'. Things that drive us crazy some
                            may not see as a problem at all. Enhancement is a personal choice just like getting a good
                            haircut or putting on makeup. We look better so we feel better about ourselves. No one can
                            make that decision but you. Some may try to change your mind, they love you just the way you
                            are. That's wonderful but only you know how you feel. Be understanding, be selective of who
                            you tell and know that cosmetic surgery should help you feel better about yourself; if it
                            pleases others as well, so much the better.
                        </blue>
                    </div>
                    <div id='id3'>
                        <h4>Is my plastic surgeon qualified?</h4>
                        <blue>Dr Jervis is certified by the American Board of Plastic Surgery, a member of the American
                            Society of Plastic Surgeons, the American Society for Aesthetic Plastic Surgery, the
                            International Society of Aesthetic Plastic Surgery, and many other organizations that
                            require explicit training, experience, ongoing education and adherence to specific codes of
                            ethics.
                        </blue>
                    </div>
                    <div id='id4'>
                        <h4>Safety concerns?</h4>
                        <blue>It's normal to be concerned, cosmetic surgery isn't something the average person does very
                            often. Surgery in general can be scary but the majority of patients are put at ease after
                            their <a href='consultations' className='a_link'>consultation</a> with Dr. Jervis. <a
                                className='a_link'>Safety</a> is
                            a top priority, we employee highly skilled
                            anesthesiologists from John Muir Hospital, all MD's too. Dr. Jervis will take his time
                            explaining risks, expected outcomes and answer any questions or concerns you may have at
                            your consultation and pre operative appointment. Also know that your loved ones are welcome
                            to come in and discuss their concerns as well. We want to make this process as safe and
                            comfortable for you as possible.
                        </blue>
                    </div>
                    <div id='id5'>
                        <h4>I'm thinking about having a procedure, where do I begin?</h4>
                        <blue>Start with an <a href='consultations' className='a_link'>in depth consultation with Dr.
                            Jervis</a>. He will explain procedures, answer questions, show his before and after photos
                            of past
                            patients who’ve had similar cosmetic surgery procedures and go over possible complications.
                            He’ll be able to educate you to about down time, how long you'll be unable to exercise, pain
                            management, etc. Most of our patients have one or more consultations followed by a thorough
                            preoperative assessment with Dr Jervis before undergoing any cosmetic surgical procedures.
                            You will be provided with detailed written instructions including specific details about
                            preparation, perscriptions, medications to avoid, follow up appointments and aftercare.
                        </blue>
                    </div>
                    <div id='id6'>
                        <h4>After my plastic surgery, when can I go home? When do I come back?</h4>
                        <blue>You will be released approximately 1-3 hours after your procedure. The majority of our
                            cosmetic surgical procedures are done as 'outpatient' at our <a className='a_link'
                                                                                            href='/aaaasf'> fully
                                accredited AAAASF Surgery
                                Center</a>. Larger procedures or procedures for those with serious medical issues may be
                            done at
                            a local hospital such as John Muir. Because you will go home after receiving sedation, you
                            will need to make arrangements for a responsible adult to drive you home, to stay with you
                            overnight and to drive you to our office for your first postoperative appointment. We
                            normally see our clients 2 days after the procedure altho Dr. Jervis usually calls to his
                            client or caregiver late the day of the procedure.
                        </blue>
                    </div>
                    <div id='id7'>
                        <h4>How long will I have bruising and swelling? </h4>
                        <blue>Swelling and bruising is the bodies way of healing. People vary but for most plastic
                            surgery procedures, bruising and swelling begin to fade in approximately 1-2 weeks. Complete
                            fading of bruises may take longer depending on where and how much work was done in that
                            area. Makeup can be used after a few days to cover facial bruising. Swelling may take two to
                            four weeks depending on the type of procedure done. Liposuction clients may need up to 6
                            months for complete resolution.
                        </blue>
                    </div>
                    <div id='id8'>
                        <h4>How much pain will I have after cosmetic surgery?</h4>
                        <blue>We want you to be as pain free as possible but after any plastic surgery procedure, some
                            discomfort can be expected. People vary in their level of discomfort and tolerance. Some
                            don't require any medications at all. Dr. Jervis does write prescriptions for pain
                            medication in the event it's needed. Patients sometimes use prescription medications a few
                            days after surgery and then change to Tylenol for a few more days. During your preoperative
                            appointment, Dr Jervis will explain what you can expect, go over any allergies to
                            medications and advise you on activity levels while you recuperate.
                        </blue>
                    </div>
                    <div id='id9'>
                        <h4>How much time should I take off from work?</h4>
                        <blue>Work restrictions vary with the type of work as well as the type of procedure. Generally
                            one week to 10 days for minor surgery and 2-3 weeks for multiple procedures or extensive
                            plastic surgery. Disability is covered for cosmetic procedures.
                        </blue>
                    </div>
                    <div id='id10'>
                        <h4>When can I exercise after my plastic surgery procedure?</h4>
                        <blue>Aerobic and anaerobic exercises that elevate pulse and blood pressure should be avoided
                            for a week or longer. Sam for bending, lifting and straining. Excess activity could cause
                            bleeding resulting in a hematoma that could require a return to surgery, or even wound
                            disruption. You are welcome to ask any question before, during or after any procedure.
                        </blue>
                    </div>
                    <div id='id11'>
                        <h4>I want to look better but I'm just not ready for any 'big' procedures. Is there anything I
                            can do? </h4>
                        <blue>Little improvements can add up to big improvements. <a className='a_link'>Xeomin, Botox,
                            Facial fillers</a>,
                            Portrait Plasma, and chemical peels are just some of what we can do help you look younger,
                            more rested.
                        </blue>
                    </div>
                    <div id='id12'>
                        <h4>Plastic surgery cost?</h4>
                        <blue>People have different body types, budgets and expectations. Few prices are written in
                            stone until we meet with the patient. Dr Jervis prefers to customize his fee by extent,
                            duration, and complexity of the procedure(s). During your <a href='consultations'
                                                                                         className='a_link'>consultation</a>,
                            the fees will be
                            discussed in detail. Generally if more than one procedure is done at the same time,
                            discounts are offered.
                            <br/>
                            <br/>
                            Some procedures have fixed prices such as Breast Augmentation; others, such as liposuction,
                            depend on the time in procedure so exact prices can only be determined during the
                            consultation. Likewise there are several degrees of facelift which make the fees vary.
                            <br/>
                            <br/>
                            We are happy to discuss our fees for plastic surgery procedures with you at any time. To set
                            up a <a href='consultations' className='a_link'>consultation</a> with Dr Jervis, please call
                            us
                            at <b>925-937-7100</b> or <a href='http://www.msn.com/' className='a_link'>email us</a>. At
                            that time,
                            we can also share information on <a className='a_link'>financing plans</a>.

                        </blue>
                    </div>
                    <div id='id13'>
                        <h4>Help! I'm nervous. What can I do to feel more comfortable with decision to have a
                            procedure?</h4>
                        <blue>
                            It's ok to be nervous. One of the best ways to deal with nervousness is to <a
                            href='consultations' className='a_link'>educate
                            yourself</a>
                            . You may want a 2nd <a href='consultations' className='a_link'>consultation</a> with Dr
                            Jervis
                            to make sure all your questions and
                            concerns have been answered. An educated patient knows when and if the time is right to
                            proceed. We also have past patients who can call and give you insight on the entire process
                            in 'laymans terms'.
                        </blue>
                    </div>
                    <div id='id14'>
                        <h4>Mammograms after a breast augmentation or breast lift? </h4>
                        <blue>
                            Silicone or saline breast implants should not keep you from having a mammogram but the
                            ordering doctor should know you have implants and whether they are in front of or behind the
                            pectoral major muscle.
                        </blue>
                    </div>
                    <div id='id15'>
                        <h4>Breast feeding after breast augmentation?</h4>
                        <blue>
                            As breast implants are most commonly placed behind the pectoral muscle, a silicone or saline
                            implant will not keep you from normal breast feeding as the implant simply pushes your
                            natural breast tissue forward. This should be a wonderful time to bond with the newest
                            member of your family.
                            <br/>
                            <br/>
                            I personally do not cut through the mammary in placing the implants, the opening is between
                            the skin and the breast glands to the muscle layer. Most surgeons cut directly through the
                            breast tissue which could result in diminished sensation and reduce the ability to breast
                            feed.
                        </blue>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <immediate>
                        <p>
                            <blue>Please let us know if you have any other questions or concerns we can help with. While
                                cosmetic surgery is serious business, it should still be fun. Let Dr Jervis educate you
                                about all you need to know in making your plastic surgery decision.
                            </blue>
                        </p>
                        <br/>
                        <h3>
                            <bold>
                                <blue>Call us at 925-937-7100 or <a className='a_link' href='http://www.msn.com/'>email
                                    us</a></blue>
                            </bold>
                        </h3>
                    </immediate>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
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

export default FAQS;