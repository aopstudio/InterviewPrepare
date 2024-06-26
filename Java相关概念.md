## 重写和重载
重写是子类对父类的允许访问的方法的实现过程进行重新编写, 返回值和形参都不能改变
重载(overloading) 是在一个类里面，方法名字相同，而参数不同。返回类型可以相同也可以不同。

### 重写的好处
有利于代码复用和协作开发

实际应用中，用得最多的一种运行时多态，就是用只知道父类型（可能是类，更多的可能是接口）的定义，这样只能调用父类型的方法（这在大型软件里很常用，父类型和子类型可能是不同的人编写的，以利于协作编程）。

因此，如果子类型重写了父类型的同名方法，那么只知道父类型的定义就可以调用子类型的方法了，这体现了软件复用（分层的思想其实也在里面，需要你体会一下）。
## Java的基本数据类型
Java中共有8种基本数据类型，分别是byte, short, int, long, char, float, double, boolean。前四个都是都是整数类型，后三个分别属于字符类型、单精度浮点数类型、双精度浮点数类型、布尔类型。

类型              |存储需求     |bit数                   
-----------------|------------|--------
int              |4字节       |4*8 
short            |2字节       |2*8  
long             |8字节       |8*8
byte             |1字节       |1*8  
float            |4字节       |4*8                            
double           |8字节       |8*8
char             |2字节       |2*8
boolean          |1字节       |1*8
## 线程安全
### Java线程安全的类
* HashTable
    * Properties
* Vector
* StringBuffer

### 线程不安全的类
* HashMap
    * LinkedHashMap
* ArrayList
* StringBuilder

## ArrayList和LinkedList
ArrayList用数组实现，LinkedList用链表实现

LinkedList 是采用双向循环链表实现的。

删除元素的时间复杂度：
ArrayList:O(n)
LinkedList:O(1)


## 面向对象编程三大特性
* 封装
* 继承
* 多态

## 多态
是同一个接口，使用不同的实例而执行不同操作。
父类引用指向子类对象

把不同的子类对象都当作父类来看，可以屏蔽不同子类对象之间的差异，写出通用的代码，做出通用的编程，以适应需求的不断变化。
### 多态的实现条件
* 继承
* 重写
* 向上转型


### 多态的优点：

1. 消除类型之间的耦合关系
2. 可替换性
3. 可扩充性
4. 接口性
5. 灵活性
6. 简化性

### 多态的体现形式
继承
父类引用指向子类
重写

## 堆和栈区别
堆由程序员分配释放，存放实例对象等内容，分配方式类似于链表

栈由操作系统自动分配释放，用于存放函数的参数值、局部变量等，其操作方式类似于数据结构中的栈

## IoC(控制反转)
首先想说说IoC（Inversion of Control，控制反转）。这是spring的核心，贯穿始终。所谓IoC，对于spring框架来说，就是由spring来负责控制对象的生命周期和对象间的关系。这是什么意思呢，举个简单的例子，我们是如何找女朋友的？常见的情况是，我们到处去看哪里有长得漂亮身材又好的mm，然后打听她们的兴趣爱好、qq号、电话号、ip号、iq号………，想办法认识她们，投其所好送其所要，然后嘿嘿……这个过程是复杂深奥的，我们必须自己设计和面对每个环节。传统的程序开发也是如此，在一个对象中，如果要使用另外的对象，就必须得到它（自己new一个，或者从JNDI中查询一个），使用完之后还要将对象销毁（比如Connection等），对象始终会和其他的接口或类藕合起来。

那么IoC是如何做的呢？有点像通过婚介找女朋友，在我和女朋友之间引入了一个第三者：婚姻介绍所。婚介管理了很多男男女女的资料，我可以向婚介提出一个列表，告诉它我想找个什么样的女朋友，比如长得像李嘉欣，身材像林熙雷，唱歌像周杰伦，速度像卡洛斯，技术像齐达内之类的，然后婚介就会按照我们的要求，提供一个mm，我们只需要去和她谈恋爱、结婚就行了。简单明了，如果婚介给我们的人选不符合要求，我们就会抛出异常。整个过程不再由我自己控制，而是有婚介这样一个类似容器的机构来控制。Spring所倡导的开发方式就是如此，所有的类都会在spring容器中登记，告诉spring你是个什么东西，你需要什么东西，然后spring会在系统运行到适当的时候，把你要的东西主动给你，同时也把你交给其他需要你的东西。所有的类的创建、销毁都由 spring来控制，也就是说控制对象生存周期的不再是引用它的对象，而是spring。对于某个具体的对象而言，以前是它控制其他对象，现在是所有对象都被spring控制，所以这叫控制反转。

## DI(依赖注入)
IoC的一个重点是在系统运行中，动态的向某个对象提供它所需要的其他对象。这一点是通过DI（Dependency Injection，依赖注入）来实现的。比如对象A需要操作数据库，以前我们总是要在A中自己编写代码来获得一个Connection对象，有了 spring我们就只需要告诉spring，A中需要一个Connection，至于这个Connection怎么构造，何时构造，A不需要知道。在系统运行时，spring会在适当的时候制造一个Connection，然后像打针一样，注射到A当中，这样就完成了对各个对象之间关系的控制。A需要依赖 Connection才能正常运行，而这个Connection是由spring注入到A中的，依赖注入的名字就这么来的。那么DI是如何实现的呢？ Java 1.3之后一个重要特征是反射（reflection），它允许程序在运行的时候动态的生成对象、执行对象的方法、改变对象的属性，spring就是通过反射来实现注入的。

理解了IoC和DI的概念后，一切都将变得简单明了，剩下的工作只是在spring的框架中堆积木而已。

## 说一下 IoC 和 AOP？
IoC 是依赖反转，通过依赖注入 DI 实现 IoC。主要思想是面向抽象编程而不是面向具体实现编程。反转的意思是从依赖具体
实现变为依赖抽象。

AOP 是面向切面编程，通过代理对代码无侵入的添加功能，实现切面编程。比如事务、日志等模块。
代理机制主要有 JDK 提供的动态代理和 cglib 提供的字节码动态代码。

## 依赖注入的方式有哪几种？
set 方法注入
构造器注入
注解注入

## SpringBoot 是怎么做到简化配置的？

答：主要是@EnableAutoConfiguration 这个注解起的作用，这个注解是间接隐藏在 SpringBoot 的启动类注解@SpringBootApplication 中。

