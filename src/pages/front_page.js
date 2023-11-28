import './styles.css';
import imgREDBG from '../assets/images/features/redbg_feature_720p.png';
import imgUglyUnicorn from '../assets/images/features/uglyunicorn_feature_720p.png';
import imgRacingGame from '../assets/images/features/racinggame_feature_720p.png';
import imgDoggoInSpace from '../assets/images/features/doggoinspace_feature_720p.png';
import imgTamRam from '../assets/images/features/tamram_feature_720p.png';
import imgSoftaustalo from '../assets/images/features/softaustalo_feature_720p.png';

export default function FrontPage() {
    const linkImageSize = '42%'
    const padding = '0.5%'

    // Scrolls window instantly to the top
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });

    function createLinkImages() {
        function ImageModel(img, name, link) {
            this.img = img
            this.name = name
            this.link = link
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

        return [
            linkImagesInRow(imgModel1, imgModel2),
            linkImagesInRow(imgModel3, imgModel4),
            linkImagesInRow(imgModel5, imgModel6)
        ]
    }

    function linkImagesInRow(imgModel1, imgModel2) {
        const linkColumn = function () {
            if (imgModel2 === undefined) return (<>
                <column style={{ padding: padding }}>
                    <a href={imgModel1.link}>
                        <img src={imgModel1.img} alt={imgModel1.name} width={linkImageSize} height={linkImageSize} />
                    </a>
                </column>
            </>)
            else return (<>
                <column style={{ padding: padding}}>
                    <a href={imgModel1.link}>
                        <img src={imgModel1.img} alt={imgModel1.name} width={linkImageSize} height={linkImageSize} />
                    </a>
                </column>
                <column style={{ padding: padding}}>
                    <a href={imgModel2.link}>
                        <img src={imgModel2.img} alt={imgModel2.name} width={linkImageSize} height={linkImageSize} />
                    </a>
                </column>
            </>)
        }

        return ([
            <>
                <div style={{ padding: padding, maxWidth:'98%', margin: 'auto' }}>
                    <row >
                        {linkColumn()}
                    </row>
                </div>
            </>
        ]);
    }

    return (
        <form className="main-page">
            <h3>My Projects</h3>
            {createLinkImages()}
        </form>
    );
}