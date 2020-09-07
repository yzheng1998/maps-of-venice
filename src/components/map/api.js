import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { updateMaps, updatePopulation } from "../../store/actions";
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
  }, [dispatch]);

  return null;
}
