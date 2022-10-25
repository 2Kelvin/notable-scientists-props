// DISCLAIMER!! the browser isn't fetching the images from the web 
// ... so I chose to download them and use them locally

export function getImageUrl(imageId) {
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 's';

    return 'https://i.imgur.com/' + imageId + (size < 90 ? 's' : 'b') + '.jpg';
}