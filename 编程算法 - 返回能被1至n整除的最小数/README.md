# 编程算法 - 返回能被1至n整除的最小数（js）

- [博客地址](https://www.jianshu.com/p/0b0216bca657)

**题意：**
求出能整除[1,n]中所有数的最小整数，结果对987654321取模。

**思路：**
求出能整除[1,n]中所有数的最小整数，即求出能整除[1,n]中所有素数的最小整数，步骤如下：
1.首先筛选出[1,n]的所有素数，记为primeList[i]。
2.根据**算术基本定理：“任何一个合数都可以分解为几个素数的积”**，求出每一个Pn的**kn值**，如下所示：
- 假设Pn表示第n个素数，那么任意正整数可以通过下面的式子获得：
![](https://upload-images.jianshu.io/upload_images/6991256-2372af4e5b5013f1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **Kn 的取值：**
要保证最终值可以被所有含Pn约数的数整除（如下面例子，要保证Num既能被2整除，也能被4,8整除），因此公式为：
**primeList[i]^k<=n**。
- 例如：一个整数要能被1-10的所有整数整除，那么就等同于他能被1-10之间的所有素数整除。那么此时：
![](https://upload-images.jianshu.io/upload_images/6991256-562b43f9b6e6bba0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
3.求出各素数次幂的积，即求出Num。
