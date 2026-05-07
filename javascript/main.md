# 前端非 LeetCode 手写题全集清单

> 目标：整理所有前端实习 / 校招 / 初级面试里，可能在 15 分钟内要求手写的非 LeetCode 题。
>
> 范围：JavaScript、Promise、DOM、BOM、浏览器 API、组件、React Hooks、React 组件、TypeScript 类型题、CSS 小实现、请求封装、缓存、埋点、权限、AB 实验、工程化小工具。
>
> 说明：这不是算法题单，而是前端工程现场手写题地图。看到题目时，优先判断它属于哪个母题，再套模板。

---

## 0. 总分类

```txt
1. JS 基础工具函数
2. 数组 / 对象 / 字符串工具函数
3. 函数式编程工具
4. this / 原型 / 继承 / polyfill
5. Promise / async / 异步控制
6. 请求封装 / 并发 / 重试 / 缓存
7. 发布订阅 / 事件系统
8. DOM 操作
9. BOM / 浏览器 API
10. 浏览器存储
11. 浏览器路由
12. 性能优化小实现
13. 埋点 / 监控 SDK
14. 组件类手写
15. React Hooks
16. React 组件模式
17. 表单 / 校验 / 上传
18. 权限 / AB 实验 / Feature Flag
19. TypeScript 类型题
20. CSS / 布局 / 动画小题
21. 安全相关小实现
22. 工程化工具小实现
```

---

# 1. JS 基础工具函数类

```txt
001. debounce(fn, delay)
002. debounce 支持 immediate
003. debounce 支持 cancel
004. debounce 支持 flush
005. throttle(fn, delay)
006. throttle 时间戳版
007. throttle 定时器版
008. throttle 支持 leading / trailing
009. once(fn)
010. before(n, fn)
011. after(n, fn)
012. memoize(fn)
013. memoize 支持 resolver 自定义 key
014. curry(fn)
015. curry 支持占位符 placeholder
016. partial(fn, ...args)
017. compose(...fns)
018. pipe(...fns)
019. sleep(ms)
020. delay(fn, ms)
021. retry(fn, times)
022. retry 支持 delay
023. retry 支持指数退避 backoff
024. timeout(fnOrPromise, ms)
025. randomInt(min, max)
026. clamp(num, min, max)
027. range(start, end, step)
028. sum(...args)
029. average(arr)
030. min / max 自实现
031. shuffle(arr)
032. sample(arr)
033. sampleSize(arr, n)
034. generateUUID 简化版
035. parseQueryString(url)
036. stringifyQuery(obj)
037. camelCase(str)
038. kebabCase(str)
039. snakeCase(str)
040. capitalize(str)
041. trim 自实现
042. padStart 自实现
043. padEnd 自实现
044. repeat 自实现
045. truncate(str, len)
046. maskPhone(phone)
047. formatNumberWithComma(num)
048. formatMoney(num)
049. formatDate(date, format)
050. timeAgo(timestamp)
```

---

# 2. 数组手写题

```txt
051. Array.prototype.map
052. Array.prototype.filter
053. Array.prototype.reduce
054. Array.prototype.forEach
055. Array.prototype.some
056. Array.prototype.every
057. Array.prototype.find
058. Array.prototype.findIndex
059. Array.prototype.includes
060. Array.prototype.indexOf
061. Array.prototype.flat
062. Array.prototype.flatMap
063. 数组扁平化 flatten
064. 指定深度 flatten(arr, depth)
065. 数组去重 unique
066. 数组对象按 key 去重
067. 数组分组 groupBy
068. 数组切块 chunk
069. 数组差集 difference
070. 数组交集 intersection
071. 数组并集 union
072. 数组对称差 symmetricDifference
073. 数组转树 arrayToTree
074. 树转数组 treeToArray
075. 列表转 map
076. 按字段排序 sortBy
077. 多字段排序 orderBy
078. 数组乱序 shuffle
079. 数组移动 move(arr, from, to)
080. 数组插入 insertAt
081. 数组删除 removeAt
082. 数组分区 partition
083. 数组 zip
084. 数组 unzip
085. 数组 countBy
086. 数组 keyBy
087. 数组 compact，去掉 falsy
088. 数组 take
089. 数组 drop
090. 数组 takeRight
091. 数组 dropRight
092. 数组 fill 自实现
093. 数组 join 自实现
094. 数组 reverse 自实现
095. 数组 slice 自实现
096. 数组 splice 简化版
097. 数组 reduceRight
098. 找数组最大重复项
099. 找数组 topK 高频项
100. 将二维数组转 CSV 字符串
```

---

# 3. 对象手写题

