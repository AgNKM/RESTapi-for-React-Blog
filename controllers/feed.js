exports.getPost = (req, res, next) => {
  res.json({
    name: "samuel",
    age: 25,
  });
};

exports.postForm = (req, res, next) => {
  const fName = req.body.fname;
  const lName = req.body.lname;
  const amount = req.body.amount;

  res.json({
    name: fName,
    surname: lName,
    amount: amount,
  });
};
