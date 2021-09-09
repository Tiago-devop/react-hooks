import { useReducer } from "react";
import { Button, Container, Title, Wrapper } from "./ReducerHook.styles";

function reducer(state, action) {
  if (action === "increment") return state + 1;
  if (action === "decrement") return state - 1;
  if (action === "reset") return 0;
  throw new Error();
}

export default function ReducerHook() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <Wrapper>
      <Container>
        <Title>Count: {count}</Title>
        <Button onClick={() => dispatch("increment")}>+</Button>
        <Button onClick={() => dispatch("decrement")}>-</Button>
        <Button onClick={() => dispatch("reset")}>reset</Button>
      </Container>
    </Wrapper>
  );
}
