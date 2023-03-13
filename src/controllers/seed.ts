import { Request, Response } from "express"


export const loadData = ( req: Request, res:Response) => {

    try {

        res.json({
            msg: "cargado correctamente",
            ok: true
        })

    } catch (error: any){

        console.log(error)
    }



}