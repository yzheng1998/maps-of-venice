import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { updateMaps } from "../../store/actions";
import { db } from "../../firebase";

export default function Api() {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("maps")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        dispatch(updateMaps(data));
      });
  });

  return null;
}
