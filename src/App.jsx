import { useState, useEffect, useCallback } from 'react'
import './App.scss'

const stock = {
  0: {img: null, type: "Vide", color: "Vide", title: "Vide"},
  1: {img: "/path.png", type: "Chemin", color: "marron", title: "Chemin"},
  
  100: {img: "/anemone/blue.png", type: "Anemone", color: "bleu", title: "Anemone bleu"},
  110: {img: "/anemone/white.png", type: "Anemone", color: "blanc", title: "Anemone blanche"},
  120: {img: "/anemone/red.png", type: "Anemone", color: "rouge", title: "Anemone rouge"},
  130: {img: "/anemone/orange.png", type: "Anemone", color: "orange", title: "Anemone orange"},
  140: {img: "/anemone/pink.png", type: "Anemone", color: "Rose", title: "Anemone rose"},
  150: {img: "/anemone/purple.png", type: "Anemone", color: "violet", title: "Anemone violette"},

  160: {img: "/chrysantheme/purple.png", type: "Chrysantheme", color: "violet", title: "Chrysantheme violet"},
  170: {img: "/chrysantheme/pink.png", type: "Chrysantheme", color: "rose", title: "Chrysantheme rose"},
  180: {img: "/chrysantheme/green.png", type: "Chrysantheme", color: "vert", title: "Chrysantheme verte"},
  190: {img: "/chrysantheme/red.png", type: "Chrysantheme", color: "rouge", title: "Chrysantheme rouge"},
  200: {img: "/chrysantheme/white.png", type: "Chrysantheme", color: "blanc", title: "Chrysantheme blanche"},
  210: {img: "/chrysantheme/yellow.png", type: "Chrysantheme", color: "jaune", title: "Chrysantheme jaune"},

  220: {img: "/cosmos/yellow.png", type: "Cosmos", color: "jaune", title: "Cosmos jaune"},
  230: {img: "/cosmos/pink.png", type: "Cosmos", color: "rose", title: "Cosmos rose"},
  240: {img: "/cosmos/orange.png", type: "Cosmos", color: "orange", title: "Cosmos orange"},
  250: {img: "/cosmos/red.png", type: "Cosmos", color: "rouge", title: "Cosmos rouge"},
  260: {img: "/cosmos/white.png", type: "Cosmos", color: "blanc", title: "Cosmos blanche"},
  270: {img: "/cosmos/black.png", type: "Cosmos", color: "noir", title: "Cosmos noire"},

  280: {img: "/jacinthe/yellow.png", type: "Jacinthe", color: "jaune", title: "Jacinthe jaune"},
  290: {img: "/jacinthe/pink.png", type: "Jacinthe", color: "rose", title: "Jacinthe rose"},
  300: {img: "/jacinthe/orange.png", type: "Jacinthe", color: "orange", title: "Jacinthe orange"},
  310: {img: "/jacinthe/red.png", type: "Jacinthe", color: "rouge", title: "Jacinthe rouge"},
  320: {img: "/jacinthe/white.png", type: "Jacinthe", color: "blanc", title: "Jacinthe blanche"},
  330: {img: "/jacinthe/blue.png", type: "Jacinthe", color: "bleu", title: "Jacinthe bleu"},
  340: {img: "/jacinthe/purple.png", type: "Jacinthe", color: "violet", title: "Jacinthe violette"},

  350: {img: "/lys/yellow.png", type: "Lys", color: "jaune", title: "Lys jaune"},
  360: {img: "/lys/pink.png", type: "Lys", color: "rose", title: "Lys rose"},
  370: {img: "/lys/orange.png", type: "Lys", color: "orange", title: "Lys orange"},
  380: {img: "/lys/red.png", type: "Lys", color: "rouge", title: "Lys rouge"},
  390: {img: "/lys/white.png", type: "Lys", color: "blanc", title: "Lys blanche"},
  400: {img: "/lys/black.png", type: "Lys", color: "noir", title: "Lys noire"},

  410: {img: "/muguet/alone.png", type: "Muguet", color: "white", title: "Muguet"},

  420: {img: "/pensee/yellow.png", type: "Pensée", color: "jaune", title: "Pensée jaune"},
  440: {img: "/pensee/orange.png", type: "Pensée", color: "orange", title: "Pensée orange"},
  450: {img: "/pensee/red.png", type: "Pensée", color: "rouge", title: "Pensée rouge"},
  460: {img: "/pensee/white.png", type: "Pensée", color: "blanc", title: "Pensée blanche"},
  470: {img: "/pensee/blue.png", type: "Pensée", color: "bleu", title: "Pensée bleu"},
  480: {img: "/pensee/purple.png", type: "Pensée", color: "violet", title: "Pensée violette"},

  490: {img: "/pissenlit/alone.png", type: "Pissenlit", color: "jaune", title: "Pissenlit"},
  491: {img: "/pissenlit/head.png", type: "Pissenlit", color: "blanc", title: "Tête de pissenlit"},

  500: {img: "/rose/yellow.png", type: "Rose", color: "jaune", title: "Rose jaune"},
  510: {img: "/rose/orange.png", type: "Rose", color: "orange", title: "Rose orange"},
  520: {img: "/rose/red.png", type: "Rose", color: "rouge", title: "Rose rouge"},
  530: {img: "/rose/white.png", type: "Rose", color: "blanc", title: "Rose blanche"},
  540: {img: "/rose/blue.png", type: "Rose", color: "bleu", title: "Rose bleu"},
  550: {img: "/rose/purple.png", type: "Rose", color: "violet", title: "Rose violette"},
  560: {img: "/rose/gold.png", type: "Rose", color: "or", title: "Rose dorée"},
  570: {img: "/rose/pink.png", type: "Rose", color: "rose", title: "Rose rose"},
  580: {img: "/rose/black.png", type: "Rose", color: "noir", title: "Rose noire"},

  590: {img: "/tulipe/yellow.png", type: "Tulipe", color: "jaune", title: "Tulipe jaune"},
  600: {img: "/tulipe/orange.png", type: "Tulipe", color: "orange", title: "Tulipe orange"},
  610: {img: "/tulipe/red.png", type: "Tulipe", color: "rouge", title: "Tulipe rouge"},
  620: {img: "/tulipe/white.png", type: "Tulipe", color: "blanc", title: "Tulipe blanche"},
  640: {img: "/tulipe/purple.png", type: "Tulipe", color: "violet", title: "Tulipe violette"},
  660: {img: "/tulipe/pink.png", type: "Tulipe", color: "rose", title: "Tulipe rose"},
  670: {img: "/tulipe/black.png", type: "Tulipe", color: "noir", title: "Tulipe noire"},

  680: {img: "/violette/blue.png", type: "Violette", color: "bleu", title: "Violette bleu"},
  690: {img: "/violette/purple.png", type: "Violette", color: "violet", title: "Violette violette"},
  700: {img: "/violette/white.png", type: "Violette", color: "blanc", title: "Violette blanche"},
  710: {img: "/violette/yellow.png", type: "Violette", color: "jaune", title: "Violette jaune"},
}

