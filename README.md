# 추락하는 라이언
https://gaki2.github.io/falling-Lion/

## 사용법
화면을 좌,우로 드래그 하면 라이언이 드래그 방향에 맞게 움직이며 추락합니다.
![fl](https://user-images.githubusercontent.com/76833478/159946023-e81ce6be-68dc-41b2-b658-021047a41a23.gif)

## 정리

\*\* 1. 정규 분포를 활용해 라이언의 스케일을 조정 \*\*

![normalDistribution](https://user-images.githubusercontent.com/76833478/160664740-6f05357e-542b-4f74-b861-97b66be57646.png)

```
export function normalDistribution(mean = 0, sd = 1) {
  const percent = Math.random();
  if (0 <= percent && percent < 0.341) {
    // 평균 ~ 평균 + 표준편차 사이의 값
    while (true) {
      const temp = Math.random();
      if (temp < Math.random()) {
        return mean + temp * sd;
      }
    }
  } else if (0.341 <= percent && percent < 0.682) {
    // 평균 - 표준편차 ~ 평균 사이의 값
    while (true) {
      const temp = Math.random();
      if (temp < Math.random()) {
        return mean - temp * sd;
      }
    }
  } else if (0.682 <= percent && percent < 0.818) {
    // 평균 + 표준편차 ~ 평균 + 2 표준편차 사이의 값
    while (true) {
      const temp = Math.random();
      if (temp < Math.random()) {
        return mean + sd + temp * sd;
      }
    }
  } else if (0.818 <= percent && percent < 0.954) {
    // 평균 - 2 표준편차 ~ 평균 - 표준편차 사이의 값
    while (true) {
      const temp = Math.random();
      if (temp < Math.random()) {
        return mean - sd - temp * sd;
      }
    }
  } else if (0.954 <= percent && percent < 0.975) {
    while (true) {
      const temp = Math.random();
      if (temp < Math.random()) {
        return mean + 2 * sd + temp * sd;
      }
    }
  } else if (0.975 <= percent && percent < 0.996) {
    while (true) {
      const temp = Math.random();
      if (temp < Math.random()) {
        return mean - 2 * sd - temp * sd;
      }
    }
  } else if (0.996 <= percent && percent < 0.998) {
    while (true) {
      const temp = Math.random();
      if (temp < Math.random()) {
        return mean + 3 * sd + temp * sd;
      }
    }
  } else {
    while (true) {
      const temp = Math.random();
      if (temp < Math.random()) {
        return mean - 3 * sd - temp * sd;
      }
    }
  }
}
```
