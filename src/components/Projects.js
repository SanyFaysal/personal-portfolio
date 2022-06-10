import React from 'react';
import gadgetsworld from '../assets/gadgets-world.png'
import biriyanihouse from '../assets/biriyanihouse (2).png'
import bicycleghor from '../assets/bicycleghor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight, faMars } from '@fortawesome/free-solid-svg-icons';
const Projects = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-16'>My Latest Projects</h2>
            <div className='grid grid-cols-1  lg:grid-cols-3 lg:w-[90%] xl:w-[90%] mx-auto gap-5'>
                <div class="card shadow-xl  bg-slate-800 mx-auto hover:bg-slate-600">
                    <figure><img src={bicycleghor} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            BiCycle Ghor
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>
                            <p>Features:</p>
                            <p>
                                <FontAwesomeIcon icon={faCircleRight} className='text-success'></FontAwesomeIcon> Single page responsible application
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faCircleRight} className='text-success'></FontAwesomeIcon> Authentication
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faCircleRight} className='text-success'></FontAwesomeIcon> Individual system for user and admin
                            </p>
                        </p>
                        <div class="card-actions justify-end">
                            <a href='https://github.com/SanyFaysal/manufacturer-website' class="btn btn-sm">Source Code</a>
                            <a href='https://manufacturer-website-d96c5.web.app/' class="btn btn-sm">Live Site</a>
                        </div>
                    </div>
                </div>
                <div class="card  shadow-xl bg-slate-800 hover:bg-slate-600">
                    <figure><img src={gadgetsworld} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Gadgets World
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>
                            <p>Features:</p>
                            <p>
                                <FontAwesomeIcon icon={faCircleRight} className='text-success'></FontAwesomeIcon> Single page responsible application
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faCircleRight} className='text-success'></FontAwesomeIcon> Product quantity Management
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faCircleRight} className='text-success'></FontAwesomeIcon> Authentication
                            </p>
                        </p>
                        <div class="card-actions justify-end">
                            <a href='https://github.com/SanyFaysal/warehouse-management-website-client' class="btn btn-sm">Source Code</a>
                            <a href='https://warehouse-management-a6f08.web.app/home' class="btn btn-sm">Live Site</a>
                        </div>
                    </div>
                </div>
                <div class="card  shadow-xl bg-slate-800 hover:bg-slate-600">
                    <figure><img src={biriyanihouse} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Biriyani House
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>
                            <p>Features:</p>
                            <p>
                                <FontAwesomeIcon icon={faCircleRight} className='text-success'></FontAwesomeIcon> Single page responsible application
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faCircleRight} className='text-success'></FontAwesomeIcon> Product Review
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faCircleRight} className='text-success'></FontAwesomeIcon> Product Analysis by Chart
                            </p>
                        </p>
                        <div class="card-actions justify-end">
                            <a href='https://github.com/SanyFaysal/product-analysis-website' class="btn btn-sm">Source Code</a>
                            <a href='https://sparkling-tapioca-bbf2a0.netlify.app/home' class="btn btn-sm">Live Site</a>
                        </div>
                    </div>
                </div>
            </div>
            <button className='block mx-auto btn my-5 btn-sm btn-success'>See More</button>
        </div>
    );
};

export default Projects;