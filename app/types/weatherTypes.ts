export interface weatherData {
    main : {
        temp : number,
    };
    weather : {
        description : string,
        icon : string ,
    }[];
    name : string,
}