import { useState, FormEvent } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import db from "../../connection"; // Make sure to import the Firestore instance correctly

const ManageSubscription = () => {
  const [DateEnd, setDateEnd] = useState("");
  const [DateStart, setDateStart] = useState("");
  const [Price, setPrice] = useState("Basis");
  const [Type, setType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await db.collection("abonnementen").add({
        DateEnd,
        DateStart,
        Price,
        Type
      });

      setIsSuccess(true);
    } catch (error) {
      console.error("Fout bij het aanvragen van een abonnement: ", error);
      setError("Fout bij het aanvragen van een abonnement. Probeer het later opnieuw.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h1>Abonnement aanvragen</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="naam">
          <Form.Label>Naam</Form.Label>
          <Form.Control
            type="text"
            placeholder="Voer uw naam in"
            value={DateEnd}
            onChange={(e) => setDateEnd(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>E-mailadres</Form.Label>
          <Form.Control
            type="email"
            placeholder="Voer uw e-mailadres in"
            value={DateStart}
            onChange={(e) => setDateStart(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="abonnementType">
          <Form.Label>Prijs</Form.Label>
          <Form.Control
            as="text"
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
            disabled
          >
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="abonnementType">
          <Form.Label>Abonnementstype</Form.Label>
          <Form.Control
            as="select"
            value={Type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Basis">Basis</option>
            <option value="Premium">Premium</option>
            <option value="Deluxe">Deluxe</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Aanmelden
        </Button>
      </Form>

      {isLoading && <div className="loading">Bezig met verwerken...</div>}
      {isSuccess && (
        <Alert variant="success">Abonnement is aangemaakt.</Alert>
      )}
      {error && <Alert variant="danger">{error}</Alert>}
    </Container>
  );
};

export default ManageSubscription;