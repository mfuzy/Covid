import React from "react";
import Card from "../Card/Card";
import LineChartTP from "./Charts/LineChartTP";
import LineChartKVU from "./Charts/LineChartKVU";
import LineChartI from "./Charts/LineChartI";
import styles from "./Slovensko.module.css";
import axios from "axios";

class Slovensko extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], tyzdenne: false };
    this.tyzdenneSwitch = this.tyzdenneSwitch.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/get-data")
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  //kumulativy:
  kumulativ(arr) {
    let kumulativ = [];
    let medzisucet = 0;

    for (let i = 0; i < arr.length; i++) {
      medzisucet += arr[i];
      kumulativ.push(medzisucet);
    }
    return kumulativ;
  }

  //skutocny pocet infikovanych (pozitivni - vylieceni - umrtia)
  infikovani(pozitivni, vylieceni, umrtia) {
    let infikovani = [];
    let medzisucet = 0;

    for (let i = 0; i < pozitivni.length; i++) {
      medzisucet += pozitivni[i] - vylieceni[i] - umrtia[i];
      infikovani.push(medzisucet);
    }
    return infikovani;
  }

  //suma od zaciatku po posledny den:
  total(arr) {
    return arr.reduce((acum, item) => {
      return acum + item;
    });
  }

  tyzdenneSwitch(e) {
    this.setState({ tyzdenne: !this.state.tyzdenne });
  }

  render() {
    let datumy,
      testy,
      pozitivni,
      kumulativ,
      vylieceni,
      umrtia,
      infikovani,
      posdatum,
      postesty,
      pospozitivni,
      percento,
      poskumulativ,
      posvylieceni,
      posumrtia,
      vyliecenitotal,
      umrtiatotal,
      posinfikovani,
      klmedian;

    if (this.state.data.length) {
      //data pre grafy:
      datumy = this.state.data.map((i, k) =>
        new Date(i.datum).toLocaleDateString()
      );
      testy = this.state.data.map((i, k) => i.testy);
      pozitivni = this.state.data.map((i, k) => i.pozitivni);
      vylieceni = this.state.data.map((i, k) => i.vylieceni);
      umrtia = this.state.data.map((i, k) => i.umrtia);

      //kumulativy pre vsetky dni
      kumulativ = this.kumulativ(pozitivni);

      //realne infikovani pre jednotlive dni (pozitivni - vylieceni - umrtia)
      infikovani = this.infikovani(pozitivni, vylieceni, umrtia);

      //data pre karty:
      //za posledný deň:
      posdatum = datumy[datumy.length - 1];
      postesty = testy[testy.length - 1];
      pospozitivni = pozitivni[pozitivni.length - 1];
      percento = (pospozitivni / postesty) * 100;
      poskumulativ = kumulativ[kumulativ.length - 1];
      posvylieceni = vylieceni[vylieceni.length - 1];
      posumrtia = umrtia[umrtia.length - 1];

      vyliecenitotal = this.total(vylieceni);
      umrtiatotal = this.total(umrtia);

      //aktualne realni infikovani:
      posinfikovani = poskumulativ - umrtiatotal - vyliecenitotal;

      //klzavy median za poslednych 7 dni (nezohladnuje pripady z karanteny)
      klmedian = pozitivni.slice(-7, pozitivni.length).sort((a, b) => a - b)[3];

      //grafy za posledny tyzden:
      if (this.state.tyzdenne) {
        datumy = datumy.slice(-7, datumy.length);
        testy = testy.slice(-7, testy.length);
        pozitivni = pozitivni.slice(-7, pozitivni.length);
        vylieceni = vylieceni.slice(-7, vylieceni.length);
        kumulativ = kumulativ.slice(-7, kumulativ.length);
        umrtia = umrtia.slice(-7, umrtia.length);
        infikovani = infikovani.slice(-7, infikovani.length);
      }
    }

    return (
      <div>
        <h1>Slovenko</h1>
        {this.state.data.length ? (
          <div>
            <div className={styles.container}>
              <Card
                trieda="red"
                nazov="Aktuálny prírastok pozitívnych"
                hodnota={pospozitivni}
                datum={posdatum}
              />

              <Card
                trieda="red"
                nazov="Aktuálne chorí (pozitívni - vyliečení - úmrtia)"
                hodnota={posinfikovani}
                datum={posdatum}
              />

              <Card
                trieda="blue"
                nazov="Aktuálny prírastok testov"
                hodnota={postesty}
                datum={posdatum}
              />
              <Card
                trieda="blue"
                nazov="Percento pozitívni/testovaní"
                hodnota={percento}
                datum={posdatum}
              />

              <Card
                trieda="green"
                nazov="Aktuálny prírastok vyliečených"
                hodnota={posvylieceni}
                datum={posdatum}
              />

              <Card
                trieda="green"
                nazov="Celkový počet vyliečených"
                hodnota={vyliecenitotal}
                datum={posdatum}
              />

              <Card
                trieda="black"
                nazov="Aktuálny prírastok úmrtí"
                hodnota={posumrtia}
                datum={posdatum}
              />

              <Card
                trieda="black"
                nazov="Celkový počet úmrtí"
                hodnota={umrtiatotal}
                datum={posdatum}
              />

              <Card
                trieda="yellow"
                nazov="Kĺzavý medián za 7 dní"
                hodnota={klmedian}
                datum={posdatum}
              />
            </div>
            <br />
            <hr />

            <div>
              <h2 style={{ textAlign: "center" }}>
                Grafy{" "}
                <button onClick={this.tyzdenneSwitch} className={styles.button}>
                  prepnúť na {this.state.tyzdenne ? "celkové" : "týždenné"}
                </button>
              </h2>

              <LineChartTP labels={datumy} data={pozitivni} data2={testy} />
              <br />
              <LineChartKVU
                labels={datumy}
                data={kumulativ}
                data2={vylieceni}
                data3={umrtia}
              />
              <br />
              <LineChartI labels={datumy} data={infikovani} />
            </div>
          </div>
        ) : (
          <p>LOADING...</p>
        )}
      </div>
    );
  }
}

export default Slovensko;
