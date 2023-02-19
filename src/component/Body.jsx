import React from 'react'

const Body = () => {
  return (
    <div>
      <section class="header">
        <nav class="navbar navbar-expand-lg  py-2 ">
          <a class="navbar-brand un" href="#">
            WARES-PRO.
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fas fa-bars bar-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto mx-4">
              <li class="nav-item dropdown ">
                <a
                  class="nav-link dropdown-toggle font-weight-bold  "
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services
                </a>
                <div
                  class="dropdown-menu  font-weight-bold"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item un" href="#">
                    custom software devlopment
                  </a>
                  <a class="dropdown-item un" href="#">
                    website development services
                  </a>
                  <a class="dropdown-item un" href="#">
                    database analytic services
                  </a>
                </div>
              </li>
              <li class="nav-item active font-weight-bold">
                <a class="nav-link un" href="#">
                  our work<span class="sr-only">(current)</span>
                </a>
              </li>

              <li class="nav-item font-weight-bold">
                <a class="nav-link un" href="#about">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div class="  header-text ">
          <div class=" col-sm-6 col-md-12 col-lg-12   ">
            <h1 class="ml-4">WARES-PRO. </h1>
            <span>SOFTWARE AND WEB DESIGN COMPANY</span>
          </div>
          <a href="#about" class="btn head-button un ">
            CONTACT US
          </a>
        </div>
      </section>
    </div>
  )
}

export default Body
