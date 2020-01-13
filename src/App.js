import React, { useState, useEffect } from "react";
import db from "./config/firebase";
import Swal from "sweetalert2";
// import "animate.css";
import { Wrapper, H1Titile } from "./style";
import LeaderBoard from "./component/LeaderBoard";
import Loading from "./component/Loading";

function App() {
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");
  const [players, setPlayers] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const login = () => {
    console.log(nama, password);
    for (let i = 0; i < players.length; i++) {
      if (players[i].nama === nama && players[i].password === password) {
        setIsLogin(true);
        localStorage.setItem("dufanLogin", true);
        localStorage.setItem("dufanId", players[i].id);
        return console.log("true");
      }
    }
    console.log("false");
    Swal.fire({
      title: "Custom animation with Animate.css",
      showClass: {
        popup: "animated fadeInDown faster"
      },
      hideClass: {
        popup: "animated fadeOutUp faster"
      }
    });
  };

  const cekToken = () => {
    console.log("token", token);
    updateDatabase(localStorage.getItem("dufanId"));
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

  const updateDatabase = (id) => {
    db.collection("dufan-players")
      .doc(id)
      .get()
      .then((doc) => {
        console.log("findOne", doc.data().poin);
        db.collection("dufan-players")
          .doc(id)
          .update({
            poin: doc.data().poin + 1,
            time: new Date()
          })
          .then((doc) => {
            console.log("updated");
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
    setNama("");
    setPassword("");
    setIsLogin(false);
    Swal.fire("Good job!", "You clicked the button!", "success");
  };

  useEffect(() => {
    hitDatabase();
  }, []);

  useEffect(() => {
    if (players.length > 0) setIsLoading(false);
  }, [players]);

  useEffect(() => {
    if (localStorage.getItem("dufanLogin")) {
      console.log("login");
      setIsLogin(true);
    }
  }, []);

  return (
    <div className="App">
      <Wrapper>
        {/* {console.log(localStorage.getItem("dufanLogin"))} */}
        {!isLogin ? (
          <>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => login()}>add</button>
          </>
        ) : (
          <>
            <H1Titile>AM 2020</H1Titile>
            <button onClick={() => logout()}>logout</button>
            <ul>
              <li>
                1. POS A
                <input
                  type="text"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                />
                <button onClick={() => cekToken()}>submit</button>
              </li>
              <li>
                2. POS B
                <input
                  type="text"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                />
                <button onClick={() => cekToken()}>submit</button>
              </li>
              <li>
                3. POS C
                <input
                  type="text"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                />
                <button onClick={() => cekToken()}>submit</button>
              </li>
              <li>
                4. POS D
                <input
                  type="text"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                />
                <button onClick={() => cekToken()}>submit</button>
              </li>
              <li>
                5. POS E
                <input
                  type="text"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                />
                <button onClick={() => cekToken()}>submit</button>
              </li>
            </ul>

            <div>
              {console.log(players)}
              <h1>Leader Board</h1>
              {/* {players.map((el, index) => (
                <div key={index}>
                  <span>
                    {el.nama} {el.poin}
                  </span>
                </div>
              ))} */}
            </div>
          </>
        )}
        {isLoading && isLogin && <Loading />}
        {!isLoading && isLogin && <LeaderBoard players={players}></LeaderBoard>}
      </Wrapper>
    </div>
  );
}

export default App;
