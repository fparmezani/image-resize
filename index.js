const robots = {
    image: require('./robots/image.js'),
};

async function start() {
    await robots.image();
}
start();
