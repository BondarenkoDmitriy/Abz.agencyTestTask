export interface FormValues {
  name: string;
  email: string;
  phone: string;
  position_id: number;
  photo: File | null;
}

// const formatedFile = {
//   'lastModified': string,
//   'lastModifiedDate': data?.photo?.lastModifiedDate,
//   'name': data?.photo?.name,
//   'size': data?.photo?.size,
//   'type': data?.photo?.type,
// }

export interface FormData {
  name: string;
  email: string;
  phone: string;
  position_id: string;
  photots: File[];
  // Другие свойства, если есть
}
