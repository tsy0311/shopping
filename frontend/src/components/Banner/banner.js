import BannerImg from "../../images/offers.png"
import "./index.css"
export function Banner() {
    return (
        <div className="banner">
            <div>
                <h1> The Biggest sales is on!</h1>
                <p>
                    During this exclusive sale, grab a deals !
                    <br />
                    Don't miss the chance
                </p>
                <a href="#product-list">
                <button>Check now</button>
                </a>
            </div>
            <img src={BannerImg} alt="Banner for special offers"></img>
        </div>
    );
}