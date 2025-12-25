// You need to implement the Playlist constructor function and its prototype method

function Playlist() {
  // Initialize songs property
  // Define addSong method on Playlist's prototype
  this.songs = [];
}
Playlist.prototype.addSong = function (song) {
  this.songs.push(song)
}









// // Playlist constructor function
// function Playlist() {
//   // Initialize songs property as an empty array
//   this.songs = [];
// }

// // Add method to add a song
// Playlist.prototype.addSong = function (song) {
//   this.songs.push(song);
// };

// // Add method to print all songs
// Playlist.prototype.printSongs = function () {
//   console.log("Playlist Songs:");
  
//   if (this.songs.length === 0) {
//     console.log("No songs in the playlist.");
//     return;
//   }
  
//   this.songs.forEach(function(song, index) {
//     console.log(`${index + 1}. ${song}`);
//   });
// };

// // Create a playlist object
// const myPlaylist = new Playlist();

// // Add songs
// myPlaylist.addSong("Shape of You");
// myPlaylist.addSong("Blinding Lights");
// myPlaylist.addSong("Believer");

// // Print all songs
// myPlaylist.printSongs();
