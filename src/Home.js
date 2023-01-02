function Home() {
    return (
        <>
            <section className="top-header-bgcolor">
                <div className="container-1">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="top-header-left d-flex align-items-center justify-content-between">
                                <div className="top-left-header-one d-flex align-items-center gap-3">
                                    <span><i class="fa-solid fa-location-dot"></i></span>
                                    <p className="m-0"><a href="#">Address: 4578 Marmora Road, Glasgow, D04 89GR</a></p>
                                </div>
                                <div className="top-left-header-two d-flex align-items-center gap-3">
                                    <span><i class="fa-solid fa-phone"></i></span>
                                    <p className="m-0"><a href="#">(800) 123-0045</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="top-header-right">
                                <ul className="list-unstyled m-0 d-flex gap-4 justify-content-end">
                                    <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-google-plus-g"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-vimeo-v"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bottom-header">
                <div className="container-1">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-auto">
                            <div className="logo">
                                <a href="#">
                                    <img src={require('./img/logo.png')} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-auto">
                            <nav>
                                <ul className='main_menu list-unstyled m-0 d-flex'>
                                    <li>
                                        <a href="#">home<i class="fa-solid fa-angle-down down-icon"></i></a>
                                        <ul className='sub_menu m-0'>
                                            <li><a href="#">Home variant 1</a></li>
                                            <li><a href="#">Home variant 2</a></li>
                                            <li><a href="#">Home variant 3</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">features<i class="fa-solid fa-angle-down down-icon"></i></a>
                                        <ul className='sub_menu m-0'>
                                            <li><a href="#">Headers</a></li>
                                            <li><a href="#">Footers</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">about</a></li>
                                    <li>
                                        <a href="#">services<i class="fa-solid fa-angle-down down-icon"></i></a>
                                        <ul className='sub_menu m-0'>
                                            <li><a href="#">Single Service</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">projects<i class="fa-solid fa-angle-down down-icon"></i></a>
                                        <ul className='sub_menu m-0'>
                                            <li><a href="#">Project Category</a></li>
                                            <li><a href="#">Single Projects</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">pages</a></li>
                                    <li>
                                        <a href="#">blog<i class="fa-solid fa-angle-down down-icon"></i></a>
                                        <ul className='sub_menu m-0'>
                                            <li><a href="#">Post Formats</a></li>
                                            <li><a href="#">Blog Layouts</a></li>
                                            <li><a href="#">Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">contacts</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-auto">
                            <div className="search-box">
                                <a href="#"><i class="fa-solid fa-magnifying-glass search-icon"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home