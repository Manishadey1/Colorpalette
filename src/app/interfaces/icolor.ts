export interface Icolor {
    map(arg0: (cM: any) => import("../models/color-model").ColorModel): import("../models/color-model").ColorModel[];
    id: number;
    uid: string;
    hex_value: string;
    color_name: string;
    hsl_value: number[];
    hsla_value: number[];
}

// export interface JQuotes {
//     _id: string;
//     tags: string[];
//     content: string;
//     author: string;
//     authorSlug: string;
//     length: number;
//     dateAdded: string;
//     dateModified: string;
// }

