import React from "react";
import './home.css';

export class Home extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      firstState: []

    }

  }

UpdatePlayer() {

    }
async CreatePlayer() {
  			var Playername=document.getElementById("playername").value;
  			var Position=document.getElementById("position").value;
        var Rating=document.getElementById("rating").value;
        var Price=document.getElementById("price").value;
        var League=document.getElementById("league").value;
        var Club=document.getElementById("club").value;
        var Nationality=document.getElementById("nationality").value;
        var Quality=document.getElementById("quality").value;

        var playerlist = {
          playername: Playername,
          position: Position,
          rating:Rating,
          price:Price,
          league:League,
          club:Club,
          nationality:Nationality,
          quality:Quality
        };
        console.log(playerlist)
    await fetch('/CreatePlayer',{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playerlist)
    })
  }

DeletePlayer() {
  fetch("/DeletePlayer")
}
async myFunc() {

  fetch("/ShowAll")
  .then(response => response.json())
  .then(data => this.setState({
    firstState :data}))
  .then(data => console.log(this.state.firstState))

}
 myFunc2() {
  // this.state.firstState[0].map(firstState => console.log(firstState.playername) );
  console.log(this.state.firstState[0].playername);

}
render() {

  let playerlist = this.state.firstState;
    return (
      <div>
        <h1 className="Banner">FIFA 20 Ultimate Team Squad Builder</h1>
        <div>
          <button class="button" onClick={() => this.myFunc()}>Load Players</button>
          <button class="button" onClick={() => this.myFunc2()}>Single Player</button>
        <p>-</p>
        </div>
  <button className="buttons">Update player</button>  <button className="button2">Delete player</button>  <button class="button1" onClick={() => this.CreatePlayer()}>Create Player</button>
        <table className="table">
          <tr>
                <th>Playername</th>
                <th>Position</th>
                <th>Rating</th>
                <th>Price</th>
                <th>League</th>
                <th>Club</th>
                <th>Nationality</th>
                <th>Quality</th>
              </tr>
              <tr>
                <td>Isaac Douglas</td>
                <td>LWB</td>
                <td>99</td>
                <td>20000</td>
                <td>Series A</td>
                <td>Napoli</td>
                <td>England</td>
                <td>Special</td>
              </tr>
              <tr>
                <td>Kalidou Koulibaly</td>
                <td>CB</td>
                <td>89</td>
                <td>59000</td>
                <td>Series A</td>
                <td>Napoli</td>
                <td>Senegal</td>
                <td>Gold</td>
              </tr>
</table>

            {playerlist
              .map(player => (
                <table className="table">
                <tr>
                <td>{player.playername}</td>
                <td>{player.position}</td>
                <td>{player.rating}</td>
                <td>{player.price}</td>
                <td>{player.league}</td>
                <td>{player.club}</td>
                <td>{player.nationality}</td>
                <td>{player.quality}</td>
                  </tr>
                </table>
              ))
            }


<div class="grid-container">
  <div></div>
  <div class="dropdown">
  <button class="dropbtn">ST</button>
  <div class="dropdown-content">
  <label for="player"></label>
     <select id="player" name="player">
       <option value="GK1">ST1</option>
       <option value="GK2">ST2</option>
       <option value="GK3">ST3</option>
     </select>
  </div>
</div>
  <div><div class="dropdown">
  <button class="dropbtn">ST</button>
  <div class="dropdown-content">
  <label for="player"></label>
     <select id="player" name="player">
       <option value="GK1">ST1</option>
       <option value="GK2">ST2</option>
       <option value="GK3">ST3</option>
     </select>
  </div>
</div></div>
  <div></div>
  <div><div class="dropdown">
  <button class="dropbtn">LM</button>
  <div class="dropdown-content">
  <label for="player"></label>
     <select id="player" name="player">
       <option value="GK1">LM1</option>
       <option value="GK2">LM2</option>
       <option value="GK3">LM3</option>
     </select>
  </div>
</div></div>
  <div><div class="dropdown">
  <button class="dropbtn">CM</button>
  <div class="dropdown-content">
  <label for="player"></label>
     <select id="player" name="player">
       <option value="GK1">CM1</option>
       <option value="GK2">CM2</option>
       <option value="GK3">CM3</option>
     </select>
  </div>
</div></div>
  <div><div class="dropdown">
  <button class="dropbtn">CM</button>
  <div class="dropdown-content">
  <label for="player"></label>
     <select id="player" name="player">
       <option value="GK1">CM1</option>
       <option value="GK2">CM2</option>
       <option value="GK3">CM3</option>
     </select>
  </div>
</div></div>
  <div><div class="dropdown">
  <button class="dropbtn">RM</button>
  <div class="dropdown-content">
  <label for="player"></label>
     <select id="player" name="player">
       <option value="GK1">RM1</option>
       <option value="GK2">RM2</option>
       <option value="GK3">RM3</option>
     </select>
  </div>
</div></div>
  <div><div class="dropdown">
  <button class="dropbtn">LB</button>
  <div class="dropdown-content">
  <label for="player"></label>
     <select id="player" name="player">
       <option value="GK1">LB1</option>
       <option value="GK2">LB2</option>
       <option value="GK3">LB3</option>
     </select>
  </div>
</div></div>
  <div><div class="dropdown">
  <button class="dropbtn">CB</button>
  <div class="dropdown-content">
  <label for="player"></label>
     <select id="player" name="player">
       <option value="CB1">CB1</option>
       <option value="CB2">CB2</option>
       <option value="CB3">CB3</option>
     </select>
  </div>
</div></div>
  <div><div class="dropdown">
  <button class="dropbtn">CB</button>
  <div class="dropdown-content">
  <label for="player"></label>
     <select id="player" name="player">
       <option value="CB1">CB1</option>
       <option value="CB2">CB2</option>
       <option value="CB3">CB3</option>
     </select>
  </div>
</div></div>
  <div><div class="dropdown">
  <button class="dropbtn">RB</button>
  <div class="dropdown-content">
  <label for="player"></label>
     <select id="player" name="player">
       <option value="GK1">RB1</option>
       <option value="GK2">RB2</option>
       <option value="GK3">RB3</option>
     </select>
  </div>
</div></div>
</div>
<div className="GK"><div class="dropdown">
  <button class="dropbtn">GK</button>
  <div class="dropdown-content">
  <label for="player"></label>
     <select id="player" name="player">
       <option value="GK1">GK1</option>
       <option value="GK2">GK2</option>
       <option value="GK3">GK3</option>
     </select>
  </div>
</div></div>

<div>-</div>
<div>-</div>

<div>
  <form onSubmit ="return checkValues()">
  	Playername:<input type="text" id="playername" Name="playername"/>
    <p>-</p>
  	Position:<input type="text" id="position" Name="position"/>
    <p>-</p>
  	League:<input type="text" id="league" Name="league"/>
    <p>-</p>
  	Club:<input type="text" id="club" Name="club"/>
    <p>-</p>
  	Nationality:<input type="text" id="nationality" Name="nationality"/>
    <p>-</p>
  	Quality:<input type="text" id="quality" Name="quality"/>
    <p>-</p>
  	Rating:<input type="text" id="rating" Name="rating"/>
    <p>-</p>
  	Price:<input type="text" id="price" Name="price"/>

</form>
  </div>
          </div>

       );
   }
}
