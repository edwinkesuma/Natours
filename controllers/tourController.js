const Tour = require("./../models/toursModel");

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: "success",
      results: tours.length,
      data: {
        tours
      }
    });
  } catch (e) {
    res.status(404).json({
      status: "fail",
      message: e
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        tour
      }
    });
  } catch (e) {
    res.status(404).json({
      status: "fail",
      message: e
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour
      }
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e.message
    });
  }
};

exports.updateTour = (req, res) => {
  res
    .status(200)
    .json({ status: "success", data: { tour: "<Updated tour here>" } });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({ status: "success", data: null });
};
