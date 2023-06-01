// To parse this data:
//
//   import { Convert, Donuts } from "./file";
//
//   const donuts = Convert.toDonuts(json);

export interface Donuts {
    count:   number;
    results: Result[];
}

export interface Result {
    id:                number;
    ref:               string;
    name:              string;
    photo:             string;
    photo_attribution: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toDonuts(json: string): Donuts {
        return JSON.parse(json);
    }

    public static donutsToJson(value: Donuts): string {
        return JSON.stringify(value);
    }
}
// To parse this data:
//
//   import { Convert, SingleDonut } from "./file";
//
//   const singleDonut = Convert.toSingleDonut(json);

export interface SingleDonut {
    id:                number;
    ref:               string;
    name:              string;
    calories:          number;
    extras:            string[];
    photo:             string;
    photo_attribution: string;
}

// Converts JSON strings to/from your types
export class ConvertSingle {
    public static toSingleDonut(json: string): SingleDonut {
        return JSON.parse(json);
    }

    public static singleDonutToJson(value: SingleDonut): string {
        return JSON.stringify(value);
    }
}
