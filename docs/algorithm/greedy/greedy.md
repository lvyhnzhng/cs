# Greedy

## 1. 贪心策略
>有两种基本贪心策略：
>
>从最小/最大开始贪心，优先考虑最小/最大的数，从小到大/从大到小贪心。在此基础上，衍生出了反悔贪心。
>
>从最左/最右开始贪心，思考第一个数/最后一个数的贪心策略，把 n 个数的原问题转换成 n−1 个数（或更少）的子问题。


## 1.1 从最小/最大开始贪心
>优先考虑最小/最大的数，从小到大/从大到小贪心。
>
>如果答案与数组元素顺序无关，一般需要排序。排序后，可以遍历计算。

- [3074. Apple Redistribution into Boxes](https://leetcode.com/problems/apple-redistribution-into-boxes/description/)
&nbsp;[solution](https://leetcode.cn/problems/apple-redistribution-into-boxes/solutions/2678660/pai-xu-tan-xin-pythonjavacgo-by-endlessc-8x64)
- [](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/description/)
&nbsp;[solution](https://leetcode.cn/problems/maximum-bags-with-full-capacity-of-rocks/solutions/1510441/by-endlesscheng-iik6)