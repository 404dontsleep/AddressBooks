import { Request, Response, Router } from "express";
import InfoFunction from "../database/info/Info.function";
const router = Router();
async function GetInfos(req: Request, res: Response) {
  try {
    const infos = await InfoFunction.GetInfos();
    res.status(200).json({
      success: true,
      data: infos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
}
async function CreateInfo(req: Request, res: Response) {
  try {
    const info = req.body;
    const createdInfo = await InfoFunction.CreateInfo(info);
    res.status(200).json({
      success: true,
      data: createdInfo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
}
async function DeleteInfo(req: Request, res: Response) {
  try {
    const _id = req.params._id;
    const deletedInfo = await InfoFunction.DeleteInfo(_id);
    res.status(200).json({
      success: true,
      data: deletedInfo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
}
async function EditInfo(req: Request, res: Response) {
  try {
    const _id = req.params._id;
    const info = req.body;
    const updatedInfo = await InfoFunction.EditInfo(_id, info);
    res.status(200).json({
      success: true,
      data: updatedInfo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
}
router.delete("/:_id", DeleteInfo);
router.put("/:_id", EditInfo);
router.post("/", CreateInfo);
router.get("/", GetInfos);

export default router;
