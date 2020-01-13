import db from "../config/firebase";

export function hitDatabase() {
  db.collection("dufan-players").onSnapshot((querySnapshot) => {
    let players_temp = [];
    querySnapshot.forEach((doc) => {
      players_temp.push({
        id: doc.id,
        ...doc.data()
      });
    });
    console.log("players_temp", players_temp);
  });
}
