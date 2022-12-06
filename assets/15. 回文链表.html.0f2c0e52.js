import{_ as n,o as s,c as a,a as e}from"./app.f886be28.js";const p={},t=e(`<h3 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a> \u9898\u76EE\u63CF\u8FF0</h3><p>\u7F16\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u68C0\u67E5\u8F93\u5165\u7684\u94FE\u8868\u662F\u5426\u662F\u56DE\u6587\u7684\u3002</p><p>\u8981\u6C42\uFF1A\u7528 O(n) \u65F6\u95F4\u590D\u6742\u5EA6\u548C O(1) \u7A7A\u95F4\u590D\u6742\u5EA6\u89E3\u51B3\u6B64\u9898\u3002</p><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u793A\u4F8B\u4E00
\u8F93\u5165\uFF1A 1-&gt;2
\u8F93\u51FA\uFF1A false 
// \u793A\u4F8B\u4E8C
\u8F93\u5165\uFF1A 1-&gt;2-&gt;2-&gt;1
\u8F93\u51FA\uFF1A true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h3><p>\u5173\u952E\u70B9\uFF1A\u5FEB\u6162\u6307\u9488\u3001\u53CD\u8F6C\u94FE\u8868</p><p>O(1) \u7A7A\u95F4\u590D\u6742\u5EA6\uFF0C\u53EF\u4EE5\u9760\u4FEE\u6539\u8F93\u5165\u5B9E\u73B0\u3002</p><p>\u6B65\u9AA4\uFF1A</p><ol><li>\u94FE\u8868\u5206\u6210\u4E24\u534A\uFF0C\u627E\u5230 \u540E\u534A\u90E8\u5206 \u7684\u5F00\u59CB\u8282\u70B9\u3002</li><li>\u53CD\u8F6C \u540E\u534A\u90E8\u5206 \u94FE\u8868\u3002</li><li>\u5224\u65AD \u524D\u534A\u90E8\u5206 \u548C \u540E\u534A\u90E8\u5206 \u662F\u5426\u76F8\u540C\u3002</li></ol><p>\u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(n)<br> \u7A7A\u95F4\u590D\u6742\u5EA6\uFF1AO(1)</p><h3 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>head<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token comment">// \u627E\u5230\u540E\u534A\u90E8\u5206\u7684\u5934\u8282\u70B9</span>
  <span class="token keyword">let</span> fast <span class="token operator">=</span> head
  <span class="token keyword">let</span> slow <span class="token operator">=</span> head
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token comment">// \u53CD\u8F6C\u540E\u534A\u90E8\u5206\u94FE\u8868</span>
  <span class="token keyword">let</span> p2 <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">let</span> curr <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
  <span class="token keyword">while</span> <span class="token punctuation">(</span>curr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> nextTemp <span class="token operator">=</span> curr<span class="token punctuation">.</span>next
    curr<span class="token punctuation">.</span>next <span class="token operator">=</span> p2
    p2 <span class="token operator">=</span> curr
    curr <span class="token operator">=</span> nextTemp
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> p1 <span class="token operator">=</span> head
  <span class="token comment">// \u5224\u65AD\u662F\u5426\u56DE\u6587</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>p2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p1<span class="token punctuation">.</span>val <span class="token operator">!==</span> p2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next
    p2 <span class="token operator">=</span> p2<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[t];function l(i,c){return s(),a("div",null,o)}var d=n(p,[["render",l],["__file","15. \u56DE\u6587\u94FE\u8868.html.vue"]]);export{d as default};
