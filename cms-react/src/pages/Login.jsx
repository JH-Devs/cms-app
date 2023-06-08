import React from 'react'
import Helmet from "../components/helmet/Helmet"
import {RiFacebookCircleFill} from "react-icons/ri"
import {SiGmail} from "react-icons/si"
import { Link } from 'react-router-dom'
import {BsFacebook, BsYoutube, BsInstagram, BsGithub} from "react-icons/bs"

const Login = () => {
  return (
    <Helmet title=" - Přihlášení">
            <div className='login '>
            <section className="vh-100 ">
        <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid" alt="Sample image" />
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 ">
            <form>
            <div className="form-outline mb-4">
                <input type="email"className="form-control form-control-lg"
                placeholder="Emailová adresa" />
            </div>
            <div className="form-outline mb-3">
                <input type="password"  className="form-control form-control-lg"
                placeholder="Heslo" />
            </div>

            <div className="d-flex justify-content-between align-items-center">

                <div className="form-check mb-0">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label className="form-check-label text-white" for="form2Example3">
                    Zapamatovat
                </label>
                </div>
                <Link to="#!" className="text-white text-decoration-none">Zapomenuté heslo?</Link>
            </div>

            <div className="text-center text-lg-center mt-4 pt-2">
                <button type="button" className="btn btn-lg btn_login"
                >Přihlášení</button>
            </div>

            </form>
        </div>
        </div>
    </div>
    </section>
    </div>
    </Helmet>
  )
}

export default Login