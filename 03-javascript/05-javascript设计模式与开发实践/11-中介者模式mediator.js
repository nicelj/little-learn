/***
 * 中介者模式: 用来解除对象与对象之间的紧耦合关系。
 * 所有的对象都通过中介者来和其他对象通信,而不是互相引用,当一个对象发生改变时,只需要通知中介者即可。
 *
 * 现实中的中介者:
 * 1. 机场指挥塔: 负责调度和联系不同的飞机之间的关系
 * 2. 彩票公司: 彩民与彩民之间的关系统一由彩票公司处理
 * 3. 其他...
 * */

/***
 * 中介者模式可以消除其他对象之间的耦合关系,但是可能会造成中介者和其他所有对象之间的关系十分复杂,
 * 而且中介者会变成一个庞大的对象。开发过程中,对象之间有一定的依赖关系是正常的。
 *
 * 如果对象之间的复杂耦合关系确实导致调用和维护十分复杂和困难,可以考虑使用中介者模式来进行优化重构。
 * */