---
layout: doc
---
# Linear Data Structure Summary

## 0. Enumeration method
>对于 双变量问题，例如两数之和 a+b = t, 可以枚举b右侧的数，同时维护&查找左侧枚举过的元素有没有a=t-b。这可以用哈希表维护&记录每一个枚举过的数和该数的位置。这种方法叫“枚举右，维护左”

**枚举右，维护左**

- [1.Two Sum](https://leetcode.com/problems/two-sum/description/)
&nbsp;[讲解](https://leetcode.cn/problems/two-sum/solutions/2326193/dong-hua-cong-liang-shu-zhi-he-zhong-wo-0yvmj)

- [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/) 
 &nbsp;[讲解](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/solutions/2464650/mei-ju-mai-chu-jie-ge-wei-hu-mai-ru-de-z-02ud)

- [624. Maximum Distance in Arrays](https://leetcode.com/problems/maximum-distance-in-arrays/description/) 
 &nbsp;[讲解](https://leetcode.cn/problems/maximum-distance-in-arrays/solutions/3067679/mei-ju-you-wei-hu-zuo-pythonjavaccgojsru-wtgb)

- [1512. Number of Good Pairs](https://leetcode.com/problems/number-of-good-pairs/description/)
&nbsp; [讲解](https://leetcode.cn/problems/number-of-good-pairs/solutions/2974653/mei-ju-you-wei-hu-zuo-pythonjavaccgojsru-7u5v)

**枚举中间**
- [2909. Minimum Sum of Mountain Triplets II](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/description/)
&nbsp;[讲解](https://leetcode.cn/problems/minimum-sum-of-mountain-triplets-ii/solutions/2493548/mei-ju-numsj-qian-hou-zhui-fen-jie-pytho-tskf)
- [447. Number of Boomerangs](https://leetcode.com/problems/number-of-boomerangs/description/)
&nbsp;[讲解](https://leetcode.cn/problems/number-of-boomerangs/solutions/2595488/jian-ji-xie-fa-fu-xiang-si-ti-mu-pythonj-39p8)

## 1. presum
**classic prefix sum**
>理解前缀和定义：对于nums数组，presum[i] = presum[i-1]+nums[i-1], presum[0]=0, presum[1]=presum[0]+nums[0]....

> 子数组的元素和可以转化成两个前缀和的差: sum of array i~j = presum[i]-presum[j],  sum of array 0~j = presum[j]-presum[0] 

- [303. Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/description/)
&nbsp; [前缀和概念](https://leetcode.cn/problems/range-sum-query-immutable/solutions/2693498/qian-zhui-he-ji-qi-kuo-zhan-fu-ti-dan-py-vaar)
- [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/)
&nbsp;[[讲解]](https://leetcode.cn/problems/maximum-subarray/solutions/2533977/qian-zhui-he-zuo-fa-ben-zhi-shi-mai-mai-abu71)

**presum+hashmap**
>通常需要 枚举右，维护左 的技巧
- [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/description/)
&nbsp;[概念讲解](https://leetcode.cn/problems/subarray-sum-equals-k/solutions/2781031/qian-zhui-he-ha-xi-biao-cong-liang-ci-bi-4mwr/)
- [930. Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/description/)
- [523. Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/description/)
&nbsp;[讲解](https://leetcode.cn/problems/continuous-subarray-sum/solutions/3600092/ling-shen-ke-hou-qian-zhui-he-ha-xi-by-z-u8v9)
- [437. Path Sum III](https://leetcode.com/problems/path-sum-iii/description/)
&nbsp; [讲解](https://leetcode.cn/problems/path-sum-iii/solutions/2784856/zuo-fa-he-560-ti-shi-yi-yang-de-pythonja-fmzo)
- [525. Contiguous Array](https://leetcode.com/problems/contiguous-array/description/)
&nbsp;[讲解](https://leetcode.cn/problems/contiguous-array/solutions/3146886/ling-shen-ti-dan-shi-yao-qiu-jie-he-wei-45hva)

**二维前缀和**
- [304. Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-qguery-2d-immutable/description/)
&nbsp; [概念讲解](https://leetcode.cn/problems/range-sum-query-2d-immutable/solutions/2667331/tu-jie-yi-zhang-tu-miao-dong-er-wei-qian-84qp)
- [221. Maximal Square](https://leetcode.com/problems/maximal-square/description/)
&nbsp; [题解](https://leetcode.cn/problems/maximal-square/solutions/3043980/ling-shen-ti-dan-chang-yong-shu-ju-jie-g-47bn)

## 2. 差分数组 difference array

- [1094. Car Pooling](https://leetcode.com/problems/car-pooling/description/)
&nbsp; [原理讲解](https://leetcode.cn/problems/car-pooling/solutions/2550264/suan-fa-xiao-ke-tang-chai-fen-shu-zu-fu-9d4ra/)
- [2132. Stamping the Grid](https://leetcode.com/problems/stamping-the-grid/description/)
&nbsp; [一维差分到二维差分](https://leetcode.cn/problems/stamping-the-grid/solutions/1199642/wu-nao-zuo-fa-er-wei-qian-zhui-he-er-wei-zwiu)
- [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/description/)
- [57. Insert Interval](https://leetcode.com/problems/insert-interval/)

## 3. 栈 stack
**基础原理**
- [1441. Build an Array With Stack Operations](https://leetcode.com/problems/build-an-array-with-stack-operations/description/)
- [844. Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/description/)
- [682. Baseball Game](https://leetcode.com/problems/baseball-game/description/)
- [1472. Design Browser History](https://leetcode.com/problems/design-browser-history/description/)
- [71. Simplify Path](https://leetcode.com/problems/simplify-path/description/)
&nbsp; [讲解](https://leetcode.cn/problems/simplify-path/solutions/3042801/zhan-mo-ni-pythonjavacgojsrust-by-endles-y4bc)
- [388. Longest Absolute File Path](https://leetcode.com/problems/valid-parentheses/description/)
- [225. Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/description/)
- [143. Reorder List](https://leetcode.com/problems/reorder-list/description/)

- [155. Min Stack](https://leetcode.com/problems/min-stack/)

**临项消除**
- [2696. Minimum String Length After Removing Substrings](https://leetcode.com/problems/minimum-string-length-after-removing-substrings/description/)
- [1047. Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/)
- [1544. Make The String Great](https://leetcode.com/problems/make-the-string-great/description/)
- [735. Asteroid Collision](https://leetcode.com/problems/asteroid-collision/)

**表达式解析**
- [150. Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/description/)

**合法括号字符串**
- [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/)
- [921. Minimum Add to Make Parentheses Valid](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description/)
- [856. Score of Parentheses](https://leetcode.com/problems/score-of-parentheses/description/)
- [678. Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/description/)
- [1190. Reverse Substrings Between Each Pair of Parentheses](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/description/)
- [1021. Remove Outermost Parentheses](https://leetcode.com/problems/remove-outermost-parentheses/description/)

## 4. 单调栈（重点）

## 4. 队列 queue
## 5. 堆 heap