export default function getKDRatio(elims, deaths) {
    return (elims / (deaths === 0 ? 1 : deaths)).toFixed(2);
}