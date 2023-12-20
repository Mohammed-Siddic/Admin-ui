export const fetchData = (val) => {
  return {
    type: "FETCH",
    data: val
  };
};

export const filterData = (val) => {
  return {
    type: "FILTER",
    data: val
  };
};

export const deleteData = (val) => {
  return {
    type: "DELETE",
    data: val
  };
};
export const EditData = (val) => {
  return {
    type: "EDIT",
    data: val
  };
};

export const emptyData = () => {
  return {
    type: "EMPTY"
  };
};
