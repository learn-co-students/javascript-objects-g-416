const playlist = {
  'Judah & The Lion': 'Spirit',
  'Justin Bieber': 'Holy'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
