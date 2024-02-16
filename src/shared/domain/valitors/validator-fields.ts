export type FieldsError = {
  [field: string]: [string];
};

export interface ValidatorFieldsInterface<PropsValidateds> {
  errors: FieldsError;
  validatedData: PropsValidateds;
  validate(data: any): boolean;
}
