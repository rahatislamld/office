import { Button, TextField, Card, Grid, CardContent } from "@material-ui/core";

function SettingsForm() {
  return (
    <Card style={{ maxWidth: "600px", margin: "0 auto", marginTop: "20px" }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Admin Name"
              variant="outlined"
              color="primary"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              color="primary"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ width: "100%" }}
            >
              Save Settings
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default SettingsForm;
