const Tour = require("./../models/toursModel");

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "The request must contain name, and price"
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success"
    // results: tours.length,
    // data: {
    //   tours
    // }
  });
};

exports.getTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  // const tour = tours.find((e) => e.id === id);
  //
  // res.status(200).json({
  //   status: "success",
  //   // results: tours.length,
  //   data: {
  //     tour
  //   }
  // });
};

exports.createTour = (req, res) => {
  // res.status(201).json({
  //   status: "success",
  //   data: {
  //     tour: newTour
  //   }
  // });
};

exports.updateTour = (req, res) => {
  res
    .status(200)
    .json({ status: "success", data: { tour: "<Updated tour here>" } });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({ status: "success", data: null });
};
