import avatar from '../assets/images/myavatar.jpg';
import './aboutme_page.css';

export default function AboutMe() {
    const widthLimit = 800;
    const isMobileView = window.innerWidth < widthLimit;

    // Scrolls window instantly to the top
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
    });

    const platformStats = [
        "Unity = Good",
        "Git/GitHub = Intermediate",
        "Game Maker = Intermediate",
        "React = Basics",
        "Flutter = Basics",
    ];
    const languageStats = [
        "C# = Good",
        "JavaScript = Intermediate",
        "C/C++ = Basics",
        "Java = Basics",
        "Kotlin = Basics",
    ];

    const skillsTableMobile = (
        <>
            <div>
                <table className='table-group'>
                    <tr>
                        <th className='table-th-headline'>Platforms:</th>
                    </tr>
                    <tr>
                        <th className='table-th'>{platformStats[0]}</th>
                    </tr>
                    <tr>
                        <th className='table-th'>{platformStats[1]}</th>
                    </tr>
                    <tr>
                        <th className='table-th'>{platformStats[2]}</th>
                    </tr>
                    <tr>
                        <th className='table-th'>{platformStats[3]}</th>
                    </tr>
                    <tr>
                        <th className='table-th'>{platformStats[4]}</th>
                    </tr>
                </table>
            </div>
            <div>
                <table className='table-group'>
                    <tr>
                        <th className='table-th-headline'>Languages:</th>
                    </tr>
                    <tr>
                        <th className='table-th'>{languageStats[0]}</th>
                    </tr>
                    <tr>
                        <th className='table-th'>{languageStats[1]}</th>
                    </tr>
                    <tr>
                        <th className='table-th'>{languageStats[2]}</th>
                    </tr>
                    <tr>
                        <th className='table-th'>{languageStats[3]}</th>
                    </tr>
                    <tr>
                        <th className='table-th'>{languageStats[4]}</th>
                    </tr>
                </table>
            </div>
        </>
    );

    const skillsTableDesktop = (
        <>
            <table className='table-group'>
                <tr>
                    <th className='table-th-headline'>Platforms:</th>
                    <th className='table-th-headline'>Languages:</th>
                </tr>
                <tr>
                    <th className='table-th'>{platformStats[0]}</th>
                    <th className='table-th'>{languageStats[0]}</th>
                </tr>
                <tr>
                    <th className='table-th'>{platformStats[1]}</th>
                    <th className='table-th'>{languageStats[1]}</th>
                </tr>
                <tr>
                    <th className='table-th'>{platformStats[2]}</th>
                    <th className='table-th'>{languageStats[2]}</th>
                </tr>
                <tr>
                    <th className='table-th'>{platformStats[3]}</th>
                    <th className='table-th'>{languageStats[3]}</th>
                </tr>
                <tr>
                    <th className='table-th'>{platformStats[4]}</th>
                    <th className='table-th'>{languageStats[4]}</th>
                </tr>
            </table>
        </>
    );

    return (
        <form className="aboutme-page">
            <h2 className='main-headline'>About Me</h2>
            <div className="avatar">
                <a href="https://github.com/Jarwesbub">
                    <img src={avatar} width="250" height="250" alt='avatar' style={{ borderRadius: '50%' }} />
                </a>
            </div>
            <h2 className='main-headline'>Jarno Liedes</h2>
            <div className='main-followupline'>
                <p>Information Communication Technology - Bachelor of Engineering - Software Developer</p>
                <p>Unity Hobbyist</p>
                </div>
            <div className='table-group'>
                <h4 className='secondary-headline'>Skills</h4>
                {isMobileView ? skillsTableMobile : skillsTableDesktop}
            </div>
            <div className='aboutme-group-wrapper'>
                <div>
                    <h4>As a Programmer</h4>
                    <p>
                        Currently studying ICT software development (third year) at Oulu University of Applied Sciences. I discovered my passion for programming and problem solving from my trainee work as a web store administrator few years ago. Since then I've done quite many 2d- and 3d -game projects along the way in Unity platform. What comes to the web development side I have done some single -and multipage apps as a school projects from back-end to front-end development.
                    </p>
                </div>
                <div>
                    <h4>As a Salesman</h4>
                    <p>
                        Earlier in my career I was a salesman in variety of companies. Most of my knowledge came from working on as a door-to-door salesman in home security services and products in Sector Alarm Oy. I also have few years of experience in customer service and cash work.
                    </p>
                </div>
            </div>
            <h3 className='secondary-headline'>Hobbies</h3>
            <div className='aboutme-group-wrapper'>
                <div>
                    <h4>Retro games</h4>
                    <p>
                        Deep love with PS1 and PS2 era gaming. Mainly collecting PS1 games and other related stuff.&nbsp;
                        <a href="https://www.pricecharting.com/offers?status=collection&seller=ippz42htk3bqfma6q3ghctkfcm&sort=highest-price&category=video-games&console=&folder-id=&condition-id=all" title='pricecharting.com ' target="_blank" rel="noreferrer">(check out my collection)</a>
                    </p>
                </div>
                <div>
                    <h4>Cosplay</h4>
                    <p>
                        Over 10 years of sewing costumes and crafting projects with a little bit customer works along the way.
                    </p>
                </div>
                <div>
                    <h4>Gym training</h4>
                    <p>
                        Best place to let out some steam.
                    </p>
                </div>
            </div>
        </form>
    );
}