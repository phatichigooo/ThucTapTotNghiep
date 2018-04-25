import React, { Component } from 'react';

class NewsDatail extends Component {
  render() {
    return (
      <section className="bgwhite p-t-60 p-b-25">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 p-b-80">
              <div className="p-r-50 p-r-0-lg">
                <div className="p-b-40">
                  <div className="blog-detail-img wrap-pic-w">
                    <img src="./assets/images/blog-04.jpg" alt="IMG-BLOG" />
                  </div>
                  <div className="blog-detail-txt p-t-33">
                    <h4 className="p-b-11 m-text24">
                      Black Friday Guide: Best Sales &amp; Discount Codes
                    </h4>
                    <div className="s-text8 flex-w flex-m p-b-21">
                      <span>
                        By Admin
                        <span className="m-l-3 m-r-6">|</span>
                      </span>
                      <span>
                        28 Dec, 2018
                        <span className="m-l-3 m-r-6">|</span>
                      </span>
                      <span>
                        Cooking, Food
                        <span className="m-l-3 m-r-6">|</span>
                      </span>
                      <span>
                        8 Comments
                      </span>
                    </div>
                    <p className="p-b-25">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit amet tempor magna. Donec eros sem, porta eget leo et, varius eleifend mauris. Donec eu leo congue, faucibus quam eu, viverra mauris. Nulla consectetur lorem mi, at scelerisque metus hendrerit vitae. Proin vel magna vel neque porta ultricies non eget mauris. Suspendisse potenti.
                    </p>
                    <p className="p-b-25">
                      Aliquam faucibus scelerisque placerat. Vestibulum vel libero eu nulla varius pretium eget eu magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean dictum faucibus felis, ac vestibulum risus mollis in. Phasellus neque dolor, euismod vitae auctor eget, dignissim a felis. Etiam malesuada elit a nibh aliquam, placerat ultricies nibh dictum. Nam ut egestas velit. Pellentesque viverra tincidunt tellus. Etiam cursus, ligula id vehicula cursus, turpis mauris facilisis massa, eget tincidunt est purus et odio. Nam quis luctus libero, non posuere velit. Ut eu varius diam, eu euismod elit. Donec efficitur, neque eu consectetur consectetur, dui sem consectetur felis, vitae rutrum risus urna vel arcu. Aliquam semper ullamcorper laoreet. Sed arcu lectus, fermentum imperdiet purus eu, ornare ornare libero.
                    </p>
                  </div>
                  <div className="flex-m flex-w p-t-20">
                    <span className="s-text20 p-r-20">
                      Tags
                    </span>
                    <div className="wrap-tags flex-w">
                      <a href="#" className="tag-item">
                        Streetstyle
                      </a>
                      <a href="#" className="tag-item">
                        Crafts
                      </a>
                    </div>
                  </div>
                </div>
                {/* Leave a comment */}
                <form className="leave-comment">
                  <h4 className="m-text25 p-b-14">
                    Leave a Comment
                  </h4>
                  <p className="s-text8 p-b-40">
                    Your email address will not be published. Required fields are marked *
                  </p>
                  <textarea className="dis-block s-text7 size18 bo12 p-l-18 p-r-18 p-t-13 m-b-20" name="comment" placeholder="Comment..." defaultValue={""} />
                  <div className="bo12 of-hidden size19 m-b-20">
                    <input className="sizefull s-text7 p-l-18 p-r-18" type="text" name="name" placeholder="Name *" />
                  </div>
                  <div className="bo12 of-hidden size19 m-b-20">
                    <input className="sizefull s-text7 p-l-18 p-r-18" type="text" name="email" placeholder="Email *" />
                  </div>
                  <div className="bo12 of-hidden size19 m-b-30">
                    <input className="sizefull s-text7 p-l-18 p-r-18" type="text" name="website" placeholder="Website" />
                  </div>
                  <div className="w-size24">
                    {/* Button */}
                    <button className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                      Post Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 p-b-80">
              <div className="rightbar">
                {/* Search */}
                <div className="pos-relative bo11 of-hidden">
                  <input className="s-text7 size16 p-l-23 p-r-50" type="text" name="search-product" placeholder="Search" />
                  <button className="flex-c-m size5 ab-r-m color1 color0-hov trans-0-4">
                    <i className="fs-13 fa fa-search" aria-hidden="true" />
                  </button>
                </div>
                {/* Categories */}
                <h4 className="m-text23 p-t-56 p-b-34">
                  Categories
                </h4>
                <ul>
                  <li className="p-t-6 p-b-8 bo6">
                    <a href="#" className="s-text13 p-t-5 p-b-5">
                      Fashion
                    </a>
                  </li>
                  <li className="p-t-6 p-b-8 bo7">
                    <a href="#" className="s-text13 p-t-5 p-b-5">
                      Beauty
                    </a>
                  </li>
                  <li className="p-t-6 p-b-8 bo7">
                    <a href="#" className="s-text13 p-t-5 p-b-5">
                      Street Style
                    </a>
                  </li>
                  <li className="p-t-6 p-b-8 bo7">
                    <a href="#" className="s-text13 p-t-5 p-b-5">
                      Life Style
                    </a>
                  </li>
                  <li className="p-t-6 p-b-8 bo7">
                    <a href="#" className="s-text13 p-t-5 p-b-5">
                      DIY &amp; Crafts
                    </a>
                  </li>
                </ul>
                {/* Featured Products */}
                <h4 className="m-text23 p-t-65 p-b-34">
                  Featured Products
                </h4>
                <ul className="bgwhite">
                  <li className="flex-w p-b-20">
                    <a href="product-detail.html" className="dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4">
                      <img src="./assets/images/item-16.jpg" alt="IMG-PRODUCT" />
                    </a>
                    <div className="w-size23 p-t-5">
                      <a href="product-detail.html" className="s-text20">
                        White Shirt With Pleat Detail Back
                      </a>
                      <span className="dis-block s-text17 p-t-6">
                        $19.00
                      </span>
                    </div>
                  </li>
                  <li className="flex-w p-b-20">
                    <a href="product-detail.html" className="dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4">
                      <img src="./assets/images/item-17.jpg" alt="IMG-PRODUCT" />
                    </a>
                    <div className="w-size23 p-t-5">
                      <a href="product-detail.html" className="s-text20">
                        Converse All Star Hi Black Canvas
                      </a>
                      <span className="dis-block s-text17 p-t-6">
                        $39.00
                      </span>
                    </div>
                  </li>
                  <li className="flex-w p-b-20">
                    <a href="product-detail.html" className="dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4">
                      <img src="./assets/images/item-08.jpg" alt="IMG-PRODUCT" />
                    </a>
                    <div className="w-size23 p-t-5">
                      <a href="product-detail.html" className="s-text20">
                        Nixon Porter Leather Watch In Tan
                      </a>
                      <span className="dis-block s-text17 p-t-6">
                        $17.00
                      </span>
                    </div>
                  </li>
                  <li className="flex-w p-b-20">
                    <a href="product-detail.html" className="dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4">
                      <img src="./assets/images/item-03.jpg" alt="IMG-PRODUCT" />
                    </a>
                    <div className="w-size23 p-t-5">
                      <a href="product-detail.html" className="s-text20">
                        Denim jacket blue
                      </a>
                      <span className="dis-block s-text17 p-t-6">
                        $39.00
                      </span>
                    </div>
                  </li>
                  <li className="flex-w p-b-20">
                    <a href="product-detail.html" className="dis-block wrap-pic-w w-size22 m-r-20 trans-0-4 hov4">
                      <img src="./assets/images/item-05.jpg" alt="IMG-PRODUCT" />
                    </a>
                    <div className="w-size23 p-t-5">
                      <a href="product-detail.html" className="s-text20">
                        Nixon Porter Leather Watch In Tan
                      </a>
                      <span className="dis-block s-text17 p-t-6">
                        $17.00
                      </span>
                    </div>
                  </li>
                </ul>
                {/* Archive */}
                <h4 className="m-text23 p-t-50 p-b-16">
                  Archive
                </h4>
                <ul>
                  <li className="flex-sb-m">
                    <a href="#" className="s-text13 p-t-5 p-b-5">
                      July 2018
                    </a>
                    <span className="s-text13">
                      (9)
                    </span>
                  </li>
                  <li className="flex-sb-m">
                    <a href="#" className="s-text13 p-t-5 p-b-5">
                      June 2018
                    </a>
                    <span className="s-text13">
                      (39)
                    </span>
                  </li>
                  <li className="flex-sb-m">
                    <a href="#" className="s-text13 p-t-5 p-b-5">
                      May 2018
                    </a>
                    <span className="s-text13">
                      (29)
                    </span>
                  </li>
                  <li className="flex-sb-m">
                    <a href="#" className="s-text13 p-t-5 p-b-5">
                      April  2018
                    </a>
                    <span className="s-text13">
                      (35)
                    </span>
                  </li>
                  <li className="flex-sb-m">
                    <a href="#" className="s-text13 p-t-5 p-b-5">
                      March 2018
                    </a>
                    <span className="s-text13">
                      (22)
                    </span>
                  </li>
                  <li className="flex-sb-m">
                    <a href="#" className="s-text13 p-t-5 p-b-5">
                      February 2018
                    </a>
                    <span className="s-text13">
                      (32)
                    </span>
                  </li>
                  <li className="flex-sb-m">
                    <a href="#" className="s-text13 p-t-5 p-b-5">
                      January 2018
                    </a>
                    <span className="s-text13">
                      (21)
                    </span>
                  </li>
                  <li className="flex-sb-m">
                    <a href="#" className="s-text13 p-t-5 p-b-5">
                      December 2017
                    </a>
                    <span className="s-text13">
                      (26)
                    </span>
                  </li>
                </ul>
                {/* Tags */}
                <h4 className="m-text23 p-t-50 p-b-25">
                  Tags
                </h4>
                <div className="wrap-tags flex-w">
                  <a href="#" className="tag-item">
                    Fashion
                  </a>
                  <a href="#" className="tag-item">
                    Lifestyle
                  </a>
                  <a href="#" className="tag-item">
                    Denim
                  </a>
                  <a href="#" className="tag-item">
                    Streetstyle
                  </a>
                  <a href="#" className="tag-item">
                    Crafts
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    );
  }
}
export default NewsDatail;
