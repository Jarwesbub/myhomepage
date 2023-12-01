import { useState, useEffect } from "react";
import './styles.css';
import imgREDBG from '../assets/images/features/redbg_feature_720p.png';
import imgUglyUnicorn from '../assets/images/features/uglyunicorn_feature_720p.png';
import imgRacingGame from '../assets/images/features/racinggame_feature_720p.png';
import imgDoggoInSpace from '../assets/images/features/doggoinspace_feature_720p.png';
import imgTamRam from '../assets/images/features/tamram_feature_720p.png';
import imgSoftaustalo from '../assets/images/features/softaustalo_feature_720p.png';

export default function FrontPage(props) {
    const [isMobileView, setMobileView] = useState(window.innerWidth < props.widthLimit)
    const dualImageSize = '46%'
    const singleImageSize = '86%'

    useEffect(() => {
        const updateMobileView = () => {
            setMobileView(window.innerWidth < props.widthLimit)
        }
        window.addEventListener('resize', updateMobileView);

        return () => {
            window.removeEventListener('resize', updateMobileView);
        }
    }, [setMobileView])

    // Scrolls window instantly to the top
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
    });

    function createLinkImages() {
        class ImageModel {
            constructor(img, name, link) {
                this.img = img;
                this.name = name;
                this.link = link;
            }
        }
        const imgModel1 = new ImageModel(
            imgREDBG,
            'Resident Evil - Deck Building Game',
            '#/residentevildbg',
        )
        const imgModel2 = new ImageModel(
            imgUglyUnicorn,
            'UglyUnicorn',
            '#/uglyunicorn'
        )
        const imgModel3 = new ImageModel(
            imgRacingGame,
            'Racing Game (demo)',
            '#/racinggame',
        )
        const imgModel4 = new ImageModel(
            imgDoggoInSpace,
            'Doggo In Space',
            '#/doggoinspace'
        )
        const imgModel5 = new ImageModel(
            imgTamRam,
            'TamRam',
            '#/tamram'
        )
        const imgModel6 = new ImageModel(
            imgSoftaustalo,
            'Softaustalo - Unreal Engine 2 Editor',
            '#/xiii-softaustalo'
        )
        let linkImageSize = dualImageSize
        if (isMobileView) { linkImageSize = singleImageSize }

        return [
            singleLinkImages(imgModel1, linkImageSize),
            singleLinkImages(imgModel2, linkImageSize),
            singleLinkImages(imgModel3, linkImageSize),
            singleLinkImages(imgModel4, linkImageSize),
            singleLinkImages(imgModel5, linkImageSize),
            singleLinkImages(imgModel6, linkImageSize),

        ]

        function singleLinkImages(imgModel, size) {
            return (<>
                <a href={imgModel.link}>
                    <img src={imgModel.img} alt={imgModel.name} width={size} height={size} />
                </a>
            </>);
        }
    }

    return (
        <form className="main-page">
            <h3>My Projects</h3>
            {createLinkImages()}
        </form>
    );
}