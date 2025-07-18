# Two-pointers Summary

## 1.单序列

### 1.1 相向双指针 

>大致思路：一个有序的数组，arr[l]+arr[r]和target比较。中间可能加入去重的步骤，计算重复项对结果的影响  
常用技巧：去重，让l和r跳过相同项，并借助新的指针 m n 统计分别有多少个相等项  
统计重复项时常用公式：combination fomula: C(n,k)= n*(n-1)*...*(n-k)!/k*(n-k)! ， 表示从n个元素中选出k个有多少种情况  

**pair sum: two elements in a sorted array summing to a target**
- [167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/)
- [611. Valid Triangle Number](https://leetcode.com/problems/valid-triangle-number/description/)
&nbsp;[讲解](https://leetcode.cn/problems/valid-triangle-number/solutions/2432875/zhuan-huan-cheng-abcyong-xiang-xiang-shu-1ex3)
- [15. 3Sum](https://leetcode.com/problems/3sum/description/)
&nbsp;[讲解](https://leetcode.cn/problems/3sum/solutions/1968332/shuang-zhi-zhen-xiang-bu-ming-bai-yi-ge-pno55)
- [16. 3Sum Closest](https://leetcode.com/problems/3sum-closest/description/)
&nbsp;[讲解](https://leetcode.cn/problems/3sum-closest/solutions/2337801/ji-zhi-you-hua-ji-yu-san-shu-zhi-he-de-z-qgqi)
- [18. 4Sum](https://leetcode.com/problems/4sum/description/)
- [923. 3Sum With Multiplicity](https://leetcode.com/problems/3sum-with-multiplicity/description/)
&nbsp;[讲解](https://leetcode.cn/problems/3sum-with-multiplicity/solutions/3020340/ling-shen-ti-dan-by-fei-31m9-fuk4)

**Palindrome/String Symmetry Check**
- [1750. Minimum Length of String After Deleting Similar Ends](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/description/)
&nbsp;[讲解](https://leetcode.cn/problems/minimum-length-of-string-after-deleting-similar-ends/solutions/3046818/python3-hua-dong-chuang-kou-ling-shen-ti-lngc)

**Reverse Operations**

**Trapping Water / max volume area: Compute water trapped between heights by moving pointers based on min height.**
>接雨水类问题，相当于在无序数组中，用双指针在o(n)时间复杂度条件下找到最大值。
- [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/description/)
&nbsp; [讲解](https://leetcode.cn/problems/container-with-most-water/solutions/1974355/by-endlesscheng-f0xz)
- [42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/description/)
&nbsp;[讲解](https://leetcode.cn/problems/trapping-rain-water/solutions/1974340/zuo-liao-nbian-huan-bu-hui-yi-ge-shi-pin-ukwm)

**Special Sums**
- [633. Sum of Square Numbers](https://leetcode.com/problems/sum-of-square-numbers/description/)
&nbsp;[讲解](https://leetcode.cn/problems/sum-of-square-numbers/solutions/2973811/liang-chong-fang-fa-mei-ju-shuang-zhi-zh-c26z)
- [1577. Number of Ways Where Square of Number Is Equal to Product of Two Numbers](https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/description/)
&nbsp;[讲解](https://leetcode.cn/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/403047/pai-xu-shuang-zhi-zhen-zu-he-by-tufeibaba)

**k-Closest**
- [658. Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/description/)
&nbsp;[讲解](https://leetcode.cn/problems/find-k-closest-elements/solutions/3046329/ling-shen-jie-fa-shuang-zhi-zhen-by-t_tt-te2o/)
- [1471. The k Strongest Values in an Array](https://leetcode.com/problems/the-k-strongest-values-in-an-array/description/)
&nbsp;[讲解](https://leetcode.cn/problems/the-k-strongest-values-in-an-array/solutions/3669260/ling-shen-xiang-xiang-shuang-zhi-zhen-ti-tpui/)

**other**
- [2105. Watering Plants II](https://leetcode.com/problems/watering-plants-ii/description/)
&nbsp;[讲解](https://leetcode.cn/problems/watering-plants-ii/solutions/1153072/shuang-zhi-zhen-mo-ni-by-endlesscheng-9l76)

### 1.2 同相双指针
- [611. Valid Triangle Number](https://leetcode.com/problems/valid-triangle-number/)
&nbsp;[讲解](https://leetcode.cn/problems/valid-triangle-number/solutions/2432875/zhuan-huan-cheng-abcyong-xiang-xiang-shu-1ex3)
### 1.3 原地修改
- [27. Remove Element](https://leetcode.com/problems/remove-element/description/)
- [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)
- [80. Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/)
- [75. Sort Colors](https://leetcode.com/problems/sort-colors/description/)
- [905. Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/)
- [922. Sort Array By Parity II](https://leetcode.com/problems/sort-array-by-parity-ii/)
- [1089. Duplicate Zeros](https://leetcode.com/problems/duplicate-zeros/)

- [287. Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/description/)
&nbsp;[讲解](https://leetcode.cn/problems/find-the-duplicate-number/solutions/2833858/cong-er-fen-cha-zhao-dao-kuai-man-zhi-zh-ixa3)
## 2.双序列

### 1.1 双指针 
- [2109. Adding Spaces to a String](https://leetcode.com/problems/adding-spaces-to-a-string/description/)
&nbsp;[讲解](https://leetcode.cn/problems/adding-spaces-to-a-string/solutions/1165545/go-mo-ni-by-endlesscheng-8lv2)
- [350. Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/description/)
- [1855. Maximum Distance Between a Pair of Values](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/description/)
&nbsp;[讲解](https://leetcode.cn/problems/maximum-distance-between-a-pair-of-values/solutions/3053541/python3-shuang-zhi-zhen-by-maxyao1-wc00)
- [809. Expressive Words](https://leetcode.com/problems/expressive-words/description/)
&nbsp;[讲解](https://leetcode.cn/problems/expressive-words/solutions/1989914/by-lcbin-0z0u)

### 1.2 判断子序列
- [392. Is Subsequence](https://leetcode.com/problems/is-subsequence/description/)
&nbsp;[讲解](https://leetcode.cn/problems/is-subsequence/solutions/2813031/jian-ji-xie-fa-pythonjavaccgojsrust-by-e-mz22)
- [524. Longest Word in Dictionary through Deleting](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/description/)
&nbsp;[讲解](https://leetcode.cn/problems/longest-word-in-dictionary-through-deleting/solutions/996367/gong-shui-san-xie-xiang-jie-pai-xu-shuan-qi20)
- [2486. Append Characters to String to Make Subsequence](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/description/)
&nbsp;[讲解](https://leetcode.cn/problems/append-characters-to-string-to-make-subsequence/solutions/1993448/tan-xin-pi-pei-by-endlesscheng-d6eq)

## 3.三指针
- [2367. Number of Arithmetic Triplets](https://leetcode.com/problems/number-of-arithmetic-triplets/description/)
- [795. Number of Subarrays with Bounded Maximum](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/description/)

## 4.分组循环
>适用场景：按照题目要求，数组会被分割成若干组，且每一组的判断/处理逻辑是一样的。  
外层循环负责遍历组之前的准备工作，和遍历组之后的统计工作。`while i<n: start=i`   
内层循环负责遍历组，找出这一组最远在哪结束。`while i<n and ...`
- [2760. Longest Even Odd Subarray With Threshold](https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/description/)
&nbsp;[讲解](https://leetcode.cn/problems/longest-even-odd-subarray-with-threshold/solutions/2528771/jiao-ni-yi-ci-xing-ba-dai-ma-xie-dui-on-zuspx)
- [2110. Number of Smooth Descent Periods of a Stock](https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/)
&nbsp;[讲解](https://leetcode.cn/problems/number-of-smooth-descent-periods-of-a-stock/solutions/1165540/fen-zu-xun-huan-by-endlesscheng-ykhm)