通过这个注解，SpringApplication.run(...)的内部就会执行 selectImports()方法，寻找 META-INF/spring.factories 文件，读取里面的文件配置，将事先已经写好的自动配置类有选择地加载到 Spring 容器中，并且能按照约定的写法在 application.properties 中配置参数或开关。


## sychronized和lock区别
第一大不足：由于我们没办法设置synchronized关键字在获取锁的时候等待时间，所以synchronized可能会导致线程为了加锁而无限期地处于阻塞状态。
第二大不足：使用synchronized关键字等同于使用了互斥锁，即其他线程都无法获得锁对象的访问权。这种策略对于读多写少的应用而言是很不利的，因为即使多个读者看似可以并发运行，但他们实际上还是串行的，并将最终导致并发性能的下降。。

1）Lock不是Java语言内置的，synchronized是Java语言的关键字，因此是内置特性。Lock是一个类，通过这个类可以实现同步访问；

2）Lock和synchronized有一点非常大的不同，采用synchronized不需要用户去手动释放锁，当synchronized方法或者synchronized代码块执行完之后，系统会自动让线程释放对锁的占用；而Lock则必须要用户去手动释放锁，如果没有主动释放锁，就有可能导致出现死锁现象。

1. ReenTrantLock可以指定是公平锁还是非公平锁。而synchronized只能是非公平锁。所谓的公平锁就是先等待的线程先获得锁。

2. ReenTrantLock提供了一个Condition（条件）类，用来实现分组唤醒需要唤醒的线程们，而不是像synchronized要么随机唤醒一个线程要么唤醒全部线程。

## 可重入锁和不可重入锁
可重入锁又名递归锁，是指在同一个线程在外层方法获取锁的时候，再进入该线程的内层方法会自动获取锁（前提锁对象得是同一个对象或者 class），不会因为之前已经获取过还没释放而阻塞。Java 中 ReentrantLock 和 synchronized 都是可重入锁，可重入锁的一个优点是可一定程度避免死锁。

当A方法获取lock锁去锁住一段需要做原子性操作的B方法时，如果这段B方法又需要锁去做原子性操作，那么A方法就必定要与B方法出现死锁。这种会出现问题的重入一把锁的情况，叫不可重入锁。

## hashmap底层实现
HashMap计算hash对key的hashcode进行了二次hash，以获得更好的散列值，然后对table数组长度取摸。

## hashmap扩容为什么是2倍不是3倍
index = (n - 1) & hash。在 n 为 2次幂的情况下时，(n - 1) & hash ≈ hash % n

## TreeMap
基于红黑树实现，根据键的顺序排序

## 红黑树的特征
1. 节点要么是红，要么是黑
2. 根节点是黑
3. 叶子节点是黑的空节点
4. 红色节点的子节点不能是红色节点
5. 根节点到每个叶子节点的路径上经过的黑色节点数量相同
## 为什么使用红黑树
平衡性效果较好，插入和删除结点时需要的操作较少
## 什么时候转成红黑树
HashMap中链表长度超过8

## HashMap和HashSet有什么关系？用HashMap实现HashSet该怎么做？
HashSet的底层就是HashMap，可以说HashSet就是简化版的HashMap。只要不存value，只存key，HashMap就变成了HashSet
## int 和 Integer区别，为什么有Integer缓冲池？
1. Integer是int的包装类；int是基本数据类型； 
2. Integer变量必须实例化后才能使用；int变量不需要； 
3. Integer实际是对象的引用，指向此new的Integer对象；int是直接存储数据值 ； 
4. Integer的默认值是null；int的默认值是0。

## HashMap和Hashtable区别
Hashtable的实现方法里面都添加了synchronized关键字来确保线程同步，因此HashMap线程不安全而Hashtable线程安全，相对而言HashMasp性能会高一些，我们平时使用时若无特殊需求建议使用HashMap，在多线程环境下若使用HashMap需要使用Collections.synchronizedMap()方法来获取一个线程安全的集合
HashMap中key和value都允许为null。key为null的键值对永远都放在以table[0]为头结点的链表中。
Hashtable中，key和value都是对象，并且不能包含重复key，但可以包含重复的value，key和value都不允许出现null值。但是如果在Hashtable中有类似put(null,null)的操作，编译同样可以通过，因为key和value都是Object类型，但运行时会抛出NullPointerException异常，
两者计算hash的方法不同
Hashtable计算hash是直接使用key的hashcode对table数组的长度直接进行取模
HashMap计算hash对key的hashcode进行了二次hash，以获得更好的散列值，然后对table数组长度取摸。
HashMap Hashtable实现了Serializable接口，它支持序列化，实现了Cloneable接口，能被克隆。

## hashcode有什么作用？equals和hashcode什么关系？
hashCode() 的作用是获取哈希码，也称为散列码；它实际上是返回一个int整数。这个哈希码的作用是确定该对象在哈希表中的索引位置。用于HashMap和HashSet计算存储位置。

equals它的作用也是判断两个对象是否相等，如果对象重写了equals()方法，比较两个对象的内容是否相等；如果没有重写，比较两个对象的地址是否相同，价于“==”。同样的，equals()定义在JDK的Object.java中，这就意味着Java中的任何类都包含有equals()函数。

如果两个对象相等，那么它们的hashCode()值一定相同。这里的相等是指，通过equals()比较两个对象时返回true。

如果两个对象hashCode()相等，它们并不一定相等。因为在散列表中，hashCode()相等，即两个键值对的哈希值相等。然而哈希值相等，并不一定能得出键值对相等，此时就出现所谓的哈希冲突场景。

## HashMap和ConcurrentHashMap区别
Hashtable的synchronized是针对整张Hash表的，即每次锁住整张表让线程独占，ConcurrentHashMap允许多个修改操作并发进行，其关键在于使用了锁分段技术。

锁分段技术：首先将数据分成一段一段的存储，然后给每一段数据配一把锁，当一个线程占用锁访问其中一个段数据的时候，其他段的数据也能被其他线程访问。 

ConcurrentHashMap提供了与Hashtable和SynchronizedMap不同的锁机制。Hashtable中采用的锁机制是一次锁住整个hash表，从而在同一时刻只能由一个线程对其进行操作；而ConcurrentHashMap中则是一次锁住一个桶。

ConcurrentHashMap默认将hash表分为16个桶，诸如get、put、remove等常用操作只锁住当前需要用到的桶。这样，原来只能一个线程进入，现在却能同时有16个写线程执行，并发性能的提升是显而易见的。

