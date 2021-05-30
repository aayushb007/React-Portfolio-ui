import React from 'react'

const Contact = () => {
    return (
        <>
        <div className="contact_info">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">

                        <div className="contact_info_item d-flex justify-content-start align-items-center">
                               <img src="https://img.icons8.com/office/24/000000/iphone.png" alt=""/>
                               <div className="contact_info_content">
                                   <div className="contact_info_title">
                                       Phone
                                   </div>
                                   <div className="contact_info_text">
                                       +91 635 261 4971
                                   </div>
                               </div>
                        </div>
                        <div className="contact_info_item d-flex justify-content-start align-items-center">
                               <img src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png" alt=""/>
                               <div className="contact_info_content">
                                   <div className="contact_info_title">
                                       Email
                                   </div>
                                   <div className="contact_info_text">
                                       aayushb9157@gmail.com
                                   </div>
                               </div>
                        </div>
                        <div className="contact_info_item d-flex justify-content-start align-items-center">
                               <img src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png" alt=""/>
                               <div className="contact_info_content">
                                   <div className="contact_info_title">
                                       Address
                                   </div>
                                   <div className="contact_info_text">
                                       Ahmedabad,Gujrat,India
                                   </div>
                               </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="contact_form">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="contact_form_contianer py-5">
                          <div className="contact_form_title">
                              Get in Touch  </div>
                            <form id="contact_form" >
                                <div className="contact_form_name d-flex justify-content-between">
                                    <input type="text" id="contact_form_name" className="contact_form_name input_field" placeholder="Your Name"/>
                                    <input type="email" id="contact_form_email" className="contact_form_email input_field" placeholder="Your Email"/>
                                    <input type="number" id="contact_form_phone" className="contact_form_phone input_field" placeholder="Your Phone Number"/>
                                
                                </div>
                                <div className="contact_form_text mt-4">
                                    <textarea className="text_field contact_form_message" placeholder="Your Message" id="" cols="30" rows="10"></textarea> 
                                </div>
                                <div className="contact_form_button">
                                    <button type="submit" className="button contact_submit_button">Send Message</button>
                                </div>

                            </form>
                          </div> 

                    </div>
                </div>
            </div>
        </div>
         
        </>
    )
}

export default Contact