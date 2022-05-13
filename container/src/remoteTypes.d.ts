///<reference types="react" />

type CounterProps = {
  initialCount?: number;
};

declare module "app1/CounterAppOne" {
  const CounterAppOne: React.ComponentType;

  export default CounterAppOne;
}

declare module "app2/CounterAppTwo" {
  const CounterAppTwo: React.ComponentType<CounterProps>;

  export default CounterAppTwo;
}
