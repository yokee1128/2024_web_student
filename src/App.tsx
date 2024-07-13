import { Chip } from "@mui/material";
import BasicDateCalendar from "./styles/Calendar";

function App() {
  return (
    <div className="text-sky-300">
      hello 팀원들
      <Chip label="woo" />
      <BasicDateCalendar />
    </div>
  );
}

export default App;
