import React from 'react'
import './Home.css'
import { Button } from '../../../Button';
import { Link } from 'react-router-dom';

import { Icon, InlineIcon } from '@iconify/react';
import chevronCompactDown from '@iconify/icons-bi/chevron-compact-down';

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="wrapper">
                    <div className="row">
                        <div className="col">
                            <div className="text-wrapper">
                                <div className="greetings">
                                    Hello, i'm <b>Rayhan</b>
                                    <br/>
                                    Welcome to my portfolio
                                </div>
                                <p className="quotes">
                                Do something impactful, whether it’s good or better
                                </p>
                                <Button>
                                    download cv
                                </Button>
                            </div>
                        </div>

                        <div className="col">
                            <div className="icons-container">
                                <img src="img/icons/tw.svg" alt="instagram"/>
                                <img src="img/icons/ig.svg" alt="instagram"/>
                                <img src="img/icons/in.svg" alt="instagram"/>
                            </div>
                            <div className="img-wrapper">
                                <img className="img" src="img/main1.svg" alt="main"/>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{margin: "50px 0 0 0"}}>
                        <div className="titles">
                            <h1>
                                Front-End Developer
                            </h1>
                            <h1>
                                UI/UX Designer
                            </h1>
                            <h1>
                                Graphic Designer
                            </h1>
                        </div>
                        <div className="arrow-container">
                            <img className="polygon" src="img/icons/polygon.svg" alt="polygon" />
                            <Link to='/' className="arrow">
                                See More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
