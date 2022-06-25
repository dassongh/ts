import 'reflect-metadata';

const Injectable = (key: string) => (target: Function) => {
  Reflect.defineMetadata(key, 1, target);
  const meta = Reflect.getMetadata(key, target);
  console.log(meta);
};

const Prop = (target: Object, name: String) => {};

@Injectable('C')
export class C {
  @Prop prop: number;
}

@Injectable('D')
export class D {
  constructor(@Inject('C') c: C) {}
}
