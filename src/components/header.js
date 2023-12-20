import { CheckBox } from "./checkbox";
export const Header = (props) => {
  let columns = [];
  props.headers.map((value, index) => {
    if (value === "checkbox") {
      columns.push(
        <CheckBox
          class="checkbox"
          key={index}
          id={index}
          dataset="dataset-headcheck"
        />
      );
    } else {
      columns.push(
        <div className="header-col" key={index}>
          {value}
        </div>
      );
    }
    return null;
  });
  return <div className="row-sub-container">{columns}</div>;
};