## 讲一下wait，notify，notifyAll，notify能具体指定唤醒某一个实例吗？为什么是随机唤醒，底层如何实现？
锁池:假设线程A已经拥有了某个对象(注意:不是类)的锁，而其它的线程想要调用这个对象的某个synchronized方法(或者synchronized块)，由于这些线程在进入对象的synchronized方法之前必须先获得该对象的锁的拥有权，但是该对象的锁目前正被线程A拥有，所以这些线程就进入了该对象的锁池中。

等待池:假设一个线程A调用了某个对象的wait()方法，线程A就会释放该对象的锁，之后进入到了该对象的等待池中

如果线程调用了对象的 wait()方法，那么线程便会处于该对象的等待池中，等待池中的线程不会去竞争该对象的锁。

当有线程调用了对象的 notifyAll()方法（唤醒所有 wait 线程）或 notify()方法（只随机唤醒一个 wait 线程），被唤醒的的线程便会进入该对象的锁池中，锁池中的线程会去竞争该对象锁。也就是说，调用了notify后只要一个线程会由等待池进入锁池，而notifyAll会将该对象等待池内的所有线程移动到锁池中，等待锁竞争

优先级高的线程竞争到对象锁的概率大，假若某线程没有竞争到该对象锁，它还会留在锁池中，唯有线程再次调用 wait()方法，它才会重新回到等待池中。而竞争到对象锁的线程则继续往下执行，直到执行完了 synchronized 代码块，它会释放掉该对象锁，这时锁池中的线程会继续竞争该对象锁。

## Java的值传递
把实参对象引用的地址当做值传递给了形式参数。在方法中，并没有对形参本身进行修改，而是修改的形参持有的地址中存储的内容。对象类型本身不存储具体内容，而是存储一个地址，这个地址指向的空间内存储对象的具体内容。在调用函数时，传递的是对象存储的地址。

## 讲一下Exception和Error
Exception是java程序运行中可预料的异常情况，咱们可以获取到这种异常，并且对这种异常进行业务外的处理。

Error是java程序运行中不可预料的异常情况，这种异常发生以后，会直接导致JVM不可处理或者不可恢复的情况。所以这种异常不可能抓取到，比如OutOfMemoryError、NoClassDefFoundError等。


## 解释IOC，AOP


## SpringMVC处理流程，拦截请求怎么实现？

## springboot的优点，配置文件有什么类型

## AVL特点原理，红黑树特点原理
### AVL
左子树和右子树的高度之差不超过1.通过旋转来保持平衡

### 红黑树

## final、finally、finallize区别

## JVM内存模型
JVM内存空间分为五部分，分别是：方法区、堆、Java虚拟机栈、本地方法栈、程序计数器

### 方法区
主要用来存放类信息、类的静态变量、常量、运行时常量池等，方法区的大小是可以动态扩展的

### 堆
主要存放的是类的实例对象

### Java虚拟机栈
Java虚拟机栈是描述JAVA方法运行过程的内存模型，Java虚拟机栈会为每一个即将执行的方法创建一个叫做“栈帧”的区域，该区域用来存储该方法运行时需要的一些信息，包括：局部变量表、操作数栈、动态链接、方法返回地址等。

### 本地方法栈
本地方法栈结构上和Java虚拟机栈一样，只不过Java虚拟机栈是运行Java方法的区域，而本地方法栈是运行本地方法的内存模型。

### 程序计数器
程序计数器是一个比较小的内存空间，用来记录当前线程正在执行的那一条字节码指令的地址。

## 内存泄漏
在内存对象明明已经不需要的时候，还仍然保留着这块内存和它的访问方式（引用）

## 垃圾回收
java的垃圾回收是自动化的，但是可控性很差，甚至有时会出现内存溢出的情况，
内存溢出也就是jvm分配的内存中对象过多，超出了最大可分配内存的大小。

### System.gc()

System.gc()用于调用垃圾收集器，在调用时，垃圾收集器将运行以回收未使用的内存空间。它将尝试释放被丢弃对象占用的内存。

然而System.gc（）调用附带一个免责声明，无法保证对垃圾收集器的调用。就是执行时不一定会执行垃圾回收。

所以System.gc()并不能说是完美主动进行了垃圾回收。

### jvm怎么确定哪些对象应该进行回收
对象是否会被回收的两个经典算法：引用计数法，和可达性分析算法
#### 引用计数法
简单的来说就是判断对象的引用数量。实现方式：给对象共添加一个引用计数器，每当有引用对他进行引用时，计数器的值就加1，当引用失效，也就是不在执行此对象是，他的计数器的值就减1，若某一个对象的计数器的值为0，那么表示这个对象没有人对他进行引用，也就是意味着是一个失效的垃圾对象，就会被gc进行回收。

但是这种简单的算法在当前的jvm中并没有采用，原因是他并不能解决对象之间循环引用的问题

假设有A和B两个对象之间互相引用，也就是说A对象中的一个属性是B，B中的一个属性时A,这种情况下由于他们的相互引用，从而使得垃圾回收机制无法识别。

#### 可达性分析法（根搜索算法）
因为引用计数法的缺点有引入了可达性分析算法，通过判断对象的引用链是否可达来决定对象是否可以被回收。可达性分析算法是从离散数学中的图论引入的，程序把所有的引用关系看作一张图，通过一系列的名为GC Roots的对象作为起始点，从这些节点开始向下搜索，搜索所走过的路径称为引用链。当一个对象到 GC Roots 没有任何引用链相连（就是从 GC Roots 到这个对象不可达）时，则证明此对象是不可用的。

### 在确定了哪些对象可以被回收之后，jvm会在什么时候进行回收
1. 会在cpu空闲的时候自动进行回收
2. 在堆内存存储满了之后
3. 主动调用System.gc()后尝试进行回收（不一定）

### 找到垃圾后，具体使用的内存回收算法
#### 标记-清除算法
最基础的GC算法，将需要进行回收的对象做标记，之后扫描，有标记的进行回收，这样就产生两个步骤：标记和清除。这个算法效率不高，而且在清理完成后会产生内存碎片，这样，如果有大对象需要连续的内存空间时，还需要进行碎片整理，所以，此算法需要改进。

#### 复制算法
将原有的内存空间分为两块，每次只使用其中一块，在垃圾回收时，将正在使用的内存中的存活对象复制到未使用的内存块中，之后，清除正在使用的内存块中的所有对象，交换两个内存的角色，完成垃圾回收。这种算法的代价是将内存缩小为原来的一半。

