import { useState } from "react";
import "./App.css";

const App = () => {
  const sidebarButtons = [
    { img: "Home.png", title: "Home" },
    { img: "Search.png", title: "Search" },
    { img: "Your library.png", title: "Your library" },
  ];

  const sidebarOptions = [
    { img: "Create.png", title: "Create Playlist" },
    { img: "Liked.png", title: "Liked Songs" },
    { img: "your episodes.png", title: "Your Episodes" },
  ];

  const playlists = [
    "FAV",
    "Daily Mix",
    "Discover",
    "Malayalam",
    "Dance",
    "EDM/Popular",
  ];

  const morningBoxes = [
    { img: "Liked.png", title: "Liked Songs" },
    { img: "image4.png", title: "Neffex Playlist" },
    { img: "image3.png", title: "K/DA" },
    { img: "image1.png", title: "Liked Songs" },
    { img: "image2.png", title: "Dance/electronic Mix" },
  ];

  const shows = [
    { img: "image9.png", title: "Weekly Motivation..." },
    { img: "image8.png", title: "MEDITATION SELF" },
    { img: "image7.png", title: "World Beyond Act" },
    { img: "image6.png", title: "THE ALEXA SHOW" },
    { img: "image5.png", title: "THE Stories of MA..." },
    { img: "image10.png", title: "Motivation Daily B..." },
  ];

  return (
    <>
      <title>Spotify</title>
      <div className="sp">
        {/* Left Sidebar */}
        <div className="lside">
          <div className="sidebar">
            <div className="logo">
              <img
                src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/Spotify%20logo.png"
                alt=""
                className="logo_img"
              />
            </div>
            <div className="buttons">
              {sidebarButtons.map((btn, idx) => (
                <div key={idx} className="button-item">
                  <img
                    src={`https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/${btn.img}`}
                    alt=""
                    className="home_img"
                  />
                  <div className="home">{btn.title}</div>
                </div>
              ))}
            </div>
            <div className="sidebar1">
              {sidebarOptions.map((option, idx) => (
                <div key={idx} className="option-item">
                  <img
                    src={`https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/${option.img}`}
                    alt=""
                    className="img_img"
                  />
                  <div className="home1">{option.title}</div>
                </div>
              ))}
            </div>
            <div className="text">
              {playlists.map((playlist, idx) => (
                <div key={idx} className="text1">
                  {playlist}
                </div>
              ))}
            </div>
            <div className="sidebar2">
              <div className="buttons">
                <img
                  src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/grommet-imgs_install-option.png"
                  alt=""
                  className="home_img"
                />
                <div className="inst">Install App</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="rside">
          <div className="navbar">
            <img
              src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/top%20arrow%20navigation.png"
              alt=""
              className="arrow"
            />
            <img
              src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/User.png"
              alt=""
              className="user"
            />
          </div>
          <div className="text2">Good Morning</div>
          <div className="box">
            {morningBoxes.map((box, idx) => (
              <div key={idx} className="liked">
                <img
                  src={`https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/${box.img}`}
                  alt=""
                />
                <div className="l">{box.title}</div>
              </div>
            ))}
          </div>
          <div className="text2">Shows you might like</div>
          <div className="box2">
            {shows.map((show, idx) => (
              <div key={idx} className="poster">
                <div className="img">
                  <img
                    src={`https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/${show.img}`}
                    alt=""
                  />
                </div>
                <div className="title">{show.title}</div>
                <div className="stitle"></div>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom */}
        <div className="bottom">
          <div className="left">
            <img
              src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/image11.png"
              alt=""
              className="bottom_img"
            />
            <div className="name">Dreaming On NEFFEX</div>
            <img
              src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/heart.png"
              alt=""
              className="like_img"
            />
          </div>
          <div className="center">
            <img
              src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/Music%20Player%20Options.png"
              alt=""
              className="music_player"
            />
          </div>
          <div className="right">
            <img
              src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/Right%20options.png"
              alt=""
              className="right_option"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
