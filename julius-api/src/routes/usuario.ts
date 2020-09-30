import{Router} from'express';
export const routeUsuario=Router();
/** 
 * cria uma rota padrão
 */
routeUsuario.get('/',(req,res)=>res.send('servico de usuario'));