var playlist = {
  "Sonny Rollins": "St.Thomas"
};

var updatePlaylist = (playlist, name, title) => {
  playlist[name] = title;
  return playlist;
};

var removeFromPlaylist = (playlist, name) => {
  delete playlist[name];
  return playlist;
};
