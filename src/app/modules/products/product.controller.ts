import catchAsync from '../../utils/catchAsync';
import { productServices } from './product.service';

// add shoes to DB
const addShoes = catchAsync(async (req, res) => {
  const shoes = req.body;
  const result = await productServices.addShoes(shoes);

  res.status(200).json({
    success: true,
    message: 'Shoes added successfully',
    data: result,
  });
});

// get all shoes from DB
const getAllShoes = catchAsync(async (req, res) => {
  const query = req.query;

  const result = await productServices.getAllShoes(query);

  res.status(200).json({
    success: true,
    message: 'Shoes fetched successfully',
    data: result,
  });
});

// get single shoe
const getSingleShoe = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await productServices.getSingleShoe(id);

  res.status(200).json({
    success: true,
    message: 'Shoe fetched successfully',
    data: result,
  });
});

// delete singe shoe
const deleteSingleShoe = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await productServices.deleteSingleShoe(id);

  res.status(200).json({
    success: true,
    message: 'Shoe deleted successfully',
    data: result,
  });
});

// update shoe
const updateShoe = catchAsync(async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await productServices.updateShoe(payload, id);

  res.status(200).json({
    success: true,
    message: 'Shoe updated successfully',
    data: result,
  });
});

// sell shoes
const sellShoes = catchAsync(async (req, res) => {
  const id = req.params.id;
  const sellingData = req.body;
  const result = await productServices.sellShoes(id, sellingData);

  res.status(200).json({
    success: true,
    message: 'Shoe sold successfully',
    data: result,
  });
});

export const productControllers = {
  addShoes,
  getAllShoes,
  deleteSingleShoe,
  updateShoe,
  sellShoes,
  getSingleShoe,
};