```txt
101. Object.create
102. Object.assign
103. Object.keys 简化版
104. Object.values 简化版
105. Object.entries 简化版
106. Object.fromEntries
107. hasOwn(obj, key)
108. pick(obj, keys)
109. omit(obj, keys)
110. get(obj, path)
111. set(obj, path, value)
112. has(obj, path)
113. unset(obj, path)
114. merge(obj1, obj2)
115. deepMerge(obj1, obj2)
116. clone(obj)
117. deepClone(obj)
118. deepClone 支持循环引用
119. deepClone 支持 Date
120. deepClone 支持 RegExp
121. deepClone 支持 Map
122. deepClone 支持 Set
123. deepClone 支持 Symbol key
124. deepEqual(a, b)
125. shallowEqual(a, b)
126. isPlainObject
127. isEmptyObject
128. freeze 简化版
129. deepFreeze
130. flattenObject
131. unflattenObject
132. invertObject
133. objectToQuery
134. queryToObject
135. diffObject(oldObj, newObj)
136. patchObject(obj, patch)
137. compareObjectKeys
138. removeUndefinedFields
139. removeNullFields
140. normalizeObjectKeys
```

---

# 4. 类型判断类

```txt
141. typeOf(value)
142. isArray
143. isObject
144. isFunction
145. isPromise
146. isThenable
147. isDate
148. isRegExp
149. isMap
150. isSet
151. isWeakMap
152. isWeakSet
153. isSymbol
154. isBigInt
155. isNaN 自实现
156. isFinite 自实现
157. isInteger 自实现
158. isNumberObject
159. isStringObject
160. isBooleanObject
161. 判断空值 isNil
162. 判断 falsy
163. 判断类数组 isArrayLike
164. 判断 DOM 节点
165. 判断浏览器环境
166. 判断移动端
167. 判断 iOS / Android
168. 判断微信环境
169. 判断暗色模式
170. 判断是否支持某 API
```

---

# 5. this / 原型 / 继承 / Polyfill

```txt
171. Function.prototype.call
172. Function.prototype.apply
173. Function.prototype.bind
174. bind 支持 new 调用
175. new 操作符
176. instanceof
177. Object.create
178. 寄生组合继承
179. 原型链继承
180. 构造函数继承
181. class extends 简化模拟
182. super 简化理解
183. defineProperty 实现响应式
184. Proxy 实现响应式
185. for...in 和 Object.keys 区别题
186. 手写 typeof 增强版
187. 手写 iterator
188. 手写 Symbol.iterator
189. 让对象支持 for...of
190. 手写 generator 简化执行器
191. 手写 async / await 简化执行器
192. 手写 co 函数
193. 手写 JSON.stringify 简化版
194. 手写 JSON.parse 极简版
195. 手写 URLSearchParams 简化版
```

---

# 6. Promise / Async 类

```txt
196. Promise.all
197. Promise.race
198. Promise.allSettled
199. Promise.any
200. Promise.finally
201. Promise.resolve
202. Promise.reject
203. Promise.try
204. Promise.defer
205. promisify
206. callbackify
207. sleep
208. timeoutPromise
209. retry
210. retryWithDelay
211. retryWithBackoff
212. runSequential 顺序执行
213. runParallel 并行执行
214. scheduler(tasks, limit)
215. Scheduler 类
216. requestPool(urls, limit)
217. asyncMap(arr, asyncFn, limit)
218. asyncFilter(arr, asyncPredicate)
219. asyncReduce
220. asyncEvery
221. asyncSome
222. loadImages(urls, limit)
223. 并发上传队列
224. 任务队列 pause / resume
225. 任务队列 cancel
226. 任务队列 priority
227. 任务队列 retry
228. 任务队列 timeout
229. 可取消 Promise
230. AbortController 封装
231. 请求竞态，只取最后一次
232. 请求竞态，只取最快一次
233. 请求竞态，旧请求自动取消
234. Promise 池
235. Promise 缓存
236. Promise 去重
237. promiseLimit
238. pMap
239. pQueue
240. pTimeout
```

---

# 7. 请求封装 / 网络类

