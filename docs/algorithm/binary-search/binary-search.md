---
layout: doc
---
# Binary Search Summary

>原理：在有序数组定位目标值target，根据中点和target的大小关系定位。
>
>问题1: while loop `l<r`or `l<=r`?
>
>取决于l~r表示的是左闭右开区间`[l,r)`还是左闭右闭`[l,r]`
>
>问题2:target在哪个区间？
>
>寻找target的左边界: 收缩右边届 `if nums[mid]==targer: right = mid-1`
>
>寻找target右边届: 收缩左边界 `if nums[mid]==targer: left = mid+1`
>
>循环不变量：`nums[left-1] < target`, `nums[right+1] >= target`

## 1.1 基础

- [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/) 
&nbsp;[基础讲解视频](https://www.bilibili.com/video/BV1AP41137w7/)
- [35.search insert position](https://leetcode.com/problems/search-insert-position/description/)
&nbsp;[基础讲解](https://leetcode.cn/problems/search-insert-position/solutions/2023391/er-fen-cha-zhao-zong-shi-xie-bu-dui-yi-g-nq23)
- [744. Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/)
&nbsp;[讲解](https://leetcode.cn/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/3617352/python-er-fen-by-chi-mei-wang-liang-id-wszc)


## 1.2 进阶

>常用思路： 排序+二分，binary search包装成helper function，在main function中调用helper function，在有序数组上binary search，根据题目要求得出target

- [1385. Find the Distance Value Between Two Arrays](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/description/)
&nbsp;[讲解](https://leetcode.cn/problems/find-the-distance-value-between-two-arrays/solutions/3010185/liang-chong-fang-fa-er-fen-cha-zhao-san-15u9b)
- [2300. Successful Pairs of Spells and Potions](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/description/)
&nbsp;[讲解](https://leetcode.cn/problems/successful-pairs-of-spells-and-potions/solutions/1595712/by-endlesscheng-1kbp)
- [1170. compare strings by frequency of the smallest character](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/description/)
&nbsp;[讲解](https://leetcode.cn/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/3617352/python-er-fen-by-chi-mei-wang-liang-id-wszc)
- [658. Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/description/)
&nbsp;[多种解法](https://leetcode.cn/problems/find-k-closest-elements/solutions/476068/zhong-gui-zhong-ju-san-chong-jie-fa-er-fen-hua-chu)

## 2. 二分答案

>二分答案中left, right, mid不再表示index而是具体数值。
>
>把 `nums[m] < > target` 变成 `check(m,target,x...)`,一个关于m和target的helper function return True or False，其他一样。
>
>如何写`check()`？ 1. 明确单调性，方程的x y值， 判断是求最小valid / 最大valid  2.明确`check()` return true / false的界限threshold，一般是y要满足条件 
>
>以闭区间二分为例：
>
>求最小：`check(mid) == true` 时更新 `right = mid-1`，反之更新 `left = mid+1`，最后返回 `right+1`。
>
>求最大：`check(mid) == true` 时更新 `left = mid+1`，反之更新 `right = mid-1`，最后返回 `left-1`。
>
>二分答案的一个难点是 `check()` 函数怎么写，这会涉及到贪心等技巧，可以练练贪心题单（主要是第一章节）。

### 2.1. 求最小
- [1283. find the smallest divisor given a threshold](https://leetcode.cn/problems/find-the-smallest-divisor-given-a-threshold/description/)
&nbsp; [讲解](https://leetcode.cn/problems/find-the-smallest-divisor-given-a-threshold/solutions/2989469/mo-ban-er-fen-da-an-qiu-zui-xiao-pythonj-ukwe)
- [875. Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/description/)
&nbsp; [讲解](https://leetcode.cn/problems/koko-eating-bananas/solutions/2710324/er-fen-da-an-fu-ti-dan-pythonjavacgojsru-eb18)
- [475. heaters](https://leetcode.com/problems/heaters/description/)
&nbsp; [讲解](https://leetcode.cn/problems/heaters/solutions/1166982/gong-shui-san-xie-er-fen-shuang-zhi-zhen-mys4)
- [1011. Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/)
&nbsp; [讲解](https://leetcode.cn/problems/capacity-to-ship-packages-within-d-days/solutions/744326/gong-shui-san-xie-li-yong-er-duan-xing-z-95zj)

### 2.2 求最大
- [275. h-index-ii](https://leetcode.com/problems/h-index-ii/description/)
### 2.4 最小化最大值
- [410. Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/description/)
&nbsp; [讲解](https://leetcode.cn/problems/split-array-largest-sum/solutions/2613046/er-fen-da-an-fu-ti-dan-pythonjavacgojsru-n5la)
- [2064. Minimized Maximum of Products Distributed to Any Store](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/description/)
&nbsp; [讲解](https://leetcode.cn/problems/minimized-maximum-of-products-distributed-to-any-store/solutions/1088419/er-fen-da-an-by-endlesscheng-aape)

### 2.5 最大化最小值
- [3281. Maximize Score of Numbers in Ranges](https://leetcode.com/problems/maximize-score-of-numbers-in-ranges/description/)
&nbsp; [讲解](https://leetcode.cn/problems/maximize-score-of-numbers-in-ranges/solutions/2908931/er-fen-da-an-zui-da-hua-zui-xiao-zhi-pyt-twe2)

### 2.6 第k小/大

>第 k 小/大问题的通用转换方法： k就是function中的y
>
>第 k 小等价于：求最小的 x，满足 ≤x 的数至少有 k 个。（注意是至少不是恰好）
>
>第 k 大等价于：求最大的 x，满足 ≥x 的数至少有 k 个。

- [668. Kth Smallest Number in Multiplication Table](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/description/)
&nbsp;[讲解](https://leetcode.cn/problems/kth-smallest-number-in-multiplication-table/solutions/2999698/di-k-xiao-da-wen-ti-de-tong-yong-zhuan-h-9y8i)
- [378. Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/)
&nbsp;[讲解](https://leetcode.cn/problems/kth-smallest-element-in-a-sorted-matrix/solutions/3699846/tu-jie-di-k-xiao-da-wen-ti-de-tong-yong-teznd)
- [1201. Ugly Number III](https://leetcode.com/problems/ugly-number-iii/description/)
&nbsp;[讲解](https://leetcode.cn/problems/ugly-number-iii/solutions/3080367/ling-shen-ke-hou-er-fen-rong-chi-yuan-li-7gyq)
- [373. Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/description/)
- [786. K-th Smallest Prime Fraction](https://leetcode.com/problems/k-th-smallest-prime-fraction/description/)
- [719. Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/description/)
- [878. Nth Magical Number](https://leetcode.com/problems/nth-magical-number/description/)


### 2.7 其他 
- [69. sqrtx](https://leetcode.com/problems/sqrtx/description/)
- [74. search a 2d matrix](https://leetcode.com/problems/search-a-2d-matrix/description/)
- [240. search a 2d matrix ii](https://leetcode.com/problems/search-a-2d-matrix-ii/description/)
- [162. find-peak-element](https://leetcode.com/problems/find-peak-element/description/)