#### 标记-压缩算法
和标记-清楚算法前半段一样，只是在标记了不需要进行回收的对象后，将标记过的对象移动到一起，使得内存连续。

#### 分代收集算法
那么现在的重点就是分代收集算法中说的自动根据具体场景进行选择

场景其实指的是针对jvm的哪一个区域，1.7之前jvm把内存分为三个区域:新生代，老生代，永久代。

在新生代中，每次垃圾收集时都发现有大批对象死去，只有少量存活，那就选用复制算法。只需要付出少量存活对象的复制成本就可以完成收集。

老生代中因为对象存活率高、没有额外空间对他进行分配担保，就必须用标记-清除或者标记-整理。
## 注解原理

## Java类加载流程
类加载的过程主要分为三个部分：

* 加载
* 链接
* 初始化

而链接又可以细分为三个小部分：

* 验证
* 准备
* 解析

### 加载
简单来说，加载指的是把class字节码文件从各个来源通过类加载器装载入内存中。

### 验证
主要是为了保证加载进来的字节流符合虚拟机规范，不会造成安全错误。

### 准备
主要是为类变量（注意，不是实例变量）分配内存，并且赋予初值。

### 解析
将常量池内的符号引用替换为直接引用的过程。


### java线程有哪些状态
创建状态（New）、就绪状态（Runnable）、运行状态（Running）、阻塞状态（Blocked）、死亡状态（Dead）。

## notify notifyall区别
notify随机唤醒一个线程。notifyall唤醒全部进程。

## SOLID设计原则
### [S] Single Responsibility Principle (单一功能原则)

单一功能原则 ：单一功能原则 认为对象应该仅具有一种单一功能的概念。

换句话说就是让一个类只做一种类型责任，当这个类需要承担其他类型的责任的时候，就需要分解这个类。

### [O] Open Close Principle （开闭原则）

开闭原则(ocp) 认为“软件体应该是对于扩展开放的，但是对于修改封闭的”的概念。

软件实体应该是可扩展，而不可修改的。也就是说，对扩展是开放的，而对修改是封闭的。这个原则是诸多面向对象编程原则中最抽象、最难理解的一个。
### [L] Liskov Substitution Principle（里氏替换原则）
里氏替换原则 ：里氏替换原则 认为“程序中的对象应该是可以在不改变程序正确性的前提下被它的子类所替换的”的概念。

软件工程大师Robert C. Martin把里氏替换原则最终简化为一句话：“Subtypes must be substitutable for their base types”。也就是，子类必须能够替换成它们的基类。即：子类应该可以替换任何基类能够出现的地方，并且经过替换以后，代码还能正常工作。另外，不应该 在代码中出现if/else之类对子类类型进行判断的条件。里氏替换原则LSP是使代码符合开闭原则的一个重要保证。

### [I] Interface Segregation Principle（接口隔离原则）
接口隔离原则 ：接口隔离原则 认为“多个特定客户端接口要好于一个宽泛用途的接口”的概念。 

### [D] Dependency Inversion Principle（依赖反转原则）
依赖反转原则： 依赖反转原则 认为一个方法应该遵从“依赖于抽象而不是一个实例” 的概念。依赖注入是该原则的一种实现方式。

依赖倒置原则(Dependency Inversion Principle，DIP)规定：代码应当取决于抽象概念，而不是具体实现。

### 合成复用原则
尽量使用组合而不是继承

## 连接数据库步骤
原生的jdbc操作数据库流程：
1. 注册驱动程序：Class.forName(“com.mysql.jdbc.Driver”);
2. 创建一个连接对象：conn = DriverManager.getConnection(…);
3. 新建Statement获取数据库操作对象：Statement stmt = conn.createStatement();
4. 定义操作的SQL语句
5. 执行SQL：stmt.executeQuery(sql);
6. 处理结果集：ResultSet
7. 关闭对象，回收数据库资源（关闭结果集–>关闭数据库操作对象–>关闭连接）

## static关键字的作用
static是一个修饰符，用于修饰类的成员方法、类的成员变量，另外可以编写static代码块来优化程序性能。

### static 可以修饰内部类
但是不能修饰普通类。静态内部类的话可以直接调用静态构造器（不用对象）

Student类有个叫School的内部类（非静态）
Student stu = new Student();
stu.School sch = new stu.School();
sch就是School的一个对象。

 

假如School是内部静态类：
Student.School sch = new Student.School();

### static修饰成员方法
static修饰的方法一般称作静态方法，它是属于类的，不需要实例化一个对象就可以直接通过类名加方法名调用

多用于工具类，比如Arrays.sort用于数组排序
### static修饰成员变量
static修饰的变量也称为静态变量，静态变量和非静态变量的区别是：静态变量被所有对象共享，在内存中只有一个副本，它当且仅当在类初次加载时会被初始化。
### 修饰代码块
只会在类加载的时候执行一次。
用来形成静态代码块以优化程序性能

## Final
**final可用于声明属性、方法和类，分别表示属性不可变，方法不可重写，类不可继承。**

final关键字用法

修饰类
当用final去修饰一个类的时候，表示这个类不能被继承。
注意：
a. 被final修饰的类，final类中的成员变量可以根据自己的实际需要设计为fianl。
b. final类中的成员方法都会被隐式的指定为final方法。
说明：
在自己设计一个类的时候，要想好这个类将来是否会被继承，如果可以被继承，则该类不能使用fianl修饰，在这里呢，一般来说工具类我们往往都会设计成为一个fianl类。在JDK中，被设计为final类的有String、System等。
代码：

2. 修饰方法

被final修饰的方法不能被重写。

注意：

a. 一个类的private方法会隐式的被指定为final方法。

b. 如果父类中有final修饰的方法，那么子类不能去重写。

3. 修饰成员变量

注意：

a. 必须初始化值。

b. 被fianl修饰的成员变量赋值，有两种方式：1、直接赋值 2、全部在构造方法中赋初值。

c. 如果修饰的成员变量是基本类型，则表示这个变量的值不能改变。

d. 如果修饰的成员变量是一个引用类型，则是说这个引用的地址的值不能修改，但是这个引用所指向的对象里面的内容还是可以改变的。

## 拆箱装箱
装箱就是将基本数据类型转换为引用类型；拆箱就是将引用类型转换为基本数据类型。

### 拆箱装箱的问题
性能损失

Java的自动拆装箱发生在编译期，即javac编译的那一刻，而不是在运行期

## Java作用域
1. public：public表明该数据成员、成员函数是对所有用户开放的，所有用户都可以直接进行调用，在程序的任何其它地方访问。

