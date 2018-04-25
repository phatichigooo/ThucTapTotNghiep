import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import MenuDeskTops from './../Menu/MenuDeskTops';


class Contact extends Component {
  render() {
    return (
      <div>
       
        <div className="tittle-agileinfo">
          <h3>Liên Hệ</h3>
        </div>
        <section className="bgwhite p-t-66 p-b-60">
          <div className="container">
            <div className="row">
              <div className="col-md-6 p-b-30">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.801804077126!2d106.67778186418279!3d10.826474261229798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528fc4f89b305%3A0xd361311da0eaa451!2zTmfDoyBzw6F1IEfDsiBW4bqlcA!5e0!3m2!1svi!2s!4v1523533822985" width={550} height={450} frameBorder={0} style={{border: '1px solid #ccc'}}/>   
              
              </div>
              <div className="col-md-6 p-b-30">
                <form className="leave-comment">
                  <h4 className="m-text26 p-b-36 p-t-15">
                    Hãy Gửi Mọi Thắc Mắc Đến Chúng Tôi
                  </h4>
                  <div className="bo4 of-hidden size15 m-b-20" >
                    <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="name" placeholder="Full Name" />
                  </div>
                  <div className="bo4 of-hidden size15 m-b-20">
                    <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="phone-number" placeholder="Phone Number" />
                  </div>
                  <div className="bo4 of-hidden size15 m-b-20">
                    <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="email" placeholder="Email Address" />
                  </div>
                  <textarea className="dis-block s-text7 size20 bo4 p-l-22 p-r-22 p-t-13 m-b-20" name="message" placeholder="Message" defaultValue={""} />
                  <div className="w-size25">
                    {/* Button */}
                    <button className="flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div> 
    );
  }
}
export default Contact;
