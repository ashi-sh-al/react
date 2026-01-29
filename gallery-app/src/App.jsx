import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const TOTAL_PAGES = 100;

  const getData = async (pageNumber) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${pageNumber}&limit=10`
      );
      setUserData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(page);
  }, [page]);

  return (
    <div className="h-screen overflow-auto p-4">
      <div className="flex justify-center h-[82%] flex-wrap gap-4 p-2">
        {loading ? (
          <h3 className="text-black text-sm text-center font-semibold mt-20">
            Loading...
          </h3>
        ) : (
          userData.map((elem) => (
            <Card key={elem.id} elem={elem} />
          ))
        )}
      </div>

      {/* MUI Pagination */}
      <div className="flex justify-center p-4">
        <Stack spacing={2}>
          <Pagination
            count={TOTAL_PAGES}
            page={page}
            onChange={(event, value) => setPage(value)}
            color="primary"
          />
        </Stack>
      </div>
    </div>
  );
};

export default App;
