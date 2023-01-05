import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Pages = () => {
  return (
    <div className="page-numbers">
      <Stack spacing={2}>
        <Pagination count={10} color="primary" />
      </Stack>
    </div>
  );
};
export default Pages;
