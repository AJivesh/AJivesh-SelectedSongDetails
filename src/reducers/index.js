import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Black space", duration: "4:40" },
    { title: "Look what you made me do", duration: "3:40" },
    { title: "Nothing breaks like a heart", duration: "5:00" },
    { title: "Natu Natu", duration: "2:40" },
    { title: "Hymn for the weekend", duration: "5:40" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
