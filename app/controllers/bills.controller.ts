import { Router } from "express";
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

router.get("/:id", async (req, res) => {
  firestore
    .collection("bills")
    .doc(req.params.id)
    .get()
    .then(snapshot => {
      const bill = {
        id: snapshot.id,
        data: snapshot.data()
      };

      res.json(bill);
    });
});

export default router;