```txt
241. 封装 fetch
242. 封装 get / post
243. 请求超时 timeout
244. 请求重试 retry
245. 请求指数退避
246. 请求并发限制
247. 请求队列
248. 请求取消 AbortController
249. 请求去重，相同 key 复用 Promise
250. 请求缓存 memory cache
251. 请求缓存 localStorage cache
252. 请求缓存带过期时间
253. SWR 风格 stale-while-revalidate
254. 请求合并 batch request
255. 请求分片
256. token 自动注入
257. token 过期自动刷新
258. token 刷新队列，防止多次刷新
259. 401 后重放请求
260. axios request interceptor
261. axios response interceptor
262. fetch interceptor 简化版
263. upload 上传进度
264. 大文件切片上传
265. 断点续传
266. 秒传 hash 判断
267. 并发上传控制
268. 上传失败重试
269. 下载进度
270. 文件流下载
271. JSONP
272. Beacon 上报
273. sendBeacon 失败降级
274. WebSocket 自动重连
275. WebSocket 心跳检测
276. SSE 封装
277. 轮询 polling
278. 长轮询 long polling
279. 网络状态 online / offline 检测
280. 弱网重试策略
```

---

# 8. EventEmitter / 发布订阅 / 观察者

```txt
281. EventEmitter on / emit
282. EventEmitter off
283. EventEmitter once
284. EventEmitter 支持多个参数
285. EventEmitter 支持 this
286. EventEmitter 支持通配符
287. EventEmitter 支持命名空间
288. EventEmitter 支持 maxListeners
289. PubSub
290. Observer pattern
291. Subject / Observer
292. mitt 简化版
293. Redux store subscribe
294. 简易消息总线 EventBus
295. 支持取消订阅
296. 支持订阅优先级
297. 支持异步 listener
298. 支持事件冒泡模型
299. 支持事件捕获模型模拟
300. oncePromise(eventName)
```

---

# 9. DOM 操作类

```txt
301. $
302. $$
303. addClass
304. removeClass
305. toggleClass
306. hasClass
307. setStyle
308. getStyle
309. createElement
310. append
311. prepend
312. before
313. after
314. remove
315. empty
316. html
317. text
318. attr
319. removeAttr
320. dataset 操作
321. closest
322. matches
323. parent 查找
324. children 过滤
325. siblings
326. next
327. prev
328. DOM 节点遍历 DFS
329. DOM 节点遍历 BFS
330. 统计页面所有标签数量
331. 找出 DOM 树最大深度
332. DOM 转 JSON
333. JSON 转 DOM
334. 模板字符串生成 DOM
335. innerHTML 安全插入
336. escapeHTML
337. unescapeHTML
338. stripHTML
339. 高亮关键词
340. 文本节点替换
341. 获取元素绝对位置
342. 获取滚动容器
343. 判断元素是否在视口
344. 判断元素是否可见
345. 判断元素是否被遮挡
```

---

# 10. DOM 事件类

```txt
346. addEventListener once
347. addEventListener passive 模拟说明
348. 事件委托 delegate
349. 事件解绑
350. 阻止默认行为
351. 阻止冒泡
352. 捕获 / 冒泡顺序题
353. 自定义事件 CustomEvent
354. 派发事件 dispatchEvent
355. 点击外部关闭 clickOutside
356. 双击检测
357. 长按检测
358. 拖拽 drag
359. 拖拽排序
360. 鼠标框选
361. 鼠标移动节流
362. 键盘快捷键监听
363. 组合键监听 ctrl+s
364. ESC 关闭弹窗
365. Enter 提交表单
366. 输入法 composition 处理
367. 滚动监听
368. 滚动方向判断
369. 滚动到底部判断
370. 滚动吸顶
371. 滚动加载更多
372. resize 监听
373. visibilitychange 监听
374. beforeunload 提示
375. copy / cut / paste 监听
```

---

# 11. BOM / 浏览器 API 类

```txt
376. 获取 URL 参数
377. 修改 URL 参数
378. 删除 URL 参数
379. location 跳转封装
380. history.pushState 路由
381. history.replaceState 路由
382. popstate 监听
383. hashchange 监听
384. hashRouter
385. historyRouter
386. localStorage 封装
387. sessionStorage 封装
388. cookie get / set / delete
389. cookie 解析
390. Cookie 带过期时间
391. BroadcastChannel 跨 tab 通信
392. storage event 跨 tab 通信
393. postMessage iframe 通信
394. postMessage origin 校验
395. window.open 通信
396. navigator.onLine
397. Clipboard API 封装
398. execCommand copy 降级
399. Geolocation 封装
400. Notification 封装
401. requestAnimationFrame 动画
402. cancelAnimationFrame
403. requestIdleCallback 任务调度
404. idleCallback polyfill
405. Web Worker 封装
406. worker 计算大数组
407. Service Worker 注册
408. Cache API 简化封装
409. IndexedDB 简化封装
410. FileReader 读文件
411. Blob 下载文件
412. URL.createObjectURL
413. 图片转 base64
414. base64 转 Blob
415. Canvas 截图
```

---

# 12. 存储 / 缓存类

