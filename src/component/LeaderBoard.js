import React from "react";
import { Wrapper } from "./style";
import Top1 from "./Top1";
import Top2 from "./Top2";
import Top3 from "./Top3";
import Top4 from "./Top4";

const dataTeam = [
  {
    no: 1,
    teamName: "HUMANITY",
    member: [
      "Heru Yuwono",
      "Linda Umar",
      "Imam Sayuti Ogiansyah",
      "Linda Jayanti Agustini",
      "Surachman",
      "Fajar Hikmat Hidayat",
      "Malinda",
      "Talitha Hapsari Nurdijanti",
      "Anita Pratanti Waworuntu",
      "Rohely Safitri",
      "Josandy Maha Putra",
      "Hatta Triangga",
      "Maharani Syahratu Kertapati",
      "Aditya Vonan Mainzerino"
    ]
  },
  {
    no: 2,
    teamName: "SINCERITY",
    member: [
      "Cicik Tri Meylany Istiningtyas",
      "Audira Harsono",
      "Padma Pionir Ryuputra",
      "Mulyawan",
      "Wanda Arista Dana Paramitha",
      "Nurhadiyati",
      "Salsabi Rolansyah",
      "Ricky Hizkia Ferdianto",
      "Fakhrisal Dedisurya",
      "Christina Hartono",
      "Mashudi",
      "Vina Ganakin Pendit",
      "Ery Putra Anindya Wibowo"
    ]
  },
  {
    no: 3,
    // teamName: "IRON MAN",
    teamName: "VIRTUE",
    member: [
      "Yosep Sahea",
      "Sulistyawati Patricia",
      "Oktiana Lestari - Lista",
      "Yanuar Dwi Sasongko",
      "Rafael",
      "Astari Walidin",
      "Kalista Dewi Adenis",
      "Pandu Aditya Wirawan",
      "Nurul Dwikarimah",
      "Norinda Dwirahmanti",
      "Ananto Abdurrahman",
      "Ahmet ferdiansyah",
      "Yuri Yogaswara",
      "Apung Sumengkar"
    ]
  },
  {
    no: 4,
    // teamName: "SPIDERMAN",
    teamName: "AFFECTION",
    member: [
      "Yeni Yulianti",
      "Primita Rahmani",
      "Cut Nyak Inseun Faradena",
      "Muhammad Hamdan Kautsar",
      "M.A Ramadhan C. Salim",
      "Darsono",
      "Pujani Nadine Kamarwan",
      "Ayatullah Syauqi Qasthalani",
      "Dio Riandika",
      "Gusti Ayu Ketut Vitha Adinda",
      "Denny Eviany",
      "Endah Susilaningtyas Afiff",
      "Aditya Rikidaniel",
      "Desey Irawati Saragih"
    ]
  },
  {
    no: 5,
    // teamName: "VISION",
    teamName: "UNDERSTANDING",
    member: [
      "Syaiful",
      "Sabaruddin",
      "Felicia Maukar",
      "Muhammad Auliya Rahman",
      "Maria Dhamayanti",
      "Linda Yanti",
      "Amat Miftakhudin",
      "Anindita Laksmiputri",
      "Diyah Ambarwati",
      "Erika Marlina",
      "Rozan Anwar",
      "Dara Larasati",
      "Irri Fisher Nunut Napitupulu"
    ]
  },
  {
    no: 6,
    // teamName: "BLACK PANTHER",
    teamName: "PATIENCE",
    member: [
      "Winartaulina",
      "Maulydia",
      "sari pitaloka",
      "Rangga Antonio Novalisky",
      "Trianasari Dhamayanti",
      "Noviliantina",
      "Adji Pradana",
      "Diandra Krista Sasongko",
      "Fariz Emirsyah Afiff",
      "Dadan Sukma Saputra",
      "Hani Hedianti",
      "Hendra Iskandar Lubis",
      "Shabrina Kuswardani",
      "Ramadhany Yusuf"
    ]
  },
  {
    no: 7,
    // teamName: "HULK",
    teamName: "CHARITY",
    member: [
      "soni wibisono",
      "Boy Firmanto",
      "Slamet Riadi",
      "Niluh Putu Ayu Dewi Artalina",
      "Rido Sandi Atmanto",
      "Sekar Arum Cindardini",
      "Karel Adiwardoyo",
      "Rizki Utami",
      "Kadiran",
      "Andi Wijaya",
      "Jeanne Agnes Tiur Mauli",
      "Ricardo Irwan Rei",
      "Nita Laurina Wibowo",
      "Ridho Yulio Rahmadino",
      "Ahmad Sahroji"
    ]
  },
  {
    no: 8,
    // teamName: "CAPTAIN AMERICA",
    teamName: "TOLERANCE",
    member: [
      "Ranessia",
      "Novian Ade Chandra",
      "Gavin Torinno Hardipura",
      "Novy Fenycia",
      "Imanuddin",
      "Karina Amalia",
      "Muhammad Luthfi Fauruza",
      "Ismalia",
      "Diptraya Pramandana Ratulangi",
      "Rizka Setiyana",
      "Devita Triana",
      "Bambang Setiawan",
      "Ketut Saguna Narayana",
      "Duma Meividia Malaon",
      "Meitriani Dian Utami"
    ]
  },
  {
    no: 9,
    teamName: "GRACE",
    // teamName: "THOR",
    member: [
      "wesiana",
      "Satio Pramono",
      "Muhammad Gazimahdi",
      "Indri Suseno",
      "Dharma Novriansyah",
      "Putri Rizki Virajati",
      "Hasya Millatina",
      "Revky Randa",
      "Hilmawan",
      "Aldira Gusana Meyer",
      "Afda",
      "Ahmad Wahyudi",
      "Dini Damayanti Makmun",
      "Rainier Gustav Ferdinand Turangan",
      "Ario Bimo"
    ]
  },
  {
    no: 10,
    teamName: "SYMPATHY",
    // teamName: "ANT MAN",
    member: [
      "Diah Arum Witasari",
      "Adinda Fudia Hanamici",
      "Hilda Stiani",
      "Hendri Syahputra",
      "Ali Said",
      "Muhammad Yusuf",
      "Ulisari",
      "Syarip Hidayat",
      "Azka Merci Fauzia Lestarie",
      "Sarwin",
      "Dian Rosdiana",
      "Jusni",
      "Dicky Herlambang",
      "Khansa Karima"
    ]
  }
];

function LeaderBoard(props) {
  console.log("leaderboar", props);

  return (
    <Wrapper>
      <div className="">
        <div className="top3">
          {props.players.map(
            (player, index) =>
              index === 1 && (
                <Top2 key={index} player={player} dataTeam={dataTeam}></Top2>
              )
          )}
          {props.players.map(
            (player, index) =>
              index === 0 && (
                <Top1 key={index} player={player} dataTeam={dataTeam}></Top1>
              )
          )}

          {props.players.map(
            (player, index) =>
              index === 2 && (
                <Top3 key={index} player={player} dataTeam={dataTeam}></Top3>
              )
          )}
        </div>

        <div className="list">
          {props.players.map(
            (player, index) =>
              index > 2 && (
                <Top4
                  key={index}
                  player={player}
                  number={index + 1}
                  dataTeam={dataTeam}
                ></Top4>
              )
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default LeaderBoard;
