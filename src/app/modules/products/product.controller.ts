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
  const result = await productServices.getAllShoes();

  res.status(200).json({
    success: true,
    message: 'Shoes fetched successfully',
    data: result,
  });
});

export const productControllers = {
  addShoes,
  getAllShoes,
};
