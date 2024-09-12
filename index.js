// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    {title: "They not like us", artist: "Kendrick Lamar", genre: "Rap/HipHop"},
    {title: "Solar Plexus", artist: "Oshun", genre: "Alternative"},
    {title: "RANDOMSONG", artist: "Willow", genre: "Alternative"},
    {title: "Purple Hearts", artist: "Kendrick Lamar", genre: "Rap/HipHop"},
    {title: "Stop Giving Me Advice", artist: "Dave", genre: "Rap/HipHop"}
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Alternative",
    "Groot": "Rap/HipHop"
    // Add preferences for Drax, Rocket, and Groot
};


// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here

    // Empty object variable created to store playlist for every guardian
    const playlists = {}

    // Looping over each guardian using map() method
    Object.keys(guardians).map(guardian => {
        // filtering the songs based on guardian's genre preferrance
        const playlist = songs.filter(song => song.genre === guardians[guardian])
        // adding the filtered playlist toteh playlist object
        playlists[guardian] = playlist
    })

    return playlists
}

// Call generatePlaylist and display the playlists for each Guardian
let playlist = generatePlaylist(guardians, songs);
console.log(playlist)
