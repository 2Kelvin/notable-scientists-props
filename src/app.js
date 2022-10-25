import { getImageUrl } from "./getImage.js";

const _maria = {
    name: "Maria Skłodowska-Curie",
    image: "../images/maria.jpg",
    img_width: 70,
    img_height: 70,
    profession: "physicist and chemist",
    awards_no: 4,
    awards: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
    discovered: "polonium (element)"
};

const _katsuko = {
    name: "Katsuko Saruhashi",
    image: "../images/katsuko.jpg",
    img_width: 70,
    img_height: 70,
    profession: "geochemist",
    awards_no: 2,
    awards: "(Miyake Prize for geochemistry, Tanaka Prize)",
    discovered: "a method for measuring carbon dioxide in seawater"
};

function Profile({ scientist }) {
    return (
        <section className="profile">
            <h2>{scientist.name}</h2>
            <img
                className="avatar"
                src={scientist.image}
                alt={scientist.name}
                width={scientist.img_width}
                height={scientist.img_height}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {scientist.profession}
                </li>
                <li>
                    <b>Awards: {scientist.awards_no} </b>
                    {scientist.awards}
                </li>
                <li>
                    <b>Discovered: </b>
                    {scientist.discovered}
                </li>
            </ul>
        </section>
    );
}

function Gallery() {
    return (
        <div className="gallery">
            <h1>Notable Scientists</h1>
            <Profile scientist={_maria} />
            <Profile scientist={_katsuko} />
        </div>
    );
}

export default function App() {
    return <Gallery />;
}


// react connection 
const rootNode = document.getElementById('react_root_node');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);