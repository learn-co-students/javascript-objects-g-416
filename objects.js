var playlist = {
  "Matthew HalSall": "Song for Charlie",
  "At the Drive In": "Arcarsenal",
  "Franz Schubert": "Piano Trio No. 1"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

