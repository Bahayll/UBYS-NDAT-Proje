import { useTheme } from "@emotion/react";
import { Box, Button, TextField, Typography } from "@mui/material";
import SınıfListeItem from "./Components/SınıfListeItem";

export default function SinifListeGoruntule({ type }) {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "50vh" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {type === "Bütünleme Listesi" && (
          <Box display={"flex"}>
            <Button
              sx={{
                bgcolor: theme.palette.success.main,
                marginRight: "10px",
                ":hover": { backgroundColor: theme.palette.success.main },
              }}
            >
              Hepsini Onayla{" "}
            </Button>
            <Button
              sx={{
                bgcolor: theme.palette.error.main,
                ":hover": { backgroundColor: theme.palette.error.main },
              }}
            >
              Hepsini Reddet
            </Button>
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: "10px",
            marginBottom: "10px ",
          }}
        >
          <Typography mx={2}>Bul:</Typography>
          <TextField label="İsim giriniz" variant="outlined" />
        </Box>
        {type === "Not Giriş" && (
          <Box display={"flex"}>
            <Button>Vize İlan Et</Button>
            <Button>Final İlan Et</Button>
            <Button>Büt İlan Et</Button>
          </Box>
        )}
      </Box>

      <Box
        sx={{
          overflow: "auto",
        }}
      >
        {array.map((item) => {
          return <SınıfListeItem type={type} key={item} />;
        })}
      </Box>
    </Box>
  );
}
