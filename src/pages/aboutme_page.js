import avatar from '../assets/images/myavatar.jpg';
import './aboutme_page.css';

export default function AboutMe() {
    const platformStats = [
        "Unity = Good",
        "Game Maker = Intermadiate",
        "React = Basics",
        "Flutter = Basics",
        
        "",
    ];
    const languageStats = [
        "C# = Intermediate",
        "C++ = Basics",
        "Java = Basics",
        "JavaScript = Basics",
        "Dart = Basics",
    ];

    const mySkillsTable = (
        <>
            <table className='table-wrapper'>
                <tr>
                    <th>Platforms</th>
                    <th>Languages</th>
                </tr>
                <tr>
                    <th>{platformStats[0]}</th>
                    <th>{languageStats[0]}</th>
                </tr>
                <tr>
                    <th>{platformStats[1]}</th>
                    <th>{languageStats[1]}</th>
                </tr>
                <tr>
                    <th>{platformStats[2]}</th>
                    <th>{languageStats[2]}</th>
                </tr>
                <tr>
                    <th>{platformStats[3]}</th>
                    <th>{languageStats[3]}</th>
                </tr>
                <tr>
                    <th>{platformStats[4]}</th>
                    <th>{languageStats[4]}</th>
                </tr>
            </table>
        </>
    );

    const programmingInfo = "Currently studying ICT software development at Oulu University of applied science. I discovered my passion for programming and algorithmic thinking from my trainee work as a web store administrator few years ago. I've done quite many 2d- and 3d -game projects along the way in Unity platform and programming in C# scripting language is no problem. (I also know the basics of C++) With the high motivation and hunger for learning new things (with the spice of comedy) I can offer very hard working and chill mixture of an worker to any job environment!";
    const salesmanInfo = "Earlier in my career I was a salesman in variety of companies. Most of my knowledge came from working as an door-to-door salesman in home security services and products in Sector Alarm -company. I also have few years of experience in customer service and cash work in various of companies.";
    const retrogamesInfo = "Deep love with PS1 and PS2 -era gaming. Mainly collecting PS1 games and other related stuff.        ";
    const cosplayInfo = "Over 10 years of sewing costumes and crafting experience. Some of them with customer projects. 'Weeb culture approved'";
    const gymtrainingInfo = "Good balance for that all nerdy stuff";

    return (
        <form className="aboutme-page">
            <h2 className='main-headline'>About Me</h2>
            <div className="avatar">
                <img src={avatar} width="250" height="250" alt='avatar' style={{ borderRadius: '50%' }} />
            </div>
            <h2 className='main-headline'>Jarno Liedes</h2>
            <div className='table-group'>
                <h4 className='secondary-headline'>Skills</h4>
                { mySkillsTable }
            </div>
            <div className='aboutme-group-wrapper'>
                <div>
                    <h4>As a Programmer</h4>
                    <p>{ programmingInfo }</p>
                </div>
                <div>
                    <h4>As a Salesman</h4>
                    <p>{ salesmanInfo }</p>
                </div>
            </div>
            <h3 className='secondary-headline'>Hobbies</h3>
            <div className='aboutme-group-wrapper'>
                <div>
                    <h4>Retro games</h4>
                    <p>{ retrogamesInfo }
                        <a href="https://www.pricecharting.com/offers?seller=ippz42htk3bqfma6q3ghctkfcm&status=collection" title='pricecharting.com ' target="_blank" rel="noreferrer">(check out my collection)</a>
                    </p>
                </div>
                <div>
                    <h4>Cosplay</h4>
                    <p>{cosplayInfo}</p>
                </div>
                <div>
                    <h4>Gym training</h4>
                    <p>{ gymtrainingInfo }</p>
                </div>
            </div>
        </form>
    );
}