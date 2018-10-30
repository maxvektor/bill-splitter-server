import { Router, Request, Response } from "express";
import firestore from "../firebase";

const router: Router = Router();

router.get("/", async (req, res) => {
  firestore
    .collection("bills")
    .get()
    .then(snapshot => {
      const bills = snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      }));

      res.json(bills);
    });
});

export default router;
