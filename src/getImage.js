// DISCLAIMER!! the browser isn't fetching the images from the web 
// ... so I chose to download them and use them locally

export function getImageUrl(imageId, size = 's') {
    return (
        'https://i.imgur.com/' +
        imageId +
        (size < 90 ? 's' : 'b') +
        '.jpg'
    );
}