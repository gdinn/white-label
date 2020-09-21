import { EnvironmentMercadoModel } from '../mercado/environment.mercado.model';
import * as mercadoPedro from '../mercado-pedro/mercado-pedro'
export const environment: EnvironmentMercadoModel = {
  ...mercadoPedro.environment,
  production: true
};
