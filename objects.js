playlist = {
  Adele: ["chasing pavements", "hello"],
};

function updatePlaylist(playlist, name, song) {
  playlist[name] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];

  return playlist;
}
