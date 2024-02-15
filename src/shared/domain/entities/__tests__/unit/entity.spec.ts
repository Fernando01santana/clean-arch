import { validate as uuidValidate } from 'uuid';
import { Entity } from '../../entity';

type StubProperties = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<StubProperties> {}
describe('Entity unit tests', () => {
  it('should set props and id', () => {
    const props = { prop1: 'value1', prop2: 1 };
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).not.toBeNull();
    expect(uuidValidate(entity._id)).toBeTruthy();
  });

  it('should set a valid uuid', () => {
    const props = { prop1: 'value1', prop2: 1 };
    const id = 'bb43ef41-87e9-4c54-989e-1e48fde1c7fb';
    const entity = new StubEntity(props, id);

    expect(uuidValidate(entity._id)).toBeTruthy();
    expect(entity._id).toBe(id);
  });
});
