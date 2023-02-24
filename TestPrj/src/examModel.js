// fetch로 서버에서 데이터를 받기 위해 만든 클래스.


export class ExamModel{
    constructor(json){
        [this.id, this.title, thie.releaseYear] = [json.id, json.title, json.releaseYear]
    }
    static fromJson(json){
        return new ExamModel
    }
}