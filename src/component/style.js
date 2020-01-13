import styled from "styled-components";

export const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Red+Hat+Display:400,900&display=swap");
  body,
  html {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: #4b4168;
    color: #333;
  }

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
    z-index: 10;
    font-family: "Red Hat Display", sans-serif;
  }

  .top3 {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: #4b4168;
  }
  .top3 .item {
    box-sizing: border-box;
    position: relative;
    background: white;
    width: 80%;
    height: 12rem;
    text-align: center;
    padding: 2.8rem 0 0;
    margin: 1rem 5px 2rem;
    border-radius: 0.5rem;
    -webkit-transform-origin: bottom;
    transform-origin: bottom;
    cursor: pointer;
    transition: -webkit-transform 200ms ease-in-out;
    transition: transform 200ms ease-in-out;
    transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
    box-shadow: 0 0 4rem 0 rgba(0, 0, 0, 0.1),
      0 1rem 2rem -1rem rgba(0, 0, 0, 0.3);
  }
  .top3 .item .pic {
    position: absolute;
    top: -2rem;
    left: 20%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    margin-right: 1rem;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2),
      0 1rem 1rem -0.5rem rgba(0, 0, 0, 0.3);
  }
  .top3 .item .pos {
    font-weight: 900;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  .top3 .item .name {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  .top3 .item .score {
    opacity: 0.5;
  }
  .top3 .item .score:after {
    display: block;
    content: "points";
    opacity: 0.5;
  }
  .top3 .item.one {
    width: 100%;
    height: 13rem;
    padding-top: 3.5rem;
  }
  .top3 .item.one .pic {
    width: 75px;
    height: 75px;
    left: 20%;
  }
  .top3 .item:hover {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }

  .list {
    padding-left: 2rem;
    margin: 0 auto;
  }
  .list .item {
    position: relative;
    display: flex;
    align-items: center;
    background: white;
    height: 3rem;
    border-radius: 4rem;
    margin-bottom: 2rem;
    background: #eaa786;
    -webkit-transform-origin: left;
    transform-origin: left;
    cursor: pointer;
    transition: -webkit-transform 200ms ease-in-out;
    transition: transform 200ms ease-in-out;
    transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
    box-shadow: 0 0 4rem 0 rgba(0, 0, 0, 0.1),
      0 1rem 2rem -1rem rgba(0, 0, 0, 0.3);
  }
  .list .item .pos {
    font-weight: 900;
    position: absolute;
    left: -2rem;
    text-align: center;
    font-size: 1.25rem;
    width: 1.5rem;
    color: black;
    opacity: 0.6;
    transition: opacity 200ms ease-in-out;
  }
  .list .item .pic {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    margin-right: 1rem;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2),
      0 1rem 1rem -0.5rem rgba(0, 0, 0, 0.3);
  }
  .list .item .name {
    flex-grow: 2;
    flex-basis: 10rem;
    font-size: 1.1rem;
  }
  .list .item .score {
    margin-right: 1.5rem;
    opacity: 0.5;
  }
  .list .item .score:after {
    margin-right: 1rem;
    content: "points";
    opacity: 0.5;
  }
  .list .item:hover {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
  .list .item:hover .pos {
    opacity: 0.8;
  }
`;
