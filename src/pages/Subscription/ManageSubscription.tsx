import { useState, FormEvent } from "react";
import { Container, Typography, TextField, Button, Snackbar } from "@mui/material";
// import db from "../../connection"; // Make sure to import the Firestore instance correctly

const ManageSubscription = () => {
  const [DateEnd, setDateEnd] = useState("");
  const [DateStart, setDateStart] = useState("");
  const [Price, setPrice] = useState("");
  const [Type, setType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // await db.collection("abonnementen").add({
      //   DateEnd,
      //   DateStart,
      //   Price,
      //   Type
      // });

      setIsSuccess(true);
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Fout bij het aanvragen van een abonnement: ", error);
      setError("Fout bij het aanvragen van een abonnement. Probeer het later opnieuw.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Abonnement aanvragen
      </Typography>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          fullWidth
          label="DateStart"
          variant="outlined"
          margin="normal"
          type="text"
          placeholder="Voer uw naam in"
          value={DateEnd}
          onChange={(e) => setDateEnd(e.target.value)}
        />

        <TextField
          fullWidth
          label="E-mailadres"
          variant="outlined"
          margin="normal"
          type="email"
          placeholder="Voer uw e-mailadres in"
          value={DateStart}
          onChange={(e) => setDateStart(e.target.value)}
        />

        <TextField
          fullWidth
          label="Prijs"
          variant="outlined"
          margin="normal"
          type="text"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
          disabled
        />

        <TextField
          fullWidth
          select
          label="Abonnementstype"
          variant="outlined"
          margin="normal"
          value={Type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Basis">Basis</option>
          <option value="Premium">Premium</option>
          <option value="Deluxe">Deluxe</option>
        </TextField>

        <Button variant="contained" color="primary" type="submit" sx={{ mt: 3 }}>
          Aanmelden
        </Button>
      </form>

      {isLoading && <Typography variant="body1" sx={{ mt: 2 }}>Bezig met verwerken...</Typography>}
      {isSuccess && (
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message="Abonnement is aangemaakt."
        />
      )}
      {error && <Typography variant="body1" color="error" sx={{ mt: 2 }}>{error}</Typography>}
    </Container>
  );
};

export default ManageSubscription;
