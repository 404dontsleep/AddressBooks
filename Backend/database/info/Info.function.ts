import IInfo from "./Info.interface";
import InfoModel from "./Info.model";

export async function CreateInfo(info: IInfo): Promise<IInfo | null> {
  return await InfoModel.create(info);
}

export async function GetInfos(): Promise<IInfo[]> {
  return await InfoModel.find();
}

export async function EditInfo(id: string, info: IInfo): Promise<IInfo | null> {
  return await InfoModel.findByIdAndUpdate(id, info, {
    new: true,
  });
}

export async function DeleteInfo(_id: string): Promise<IInfo | null> {
  return await InfoModel.findByIdAndDelete(_id);
}

export default { CreateInfo, GetInfos, EditInfo, DeleteInfo };
