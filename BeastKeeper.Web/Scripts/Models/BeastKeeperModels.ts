interface IBeast {
    Id: number;
    Name: string;
    Description: string;
    Species: string;
    Gender: string;

    Photos: IPhoto[];
    Reminders: IReminder[];
    MedicalHistory: IHistoryItem[];

}

interface IPhoto {
    Id: number;
    ImgName: string;
    ImgSource: string;
    Description: string;
    BeastId: number;


}

interface IReminder {
    Id: number;
    Description: string;
    CreateDate: Date;
    DueDate: Date;
    BeastId: number;

}

interface IHistoryItem {
    Id: number;
    Description: string;
    MedicalCode: string;
    ProcedureDate: Date;
    BeastId: number;

}