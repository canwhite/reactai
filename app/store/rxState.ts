// rxjsStore.ts
import { BehaviorSubject } from 'rxjs';

const dataSubject = new BehaviorSubject<string>("");

//箭头函数是当变量使
export const setData = (value: string) => {
  console.log("--value--", value); // Log the value being set
  dataSubject.next(value);
};
// asObservable() 用于将 BehaviorSubject 转换为只读的 Observable
// 这样可以保护数据源不被外部直接修改，确保数据只能通过 setData 方法更新
// 同时提供了一种更安全的观察数据变化的方式
export const data$ = dataSubject.asObservable();

// 订阅 dataSubject 的变化，每次数据更新时打印到控制台
data$.subscribe((value) => {
  console.log("rxState data updated:", value);
});
