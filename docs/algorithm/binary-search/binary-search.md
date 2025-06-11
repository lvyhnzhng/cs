---
layout: doc
---
# Binary Search Summary

>原理：在有序数组定位目标值target，根据中点和target的大小关系定位。
>问题1: while loop `l<r`or `l<=r`?
>取决于l~r表示的是左闭右开区间`[l,r)`还是左闭右闭`[l,r]`
>问题2:target在哪个区间？
>while loop停止时，nums被分成2个区间：`[0,r]` and `[l,len(nums)]`
>target在哪个区间和题目类型有关，分为这几种情况：寻找唯一target，寻找target的左边界 (nums[i] <= target)，寻找target右边届 (nums[i] >= target)，target不存在时寻找小于target最大值 (nums[i] < target) ，target不存在时寻找大于target最小值 (nums[i] > target)
>寻找target的左边界: 收缩右边届 `if nums[mid]==targer: right = mid-1`
>寻找target右边届: 收缩左边界 `if nums[mid]==targer: left = mid+1`
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
>left,right,mid不再表示index而是具体数值
>把 nums[m]< > target 变成 f(m,target),一个关于m和target的表达式， 其他一样。
>以开区间二分为例：
>求最小：check(mid) == true 时更新 right = mid，反之更新 left = mid，最后返回 right。
>求最大：check(mid) == true 时更新 left = mid，反之更新 right = mid，最后返回 left。

### 2.1. 求最小
- [1283. find the smallest divisor given a threshold](https://leetcode.cn/problems/find-the-smallest-divisor-given-a-threshold/description/)
&nbsp; [讲解](https://leetcode.cn/problems/find-the-smallest-divisor-given-a-threshold/solutions/2989469/mo-ban-er-fen-da-an-qiu-zui-xiao-pythonj-ukwe)
- [875. Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/description/)
- [475. heaters][def]

### 2.2 求最大
- [275. h-index-ii](https://leetcode.cn/problems/h-index-ii/description/)
### 2.4 最小化最大值
### 2.5 最大化最小值
### 2.6 第k小/大
### 2.7 其他 
- [69. sqrtx](https://leetcode.com/problems/sqrtx/description/)
- [74. search a 2d matrix](https://leetcode.com/problems/search-a-2d-matrix/description/)
- [240. search a 2d matrix ii](https://leetcode.com/problems/search-a-2d-matrix-ii/description/)
- [162. find-peak-element](https://leetcode.com/problems/find-peak-element/description/)

[def]: https://leetcode.com/problems/heaters/description/