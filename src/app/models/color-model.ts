export class ColorModel {
    id: number;
    uid: string;
    hex_value: string;
    color_name: string;

        constructor(id: number, uid: string, hex_value: string, color_name: string){
        this.id= id;
        this.uid = uid;
        this.hex_value= hex_value; 
        this.color_name= color_name
        }
}

// export class ColorModel {
//     _id: string;
//     content: string;
//     author: string;

//     constructor(_id: string, content: string, author: string){
//         this._id= _id;
//         this.author = author;
//         this.content= content; 
//         }
// }
