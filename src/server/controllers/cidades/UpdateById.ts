import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";
import { ICidade } from "../../database/models";


interface IParamsProps {
  id?: number;  
}

interface IBodyProps extends Omit<ICidade, 'id'>{}

export const updateIdValidation = validation((getSchema) =>({
   body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3)
   })),
  params: getSchema<IParamsProps>(yup.object().shape({
    id:yup.number().integer().required().moreThan(0),
  }))
}));



export const updateById = async (req: Request<IParamsProps, {}, IBodyProps>, res: Response) => {
 if (Number(req.params.id) === 9999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default:"Registro não encontrado"
      }      
    })
    
  return res.status(StatusCodes.NO_CONTENT).send()
}