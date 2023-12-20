export const filterArrayObjects = (userInp, data) => {
  const filteredData = data.filter(
    (val) =>
      val.name.toLowerCase().includes(userInp.toLowerCase()) ||
      val.email.includes(userInp) ||
      val.role.toLowerCase().includes(userInp.toLowerCase())
  );
  return filteredData;
};

export const deleteArrayObjects = (userInput, data) => {
  console.log("inside delete", data);
  const deletedData = data.filter((val) => val.id !== userInput);
  return deletedData;
};
