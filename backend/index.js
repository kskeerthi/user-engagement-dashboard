const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = 5000;
const countryCoordinates = {
  "United States": { lat: 37.0902, lng: -95.7129 },
  "Canada": { lat: 56.1304, lng: -106.3468 },
  "United Kingdom": { lat: 55.3781, lng: -3.4360 },
  "Australia": { lat: -25.2744, lng: 133.7751 },
  "Germany": { lat: 51.1657, lng: 10.4515 },
  "France": { lat: 46.6034, lng: 1.8883 },
  "India": { lat: 20.5937, lng: 78.9629 },
  "Brazil": { lat: -14.2350, lng: -51.9253 },
  "China": { lat: 35.8617, lng: 104.1954 },
  "Japan": { lat: 36.2048, lng: 138.2529 },
  "South Korea": { lat: 35.9078, lng: 127.7669 },
  "Russia": { lat: 61.5240, lng: 105.3188 },
  "Mexico": { lat: 23.6345, lng: -102.5528 },
  "South Africa": { lat: -30.5595, lng: 22.9375 },
  "Netherlands": { lat: 52.1326, lng: 5.2913 },
  "Sweden": { lat: 60.1282, lng: 18.6435 },
  "Norway": { lat: 60.4720, lng: 8.4689 },
  "Denmark": { lat: 56.2639, lng: 9.5018 },
  "Finland": { lat: 61.9241, lng: 25.7482 },
  "Switzerland": { lat: 46.8182, lng: 8.2275 },
  "Belgium": { lat: 50.8503, lng: 4.3517 },
  "Austria": { lat: 47.5162, lng: 14.5501 },
  "Ireland": { lat: 53.4129, lng: -8.2439 },
  "New Zealand": { lat: -40.9006, lng: 174.8860 },
  "Singapore": { lat: 1.3521, lng: 103.8198 },
  "Malaysia": { lat: 4.2105, lng: 101.9758 },
  "Thailand": { lat: 15.8700, lng: 100.9925 },
  "Philippines": { lat: 12.8797, lng: 121.7740 },
  "Vietnam": { lat: 14.0583, lng: 108.2772 },
  "Argentina": { lat: -38.4161, lng: -63.6167 },
  "Chile": { lat: -35.6751, lng: -71.5430 },
  "Colombia": { lat: 4.5709, lng: -74.2973 },
  "Peru": { lat: -9.1900, lng: -75.0152 },
  "Egypt": { lat: 26.8206, lng: 30.8025 },
  "Morocco": { lat: 31.7917, lng: -7.0926 },
  "Saudi Arabia": { lat: 23.8859, lng: 45.0792 },
  "United Arab Emirates": { lat: 23.4241, lng: 53.8478 },
  "Israel": { lat: 31.0461, lng: 34.8516 },
  "Turkey": { lat: 38.9637, lng: 35.2433 },
  "Greece": { lat: 39.0742, lng: 21.8243 },
  "Portugal": { lat: 39.3999, lng: -8.2245 },
  "Czech Republic": { lat: 49.8175, lng: 15.4730 },
  "Hungary": { lat: 47.1625, lng: 19.5033 },
  "Poland": { lat: 51.9194, lng: 19.1451 },
  "Bangladesh": { lat: 23.685 },
  "Pakistan": { lat: 30.3753, lng: 69.3451 },
  "Iraq": { lat: 33.2232, lng: 43.6793 },
  "Iran": { lat: 32.4279, lng: 53.6880 },
  "Kazakhstan": { lat: 48.0196, lng: 66.9237 },
  "Uzbekistan": { lat: 41.3775, lng: 64.5854 },
  "Sri Lanka": { lat: 7.8731, lng: 80.7718 },
  "Nepal": { lat: 28.3949, lng: 84.1240 },
  "Afghanistan": { lat: 33.9391, lng: 67.7099 },
  "Jordan": { lat: 30.5852, lng: 36.2384 },
  "Kuwait": { lat: 29.3759, lng: 47.9774 },
  "Oman": { lat: 21.5129, lng: 55.9233 },
  "Bahrain": { lat: 26.0275, lng: 50.55 },
  "Qatar": { lat: 25.3548, lng: 51.1839 },
  "Nigeria": { lat: 9.0820, lng: 8.6753 },
  "Kenya": { lat: -1.286389, lng: 36.817223 },
  "Tanzania": { lat: -6.369028, lng: 34.888822 },
  "Uganda": { lat: 1.3733, lng: 32.2903 },
  "Ethiopia": { lat: 9.145, lng: 40.489673 },
  "Zambia": { lat: -13.133897, lng: 27.849332 },
  "Zimbabwe": { lat: -19.015438, lng: 29.154857 },
  "Namibia": { lat: -22.9576, lng: 18.4904 },
  "Botswana": { lat: -22.3285, lng: 24.6849 },
  "Ghana": { lat: 7.8467, lng: -0.2050 },
  "Cameroon": { lat: 7.3697, lng: 12.3547 },
  "Algeria": { lat: 28.0339, lng: 1.6596 },
  "Tunisia": { lat: 33.8869, lng: 9.5375 },
  "Senegal": { lat: 14.4974, lng: -14.4524 },
  "Mali": { lat: 17.5707, lng: -3.9962 },
  "Rwanda": { lat: -1.9403, lng: 29.8739 },
  "Somalia": { lat: 5.1521, lng: 46.1996 },
  "Dominican Republic": { lat: 18.7357, lng: -70.1627 },
  "Haiti": { lat: 18.9712, lng: -72.2854 },
  "Cuba": { lat: 21.5218, lng: -77.7812 },
  "Puerto Rico": { lat: 18.2208, lng: -66.5901 },
  "Jamaica": { lat: 18.1096, lng: -77.2975 },
  "Trinidad and Tobago": { lat: 10.6918, lng: -61.2225 },
  "Barbados": { lat: 13.1939, lng: -59.5432 },
  "Bahamas": { lat: 25.0343, lng: -77.3963 },
  "Saint Lucia": { lat: 13.9094, lng: -60.9789 },
  "Antigua and Barbuda": { lat: 17.0608, lng: -61.7964 },
  "Grenada": { lat: 12.2628, lng: -61.6044 },
  "Saint Vincent and the Grenadines": { lat: 12.9874, lng: -61.2870 },
  "Malta": { lat: 35.9375, lng: 14.3754 },
  "Liechtenstein": { lat: 47.1662, lng: 9.5554 },
  "Monaco": { lat: 43.7384, lng: 7.4246 },
  "San Marino": { lat: 43.9333, lng: 12.4460 },
  "Andorra": { lat: 42.5063, lng: 1.5211 },
  "Iceland": { lat: 64.9631, lng: -19.0208 },
  "Estonia": { lat: 58.5953, lng: 25.0136 },
  "Latvia": { lat: 56.8796, lng: 24.6032 },
  "Lithuania": { lat: 55.1694, lng: 23.8813 },
  "Slovakia": { lat: 48.6690, lng: 19.6990 },
  "Slovenia": { lat: 46.1512, lng: 14.9955 },
  "Cyprus": { lat: 35.1264, lng: 33.4299 },
  "Georgia": { lat: 42.3154, lng: 43.3569 },
  "Armenia": { lat: 40.0691, lng: 45.0382 },
  "Azerbaijan": { lat: 40.1431, lng: 47.5769 },
  "Bosnia and Herzegovina": { lat: 43.9159, lng: 17.6791 },
  "North Macedonia": { lat: 41.6086, lng: 21.7453 },
  "Kosovo": { lat: 42.6026, lng: 20.9020 },
  "Albania": { lat: 41.1533, lng: 20.1683 },
  "Serbia": { lat: 44.0165, lng: 21.0059 },
  "Montenegro": { lat: 42.7087, lng: 19.3744 },
  "Malawi": { lat: -13.2543, lng: 34.3015 },
  "Gambia": { lat: 13.4432, lng: -15.3103 },
  "Burkina Faso": { lat: 12.2383, lng: -1.5616 },
  "Togo": { lat: 8.6195, lng: 0.8248 },
  "Benin": { lat: 9.3079, lng: 2.3158 },
  "Sao Tome and Principe": { lat: 0.0000, lng: 6.6131 },
  "Equatorial Guinea": { lat: 1.6500, lng: 10.5121 },
  "Central African Republic": { lat: 4.3947, lng: 18.5580 },
  "Lesotho": { lat: -29.6094, lng: 28.2336 },
  "Eswatini": { lat: -26.5225, lng: 31.4659 },
  "Brunei": { lat: 4.5353, lng: 114.7277 },
  "Vietnam": { lat: 14.0583, lng: 108.2772 },
  "Cambodia": { lat: 12.5655, lng: 104.9910 },
  "Laos": { lat: 19.8563, lng: 102.4955 },
  "Myanmar": { lat: 21.9139, lng: 95.9560 },
  "Mongolia": { lat: 46.8625, lng: 103.8467 },
  "Timor-Leste": { lat: -8.8742, lng: 125.7275 },
  "Papua New Guinea": { lat: -6.314993, lng: 143.9556 },
  "Fiji": { lat: -17.7134, lng: 178.0650 },
  "Vanuatu": { lat: -15.3769, lng: 166.9592 },
  "Samoa": { lat: -13.7590, lng: -172.1046 },
  "Tonga": { lat: -21.1789, lng: -175.1982 },
  "Solomon Islands": { lat: -9.4295, lng: 160.0000 },
  "Kiribati": { lat: -3.3704, lng: -168.7340 },
  "Tuvalu": { lat: -7.1095, lng: 179.1940 },
  "Micronesia": { lat: 7.4256, lng: 150.5508 },
  "Palau": { lat: 7.5149, lng: 134.5825 },
  "Nauru": { lat: -0.5228, lng: 166.9315 },
  "Marshall Islands": { lat: 7.1095, lng: 171.1830 },
  "American Samoa": { lat: -14.3064, lng: -170.7134 },
  "Guam": { lat: 13.4443, lng: 144.7937 },
  "Northern Mariana Islands": { lat: 15.0979, lng: 145.6739 },
  "Wallis and Futuna": { lat: -13.3010, lng: -176.1650 },
  "French Polynesia": { lat: -17.6797, lng: -149.4068 },
  "New Caledonia": { lat: -22.2855, lng: 166.4502 },
  "Cook Islands": { lat: -21.2367, lng: -159.7752 },
  "Niue": { lat: -19.0590, lng: -169.8670 },
  "Tokelau": { lat: -9.2002, lng: -171.8570 },
  "Saint Pierre and Miquelon": { lat: 46.8333, lng: -56.3333 },
};

// CORS options to allow multiple origins
const corsOptions = {
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'], // Allow both origins
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
  credentials: true,
};

// Use CORS with the specified options
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());
const countries = Object.keys(countryCoordinates); 
// Sample user engagement data (mock data)
const country = countries[Math.floor(Math.random() * countries.length)];
const { lat, lng } = countryCoordinates[country]; 
const users = Array.from({ length: 100 }, (_, i) => ({
  userId: `user_${i}`,
  age: Math.floor(Math.random() * (60 - 18 + 1)) + 18,
  location: countries[Math.floor(Math.random() * countries.length)],
  coords: { lat, lng },
  device: ['Mobile', 'Desktop', 'Tablet'][Math.floor(Math.random() * 3)],
  sessions: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => ({
    sessionId: `session_${Math.random().toString(36).substr(2, 9)}`,
    startTime: new Date(Date.now() - Math.random() * 1000000000).toISOString(),
    endTime: new Date(Date.now() - Math.random() * 1000000000).toISOString(),
    actions: ['viewed_product', 'clicked_ad', 'added_to_cart', 'made_purchase']
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.floor(Math.random() * 3) + 1)
  }))
}));

// Endpoint to get user engagement data
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
