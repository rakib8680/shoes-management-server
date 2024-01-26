import catchAsync from '../../utils/catchAsync';
import { productServices } from './product.service';

const addShoes = catchAsync(async (req, res) => {
  const shoes = req.body;
  const result = await productServices.addShoes(shoes);

  res.status(200).json({
    success: true,
    message: 'Shoes added successfully',
    data: result,
  });
});

export const productControllers = {
  addShoes,
};
