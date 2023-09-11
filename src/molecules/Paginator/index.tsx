import Pagination from "@mui/material/Pagination";
import ArrowLeftIcon from "../../atoms/vectors/arrow-left-icon";
import ArrowRightIcon from "../../atoms/vectors/arrow-right-icon";
import "./styles.scss";

interface PaginatorProps {
  count: number;
  page: number;
  defaultPage: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  handleNavigation: (type: string) => void;
}
const Paginator = ({
  count,
  defaultPage,
  page,
  onChange,
  handleNavigation,
}: PaginatorProps) => {
  return (
    <div className="paginator-wrapper">
      <div className="nav-btn" onClick={() => handleNavigation("prev")}>
        <ArrowLeftIcon />
        <span>Previous</span>
      </div>
      <div>
        <Pagination
          hideNextButton
          hidePrevButton
          className="border-none"
          defaultPage={defaultPage}
          count={count}
          page={page}
          onChange={onChange}
        />
      </div>
      <div className="nav-btn" onClick={() => handleNavigation("next")}>
        <span>Next</span>
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default Paginator;