function App() {
  const [currentGrid, setCurrentGrid] = useState(null)
  const [selectedFlower, setSelectedFlower] = useState(null)
  const [saveName, setSaveName] = useState("")
  const [loadPossible, setLoadPossible] = useState([])
  const [selectedSave, setSelectedSave] = useState("...")
  const [search, setSearch] = useState("");
  const [searchView, setSearchView] = useState(null);

  const handleSearch = (e) => {
    if(setSearchView === "") setSearchView(null);

    setSearch(e.target.value);
    const promptSearch = e.target.value.toLowerCase();
    const tmp = [];

    for(let e in stock) {
      if(stock[e].type.toLowerCase().includes(promptSearch) ||
      stock[e].title.toLowerCase().includes(promptSearch) || 
      stock[e].color.toLowerCase().includes(promptSearch)) {
        tmp.push({...stock[e], id: e});
      }
    }

    setSearchView(tmp);
  }

  const createGrid = useCallback(async (_from, n, m) => {
    const grid = Array.from({ length: n }, () => Array(m).fill("0"))
    setCurrentGrid(grid)
  }, [])

  const handleSave = useCallback(() => {
    if (!saveName) return
    localStorage.setItem(saveName, JSON.stringify(currentGrid))
    getLoadPossible().then(() => {
      setSelectedSave(saveName)
      alert("Sauvegarde effectuée, n'oublie pas de la charger si c'est une nouvelle.")
    })
  }, [saveName, currentGrid])

  const putFlowerSelected = useCallback((x, y) => {
    console.log(selectedFlower)
    if (!selectedFlower) return
    setCurrentGrid(prev => {
      if (!prev) return prev
      const newGrid = prev.map(row => row.slice())
      newGrid[x][y] = selectedFlower
      return newGrid
    })
  }, [selectedFlower])

  const loadSave = useCallback((name = null) => {
    const key = name || selectedSave
    if (!key) return
    const item = localStorage.getItem(key)
    if (!item) return
    setCurrentGrid(JSON.parse(item))
  }, [selectedSave])

  const selectFlower = useCallback((id) => setSelectedFlower(id), [])

  const handleChangeSaveName = useCallback((e) => setSaveName(e.target.value), [])

  const getLoadPossible = useCallback(async () => {
    setLoadPossible(Object.keys(localStorage))
  }, [])

  const handleChangeSaveToLoad = useCallback((e) => {
    const value = e.target.value
    setSelectedSave(value)
    setSaveName(value)
    loadSave(value)
  }, [loadSave])

  const removeSave = useCallback(() => {
    if (!selectedSave || selectedSave === "...") return
    localStorage.removeItem(selectedSave)
    reset()
  }, [selectedSave])

  const reset = useCallback(() => {
    setSelectedSave("...")
    setSaveName("")
    createGrid(null, 10, 15)
    getLoadPossible()
  }, [createGrid, getLoadPossible])

  useEffect(() => {
    reset()
  }, [reset])

  return (
    <div id="app-container">
      <div id="controls">
        <div>
          <p>Sauvegarde</p>
        </div>
        <div id="controls-save">
          <input
            value={saveName}
            type="text"
            onChange={handleChangeSaveName}
            placeholder="Nom de la nouvelle sauvegarde"
          />
          <button onClick={handleSave}>Sauvegarder</button>
        </div>
        <div id="controls-load">
          <select onChange={handleChangeSaveToLoad} value={selectedSave}>
            <option disabled value="...">~~ Tes sauvegardes ~~</option>
            {loadPossible.map((v, k) => (
              <option key={k} value={v}>{v}</option>
            ))}
          </select>
          <button className="del" onClick={removeSave}>Supprimer</button>
        </div>
        <button onClick={reset} className="del">Effacer tout</button>
      </div>
      <div id="grid-container">
        {currentGrid && currentGrid.map((row, x) => (
          <div className="tile-container" key={x}>
            {row.map((cell, y) => (
              <div className="tile" key={y} onClick={() => putFlowerSelected(x, y)}>
                <img src={stock[cell].img} className={cell > 1 ? "contour" : ""} alt="" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div id="explorer-container">
        <p>Recherche</p>
        <div id="explorer-search">
          <input value={search} onChange={handleSearch} type="text" placeholder='Couleur, nom/type de plante' />
        </div>

        <div id="explorer-list-container">

        {searchView && searchView.length > 0
          ? searchView.map((item, k) => (
              <button
                id={selectedFlower === item.id ? "choosen-one" : ""}
                key={k}
                onClick={() => selectFlower(item.id)}
              >
                <img src={item.img} alt="" />
                <p>{item.title}</p>
              </button>
            ))
          : Object.keys(stock).map((v, k) => (
              <button
                id={selectedFlower === v ? "choosen-one" : ""}
                key={k}
                onClick={() => selectFlower(v)}
              >
                <img src={stock[v].img} alt="" />
                <p>{stock[v].title}</p>
              </button>
            ))
        }
        </div>
      </div>
    </div>
  )
}

export default App