```txt
416. localStorage set / get
417. localStorage 支持过期时间
418. localStorage 支持 namespace
419. localStorage 支持版本号
420. localStorage 自动清理过期 key
421. sessionStorage wrapper
422. cookie wrapper
423. memory cache
424. LRU cache
425. LFU cache 简化版
426. TTL cache
427. 请求缓存 cacheRequest
428. 图片缓存
429. promise cache
430. memoize cache
431. 缓存命中统计
432. 缓存容量限制
433. stale-while-revalidate
434. 缓存穿透防护简化版
435. 缓存队列清理
436. IndexedDB key-value 封装
437. Cache API 封装
438. 离线缓存
439. 最近搜索历史
440. 表单草稿缓存
```

---

# 13. 路由类

```txt
441. hash 路由
442. history 路由
443. route 注册
444. route match
445. 动态路由 /user/:id
446. 解析 path params
447. 解析 query params
448. 路由守卫 beforeEach
449. 路由 afterEach
450. 路由懒加载模拟
451. 404 fallback
452. 嵌套路由简化版
453. 面包屑生成
454. 菜单根据路由生成
455. 权限路由过滤
456. keep-alive 简化缓存
457. 滚动位置恢复
458. 路由切换埋点
459. 路由 loading bar
460. 路由重定向
```

---

# 14. 性能优化小实现

```txt
461. 图片懒加载
462. IntersectionObserver 懒加载
463. scroll + throttle 懒加载
464. 曝光上报
465. 曝光去重
466. 曝光停留时长统计
467. 虚拟列表固定高度
468. 虚拟列表动态高度
469. 无限滚动
470. 列表滚动到底加载更多
471. requestIdleCallback 分片任务
472. setTimeout 分片任务
473. Web Worker 分片计算
474. 长任务检测
475. 首屏时间统计
476. DOMContentLoaded 统计
477. load 时间统计
478. FCP 采集
479. LCP 采集
480. CLS 采集
481. FID / INP 采集
482. performance.mark
483. performance.measure
484. 资源加载耗时统计
485. API 请求耗时统计
486. 白屏检测
487. 首屏骨架屏
488. 图片预加载
489. 资源 preload
490. 资源 prefetch
491. 动态 script 加载
492. CSS 异步加载
493. 网络空闲检测
494. 空闲时预请求
495. 低优先级任务调度
496. FPS 统计
497. 页面卡顿检测
498. 页面可见性暂停任务
499. 大数据渲染分批插入
500. 防止重复渲染调度器
```

---

# 15. 埋点 / 监控 SDK 类

```txt
501. click 埋点
502. pageview 埋点
503. route change 埋点
504. 曝光埋点
505. 曝光去重
506. 曝光时长
507. 自定义事件 track
508. sendBeacon 上报
509. 图片打点上报
510. fetch 上报
511. 上报失败重试
512. 上报队列
513. 上报批量合并
514. 上报节流
515. 页面卸载前上报
516. 错误监控 window.onerror
517. Promise 错误 unhandledrejection
518. React ErrorBoundary
519. 资源加载错误监控
520. JS 错误去重
521. sourcemap 映射说明
522. 接口错误监控
523. 接口耗时监控
524. 白屏监控
525. 卡顿监控
526. long task 监控
527. 用户行为 breadcrumb
528. console.error 劫持
529. fetch 劫持
530. XMLHttpRequest 劫持
531. SDK 初始化
532. SDK 插件机制
533. SDK 采样率
534. SDK 离线缓存
535. SDK flush
```

---

# 16. 组件类：纯 JS / HTML / CSS 能写

## 16.1 弹层类

```txt
536. Dialog / Modal 遮罩弹窗
537. Alert 弹窗
538. Confirm 弹窗
539. Prompt 弹窗
540. Drawer 抽屉
541. Popover
542. Tooltip
543. Dropdown
544. ContextMenu 右键菜单
545. Toast
546. Message
547. Notification
548. Loading 全屏遮罩
549. Loading 局部遮罩
550. ActionSheet
551. BottomSheet
552. Lightbox 图片预览
553. ImagePreview 图片预览组
554. 全局 Modal Manager
555. 弹窗 z-index 管理
```

## 16.2 表单类

```txt
556. Input 组件
557. Textarea 自动高度
558. PasswordInput 显隐密码
559. SearchInput
560. AutoComplete
561. Select
562. MultiSelect
563. Checkbox
564. CheckboxGroup
565. Radio
566. RadioGroup
567. Switch
568. Slider
569. Rate 星级评分
570. DatePicker 简化版
571. TimePicker 简化版
572. ColorPicker 简化版
573. Upload
574. FileDrop 拖拽上传
575. Form
576. FormItem
577. 表单校验
578. 异步校验
579. 表单 reset
580. 表单 dirty 判断
```

