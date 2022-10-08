import React from 'react';
import mainIllustration from '../images/illustration-working.svg';

const HeroSection = () => {
    return (
        <section className={'hero-section'} >
            <div className={"content"}>
                <h1>Making things small is what I do</h1>
                <p>Small is the new big </p>
                <button>Sign up to receive news</button>
            </div>
            <div className={"main-illustration"}>
                <img src={mainIllustration} alt={""}/>
            </div>
        </section>
    )
}
export default HeroSection