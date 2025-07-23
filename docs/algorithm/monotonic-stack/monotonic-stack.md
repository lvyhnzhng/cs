# 单调栈 monotonic stack  
>问题描述：求数组中相对每个值右边（也可能是左边）的首个更大/更小值。  
以下是当问题是找每个值右边的首个更大/更小值时的步骤（如果是左边就反过来遍历）
方法1:从右向左遍历数组。    
stack中存放遍历数组中“满足条件”的index 或者 值（比当前遍历值大 or 小）。    
遍历过程中，把stack中和当前遍历值比较不满足更小 or 更大的pop(-1), 维持stack中的值一直是满足条件的，而`st[-1]`是首个更大/更小值。  
方法2:从左向右遍历数组。     
   
 
如果有多个数组，答案来自哪个就遍历哪个。     
思想：及时去掉无用数据，保证栈中数据有序    

[讲解视频](https://www.bilibili.com/video/BV1VN411J7S7/?vd_source=cb5919bd45c3e6767e041fee511081e5)  
## 1.1 基础  
- [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/description/)
&nbsp; [讲解](https://leetcode.cn/problems/daily-temperatures/solutions/2470179/shi-pin-jiang-qing-chu-wei-shi-yao-yao-y-k0ks)  
- [1475. Final Prices With a Special Discount in a Shop](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/description/)  
- [496. Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/description/)
&nbsp; [讲解](https://leetcode.cn/problems/next-greater-element-i/solutions/2820648/shi-pin-dan-diao-zhan-de-liang-chong-xie-ri0i)  
- [503. Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/description/)
&nbsp; [讲解](https://leetcode.cn/problems/next-greater-element-ii/solutions/2820363/shi-pin-dan-diao-zhan-de-liang-chong-xie-k236)  


## 2. 矩形
- [84. Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/description/)
&nbsp; [讲解](https://leetcode.cn/problems/largest-rectangle-in-histogram/solutions/2695467/dan-diao-zhan-fu-ti-dan-pythonjavacgojsr-89s7)
- [85. Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/description/)
&nbsp; [讲解](https://leetcode.cn/problems/maximal-rectangle/solutions/3704011/zhi-jie-diao-yong-84-ti-dai-ma-jie-jue-p-49at)
- [221. Maximal Square](https://leetcode.com/problems/maximal-square/description/)
&nbsp; [讲解](https://leetcode.cn/problems/maximal-square/solutions/3704858/he-85-ti-yi-yang-de-zuo-fa-pythonjavaccg-az54)