## 16.3 导航类

```txt
581. Tabs
582. Breadcrumb
583. Pagination
584. Steps
585. Menu
586. Sidebar
587. TreeMenu
588. Anchor 锚点导航
589. BackTop 返回顶部
590. Navbar
591. Segmented Control
592. Collapse 折叠面板
593. Accordion
594. Carousel 轮播图
595. Swiper 简化版
```

## 16.4 数据展示类

```txt
596. Table
597. Table 排序
598. Table 筛选
599. Table 分页
600. Table 多选
601. Table 固定列简化版
602. List
603. InfiniteList
604. VirtualList
605. Tree
606. Tree 可展开收起
607. Tree 可勾选
608. Tag
609. Badge
610. Avatar
611. Card
612. Skeleton
613. Empty
614. Progress
615. Timeline
```

## 16.5 交互类

```txt
616. Drag 拖拽
617. DragSort 拖拽排序
618. Resizable 可调整大小
619. SplitPane 分割面板
620. CopyButton
621. LikeButton
622. FavoriteButton
623. ThemeToggle
624. PasswordStrength
625. TextCounter 字数统计
626. ReadMore 展开收起
627. EditableText
628. InlineEdit
629. MentionInput @ 人
630. TagInput
631. OTP 验证码输入框
632. Captcha 倒计时按钮
633. Countdown
634. Timer
635. Stopwatch
```

## 16.6 页面级小组件

```txt
636. TodoList
637. ShoppingCart
638. ProductCard
639. ProductList 筛选排序
640. Kanban Board 简化版
641. Calendar 简化版
642. ChatBox
643. CommentList
644. CommentInput
645. StarRating
646. ImageGallery
647. Masonry 瀑布流
648. LoginForm
649. RegisterForm
650. SearchResultList
651. Command Palette
652. Keyboard Shortcut Panel
653. FileExplorer
654. JsonViewer
655. CodeBlock copy
```

---

# 17. React Hooks 类

```txt
656. useDebounce
657. useThrottle
658. usePrevious
659. useLatest
660. useToggle
661. useBoolean
662. useCounter
663. useInterval
664. useTimeout
665. useMount
666. useUnmount
667. useUpdateEffect
668. useEventListener
669. useClickOutside
670. useHover
671. useFocus
672. useKeyPress
673. useWindowSize
674. useScroll
675. useIntersectionObserver
676. useInViewport
677. useLocalStorage
678. useSessionStorage
679. useCookie
680. useFetch
681. useRequest
682. useAsync
683. useAsyncFn
684. usePagination
685. useInfiniteScroll
686. useVirtualList
687. useForm
688. useField
689. useModal
690. useToast
691. useConfirm
692. useClipboard
693. useDarkMode
694. useMediaQuery
695. useNetworkStatus
696. useOnline
697. useDocumentTitle
698. useLockBodyScroll
699. useControllableValue
700. useMergedState
701. useWhyDidYouUpdate
702. useRaf
703. useRafState
704. useIdle
705. useLongPress
```

---

# 18. React 组件题

```txt
706. Controlled Input
707. Uncontrolled Input
708. SearchInput + debounce
709. SearchInput + 请求竞态
710. AutoComplete
711. Tabs
712. Modal
713. Toast
714. Dropdown
715. Tooltip
716. Pagination
717. Table
718. SortableTable
719. FilterableTable
720. TodoList
721. VirtualList
722. InfiniteScroll
723. Upload
724. DragUpload
725. Form
726. Form validation
727. Multi-step form
728. Accordion
729. Tree
730. TreeSelect
731. Select
732. MultiSelect
733. Rate
734. Slider
735. Carousel
736. Countdown
737. Timer
738. Stopwatch
739. ThemeToggle
740. DarkModeProvider
741. AuthGuard
742. PermissionButton
743. FeatureFlag
744. ABTestWrapper
745. ErrorBoundary
746. Suspense fallback 小题
747. Render Props 小题
748. Compound Components Tabs
749. Portal Modal
750. Context store
751. useReducer Todo
752. Mini Redux with React
753. React.memo 优化题
754. useCallback 优化题
755. 子组件不必要渲染排查
```

---

# 19. Vue 小手写 / 机制类

```txt
756. Vue reactive 简化版
757. Vue ref 简化版
758. effect 简化版
759. computed 简化版
760. watch 简化版
761. nextTick 简化版
762. v-model 组件
763. 自定义 directive
764. useDebounceFn
765. useClickOutside
766. 简易 EventBus
767. provide / inject 示例
768. keep-alive 思路题
769. 动态组件
770. Vue 表单组件
771. Vue Modal
772. Vue Toast
773. Vue Tree
774. Vue Pagination
775. Vue 路由守卫权限过滤
```

