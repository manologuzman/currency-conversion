import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

/**
 * Validador personalizado que verifica que el valor no sea un número
 * @param validationOptions Opciones de validación
 */
export function IsNotNumber(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'isNotNumber',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          // Si es un string, verificar que no sea un número
          if (typeof value === 'string') {
            // Verificar si el string contiene solo dígitos
            return !/^\d+$/.test(value);
          }
          // Si no es un string, validar que no sea un número
          return typeof value !== 'number';
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} no debe ser un número o contener solo dígitos`;
        },
      },
    });
  };
}
