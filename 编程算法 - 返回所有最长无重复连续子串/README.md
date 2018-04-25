# 编程算法 - 返回所有最长无重复连续子串（js）

- [博客地址](https://www.jianshu.com/p/58ce8d304800)

**题意：**
返回所有最长无重复连续子串

**例如：**

输入`aaa`，返回`a a a`

输入`abc`，返回`abc`

输入`abcad`，返回`bcad`

输入`abccda`，返回`abc cda`

输入`abcabcabc`，返回`abc bca cab abc bca cab abc`

**解题思路：**
[参考思路](https://www.cnblogs.com/haozhengfei/p/d0906ebc98f7b6eaecb3ecd738dc78ac.html)

**辅助变量：**
obj对象（初始值：{start:0}），maxStr，nowStr

**复杂度：**
时间复杂度O(n)，空间复杂度O(n)

**思路：**

**1. 使用for从头到尾循环遍历字符串每一个字符**<br>
* **若当前字符没有在obj对象里，说明还没有出现重复字符：**<br>
（1）将当前字符加在nowStr尾部；<br>
（2）在obj对象里添加这个字符，字符值为它的位置<br>
* **若当前字符出现在obj对象里，说明出现重复字符：**<br>
**考虑2种情况：**<br>
**1.obj.start指针在重复字符的前一个字符的位置的前面或重叠（如：abcad，obj.start指针初始为0，位置跟第一个a重叠），说明当前字符与当前子串nowStr有重复：**<br>
（1）更新obj.start指针的值，指向重复字符的前一个字符的位置+1（如：abcad，则obj.start的值从0变成obj[a]+1=1）；<br>
（2）将重复字符的位置更新成后一个字符的位置（如：abcad，obj[a]的值从0变成3）；<br>
（3）比较当前子串nowStr与最长子串maxStr的长度，若大于则替换，若等于则加在maxStr末尾，若小于则不管；<br>
（4）更新当前子串的值为obj.start的位置到当前字符的位置（nowStr=data.substring(obj.start,i+1)）<br>
**2.obj.start指针在重复字符的前一个字符的位置的后面（如：abccba，遍历到第二个b时，obj.start指针为3，在第一个b的后面），说明当前字符与当前子串nowStr无重复：**<br>
（1）仅更新重复字符的位置为当前位置；<br>
（2）将当前字符加在nowStr末尾<br>

**2. for循环便利出来后:**<br>
（1）再比较nowStr与maxStr的长度，若大于则替换，若等于则加在maxStr末尾，若小于则不管；

**3. 输出maxStr**
