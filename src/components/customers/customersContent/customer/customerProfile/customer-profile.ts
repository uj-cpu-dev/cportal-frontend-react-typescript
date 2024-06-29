

export interface CustomerProfileType{
    name: string,
    email: string,
    filetype:string,
    filename:string,
    filedata:any,
    transformImageToImageType: (fileData: any, fileType: string) => string,
    file:any

}