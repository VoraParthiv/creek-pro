import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Slider = () => {
    return (
        <>
            <section className='slider-section'>
                <OwlCarousel className='owl-theme' loop margin={0} items={1} dots={false} nav={true}>
                    <div className="items">
                        <div className="items-img">
                            <img src={require('./img/slider-3.jpg')} alt="" />
                        </div>
                        <div className="items-img-content">
                            <div className="container-1">
                                <div className="row justify-content-end">
                                    <div className="col-lg-10 col-md-6 col-sm-6">
                                        <h1>YOU DREAM IT, WE BUILD IT</h1>
                                        <h5>THIS YEAR WE TOOK MORE COMPLEX CONSTRUCTIONS THAN EVER BEFORE...</h5>
                                        <button>
                                            <a href="#">SEE OUR RECENT PROJECTS</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="items items-2">
                        <div className="items-img">
                            <img src={require('./img/slider-1.jpg')} alt="" />
                        </div>
                        <div className="items-img-content">
                            <div className="container-1">
                                <div className="row justify-content-start">
                                    <div className="col-lg-10 col-md-6 col-sm-6">
                                        <h1>FROM START TO FINISH</h1>
                                        <h5>SEE HOW A 10-STORIES TOWER IS BEING BUILT, IN A TIME-LAPSE!</h5>
                                        <button className='m-0 mt-5'>
                                            <a href="#">SEE OUR RECENT PROJECTS</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="items items-3">
                        <div className="items-img">
                            <img src={require('./img/slider-2.jpg')} alt="" />
                        </div>
                        <div className="items-img-content">
                            <div className="container-1">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10 col-md-6 col-sm-6 text-center">
                                        <h1 className='text-center'>SUMMER DISCOUNTS</h1>
                                        <h5 className='text-center'>SUMMER DISCOUNTS ON BIG CONSTRUCTION PROJECTS!</h5>
                                        <button className='m-0 mt-5'>
                                            <a href="#">SEE OUR RECENT PROJECTS</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </section>

            <section className='bg-images'>
                <div className="container-1">
                    <div className="row">
                        <div className="col-lg-9 col-sm-12">
                            <h5>FAST AND RELIABLE SERVICE FOR YOUR PROJECT!</h5>
                        </div>
                        <div className="col-lg-3 col-sm-12 d-flex justify-content-end">
                            <button>
                                <a href="#">Read More</a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Slider