2. protected：子类和同个包内的类可以访问

3. default（默认）：同一包中的类可以访问，声明时没有加修饰符，认为是friendly。

4. private：private表示私有，私有的意思就是除了class自己之外，任何人都不可以直接使用，私有财产神圣不可侵犯嘛，即便是子女，朋友，都不可以使用。和public相反，加上这个修饰的属性和方法，只允许在自己本身这个类里访问，程序的任何其它地方都不能访问 

## 抽象类和接口
* 抽象类要被子类继承，接口要被类实现。

* 接口只能定义抽象方法不能实现方法(Java 8 开始接口方法可以有默认实现），抽象类既可以定义抽象方法，也可以实现方法

* 一个类实现接口的话要实现接口的所有方法，而抽象类不一定。

* 接口里定义的变量只能是公共的静态的常量，即public final类型，必须在声明时初始化，抽象类中不一定

* 一个类可以实现多个接口，但最多只能实现一个抽象类

* 接口强调的是功能，是一种行为的规范；抽象类强调的是所属关系，是一种模板设计。

## 为什么要用迭代器？
迭代器的好处是它是一个接口，这样你只用用接口约定的方法调用就可以迭代，以后如果被迭代的对象可以改变类型，如果考虑以后可能改变类型用迭代器会灵活点
Iterator模式是用于遍历集合类的标准访问方法。它可以把访问逻辑从不同类型的集合类中抽象出来，从而避免向客户端暴露集合的内部结构。遍历容器中的每个对象而不用考虑容器中对象的个数，而且保护数据不显示的表现出来。

迭代器统一了对容器的访问方式。迭代器是一个对象，它的工作是遍历并选择序列中的对象，而客户端程序员不必知道或关心该序列底层的结构。

## Java容器详解
Collection
![容器](images/Collection.png)
* List
    * LinkedList
    * Vector
        * Stack
    线程安全
    * ArrayList
    线程不安全
* Map
    * TreeMap
    * HashMap
    线程不安全
    * Hashtable
    线程不安全
* Set
    * TreeSet
    * HashSet
* Queue
    * LinkedList
    * PriorityQueue

## final finally finalize
final: 常量声明。 finally: 处理异常。 finalize: 帮助进行垃圾回收。

接口里声明的变量默认是final的。final类无法继承，也就是没有子类。这么做是出于基础类型的安全考虑，比如String和Integer。这样也使得编译器进行一些优化，更容易保证线程的安全性。final方法无法重写。final变量的值不能改变。finalize()方法在一个对象被销毁和回收前会被调用。finally,通常用于异常处理，不管有没有异常被抛出都会执行到。比如，关闭连接通常放到finally块中完成。

## 栈的应用
1. 递归运算存储每一层结果并返回上一层
2. 匹配括号
3. 计算后缀表达式

## Java中实现多线程的方式

1.  继承Thread类
```java
public class ThreadTest {

    public static void main(String[] args){
        new MyThread().start();
        new MyThread().start();
        new MyThread().start();
        new MyThread().start();
    }
    
    //也可以把类写在外边
    public static class MyThread extends Thread{
        private int tickets=100;
        public void run() {
            while(tickets>0){
                System.out.println(this.getName()+"卖出第【"+tickets--+"】张火车票");
            }
        }
    }
}
```

2. 实现Runnable接口
```java
/**
 * 使用Runnable接口模拟4个售票窗口共同卖100张火车票的程序
 */
public class RunnableTest {

    public static void main(String[] args) {
        Runnable runnable=new MyThread();
        new Thread(runnable).start();
        new Thread(runnable).start();
        new Thread(runnable).start();
        new Thread(runnable).start();
    }
    
    public static class MyThread implements Runnable{
        private int tickets=100;
        public void run() {
            while(tickets>0){
                System.out.println(Thread.currentThread().getName()+"卖出第【"+tickets--+"】张火车票");
            }
        }
    }
}
```

3. 实现Callable接口，重写call方法（有返回值）
自定义类实现Callable接口时，必须指定泛型，该泛型即返回值的类型

每次创建一个新的线程，都要创建一个新的Callable接口的实现类、

如何启动线程？

（1）创建一个Callable接口的实现类的对象

（2）创建一个FutureTask对象，传入Callable类型的参数

public FutureTask(Callable<V> callable){……}
（3）调用Thread类重载的参数为Runnable的构造器创建Thread对象

将FutureTask作为参数传递

public class FutureTask<V> implements RunnableFuture<V>

　　　　　　　　public interface RunnableFuture<V> extends Runnable, Future<V>

如何获取返回值？

调用FutureTask类的get()方法
```java
public class MyThread {

    public static void main(String ards[]) throws InterruptedException, ExecutionException{

        for(int i=0;i<10;i++){
            Callable<Integer> implCallable = new ImplCallable();
            FutureTask<Integer> futureTask = new FutureTask<Integer>(implCallable);
            new Thread(futureTask).start();
            System.out.println(Thread.currentThread().getName()+"----"+futureTask.get());
        }

        System.out.println(Thread.currentThread().getName());
    }
    
}

class ImplCallable implements Callable<Integer>{

    @Override
    public Integer call() throws Exception {
        int result = 0;
        for(int i=0;i<10;i++){
            result += i;
        }
        System.out.println(Thread.currentThread().getName());
        return result;
    }

}
```
4. 使用线程池（有返回值）

### start和run方法的区别

1. start：

用 start方法来启动线程，真正实现了多线程运行，这时无需等待run方法体代码执行完毕而直接继续执行下面的代码。通过调用Thread类的 start()方法来启动一个线程，这时此线程处于就绪（可运行）状态，并没有运行，一旦得到cpu时间片，就开始执行run()方法，这里方法 run()称为线程体，它包含了要执行的这个线程的内容，Run方法运行结束，此线程随即终止。

2. run：

run() 方法只是类的一个普通方法而已，如果直接调用Run方法，程序中依然只有主线程这一个线程，其程序执行路径还是只有一条，还是要顺序执行，还是要等待 run方法体执行完毕后才可继续执行下面的代码，这样就没有达到写线程的目的。总结：调用start方法方可启动线程，而run方法只是thread的一 个普通方法调用，还是在主线程里执行。这两个方法应该都比较熟悉，把需要并行处理的代码放在run()方法中，start()方法启动线程将自动调用 run()方法，这是由jvm的内存机制规定的。并且run()方法必须是public访问权限，返回值类型为void.。

## Java标识符
Java 中标识符是为方法、变量或其他用户定义项所定义的名称。标识符可以有一个或多个字符。在 Java 语言中，标识符的构成规则如下：

标识符由数字（0~9）和字母（A~Z 和 a~z）、美元符号（$）、下划线（_）以及 Unicode 字符集中符号大于 0xC0 的所有符号组合构成（各符号之间没有空格）

标识符的第一个符号为字母、下划线和美元符号，后面可以是任何字母、数字、美元符号或下划线（第一个符号不能是数字）。

## Java关键字
Java 语言目前定义了 51 个关键字，这些关键字不能作为变量名、类名和方法名来使用。以下对这些关键字进行了分类。
* 数据类型：boolean、int、long、short、byte、float、double、char、class、interface。
* 流程控制：if、else、do、while、for、switch、case、default、break、continue、return、try、catch、finally。
* 修饰符：public、protected、private、final、void、static、strict、abstract、transient、synchronized、volatile、native。
* 动作：package、import、throw、throws、extends、implements、this、supper、instanceof、new。
* 保留字：true、false、null、goto、const。

## 字符串比较
先比较长度，长度不同直接干掉。

长度相同再去比较每个字符，一旦有一个不一样的也干掉。

全部比较完成才相等。

## 字符串的定义？
编程语言中表示文本的数据类型

## Volatile
volatile 关键字的作用在于内存可见性（更改变量导致各个线程的变量缓存失效，使其需要从主内存获取新的变量值）、 禁止指令重排序。volatile 关键字并不能保证原子性。适合于修饰状态值，相当于一个轻量级的锁

## ThreadLocal
用来提供线程内的局部变量，这样每个线程都自己管理自己的局部变量，别的线程操作的数据不会对我产生影响，互不影响

## StringTokenizer作用

## Java中创建对象的5种方法
### 1. 使用new关键字
这是最常见也是最简单的创建对象的方式了。通过这种方式，我们可以调用任意的构造函数(无参的和带参数的)。
```java
Employee emp1 = new Employee();
0: new           #19          // class org/programming/mitra/exercises/Employee
3: dup
4: invokespecial #21          // Method org/programming/mitra/exercises/Employee."":()V
```
### 2. 使用Class类的newInstance方法
我们也可以使用Class类的newInstance方法创建对象。这个newInstance方法调用无参的构造函数创建对象。

我们可以通过下面方式调用newInstance方法创建对象:
```java
Employee emp2 = (Employee) Class.forName("org.programming.mitra.exercises.Employee").newInstance();
```
或者
```java
Employee emp2 = Employee.class.newInstance();
51: invokevirtual    #70    // Method java/lang/Class.newInstance:()Ljava/lang/Object;
```
### 3. 使用Constructor类的newInstance方法
和Class类的newInstance方法很像， java.lang.reflect.Constructor类里也有一个newInstance方法可以创建对象。我们可以通过这个newInstance方法调用有参数的和私有的构造函数。
```java
Constructor<Employee> constructor = Employee.class.getConstructor();
Employee emp3 = constructor.newInstance();
111: invokevirtual  #80  // Method java/lang/reflect/Constructor.newInstance:([Ljava/lang/Object;)Ljava/lang/Object;
```
这两种newInstance方法就是大家所说的反射。事实上Class的newInstance方法内部调用Constructor的newInstance方法。这也是众多框架，如Spring、Hibernate、Struts等使用后者的原因。

### 4. 使用clone方法
无论何时我们调用一个对象的clone方法，jvm就会创建一个新的对象，将前面对象的内容全部拷贝进去。用clone方法创建对象并不会调用任何构造函数。

要使用clone方法，我们需要先实现Cloneable接口并实现其定义的clone方法。
```java
Employee emp4 = (Employee) emp3.clone();
162: invokevirtual #87  // Method org/programming/mitra/exercises/Employee.clone ()Ljava/lang/Object;
```
### 5. 使用反序列化
当我们序列化和反序列化一个对象，jvm会给我们创建一个单独的对象。在反序列化时，jvm创建对象并不会调用任何构造函数。

为了反序列化一个对象，我们需要让我们的类实现Serializable接口
```java
ObjectInputStream in = new ObjectInputStream(new FileInputStream("data.obj"));
Employee emp5 = (Employee) in.readObject();
261: invokevirtual  #118   // Method java/io/ObjectInputStream.readObject:()Ljava/lang/Object;
```
我们从上面的字节码片段可以看到，除了第1个方法，其他4个方法全都转变为invokevirtual(创建对象的直接方法)，第一个方法转变为两个调用，new和invokespecial(构造函数调用)。

## Java反射机制
简单来说，反射机制指的是程序在运行时能够获取自身的信息。在java中，只要给定类的名字， 那么就可以通过反射机制来获得类的所有信息。 

### 获取class的三种方法：
#### 1.通过字符串获取Class对象，这个字符串必须带上完整路径名
Class studentClass = Class.forName("com.test.reflection.Student");
#### 2.通过类的class属性
Class studentClass2 = Student.class;
#### 3.通过对象的getClass()函数
Student studentObject = new Student();
Class studentClass3 = studentObject.getClass();

通过这三种方式获取到的 Class 对象是同一个，也就是说 Java 运行时，每一个类只会生成一个 Class 对象。

### 获取成员变量
获取字段有两个 API：getDeclaredFields和getFields。他们的区别是:getDeclaredFields用于获取所有声明的字段，包括公有字段和私有字段，getFields仅用来获取公有字段：

### 获取构造方法
获取构造方法同样包含了两个 API：用于获取所有构造方法的 getDeclaredConstructors和用于获取公有构造方法的getConstructors:

### 获取非构造方法
同样地，获取非构造方法的两个 API 是：获取所有声明的非构造函数的 getDeclaredMethods 和仅获取公有非构造函数的 getMethods：

## 设置堆大小
java –Xmx512m
添加一个名为_JAVA_OPTIONS的系统环境变量，并在那里设置堆大小值

JVM初始分配的内存由-Xms指定，默认是物理内存的1/64
JVM最大分配的内存由-Xmx指定，默认是物理内存的1/4
-Xmn2G：设置年轻代大小为2G。

## 乐观锁和悲观锁
一、定义

1、乐观锁：顾名思义，对每次的数据操作都保持乐观的态度，不担心数据会被修改，所以不会对数据进行上锁。由于数据没有上锁，这就存在数据会被多人读写的情况。所以每次修改数据的时候需要对数据进行判断是否被修改过。

2、悲观锁：与乐观锁相反，对每次的数据操作都保存悲观的态度，总是担心数据会被修改，所以在自己操作的时候会对数据上锁，防止在自己操作的时候被他人同时操作导致更新丢失。

二、使用场景

1、乐观锁：由于乐观锁的不上锁特性，所以在性能方面要比悲观锁好，比较适合用在DB的读大于写的业务场景。

2、悲观锁：对于每一次数据修改都要上锁，如果在DB读取需要比较大的情况下有线程在执行数据修改操作会导致读操作全部被挂载起来，等修改线程释放了锁才能读到数据，体验极差。所以比较适合用在DB写大于读的情况。
## 自旋锁
自旋锁原理非常简单，如果持有锁的线程能在很短时间内释放锁资源，那么那些等待竞争锁的线程就不需要做内核态和用户态之间的切换进入阻塞挂起状态，它们只需要等一等（自旋），等持有锁的线程释放锁后即可立即获取锁，这样就避免用户线程和内核的切换的消耗。

但是线程自旋是需要消耗cpu的，说白了就是让cpu在做无用功，如果一直获取不到锁，那线程也不能一直占用cpu自旋做无用功，所以需要设定一个自旋等待的最大时间。

如果持有锁的线程执行的时间超过自旋等待的最大时间扔没有释放锁，就会导致其它争用锁的线程在最大等待时间内还是获取不到锁，这时争用线程会停止自旋进入阻塞状态。

### 自旋锁的优缺点
自旋锁尽可能的减少线程的阻塞，这对于锁的竞争不激烈，且占用锁时间非常短的代码块来说性能能大幅度的提升，因为自旋的消耗会小于线程阻塞挂起再唤醒的操作的消耗，这些操作会导致线程发生两次上下文切换！

但是如果锁的竞争激烈，或者持有锁的线程需要长时间占用锁执行同步块，这时候就不适合使用自旋锁了，因为自旋锁在获取锁前一直都是占用cpu做无用功，占着XX不XX，同时有大量线程在竞争一个锁，会导致获取锁的时间很长，线程自旋的消耗大于线程阻塞挂起操作的消耗，其它需要cpu的线程又不能获取到cpu，造成cpu的浪费。所以这种情况下我们要关闭自旋锁；

## 偏向锁
Java偏向锁(Biased Locking)是Java6引入的一项多线程优化。 
偏向锁，顾名思义，它会偏向于第一个访问锁的线程，如果在运行过程中，同步锁只有一个线程访问，不存在多线程争用的情况，则线程是不需要触发同步的，这种情况下，就会给线程加一个偏向锁。 
如果在运行过程中，遇到了其他线程抢占锁，则持有偏向锁的线程会被挂起，JVM会消除它身上的偏向锁，将锁恢复到标准的轻量级锁。

它通过消除资源无竞争情况下的同步原语，进一步提高了程序的运行性能。
### 偏向锁的适用场景
始终只有一个线程在执行同步块，在它没有执行完释放锁之前，没有其它线程去执行同步块，在锁无竞争的情况下使用

## String是否可变？为什么不可变
String类中采用final关键字修饰字符数组来保存字符串

String类的两个主要成员变量，其中value指向的是一个字符串数组，字符串中的字符就是用这个value变量存储起来的，并且用final修饰，也就是说value一旦赋予初始值之后，value指向的地址就不能再改变了。虽然value指向的数组是可以改变的，但是String也没有提供相应的方法让我们去修改value指向的数组的元素。

String中提供了一些看似可以改变String对象的方法，但实际上它们已经是指向了一个新建的对象。

目的：
1. 为了实现字符串池
只有当字符串是不可变的，字符串池才有可能实现。字符串池的实现可以在运行时节约很多heap空间，因为不同的字符串变量都指向池中的同一个字符串。但如果字符串是可变的，那么String interning将不能实现，因为这样的话，如果变量改变了它的值，那么其它指向这个值的变量的值也会一起改变。

2. 为了线程安全
因为字符串是不可变的，所以是多线程安全的，同一个字符串实例可以被多个线程共享。这样便不用因为线程安全问题而使用同步。字符串自己便是线程安全的。

3. 为了实现String可以创建HashCode不可变性
 因为字符串是不可变的，所以在它创建的时候HashCode就被缓存了，不需要重新计算。这就使得字符串很适合作为Map中的键，字符串的处理速度要快过其它的键对象。这就是HashMap中的键往往都使用字符串。

## Servlet生命周期简述
1. 加载和实例化

当Servlet容器启动或客户端发送一个请求时，Servlet容器会查找内存中是否存在该Servlet实例，若存在，则直接读取该实例响应请求；如果不存在，就创建一个Servlet实例。

2. 初始化

实例化后，Servlet容器将调用Servlet的init()方法进行初始化（一些准备工作或资源预加载工作）。

3. 服务

初始化后，Servlet处于能响应请求的就绪状态。当接收到客户端请求时，调用service()的方法处理客户端请求，HttpServlet的service()方法会根据不同的请求 转调不同的doXxx()方法。

4. 销毁

当Servlet容器关闭时，Servlet实例也随时销毁。其间，Servlet容器会调用Servlet 的destroy()方法去判断该Servlet是否应当被释放（或回收资源）。

## Object类中有哪些方法
* getClass()    //返回此 Object 的运行类。
* hashCode()    //用于获取对象的哈希值。
* equals(Object obj)     //用于确认两个对象是否“相同”。
* clone()    //创建并返回此对象的一个副本。 
* toString()   //返回该对象的字符串表示。   
* notify()    //唤醒在此对象监视器上等待的单个线程。   
* notifyAll()     //唤醒在此对象监视器上等待的所有线程。   
* wait()    //用于让当前线程失去操作权限，当前线程进入等待序列。
* finalize()    //当垃圾回收器确定不存在对该对象的更多引用时，由对象的垃圾回收器调用此方法。

## 浅拷贝和深拷贝的区别
### 浅拷贝
被复制对象的所有变量都含有与原来的对象相同的值，而所有的对其他对象的引用仍然指向原来的对象。即对象的浅拷贝会对“主”对象进行拷贝，但不会复制主对象里面的对象。”里面的对象“会在原来的对象和它的副本之间共享。

简而言之，浅拷贝仅仅复制所考虑的对象，而不复制它所引用的对象
![浅拷贝](images/浅拷贝.png)
### 深拷贝
深拷贝是一个整个独立的对象拷贝，深拷贝会拷贝所有的属性,并拷贝属性指向的动态分配的内存。当对象和它所引用的对象一起拷贝时即发生深拷贝。深拷贝相比于浅拷贝速度较慢并且花销较大。

简而言之，深拷贝把要复制的对象所引用的对象都复制了一遍。
![深拷贝](images/深拷贝.png)

## 静态内部类和普通内部类的区别
### 内部类 ：

内部类中的变量和方法不能声明为静态的。（非静态内部类只有在实例化外部类的时候才会加载，如果内部类有静态变量的话，导致可以通过 Out.Inner.static 访问到该内部类的静态变量，但此时内部类还未被加载）
内部类实例化：B 是 A 的内部类，实例化 B：A.B b = new A().new B()。
内部类可以引用外部类的静态或者非静态属性及方法。（因为内部类实例化的话，外部类必然已经实例化）
### 静态内部类 ：

静态内部类属性和方法可以声明为静态的或者非静态的。
实例化静态内部类：B 是 A 的静态内部类，A.B b = new A.B()。
静态内部类只能引用外部类的静态的属性及方法。（因为引用外部类中的属性时，外部类未必实例化了）

### 内部类可以引用外部类的成员吗？
普通内部类的话可以引用。静态内部类的话只能引用外部类的静态变量。

## 类中代码执行顺序
父类静态代码块 ->子类静态代码块 ->父类非静态代码块 -> 父类构造函数 -> 子类非静态代码块 -> 子类构造函数。

## BIO NIO AIO
Java NIO的非阻塞模式，使一个线程从某通道发送请求读取数据，但是它仅能得到目前可用的数据，如果目前没有数据可用时，就什么都不会获取，而不是保持线程阻塞，所以直至数据变的可以读取之前，该线程可以继续做其他的事情。 非阻塞写也是如此，一个线程请求写入一些数据到某通道，但不需要等待它完全写入，这个线程同时可以去做别的事情。
NIO是可以做到用一个线程来处理多个操作的。假设有10000个请求过来,根据实际情况，可以分配50或者100个线程来处理。不像之前的阻塞IO那样，非得分配10000个。


BIO （Blocking I/O）：同步阻塞I/O模式，数据的读取写入必须阻塞在一个线程内等待其完成。这里使用那个经典的烧开水例子，这里假设一个烧开水的场景，有一排水壶在烧开水，BIO的工作模式就是， 叫一个线程停留在一个水壶那，直到这个水壶烧开，才去处理下一个水壶。但是实际上线程在等待水壶烧开的时间段什么都没有做。

NIO （New I/O）：同时支持阻塞与非阻塞模式，但这里我们以其同步非阻塞I/O模式来说明，那么什么叫做同步非阻塞？如果还拿烧开水来说，NIO的做法是叫一个线程不断的轮询每个水壶的状态，看看是否有水壶的状态发生了改变，从而进行下一步的操作。

AIO （ Asynchronous I/O）：异步非阻塞I/O模型。异步非阻塞与同步非阻塞的区别在哪里？异步非阻塞无需一个线程去轮询所有IO操作的状态改变，在相应的状态改变后，系统会通知对应的线程来处理。对应到烧开水中就是，为每个水壶上面装了一个开关，水烧开之后，水壶会自动通知我水烧开了。

### 同步和异步的区别
同步：比如发送一个请求，需要等待返回，然后才能发送下一个请求，中间有等待过程。

异步：指发送一个请求，不需要等待返回，随时可以再发送下一个请求，即不需要等待。

场景需求： 同步可以避免读脏数据的发生。一般共享某一资源的时候用，如果每个人都有修改权限，当A删除了一个文件时，B又去访问该文件，就会出错，应该使用同步机制。比如银行的转账系统，数据库的保存操作等就需要同步了。

### NIO的三个主要组成部分
#### Buffer
缓冲区实际上是一个容器对象，更直接的说，其实就是一个数组，在NIO库中，所有数据都是用缓冲区处理的。Buffer既可以读页可以写。在读取数据时，它是直接读到缓冲区中的； 在写入数据时，它也是写入到缓冲区中的；任何时候访问 NIO 中的数据，都是将它放到缓冲区中。而在面向流I/O系统中，所有数据都是直接写入或者直接将数据读取到Stream对象中。

在NIO中，所有的缓冲区类型都继承于抽象类Buffer，最常用的就是ByteBuffer，对于Java中的基本类型，基本都有一个具体Buffer类型与之相对应。

flip()方法将 Buffer 从写模式切换到读模式
#### Channel
通道是一个对象，通过它可以读取和写入数据，当然了所有数据都通过Buffer对象来处理。我们永远不会将字节直接写入通道中，相反是将数据写入包含一个或者多个字节的缓冲区。同样不会直接从通道中读取字节，而是将数据从通道读入缓冲区，再从缓冲区获取这个字节。
#### Selector
Selector（选择器）是Java NIO中能够检测一到多个NIO通道，并能够知晓通道是否为诸如读写事件做好准备的组件。这样，一个单独的线程可以管理多个channel，从而管理多个网络连接。 Channel 可以向 Selector 注册监听四种不同类型的事件：

1. Connect
2. Accept
3. Read
4. Write

一旦向 Selector 注册了一或多个通道，就可以调用几个重载的 select() 方法。这些方法返回你所感兴趣的事件（如连接、接受、读或写）已经准备就绪的那些通道。换句话说，如果你对“读就绪”的通道感兴趣， select() 方法会返回读事件已经就绪的那些通道。
## Java序列化
序列化：把 Java 对象转换为字节序列的过程。
反序列化：把字节序列恢复为 Java 对象的过程。
用途：把对象的字节序列持久化到硬盘上或者在网络上传输。
序列化的实现：将需要被序列化的类实现 Serializable 接口，
该接口没有需要实现的方法。Serializable 只是标注该对象是可被序列化的，
然后使用一个输出流(如：FileOutputStream 或者 ByteArrayOutputStream)来构造一个 ObjectOutputStream(对象流)对象，接着，使用 ObjectOutputStream 对象的 writeObject(Object obj)方法就可以将参数为 obj 的对象写出(即保存其状态)，要恢复的话则用输入流。

其好处一是实现了数据的持久化，通过序列化可以把数据永久地保存到硬盘上（通常存放在文件里），
二是，利用序列化实现远程通信，即在网络上传送对象的字节序列。
当序列化 ID 不一致时，会导致序列化失败。

## maven命令
mvn compile 编译源代码
mvn clean 清楚产生的项目
mvn package 打包
mvn install  在本地Repository中安装jar