import { Chip } from "@mui/material";

const SideMenus = () => {
  return (
    <div className="flex flex-col gap-5">
      <Chip label="홈으로" component="a" href="mainpage" clickable />
      <Chip label="출석체크" component="a" href="attendance_check" clickable />
      <Chip label="학생관리" component="a" href="students" clickable />
    </div>
  );
};

export default SideMenus;
