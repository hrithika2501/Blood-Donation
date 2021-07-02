// adding map
const map = L.map('map').setView([23.2599, 77.4126], 4.5);
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const tileLayer = L.tileLayer(tileUrl, {
    attribution
});
tileLayer.addTo(map);
var custom_marker = L.icon({
    iconUrl: 'Marker-2.webp',
    iconSize: [36, 40],
    iconAnchor: [19, 38]

})
var custom_marker = L.icon({
    iconUrl: 'images/Marker-2.webp',
    iconSize: [36, 40],
    iconAnchor: [19, 38]
})
bb = [
    ['Jupiter Hospital', 19.2097, 72.9724],
    ['Sant Blood Bank', 25.458599, 78.615517],
    ['Ruby Hall Clinic Wanowrie', 18.485870, 73.905853],
    ['G.T Hospital Blood Bank', 18.9446, 72.8316],
    ['Kama Hospital Blood Bank', 18.9422, 72.8321],
    ['AIIMS  Delhi', 28.5672, 77.2100],
    ['Lions Blood Bank', 13.0695, 80.2608],
    ['Red Cross Society', 19.1939, 72.9706],
    ['White Cross Blood Bank', 28.5607, 77.2536],
    ['Pitampura Blood Bank', 28.6992, 77.1238],
    ['Ganga Ram Hospital', 28.6385, 77.1896],
    ['Lal Bahadur Shastri Hospital', 28.6182, 77.3120],
    ['Dharamshila Cancer Foundation', 28.602568, 77.314022],
    ['Sanjeevani Blood Bank', 18.6164, 73.8482],
    ['Faridabad General Hospital  Blood Bank', 28.386002, 77.307678],
    ['Gurugram General Hospital Blood Bank', 28.4612, 77.0332],
    ['Indira Gandhi Institute of Medical Sciences', 25.6106, 85.0889],
    ['Kurji Holy Family Hospital', 25.6357, 85.1121],
    ['PATLIPUTRA BLOOD BANK', 25.458599, 78.615517],
    ['Lions Blood Bank', 13.0695, 80.2608],
    ['Navarang Blood Bank', 12.9985, 77.5528],
    ['Grace Blood Bank', 13.0230, 77.5848],
    ['Bhoruka Blood Bank', 22.5551, 88.3571],
    ['Central Blood Bank', 22.5854, 88.3752],
    ['Surat Raktdan Kendra', 21.1729, 72.8301],
    ['Lockhat Hospital, Rampura', 21.2078, 72.8288],
    ['Civil Hospital Majuragate', 21.1790, 72.8217],
    ['Jeevan Blood Bank', 18.0030, 79.5698],
    ['Lions Blood Bank', 13.0695, 80.2608],
    ['Fortis Hospital', 22.5205, 88.4009],
    ['Indraprastha Apollo Hospital', 28.5404, 77.2830],
    ['Lilavati Hospital', 19.0511, 72.8292],
    ['Christian Medical College,', 12.9246, 79.1348],
    ['Tata Memorial Hospital', 19.0049, 72.8432],
    ['Jawaharlal Institute of Postgraduate Medical Education and Research', 11.9528, 79.7923],
    ['Postgraduate Institute of Medical Education and Research', 30.7650, 76.7750],
    ['Sankara Netralaya', 13.0642, 80.2498],
    ['Kokilaben Hospital', 19.1313, 72.8251],
    ['Jaslok Hospital & Research Center', 18.9716, 72.8098],
    ['Manipal Hospital', 12.9587, 77.6492],
    ['Apollo Hospitals', 12.8960, 77.5995],
    ['Hiranandani Hospita, Mumbai', 19.2526, 72.9802],
    ['Aditya Birla Memoria, Pune', 18.6257, 73.7748],
    [' BLK Super Specialty Hospital', 28.6433, 77.1797],
    ['Saifee Hospital', 18.9523, 72.8183],
    ['Bombay Hospital & Medical Research Centre', 18.9410, 72.8274],
    ['Billroth Hospital', 13.0758, 80.2273],
    ['Columbia Asia Hospital', 22.5723, 88.4128],
    ['Sir Ganga Ram Hospital', 28.6385, 77.1896],
    ['Kamineni Hospitals', 17.3926, 78.4798],
    ['Fortis Malar Hospital', 13.0101, 80.2588],
    ['Sri Ramachandra Hospital - G Block', 13.0376, 80.1446],
    ['Apollo Gleneagles Hospitals', 22.5968, 88.3898],
    ['Ruby Hall Clinics', 18.5336, 73.8772],
    ['CARE Foundation Hospital', 17.41321, 78.450202],
    ['KLES Dr. Prabhakar Kore Hospital & M.R.C', 15.8881, 74.5197],
    [' Noble Hospital', 18.5049, 73.9271],
    ['Columbia Asia Referral Hospital – Yeshwanthpur', 13.0142, 77.5561],
    ['Max Super Speciality Hospital, Saket (Max Saket)', 28.5276, 77.2121],
    ['Medanta -The Medicity', 28.4395, 77.0408],
    ['CAP NIMHANS', 12.9386, 77.5957],
    ['Artemis Hospital', 28.4595, 77.0266],
    ['MIOT International', 13.0226, 80.1864],
    ['Vardhman Mahavir Medical College', 28.5691, 77.2031],
    ['King Edward Memorial Hospital and Seth Gordhandas Sunderdas Medical College', 19.0025, 72.8421],
    ['KLES Dr. Prabhakar Kore Hospital & M.R.C', 15.8881, 74.5197],
    ['Manipal Hospital Delhi', 28.5951, 77.0690]
]
for (i = 0; i < bb.length; i++) {
    correct_marker = L.marker([bb[i][1], bb[i][2]], {
        icon: custom_marker,
        title: bb[i][0]
    });
    correct_marker.addTo(map);
    correct_marker.on('mouseover', function (ev) {
        marker.openPopup();
    });
}