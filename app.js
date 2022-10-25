import { getImageUrl } from "./getImage.js";

var _maria = {
    name: "Maria Skłodowska-Curie",
    image: "../images/maria.jpg",
    img_width: 70,
    img_height: 70,
    profession: "physicist and chemist",
    awards_no: 4,
    awards: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
    discovered: "polonium (element)"
};

var _katsuko = {
    name: "Katsuko Saruhashi",
    image: "../images/katsuko.jpg",
    img_width: 70,
    img_height: 70,
    profession: "geochemist",
    awards_no: 2,
    awards: "(Miyake Prize for geochemistry, Tanaka Prize)",
    discovered: "a method for measuring carbon dioxide in seawater"
};

function Profile(_ref) {
    var scientist = _ref.scientist;

    return React.createElement(
        "section",
        { className: "profile" },
        React.createElement(
            "h2",
            null,
            scientist.name
        ),
        React.createElement("img", {
            className: "avatar",
            src: scientist.image,
            alt: scientist.name,
            width: scientist.img_width,
            height: scientist.img_height
        }),
        React.createElement(
            "ul",
            null,
            React.createElement(
                "li",
                null,
                React.createElement(
                    "b",
                    null,
                    "Profession: "
                ),
                scientist.profession
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "b",
                    null,
                    "Awards: ",
                    scientist.awards_no,
                    " "
                ),
                scientist.awards
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "b",
                    null,
                    "Discovered: "
                ),
                scientist.discovered
            )
        )
    );
}

function Gallery() {
    return React.createElement(
        "div",
        { className: "gallery" },
        React.createElement(
            "h1",
            null,
            "Notable Scientists"
        ),
        React.createElement(Profile, { scientist: _maria }),
        React.createElement(Profile, { scientist: _katsuko })
    );
}

export default function App() {
    return React.createElement(Gallery, null);
}

// react connection 
var rootNode = document.getElementById('react_root_node');
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App, null));