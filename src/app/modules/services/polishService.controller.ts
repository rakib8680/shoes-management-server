import catchAsync from '../../utils/catchAsync';
import { polishServices } from './polishService.service';


// add polish service to db
const addPolishServiceToDB = catchAsync(async (req, res) => {
  const payload = req.body;
  const user = req.user;

  const result = await polishServices.addPolishServiceToDB(payload, user);

  res.status(200).json({
    success: true,
    message: 'Polish Request submitted successfully',
    data: result,
  });
});



// get all polish services from db
const getAllPolishServicesFromDB = catchAsync(async(req,res)=>{
  const result = await polishServices.getAllPolishServicesFromDBgetAllPolishServicesFromDB();
  res.status(200).json({
    success: true,
    data: result,
  });
})

export const polishServiceController = {
  addPolishServiceToDB,
  getAllPolishServicesFromDB
};
