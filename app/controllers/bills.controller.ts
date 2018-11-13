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

router.post("/", async (req, res) => {
  const { value, userId } = req.body;

  firestore
    .collection("bills")
    .add({ value, userId })
    .then(snapshot => {
      const bill = {
        id: snapshot.id,
        data: {
          value,
          userId
        }
      };

      res.json(bill);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

export default router;
