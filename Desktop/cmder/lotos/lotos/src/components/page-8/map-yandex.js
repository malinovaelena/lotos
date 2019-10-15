import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapData = {
  center: [55.751574, 37.573856],
  zoom: 5,
};

const coordinates = [
  [55.684758, 37.738521],
  [57.684758, 39.738521]
];

const App() => (<YMaps>
        <div>
        My awesome application with maps!
        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
        </div>
    </YMaps>);
//render (<App/>);
export default App;
/*<Map defaultState={mapData}>
      {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
    </Map>*/