---

# 20. TypeScript 类型手写题

## 20.1 基础类型工具

```txt
776. Partial<T>
777. Required<T>
778. Readonly<T>
779. Pick<T, K>
780. Omit<T, K>
781. Record<K, T>
782. Exclude<T, U>
783. Extract<T, U>
784. NonNullable<T>
785. ReturnType<T>
786. Parameters<T>
787. ConstructorParameters<T>
788. InstanceType<T>
789. Awaited<T>
790. ThisParameterType<T>
791. OmitThisParameter<T>
792. ThisType<T>
793. Uppercase
794. Lowercase
795. Capitalize
```

## 20.2 进阶类型

```txt
796. DeepPartial<T>
797. DeepReadonly<T>
798. DeepRequired<T>
799. DeepPick<T>
800. Mutable<T>
801. Writable<T>
802. Nullable<T>
803. ValueOf<T>
804. KeyOfType<T, Value>
805. OptionalKeys<T>
806. RequiredKeys<T>
807. Merge<T, U>
808. Override<T, U>
809. Diff<T, U>
810. UnionToIntersection<T>
811. LastOfUnion<T>
812. TupleToUnion<T>
813. UnionToTuple<T>
814. Flatten<T>
815. Push<T, U>
816. Pop<T>
817. Shift<T>
818. Unshift<T, U>
819. Includes<T, U>
820. IndexOf<T, U>
821. Length<T>
822. Reverse<T>
823. Zip<T, U>
824. PromiseValue<T>
825. FunctionArgs<T>
826. FunctionReturn<T>
827. IsAny<T>
828. IsNever<T>
829. IsUnknown<T>
830. Equal<X, Y>
831. StartsWith<S, Prefix>
832. EndsWith<S, Suffix>
833. Replace<S, From, To>
834. ReplaceAll<S, From, To>
835. Trim<S>
836. Split<S, Separator>
837. Join<T, Separator>
838. StringToUnion<S>
839. Path<T>
840. PathValue<T, Path>
```

---

# 21. CSS / HTML 小实现

```txt
841. 三栏布局
842. 两栏布局
843. 圣杯布局
844. 双飞翼布局
845. 水平垂直居中
846. flex 居中
847. grid 居中
848. 等高布局
849. sticky footer
850. 自适应正方形
851. aspect-ratio 图片盒子
852. 单行省略号
853. 多行省略号
854. 1px 边框
855. 三角形
856. 扇形
857. loading spinner
858. skeleton 骨架屏
859. tooltip 纯 CSS
860. modal 基础样式
861. tabs 基础样式
862. switch 开关
863. checkbox 自定义
864. radio 自定义
865. progress bar
866. star rating
867. 九宫格
868. 瀑布流 CSS columns
869. grid 瀑布流简化
870. 响应式布局 media query
871. dark mode
872. CSS 变量主题
873. BFC 清浮动
874. clearfix
875. 移动端安全区域 safe-area
876. rem 适配
877. vw 适配
878. CSS 动画淡入淡出
879. transition 抽屉动画
880. accordion 动画
```

---

# 22. 安全类小实现

```txt
881. escapeHTML 防 XSS
882. sanitizeHTML 简化版
883. 富文本白名单过滤
884. URL 白名单校验
885. 防止 javascript: URL
886. CSRF token 注入请求
887. SameSite cookie 解释 + 设置
888. postMessage origin 校验
889. iframe sandbox 配置
890. CSP nonce 动态 script
891. localStorage 敏感信息风险
892. token 存储封装
893. refresh token 队列
894. 防重复提交
895. 验证码倒计时
896. 密码强度检测
897. 输入长度限制
898. 文件类型校验
899. 文件大小校验
900. 上传文件名安全处理
```

---

# 23. 工程化 / 构建小工具

```txt
901. 简易 require 模块加载器
902. 简易 CommonJS runtime
903. 简易 webpack bundle runtime
904. 动态 import 模拟
905. script loader
906. CSS loader 简化
907. 图片 loader 简化
908. 插件机制
909. tapable 简化版
910. middleware 洋葱模型
911. Koa compose
912. Express middleware
913. composeMiddlewares
914. vite 插件 transform 简化
915. babel 插件 visitor 简化
916. AST 遍历简化
917. 模板替换工具
918. env 注入工具
919. 简易 CLI 参数解析
920. 文件路径 normalize
921. glob 匹配简化
922. semver 比较
923. 版本号排序
924. changelog 生成简化
925. 批量重命名脚本
```

