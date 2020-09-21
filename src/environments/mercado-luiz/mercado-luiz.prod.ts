import { EnvironmentMercadoModel } from '../mercado/environment.mercado.model';
import * as mercadoLuiz from '../mercado-luiz/mercado-luiz'
export const environment: EnvironmentMercadoModel = {
  ...mercadoLuiz.environment,
  production: true
};
