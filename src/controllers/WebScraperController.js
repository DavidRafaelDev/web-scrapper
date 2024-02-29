const puppeteer = require('puppeteer');

exports.get = async (req, resp, next) => {
    try {
        const dataImages = await getImagesFromUrl('https://www.nasa.gov/images/');
        return resp.json(dataImages);
    } catch (error) {
        console.error('Erro ao obter imagens:', error);
        return [];
    }
};

async function getImagesFromUrl(url, headless = true) {
    const browser = await puppeteer.launch({ headless });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');

    await page.goto(url);

    await page.waitForTimeout(2000);

    const imgSrcList = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        return imgs.map(img => img.src);
    });

    return imgSrcList;
    
}