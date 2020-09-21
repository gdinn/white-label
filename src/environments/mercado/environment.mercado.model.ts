export interface EnvironmentMercadoModel {
  nome: string, 
  baseref: string,
  production: boolean,
  cores: {
    primary: string,
    secondary: string,
    tertiary: string,
    quarternary: string,
    pentenary: string
  }
}