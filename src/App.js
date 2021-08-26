import React, { useState, useEffect } from "react";
import db from "./config/firebase";
import Swal from "sweetalert2";
// import "animate.css";
import { Wrapper, LineProgess } from "./style";
import LeaderBoard from "./component/LeaderBoard";
import Loading from "./component/Loading";
import Congrat from "./component/Congrat";

const dataClues = [
  {
    id: 1,
    lokasi: "Eco Park",
    posName: "Get Closer with Nature",
    clues: [
      {
        category: "Photo Challenge",
        mission: [
          "Fotolah dibawah tanaman cinta. Dia di dekat unggas yang terkenal cantik (1 medal)",
          "Keren banget foto di atas air! Burung jawa bisa kasih tau kamu lokasinya (1 medal)"
        ]
      },
      {
        category: "Lets Get Fit Together",
        mission: [
          "Carilah panitia yang berjaga di pos. Ia punya misi khusus untuk kamu! (1 medal)"
        ]
      }
    ]
  },
  {
    id: 2,
    lokasi: "Pasar Seni",
    posName: "Get Closer with The Local Craftsman",
    clues: [
      {
        category: "Photo Challenge",
        mission: [
          "GH 324 (1 medal)",
          "Dikerubuti oleh serangga-serangga kecil yang membesar (1 medal)",
          "Tertulis pada tanggal 2 Juli 1977 (1 medal)"
        ]
      },
      {
        category: "Sharing Story",
        mission: [
          "Carilah salah satu seniman dan mintalah dia bercerita tentang seninya & kisah hidupnya. Pastikan seluruh kelompok kamu tau ceritanya yaa. Jangan lupa berfoto! (1 medal)"
        ]
      }
    ]
    // clue:
    //   "carilah ....... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ipsa officia quidem numquam ipsum doloribus. Porro praesentium saepe fugit eligendi?",
  },

  {
    id: 3,
    lokasi: "Halaman Ocean Dream",
    posName: "Get Closer with Your Aqua Friends",
    clues: [
      {
        category: "Photo Challenge",
        mission: [
          "Aku adalah mamalia yang sangat pintar dan mempunyai sonar. Hitunglah ada berapa bentuk 3 Dimensi ku yang tersebar di halaman tempat ini. Jangan lupa berfoto bersamaku ya (1 medal)",
          `Berapakah total sampah plastik yang membentuk trio si "pintar", si "pinnipeda" dan si "hitam putih" (1 medal)`
        ]
      },
      {
        category: "Tebak Temanmu",
        mission: [
          "Carilah panitia yang berjaga di pos. Ia punya misi khusus untuk kamu! (3 medal)"
        ]
      }
    ]
  },
  {
    id: 4,
    lokasi: "Danau",
    posName: "Get United",
    clues: [
      {
        category: "Photo Challenge",
        mission: [
          'Hitunglah berapa jumlah kata "KAMI" pada monumen putih. Jangan lupa berfoto! (1 medal)',
          'Namaku unik, 6 huruf. Kata orang-orang jahil, namaku bisa jadi memiliki kepanjangan "Pasangan Soleha Labil" (1 medal)'
        ]
      },
      {
        category: "Berlayar Bersama",
        mission: [
          "Naik kapal bersama seluruh anggota tim mu, berfotolah dengan background dan gaya terbaik menurut tim mu dan ceritakan ke panitia mengapa kalian memilih berfoto seperti itu! (1 medal)"
        ]
      }
    ]
    // clue:
    //   "batu ini terletak di ....... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ipsa officia quidem numquam ipsum doloribus. Porro praesentium saepe fugit eligendi?",
  },
  {
    id: 5,
    lokasi: "Mercure",
    posName: "Get to Know Your Kindness",
    clues: [
      {
        category: "Tell the Kindness",
        mission: [
          "Dengan label yang sudah disediakan, tuliskanlah kebaikan-kebaikan yang sudah dilakukan oleh masing-masing anggotamu!"
        ]
      },
      {
        category: "Team Photo",
        mission: [
          "Dengan semua sudah memiliki label di tubuh, berfotolah bersama! :)"
        ]
      }
    ]
    // clue:
    //   "carilah ....... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ipsa officia quidem numquam ipsum doloribus. Porro praesentium saepe fugit eligendi?",
  }
];

