var playlist = { artistName: 'songTitles'};

Object.assign({}, playlist);


function updatePlaylist(obj, artistName, songTitle) {
  return Object.assign({}, obj, {artistName: artistName}, {sontTitle: songTitle});
}

function removeFromPlaylist(obj, artistName) {
  delete obj.artistName;
  return obj;
}
