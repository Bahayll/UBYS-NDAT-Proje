import { useNavigate } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import {
  calculateSubjectsPoint,
  calculateSubjectsHBN,
} from "utils/helper-functions";

const TableRow = ({ data }) => {
  const { courseName, final, midTerm, attendanceFulfilled } = data;

  const points = calculateSubjectsPoint(midTerm, final);
  const hbn = calculateSubjectsHBN(points);
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          height: "133px",
          gridTemplateRows: "1fr 1fr 1fr 1fr",
          gridTemplateColumns: "1.5fr 2fr 1fr 1fr 3fr 2fr 2fr 1fr 2fr",
          borderBottom: "1px solid #B3B3B3",
          borderLeft: "1px solid #B3B3B3",
          borderRight: "1px solid #B3B3B3",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gridRow: "1/5",
            borderRight: "1px solid #B3B3B3",
          }}
        >
          <Typography
            onClick={() => {
              navigate("3003BML");
            }}
            color="primary"
            sx={{
              "&:hover": {
                cursor: "pointer",
                color: "primary.dark",
              },
            }}
            variant="subtitle2"
          >
            3003BML
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gridRow: "1/5",
          }}
        >
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            {courseName}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gridRow: "1/5",
            borderRight: "1px solid #B3B3B3",
            borderLeft: "1px solid #B3B3B3",
          }}
        >
          <Typography variant="body2">3,00</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gridRow: "1/5",
            borderRight: "1px solid #B3B3B3",
          }}
        >
          <Typography variant="body2">5,00</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gridRow: "1/5",
          }}
        >
          <Typography variant="body2">{}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gridRow: "1/2",
            borderRight: "1px solid #B3B3B3",
            borderBottom: "1px solid #B3B3B3",
            borderLeft: "1px solid #B3B3B3",
          }}
        >
          <Typography variant="body2">
            {attendanceFulfilled ? "Devamlı" : "Devamsız"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gridRow: "1/2",
            borderBottom: "1px solid #B3B3B3",
          }}
        >
          <Typography variant="body2">{points}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gridRow: "1/2",
            borderRight: "1px solid #B3B3B3",
            borderBottom: "1px solid #B3B3B3",
            borderLeft: "1px solid #B3B3B3",
          }}
        >
          <Typography variant="subtitle2">{hbn}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gridRow: "1/2",
            borderBottom: "1px solid #B3B3B3",
          }}
        >
          <Typography variant="body2">
            {points >= 60
              ? "Başarılı"
              : points >= 50
              ? "Koşulu Başarılı"
              : "Başarısız"}
          </Typography>
        </Box>
        <Box
          sx={{
            gridColumn: "6/10",
            gridRow: "2/3",
            display: "grid",
            gridTemplateColumns: "1fr 2.5fr",
            alignItems: "center",
            borderBottom: "1px solid #B3B3B3",
            borderLeft: "1px solid #B3B3B3",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gridColumn: "1/2",
              marginRight: "10px",
            }}
          >
            <Typography variant="subtitle2">Vize:</Typography>
          </Box>
          <Box
            sx={{
              gridColumn: "2/3",
            }}
          >
            <Typography variant="body2">{midTerm}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: "6/10",
            gridRow: "3/4",
            display: "grid",
            gridTemplateColumns: "1fr 2.5fr",
            alignItems: "center",
            borderBottom: "1px solid #B3B3B3",
            borderLeft: "1px solid #B3B3B3",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gridColumn: "1/2",
              marginRight: "10px",
            }}
          >
            <Typography variant="subtitle2">Final:</Typography>
          </Box>
          <Box
            sx={{
              gridColumn: "2/3",
            }}
          >
            <Typography variant="body2">{final}</Typography>
          </Box>
        </Box>{" "}
        <Box
          sx={{
            gridColumn: "6/10",
            gridRow: "4/5",
            display: "grid",
            gridTemplateColumns: "1fr 2.5fr",
            alignItems: "center",
            borderLeft: "1px solid #B3B3B3",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gridColumn: "1/2",
              marginRight: "10px",
            }}
          >
            <Typography variant="subtitle2">Bütünleme:</Typography>
          </Box>
          <Box
            sx={{
              gridColumn: "2/3",
            }}
          >
            <Typography variant="body2">-</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TableRow;