const dataToken = [
  ["R9SAU", "BUCVD", "VEXFY", "FYH2J", "2J3M5"],
  ["VDWEY", "FYGZH", "ZJ3K4", "K4N6P", "6P7R9"],
  ["ZH2J3", "K4M5N", "5P7Q8", "Q8SAT", "ATBVD"],
  ["5N6P7", "P8R9S", "9SBUC", "UCVEX", "EXFYH"],
  ["9SATB", "TCVDW", "DWFYG", "YGZJ3", "J3K4N"],
  ["CWEXF", "XFZH2", "H2J4M", "4M5N7", "P7Q8S"],
  ["G2J3K", "3K5N6", "N6P8R", "8R9SB", "TBUCV"],
  ["M6P7Q", "7Q9SA", "SATCV", "CVDWF", "XFYGZ"],
  ["R9TBU", "BUCWE", "WEXFZ", "GZH2J", "2K4M5"],
  ["VDXFY", "FYG2J", "2J3K5", "M5N6P", "6Q8R9"]
];

function App() {
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");
  const [players, setPlayers] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [stoneSelected, setStoneSelected] = useState("orange");
  const [congrat, setCongrat] = useState(false);
  // const trigger = <Button>Open Modal</Button>;

  const insertToken = () => {
    for (let i = 0; i < players.length; i++) {
      db.collection("dufan-players")
        .doc(players[i].id)
        .update({
          token: dataToken[i]
        })
        .then((doc) => {
          console.log("updated");
        })
        .catch(function(error) {
          console.error("Error createPM: ", error);
        });
    }
  };

  const login = async () => {
    // console.log(nama, password);
    // await hitDatabase();
    for (let i = 0; i < players.length; i++) {
      if (players[i].nama === nama && players[i].password === password) {
        setIsLogin(true);
        localStorage.setItem("dufanLogin", true);
        localStorage.setItem("dufanId", players[i].id);
        localStorage.setItem("dufanPic", players[i].pic);
        localStorage.setItem("dufanName", players[i].nama);

        Swal.fire({
          position: "center",
          icon: "success",
          title: `Welcome ${nama}`,
          showConfirmButton: false,
          timer: 1500
        });
        return console.log("true");
      }
    }
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Team Name / Password Salah!"
    });
    // setNama("");
    // setPassword("");
  };

  const cekToken = () => {
    console.log("token", token);
    let auth = false;
    let newToken = [];
    for (let i = 0; i < players.length; i++) {
      if (players[i].nama === localStorage.getItem("dufanName")) {
        for (let j = 0; j < players[i].token.length; j++) {
          if (players[i].token[j] === token) {
            auth = true;
          } else {
            newToken.push(players[i].token[j]);
          }
        }
      }
    }
    console.log(newToken);
    if (auth) {
      // updateDatabaseToken(localStorage.getItem("dufanId"), newToken);
      updateDatabase(localStorage.getItem("dufanId"), newToken);
      setToken("");
    } else {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Wrong key!!!"
      });
    }
  };

  const hitDatabase = () => {
    setIsLoading(true);
    db.collection("dufan-players")
      .orderBy("poin", "desc")
      .orderBy("time", "asc")
      .onSnapshot((querySnapshot) => {
        let players_temp = [];
        querySnapshot.forEach((doc) => {
          players_temp.push({
            id: doc.id,
            ...doc.data()
          });
        });
        setPlayers(players_temp);
      });
  };

  // const updateDatabaseToken = (id, newToken) => {
  //   console.log("newToken", newToken);

  //   db.collection("dufan-players")
  //     .doc(id)
  //     .update({
  //       token: newToken,
  //       time: new Date()
  //     })
  //     .then((doc) => {
  //       console.log("updated");
  //       setToken("");
  //       Swal.fire({
  //         position: "center",
  //         icon: "success",
  //         title: `Success Update Poin`,
  //         showConfirmButton: false,
  //         timer: 1500
  //       });
  //     })
  //     .catch(function(error) {
  //       console.error("Error createPM: ", error);
  //     });
  // };

  const updateDatabase = (id, newToken) => {
    setIsLoading(true);
    db.collection("dufan-players")
      .doc(id)
      .get()
      .then((doc) => {
        console.log("findOne", doc.data().poin);
        db.collection("dufan-players")
          .doc(id)
          .update({
            token: newToken,
            poin: doc.data().poin + 20,
            time: new Date()
          })
          .then((doc) => {
            console.log("updated");
            setIsLoading(false);
            Swal.fire({
              position: "center",
              icon: "success",
              title: `Success Update Poin`,
              showConfirmButton: false,
              timer: 1500
            });
          })
          .catch(function(error) {
            console.error("Error createPM: ", error);
          });
      })
      .catch(function(error) {
        console.error("Error createPM: ", error);
      });
  };

  const logout = () => {
    localStorage.removeItem("dufanLogin");
    localStorage.removeItem("dufanId");
    localStorage.removeItem("dufanPic");
    localStorage.removeItem("dufanName");

    setNama("");
    setPassword("");
    setIsLogin(false);
    setCongrat(false);
    Swal.fire("Bye Heroes!", "You Success Logout!", "success");
  };

  useEffect(() => {
    if (
      isLogin &&
      players.length > 0 &&
      players.filter((el) => el.nama === localStorage.getItem("dufanName"))[0]
        .poin === 0
    )
      setStoneSelected("orange");

    if (
      isLogin &&
      players.length > 0 &&
      players.filter((el) => el.nama === localStorage.getItem("dufanName"))[0]
        .poin === 20
    )
      setStoneSelected("ungu");

    if (
      isLogin &&
      players.length > 0 &&
      players.filter((el) => el.nama === localStorage.getItem("dufanName"))[0]
        .poin === 40
    )
      setStoneSelected("biru");

    if (
      isLogin &&
      players.length > 0 &&
      players.filter((el) => el.nama === localStorage.getItem("dufanName"))[0]
        .poin === 60
    )
      setStoneSelected("hijau");

    if (
      isLogin &&
      players.length > 0 &&
      players.filter((el) => el.nama === localStorage.getItem("dufanName"))[0]
        .poin === 80
    )
      setStoneSelected("merah");

    if (
      isLogin &&
      players.length > 0 &&
      players.filter((el) => el.nama === localStorage.getItem("dufanName"))[0]
        .poin === 100
    )
      setCongrat(true);
  }, [players, isLogin]);

  useEffect(() => {
    hitDatabase();
  }, []);

  useEffect(() => {
    if (players.length > 0) setIsLoading(false);
  }, [players]);

  useEffect(() => {
    setNama("");
    setPassword("");
    // setStoneSelected("orange");
  }, []);

  useEffect(() => {
    if (localStorage.getItem("dufanLogin")) {
      console.log("players", players);
      // setIsLogin(true);
      let flag = false;
      for (let i = 0; i < players.length; i++) {
        if (players[i].nama === localStorage.getItem("dufanName")) {
          setIsLogin(true);
          flag = true;
        }
      }
      if (!flag) {
        setIsLogin(false);
      }
    }
  }, [players]);

  return (
    <div className="App">
      <Wrapper>
        {!isLogin ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px"
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/new_map1.png"
                alt=""
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <div className="" style={{ marginBottom: "0px" }}>
                <form>
                  <div className="">
                    <div className="input-field col s6">
                      <i className="material-icons prefix">account_circle</i>
                      <input
                        id="icon_prefix"
                        type="text"
                        // className="validate"
                        value={nama}
                        onChange={(e) => setNama(e.target.value.toUpperCase())}
                      />
                      <label htmlFor="icon_prefix">Team Name</label>
                    </div>
                    <div className="input-field col s6">
                      <i className="material-icons prefix">vpn_key</i>
                      <input
                        id="icon_telephone"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        // className="validate"
                      />
                      <label htmlFor="icon_telephone">Password</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div onClick={() => login()} style={{ cursor: "pointer" }}>
              <img
                width="150px"
                src="https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/BUTN.png"
                alt=""
              />
            </div>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  width="25px"
                  height="25px"
                  style={{ borderRadius: "50%" }}
                  src={localStorage.getItem("dufanPic")}
                  alt=""
                />
                <span style={{ marginLeft: "10px" }}>
                  {localStorage.getItem("dufanName")}
                </span>
              </div>
              <div>
                <div className="btn-logout" onClick={() => logout()}>
                  <img
                    width="100%"
                    src="https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/exit.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {!congrat && (
              <>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h3
                    style={{
                      fontFamily: "Megrim",
                      marginBottom: "0px",
                      marginTop: "0px"
                    }}
                  >
                    Welcome Heroes
                  </h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "20px"
                  }}
                >
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/new_map1.png"
                    alt=""
                  />
                </div>
              </>
            )}

            {congrat && <Congrat></Congrat>}

            {!isLoading && !congrat && (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <div
                    className="stone-width"
                    // onClick={() => setStoneSelected("orange")}
                  >
                    <img
                      style={
                        stoneSelected === "orange"
                          ? { opacity: "1" }
                          : { opacity: "0.4" }
                      }
                      width="100%"
                      src="https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/orange.png"
                      alt=""
                    />
                  </div>

                  <LineProgess />

                  <div
                    className="stone-width"
                    // onClick={() => setStoneSelected("ungu")}
                  >
                    <img
                      style={
                        stoneSelected === "ungu"
                          ? { opacity: "1" }
                          : { opacity: "0.4" }
                      }
                      width="100%"
                      src="https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/ungu.png"
                      alt=""
                    />
                  </div>

                  <LineProgess />

                  <div
                    className="stone-width"
                    // onClick={() => setStoneSelected("biru")}
                  >
                    <img
                      style={
                        stoneSelected === "biru"
                          ? { opacity: "1" }
                          : { opacity: "0.4" }
                      }
                      width="100%"
                      src="https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/biru.png"
                      alt=""
                    />
                  </div>

                  <LineProgess />

                  <div
                    className="stone-width"
                    // onClick={() => setStoneSelected("hijau")}
                  >
                    <img
                      style={
                        stoneSelected === "hijau"
                          ? { opacity: "1" }
                          : { opacity: "0.4" }
                      }
                      width="100%"
                      src="https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/hijau.png"
                      alt=""
                    />
                  </div>

                  <LineProgess />

                  <div
                    className="stone-width"
                    // onClick={() => setStoneSelected("merah")}
                  >
                    <img
                      style={
                        stoneSelected === "merah"
                          ? { opacity: "1" }
                          : { opacity: "0.4" }
                      }
                      width="100%"
                      src="https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/merah.png"
                      alt=""
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center"
                  }}
                >
                  {console.log(
                    urutin(
                      isLogin &&
                        players.length > 0 &&
                        players.filter(
                          (el) => el.nama === localStorage.getItem("dufanName")
                        )[0].urutan
                    )
                  )}
                  {urutin(
                    isLogin &&
                      players.length > 0 &&
                      players.filter(
                        (el) => el.nama === localStorage.getItem("dufanName")
                      )[0].urutan
                  ).map((item, index) => (
                    <div key={index}>
                      {stoneSelected === item.color && (
                        <>
                          {" "}
                          <h5>
                            <i className="material-icons">location_on</i>"
                            {item.posName.toUpperCase()}"{" "}
                          </h5>
                          {/* <span>{item.clues.mission[0]}</span> */}
                          {item.clues.map((el, i) => (
                            <React.Fragment key={i}>
                              <h6 style={{ textAlign: "left" }}>
                                {i + 1}. {el.category}
                              </h6>
                              <ul style={{ marginLeft: "6%" }}>
                                {el.mission.map((misi, index) => (
                                  <li
                                    style={{
                                      textAlign: "left",
                                      listStyleType: "disc"
                                    }}
                                    key={index}
                                  >
                                    {" "}
                                    {misi}
                                  </li>
                                ))}
                              </ul>
                            </React.Fragment>
                          ))}
                        </>
                      )}
                    </div>
                  ))}
                  <div
                    className="input-field col s6"
                    style={{ marginBottom: "0px" }}
                  >
                    <i className="material-icons prefix">confirmation_number</i>
                    <input
                      type="text"
                      value={token}
                      placeholder="Input Secret Key to unlock next..."
                      onChange={(e) => setToken(e.target.value.toUpperCase())}
                    />
                  </div>
                  <div style={{ width: "125px" }} onClick={() => cekToken()}>
                    <img
                      width="100%"
                      src="https://s3-ap-southeast-1.amazonaws.com/static.klob.id/img/landing-klobmeter-doors/btnticket.png"
                      alt=""
                    />
                  </div>
                </div>
              </>
            )}

            {!isLoading && isLogin && (
              <>
                {/* <hr /> */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Megrim",
                      marginBottom: "2 0px",
                      marginTop: "30px"
                    }}
                  >
                    LeaderBoard
                  </h3>
                </div>
              </>
            )}
          </>
        )}
        {isLoading && isLogin && <Loading />}
        {!isLoading && isLogin && <LeaderBoard players={players}></LeaderBoard>}
        <button onClick={() => insertToken()}>tambah key</button>
        <div className="footer-copyright center" style={{ marginTop: "50px" }}>
          <div className="container">© 2020 by AM Team</div>
        </div>
      </Wrapper>
    </div>
  );
}

export default App;

function urutin(arr) {
  let output = [];
  let color = ["orange", "ungu", "biru", "hijau", "merah"];
  arr.map((el, index) =>
    output.push({ ...dataClues[el - 1], color: color[index] })
  );
  return output;
}
