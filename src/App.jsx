import "./App.css";
import React from "react";

function Arama({ aramaMetni, onSearch }) {
  const handleChange = (event) => onSearch(event);
  return (
    <div>
      <label htmlFor="arama">Ara: </label>
      <input
        id="arama"
        type="text"
        onChange={handleChange}
        value={aramaMetni}
      />
    </div>
  );
}

function Yazi({ id, url, baslik, yazar, yorum_sayisi, puan }) {
  return (
    <li key={id}>
      <span>
        <a href={url}>{baslik}</a>,
      </span>
      <span>
        <b>Yazar:</b> {yazar},{" "}
      </span>
      <span>
        <b>Yorum Sayısı:</b> {yorum_sayisi},{" "}
      </span>
      <span>
        <b>Puan:</b> {puan}
      </span>
    </li>
  );
}

// Bileşenlerin baş harfi büyük olmalı
function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function (yazi) {
        return <Yazi key={yazi.id} {...yazi} />;
      })}{" "}
    </ul>
  );
}

function App() {
  const [aramaMetni, setAramaMetni] = React.useState(
    localStorage.getItem("aranan") || "React"
  );

  React.useEffect(() => {
    localStorage.setItem("aranan", aramaMetni);
  }, [aramaMetni]);

  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
    {
      baslik: "OceanBank Mobil Uygulaması",
      url: "wwww.google.com.tr",
      yazar: "Alperen Oğuz Küçükçal",
      yorum_sayisi: 14,
      puan: 4,
      id: 2,
    },
    {
      baslik: "Android Studio",
      url: "wwww.google.com.tr",
      yazar: "Atıl Samancıoğlu",
      yorum_sayisi: 2635,
      puan: 5,
      id: 3,
    },
    {
      baslik: "Java ile Spring Boot",
      url: "wwww.google.com.tr",
      yazar: "Engin Demiroğ",
      yorum_sayisi: 1258,
      puan: 4,
      id: 4,
    },
    {
      baslik: "C ile Veri Yapıları ve Algoritmaları",
      url: "wwww.google.com.tr",
      yazar: "Muhammed Maruf Öztürk",
      yorum_sayisi: 15,
      puan: 5,
      id: 5,
    }
  ];

  const arananYazilar = yaziListesi.filter(
    (item) =>
      item.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      item.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
  );

  // 1. aşama callback handler fonksiyonunu yazdık
  const handleSearch = (event) => setAramaMetni(event.target.value);

  return (
    // React.Fragment'ta yazılabilir, harici div kullanımını önler
    <>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch} />
      <p>
        <strong>{aramaMetni + " aranıyor.."}</strong>
      </p>
      <hr/>
 
        <Liste yazilar={arananYazilar} />
    
    </>
  );
}
export default App;