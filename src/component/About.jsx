import React from 'react'

const About = () => {
  return (
    <div>
      <section id="about">
        <div class="container-fluid ">
          <div class="row sang">
            <div class="col my-4">
              <div class="heading-text text-center">
                <h5>have a project in mind?</h5>
                <h1>we will like to hear from you</h1>
                <a href="http://" class="btn mb-5">
                  {' '}
                  contact us
                </a>
              </div>
            </div>
          </div>

          <div class="row bang ">
            <div class="col">
              <ul class="icon-list text-center ">
                <li>
                  <a href="http://">
                    <i class="fab fa-facebook-f icon-item"></i>
                  </a>
                </li>
                <li>
                  <a href="http://">
                    <i class="fab fa-twitter icon-item"></i>
                  </a>
                </li>
                <li>
                  <a href="http://">
                    <i class="fab fa-instagram icon-item"></i>
                  </a>
                </li>
                <li>
                  <a href="http://">
                    <i class="fab fa-linkedin icon-item"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="row dang mt-3">
            <div class="col-xs-12 col-md-6 col-lg-3">
              <h3>our address</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                asperiores at, nobis labore placeat veritatis?
              </p>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-3">
              <h3>email and telephone no</h3>
              <p>
                badboy@gmail.com <span>tel-no 08063638837</span>{' '}
              </p>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-3">
              <h3>our story</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                ipsam!
              </p>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-3">
              <h3>our sector</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                dolores magni amet voluptate consectetur explicabo.
              </p>
            </div>
          </div>

          <div class="row">
            <h5></h5>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
