import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  updateMaps,
  updatePopulation,
  updateGeojson,
} from "../../store/actions";
import { db } from "../../firebase";

export default function Api() {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("maps")
      .orderBy("year")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        dispatch(updateMaps(data));
      });

    db.collection("population")
      .orderBy("year")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        dispatch(updatePopulation(data));
      });

    fetch("https://api.github.com/gists/aa98d983dc8392db28e710e1c888033f")
      .then((res) => res.json())
      .then((res) =>
        dispatch(updateGeojson(JSON.parse(res.files["map.geojson"].content)))
      );
  }, [dispatch]);

  return null;
}
