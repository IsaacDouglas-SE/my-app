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
  			var Ref1=document.getElementById("Regno");
  			var Ref2=document.getElementById("N");
        await fetch()
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
<button className="buttons">Select Squad</button><button className="button1">Save Squad</button>  <button className="buttons">Update player</button><button className="button2">Delete player</button><button className="button1">Create player</button>
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
                <td>20</td>
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
  <a option="">Isaac Douglas</a>
  <a option="">Dries Mertens</a>
  <a option="">Link 3</a>
  </div>
</div>
  <div><div class="dropdown">
  <button class="dropbtn">ST</button>
  <div class="dropdown-content">
  <a option="">Dries Mertens</a>
  <a option="">Isaac Douglas</a>
  <a option="">Link 3</a>
  </div>
</div></div>
  <div></div>
  <div><div class="dropdown">
  <button class="dropbtn">LM</button>
  <div class="dropdown-content">
  <a option="">Link 1</a>
  <a option="">Link 2</a>
  <a option="">Link 3</a>
  </div>
</div></div>
  <div><div class="dropdown">
  <button class="dropbtn">CM</button>
  <div class="dropdown-content">
  <a option="">Lorenzo Insigne</a>
  <a option="">Allan</a>
  <a option="">Link 3</a>
  </div>
</div></div>
  <div><div class="dropdown">
  <button class="dropbtn">CM</button>
  <div class="dropdown-content">
  <a option="">Allan</a>
  <a option="">Lorenzo Insigne</a>
  <a option="">Link 3</a>
  </div>
</div></div>
  <div><div class="dropdown">
  <button class="dropbtn">RM</button>
  <div class="dropdown-content">
  <a option="">José Callejón</a>
  <a option="">Link 2</a>
  <a option="">Link 3</a>
  </div>
</div></div>
  <div><div class="dropdown">
  <button class="dropbtn">LB</button>
  <div class="dropdown-content">
  <a option="">Link 1</a>
  <a option="">Link 2</a>
  <a option="">Link 3</a>
  </div>
</div></div>
  <div><div class="dropdown">
  <button class="dropbtn">CB</button>
  <div class="dropdown-content">
  <a option="">Link 1</a>
  <a option="">Kalidou Koulibaly</a>
  <a option="">Link 3</a>
  </div>
</div></div>
  <div><div class="dropdown">
  <button class="dropbtn">CB</button>
  <div class="dropdown-content">
  <a option="">Kalidou Koulibaly</a>
  <a option="">Link 2</a>
  <a option="">Link 3</a>
  </div>
</div></div>
  <div><div class="dropdown">
  <button class="dropbtn">RB</button>
  <div class="dropdown-content">
  <a option="">Link 1</a>
  <a option="">Link 2</a>
  <a option="">Link 3</a>
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

<div>-></div>
<div>-></div>
<div>-></div>
<div>-></div>
<div>-></div>
<div>-></div>
<div>-></div>
<div>
          <form action="Process" method="Post" onSubmit ="return checkValues()">
	Regno:<input type="text" id="Regno" Name="Regno1"/>
	Name:<input type="text" id="N" Name="sname"/>
	<input type="submit"/>
</form>
  </div>
          </div>

       );
   }
}
