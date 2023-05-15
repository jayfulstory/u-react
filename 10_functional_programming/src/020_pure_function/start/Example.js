const Example = () => {
  // 関数型（純粋関数）
  // POINT fn(決まった引数) -> 決まった戻り値
  // POINT 関数外の状態（データ）は参照・変更しない。
  // POINT 関数外に影響を及ぼさない。
  // ・引数で渡された値を変更しない。
  // 不変性()
  // 上記の要件を満たさない操作は「副作用」と呼ぶ。

  let val1 = 2;
  const val2 = 3;
  const add = val1 => {
    // val1 = 5;  <-引数で渡された値を変更しない。
    return val1 + val2; // <- val2が変更サれると戻り値が変わる
  };

  return (
    <>
      <div>純粋関数:{add(val1, val2)}</div>
    </>
  );
};

export default Example;