---

# 24. 状态管理类

```txt
926. Redux createStore
927. Redux combineReducers
928. Redux applyMiddleware
929. Redux thunk
930. Redux logger middleware
931. Zustand 简化版
932. MobX observable 简化版
933. pub-sub store
934. useStore hook
935. selector 订阅
936. shallowEqual 防重复更新
937. 状态持久化
938. 状态回滚 undo / redo
939. 时间旅行 time travel
940. immer produce 简化版
941. immutable setIn
942. immutable updateIn
943. form store
944. table store
945. modal store
```

---

# 25. 权限 / AB 实验 / 中台业务类

```txt
946. RBAC 权限按钮
947. 权限路由过滤
948. 权限菜单过滤
949. hasPermission
950. PermissionWrapper
951. FeatureFlag 组件
952. useFeatureFlag
953. ABTestWrapper
954. 根据实验分组渲染组件
955. 实验配置缓存
956. 实验配置预请求
957. 实验命中埋点
958. 实验曝光埋点
959. 灰度发布判断
960. 白名单命中
961. 黑名单命中
962. 按用户 ID hash 分桶
963. 流量分配 10% / 50%
964. 多实验互斥
965. 实验状态机
966. version / config 映射
967. 兜底配置 fallback
968. 远程配置 SDK
969. 配置热更新
970. 配置优先级合并
```

---

# 26. 表单 / 校验 / 上传专项

```txt
971. required 校验
972. min / max 校验
973. pattern 校验
974. email 校验
975. phone 校验
976. password strength
977. async validator
978. 表单 touched
979. 表单 dirty
980. 表单 error map
981. 表单 reset
982. 表单 submit loading
983. 防重复提交
984. 多步骤表单
985. 动态表单
986. 联动表单
987. 文件选择预览
988. 图片预览
989. 图片压缩 canvas
990. 文件类型校验
991. 文件大小校验
992. 多文件上传
993. 拖拽上传
994. 上传进度条
995. 上传取消
996. 上传重试
997. 切片上传
998. 断点续传
999. 秒传
1000. 上传并发限制
```

---

# 27. 奇怪但可能出现的小题

```txt
1001. 实现 LazyMan
1002. 实现链式调用 calculator
1003. 实现 add(1)(2)(3)
1004. 实现 sum(1,2)(3).valueOf()
1005. 实现无限累加函数
1006. 实现模板引擎 render
1007. 实现 i18n t('a.b.c')
1008. 实现 classNames
1009. 实现 CSS Module class 合并
1010. 实现 EventTarget 简化版
1011. 实现 Observable 简化版
1012. 实现 Subject
1013. 实现 Scheduler with priority
1014. 实现 debounce promise
1015. 实现 throttle promise
1016. 实现 lock，防并发执行
1017. 实现 mutex
1018. 实现 semaphore
1019. 实现 rate limiter
1020. 实现 token bucket
1021. 实现 leaky bucket
1022. 实现 async lock by key
1023. 实现任务批处理 batcher
1024. 实现 microtask queue 模拟
1025. 实现 nextTick
1026. 实现 setImmediate polyfill
1027. 实现 RAF throttle
1028. 实现 FPS meter
1029. 实现倒计时格式化
1030. 实现 cron 简化匹配
1031. 实现 URL pattern match
1032. 实现 glob match 简化
1033. 实现 LRU
1034. 实现 LFU 简化
1035. 实现 Trie 前缀树用于搜索建议
1036. 实现 highlight keyword
1037. 实现 diff 文本高亮
1038. 实现 markdown 粗体解析
1039. 实现 markdown heading 解析
1040. 实现目录 toc 生成
1041. 实现复制代码按钮
1042. 实现 JSON viewer
1043. 实现 flatten JSON
1044. 实现 CSV parser 简化
1045. 实现 CSV stringify
1046. 实现颜色 hex / rgb 转换
1047. 实现 debounce input composition 兼容中文输入
1048. 实现移动端下拉刷新
1049. 实现上拉加载
1050. 实现手势滑动识别
```

---

# 28. Dialog / Modal 组件变体清单

如果面试题是“写一个 Dialog / Modal 组件”，可能追问这些：

```txt
1. 基础 Dialog：open / close
2. 遮罩层点击关闭
3. ESC 关闭
4. 右上角 X 关闭
5. 确认 / 取消按钮
6. 支持 title / content / footer
7. 支持自定义 children
8. 支持 destroyOnClose
9. 支持点击遮罩不关闭
10. 支持 body 滚动锁定
11. 支持 z-index 管理
12. 支持多个弹窗叠加
13. 支持动画
14. 支持 Portal
15. 支持 confirm 函数式调用
16. 支持 promise confirm
17. 支持异步 onOk loading
18. 支持键盘 focus trap
19. 支持 aria-modal
20. 支持关闭后恢复焦点
```

