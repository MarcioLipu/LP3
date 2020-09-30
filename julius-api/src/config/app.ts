import * as express from 'express';
import * as bodyParse from 'body-parser';
import * as cors from 'cors';
import *as logger from 'morgan';
import{conectarServidorNoBD} from './db';
import {routerUsuario}from './routes/Usuario'
/**
 * cria a aplicação
 */
export const app=express();

/** 
 * libera o acesso
 */
app.use(cors());

/** 
 * Permite receber e enviar json
 */
app.use(bodyParse());

/** 
 * configura  os logs
 */

 app.use(logger('dev'));

 /** 
  * conecta no bd
  */

  conectarServidorNoBD();

  /** 
   * configuração de rotas
   */
  app.use('usuario',routerUsuario);
  /** 
   * cria rota padrão
   */
  app.use('Usuario',(req,res)=>res.send('Api do app julius'));