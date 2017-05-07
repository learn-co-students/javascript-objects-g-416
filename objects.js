var playlist = {
  'Nicki Minaj': 'Only'
}

var updatePlaylist = (playlist, artist, song) => {
  return Object.assign(playlist, { [artist]: song })
}

var removeFromPlaylist = (playlist, artist) => {
  delete playlist[artist];
  return playlist;
}