Dialog 的核心结构：

```txt
state:
  visible

DOM:
  mask
  panel
  header
  body
  footer

events:
  close
  mask click
  esc
  ok
  cancel

side effects:
  lock body scroll
  restore body scroll
  manage z-index
  restore focus
```

---

# 29. 母题压缩版

虽然上面列了很多题，但底层其实是这些母题。

## 29.1 JS 母题

```txt
闭包保存状态
this 绑定
原型链
递归
队列
缓存 Map
深度遍历
函数包装
```

## 29.2 Promise 母题

```txt
Promise 聚合
Promise.race
递归重试
并发池
任务队列
取消信号
```

## 29.3 DOM 母题

```txt
事件委托
滚动判断
元素可见性
节点遍历
样式控制
动态创建 / 销毁
```

## 29.4 组件母题

```txt
状态 visible
受控 / 非受控
事件回调
点击外部
键盘事件
列表渲染
异步 loading / error
```

## 29.5 浏览器母题

```txt
storage
history
performance
observer
worker
postMessage
fetch
```

---

# 30. 推荐 VitePress 目录结构

```txt
frontend-handwriting/
  index.md
  01-js-utils.md
  02-array-object.md
  03-polyfill.md
  04-promise-async.md
  05-scheduler-request.md
  06-event-emitter.md
  07-dom-events.md
  08-browser-api.md
  09-storage-cache.md
  10-router.md
  11-performance.md
  12-monitoring-sdk.md
  13-components-basic.md
  14-components-advanced.md
  15-react-hooks.md
  16-react-components.md
  17-typescript-types.md
  18-css-layout.md
  19-security.md
  20-business-ab-permission.md
```

---

# 31. 每一道题的笔记模板

之后每道题都可以按这个格式整理：

```md
# 题目名

## 1. 题目要求

描述要实现什么。

## 2. 输入输出

```js
// example
```

## 3. 核心思路

1. 需要哪些状态
2. 什么时候开始
3. 什么时候结束
4. 成功失败怎么处理
5. 有哪些边界情况

## 4. 完整代码

```js
// code
```

## 5. 面试解释

用 3 到 5 句话解释这道题。

## 6. 常见追问

- 追问 1
- 追问 2
- 追问 3
```

---

# 32. 看到题时的归类速查

```txt
出现“最多同时 N 个”：
=> scheduler / requestPool / semaphore

出现“失败再试”：
=> retry / backoff

出现“只要最后一次结果”：
=> 请求竞态 / AbortController / requestId

出现“弹窗 / 下拉 / 菜单”：
=> visible + clickOutside + esc + portal / zIndex

出现“输入搜索”：
=> debounce + loading + error + stale response

出现“长列表”：
=> virtual list / infinite scroll / intersection observer

出现“权限 / 实验”：
=> wrapper + config + fallback + exposure track

出现“跨组件通信”：
=> EventEmitter / Context / store

出现“缓存”：
=> Map + key + expire + capacity

出现“路由”：
=> hashchange / popstate + route table

出现“埋点监控”：
=> event queue + sendBeacon + retry + batch

出现“TS 类型”：
=> extends + infer + keyof + mapped type
```

---

# 33. 最优先练的 50 道

如果时间不够，先从这 50 道开始：

```txt
1. debounce
2. throttle
3. Promise.all
4. Promise.race
5. Promise.allSettled
6. Promise.any
7. retry
8. timeoutPromise
9. scheduler(tasks, limit)
10. Scheduler 类
11. requestPool
12. asyncMap
13. EventEmitter
14. PubSub
15. deepClone
16. deepEqual
17. flatten
18. groupBy
19. arrayToTree
20. get(obj, path)
21. set(obj, path)
22. call
23. apply
24. bind
25. new
26. instanceof
27. JSON.stringify 简化版
28. classNames
29. LazyMan
30. LRU cache
31. localStorage 过期封装
32. 请求去重
33. 请求缓存
34. token 刷新队列
35. 图片懒加载
36. 事件委托
37. clickOutside
38. hashRouter
39. historyRouter
40. 虚拟列表固定高度
41. Toast
42. Modal
43. Dropdown
44. Tabs
45. SearchInput
46. useDebounce
47. useLatest
48. useClickOutside
49. useRequest
50. PermissionButton / FeatureFlag
```